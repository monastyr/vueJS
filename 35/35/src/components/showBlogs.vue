<template>

    <div id="show-blogs">
        <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
        <!-- Filtry 
        Nie zmieniaja samego obiektu danych a jedynie zmieniaja jego wyswietlanie
        -->
        <h2>{{blog.title |to-uppercase }}</h2>
        <article>{{blog.body | snipped}}</article>
    </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blogs:[]
        }
    },
    methods: {
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(function(data){ //promise object
            console.log(data);
            this.blogs = data.body.slice(0,10); //pierwsze diziesiec elementow z listy
        });
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