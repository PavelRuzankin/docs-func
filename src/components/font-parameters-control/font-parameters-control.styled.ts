import styled from "styled-components/macro";

export const StyledUnit = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  width: ${({ width }) => width + '%'};

  :last-child {
    border-left: 1px solid #E8ECF0;
  }
`

export const StyledInput = styled.input`
  font-size: 12px;
  width: 100%;
`

export const StyledLabel = styled.label`
  color: #AAB2BB;
  font-size: 12px
`