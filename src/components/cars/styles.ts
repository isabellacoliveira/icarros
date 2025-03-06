import styled from 'styled-components'

export const CarsContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px;
  gap: 20px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NothingFinded = styled.div`
  font-size: 40px;
  padding: 20px;
  text-align: center;
`;

export const NotFoundImage = styled.img`
  width: 500px;
  border-radius: 20px;
`;