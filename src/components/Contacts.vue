<template>
  <div>
    <footer id="footer" class="text-center">
      <h3>Gamescores Contacts</h3>
      <div class="footer-top">
        <div class="container">
          <div class="row gy-8">
            <div id="conTact" class="col-md-12 footer-info">
              <a href="index.html" class="logo d-flex">
                <img :src="logo" alt="" />
              </a>
              <div>
                <p>
                  Kisumu, KSM 9451 Kenya <br /><br />
                  <strong>Phone:</strong> +254 70 511 675<br /><br />
                  <strong>Email:</strong> marvin@gamescore.co.ke<br />
                </p>
              </div>

              <div class="social-links mt-3"></div>
            </div>

            <div class="col-md-12 text-center">
              <div class="text-center">
                <p><strong>Follow us on</strong></p>
                <a
                  id="shares"
                  href="https://www.twitter.com/gamescoreske"
                  class="twitter"
                >
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
    </footer>
  </div>
</template>
<script>
export default {
  name: "contacts",
  data() {
    return {};
  },
};
</script>
<style scoped>
#footer {
  margin-top: 100px;
}
</style>
