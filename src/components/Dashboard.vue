<template>
  <div>
    <div id="navlinks" class="container">
      <p></p>
      <ul class="nav">
        <li class="nav-item">
          <a href="/"><img id="gamelogo" :src="logo" alt="" /></a>
        </li>
      </ul>

      <ul class="nav justify-content-end">
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> -->
        <li>
          <div id="selcetor" class="container-xl d-flex">
            <v-select
              v-model="cats"
              placeholder="   Search..."
              class="col-md-12"
              :options="options"
            ></v-select>

            <i
              @click="SearchCat(cats)"
              style="margin: 9px"
              class="ri-search-line col-md-1"
            ></i>
          </div>
        </li>
      </ul>

      <ul class="nav justify-content-rigt">
        <li class="nav-item">
          <a id="navlinks" class="nav-link" href="#">Livescore</a>
        </li>
        <li class="nav-item">
          <a id="navlinks" class="nav-link" href="#">Predictions</a>
        </li>
        <li id="youtubeLink" class="nav-item">
          <a
            id="youtubeText"
            class="nav-link"
            href="https://www.youtube.com/channel/UCVVXonDa0QM4q6RSkUNG4ag"
          >
            <span id="yticon">Watch Live<i class="ri-youtube-fill"></i></span>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <b-card title="Card Title" no-body> </b-card>
    </div>
    <div>
      <div id="dashboard">
        <div class="col-md-12 text-center">
          <div id="header-image" class="">
            <img :src="header" align="center" style="width: 100%" />
          </div>
        </div>
        <b-container id="newsSection" class="bv-example-row">
          <b-row>
            <b-col md="12" cols="12">
              <!--News-->
              <h4 class="text-left">News</h4>
              <br />

              <!--Fecth Div-->

              <div class="row" id="fetch">
                <perfect-scrollbar>
                  <div class="with-header flexbox-container">
                    <div v-for="(story, id) in stories" v-bind:key="id" class="col-md-4">
                      <router-link
                        v-bind:to="{
                          name: 'viewstory',
                          params: { story_id: story.id },
                        }"
                      >
                        <b-card-group>
                          <b-card
                            id="CardView"
                            :header="story.timestamp"
                            :img-src="story.image"
                            img-top
                            tag="article"
                            style="max-height: 100rem"
                            :footer="story.Category"
                            class="flexbox-item col-md-12"
                          >
                            <b-card-text>
                              <h5>{{ story.Title }}</h5>
                            </b-card-text>
                            <div id="story-head" class="story-title text-center">
                              <div class="container-fluid container-xl d-flex">
                                <div id="commentSect">
                                  <i id="showUS" class="ri-heart-3-fill">
                                    {{ story.Like }}</i
                                  >
                                </div>

                                <div id="commentSect">
                                  <i id="showUS" class="ri-chat-3-fill">
                                    {{ story.Comment }}
                                  </i>
                                </div>
                              </div>
                            </div>
                          </b-card>
                        </b-card-group>
                      </router-link>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>
            </b-col>

            <!--Predictions-->
            <b-col md="12" cols="12">
              <h4>Predictions</h4>

              <div class="">
                <div class="row">
                  <perfect-scrollbar>
                    <div class="d-flex flexbox-container">
                      <div
                        v-for="(predict, id2) in predictions"
                        v-bind:key="id2"
                        class="col-md-3"
                      >
                        <router-link
                          v-bind:to="{
                            name: 'viewpredicts',
                            params: { predict_id: predict.id2 },
                          }"
                        >
                          <b-card-group>
                            <b-card
                              id="PredictCard"
                              :header="predict.Category2"
                              :img-src="predict.image2"
                              img-top
                              tag="article"
                              style="max-height: 100rem"
                              class="flexbox-item d-flex col-md-12"
                            >
                              <b-card-text>
                                <h5>{{ predict.Title2 }}</h5>
                              </b-card-text>
                              <div id="story-head" class="story-title text-center"></div>
                            </b-card>
                          </b-card-group>
                        </router-link>
                      </div>
                    </div>
                  </perfect-scrollbar>
                </div>
              </div>
            </b-col>

            <b-col cols="12" md="12">
              <h4></h4>

              <div class="result-list">
                <article
                  v-for="(article, index) in articles"
                  :key="index"
                  @click="navTo(article.url)"
                >
                  <header>
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="" />
                    <i v-else class="fas fa-image"></i>
                  </header>
                  <section v-html="article.title"></section>
                  <footer>
                    <i class="fas fa-chevron-right"></i>
                  </footer>
                </article>
              </div>
              <div ref="infinitescrolltrigger" id="scroll-trigger">
                <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!--<div class="fixed-action-btn">
        <div class="elfsight-app-d4e75d53-2caf-418d-9b3e-76a3c4fe7740"></div>
          <a href="" class="btn-floating btn-large green">
            <i class="ri-refresh-line"></i>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
