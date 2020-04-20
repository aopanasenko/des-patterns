/**
 * Адаптер
 */

class RoundHole {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public isCompatibleWithHole(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}

class RoundPeg {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

// Несовместимый интерфейс - квадратная палочка
class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}

/**
 * Адаптер.
 * Целевой класс - RoundPeg.
 * Адаптируемый - SquarePeg
 */
export class SquarePegAdapter extends RoundPeg {
    private adaptee: SquarePeg;

    constructor(adaptee: SquarePeg) {
        super(adaptee.getWidth());
        this.adaptee = adaptee;
    }

    public getRadius() {
        return this.adaptee.getWidth() * Math.sqrt(2) / 2;
    }
}

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
// true
roundHole.isCompatibleWithHole(roundPeg);

const squarePeg = new SquarePeg(10);
// Ошибка компиляции
// roundHole.isCompatibleWithHole(squarePeg);

// Создаем адаптер
const adapter = new SquarePegAdapter(squarePeg);
roundHole.isCompatibleWithHole(adapter);


