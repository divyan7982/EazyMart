const Carousel = ()=>(
    <div id="carouselExampleDark" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="active"></li>
      
      <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="images/product-3-slider.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Mobiles</h5>
          <p>Unleash Innovation: Explore the Hottest Mobile Phones Now on EazyMart</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="images/product-6-slider.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Drones</h5>
          <p>Take Flight with Cutting-Edge Drones: Discover the Best Selection in EazyMart</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
)

export default Carousel;