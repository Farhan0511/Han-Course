import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { semuaKelas } from "../data/index";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function KelasComponent() {
  return (
    <div className="KelasComponent mt-4">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
          Kelas <span style={{ color: "#e63946" }}>Terbaru</span>
        </h2>

        <p
          className="fs-5 text-secondary"
          style={{ maxWidth: "650px", margin: "0 auto" }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          reprehenderit.
        </p>
      </div>

      <div className="d-flex flex-wrap gap-4 container justify-content-center">
        {semuaKelas.map((kelas) => (
          <Card
            key={kelas.id}
            style={{ width: "18rem" }}
            className="shadow-sm"
            data-aos="fade-up"
            data-aos-delay={kelas.delay}
          >
            <Card.Img
              variant="top"
              src={kelas.image}
              alt={kelas.title}
              style={{ height: "180px", objectFit: "cover" }}
            />

            <Card.Body>
              {/* Title */}
              <Card.Title className="fw-bold mb-2">{kelas.title}</Card.Title>

              {/* Rating */}
              <div className="mb-3 text-warning">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
              </div>

              {/* Price */}
              <p className="fw-semibold text-primary">{kelas.price}</p>

              {/* Button */}
              <Button variant="primary" className="w-100">
                {kelas.buy}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="text-center mt-5">
        <Button
          variant="danger"
          className="d-inline-flex align-items-center gap-2 px-4 py-2"
          as={NavLink} to="/kelas"
        >
          Lihat Semua Kelas
          <FaArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

export default KelasComponent;
