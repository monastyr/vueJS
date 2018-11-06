new Vue({

    el: '#vue-app',
    data:{
        output: 'You fave food'
    },
    methods:{
        readRefs: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
});