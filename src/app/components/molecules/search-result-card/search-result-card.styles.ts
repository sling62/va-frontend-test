import { css } from "styled-components";

export const container = css`
  padding-bottom: 20px;
`;

export const content = css`
  padding: 10px;
  border: 5px solid red;
  border-radius: 10px;
  border-style: double;

  @media (min-width: 480px) {
    display: flex;
  }
`;

export const hotelName = css`
  font-size: 20px;
  font-weight: bold;
`;

export const hotelFacility = css`
  &::marker {
    color: red;
  }
`;

export const hotelImage = css`
  border-radius: 10px;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

export const description = css`
  @media (min-width: 480px) {
    margin-left: 20px;
  }
`;

export const priceContainer = css`
  margin: 20px 0;
`;

export const pricePerPerson = css`
  font-size: 20px;
  font-weight: bold;
`;
