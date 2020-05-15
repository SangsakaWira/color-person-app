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
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: "#000",textAlign: "center" }}>
          <div style={{ textAlign: "center" }}>
            <Image
              style={{ width: "100%", height: "100%", textAlign: "center" }}
              src={props.image}
              rounded
              centered
            />
            <p>
              {props.pesan}
            </p>
          </div>
        </Modal.Title>
      </Modal.Header>
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
        colorIcon: "./images/merah-bulat.svg",
        image:
          "./images/MERAH.svg",
        pesan: "Kamu sangat percaya diri dan berani. Senang mencari tantangan di lingkungan lama ataupun baru. Kamu mudah bergaul dengan siapa saja oleh sebab itu, Kamu memiliki bnyak teman."
      },
      {
        color: "#FFEA36",
        kepribadian: "Kuning",
        colorIcon: "./images/kuning-bintang.svg",
        image:
          "./images/KUNING.svg",
        pesan: "Bersemangat tinggi atau idealis. Dapat dengan mudah menemukan kebahagiaan secara keseluruhan. Kamu membawakan energi kebahagiaan kepada orang lain. Berbagi senyum,tawa, dan kegembiraan."
      },
      {
        color: "#00946C",
        kepribadian: "Hijau",
        colorIcon: "./images/ijo-segitiga.svg",
        image:
          "./images/IJO.svg",
        pesan: "Suka membantu org lain adalah prioritasmu! Kamu mudah memahami perasaan orang lain. Kamu dapat membuat langkah besar sebagai orang yang sukses, dan juga memiliki jiwa sosial yang tinggi."
      },
      {
        color: "#FC63B6",
        kepribadian: "Pink",
        colorIcon: "./images/pink-bintang.svg",
        image:
          "./images/PINK.svg",
        pesan: "Memiliki hati yang sangat baik dan penuh kasih sayang pada orang lain. Ketulusan dan kelembutanmu membuat siapa saja yang berada disampingmu merasa nyaman dan hangat."
      }
    ]
  };

  return (
    <Container fluid>
      <div style={{ width: "100%", background: "#F1B7F8" }}>
        <Row style={{ background: "#F1B7F8", padding: "5%" }}>
          <Col>
            <h1 style={{ color: "#000000" }}><b>Hai Semua</b></h1>
            <p style={{ color: "#000000" }}>
              Jadi disini kami ada permainan buat kalian nih yang ingin
              mengetahui kepribadian berdasarkan warna favorit kalian. Kalian
              bisa pilih warna kesukaan kalian dan kalian akan melihat
              penjelasan tentang pilihan kalian.
            </p>
          </Col>
          <Col style={{ padding: "10px", textAlign: "center" }}>
            <Image
              src="./images/Icon.png"
              style={{ height: "120px" }}
              className="center"
            />
            <h4 style={{ color: "#000000" }}><b>#bagikebaikan</b></h4>
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
            <Col sm={6} key={key} style={{ textAlign: "center" }}>
              <Image
                src={data.colorIcon}
                style={{
                  padding: "1%",
                  width: "75%",
                  height: "75%",
                  marginTop: "2%",
                  textAlign: "center"
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
      <Row style={{ background: "#FB341D" }}>
        <Col>
          <p style={{ color: "#FFF", textAlign: "center", padding: "5%" }}>Yuk, Sebarkan kebaikan dengan orang-orang terdekatmu.
          Semoga mendapatkan keberkahan :D Donasi dpt disalurakan
              melalui rekening:</p>
        </Col>
        <Col>
          <div style={{ color: "#FFF", textAlign: "center", padding: "5%" }}>
            <h4 style={{ color: "#FFF", textAlign: "center" }}>BCA -  6155175935</h4>
            <p style={{ color: "#FFF", textAlign: "center" }}>a.n Brenda Caesar Herdayu</p>
          </div>

        </Col>
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
