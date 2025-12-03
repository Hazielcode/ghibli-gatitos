import { Row, Col } from 'react-bootstrap';
import Card from './Card';

function CardList({ Ghibli }) {
  return (
    <Row>
      {Ghibli.map((Ghibli) => (
        <Col key={Ghibli.id} xs={12} md={6} lg={4}>
          <Card Ghibli={Ghibli} />
        </Col>
      ))}
    </Row>
  );
}

export default CardList;