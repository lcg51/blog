<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../../assets/logo.png">-->
    <PostList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostList from './components/PostList.vue'; // @ is an alias to /src

@Component({
  components: {
    PostList,
  },
})
export default class Home extends Vue {}
</script>
