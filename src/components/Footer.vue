<template>
  <footer id="footer" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row gy-8">
          <div class="col-md-12 footer-contact text-center text-md-end">
            <div>
              <br /><br />
              <a href="/" class="justify-content-rigt">
                <img id="imagelogo" :src="logo" alt="" />
              </a>
              <div>
                <router-link to="/contacts"
                  ><strong><h2 id="contacth4">Contact Us</h2></strong></router-link
                >
              </div>
              <p id="followus"><strong>Follow us on</strong></p>
              <a id="shares" href="https://www.twitter.com/gamescoreske" class="twitter">
                <i class="ri-twitter-line btn-floating btn-small blue"></i>
              </a>
              <a
                id="shares"
                href="https://www.facebook.com/GameScoresKe"
                class="facebook"
              >
                <i class="ri-facebook-circle-fill btn-floating btn-small indigo"></i
              ></a>
              <a
                id="shares"
                href="https://www.instagram.com/gamescoreske"
                class="instagram"
              >
                <i class="ri-instagram-line btn-floating btn-small pink"></i
              ></a>
              <a
                id="shares"
                href="https://www.instagram.com/gamescoreske"
                class="youtube"
              >
                <i class="ri-youtube-line btn-floating btn-small red"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>GameScores</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data: () => ({
    logo: require("@/assets/logo.png"),
  }),
};
</script>

<style scoped>
.footer-contact {
  align-self: flex-end;
  margin-bottom: 20px;
}

#imagelogo {
  width: 25%;
}

@media (max-width: 300px,) {
  #gamimagelogoelogo {
    flex: 50%;
    width: 50%;
  }
}
#shares {
  margin: 2px;
}
#contacth4 {
  color: black;
}
#contacth4:hover {
  color: #f19124;
}
#conTact {
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}

#conTact:hover {
  color: #fff;
  background: #d3d3d3ad;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}
</style>
