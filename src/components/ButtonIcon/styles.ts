import { Touchable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import {MaterialIcons} from '@expo/vector-icons';
import theme from "src/theme";


export type ButtonIconStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconStyleProps
}
export const Container = styled(TouchableOpacity)`

 

justify-content: center;
align-items: center;

margin-right: 12px;
`;
export const  Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
    size:24,
    color: type ==='PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;