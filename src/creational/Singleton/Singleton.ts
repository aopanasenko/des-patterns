/**
 * Одиночка
 */

export class Singleton {
    private static instance: Singleton;
    // Скрываем, чтобы предотвратить вызов через new
    private constructor() {}

    public static getInstance() {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Остальные методы (например, работа с БД)
}
