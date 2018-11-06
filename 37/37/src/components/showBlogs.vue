<template>
    <div  v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlogs" class="single-blog">
            <!-- Filtry 
            Nie zmieniaja samego obiektu danych a jedynie zmieniaja jego wyswietlanie
            -->
            <h2 v-rainbow>{{blog.title |toUppercase }}</h2>
            <article>{{blog.body | snipped}}</article>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blogs:[],
            search : ''
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts') //klient http vue-resource
        .then(function(data){ //promise object
            console.log(data);
            this.blogs = data.body.slice(0,10); //pierwsze diziesiec elementow z listy
        });
    },
    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog)=> { //this is be array
                return blog.title.match(this.search); //jak false to nie bedzie do w array blogs
            })
        }
    },
    // Rejestrowanie lokalnie, bo tylko w tym komponencie używamy tych filtrów
    filters:{ //jest to obiekt
        //lokalna rejestracja filtrow
        /*
        //string to define name of filter with -
        'to-uppercase': function(value){
            return value.toUpperCase();
        }
        */
       //w nazwie funkcji nie mozna uzywac nazw z mysliniek -
       // bez value nie zadzaiala !!!
       toUppercase(value){ // dokladnie tak samo jak w main.js to samo robi ten filtr
           //to samo co wyzej 'to-uppercase' tylko lepiej i czytelniej
            return value.toUpperCase();

       }
    },
    directives:{ // obiekt - nie jest to funkcja; dyrektywa cutomowa
        //rejestracja Lokalna
        //obiekt rejestracji roznych directives
        'rainbow':{//to nie funkcja
            //maja tez petle zycia
            bind(el, binding, vnode){ //usimy zbindowac i wpisać virtual-node chociaz go nie uzywamy
                //funkcja
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    }
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto; /*na srodku*/
}

.single-blog{
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    background: #eee;

}
</style>