import styled from "styled-components";

export const Scrollable = styled.div<{height: number}>`
    overflow: auto;
    height: ${props=> props.height}vh
`