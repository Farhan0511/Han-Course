import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function KelasComponent() {
  return (
    <div className="KelasComponent mt-5">
      <h2 className="text-center">Kelas <span className=''>Kami</span></h2>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default KelasComponent;
