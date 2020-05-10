/**
 * Состояние.
 */

class StepStatus {
    private name: string;
    private nextStep: object;

    constructor(name: string, nextStep: object) {
        this.name = name;
        this.nextStep = nextStep;
    }

    public next() {
        return this.nextStep();
    }
}

class Payment extends StepStatus {
    constructor() {
        super('Payment', Delivery);
    }
}

class Delivery extends StepStatus {
    constructor() {
        super('Delivery', Delivery);
    }
}

export class Order {
    private state: Payment | Delivery;

    constructor() {
        this.state = new Payment();
    }

    nextState() {
        this.state = this.state.next();
    }
}
