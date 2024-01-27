import { css } from "styled-components";

export const container = css`
  visibility: visible;
`;

export const filtersAndSearchResultsContainer = css`
  @media (min-width: 480px) {
    display: flex;
  }
`;

export const searchResultsContainer = css`
  width: 100%;

  @media (min-width: 480px) {
    margin: 0 20px;
  }
`;

export const filterContainer = css`
  min-width: 120px;
`;
