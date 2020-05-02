/**
 * Итератор
 */

interface Iterator<T> {
    // Получаем текущий элемент
    current(): T;
    // Получаем текущий и переходим к следующему
    next(): T;
    // Проверка, есть ли на следующей позиции еще элемент
    hasMore(): boolean;
}

interface IterableCollection {
    createIterator(): Iterator<string>;
}

class ConcreteCollection implements IterableCollection {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getAmountOfItems(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public createIterator(): Iterator<string> {
        return new ConcreteIterator(this);
    }
}

class ConcreteIterator implements Iterator<string> {
    private collection: ConcreteCollection;
    private position: number = 0;

    constructor(collection: ConcreteCollection) {
        this.collection = collection;
    }

    public next(): string {
        const isNextItemExist = this.hasMore();

        if (isNextItemExist) {
            this.position += 1;
            return this.current();
        } else {
            return this.current();
        }
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public hasMore(): boolean {
        return this.position < this.collection.getAmountOfItems();
    }
}
