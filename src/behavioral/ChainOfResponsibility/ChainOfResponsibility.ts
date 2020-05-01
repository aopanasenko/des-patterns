/**
 * Цепочка обязанностей
 */

class Account {
    private incomer;
    private name;

    getDelivery(deliveryDate: string): void {
        if (this.incomer) {
            console.log(`Cannot delivery using ${this.name}`);
            // Делигируем запрос следующему обработчику
            this.incomer.getDelivery(deliveryDate);
        } else {
            console.log('Sorry, we cant deliver your order.');
        }
    }
    // Устанавливаем ссылку на следующий обработчик
    public setNext(deliverySystem): void {
        this.incomer = deliverySystem;
    }
}

class Cdek extends Account {
    private name: string;
    private deliveryDate: string;

    constructor(date: string) {
        super();
        this.name = 'CDEK';
        this.deliveryDate = date;
    }
}

class RussianPost extends Account {
    private name: string;
    private deliveryDate: string;

    constructor(date: string) {
        super();
        this.name = 'Russian Post';
        this.deliveryDate = date;
    }
}
