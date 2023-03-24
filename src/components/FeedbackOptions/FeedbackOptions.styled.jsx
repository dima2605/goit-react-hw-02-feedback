import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 5px 15px;

  font-weight: 500;
  font-size: 20px;

  background-color: white;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;

  transition: background-color 250ms linear, color 250ms linear,
    box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: skyblue;
    color: white;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
