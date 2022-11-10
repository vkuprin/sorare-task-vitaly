import styled from 'styled-components';
import CardBox from '../components/CardBox';
import { useLocation } from 'react-router-dom';

const SpecificPage = () => {
  const location = useLocation();
  const slugsURL = location.pathname.split('/cards/')[1].split(',');

  const renderCards = () =>
    slugsURL.map((slug: string, index: number) => {
      if (!slug) return null;
      return <CardBox key={index} slug={slug} />;
    });

  return <Center>{renderCards()}</Center>;
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
`;

export default SpecificPage;
