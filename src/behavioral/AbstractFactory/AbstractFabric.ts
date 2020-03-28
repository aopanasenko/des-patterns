/**
 * Абстрактная фабрика
 */

abstract class Car {
    protected mark: string;

    constructor(
        mark: string,
    ) {
        this.mark = mark;
    }

    abstract beep(): void;
    abstract start(): void;
}

class BMW extends Car {
    constructor(mark: string) {
        super(mark);
    }

    public beep() {
        console.log(`${this.mark} beep beep`)
    }

    public start() {
        console.log(`${this.mark} engine start`)
    }
}

class Mercedes extends Car {
    constructor(mark: string) {
        super(mark);
    }

    public beep() {
        console.log(`${this.mark} beep beep`)
    }

    public start() {
        console.log(`${this.mark} engine start`)
    }
}

// Абстрактная фабрика
abstract class AbstractCarFactory {
    abstract createCar(mark: string): Car;
    // etc.
}

class BMWFactory extends AbstractCarFactory {
    createCar(mark: string): Car {
        return new BMW('BMW');
    }
}

class MercedesFactory extends AbstractCarFactory {
    createCar(mark: string): Car {
        return new Mercedes('Mercedes');
    }
}

// Класс использующий абстрактную фабрику
export class MachineIndustry {
    private factory: AbstractCarFactory;
    private machine: Car | undefined;

    constructor(factory: AbstractCarFactory) {
        this.factory = factory;
    }

    // Приложению не важно с какой именно фабрикой он работает
    createMachine(mark: string) {
        this.machine = this.factory.createCar(mark);
    }
}
