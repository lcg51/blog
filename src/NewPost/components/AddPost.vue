<template>
  <form v-on:submit.prevent="onSubmit">
    <v-text-field v-model="post.title" :counter="10" label="Título" required></v-text-field>
    <v-textarea
        v-model="post.body"
        auto-grow
        box
        color="deep-purple"
        label="Bio"
        rows="1"
      ></v-textarea>
    <v-btn @click="createPost()">Nuevo post</v-btn>
    <v-btn @click="clearPost()">clear</v-btn>
  </form>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from 'vue-property-decorator';
  import ShowPost from './components/ShowPost.vue'; // @ is an alias to /src
  import Post from "@/Models/Post";
  import moment from 'moment';
  
  @Component
  export default class AddPost extends Vue {

    public post: Post | null = null;
    constructor() {
      super();
      this.post = new Post(0,'','',moment().format('MM-DD-YYYY'));
    }
  
    public createPost() {
      this.$store.dispatch('posts/addPost', this.post);
    }

    public clearPost() {
      console.log("Clear");
    }
  }
</script>



