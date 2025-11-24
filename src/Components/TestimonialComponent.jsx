import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TestimonialComponent() {
  return (
    <div className="testimonial mt-5">
      <div className="testibox">
        <div className="items-center text-center">
          <h1 className="fs-2 mb-3">
            Hello ini adalah{" "}
            <span style={{ color: "#e63946" }}>Testimonial</span>
          </h1>
        </div>

        <div className="d-flex flex-wrap gap-4 container justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TestimonialComponent;
