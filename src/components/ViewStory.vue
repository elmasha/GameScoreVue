<template>

    <div id="viewstory">

                    <div class="col-md-12" align="center">
                        <div  class="container">
                        <img id="header-image" :src="header2" /> </div>    
                    </div>

        <div class="container col-md-7">




         <h3 id="story-view-title">{{title}}</h3>
                <div class="story-view-image">
                <img id="imageViewStory" class="fluid" :src="imageUrl" alt="">
                </div>
                 <hr>
          <div class="col-md-8 ">
            <div  class="col-md-12 container-fluid container-xl d-flex container">
             
             <div v-on: @click="LikeCount()">
             <span  id="showUS"  class="iconify" data-icon="ant-design:like-filled" 
             data-inline="false" data-width="28" data-height="28">
             {{like}}
             </span>
              <span id="commentSect" >{{like}}</span>
             </div>
              
              <div>
                <span id="showUS"  class="iconify" data-icon="ri:chat-3-fill" 
                data-inline="false" data-width="28" data-height="28">
                {{comment}}
                </span>
                <span  >{{comment}}</span>
              </div>
             
              <span id="showUS"  class="iconify" data-icon="ci:share" data-inline="false" data-width="30" data-height="30"></span>
              
              
            </div>
          </div>
          <hr>
         <div class="col-md-12 text-center" id="story-view-story">
         <p>{{story}}</p>
        </div>

            <div>
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    :src="otherLinks"
                    allowfullscreen
                ></b-embed>
            </div>


        <div class="container-fluid container-xl d-flex container col-md-7">
        <form @submit.prevent="Writecomment(story_id)" class="container-fluid container-xl d-flex container col-md-12">
            <b-form-input v-model="comments" placeholder="Write a comment">
            </b-form-input> 
            <div>
         
                <button id="btn" type="submit"><span class="iconify"
                 data-icon="fluent:send-20-filled" data-inline="false" data-width="28" data-height="28">
                </span>
                </button>
            </div>

        </form>
           
        </div>
        
        </div>
       
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name:'viewstory',
    data() {
          
        return {
            header2: require('@/assets/img/header2.jpg'),
            story_id: null,
            title :null,
            story : null,
            like : 0,
            imageUrl:null,
            comments: null,
            otherLinks: null,
            comment :null
        }
        
    },created(){
        this.fetchData
       
    },
    
     beforeRouteEnter (to, from, next){
           
         db.collection("Stories").where("doc_ID" ,"==",  to.params.story_id)
                .onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                 next(vm =>{
                     vm.story_id = doc.data().doc_ID,
                     vm.title = doc.data().title,
                     vm.story = doc.data().story,
                     vm.like = doc.data().like,
                     vm.comment = doc.data().comment,
                     vm.otherLinks = doc.data().otherLinks,
                     vm.imageUrl = doc.data().image
                 })
             })

            })




            
        }
        ,
        mounted(){
          
        },
        watch:{
            '$route'(){'fetchData',this.fetchData}
            
        },
        methods:{
            fetchData(id){
            
             db.collection("Stories").where("doc_ID" ,"==", id)
                .onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        
                            this.story_id = doc.data().doc_ID,
                            this.title = doc.data().title,
                            this.story = doc.data().story,
                            this.like = doc.data().like,
                            this.comment = doc.data().comment,
                            this.otherLinks = doc.data().otherLinks,
                            this.imageUrl = doc.data().image

                    });
                    console.log("Story",this.title);
                });        

            }
            ,LikeCount : function(){
              
                 var sfDocRef = db.collection("Stories").doc(this.$route.params.story_id);

                db.runTransaction((transaction) => {
                    return transaction.get(sfDocRef).then((sfDoc) => {
                            this.like = sfDoc.data().like + 1;
                    
                            transaction.update(sfDocRef, { like:this.like });
                            return this.like;
                       
                    });
                }).then((newPopulation) => {
                   console.log("like count", newPopulation);
                    
                }).catch((err) => {
                    // This will be an "population is too big" error.
                    console.error(err);
                });




            },Writecomment(){
                if(this.comments == null){
                    alert("Comment is null")
                }else{

             db.collection("Stories").doc(this.$route.params.story_id).collection("Comments").add({
                        comment: this.comments,
                    }).then(docRef =>{
                        console.log("Added id"+docRef.id)
           
             var sfDocRef = db.collection("Stories").doc(this.$route.params.story_id);
             db.runTransaction((transaction) => {
                    return transaction.get(sfDocRef).then((sfDoc) => {
                            this.comment = sfDoc.data().comment + 1;
                    
                            transaction.update(sfDocRef, { comment: this.comment });
                            return this.comment;
                       
                    });
                }).then((newPopulation) => {
                   console.log("Commnents count", newPopulation);
                    
                }).catch((err) => {
                    // This will be an "population is too big" error.
                    console.error(err);
                });


                        
                        this.comments = ""
                       alert("Comment Uploaded")
                    }).catch(error => console.error(error))

                }
                
            }

        }
}
</script>

<style scoped>
#btn{
    margin-top: 10px;
    color: #F19124;
    background-color: transparent;
    padding: 0px 10px 0px 10px;
    border: #F19124 2px solid;
    border-radius: 12px;
}
#btn:hover{
    margin-top: 10px;
    color: #168E2A;
    background-color: transparent;
    padding: 0px 10px 0px 10px;
    border: #168E2A 2px solid;
    border-radius: 12px;
}
#imageViewStory{
    width: 100%;
    height: 50vh;
}
#viewstory{
padding: 30px;
text-align: center;
color: #808080;
}
#commentSect{
    color: #808080;
    font-weight: 600;
    font-size: 16px;
}
#story-view-title{
 margin: 20px;
 font-weight: 600;
 font-size: 40px;   
}

#story-view-story{
 margin-top: 30px;
 margin-right: 20px;
 margin-left: 20px;
 padding: auto;
 font-weight: 200;
 font-size: 20px;   
}


</style>