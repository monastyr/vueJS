<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs" />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.content }}</article>
            <!-- trzeba tylko zmienić nazwy atrybutów na takie jakie mamy rzeczywiście w obiektach -->
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://vuetutorial9.firebaseio.com/posts.json').then(function(data){
            return data.json(); //funkcja json na obikecie - Tutaj jest PromiseObject - funkcja potrzebuje trochę czasu zanim dostanie dane; dlatego return
        }).then(function(data){ //bo zwraca PromiseObject; ale wyżej jest return. tutaj wywoła się funkcja po zakończeniu otrzymania wszystkich danych
            var blogsArray = []; //data to obiekt, który zawiera wszystkie obiekty postów; dlatego iterowanie po tej liscie obiektów
            for (let key in data){ //tutaj nie mamy żadnego unikalnego id; ale mamy atrybut key unikalny dodawany pzez bazę firebase
                // console.log(data[key]); // pobieranie po kluczu obiektu
                data[key].id = key; //push this; teraz id to nasz klucz unikalny z googlowej bazy; modyfikacja danych które dostalismy z api - dynamicznie stworzenie i przypisanie wartosci do atrbutu id którego oryginalnie nie mamy
                console.log(data[key]); //To jest cały obiekt postu na blog
                blogsArray.push(data[key]);
                console.log(blogsArray);
            }
            this.blogs = blogsArray; //przypisanie wartosci otrzymanych wyżej z zapytania http
            //pzypisanie znajduje się dalej w sekcji .then, która się zawsze wykona po zakończeniu return; gdy już mamy konkretne obiekty
        });
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>