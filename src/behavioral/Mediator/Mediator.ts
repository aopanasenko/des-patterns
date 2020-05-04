/**
 * Медиатор (посредник).
 * Обеспечивает взаимодействие различных классов между собой не напрямую, а через класс-посредник
 */

interface Mediator {
    notify(sender: object, event: string): void;
};

interface Component {
    setMediator(mediator: Mediator): void;
}

export class ConcreteMediator implements Mediator {
    private componentA: ComponentA;

    constructor(componentA: ComponentA) {
        this.componentA = componentA;
        this.componentA.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        switch (event) {
            case 'ComponentA': {
                this.componentA.doSomeAction();
            }
            default:
                console.log('Sender not found')
        }
    }
}

class BaseComponent implements Component {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class ComponentA extends BaseComponent {
    public doSomeAction(): void {
        console.log('Do some action from ComponentA');
        this.mediator.notify(this, 'componentA');
    }
}

const componentA = new ComponentA();
const mediator = new ConcreteMediator(componentA);
// Дейсвтие будет выполнено через посредника
componentA.doSomeAction();
