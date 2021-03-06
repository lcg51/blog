import Vue from 'vue';
import Vuex from 'vuex';
import POST from './modules/post';

Vue.use(Vuex);
//He hecho un intento de encapsularlo en un modulo pero no he conseguido que me funcione
export default new Vuex.Store({
  state: {
    posts: [
      { id: 1, title: 'Post Title 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '15/22/2018'},
      { id: 2, title: 'Post Title 2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '15/22/2018'},
      { id: 3, title: 'Post Title 3', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '15/22/2018' },
      { id: 4, title: 'Post Title 4', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '15/22/2018' },
      { id: 5, title: 'Post Title 5', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '15/22/2018' }
    ]
  },
  mutations: {
  
    createPost(){

    },

    updatePost: (state:any) => (post:any) =>{
      state.posts.find((p: any) => {
        if(p.id === post.id){
          p.title = post.title;
          p.body = post.body;
        }
      })
    }
  },

  getters: {
    getListPosts(state): Array<object>{
      return state.posts;
    },
    getPost:(state) => (postId: number) =>{
      return state.posts.find(post => post.id === postId) 
    }
  },

  actions: {

  },
});
