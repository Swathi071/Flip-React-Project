import React from "react";
import im1 from './im1.png'
import im3 from './im3.png'
import im4 from './im4.png'
export default function Slidebar(){
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={im1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={im3} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={im4} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}