<template>
  <div id="viewstory">
    <div class="col-md-12" align="center">
      <div class="container">
        <img id="header-image" :src="header2" style="width: 100%" />
      </div>
    </div>

    <!-- <b-container class="container">
                    <b-row>
                        <b-col>1 of 2</b-col>
                        <b-col>2 of 2</b-col>
                    </b-row>

                    <b-row>
                        <b-col>1 of 3</b-col>
                        <b-col>2 of 3</b-col>
                        <b-col>3 of 3</b-col>
                    </b-row>
            </b-container> -->

    <div class="col-md-12">
      <h3 id="story-view-title">{{ title }}</h3>
      <div class="story-view-image col-md-9" align="center">
        <img id="imageViewStory" class="fluid" :src="imageUrl" alt="" />
      </div>
      <div id="time">
        <!-- <p>{{ timestamp }}</p> -->
      </div>

      <b-container class="row">
        <b-row>
          <!---Col No.1-->
          <b-col md="7">
            <div class="col-md-12">
              <div class="col-md-12 container-fluid d-flex">
                <div id="commentSect" v-on: @click="LikeCount()">
                  <span>
                    <i id="showUS" class="ri-thumb-up-fill"> {{ like }} </i></span
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

              <div id="socialmedia" class="col-md-12 container-fluid d-flex">
                <i
                  id="shares"
                  @click.prevent="ShareBtn"
                  class="shares ri-facebook-circle-fill btn-floating btn-small indigo"
                ></i>
                <i id="shares" class="ri-twitter-line btn-floating btn-small blue"></i>
                <i id="shares" class="ri-instagram-line btn-floating btn-small red"></i>

                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                <div class="addthis_inline_share_toolbox"></div>
              </div>
              <hr />

              <div class="col-md-12" id="story-view-story">
                <p>{{ story }}</p>
              </div>

              <div>
                <b-embed
                  id="embedSource"
                  type="iframe"
                  aspect="250by150"
                  :src="otherLinks"
                ></b-embed>
              </div>

              <div class="container-fluid container-xl d-flex container col-md-12">
                <form
                  @submit.prevent="Writecomment(story_id)"
                  class="container-fluid container-xl d-flex container col-md-12"
                >
                  <div class="col-md-12">
                    <b-form-input v-model="comments" placeholder="Comment...">
                    </b-form-input>
                  </div>

                  <div>
                    <button type="submit" class="btn-floating btn-mini orange">
                      <i class="ri-send-plane-2-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </b-col>

          <!---Col No.2-->
          <b-col md="5">
            <div id="col2" class="container col-md-12">
              <b-card
                id="Cardview"
                title="Trending"
                align="center"
                tag="article"
                class="md-12"
              >
                <!-- list group -->
                <b-list-group>
                  <!-- list item-->
                  <b-list-group-item
                    href="#"
                    class="flex-column align-items-start"
                    v-for="story in stories"
                    v-bind:key="story.id"
                  >
                    <router-link
                      id="readMore"
                      v-bind:to="{ name: 'viewstory', params: { story_id: story.id } }"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1" style="width: 500px">{{ story.Title }}</h5>
                        <small> </small>
                      </div>
                    </router-link>

                    <p class="mb-1">
                      <!-- {{ story.Story }} -->
                    </p>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
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
  name: "viewstory",
  data() {
    return {
      stories: [],
      header2: require("@/assets/img/header2.jpg"),
      story_id: null,
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
    db.collection("Stories")
      .where("doc_ID", "==", to.params.story_id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            (vm.story_id = doc.data().doc_ID),
              (vm.title = doc.data().title),
              (vm.story = doc.data().story),
              (vm.like = doc.data().like),
              (vm.comment = doc.data().comment),
              (vm.otherLinks = doc.data().otherLinks),
              (vm.time = doc.data().timestamp),
              (vm.imageUrl = doc.data().image);
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
      db.collection("Stories")
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

    fetchData(id) {
      db.collection("Stories")
        .where("doc_ID", "==", id)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            (this.story_id = doc.data().doc_ID),
              (this.title = doc.data().title),
              (this.story = doc.data().story),
              (this.like = doc.data().like),
              (this.comment = doc.data().comment),
              (this.otherLinks = doc.data().otherLinks),
              (this.time = doc.data().timestamp),
              (this.imageUrl = doc.data().image);
          });
          console.log("Story", this.title);
        });
    },
    LikeCount: function () {
      var sfDocRef = db.collection("Stories").doc(this.$route.params.story_id);

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
        alert("Comment is null");
      } else {
        db.collection("Stories")
          .doc(this.$route.params.story_id)
          .collection("Comments")
          .add({
            comment: this.comments,
          })
          .then((docRef) => {
            console.log("Added id" + docRef.id);

            var sfDocRef = db.collection("Stories").doc(this.$route.params.story_id);
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
    ShareBtn() {
      let doc = encodeURI(document.location.href);

      var shareFacebook = document.querySelector(".shares");

      shareFacebook.setAttribute("href", `https://www.facebook.com/sharer.php?u=${doc}`);
      console.log(shareFacebook);
    },
  },
};
</script>

<style scoped>
#header-image {
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
  margin-top: 30px;
  flex-flow: row;
  justify-content: center;
  vertical-align: middle;
}

@media (max-width: 400px) {
  #header-image {
    flex: 100%;
    max-width: 100%;
  }
}
#Cardview {
  display: flex;
  width: 100%;
  flex: 50%;
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
#story-view-title {
  margin: 10px;
  font-weight: 600;
  font-size: 40px;
}

#story-view-story {
  font-weight: 500;
  font-size: 20px;
}
</style>
