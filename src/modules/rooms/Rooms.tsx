import { Sidebar } from "../../components/index";
import { Container, Row, Col } from "react-bootstrap";
import { rooms } from "../../utils/defaultValues";
import "../../modules/style.css";

type Props = {};

const Rooms = (props: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <Sidebar />
        </Col>

        <Col className="p-3 py-5" xs={12} md={8} lg={9}>
          <Row className="justify-content-center">
            <h3 className="text-center mb-5">Meeting Rooms</h3>
            <Container className="meetingrooms d-flex">
              {rooms.map((room: any) => {
                return (
                  <Col className="border text-center m-3 p-3" lg={3}>
                    <p>{room.name}</p>
                    <h5 className="pb-2">{room.label}</h5>
                    <p>{room.bookings}</p>
                  </Col>
                );
              })}
            </Container>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Rooms;
