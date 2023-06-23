"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = exports.User = exports.SendEventOption = exports.BuzzBooster = void 0;
class BuzzBooster {
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
    static showCampaign() {
        let string = JSON.stringify({
            "method": "showCampaign",
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static showInAppMessage() {
        let string = JSON.stringify({
            "method": "showInAppMessage",
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
    static sendEvent(name, values, option) {
        let string = JSON.stringify({
            "method": "sendEvent",
            "parameters": {
                "event_name": name,
                "event_values": values,
                "send_option": option
            }
        });
        BuzzBoosterJavaScriptInterface.postMessage(string);
    }
}
exports.BuzzBooster = BuzzBooster;
exports.SendEventOption = {
    DEFAULT: "default",
    IMMEDIATE: "immediate",
};
class User {
    constructor(builder) {
        this.userId = builder.userId;
        this.properties = builder.properties;
    }
}
exports.User = User;
class UserBuilder {
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
exports.UserBuilder = UserBuilder;
