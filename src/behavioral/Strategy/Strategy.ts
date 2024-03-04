/**
 * Стратегия.
 */


export abstract class Strategy {
    abstract buildRoute(A: string, B: string): void;
}

// Конкретные стратегии. Должны иметь единый интерфейс
class RoadStrategy extends Strategy {
    public buildRoute(A: string, B: string) {
        console.log(`Build route from ${A} to ${B} with RoadStrategy`);
    }
}

class WalkingStrategy extends Strategy {
    public buildRoute(A: string, B: string) {
        console.log(`Build route from ${A} to ${B} with WalkingStrategy`);
    }
}

class PublicTransportStrategy extends Strategy {
    public buildRoute(A: string, B: string) {
        console.log(`Build route from ${A} to ${B} with PublicTransportStrategy`);
    }
}

// Посредник, который будет использовать стратегии
export class Navigator {
    private routeStrategy: Strategy;

    constructor(routeStrategy: Strategy) {
        this.routeStrategy = routeStrategy;
    }

    public buildRoute(A: string, B: string): void {
        this.routeStrategy.buildRoute(A, B);
    }
}
