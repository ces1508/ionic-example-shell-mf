import { gql } from 'apollo-angular';

export const getAllCharactersQuery = gql`
  query GetAllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        prev
      }
      results {
        name
        image
        status
        location {
          name
        }
      }
    }
  }
`;