import db2 from "./firebaseInit";
//import firebase from "firebase";
export default {
  name: "dashboard",
  props: ["apiKey"],

  data() {
    return {
      timestamp: "",
      logo: require("@/assets/logo.png"),
      slide: 0,
      sliding: null,
      header: require("@/assets/img/header.jpg"),
      header2: require("@/assets/img/header2.jpg"),
      stories: [],
      predictions: [],
      category: "",
      cats: null,
      options: ["Football", "Boxing", "Rugby", "Hockey", "Tennis", "Golf", "VolleyBall"],
      select2: [],
      apiUrl: "",
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: "",
      articles: [],
      country: "ke",
    };
  },
  created() {
    this.FetchData;
    this.FetchPredictions;
    this.fetchTopNews();
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
  },
  mounted() {
    this.scrollTrigger();
    //const  startfulldate = new Date();
    let start = new Date("2020-01-01");
    //var currentTime = firebase.firestore.Timestamp.fromDate(new Date(804800000));
    //var searchDate = new Date(currentTime);
    db.collection("Stories")
      .where("timestamp", ">", start)
      .orderBy("timestamp", "desc")
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

    db2
      .collection("Predictions")
      .get()
      .then((queryResult6) => {
        queryResult6.forEach((doc) => {
          console.log("Predictions", doc.data());
          const data4 = {
            id2: doc.id,
            Title2: doc.data().title,
            Category2: doc.data().category,
            Story2: doc.data().story,
            image2: doc.data().image,
            Comment2: doc.data().comment,
            Like2: doc.data().like,
          };
          this.predictions.push(data4);
        });
      });
  },
  methods: {
    navTo(url) {
      window.open(url);
    },
    resetData() {
      this.currentPage = 1;
      this.articles = [];
    },
    fetchSearchNews() {
      if (this.searchword !== "") {
        this.apiUrl =
          "https://newsapi.org/v2/everything?q=" +
          this.searchword +
          "&pageSize=" +
          this.maxPerPage +
          "&apiKey=" +
          this.apiKey;
        this.isBusy = true;
        this.resetData();
        this.fetchData();
      } else {
        this.fetchTopNews();
      }
    },
    fetchTopNews() {
      this.apiUrl =
        "https://newsapi.org/v2/top-headlines?country=" +
        this.country +
        "&pageSize=" +
        this.maxPerPage +
        "&apiKey=" +
        this.apiKey;
      this.isBusy = true;
      this.searchword = "";

      this.resetData();
      this.fetchData();
    },

    fetchData() {
      let req = new Request(this.apiUrl + "&page=" + this.currentPage);
      fetch(req)
        .then((resp) => resp.json())
        .then((data) => {
          this.totalResults = data.totalResults;
          data.articles.forEach((element) => {
            this.articles.push(element);
          });
          this.isBusy = false;
          this.showloader = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showloader = true;
            this.currentPage += 1;
            this.fetchData();
          }
        });
      });
      observer.observe(this.$refs.infinitescrolltrigger);
    },
    onSlideStart: function (slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd: function (slide) {
      console.log(slide);
      this.sliding = false;
    },
    SearchCat() {
      this.stories.splice(this.stories);
      db.collection("Stories")
        .where("category", "==", this.cats)
        .get()
        .then((queryResult) => {
          queryResult.forEach((doc) => {
            console.log(doc.data());
            const data = {
              id: doc.id,

              Title: doc.data().title,
              Story: doc.data().story,
              Category: doc.data().category,
              image: doc.data().image,
              Comment: doc.data().comment,
              Like: doc.data().like,
            };
            this.stories.push(data);
          });
        });
    },
    FetchPredictions() {
      // let start = new Date("2020-01-01");
      db2
        .collection("Predictions")
        .get()
        .then((queryResult1) => {
          queryResult1.forEach((doc) => {
            console.log("Predictions", doc.data());
            const data1 = {
              id2: doc.id,
              Title2: doc.data().title,
              Category2: doc.data().category,
              Story2: doc.data().story,
              image2: doc.data().image,
              Comment2: doc.data().comment,
              Like2: doc.data().like,
            };
            this.predictions.push(data1);
          });
        });
    },
    FetchData() {
      //  var currentTime = firebase.firestore.Timestamp.fromDate(new Date(804800000));
      let start = new Date("2017-01-01");
      db.collection("Stories")
        .where("timestamp", "<", start)
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
  },
};
</script>

