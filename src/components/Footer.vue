<template>
  <footer id="footer" class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row gy-8">
          <div id="conTact" class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <img :src="logo" alt="" />
            </a>
            <div>
              <h4 id="contacth4">Contact Us</h4>
              <p>
                Kisumu, KSM 9451 Kenya
                <strong>|Phone:</strong> +254 70 511 675<br />
                <strong>Email:</strong> marvin@gamescore.co.ke<br />
              </p>
            </div>

            <div class="social-links mt-3"></div>
          </div>

          <div class="col-lg-7 col-md-12 footer-contact text-center text-md-end">
            <div>
              <br /><br />
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
#shares {
  margin: 2px;
}
#contacth4 {
  color: black;
}
#conTact {
  background: #d0d4fc52;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}

#conTact:hover {
  color: #fff;
  background: #c2c3c9ad;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
}
</style>
