/**
 * Состояние.
 */


/**
 * Реализация при которой каждое состояние знает о том, в какое следующее состояние переходить.
 * Инициатор смены состояния - контекст и состояние.
 * Отличия от паттерна "Стратегия" в том, что контекст и состояния знают друг о друге.
 */
abstract class State {
    private name: string;
    private context: IOrder | null = null;

    constructor(name: string) {
        this.name = name;
    }

    public setContext(context: IOrder): void {
        this.context = context;
    }

    /**
     * Реализация логики в зависимости от состояния.
     */
    public purchase(): string {
        return `Purchase from state: ${this.name}`;
    }

    /**
     * Каждое состояние может само инициировать смену состояния.
     */
    private setState(newState: State) {
        if (this.context) {
            this.context.setState(newState);
        }
    }
}

// Каждое состояние само знает какое состояние будет следующим
class PaymentState extends State {
    constructor() {
        super('Payment');
    }
}

class DeliveryState extends State {
    constructor() {
        super('Delivery');
    }
}

class HandingState extends State {
    constructor() {
        super('Handing');
    }
}

export interface IOrder {
    purchase(): string;
    setState(state: State): void;
}

export class Order implements IOrder {
    private state: State;

    constructor(initialState: State) {
        this.state = initialState;
        this.state.setContext(this);
    }

    /**
     * Контекст делегирует выполнение соответствующему состоянию.
     */
    public purchase(): string {
        return this.state.purchase();
    }

    public setState(newState: State): void {
        this.state = newState;
    }
}

const paymentState = new PaymentState();
const deliveryState = new DeliveryState();
const handingState = new HandingState();

const order = new Order(paymentState);
// Purchase from state: Payment
console.log(order.purchase());
order.setState(deliveryState);
// Purchase from state: Delivery
console.log(order.purchase());
order.setState(handingState);
// Purchase from state: Handing
console.log(order.purchase());
