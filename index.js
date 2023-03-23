"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEvent = exports.showInAppMessage = exports.showCampaign = exports.setUser = exports.UserBuilder = exports.User = void 0;
class User {
    constructor(builder) {
        this.userId = builder.userId;
        this.optInMarketing = builder.optInMarketing;
        this.properties = builder.properties;
    }
}
exports.User = User;
class UserBuilder {
    constructor(userId) {
        this.userId = userId;
        this.optInMarketing = null;
        this.properties = new Map();
    }
    setOptInMarketing(optInMarketing) {
        this.optInMarketing = optInMarketing;
        return this;
    }
    addProperty(key, value) {
        this.properties[key] = value;
        return this;
    }
    build() {
        return new User(this);
    }
}
exports.UserBuilder = UserBuilder;
function setUser(user) {
    if (user.optInMarketing != null) {
        user.properties["opt_in_marketing"] = user.optInMarketing;
    }
    let string = JSON.stringify({
        "method": "setUser",
        "parameters": {
            "user_id": user.userId,
            "properties": user.properties
        }
    });
    BuzzBoosterJavaScriptInterface.postMessage(string);
}
exports.setUser = setUser;
function showCampaign() {
    let string = JSON.stringify({
        "method": "showCampaign",
    });
    BuzzBoosterJavaScriptInterface.postMessage(string);
}
exports.showCampaign = showCampaign;
function showInAppMessage() {
    let string = JSON.stringify({
        "method": "showInAppMessage",
    });
    BuzzBoosterJavaScriptInterface.postMessage(string);
}
exports.showInAppMessage = showInAppMessage;
function sendEvent(eventName, properties) {
    let string = JSON.stringify({
        "method": "sendEvent",
        "parameters": {
            "event_name": eventName,
            "event_values": properties
        }
    });
    BuzzBoosterJavaScriptInterface.postMessage(string);
}
exports.sendEvent = sendEvent;
