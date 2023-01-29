import styled from "styled-components/macro";

export const Marker = styled.span<{color: string}>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: ${({ color }) => color};
`