<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default{
    data(){
        return{
            id: this.$route.params.id, //bierze id z urla; parametr routingu
            blog:{}
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id) //wybieranie lementu z bazy po id
        .then(function(data){
            console.log(data);
            this.blog = data.body;
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