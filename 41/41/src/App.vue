<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <!-- bez router-view żaden element nie jest widoczny -->
    </div>
</template>

<script>
// Imports
// import showBlogs from './components/showBlogs.vue'; //komponent w routes; nie dodawany w template jawnie - nie trzeba importować
// import listBlogs from './components/listBlogs.vue'; //komponent w routes; nie dodawany w template jawnie - nie trzeba importować
import header from './components/header.vue';

export default {
    components: {
        // 'show-blogs': showBlogs, //komponent w routes; nie dodawany w template jawnie - nie trzeba importować
        // 'list-blogs': listBlogs, //komponent w routes; nie dodawany w template jawnie - nie trzeba importować
        'app-header': header //bo <header> to tag HTML juz i nie da sie nadpisac
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>