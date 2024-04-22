import styled from "styled-components";
import { backgroundColor } from "../Colors";

export const Scrollable = styled.div<{height: number}>`
    overflow: auto;
    height: ${props=> props.height}vh
`