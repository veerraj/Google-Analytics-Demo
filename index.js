const ua = require('universal-analytics');
const bluebird = require('bluebird');

const GOOGLE_ANALYTICS_ID = 'UA-173230584-1';

class GoogleAnalytics {
    constructor() {
       
        this._visitor = ua(GOOGLE_ANALYTICS_ID, 'uigyugbuygku', { strictCidFormat: false, });

        bluebird.promisifyAll(this._visitor);
    }

    sendEvent(category, action, label) {
        if (!this._visitor) return;

        // console.log(this._visitor)
        this._visitor.eventAsync(category, action, label)
        .catch(error => console.error(error));
    }
}

new GoogleAnalytics().sendEvent('chat-start','start','newEvent')
new GoogleAnalytics().sendEvent('chat-stop','stop','newEvent')
new GoogleAnalytics().sendEvent('chat-end','end','newEvent')

// module.exports = GoogleAnalytics;