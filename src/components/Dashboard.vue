<template >
    <div id="dashboard" >
                    <div class="col-md-12" align="center">
                        <div id="header-image" class="container">
                        <img :src="header" width="100%" height="150vh"/> </div>    
                    </div>
        <b-container id="newsSection" class="bv-example-row">
            <b-row>
                   
                    <b-col  md="7" cols="12" >
                        <!--News-->   
                        <h4 class="text-center">News</h4>
                            <br>


                            <div class="col-md-5">

                             <v-select label="Category" :options="options"></v-select>
                            
                            </div>
                            
                            <div v-scrollbar style="width: 300px;">
                            
                                <div id="nav-category" class="container-fluid container-xl d-flex container col-md-12  text-center">
                                
                                    <span id="mynav" @click="SearchCat('Football')">Football</span>
                                    <span id="mynav" @click="SearchCat('Football')">Boxing</span>
                                    <span id="mynav" @click="SearchCat('Football')">Rugby</span>
                                    <span id="mynav" @click="SearchCat('Football')">Hockey</span>
                                <span id="mynav" @click="SearchCat('Football')">Tennis</span>
                                
                                
                                </div>

                            </div>
                            

                            <!--Fecth Div-->
                           

                            <div id="fetch" v-vue-aos="{animationClass:'fadeIn animated'}">
                            
                               <ul id="StoryAll" class="with-header" >
                                <li v-for="story in stories" v-bind:key="story.id" class="collection-item">
                                
                                <div id="story-child"  >
                                    <router-link id="readMore"  v-bind:to="{name:'viewstory',
                                     params:{story_id: story.id}}">

                                   <div id="hoverImage">
                                    <div>
                                        <b-img class="story-image col-md-12" :src="story.image" alt=""/>
                                    </div>

                                            <div class="col-md-4">
                                                    <p id="cats">{{story.Category}}
                                                    </p>
                                            </div>
                    
                                   </div>

                                   </router-link>
                                 <div id="story-head"  class="story-title text-center">
                                    
                                     <div>

                                     <div   class="col-md-12 container-fluid container-xl d-flex container">
                                          <div >
                                                    <span  id="showUS"  class="iconify" data-icon="ant-design:like-filled" 
                                                    data-inline="false" data-width="24" data-height="24">
                                                    {{story.Like}}
                                                    </span>
                                                    <span id="commentSect" >{{story.Like}}</span>
                                                </div>
                                            
                                            <div >
                                                <span id="showUS"  class="iconify" data-icon="ri:chat-3-fill" 
                                                data-inline="false" data-width="24" data-height="24">
                                                {{story.Comment}}
                                                </span>
                                                <span  >{{story.Comment}}</span>
                                            </div>
                                     
                                     
                                     
                                     </div>
                                              
                                    <div >
                                    
                                            <router-link   v-bind:to="{name:'viewstory',
                                            params:{story_id: story.id}}">
                                            <div id="showUS" class="col-md-3">
                                                <span id="readMore">Read more</span> 
                                        
                                            </div> 

                                            <div >
                                    <h5 id="titleStory" style="height:500px;">{{story.Title}}
                                    </h5>
                                            </div>
                                   
                                            </router-link>
                                    </div> 
                                                
                                
                                      </div>     
                                       
                                    


                                 </div> 
                                </div>
                                </li>
                               </ul>
                            
                            </div>
                   
                    </b-col>
                
                    <!--Predictions-->
                    <b-col md="4">
            
                    <h4 class="text-center">Predictions</h4>

                        <div class="col-md-12">
                        
                        <div class="sidebar">
                            <br><br>
                        <h4 class="sidebar-title">Leagues</h4>
                        <b-card id="prediction" class="sidebar-item tags">
                            <ul>
                            <li><a href="#">EPL</a></li>
                            <li><a href="#">Bundesliga</a></li>
                            <li><a href="#">LA LIGA</a></li>
                            <li><a href="#">Ligue 1</a></li>
                            <li><a href="#">Eredivisie</a></li>
                            <li><a href="#">Kpl</a></li>
                            </ul>
                        </b-card>
            
                        </div> 
                        
                        
                        </div>
  


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
             header: require('@/assets/img/header.jpg'),
            stories:[],
            category:'',
             options: [
      'Football',
      'Boxing',
      'Rugby',
      'Hockey',
      'Tennis'],
      
             select2:[]
            
           
        }
    },created(){
        this.FetchData
         
    },computed(){
        db.collection("Stories").where("category", "==", this.category)
                        .get()
                            .then(queryResult =>{
                                queryResult.forEach(doc =>{
                                    console.log(doc.data())
                                    const data ={
                                'id': doc.id,
                                'Title':doc.data().title,
                                'Story':doc.data().story,
                                'image': doc.data().image
                            }
                            this.stories.push(data)
                        })

                    })
    },mounted(){
            
            db.collection("Stories").get()
                    .then(queryResult =>{
                        queryResult.forEach(doc =>{
                            console.log(doc.data())
                            const data ={
                        'id': doc.id,
                        'Title':doc.data().title,
                        'Category':doc.data().category,
                        'Story':doc.data().story,
                        'image': doc.data().image,
                        'Comment' :doc.data().comment,
                        'Like':doc.data().like
                    }
                    this.stories.push(data)
                })

            })

         
    },methods:{
        SearchCat(cat){
                var x = document.getElementById("fecth");
                 var y = document.getElementById("search");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else if(y.style.display =="none"){
                x.style.display = "none";
                y.style.display = "block";
                
                db.collection("Stories").where("category", "==", cat)
                  .get()
                    .then(queryResult =>{
                        queryResult.forEach(doc =>{
                            console.log(doc.data())
                            const data ={
                        'id': doc.id,
                        'Title':doc.data().title,
                        'Story':doc.data().story,
                        'image': doc.data().image
                    }
                    this.stories.push(data)
                })

            })
            }
               
        },FetchData(){

             db.collection("Stories").get()
                    .then(queryResult =>{
                        queryResult.forEach(doc =>{
                            console.log(doc.data())
                            const data ={
                        'id': doc.id,
                        'Title':doc.data().title,
                        'Category':doc.data().category,
                        'Story':doc.data().story,
                        'image': doc.data().image,
                        'Comment' :doc.data().comment,
                        'Like':doc.data().like
                    }
                    this.stories.push(data)
                })

            })
        }

    }
}
</script>

