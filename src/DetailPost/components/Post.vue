<template>
  <div class="hello">
    <div class="post">
      <h2>{{post.title}}</h2>
      <span>{{post.date}}</span>
      <p>{{post.body}}</p>
      <button v-on:click="showEdit">Editar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ShowPost from './components/ShowPost.vue'; // @ is an alias to /src

@Component
export default class Post extends Vue {
  @Prop() post: any;
  public idPost: number = 0;

  constructor(){
    super();
    //this.idPost = parseInt(this.$route.params.id)
  }

  public showEdit(){
    this.$emit('showEdit');
  }
}
</script>



