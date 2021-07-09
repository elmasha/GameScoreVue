<template>
  <div>
    <div>
      <b-card title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav>
            <b-nav-item>
              <a href="/">
                <img id="GmLogo" fluid-grow width="20%" :src="logo" alt="" />
              </a>
            </b-nav-item>
            <b-nav-item> </b-nav-item>
          </b-nav>
        </b-card-header>

        <b-card-body class="text-right">
          <div id="selcetor" class="d-flex text-right">
            <v-select
              style="margin: 10px"
              v-model="cats"
              placeholder="   Search..."
              class="style-chooser"
              :options="options"
            ></v-select>
            <button
              style="margin: 10px"
              @click="SearchCat(cats)"
              class="btn-floating btn-small orange"
            >
              <i class="ri-search-line"></i>Search
            </button>
          </div></b-card-body
        >
      </b-card>
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
              </div>
            </b-col>

            <!--Predictions-->
            <b-col md="3">
              <h4 class="text-left">Predictions</h4>

              <div class="col-md-12">
                <div class="sidebar">
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
          <a href="" class="btn-floating btn-large orange">
            <i class="ri-refresh-line"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      timestamp: "",
      logo: require("@/assets/logo.png"),
      slide: 0,
      sliding: null,
      header: require("@/assets/img/header.jpg"),
      header2: require("@/assets/img/header2.jpg"),
      stories: [],
      category: "Football",
      cats: null,
      options: ["Football", "Boxing", "Rugby", "Hockey", "Tennis"],
      select2: [],
    };
  },
  created() {
    this.FetchData;
  },
  computed() {
    this.FetchData;
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
  methods: {
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
    FetchData() {
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
  },
};
</script>

<style>
#CardView {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
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
  font-size: 16px;
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
</style>
