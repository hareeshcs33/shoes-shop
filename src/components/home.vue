<template>
  <div>
    <div id="demo" class="carousel slide" data-ride="carousel">

    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    
    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-content">
            <div class="text-block">
            <h3 class="running-shoe-text">New Running Shoes</h3>
            <h3 class="like-text">Men's Like Plex</h3>
            <p class="p-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore 
              magna aliqua.</p>
            <div class="cta-block">
              <button class="buy-cta red">Buy Now</button>
              <button class="buy-cta">See More</button>
            </div>
          </div>
          <div class="img-block">
            <img  src="../assets/running-shoes.png" alt="Los Angeles">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content">
            <div class="text-block">
            <h3 class="running-shoe-text">New Running Shoes</h3>
            <h3 class="like-text">Men's Like Plex</h3>
            <p class="p-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore 
              magna aliqua.</p>
            <div class="cta-block">
              <button class="buy-cta red">Buy Now</button>
              <button class="buy-cta">See More</button>
            </div>
          </div>
          <div class="img-block">
            <img  src="../assets/running-shoes.png" alt="Los Angeles">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-content">
            <div class="text-block">
            <h3 class="running-shoe-text">New Running Shoes</h3>
            <h3 class="like-text">Men's Like Plex</h3>
            <p class="p-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore 
              magna aliqua.</p>
            <div class="cta-block">
              <button class="buy-cta red">Buy Now</button>
              <button class="buy-cta">See More</button>
            </div>
          </div>
          <div class="img-block">
            <img  src="../assets/running-shoes.png" alt="Los Angeles">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
    </div>
  </div>
</template>
<style>

.carousel-inner img {
  width: 100%;
  height: 100%;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
}
.carousel-content .text-block {
  width: 50%;
  margin-left: 15%;
}
.carousel-content .img-block {
  width: 50%;
  text-align: center;
}
.carousel-item img {
  width: 100%;
  max-width: 450px;
}
#demo {
  background: url('../assets/banner.png') no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
}
.running-shoe-text {
  color: #db5660;
  font-size: 42px;
}
.like-text {
  color: #fff;
  font-size: 45px;
}
.cta-block {
  display: flex;
  align-items: center;
}
.cta-block .buy-cta {
  background-color: #FFF;
  color: #db5660;
  font-size: 22px;
  padding: 8px 25px;
  border: 1px solid #fff;
  margin: 10px;
}
.cta-block .buy-cta.red {
  background-color: #db5660;
  border: 1px solid #db5660;
  color: #fff;
}
.p-text {
  color: #fff;
  font-size: 18px;
}
</style>