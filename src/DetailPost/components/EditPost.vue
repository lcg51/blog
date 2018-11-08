<template>
    <div class="hello">
        <div class="post">
            <input v-model="post.title">
            <span>{{post.date}}</span>
            <textarea v-model="post.body">
            </textarea>
            <button v-on:click="updateData">Guardar</button>
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
    export default class EditPost extends Vue {
        @Prop() post:any;
    
        constructor() {
            super();
            //this.idPost = parseInt(this.$route.params.id)
        }
    
        public updateData(){
            this.$store.dispatch('updatePost', this.post);
            this.$emit('showEdit');
        }
    }
</script>



