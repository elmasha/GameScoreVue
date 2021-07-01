<template>
<footer id="footer" class="footer">

   
    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <img :src="logo" alt="">
          
            </a>
            
            <div class="social-links mt-3">
              <a href="https://www.twitter.com/gamescoreske" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/GameScoresKe" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/gamescoreske" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></a>
              <a href="https://www.instagram.com/gamescoreske" class="youtube"><i class="bi bi-youtube bx bxl-youtube"></i></a>

            </div>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Kisumu, KSM 9451<br>
              Kenya <br><br>
              <strong>Phone:</strong> +254 70 511 675<br>
              <strong>Email:</strong> marvin@gamescore.co.ke<br>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>GameScore</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/flexstart-bootstrap-startup-template/ -->
        Designed by <a href="uploadStory.html">Elmasha Omondi</a>
      </div>
    </div>
</footer>
</template>
<script>
export default {
  data:()=>({
     logo: require('@/assets/logo.png') 
  })

  
}
</script>
