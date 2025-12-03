import { Card as BootstrapCard } from 'react-bootstrap';

function Card({ Ghibli }) {
  return (
    <BootstrapCard style={{ width: '100%', marginBottom: '20px' }}>
      <BootstrapCard.Img 
        variant="top" 
        src={Ghibli.url} 
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <BootstrapCard.Body>
        <BootstrapCard.Text className="text-center">
          <small className="text-muted">Ghibli ID: {Ghibli.id}</small>
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;