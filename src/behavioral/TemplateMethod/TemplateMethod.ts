/**
 * Шаблонный метод.
 */

export class DataMiner {
    public mine(path: string) {
        const file = this.openFile(path);
        const rawData = this.extractData(file);
        this.closeData(file);
    }

    public openFile(path: string): string {
        return 'fileName';
    }

    public extractData(file: string): void {
    }

    public closeData(file: string): void {
    }
}

class PDFDataMiner extends DataMiner {
    // Тут можно переопределить некоторые методы, если это необходимо
}
