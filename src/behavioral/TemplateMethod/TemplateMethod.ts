/**
 * Шаблонный метод.
 */

/**
 * Абстрактный класс, в котором есть шаблонный метод, этапы которого можно переопределять в потомках
 */
export abstract class CarBuilder {
    public buildCar() {
        this.addEngine();
        this.addWheels();
        this.addTransmission();
    }

    private addWheels() {
        console.log("Wheels added to the car");
    };

    abstract addEngine();
    abstract addTransmission();
}

class TrackBuilder extends CarBuilder {
    public addEngine() {
        console.log("V12 engine added to the car");
    }

    public addTransmission() {
        console.log("DSG added to the car");
    }
}