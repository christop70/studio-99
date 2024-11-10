function slider() {
  return (
    <div>
      {/* Slider Section */}
      <div id="mainSlider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/slider1.jpg"
              className="d-block w-100"
              alt="Slider Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/slider2.jpg"
              className="d-block w-100"
              alt="Slider Image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/slider3.jpg"
              className="d-block w-100"
              alt="Slider Image 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainSlider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default slider;
