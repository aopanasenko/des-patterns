/**
 * Прокси. Вместо реальных обьектов предоставляет обьекты заменители.
 * Эти обьекты перехватывают вызов к оригиналам и позволяют произвести доп. манипуляции прежде чем вернуть ответ
 */

class AuthAccess {
    accessAllowed() {
        console.log('Welcome');
    }

    accessDenied() {
        console.log('Sorry');
    }
}

// Proxy. Имеет тот же интерфейс что и оригинал - AuthAccess
export class AuthSystem {
    private access: AuthAccess;

    private isUserAuthenticate(password: string): boolean {
        return password === 'MySecurityPassword';
    }

    constructor(access: AuthAccess) {
        this.access = access;
    }

    // Оборачивает исходный метод в собственную логику
    public accessAllowed(password: string): void {
        const isValidUser = this.isUserAuthenticate(password);

        if (isValidUser) {
            this.access.accessAllowed();
        } else {
            console.log('Access denied');
        }
    }

    public accessDenied(): void {
        this.access.accessDenied();
    }
}

const auth = new AuthSystem(new AuthAccess());

auth.accessAllowed('MySecurityPassword'); // Access allowed
auth.accessAllowed('PamParam'); // Access denied
