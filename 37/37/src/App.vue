<template>
    <div>
        <show-blogs></show-blogs>
    </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>