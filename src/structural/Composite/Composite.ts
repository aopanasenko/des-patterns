/**
 * Компоновщик
 */

class Graphic {
    public move(x: number, y: number): void {}

    public draw(): void {}
}

// Простой компонент
class Dot extends Graphic {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    public move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }

    public draw() {
        console.log(`Draw a dot in X: ${this.x}, Y: ${this.y}`);
    }
}

class Circle extends Dot {
    private radius: number;

    constructor(
        x: number,
        y: number,
        radius: number
    ) {
        super(x, y);
        this.radius = radius;
    }

    public draw() {
        console.log(`Draw a circle in X: ${this.x}, Y: ${this.y} and radius ${this.radius}`);
    }
}

export class CompoundGraphic extends Graphic {
    protected children: Graphic[];

    constructor(children: Graphic[]) {
        super();
        this.children = children;
    }

    // Добавить компонент в список дочерних
    public add(child: Graphic) {
        this.children.push(child);
    }
    // Убрать компонент из списка дочерних
    public remove(child: Graphic) {}

    public move(x: number, y: number) {
        for (const child of this.children) {
            child.move(x, y);
        }
    }

    public draw() {
        for (const child of this.children) {
            child.draw();
        }
    }
}
