<template>
  <div id="dashboard">
    <div class="col-md-12 text-center">
      <div id="header-image" class="">
        <img :src="header" width="100%" height="150vh" align="center" />
      </div>
    </div>
    <b-container id="newsSection" class="bv-example-row">
      <b-row>
        <b-col md="8" cols="12">
          <!--News-->
          <h4 class="text-center">News</h4>
          <br />

          <div class="col-md-12 d-flex">
            <v-select
              v-model="cats"
              placeholder="Search..."
              class="style-chooser col-md-5"
              :options="options"
            ></v-select>
            <button
              style="margin: 4px"
              @click="SearchCat(cats)"
              class="btn-floating btn-normal orange"
            >
              <i class="ri-search-line"></i>Search
            </button>
          </div>

          <!--Fecth Div-->

          <div id="fetch">
            <div id="StoryAll" class="with-header">
              <div v-for="(story, id) in stories" v-bind:key="id" class="collection-item">
                <div>
                  <router-link
                    v-bind:to="{ name: 'viewstory', params: { story_id: story.id } }"
                  >
                    <router-link
                      v-bind:to="{ name: 'viewstory', params: { story_id: story.id } }"
                    >
                      <h5 id="titleStory" style="height: 140px">{{ story.Title }}</h5>
                    </router-link>

                    <div id="hoverImage" class="col-md-8">
                      <b-img class="story-image" :src="story.image" alt="" />

                      <div class="col-md-4">
                        <p id="cats">{{ story.Category }}</p>
                      </div>
                    </div>
                  </router-link>

                  <div id="story-head" class="story-title text-center">
                    <div class="col-md-9 container-fluid container-xl d-flex">
                      <div>
                        <span
                          id="showUS"
                          class="iconify"
                          data-icon="ant-design:like-filled"
                          data-inline="false"
                          data-width="24"
                          data-height="24"
                        >
                          {{ story.Like }}
                        </span>
                        <span id="commentSect">{{ story.Like }}</span>
                      </div>

                      <div>
                        <span
                          id="showUS"
                          class="iconify"
                          data-icon="ri:chat-3-fill"
                          data-inline="false"
                          data-width="24"
                          data-height="24"
                        >
                          {{ story.Comment }}
                        </span>
                        <span>{{ story.Comment }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>

        <!--Predictions-->
        <b-col md="4">
          <h4 class="text-center">Predictions</h4>

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
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      header: require("@/assets/img/header.jpg"),
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
#btnSearch {
  background: transparent;
  border: #f19124 4px solid;
  padding: 8px;
  border-radius: 4px;
}
#header-image {
  max-width: 100%;
  min-width: 100%;
  margin-top: 30px;
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
  margin: 8px;
  height: 70vh;
  max-height: 70vh;
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
  height: 90px;
  max-width: 500px;
  margin-top: 100px;
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

.story-image {
  width: 90%;
  max-width: 90%;
  min-width: 90%;
  height: 40vh;
  position: center;
  max-height: 50vh;
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
