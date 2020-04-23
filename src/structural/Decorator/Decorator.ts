/**
 * Декоратор
 */

class DataSource {
    public writeData(data: string): void {}
    public readData(): void {}
};

class FileDataSource extends DataSource {
    protected filename: string;

    constructor(filename: string) {
        super();
        this.filename = filename;
    }

    public writeData(newFilename: string) {
        this.filename = newFilename;
    }

    public readData(): void {
        console.log(this.filename);
    }
}

// Общий декоратор
export class DataSourceDecorator extends DataSource {
    protected wrapper: DataSource;

    constructor(source: DataSource) {
        super();
        this.wrapper = source;
    }


    public writeData(data: string) {
        this.wrapper.writeData(data);
    }

    public readData(): void {
        this.wrapper.readData();
    }
}

// Конкретный декоратор
class CompressionDecorator extends DataSourceDecorator {
    public writeData(data: string) {
        // 1. Запаковать поданные данные.
        // 2. Передать запакованные данные в метод writeData
        // обёрнутого объекта (wrappee).
    }

    public readData(): void {
        // 1. Получить данные из метода readData обёрнутого
        // объекта (wrappee).
        // 2. Распаковать их, если они запакованы.
        // 3. Вернуть результат.
    }
}

// Использование
const source = new FileDataSource('myFilename.dat');
source.writeData('New data');

const newSource = new CompressionDecorator(source);
newSource.writeData('Another data');
