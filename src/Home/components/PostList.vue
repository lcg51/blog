<template>
  <div>
    <div v-for="post in listPosts" :key="post.title" class="hello">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <p>{{post.date}}</p>
      <button v-on:click="goToPost(post.id)">Ver Post</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';
  
  @Component
  export default class PostList extends Vue {
    public listPosts: any = [];
  
    created() {
      this.listPosts = this.$store.getters.getListPosts;
    }

    public goToPost(id: string){
      let idPost = id.toString();
      this.$router.push({ path: `/post/${idPost}` });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
