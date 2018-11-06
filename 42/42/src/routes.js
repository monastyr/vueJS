import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/addBlogs.vue';
import singleBlog from './components/singleBlog.vue';

export default[
    {path: '/', component: showBlogs }, //root path
    {path: '/add', component: addBlogs }, //exporting object
    {path: '/blog/:id', component: singleBlog} //jeden komponent ale dane pobierane dla odpowiedniego bloga - dane z bazy wybierane po unikalnym parametrze którym tutaj jest id bloga
]