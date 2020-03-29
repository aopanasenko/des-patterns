/**
 * Строитель
 */

class Car {
    public engine: string | undefined;
    public seats: number | undefined;
    public color: string | undefined;

    public beep(): void {
        console.log('Machine beep beep');
    };
}

abstract class Builder {
    abstract reset(): void;
    abstract setEngine(engine: string);
    abstract setSeats(seats: number);
    abstract setColor(color: string);
    abstract getResult(): Car;
}

class CarBuilder extends Builder {
    private car: Car;


    public reset(): void {
        this.car = new Car();
    };

    public setEngine(engine: string) {
        this.car.engine = engine;
    };

    public setSeats(seats: number) {
        this.car.seats = seats;
    };

    public setColor(color: string) {
        this.car.color = color;
    };

    public getResult(): Car {
        return this.car;
    }
}

class Director {
    public constructJeep(builder: Builder) {
        builder.reset();
        builder.setEngine('V8');
        builder.setSeats(5);
        builder.setColor('Black');
    }
}

const jeepBuilder = new CarBuilder();

const director = new Director();
director.constructJeep(jeepBuilder);

jeepBuilder.getResult();


