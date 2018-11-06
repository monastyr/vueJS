<template>
<!-- Directive i sutomoy argument colum
UWAGA jesli argumentem jest string to dodatkowo trzeba go wziac w ciapki
 -->
    <div v-theme:column="'wide'" id="show-blogs">
        <!-- wartosc 'narrow' jest stringiem wiec musi byc przekaza w 'uszach'-->
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" class="single-blog">
            <h2 v-rainbow>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
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