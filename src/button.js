import styled from 'styled-components/native';

const Button = ({ onPress, isSelected, text }) => {
  return (
    <ButtonContainer onPress={onPress} isSelected={isSelected}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.TouchableOpacity`
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px 10px;
  border-width: 2px;
  border-radius: 15px;
  border-color: ${(props) => (props.isSelected ? 'white' : 'transparent')};
  background-color: #ffffff80;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;
