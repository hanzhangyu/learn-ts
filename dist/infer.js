var EffectModule = (function () {
    function EffectModule() {
        this.count = 1;
        this.message = "hello!";
    }
    EffectModule.prototype.delay = function (input) {
        return input.then(function (i) { return ({
            payload: "hello " + i + "!",
            type: "delay"
        }); });
    };
    EffectModule.prototype.setMessage = function (action) {
        return {
            payload: action.payload.getMilliseconds(),
            type: "set-message"
        };
    };
    return EffectModule;
}());
var connect = function (m) { return ({
    delay: function (input) { return ({
        type: 'delay',
        payload: "hello 2"
    }); },
    setMessage: function (input) { return ({
        type: "set-message",
        payload: input.getMilliseconds()
    }); }
}); };
var connected = connect(new EffectModule());
