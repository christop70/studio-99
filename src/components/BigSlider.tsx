// import React from "react";

function BigSlider() {
  return (
    <div>
      {/* Background Section with Overlay and Centered Slider */}
      <section
        className="my-5"
        style={{
          position: "relative",
          backgroundImage: "url('./img/slide/3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>
        <div
          className="container text-white position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="text-center">
            <h2>Title for the Background Section</h2>
            <p>This is some description text for this section.</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                id="overlaySlider"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./img/slide/1.jpg"
                      className="d-block w-100"
                      alt="Overlay Slider Image 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./img/slide/2.jpg"
                      className="d-block w-100"
                      alt="Overlay Slider Image 2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#overlaySlider"
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
                  data-bs-target="#overlaySlider"
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
        </div>
      </section>
    </div>
  );
}

export default BigSlider;
