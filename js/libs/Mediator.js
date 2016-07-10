'use strict';

function Mediator () {
    var listeners = [];

    this.sub = function (channel, callback) {
        if (!listeners[channel]){
            listeners[channel] = [];
        }
        listeners[channel].push(callback);
    };

    this.pub = function (channel) {
        if (listeners[channel]){
            listeners[channel].forEach(function (value) {
                value(channel);
            });
        }
    };

    return this;
}
