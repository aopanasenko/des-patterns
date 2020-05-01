/**
 * Команда
 */

interface Command {
    execute(): void;
}

/**
 *  Передают вызов исполнителю. Набор параметров для вызова необходимо хранить в качестве полей
 */
class ConcreteCommand implements Command {
    private receiver: Receiver;
    private params: Record<string, string>;

    constructor(
        receiver: Receiver,
        params: Record<string, string>
    ) {
        this.receiver = receiver;
        this.params = params;
    }


    public execute(): void {
        this.receiver.someOperation(this.params);
    }
}

// Получатель команды. Содержит бизнес-логику
class Receiver {
    public someOperation({ arg1, arg2}: Record<string, string>) {
        console.log(`You call someOperation method with args: arg1: ${arg1}, arg2: ${arg2}`);
    }
}

// Отправитель команды
export class Invoker {
    private someCommand: Command;

    private isCommandExist(command: Command): boolean {
        return command.execute !== undefined;
    }

    public setSomeCommand(command: Command): void {
        this.someCommand = command;
    }

    public doSomethingImportant(): void {
        if (this.isCommandExist(this.someCommand)) {
            // Передаем работу комманде, которая в свою очередь передаст получателю
            this.someCommand.execute();
        }
    }
}
