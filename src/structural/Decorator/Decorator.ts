export abstract class Notifier {
    abstract notify(message: string): void;
}

export class EmailNotifier extends Notifier {
    public notify(message: string) {
        console.log(`Email: ${message}`);
    }
}

// Дефолтный декоратор
abstract class Decorator extends Notifier {}

// Декоратор отправки сообщения в Slack
export class SlackDecorator extends Decorator {
    private notifier: Notifier;

    private notifySlack(message: string) {
        console.log(`Slack: ${message}`);
    }

    constructor (notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public notify(message: string) {
        this.notifier.notify(message);
        this.notifySlack(message);
    }
}


// Декоратор отправки сообщения в Discord
export class DiscordDecorator extends Decorator {
    private notifier: Notifier;

    private notifyDiscord(message: string) {
        console.log(`Discord: ${message}`);
    }

    constructor (notifier: Notifier) {
        super();
        this.notifier = notifier;
    }

    public notify(message: string) {
        this.notifier.notify(message);
        this.notifyDiscord(message);
    }
}

const emailNotifier = new EmailNotifier();

const slackDecorator = new SlackDecorator(emailNotifier);
const discordDecorator = new DiscordDecorator(emailNotifier);

slackDecorator.notify('Test notification');
discordDecorator.notify('Test notification');

const slackDiscordDecorator = new DiscordDecorator(slackDecorator);

slackDiscordDecorator.notify('Test notification');
