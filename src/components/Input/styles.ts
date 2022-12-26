import { TextInput } from "react-native";
import styled, {css} from "styled-components/native";
import React from "react";

export const Container = styled(TextInput)`

flex: 1;
${({theme})=> css`

background-color: ${theme.COLORS.GRAY_700};
color: ${theme.COLORS.WHITE};
font-family:${theme.FONT_FAMILY.REGULAR};
font-size:${theme.FONT_SIZE.MD}px;

`};
min-height: 56px;
max-height: 56px;




border-radius: 6px;
padding: 16px;


`;