<template>
    <div id="register">
        <div class="container">
            <h2>Registration</h2> 

            <form @submit.prevent="Registraion()">
                     <div class="col-md-12">
                    
                    
                 <div class="row form-group  cols-9 md-9" >
                    <label id="label" for="">Social media link</label>
                    <input type="text" v-model="medialink" placeholder="Social medis links" id="medialink" >
                 </div>
                    <label id="label" for="storylink">Story source link</label>
                    <input type="text" v-model="email" placeholder="Story sourcs" id="storylink" >
                
                    
                        <button type="submit" id="btn" class="btn">Pulish Story</button>
                        <router-link to="/" class="btn grey">Cancel</router-link>
                    
                
                  </div>
            
            </form>
               
        
        </div>
    
    </div>
</template>
<script>
import firebase from 'firebase'



export default {
    name:'register',
    data(){
     return {
         username:null,
         email:null,
         password:null,
         error:null
     }
     

    },methods:{

        submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
    }
    
}
</script>
