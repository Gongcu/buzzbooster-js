declare const BuzzBoosterJavaScriptInterface: any;

export class User {
    userId!: string
    optInMarketing!: boolean | null
    properties!: Object
    
    constructor(builder: UserBuilder){
      this.userId = builder.userId
      this.optInMarketing = builder.optInMarketing
      this.properties = builder.properties
    }
}

export class UserBuilder {
    userId!: string
    optInMarketing!: boolean | null
    properties!: Map<string, string>
  
    constructor(userId: string) {
      this.userId = userId
      this.optInMarketing = null
      this.properties = new Map()
    }
    
    setOptInMarketing(optInMarketing: boolean): UserBuilder {
      this.optInMarketing = optInMarketing
      return this
    }
  
    addProperty(key: string, value: string): UserBuilder {
      this.properties[key] = value
      return this
    }
  
    build(): User {
      return new User(this)
    }
}

export function setUser(user: User) {
    if (user.optInMarketing != null) {
        user.properties["opt_in_marketing"] = user.optInMarketing
    }

    let string = JSON.stringify({ 
        "method": "setUser",
        "parameters": {
            "user_id": user.userId,
            "properties": user.properties
        }
    })
    BuzzBoosterJavaScriptInterface.postMessage(string)
}


export function showCampaign() {
    let string = JSON.stringify({ 
        "method": "showCampaign",
    })
    BuzzBoosterJavaScriptInterface.postMessage(string)
}

export function showInAppMessage() {
    let string = JSON.stringify({ 
        "method": "showInAppMessage",
    })
    BuzzBoosterJavaScriptInterface.postMessage(string)
}

export function sendEvent(eventName: string, properties: Map<string, string>) {
    let string = JSON.stringify({ 
        "method": "sendEvent",
        "parameters": {
            "event_name": eventName,
            "event_values": properties
        }
    })
    BuzzBoosterJavaScriptInterface.postMessage(string)
}
