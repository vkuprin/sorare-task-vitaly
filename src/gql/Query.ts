import { gql } from '@apollo/client';

export const GET_ALL_CARDS = gql`
  query GetAllCards {
    allCards {
      nodes {
        id
        slug
        name
        pictureUrl
      }
    }
  }
`;

export const GET_CARD_BY_SLUG = gql`
  query GetSpecificCard($slug: String!) {
    card(slug: $slug) {
      id
      slug
      name
      pictureUrl
      age
      blockchain
      canBuy
      canSell
    }
  }
`;
