/**
 * Фабрика
 */

type CallbackType = () => void;

// Определяет общий интерфейс объектов
abstract class Button {
    abstract render(): void;
    abstract onClick(callback: CallbackType): void;
}

// Конкретные продукты. Отличаются реализацией, но интерфейс одинаковый
class WindowButton implements Button {
    public render() {
        console.log('Render WindowButton');
    }

    public onClick(windowButtonCallback: CallbackType) {
        windowButtonCallback();
    }
}

class HTMLButton implements Button {
    constructor() {
    }

    public render() {
        console.log('Render HTMLButton');
    }

    public onClick(HTMLButtonCallback: CallbackType) {
        HTMLButtonCallback();
    }
}

abstract class ButtonFabric {
    abstract create(): Button;
}

// Создаем конкретные фабрики на основе ButtonFabric
export class WindowButtonFabric implements ButtonFabric {
    public create(): Button {
        return new WindowButton();
    }
}

export class HTMLButtonFabric implements ButtonFabric {
    public create(): Button {
        return new HTMLButton();
    }
}

const fabric = new HTMLButtonFabric();
const button = fabric.create();

