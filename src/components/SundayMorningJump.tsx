function SundayMorningJump() {
  return (
    <div>
      {/* Left and Right Sliders in a Single Row */}
      <section className="container my-5">
        <div className="row">
          <h2 className="py-3 text-center">Sunday Morning Jump</h2>
          {/* Left Side Slider */}
          <div className="col-md-6">
            <div
              id="leftSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./img/music/2.jpg"
                    className="d-block w-100"
                    alt="Left Slider Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./img/music/3.jpg"
                    className="d-block w-100"
                    alt="Left Slider Image 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#leftSlider"
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
                data-bs-target="#leftSlider"
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

          {/* Right Side Slider */}
          <div className="col-md-6">
            <div
              id="rightSlider"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./img/music/1.jpg"
                    className="d-block w-100"
                    alt="Right Slider Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./img/music/2.jpg"
                    className="d-block w-100"
                    alt="Right Slider Image 2"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#rightSlider"
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
                data-bs-target="#rightSlider"
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
        </div>
      </section>
    </div>
  );
}

export default SundayMorningJump;
