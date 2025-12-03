import { Card as BootstrapCard } from 'react-bootstrap';

function Card({ cat }) {
  return (
    <BootstrapCard style={{ width: '100%', marginBottom: '20px' }}>
      <BootstrapCard.Img 
        variant="top" 
        src={cat.url} 
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Text className="text-center">
          <small className="text-muted">Cat ID: {cat.id}</small>
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;