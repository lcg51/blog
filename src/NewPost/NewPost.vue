<template>
  <div class="home">
    <AddPost/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddPost from './components/AddPost.vue'; // @ is an alias to /src

@Component({
  components: {
    AddPost,
  },
})
export default class NewPost extends Vue {}
</script>
