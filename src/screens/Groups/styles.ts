import { SafeAreaView } from "react-native-safe-area-context";
import styled , { css }from "styled-components/native";



export const Container= styled(SafeAreaView)`

flex: 1;

background-color: ${({theme}) => theme.COLORS.GRAY_600};
align-items: center;
justify-content: center;
padding: 24px;

`;
export const Title = styled.Text`
color: white;
font-size:32px;
text-align:center;



`
