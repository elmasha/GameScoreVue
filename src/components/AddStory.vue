<template>
  <div id="addstroy">
    <h2>DashBoard</h2>
    <div class="">
      <div class="col-md-9 justify-content-between d-flex">
        <div class="row">
          <div class="col-md-6">
            <span
              >Stories <br /><strong>{{ storyCount }}</strong>
            </span>
          </div>
          <div class="col-md-6">
            <span
              >Predictions <br /><strong>{{ predictCount }}</strong></span
            >
          </div>

          <div class="col-md-6">
            <span
              >Published <br /><strong>{{ publishCount }}</strong></span
            >
          </div>

          <div class="col-md-6">
            <span
              >Trash <br /><strong>{{ trash }}</strong></span
            >
          </div>

          <div class="col-md-6">
            <span
              >Draft <br /><strong>{{ draftCount }}</strong></span
            >
          </div>
        </div>
      </div>
      <div></div>
    </div>

    <b-container class="row">
      <b-row></b-row>
      <!---Col No.1-->
      <b-col md="8">
        <h4 style="color: #000">Add stroy</h4>

        <div class="row">
          <form id="form-upload" @submit.prevent="UpoadStory" class="cols-12 md-12">
            <editor
              class="form-group"
              height="900px"
              :initialValue="editorText"
              :value="editorText"
              v-model="editorText"
              v-on:event="editorText"
              previewStyle="vertical"
            />
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
                  <progress id="progress" :value="uploadValue" max="100"></progress>
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
                  '',
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

            <div>
              <vue-suglify :name="title" :model="slug" />
              {{ slug }}
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
              <input
                type="text"
                placeholder="Sub Title"
                v-model="subtitle"
                id="sub-title"
              />
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
        </div></b-col
      >
      <b-col md="4">
        <div id="col2" class="col-md-12">
          <h5>Stories</h5>
          <perfect-scrollbar>
            <div v-for="story in stories" v-bind:key="story.id">
              <b-card
                id="Cardview"
                align="left"
                tag="article"
                class="flexbox-item col-md-12"
                style="max-width: 300rem"
                :header="story.Title"
              >
                <!-- list group -->
                <i
                  @click="deleteStory(story.id)"
                  class="ri-delete-bin-6-line btn-floating btn-small red"
                ></i>
                <i
                  style="margin: 6px"
                  @click="UpdateStory(predict.id)"
                  class="ri-edit-2-fill btn-floating btn-small blue"
                ></i>
              </b-card></div
          ></perfect-scrollbar>
        </div>
        <div id="col2" class="col-md-12">
          <h5>Predictions</h5>
          <perfect-scrollbar>
            <div v-for="predict in predictions" v-bind:key="predict.id">
              <b-card
                id="Cardview"
                align="left"
                tag="article"
                class="flexbox-item col-md-12"
                style="max-width: 300rem"
                :header="predict.Title"
              >
                <!-- list group -->
                <i
                  @click="deleteStory(predict.id)"
                  class="ri-delete-bin-6-line btn-floating btn-small red"
                ></i>
                <i
                  style="margin: 6px"
                  @click="UpdateStory(predict.id)"
                  class="ri-edit-2-fill btn-floating btn-small blue"
                ></i>
              </b-card></div
          ></perfect-scrollbar>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import db from "./firebaseInit";
import db2 from "./firebaseInit";
import firebase from "firebase";

import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/vue-editor";

export default {
  name: "addstroy",
  data: function () {
    return {
      editorText: null,
      viewerText: "# This is Viewer.\n Hello World.",
      storyCount: 0,
      predictCount: 0,
      trash: 0,
      draftCount: 0,
      publishCount: 0,
      stories: [],
      predictions: [],
      type: null,
      category: "",
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
      slug: "",
    };
  },

  updated() {
    this.StoryCount;
  },
  mounted() {
    let start = new Date("2020-01-01");
    db.collection("Stories")
      .where("timestamp", ">", start)
      .orderBy("timestamp", "desc")
      .get()
      .then((queryResult) => {
        queryResult.forEach((doc) => {
          const data = {
            id: doc.id,
            Title: doc.data().title,
            Category: doc.data().category,
            Story: doc.data().story,
            image: doc.data().image,
            Comment: doc.data().comment,
            Like: doc.data().like,
          };
          this.stories.push(data);
        });
      });
    db2
      .collection("Predictions")
      .get()
      .then((queryResult6) => {
        queryResult6.forEach((doc) => {
          const data4 = {
            id2: doc.id,
            Title: doc.data().title,
            Category: doc.data().category,
            Story2: doc.data().story,
            image2: doc.data().image,
            Comment2: doc.data().comment,
            Like2: doc.data().like,
          };
          this.predictions.push(data4);
        });
      });

    db.collection("Admin")
      .doc("gamescores")
      .get()
      .then((doc) => {
        (this.storyCount = doc.data().StoryCount),
          (this.predictCount = doc.data().PredictCount),
          (this.draftCount = doc.data().DraftCount),
          (this.publishCount = doc.data().PublishCount),
          (this.trash = doc.data().Trash);
        console.log("Trash", this.trash);
      });
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
    deleteStories(val) {
      db.collection("Stories")
        .doc(val)
        .delete({})
        .then(() => {
          console.log("Item Delete", val);
          this.$router.push("/addstory");
        })
        .catch((error) => console.error(error));
    },
    StoryCount: function () {
      var sfDocRef = db.collection("Admin").doc("gamescores");

      db.runTransaction((transaction) => {
        return transaction.get(sfDocRef).then((sfDoc) => {
          var conts = sfDoc.data().StoryCount + 1;

          transaction.update(sfDocRef, { StoryCount: conts });
          return conts;
        });
      })
        .then((newPopulation) => {
          console.log("like count", newPopulation);
        })
        .catch((err) => {
          // This will be an "population is too big" error.
          console.error(err);
        });
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
                  story: this.editorText,
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
                  this.StoryCount;
                  this.$router.push("/");
                })
                .catch((error) => console.error(error));
            });
          }
        );
      }
    },

    fetchData() {
      db.collection("Admin")
        .doc("gamescores")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            (this.storyCount = doc.data().StoryCount),
              (this.predictCount = doc.data().PredictCount),
              (this.draftCount = doc.data().DraftCount),
              (this.publishCount = doc.data().PublishCount),
              (this.trash = doc.data().Trash);
          });
          console.log("Trash", this.trash);
        });
    },
  },
  components: {
    Editor,
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
  border-color: #b1b1b1 solid 1px;
}
#label {
  font-size: 17px;
  margin: 10px;
}
ps {
  height: 600px;
}
.btn {
  margin: 20px;
  background: #b1b1b1;
  color: aquamarine;
  font-weight: 500;
}

.slug-widget {
  display: flex;
  justify-content: start;
  align-items: center;
}
.wrapper {
  margin-left: 8px;
}
</style>
