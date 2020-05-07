import React, { useState } from "react";
import "./styles.css";
import {
  Card,
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image
} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      className="special_modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "202040" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.kepribadian}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your Hex Color: {props.color}</h4>
        <div>
          <Image
            style={{ width: "40%", height: "50%", padding: "5%" }}
            src={props.image}
            rounded
            fluid
            centered
          />
        </div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Read More</Button>
      </Modal.Footer>
    </Modal>
  );
}

const App = props => {
  const [modalShow, setModalShow] = useState(false);
  const [colorCard, setColorCard] = useState("#000000");
  const [kepribadian, setKepribadian] = useState("Noraml");
  const [image, setImage] = useState("Kosong");

  let state = {
    colors: [
      {
        color: "#F74838",
        kepribadian: "Pemberani",
        image:
          "https://image.freepik.com/free-vector/strong-woman-smiling-with-flat-design_23-2147659768.jpg"
      },
      {
        color: "#370838",
        kepribadian: "Pemalas",
        image:
          "https://image.shutterstock.com/image-vector/laziness-man-sleeping-on-couch-260nw-674502373.jpg"
      },
      {
        color: "#094838",
        kepribadian: "Rajin",
        image:
          "https://image.shutterstock.com/image-vector/hard-working-260nw-256588762.jpg"
      },
      {
        color: "#000000",
        kepribadian: "Suka Membantu",
        image:
          "data:image/jpeg;base64,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"
      },
      {
        color: "#370FFF",
        kepribadian: "Penolong",
        image:
          "https://image.freepik.com/free-vector/modern-superhero-character-collection-with-flat-design_23-2147947557.jpg"
      },
      {
        color: "#333238",
        kepribadian: "Ramah",
        image:
          "data:image/jpeg;base64,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"
      }
    ]
  };

  return (
    <Container style={{ marginTop: "10px" }} fluid>
      <div style={{ padding: "30px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "#FFFFFF" }}>Halo Semua</h1>
            <p style={{ color: "#FFFFFF" }}>
              Jadi disini kami ada permainan buat kalian nih yang ingin
              mengetahui kepribadian berdasarkan warna favorit kalian. Kalian
              bisa pilih warna kesukaan kalian dan kalian akan melihat
              penjelasan tentang pilihan kalian.
            </p>
          </Col>
          <Col style={{ padding: "10px" }}>
            <Image
              src="https://image.freepik.com/free-vector/people-helping-each-other-wiht-flat-design_23-2147675292.jpg"
              style={{ height: "120px" }}
              className="center"
            />
            <h3 style={{ color: "#FFFFFF" }}>#bagikebaikan</h3>
          </Col>
        </Row>

        <h1 style={{ textAlign: "center", color: "#FFFFFF" }}>
          Kira - kira kalian suka warna apa?
        </h1>
      </div>
      <Row>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: state.colors[0].color
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[0].color);
              setKepribadian(state.colors[0].kepribadian);
              setImage(state.colors[0].image);
            }}
          />
        </Col>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: state.colors[1].color
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[1].color);
              setKepribadian(state.colors[1].kepribadian);
              setImage(state.colors[1].image);
            }}
          />
        </Col>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: "#094838"
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[2].color);
              setKepribadian(state.colors[2].kepribadian);
              setImage(state.colors[2].image);
            }}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: "#000000"
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[3].color);
              setKepribadian(state.colors[3].kepribadian);
              setImage(state.colors[3].image);
            }}
          />
        </Col>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: "#370FFF"
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[4].color);
              setKepribadian(state.colors[4].kepribadian);
              setImage(state.colors[4].image);
            }}
          />
        </Col>
        <Col>
          <Card
            style={{
              width: "100%",
              height: "18rem",
              textAlign: "center",
              backgroundColor: "#333238"
            }}
            onClick={() => {
              setModalShow(true);
              setColorCard(state.colors[5].color);
              setKepribadian(state.colors[5].kepribadian);
              setImage(state.colors[5].image);
            }}
          />
        </Col>
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        color={colorCard}
        image={image}
        kepribadian={kepribadian}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default App;
