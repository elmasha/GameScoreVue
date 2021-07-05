<template>
    <div id="login" align="center">
        <h3 id="login-title">Login</h3>
        <hr>
        <div class="col-md-10" >
        <form @submit.prevent="submit"> 

                 <div class="row form-group  col-md-6" >
                    <label id="label" for="storylink">User name</label>
                    <input type="text" required v-model="username" placeholder="User name" id="username" >
                </div>

                <div class="row form-group  col-md-6" >
                    <label id="label" for="storylink">Provide your email*</label>
                    <input type="email" required v-model="email" placeholder="Enter email" id="email" >
                </div>

                <div class="row form-group  col-md-6" >
                    <label id="label" for="">Enter password *</label>
                    <input type="password" required v-model="password" placeholder="Enter password" id="password" >
                 </div>
                

                

                <button type="submit" id="btn" class="btn col-md-5">Log in</button>
                <div>I don't hava an account<router-link to="/register" class="">Register</router-link></div>
        
        </form>
        </div>
    </div>
</template>

<script scoped>
import firebase from 'firebase'

export default {
    name:'login',
    data() {
        return {
         username:null,
         email:"",
         password:null,
         error:null
        }
    },methods:{

    submit() {
      
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => { 
          this.$router.replace({ name: 'addstory' });
            console.log( "User",  data.user.uid)
                
        })
        .catch(err => {
          this.error = err.message;
        });
        
      
    }
    }
}
</script>
<style scoped>
#login{
margin: 60px;
}
#login-title{
    font-size: 20px;
    font-weight: 600;
    color: #F19124;
    margin-bottom: 60px;
}
</style>