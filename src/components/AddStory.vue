/* eslint-disable vue/require-v-for-key */
<template>
  <div id="addstroy">
    <h3>Add new stroy</h3>
    <div class="row">
      <form id="form-upload" @submit.prevent="UpoadStory" class="cols-12 md-12">
        <br />
        <br />
        <div class="row form-group cols-9 md-9">
          <label id="label" for="title">Upload story image:</label>
          <input type="file" @change="previewImage" accept="image/*" />
          <br />

          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
        </div>

        <div class="row form-group">
          <br />
          <label id="label" for="title">Select category</label>
          <v-select
            class="col-md-6"
            v-model="category"
            :options="[
              'Football',
              'Boxing',
              'Rugby',
              'Hockey',
              'Tennis',
              'Sponsored',
              'News',
            ]"
          />
          <br /><br /><br />
          <h5>You selected: {{ category }}</h5>
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="title">Enter story title</label>
          <input type="text" placeholder="Tile" v-model="title" id="title" />
        </div>

        <div class="row form-group">
          <br />
          <label id="label" for="title">Select type of Story</label>
          <v-select
            class="col-md-6"
            v-model="type"
            :options="['Prediction', 'Stories']"
          />
          <br /><br /><br />
          <h5>You selected: {{ type }}</h5>
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="sub-title">Enter sub-title</label>
          <input type="text" placeholder="Sub Title" v-model="subtitle" id="sub-title" />
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="story">Enter story</label>
          <textarea
            type="text"
            placeholder="Write a story...."
            id="story"
            row="300"
            v-model="story"
            rows="10"
            max-rows="30"
          ></textarea>
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="storylink">Story source link</label>
          <input
            type="text"
            v-model="storylink"
            placeholder="Story sourcs"
            id="storylink"
          />
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="">Social media link</label>
          <input
            type="text"
            v-model="medialink"
            placeholder="Social medis links"
            id="medialink"
          />
        </div>

        <button type="submit" id="btn" class="btn">Pulish Story</button>
        <router-link to="/" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import firebase from "firebase";

export default {
  name: "addstroy",
  data() {
    return {
      type: null,
      category: "Football",
      story_id: null,
      title: null,
      subtitle: null,
      story: null,
      medialink: null,
      storylink: null,
      picture: null,
      imageData: null,
      uploadValue: 0,
      imageUrl: null,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.imageData = event.target.files[0];
    },

    UpoadStory() {
      if (this.type == null) {
        alert("Type of story is Null");
      } else {
        const storageRef = firebase
          .storage()
          .ref(`Storyimages/${this.imageData.name}`)
          .put(this.imageData);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;

            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.imageUrl = url;
              const ref = db.collection(this.type).doc();
              const doc_id = ref.id;
              db.collection(this.type)
                .doc(doc_id)
                .set({
                  title: this.title,
                  story: this.story,
                  doc_ID: doc_id,
                  category: this.category,
                  instagramLink: this.medialink,
                  twitterLink: this.medialink,
                  otherLinks: this.medialink,
                  comment: 0,
                  like: 0,
                  image: url,
                  timestamp: new Date(),
                })
                .then((docRef) => {
                  console.log("Added id" + docRef);
                  this.$router.push("/");
                })
                .catch((error) => console.error(error));
            });
          }
        );
      }
    },
  },
};
</script>

<style>
body {
  color: black;
}
#dropdown-1 {
  background: #fff;
}
#addstroy {
  margin: 30px;
}
#form-upload {
  font-size: 20px;
}
#story {
  height: 200px;
  border-block-color: #b1b1b1;
}
#label {
  font-size: 17px;
  margin: 10px;
}
.btn {
  margin: 20px;
  background: #b1b1b1;
  color: aquamarine;
  font-weight: 500;
}
</style>
