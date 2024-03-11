/**
 * Шаблонный метод.
 */

/**
 * Абстрактный класс, в котором есть шаблонный метод, этапы которого можно переопределять в потомках
 */
export abstract class CarBuilder {
    public buildCar(): void {
        this.addEngine();
        this.addWheels();
        this.addTransmission();
    }

    private addWheels(): void {
        console.log("Wheels added to the car");
    };

    abstract addEngine(): void;
    abstract addTransmission(): void;
}

class TrackBuilder extends CarBuilder {
    public addEngine() {
        console.log("V12 engine added to the car");
    }

    public addTransmission() {
        console.log("DSG added to the car");
    }
}