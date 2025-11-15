function HeroPage() {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left Text */}
        <div className="hero-left" style={{ maxWidth: "500px" }}>
          <h1 className="fw-bold display-5 mb-3">
            Temukan <br />
            Bakat Kreatifmu <br />
            Bersama Kami !
          </h1>

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea­que
            fugit aperiam iste repellendus ducimus nam!
          </p>

          <div className="d-flex gap-3">
            <button className="btn btn-danger px-4 py-2">Lihat Kelas</button>
            <button className="btn btn-outline-danger px-4 py-2">
              Lihat Promo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-right position-relative mt-5 mt-md-0">
          <img
            src="/hero.png"
            alt="rocket"
            className="img-fluid rocket-img"
          />

        </div>
      </div>
    </div>
  );
}

export default HeroPage;
