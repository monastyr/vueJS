
Vue.component('greeting',{ //moze byc wykorzystywany w wielu instancjach vue
    template:'<p>Hey me name is {{ name }}<button v-on:click="changeName">Change name</button></p>',
    
    //MUSI BYC FUNKCJA
    data: function(){ //[UWAGA] EPIEJ ZEBY BYLA FUNKCJA ZWRACAJACA ZAWSZE SWIERZY OBIEKT
        //ta opcja zwraca dane z srodka - stworzony tutaj obiekt
        return { //data zwraca obiekt o innych atrybutach niz instancje vue
            name:'Yoshi' //to jest lepsze rozwiazanie
        }
        

        //wiele instancji moze korzystac z tych samych definicji
        //wszystkie te instancje beda wpoldzielic ten obiekt przez referencje
        //jescli zmieniy dane w jednym z takich komponentow to zmienimy dane w we wszystkich 
        //instancjach które z tego komponentu korzystają - intuicyjne zachowanie
        

        // Inaczej jesli wywołamy funkcję changeName - poniewaz komponent zawsze zwraca
        //swierzy obiekt to zmodyfikujemy atrybut tylko w jednej instancji dla ktroej 
        // wyłołano te funckje
        //ALE NIE WE wszsytkich instancjach VUE, nawet jesli wszystkie korzystaja z tego komponentu
        //intuicyjne i porzadane zachowanie
    },
    methods:{//definiujemy metody komponentow tak samo jak w instancji Vue
        changeName: function(){
            this.name = 'Mario'; //po klikniecu przycisku zmienia atrybut tylko jednej z instancji
            //ponieważ data jest funckcja która zwraca swiezy obiekt
        }

    }
})

/*
//komponent - składnia
Vue.component('nazwa_komponentu,{ //tutaj rozmpoczyna sie cialo funckji
    template: //bo tworzymy szablon htmla
 })


*/


var one = new Vue({
    el: '#vue-app-one',

});


var two = new Vue({
    el: '#vue-app-two'

});