<style>

#header-image{
    max-width: 100%;
    min-width: 100%;
    width: 90vh;
    margin: 20px;
}
#newsSection{
    margin-top: 60px;
}
#mynav{
    color: #F19124;
    font-weight: 600;
    font-size: 16px;
    margin: 6px;
}
#mynav:hover{
    
    border-bottom: #168E2A 2px solid;
    border-radius:4px;
}
#nav-category{
    background: #fff;
    scroll-behavior: inherit;
    
}
#story-child{
    margin: 8px;
    height: 90vh;
}
#story-head{
    text-align: center;
    height: 20vh;
    
}
#myStory{
   width: 90%;
   height: 10px;
   text-align: center;
}
#titleStory{
    font-weight: 600;
   font-size: 24px;
   color: rgb(61, 59, 59);
   text-align: center;
   height: 500px;
   max-width: 500px;
}
#hoverImage:hover{
    background: #F19124;
    border-radius: 8px;
}
#categoryID{
   font-weight: 600;
   font-size: 17px;
   text-align: center;
   color: #168E2A; 
}
#readMore{
font-size: 13px;
color: #F19124;
text-align: center;
font-weight: 400;
}
#readMore:hover{
font-size: 13px;
color: #168E2A;
font-weight: 400;
}

#cats{
margin-bottom: 20px;
font-size: 18px;
color: #fff;
background: #F19124;
border-radius: 8px;
text-align: center;
font-weight: 500;
}
#cats:hover{
margin-bottom: 20px;
font-size: 18px;
color: #fff;
border-radius: 8px;
background: #168E2A;
font-weight: 500;
}




.story-image{
width: 50%;
max-width: 90%;
min-width: 100%;
height: 40vh;
margin-bottom: 10px;

}


h3{
color: black;
font-weight: 500;
}

.story-image{
font-weight: 400;
font-size: 50px;
}
h4{
     color: #f68c09;
     font-weight: 600;
}
h4:hover{
     color: #08da4e;
     font-weight: 600;
}
#showUS {
    color: #f68c09;
    font-size: 18px;
    margin: 20px;
    font-weight: 300;
}

#showUS :hover {
    color: #08da4e;
    font-size: 18px;
    font-weight: 400;
}

</style>