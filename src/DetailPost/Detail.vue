<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Post v-if="!edit" :post="post" @showEdit="toggleEdit"/>
    <EditPost v-if="edit" :post="post" @showEdit="toggleEdit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from './components/Post.vue'; // @ is an alias to /src
import EditPost from './components/EditPost.vue'; // @ is an alias to /src

@Component({
  components: {
    Post,
    EditPost
  },
})
export default class Detail extends Vue {
  public post = {}
  public idPost = 0;
  public edit = false;
  created() {
    this.idPost = parseInt(this.$route.params.id)
    this.post = this.$store.getters["posts/getPost"](this.idPost);
  }

  public toggleEdit(){
    this.edit = !this.edit;
  }
}
</script>
