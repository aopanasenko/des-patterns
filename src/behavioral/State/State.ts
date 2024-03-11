/**
 * Состояние.
 */


/**
 * Реализация при которой каждое состояние знает о том, в какое следующее состояние переходить.
 * Инициатор смены состояния - контекст. Он вызывает метод смены состояния из экземпляра State.
 * Состояния создаются по мере их необходимости и не хранятся в памяти все время.
 */
abstract class State {
    private name: string;
    private nextState: new () => State;

    constructor(name: string, nextState: new () => State) {
        this.name = name;
        this.nextState = nextState;
    }

    public getStateName(): string {
        return this.name;
    }

    public setNextState(): State {
        return new this.nextState();
    }
}

// Каждое состояние само знает какое состояние будет следующим
class PaymentState extends State {
    constructor() {
        super('Payment', DeliveryState);
    }
}

class DeliveryState extends State {
    constructor() {
        super('Delivery', HandingState);
    }
}

class HandingState extends State {
    constructor() {
        super('Handing', HandingState);
    }
}

export class Order {
    private state: State;

    constructor() {
        this.state = new PaymentState();
    }

    nextState() {
        this.state = this.state.setNextState();
        console.log(`Move to the next state: ${this.state.getStateName()}`);
    }
}

