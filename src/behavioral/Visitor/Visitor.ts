/**
 * Посетитель.
 */

interface Visitor {
    exportVisitor(auto: Car): void;
}

interface Car {
    export: any;

    info(): void;
    acceptVisitor(visitor: Visitor): void;
}

class BMW implements Car {
    public export: any;

    public info(): void {
        console.log('BMW car');
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.exportVisitor(this);
    }
}

class Audi implements Car {
    public export: any;

    public info(): void {
        console.log('Audi car');
    }

    public acceptVisitor(visitor: Visitor): void {
        visitor.exportVisitor(this);
    }
}

export class ConcreteVisitor implements Visitor {
    public exportVisitor(auto: Car) {
        if (auto instanceof BMW) {
            auto.export = console.log(`Exported data: ${auto.info()}`)
        }

        if (auto instanceof Audi) {
            auto.export = console.log(`Exported data: ${auto.info()}`)
        }
    }
}

// Add test comment
