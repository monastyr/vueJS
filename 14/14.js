var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'vue app one'

    },
    methods:{

    },
    computed:{
        greet: function(){
            return 'Hello from app one';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'vue app two'


    },
    methods:{
        changeTitle: function(){
            one.title = 'Title changed'; //interackja miedzy obiema instancjami
        }

    },
    computed:{
        greet: function(){
            return 'Yo dudes, this is app 2';
        }
    }
});
//wiele instancji jest ok, ale przy duzych przykladach komunikacja miedzy nimi moze byc trudna
//warto rozwazyc trzymanie wszystkiego w jednej badz dwoch instancjach

two.title="Change from outside"; //nadpisanie instancji vue z poza cial obiektow Vue