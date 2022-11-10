import { useQuery } from '@apollo/client';
import { GET_CARD_BY_SLUG } from '../gql/Query';
import styled from 'styled-components';

interface CardBoxProps {
  slug: string;
}

const CardBox = ({ slug }: CardBoxProps) => {
  const { data, loading } = useQuery(GET_CARD_BY_SLUG, {
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <Container>
      <ImageCard src={data?.card.pictureUrl} alt={data?.card.name} />
      <Section>
        <ul style={{ color: 'white' }}>
          <Title>{data?.card.name}</Title>
          <li>Age: {data?.card.age}</li>
          <li>Blockchain: {data?.card.blockchain}</li>
          <li>Can Buy: {data?.card.canBuy ? 'Yes' : 'No'}</li>
          <li>Can Sell: {data?.card.canSell ? 'Yes' : 'No'}</li>
        </ul>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

const ImageCard = styled.img`
  width: 100%;
  max-width: 420px;
  display: block;
  margin-right: 80px;
`;

const Title = styled.h1`
  color: white;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  max-width: 420px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: content-box;
`;

export default CardBox;
