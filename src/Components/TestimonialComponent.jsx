import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { dataSwiper} from "../data";

function TestimonialComponent() {
  return (
    <div className="testimonial-section mt-5 py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold fs-2 text-danger">
            Apa kata mereka{" "}
            <span className="text-black">tentang kami?</span>
          </h1>
          <p className="text-secondary mt-2">
            Beberapa ulasan dari student kami yang sudah merasakan manfaatnya.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {dataSwiper.map((testi, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <Card className="testimonial-card p-3 text-center">
                <img
                  src={testi.image}
                  alt="avatar"
                  className="testimonial-avatar mx-auto"
                />

                <Card.Body>
                  <h5 className="fw-semibold">{testi.skill}</h5>

                  <Card.Text className="testimonial-text mt-3">
                    “{testi.desc}”
                  </Card.Text>

                  <Button variant="outline-danger" size="sm" className="mt-3">
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialComponent;
