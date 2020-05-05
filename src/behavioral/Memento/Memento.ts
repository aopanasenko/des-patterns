/**
 * Снимок.
 * Создает копию/слепок/снимок состояния обьекта.
 * Создание копии поручается исходному объекту, так как он имеет доступ к своим приватным полям
 */

interface Memento {
    getState(): string;
}

class Editor {
    // Состояние, которое будем запоминать
    private state: string;

    constructor (state: string) {
        this.state = state;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public createSnapshot(): Memento {
        return new Snapshot(this.state);
    }

    // Метод для восстановления состояния
    public restore(snapshot: Memento): void {
        this.state = snapshot.getState();
    }
}

export class Snapshot implements Memento{
    private state: string;

    constructor (state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

// Создание снимков реализовано через паттерн Комманда
class Command {
    private mementos: Memento[] = [];
    private editor: Editor;

    constructor (editor: Editor) {
        this.editor = editor;
    }

    public makeBackup(): void {
        this.mementos.push(this.editor.createSnapshot());
    }

    public undo() {
        if (!this.mementos.length) {
            return;
        }
        const previousMemento = this.mementos.pop() as Memento;

        this.editor.restore(previousMemento);
    }
}

const editor = new Editor('newState');
const caretaker = new Command(editor);

caretaker.makeBackup();
editor.setState('another state');

caretaker.makeBackup();
