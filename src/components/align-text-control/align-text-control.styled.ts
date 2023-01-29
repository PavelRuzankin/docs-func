import styled from "styled-components/macro"

export const StyledLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  border-right: 1px solid #E8ECF0;
  :last-child {
    border-right: 0 !important
  }
`

export const StyledRadio = styled.input`
  z-index: -1;
  display: none;

  :not(:checked)+label:hover > * {
    filter: invert(44%) sepia(55%) saturate(1038%) hue-rotate(167deg) brightness(106%) contrast(88%)  
  }

  :checked+label > * {
    filter: invert(44%) sepia(55%) saturate(1038%) hue-rotate(167deg) brightness(106%) contrast(88%)  
  }
`