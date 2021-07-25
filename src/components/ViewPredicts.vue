<template>
    <div id="viewpredicts">
      <div class="col-md-12" align="center">
      <div class="container">
        <img id="header-image" :src="header2" style="width: 100%" />
      </div>
    </div>


    <div class="col-md-12">
      <h3 id="story-view-title">{{ title }}</h3>
      <h5 id="story-sub-title">{{ subtitle }}</h5>
      <div class="story-view-image col-md-9" align="center">
        <img id="imageViewStory" class="fluid" :src="imageUrl" alt="" />
      </div>

      <div id="time">
        <!-- <p>{{ timestamp }}</p> -->
      </div>

      <b-container class="row">
        <b-row>
          <!---Col No.1-->
          <b-col md="9">
            <div class="col-md-12">
              <div class="col-md-12 container-fluid d-flex">
                <div id="commentSect" v-on: @click="LikeCount()">
                  <span>
                    <i id="showUS" class="ri-heart-3-fill"> {{ like }} </i></span
                  >
                </div>

                <div id="commentSect">
                  <span>
                    <i id="showUS" class="ri-chat-3-fill"> {{ comment }} </i></span
                  >
                </div>

                <span
                  id="showUS"
                  class="iconify"
                  data-icon="ci:share"
                  data-inline="false"
                  data-width="30"
                  data-height="30"
                ></span>
              </div>

              <!--<div id="socialmedia" class="col-md-12 container-fluid d-flex">
                <i
                  id="shares"
                  @click.prevent="ShareBtn"
                  class="shares ri-facebook-circle-fill btn-floating btn-small indigo"
                ></i>
                <i id="shares" class="ri-twitter-line btn-floating btn-small blue"></i>
                <i id="shares" class="ri-instagram-line btn-floating btn-small red"></i>

                <div class="addthis_inline_share_toolbox"></div>
              </div>  -->
              <div class="elfsight-app-d4e75d53-2caf-418d-9b3e-76a3c4fe7740"></div>
              <hr />

              <div class="col-md-12" id="story-view-story">
                <p>{{ story }}</p>

                <div class="story-view-image col-md-9" align="center">
                  <img id="imageViewStory1" class="fluid" :src="imageUrl2" alt="" />
                </div>
                <a  :href="otherLinks" ><h4>{{ subheading1 }}</h4></a>
                <p>{{ story1 }}</p>

                 

                <div class="story-view-image col-md-9" align="center">
                  <img id="imageViewStory1" class="fluid" :src="imageUrl3" alt="" />
                </div>
                <a  :href="otherLinks" ><h4>{{ subheading2 }}</h4></a>
                <p>{{ story2 }}</p>

                <div class="col-md-9" align="center">
                  <img id="imageViewStory1" class="fluid" :src="imageUrl4" alt="" />
                </div>
                <a  :href="otherLinks" ><h4>{{ subheading3 }}</h4></a>
                <p>{{ story3 }}</p>

                <p><a :href="otherLinks"></a></p>
              </div>

              <div>
                <b-embed
                  id="embedSource"
                  type="iframe"
                  aspect="250by150"
                  :src="otherLinks"
                ></b-embed>
              </div>
              <p>{{ story4 }}</p>
            </div>

            <div>
              <form
                @submit.prevent="Writecomment"
                class="container-fluid container-xl d-flex container col-md-9"
              >
                <div class="col-md-12">
                  <b-form-input
                    v-model="comments"
                    id="commentInput"
                    placeholder="   Write a comment..."
                  >
                  </b-form-input>
                </div>

                <div>
                  <button
                    style="margin: 2px"
                    type="submit"
                    class="btn-floating btn-mini orange"
                  >
                    <i class="ri-send-plane-2-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </b-col>

          <!---Col No.2-->
          <b-col md="3">
            <div id="col2" class="container col-md-12">
              <h5>Trending</h5>
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
                </b-card>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
        
    </div>
