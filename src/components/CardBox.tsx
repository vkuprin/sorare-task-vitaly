import { useQuery } from '@apollo/client';
import { GET_CARD_BY_SLUG } from '../gql/Query';
import styled from 'styled-components';
import CardsPlaceholder from '../assets/cards-placeholder.svg';

interface CardBoxProps {
  slug: string;
  skip?: boolean;
}

const CardBox = ({ slug, skip }: CardBoxProps) => {
  const { data, loading } = useQuery(GET_CARD_BY_SLUG, {
    variables: { slug },
    skip,
  });

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <ImageCard
        src={data?.card.pictureUrl || CardsPlaceholder}
        alt={data?.card.name}
        skip={skip}
      />
      {data && (
        <Section>
          <ul style={{ color: 'white' }}>
            <Title>{data?.card.name}</Title>
            <li>Age: {data?.card.age}</li>
            <li>Blockchain: {data?.card.blockchain}</li>
            <li>Can Buy: {data?.card.canBuy ? 'Yes' : 'No'}</li>
            <li>Can Sell: {data?.card.canSell ? 'Yes' : 'No'}</li>
          </ul>
        </Section>
      )}
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

const ImageCard = styled.img<{ skip?: boolean }>`
  width: 100%;
  max-width: 420px;
  display: block;
  margin-right: ${(props) => {
    return props.skip ? 0 : '80px';
  }};
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

  animation: fadein 3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default CardBox;
