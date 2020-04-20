/**
 * Мост. Суть - клиент с функционалом через слой абстаркции,
 * а не напрямую через реализацию.
 */

// 'Интерфейс'
class Device {
    private enabled: boolean;

    constructor(enabled: boolean) {
        this.enabled = enabled;
    }

    public isEnabled(): boolean {
        return this.enabled;
    }

    public enable(): void {
        this.enabled = true;
    }

    public disable(): void {
        this.enabled = false;
    }
}

// 'Абстракция'
export class Remote {
    // Получаем ссылку
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }
}

const myDevice = new Device(false);
const myRemote = new Remote(myDevice);

myDevice.isEnabled();
myDevice.enable();


