
//druga opcja
//ZMIENIA DANE WE WSZYSTKICH INSTANCJACH !!!

var dataForEveryInstance={ //komponent moze zwrocic zewnetrzny obiekt 
    //i teraz ten obiekt jest wspoldzielony przez instancje vue
    name: 'Yoshi' //Tutaj trik - po kliknieciu funkcji w obu instancjach zmienia sie dane
}
/*
//komponent - składnia
Vue.component('nazwa_komponentu,{ //tutaj rozmpoczyna sie cialo funckji
    template: //bo tworzymy szablon htmla
    data: //tak samo jak w Vue instancji, ale lepiej zeby data bylo funkcja
    //ktora zwraca swiezy obiekt, bo w przypasku jak tutaj zmienimy obiekt globalnie 
    wszpoldzielony przez wszystkie instancje korzystajace z tego komponentu
 })
*/

Vue.component('greeting',{ //moze byc wykorzystywany w wielu instancjach vue
    template:'<p>Hey me name is {{ name }}<button v-on:click="changeName">Change name</button></p>',
    data: function(){//MUSI BYC FUNKCJA
        
       //druga opcja
       return dataForEveryInstance;  //zwraca zewnetrzny obiekt

        //wiele instancji moze korzystac z tych samych definicji
        //wszystkie te instancje beda wpoldzielic ten obiekt przez referencje
        //jescli zmieniy dane w jednym z takich komponentow to zmienimy dane w KAZDEJ
        // instancji ktora korzysta z komponentu 
    },
    methods:{//tak samo jak w instancji
        changeName: function(){
            this.name = 'Mario'; //po klikniecu przycisku zmienia atrybut wszystkich instancji
            //bo instancje wspoldziela obiekt data na samym gorze pliku
        }

    }
})


var one = new Vue({
    el: '#vue-app-one',

});


var two = new Vue({
    el: '#vue-app-two'

});