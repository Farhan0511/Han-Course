import Accordion from "react-bootstrap/Accordion";
import { faq } from "../data";

function FaqComponent() {
  return (
    <div className="faq-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Frequently Asked <span className="text-danger">Questions</span>
          </h2>
          <p className="text-secondary">
            Pertanyaan yang sering diajukan oleh para peserta.
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion defaultActiveKey="0" alwaysOpen>
          {faq.map((item) => (
            <Accordion.Item eventKey={item.eventKey} key={item.id} className="mb-3">
              <Accordion.Header className="faq-title">
                {item.title}
              </Accordion.Header>
              <Accordion.Body className="text-secondary">
                {item.desc}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>
    </div>
  );
}

export default FaqComponent;
