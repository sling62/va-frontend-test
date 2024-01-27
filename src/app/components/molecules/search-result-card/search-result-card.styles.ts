import { css } from "styled-components";

export const container = css`
  padding-bottom: 20px;
`;

export const content = css`
  padding: 10px;
  border: 5px solid red;
  border-style: double;
`;

export const hotelName = css`
  font-size: 20px;
`;

export const hotelFacility = css`
  &::marker {
    color: red;
  }
`;

export const hotelImage = css`
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

export const contentItems = css`
  display: flex;
  justify-content: space-between;
`;
