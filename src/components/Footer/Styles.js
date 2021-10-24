import styled from 'styled-components';

export const Container = styled.View`
  height: 19%;
  flex: 0.25;
  margin: 0px 10px;
`;

export const ButtonsFooterTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const ViewButton = styled.View`
  padding: 2px;
`;

export const ButtonFooter = styled.TouchableOpacity`
  background-color: #0564ff;
  border-radius: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextButton = styled.Text`
  padding: 15px;
  font-family: 'NeuzeitGro-Lig';
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  align-items: center;
  color: #ffffff;
`;
