import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function JuegoCard({paisCorrecto, arrayPaises}){

    console.log("JuegoCard", arrayPaises);

    return (
    <Card>
    <Card.Img variant="top" src={paisCorrecto.flag}/>
    <Card.Body>
      <Card.Text>
        <div className="d-grid gap-2">
            {
            arrayPaises.map((element) => (

                <Button variant="primary" size="lg">
                  {element.nombre}
                </Button>                
            ))
            }

        </div>
      </Card.Text>
    </Card.Body>
  </Card>
    );
}

export default JuegoCard;