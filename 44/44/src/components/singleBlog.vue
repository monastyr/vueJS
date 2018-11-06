<template>
<div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <ul>
        <li v-for="category in blog.categories">{{category}}</li>
    </ul>
</div>
</template>

<script>
export default{
    data(){
        return{
            id: this.$route.params.id, //bierze id z urla
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vuetutorial9.firebaseio.com/posts/'+ this.id + '.json') //bo nie dodajemy danych do posts.json a wybieramy dane po moj_id.json
        .then(function(data){
            return data.json(); //return wykona sie dopiero po otrzymaniu wszystkich danych z funkcji
        }).then(function(data){
            this.blog = data; //przypisanie tutaj, bo wyżej mamy tylko promise object
        });
    }

}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>