var Ctor = Vue.extend({
    data: function () {
        console.log(this);
        return { msg: 1 };
    },
    methods: {
        test: function (msg) {
            console.log(this.msg === msg);
        }
    }
});
var app = new Ctor();
app.test(app.msg);
