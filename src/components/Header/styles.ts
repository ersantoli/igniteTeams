import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";



export const Container = styled.View`

width: 100%;
height: 60px;
border: 2px solid aqua;

flex-direction: row;
align-items: center;
justify-content: center;
`;


export const Logo = styled.Image`

width: 46px;
height: 55px;
`;



export const BackButton = styled.TouchableOpacity`

flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme

}) => ({
    size:36,
    color: theme.COLORS.WHITE
}))``;


