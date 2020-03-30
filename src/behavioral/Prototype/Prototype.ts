/**
 * Прототип
 */

// Абстрактный прототип
abstract class Protototype {
    private mark: string;
    private model: string;
    private color: string;

    protected constructor(source: Protototype) {
        this.mark = source.mark;
        this.model = source.mark;
        this.color = source.color;
    }

    abstract clone(): Protototype;
}

// Конкретный прототип
export class BMW extends Protototype {
    private price: number;
    private engine: string;

    constructor(source: BMW) {
        super(source);
        this.price = source.price;
        this.engine = source.engine;
    }

    public clone(): Protototype {
        return new BMW(this);
    }
}

