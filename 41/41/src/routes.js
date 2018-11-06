import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/addBlogs.vue';


export default[
    {path: '/', component: showBlogs }, //root path
    {path: '/add', component: addBlogs } //exporting object
]