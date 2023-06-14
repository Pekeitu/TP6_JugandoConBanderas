import { Form, Button, Card } from 'react-bootstrap';


function JuegoCard({ paises, paisCorrecto, puntos, setPuntos }){
    if(typeof paisCorrecto === "undefined" || paises.length === 0) return (<div></div>);

    const handleEnvio = (e) => {
      e.preventDefault();
      //e.stopPropagation();
      console.log("Me encante el nepe", e.target)
      if(e.target.inputPais === paises[paisCorrecto].name) {

        setPuntos(puntos + 10);
      } else {
        setPuntos(puntos - 1);
      }

      return false;
    }

    return (
    <Card>
      <h1>{puntos}</h1>
    <Card.Img variant="top" src={paises[paisCorrecto].flag}/>
    <Card.Body>
      <Card.Text>
        <div className="d-grid gap-2">
            {paises[paisCorrecto].name}

        </div>
      </Card.Text>

      <Form>
        <Form.Group controlId='form.inputPais' onSubmit={handleEnvio}>
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