</template>
<script>
import db from "./firebaseInit";
import moment from "moment";
export default {
      name: "viewpredict",
  data() {
    return {
      stories: [],
      header2: require("@/assets/img/header2.jpg"),
      predict_id: null,
      title: null,
      story: null,
      like: 0,
      imageUrl: null,
      comments: null,
      otherLinks: null,
      comment: null,
      time: null,
    };
  },
  created() {
    this.fetchData;
    this.FetchData;
    this.ShareBtn;
  },
  computed: {
    timestamp: function () {
      return moment(this.time).format("YYYY-MM-DD [at] hh:mm");
    },
  },

  beforeRouteEnter(to, from, next) {
    db.collection("Predictions")
      .where("doc_ID", "==", to.params.predict_id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            (vm.predict_id = doc.data().doc_ID),
              (vm.title = doc.data().title),
              (vm.story = doc.data().story),
              (vm.story1 = doc.data().story1),
              (vm.story2 = doc.data().story2),
              (vm.story3 = doc.data().story3),
              (vm.story4 = doc.data().story4),
              (vm.like = doc.data().like),
              (vm.comment = doc.data().comment),
              (vm.otherLinks = doc.data().otherLinks),
              (vm.time = doc.data().timestamp),
              (vm.imageUrl = doc.data().image),
              (vm.imageUrl1 = doc.data().image1),
              (vm.imageUrl2 = doc.data().image2),
              (vm.imageUrl3 = doc.data().image3),
              (vm.subtitle = doc.data().subtitle),
              (vm.subheading1 = doc.data().subheading1),
              (vm.subheading2 = doc.data().subheading2),
              (vm.subheading3 = doc.data().subheading3),
              (vm.subheading4 = doc.data().subheading5),
              (vm.imageUrl4 = doc.data().image4);
          });
        });
      });
  },
  mounted() {
    db.collection("Stories")
      .get()
      .then((queryResult) => {
        queryResult.forEach((doc) => {
          console.log(doc.data());
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
  },
  filters: {
    moment: function (time) {
      return moment(time).format("MMMM Do YYYY, h:mm:ss a");
    },
  },

  watch: {
    $route() {
      "fetchData", this.fetchData;
    },
  },
  methods: {
    moment: function () {
      return moment();
    },
    format_date(value) {
      if (value) {
        const date1 = new Date(value);
        return moment(String(date1)).format("ddd, MMMM YYYY");
      }
    },
    FetchData() {
      var today = new Date();
      db.collection("Predictions")
        .orderBy("timestamp")
        .startAfter(today)
        .get()
        .then((queryResult) => {
          queryResult.forEach((doc) => {
            console.log(doc.data());
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
    },

    
    LikeCount: function () {
      var sfDocRef = db.collection("Predictions").doc(this.$route.params.predict_id);

      db.runTransaction((transaction) => {
        return transaction.get(sfDocRef).then((sfDoc) => {
          this.like = sfDoc.data().like + 1;

          transaction.update(sfDocRef, { like: this.like });
          return this.like;
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
    Writecomment() {
      if (this.comments == null) {
        alert("Comment is empty");
      } else {
        db.collection("Predictions")
          .doc(this.$route.paramspredict)
          .collection("Comments")
          .add({
            comment: this.comments,
          })
          .then((docRef) => {
            console.log("Added id" + docRef.id);

            var sfDocRef = db.collection("Predictions").doc(this.$route.params.predict_id);
            db.runTransaction((transaction) => {
              return transaction.get(sfDocRef).then((sfDoc) => {
                this.comment = sfDoc.data().comment + 1;

                transaction.update(sfDocRef, { comment: this.comment });
                return this.comment;
              });
            })
              .then((newPopulation) => {
                console.log("Commnents count", newPopulation);
              })
              .catch((err) => {
                // This will be an "population is too big" error.
                console.error(err);
              });

            this.comments = "";
            alert("Comment Uploaded");
          })
          .catch((error) => console.error(error));
      }
    },
  },
}
</script>
<style scoped>

.flexbox-item {
  margin-top: 40px;
  max-width: 400px;
  width: 300px;
  justify-content: center;
}
@media (max-width: 400px) {
  .flexbox-item {
    flex: 100%;
    width: 100%;
    max-height: 40vh;
  }
}
#commentInput {
  border: #f19124 1px solid;
  border-radius: 4px;
}
#commentInput:hover {
  border: #168e2a 1px solid;
  border-radius: 4px;
}
#header-image {
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
  flex-flow: column;
  vertical-align: middle;
  margin-top: 30px;
}

@media (max-width: 400px) {
  #header-image {
    flex: 100%;
    max-width: 100%;
  }
}
#Cardview {
  max-width: 300px;
  width: 300px;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-flow: row;
  flex: 50%;
  flex-wrap: nowrap;
}
#shares {
  margin: 10px;
}
#col2 {
  margin-top: 100px;
  margin-right: 200px;
}
#btn {
  margin-top: 10px;
  color: #f19124;
  background-color: transparent;
  padding: 0px 10px 0px 10px;
  border: #f19124 2px solid;
  border-radius: 12px;
}
#btn:hover {
  margin-top: 10px;
  color: #168e2a;
  background-color: transparent;
  padding: 0px 10px 0px 10px;
  border: #168e2a 2px solid;
  border-radius: 12px;
}

#embedSource {
  flex: 50%;
  justify-content: center;
}

#imageViewStory {
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  flex-flow: row;
  justify-content: center;
  vertical-align: middle;
}

@media (max-width: 600px) {
  #imageViewStory,
  #embedSource {
    flex: 100%;
    max-width: 100%;
  }
}

#imageViewStory1 {
  display: flex;
  width: 100%;
  flex: 100%;
}

@media (max-width: 800px) {
  #imageViewStory1 {
    flex: 100%;
    max-width: 100%;
  }
}

#viewstory {
  color: #808080;
}

#commentSect {
  color: #f19124;
  font-weight: 600;
  margin-top: 20px;
  font-size: 16px;
}
#showUS {
  color: #f19124;
}
#showUS:hover {
  color: #168e2a;
}

#commentSect:hover {
  color: #168e2a;
  font-weight: 600;
  font-size: 16px;
}
#story-sub-title {
  margin: 10px;
  font-weight: 450;
  font-size: 20px;
}
#story-view-title {
  margin: 10px;
  font-weight: 600;
  font-size: 40px;
}

#story-view-story {
  font-weight: 300;
  font-size: 17px;
}
    
</style>