import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { semuaKelas } from "../data/index";

function KelasComponent() {
  return (
    <div className="KelasComponent mt-5">
      <h2 className="text-center">
        Kelas <span className="">Kami</span>
      </h2>

      <div className="d-flex flex-wrap gap-4 container">
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
    </div>
  );
}

export default KelasComponent;
