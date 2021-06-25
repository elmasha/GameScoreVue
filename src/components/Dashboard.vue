<template>
    <div id="dashboard">
    
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="8">

                    <ul class="collection with-header">
                        <li class="collection header">
                            <h4>News</h4>
                        </li>
                        <li v-for="story in stories" v-bind:key="story.id" class="collection-item">
                        <div><img :src="story.image" alt=""></div>
                        {{story.Title}}

                            <router-link class="secondary-content" v-bind:to="{name:'viewstory'}"></router-link>
                        </li>
                    </ul>

                </b-col>
                
                <b-col cols="8">
                
                
    
                </b-col>


            </b-row>
        </b-container>

        
        
        <div class="fixed-action-btn">
            <router-link to="/AddStory" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name:'dashboard',
    data() {
        return {
            stories:[]
        }
    },created(){
         
         db.collection("Stories").get()
         .then(queryResult =>{
             queryResult.forEach(doc =>{
                 console.log(doc.data())
                 const data ={
                    'id': doc.id,
                    'Title':doc.data().title,
                    'Story':doc.data().Story,
                    'image': doc.data().image
                 }
                 this.stories.push(data)
             })

         })
    }
}
</script>