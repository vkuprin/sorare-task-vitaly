import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../gql/Query';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Key } from 'react';
import styled from 'styled-components';

interface Card {
  id: Key;
  name: string;
  image: string;
  pictureUrl: string;
}

const MainPage = () => {
  const { data, loading } = useQuery(GET_ALL_CARDS);

  if (loading) return <div>Loading...</div>;

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 5 }} style={{ padding: 50 }}>
      <Masonry gutter="50px" columnsCount={4}>
        {data?.allCards.nodes.map((card: Card) => (
          <ImageCards key={card.id} src={card.pictureUrl} alt={card.name} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

const ImageCards = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export default MainPage;
