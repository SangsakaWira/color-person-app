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
        <div style={{ textAlign: "center" }}>
          <Image
            style={{ width: "40%", height: "50%", padding: "5%" }}
            src={props.image}
            rounded
            fluid
            centered
          />
        </div>
        <p>
          {props.pesan}
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
  const [pesan, setPesan] = useState("Kosong");

  let state = {
    colors: [
      {
        color: "#FB341D",
        kepribadian: "Merah",
        image:
          "./images/merah.png",
        pesan: "Kamu sangat percaya diri dan berani. Senang mencari tantangan di lingkungan lama ataupun baru. Kamu mudah bergaul dengan siapa saja oleh sebab itu, Kamu memiliki bnyak teman."
      },
      {
        color: "#FFEA36",
        kepribadian: "Kuning",
        image:
          "./images/kuning.png",
        pesan: "Bersemangat tinggi atau idealis. Dapat dengan mudah menemukan kebahagiaan secara keseluruhan. Kamu membawakan energi kebahagiaan kepada orang lain. Berbagi senyum,tawa, dan kegembiraan."
      },
      {
        color: "#00946C",
        kepribadian: "Hijau",
        image:
          "./images/ijo.png",
        pesan: "Suka membantu org lain adalah prioritasmu! Kamu mudah memahami perasaan orang lain. Kamu dapat membuat langkah besar sebagai orang yang sukses, dan juga memiliki jiwa sosial yang tinggi."
      },
      {
        color: "#FC63B6",
        kepribadian: "Pink",
        image:
          "./images/pink.png",
        pesan: "Memiliki hati yang sangat baik dan penuh kasih sayang pada orang lain. Ketulusan dan kelembutanmu membuat siapa saja yang berada disampingmu merasa nyaman dan hangat."
      }
    ]
  };

  return (
    <Container fluid>
      <div style={{ width: "100%", background: "#F1B7F8" }}>
        <Row style={{ background: "#F1B7F8", padding: "5%" }}>
          <Col>
            <h1 style={{ color: "#000000" }}>Halo Semua</h1>
            <p style={{ color: "#000000" }}>
              Jadi disini kami ada permainan buat kalian nih yang ingin
              mengetahui kepribadian berdasarkan warna favorit kalian. Kalian
              bisa pilih warna kesukaan kalian dan kalian akan melihat
              penjelasan tentang pilihan kalian.
            </p>
          </Col>
          <Col style={{ padding: "10px", textAlign: "center" }}>
            <Image
              src="https://image.freepik.com/free-vector/people-helping-each-other-wiht-flat-design_23-2147675292.jpg"
              style={{ height: "120px" }}
              className="center"
              roundedCircle
            />
            <h3 style={{ color: "#000000" }}>#bagikebaikan</h3>
          </Col>
        </Row>
      </div>
      <div style={{ width: "100%", background: "#F1B7F8", textAlign: "center" }}>
        <Row style={{ background: "#F1B7F8", textAlign: "center" }}>
          <Col>
            <h1 style={{ textAlign: "center", color: "#00000", paddingBottom: "2%" }}>
              <b>Kira - kira kalian suka warna apa?</b>
            </h1>
          </Col>
        </Row>
      </div>
      <Row style={{
        paddingTop: "2%",
        marginBottom: "10px"
      }}>
        {state.colors.map((data, key) => {
          return (
            <Col sm={4} key={key}>
              <Card
                style={{
                  padding: "1%",
                  width: "100%",
                  height: "18rem",
                  marginTop: "2%",
                  textAlign: "center",
                  backgroundColor: data.color
                }}
                onClick={() => {
                  setModalShow(true);
                  setColorCard(data.color);
                  setKepribadian(data.kepribadian);
                  setImage(data.image);
                  setPesan(data.pesan)
                }}
              />
            </Col>
          )
        })}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        color={colorCard}
        image={image}
        pesan={pesan}
        kepribadian={kepribadian}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default App;
