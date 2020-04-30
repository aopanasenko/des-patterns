/**
 * Легковес (кеш). Вмещает бОльшее количество обьектов в выделенный обьем памяти.
 * Удобнее создавать с помощью фабрик. Фабрика принимает в себя внутренее состояние легковеса.
 * Таким образом можно искать уже созданные легковесы и не создавать повторные данные.
 */

// Легковес. Обычный класс, в котором определяется модель
class House {
    private typeOfHouse: string;

    constructor(type: string) {
        this.typeOfHouse = type;
    }
}

// Фабрика по созданию легковесов
export class HouseFactory {
    // Хранилище легковесов
    private houseModels: Record<string, House>;

    private isModelExist(houseModel: string): boolean {
        return !!this.houseModels[houseModel];
    }

    private getHouseByModelName(houseModel: string): House {
        return this.houseModels[houseModel];
    }

    private addHouse(houseModel: string): void {
        this.houseModels[houseModel] = new House(houseModel);
    }

    constructor(houseName: string) {
        this.houseModels = {};
    }

    public create (houseModel: string): any {
        const isModelExist = this.isModelExist(houseModel);

        if (isModelExist) {
            return this.getHouseByModelName(houseModel);
        }

        this.addHouse(houseModel);
        return this.getHouseByModelName(houseModel);
    }

    public getAllHouses(): Record<string, House> {
        return this.houseModels;
    }
}
