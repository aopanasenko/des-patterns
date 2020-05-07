/**
 * Наблюдатель.
 */

interface Subscriber {
    inform(message: string): void;
}

interface Publisher {
    setNews(text: string): void
    register(observer: Subscriber): void;
    unregister(observer: Subscriber): void;
}

class ConcreteObserver implements Subscriber {
    inform(message: string) {
        console.log(`This subscriber informed by message: ${message}`);
    }
}

export class NewsPublisher implements Publisher {
    private news: string;
    private subscribers: Subscriber[]

    private notifyAll() {
        this.subscribers.forEach(subs => subs.inform(this.news))
    }

    constructor() {
        this.news = '';
        this.subscribers = [];
    }

    public register(observer: Subscriber) {
        this.subscribers.push(observer);
    }

    public unregister(observer: Subscriber) {
        this.subscribers = this.subscribers.filter(subscriber => !(subscriber instanceof observer));
    }

    public setNews(text: string) {
        this.news = text;
        this.notifyAll();
    }
}

const newsPublisher = new NewsPublisher();
newsPublisher.register(new ConcreteObserver());

newsPublisher.setNews('Some news');
// This subscriber informed by message: Some news
