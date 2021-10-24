import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const FooterActivity = styled.View`
  flex: 1;
  background-color: white;
`;

export const LineTopFooter = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 30%;
  height: 3px;
  background-color: black;
  margin-top: 15px;
`;

export const ContainerTextTemp = styled.View`
  align-items: center;
`;

export const TextTemp = styled.Text`
  margin-top: 24px;
  font-family: 'NeuzeitGro-Lig';
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  font-weight: normal;
  font-style: normal;
`;

export const NumberTemp = styled.Text`
  font-family: 'NeuzeitGro-Bol';
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 72px;
  color: #000000;
`;

export const OtherNames = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 10px 30px;
`;

export const LeftText = styled.View`
  align-items: center;
`;

export const TextDist = styled.Text`
  font-family: 'NeuzeitGro-Lig';
  font-size: 18px;
  line-height: 26px;
  color: #000;
  opacity: 0.6;
  margin: 10px 0px;
`;

export const TempDist = styled.Text`
  font-family: 'NeuzeitGro-Bol';
  font-weight: 900;
  font-size: 32px;
  line-height: 40px;
  color: #000;
`;

export const RightText = styled.View`
  align-items: center;
`;

export const TextVel = styled.Text`
  font-family: 'NeuzeitGro-Lig';
  font-size: 18px;
  line-height: 26px;
  color: #000;
  opacity: 0.6;
  margin: 10px 0px;
`;

export const TempVel = styled.Text`
  font-family: 'NeuzeitGro-Bol';
  font-weight: 900;
  font-size: 32px;
  line-height: 40px;
  color: #000;
`;

export const ButtonFooter = styled.TouchableOpacity`
  background-color: #ffffff;
  margin: -5px 15px;
  border-radius: 100px;
  border: 1px solid #ff2525;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
`;
export const TextButton = styled.Text`
  padding: 10px;
  font-family: 'NeuzeitGro-Lig';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  color: #ff2525;
`;
