<template>
<div id="ninjas">
    <ul>
        <li v-for="ninja in ninjas" v-on:click=" ninja.show =!ninja.show">
            <h2>{{ninja.name}} </h2>
            <h3 v-show="ninja.show"> {{ninja.speciality}} </h3>
        </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>

</div>
</template>
<script>
export default {
    // props: ['ninjas'],  //receiving
    props: {
        ninjas:{ //obiekt
            type:String,
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods:{
        test: function(){
            this.ninjas
        },
        deleteNinja: function(){
            this.ninjas.pop();
        }
    },
    //lifecycle hooks
    beforeCreate(){
        alert('beforeCreate'); //zwykla funjca
    },
    created(){ // Bardzo przydatne
        alert('created'); //for database; mounted uzywa wiele ludzi ale to lepsze

    },
    beforeMount(){
        alert('beforeMount');
    },
    mounted(){ //bardzo przydatne do manipulowania elementami DOM
        //manipulate DOM elements
        alert('mounted');
    },
    beforeUpdate(){
        alert('beforeUpdate');
    },
    updated(){//tak ja mounted dla zmian danych - np po usunieciu
        //after the DOM has been updated
        alert('updated');
    }
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>