<template>
  <div>
    <v-btn v-on:click="newPost()">Nuevo post</v-btn>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4 v-for="post in listPosts" :key="post.title">
          <v-card>
            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{post.title}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span class="grey--text">Number {{post.id2}}</span><br>
                <span>{{post.body}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn  v-on:click="goToPost(post.id)" flat color="orange">Ver</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
      this.listPosts = this.$store.getters["posts/getListPosts"];
    }
  
    public goToPost(id: string) {
      let idPost = id.toString();
      this.$router.push({
        path: `/post/${idPost}`
      });
    }
  
    public newPost() {
      this.$router.push({
        path: `/newPost`
      })
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