<style>
article {
  display: grid;
  grid-template-columns: 200px auto 40px;
  grid-template-rows: 100px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  cursor: pointer;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  max-width: 100%;
  height: auto;
}
i {
  font-size: 2rem;
}
#yticon {
  margin: 3px;
  margin-bottom: 10px;
}
#youtubeLink {
  background: rgb(245, 3, 3);
  border-radius: 8px;
  color: #fff;
  transition: 0.3s;
}
#youtubeLink:hover {
  background: transparent;
  border: solid 1px rgb(245, 3, 3);
  border-radius: 8px;
  color: rgb(245, 3, 3);
}
#youtubeText {
  color: #fff;
}
#youtubeText:hover {
  color: rgb(245, 3, 3);
}

a {
  color: #f19124;
}
#gamelogo {
  width: 25%;
}
.ps {
  height: 800px;
}

@media (max-width: 350px) {
  #gamelogo {
    flex: 50%;
    width: 50%;
  }
}

#CardView {
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  flex-direction: row;
  padding: 0px 0px 0px 0px;
}
#navbar {
  display: flex;
  width: 100%;
  padding: 100px;
}

#Gmlogo {
  flex: 100%;
  width: 100px;
  width: 200px;
  height: 40vh;
}

.nav-link {
  color: #f19124;
}
#navcard {
  display: flex;
}
#btnSearch {
  background: transparent;
  border: #f19124 4px solid;
  padding: 8px;
  border-radius: 4px;
}
.flexbox-item {
  max-width: 370px;
  width: 370px;
  justify-content: center;
}
@media (max-width: 400px) {
  .flexbox-item {
    flex: 100%;
    width: 100%;
    max-height: 40vh;
  }
}
.flexbox-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
}
.img {
  transform: scale(1.5);
}
.story-image {
  flex: 100%;
  height: 300px;
  justify-content: center;
}

#header-image {
  display: flex;
  flex-wrap: nowrap;
  flex: 100%;
}

@media (max-width: 600px) {
  #header-image,
  .story-image {
    flex: 100%;
    max-width: 100%;
  }
}
#newsSection {
  margin-top: 60px;
}
#mynav {
  color: #f19124;
  font-weight: 600;
  font-size: 15px;
  margin: 6px;
}
#mynav:hover {
  border-bottom: #168e2a 2px solid;
  border-radius: 4px;
}
#nav-category {
  background: #fff;
  scroll-behavior: inherit;
}
#story-child {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 100%;
  flex-grow: 1;
  margin-top: 30px;
  width: 600px;
  flex-flow: row;
  justify-content: center;
  max-height: 130vh;
  margin: 10px;
}
#story-head {
  text-align: center;
}
#myStory {
  width: 90%;
  height: 10px;
  text-align: center;
}
#titleStory {
  font-weight: 600;
  font-size: 24px;
  color: rgb(61, 59, 59);
  text-align: center;
  display: flex;
  max-width: 100%;
  text-overflow: ellipsis;
}

#categoryID {
  font-weight: 600;
  font-size: 17px;
  text-align: center;
  color: #168e2a;
}
#readMore {
  font-size: 13px;
  color: #f19124;
  text-align: center;
  font-weight: 400;
}
#readMore:hover {
  font-size: 13px;
  color: #168e2a;
  font-weight: 400;
}

#cats {
  margin-top: 20px;
  font-size: 16px;
  color: #f19124;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}
#cats:hover {
  margin-bottom: 20px;
  font-size: 16px;
  color: #168e2a;
  border-radius: 8px;
  font-weight: 600;
}

h3 {
  color: black;
  font-weight: 500;
}

.story-image {
  font-weight: 400;
  font-size: 50px;
}
h4 {
  color: #f68c09;
  font-weight: 600;
}
h4:hover {
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
#fetch {
  background: rgba(243, 243, 243, 0.598);
  border-radius: 6px;
  padding: 10px;
}
#navlinks {
  color: #f68c09;
  animation: nav-load ease-in 200ms;
}

@keyframes nav-load {
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translate(0);
  }
}
#navlinks:hover {
  color: #08da4e;
}
</style>
