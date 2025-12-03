import { Container } from 'react-bootstrap';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

function Home() {
  const Ghibli = useStore((state) => state.Ghibli);
  const firstSix = Ghibli.slice(0, 6);

  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1>🪼BIENVENIDOS A STUDIO GHIBLI  </h1>
        <p className="lead mt-3">DESCUBRE LOS GHIBLICITOS MAS UWU </p>
        <div className="my-4">
          <span style={{ fontSize: '100px' }}>🪼⋆｡𖦹°‧🎐</span>
        </div>
      </div>
      
      <h2 className="mb-4">GHIBLIS destacados</h2>
      {firstSix.length > 0 ? (
        <CardList cats={firstSix} />
      ) : (
        <p className="text-center text-muted">visita LOS GHIBLIS para ver todos </p>
      )}
    </Container>
  );
}

export default Home;