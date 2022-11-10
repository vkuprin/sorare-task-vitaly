import styled from 'styled-components';
import CardBox from '../components/CardBox';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SpecificPage = () => {
  const [reveal, setReveal] = useState(true);
  const location = useLocation();
  const slugsURL = location.pathname.split('/cards/')[1].split(',');

  const renderCards = () =>
    slugsURL.map((slug: string, index: number) => {
      if (!slug) return null;
      return <CardBox key={index} slug={slug} skip={reveal} />;
    });

  const handleReveal = () => setReveal(!reveal);

  return (
    <Center>
      <RevealButton onClick={handleReveal}>Card Reveal</RevealButton>
      {renderCards()}
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const RevealButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`;

export default SpecificPage;
