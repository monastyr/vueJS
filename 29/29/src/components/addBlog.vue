<template>
  <div id="add-blog">
      <h2>Add a new Blog Post</h2>
      <form>
          <label>Blog Titlle</label>
          <!-- lazy - zeby wyswietlao sie dopiero po kliknieciu a nie w trakcie wpsywania czy zmian -->
          <input type="text" v-model.lazy="blog.title" required/>
          <label>Blog Content</label>
          <textarea v-model.lazy="blog.content"></textarea>
      </form>
      <div id="preview">
          <h3>Preview Blog </h3>
          <p>Blog Title: {{blog.title}} </p>
          <p>Blog content:  </p>
          <p>{{blog.content}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{ //obiekt
            title: "",
            content: ""
        }
    }
  }
}
</script>

<style>
#add-blog *{ /*everythin in blog*/
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>
