<template>
  <div id="addstroy">
    <h3>Add new stroy</h3>
    <div class="row">
      <form id="form-upload" @submit.prevent="UpoadStory" class="cols-12 md-12">
        <br />
        <br />
        <div class="row form-group cols-9 md-9">
          <div class="container-d-flex col-md-12">
            <label id="label" for="title">Upload Cover image:</label>
            <input type="file" @change="previewImage" accept="image/*" />
            <br />
            <p>
              Progress: {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>

            <label id="label" for="title">Upload image2:</label>
            <input type="file" @change="previewImage2" accept="image/*" />
            <br />
            <p>
              Progress: {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue2" max="100"></progress>
            </p>

            <label id="label" for="title">Upload image3</label>
            <input type="file" @change="previewImage3" accept="image/*" />
            <br />
            <p>
              Progress: {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>

            <label id="label" for="title">Upload image4</label>
            <input type="file" @change="previewImage4" accept="image/*" />
            <br />
            <p>
              Progress: {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>
          </div>
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
              'Cricket',
              'Golf',
              'VolleyBall',
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
            :options="['Predictions', 'Stories']"
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

          <div class="row form-group cols-9 md-9">
            <label id="label" for="sub-title">Enter sub-heading</label>
            <input
              type="text"
              placeholder="Sub heading"
              v-model="subheading1"
              id="sub-title"
            />
          </div>
          <label id="label" for="story">Sect 1</label>
          <textarea
            type="text"
            placeholder="Write a story...."
            id="story"
            row="300"
            v-model="story1"
            rows="10"
            max-rows="30"
          ></textarea>
          <div class="row form-group cols-9 md-9">
            <label id="label" for="sub-title">Enter sub-heading</label>
            <input
              type="text"
              placeholder="Sub heading"
              v-model="subheading2"
              id="sub-title"
            />
          </div>
          <label id="label" for="story">Sect 2</label>
          <textarea
            type="text"
            placeholder="Write a story...."
            id="story"
            row="300"
            v-model="story2"
            rows="10"
            max-rows="30"
          ></textarea>

          <div class="row form-group cols-9 md-9">
            <label id="label" for="sub-title">Enter sub-heading</label>
            <input
              type="text"
              placeholder="Sub heading"
              v-model="subheading3"
              id="sub-title"
            />
          </div>

          <label id="label" for="story">Sect 3</label>
          <textarea
            type="text"
            placeholder="Write a story...."
            id="story"
            row="300"
            v-model="story3"
            rows="10"
            max-rows="30"
          ></textarea>

          <div class="row form-group cols-9 md-9">
            <label id="label" for="sub-title">Enter sub-heading</label>
            <input
              type="text"
              placeholder="Sub heading"
              v-model="subheading4"
              id="sub-title"
            />
          </div>

          <label id="label" for="story">Sect 4</label>
          <textarea
            type="text"
            placeholder="Write a story...."
            id="story"
            row="300"
            v-model="story4"
            rows="10"
            max-rows="30"
          ></textarea>
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="storylink">Story source link</label>
          <input
            type="text"
            v-model="storylink"
            placeholder="Sub-heading link"
            id="storylink"
          />
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="storylink">Story source link</label>
          <input
            type="text"
            v-model="instagram_embed"
            placeholder="instagram embed"
            id="instagram"
          />
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="">Youtube link</label>
          <input
            type="text"
            v-model="youtube_embed"
            placeholder="Youtube embed"
            id="youtube"
          />
        </div>

        <div class="row form-group cols-9 md-9">
          <label id="label" for="">Social media link</label>
          <input
            type="text"
            v-model="twitter_embed"
            placeholder="Twitter embed"
            id="twitter"
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
      story1: null,
      story2: null,
      story3: null,
      story4: null,
      subheading1: null,
      subheading2: null,
      subheading3: null,
      subheading4: null,
      medialink: null,
      storylink: null,
      twitter_embed: null,
      youtube_embed: null,
      instagram_embed: null,
      picture: null,
      imageData: null,
      imageData2: null,
      imageData3: null,
      imageData4: null,
      uploadValue: 0,
      imageUrl: null,
      imageUrl2: null,
      imageUrl3: null,
      imageUrl4: null,
      doc_id: null,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.imageData = event.target.files[0];
    },
    previewImage2(event) {
      this.uploadValue = 0;
      this.imageData2 = event.target.files[0];
    },
    previewImage3(event) {
      this.uploadValue = 0;
      this.imageData3 = event.target.files[0];
    },
    previewImage4(event) {
      this.uploadValue = 0;
      this.imageData4 = event.target.files[0];
    },

    UpoadStory() {
      if (this.type == null) {
        alert("Type of story is Null");
      } else {
        const storageRef2 = firebase
          .storage()
          .ref(`Storyimages/${this.imageData2.name}`)
          .put(this.imageData2);
        storageRef2.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef2.snapshot.ref.getDownloadURL().then((url2) => {
              this.imageUrl2 = url2;
            });
          }
        );

        const storageRef3 = firebase
          .storage()
          .ref(`Storyimages/${this.imageData3.name}`)
          .put(this.imageData3);
        storageRef3.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef3.snapshot.ref.getDownloadURL().then((url3) => {
              this.imageUrl3 = url3;
            });
          }
        );

        const storageRef4 = firebase
          .storage()
          .ref(`Storyimages/${this.imageData4.name}`)
          .put(this.imageData4);
        storageRef4.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef4.snapshot.ref.getDownloadURL().then((url4) => {
              this.imageUrl4 = url4;
            });
          }
        );

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
                  subtitle: this.subtitle,
                  story: this.story,
                  story1: this.story1,
                  story2: this.story2,
                  story3: this.story3,
                  story4: this.story4,
                  doc_ID: doc_id,
                  subheading1: this.subheading1,
                  subheading2: this.subheading2,
                  subheading3: this.subheading3,
                  subheading4: this.subheading4,
                  category: this.category,
                  instagramLink: this.instagram_embed,
                  twitterLink: this.twitter_embed,
                  otherLinks: this.storylink,
                  youtubeLink: this.youtube_embed,
                  comment: 0,
                  like: 0,
                  image: url,
                  image2: this.imageUrl2,
                  image3: this.imageUrl3,
                  image4: this.imageUrl4,
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
  components: {},
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
