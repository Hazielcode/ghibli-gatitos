import { Row, Col } from 'react-bootstrap';
import Card from './Card';

function CardList({ cats }) {
  return (
    <Row>
      {cats.map((cat) => (
        <Col key={cat.id} xs={12} md={6} lg={4}>
          <Card cat={cat} />
        </Col>
      ))}
    </Row>
  );
}

export default CardList;