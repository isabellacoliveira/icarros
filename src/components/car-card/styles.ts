import styled from 'styled-components'

export const Card = styled.div`
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  height: 200px;
  width: 100%;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CardTextDescription = styled.p`
  font-size: 10px;
  color: #5e5c5c;
`;

export const HeartIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CustomButton = styled.a`
  background-color: white;
  color: purple;
  border: 2px solid purple;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: purple;
    color: white;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EllipsisLink = styled.a`
  display: block;
  width: 120px;
  white-space: nowrap;
  color: blueviolet;
  overflow: hidden;
  text-overflow: ellipsis;
`;