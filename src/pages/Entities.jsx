import { useEffect, useState } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

function Entities() {
  const { cats, setCats } = useStore();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCats(page);
  }, [page]);

  const fetchCats = async (pageNum) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&page=${pageNum}`);
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">All Cats 🐾</h1>
      
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="warning" />
          <p className="mt-3">Loading cute cats...</p>
        </div>
      ) : (
        <>
          <CardList cats={cats} />
          
          <div className="d-flex justify-content-center gap-3 my-4">
            <Button 
              variant="warning" 
              onClick={() => setPage(page - 1)} 
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="align-self-center">Page {page}</span>
            <Button 
              variant="warning" 
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Entities;