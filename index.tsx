declare const BuzzBoosterJavaScriptInterface: any;

export class BuzzBooster {
    static setUser(user: User) {
        let string = JSON.stringify({
            "method": "setUser",
            "parameters": {
                "user_id": user.userId,
                "properties": user.properties
            }
        })
        BuzzBoosterJavaScriptInterface.postMessage(string)
    }

    static showHome() {
        let string = JSON.stringify({
            "method": "showHome",
        })
        BuzzBoosterJavaScriptInterface.postMessage(string)
    }

    static showInAppMessage() {
        let string = JSON.stringify({
            "method": "showInAppMessage",
        })
        BuzzBoosterJavaScriptInterface.postMessage(string)
    }

    static sendEvent(name: string, values: Map<string, number | boolean | string>) {
        let string = JSON.stringify({
            "method": "sendEvent",
            "parameters": {
                "event_name": name,
                "event_values": values,
            }
        })
        BuzzBoosterJavaScriptInterface.postMessage(string)
    }
}

export class User {
    userId!: string
    properties!: Object

    constructor(builder: UserBuilder) {
        this.userId = builder.userId
        this.properties = builder.properties
    }
}

export class UserBuilder {
    userId!: string
    properties!: Map<string, string>

    constructor(userId: string) {
        this.userId = userId
        this.properties = new Map()
    }

    setOptInMarketing(optInMarketing: boolean): UserBuilder {
        this.properties["opt_in_marketing"] = optInMarketing.toString()
        return this
    }

    addProperty(key: string, value: string | number | boolean): UserBuilder {
        this.properties[key] = value.toString()
        return this
    }

    build(): User {
        return new User(this)
    }
}
