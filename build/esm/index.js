export class BuzzBooster {
    static setUser(user) {
        let string = JSON.stringify({
            "method": "setUser",
            "parameters": {
                "user_id": user.userId,
                "properties": user.properties
            }
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static showHome() {
        let string = JSON.stringify({
            "method": "showHome",
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static showInAppMessage() {
        let string = JSON.stringify({
            "method": "showInAppMessage",
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static showNaverPayExchange() {
        let string = JSON.stringify({
            "method": "showNaverPayExchange",
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static sendEvent(name, values) {
        let string = JSON.stringify({
            "method": "sendEvent",
            "parameters": {
                "event_name": name,
                "event_values": values,
            }
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
}
export class User {
    constructor(builder) {
        this.userId = builder.userId;
        this.properties = builder.properties;
    }
}
export class UserBuilder {
    constructor(userId) {
        this.userId = userId;
        this.properties = new Map();
    }
    setOptInMarketing(optInMarketing) {
        this.properties["opt_in_marketing"] = optInMarketing.toString();
        return this;
    }
    addProperty(key, value) {
        this.properties[key] = value.toString();
        return this;
    }
    build() {
        return new User(this);
    }
}
