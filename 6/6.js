new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0

    },
    methods: {
        add: function(inc=1){
            this.age += inc;
        },
        subtract: function(dec=1){
            this.age -= dec;
        },
        updateXY: function(oooo){
            this.x = oooo.offsetX;
            this.y = oooo.offsetY;
        },
        click: function(){
            alert('You clcicked me');
        }


    }
});