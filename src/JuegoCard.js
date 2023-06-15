import { Form, Button, Card } from 'react-bootstrap';
import './JuegoCard.css';

function JuegoCard({ paises, paisCorrecto, puntos, setPuntos, seconds }){
    if(typeof paisCorrecto === "undefined" || paises.length === 0) return (<div></div>);

    const handleEnvio = (e) => {
      e.preventDefault();
      e.stopPropagation();

      if(e.target.inputPais.value.toLowerCase() === paises[paisCorrecto].name.toLowerCase()) {
        setPuntos(puntos + 10 + seconds); //Cada segundo restante es un punto extra
      } else {
        setPuntos(puntos - 1);
      }

      e.target.inputPais.value = "";

      return false;
    }

    return (
      <Card className='FlexCentered'>
        <h1>{puntos}</h1>
        <Card.Img variant="top" className="flag" src={paises[paisCorrecto].flag}/>
        <Card.Body>
          <Card.Text>
            <div className="d-grid gap-2">
              {paises[paisCorrecto].name}
            </div>
          </Card.Text>

          <Form onSubmit={handleEnvio}>
            <Form.Group controlId='form.inputPais'>
              <Form.Label> Ingrese el pais correcto </Form.Label>
              <Form.Control type="text" name="inputPais" placeholder='Aqui aqui me cague'/>
              <Button className='btn btn-primary' type='submit'>Enviar</Button>
            </Form.Group>
          </Form>

        </Card.Body>
      </Card>
    );
}

export default JuegoCard;