export default{
    //wykorzystywanie wielokrotne tego samego kodu - jak importy w Pythonie
    computed: {
        filteredBlogs: function(){
            return this.blogs.filter((blog)=> { //this is be array
                return blog.title.match(this.search); //jak false to nie bedzie do w array blogs
            })
        }
    }
}