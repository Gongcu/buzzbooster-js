export declare class BuzzBooster {
    static setUser(user: User): void;
    static showHome(): void;
    static showInAppMessage(): void;
    static showNaverPayExchange(): void;
    static sendEvent(name: string, values: Map<string, number | boolean | string>): void;
}
export declare class User {
    userId: string;
    properties: Object;
    constructor(builder: UserBuilder);
}
export declare class UserBuilder {
    userId: string;
    properties: Map<string, string>;
    constructor(userId: string);
    setOptInMarketing(optInMarketing: boolean): UserBuilder;
    addProperty(key: string, value: string | number | boolean): UserBuilder;
    build(): User;
}
