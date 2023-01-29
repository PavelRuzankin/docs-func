import styled from "styled-components/macro"

export const ControlWrapper = styled.div`
  display: flex;
  height: 40px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  border: 1px solid #E8ECF0;
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
`

export const SelectWrapper = styled(ControlWrapper)`
  justify-content: start;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 5px;
  font-size: 12px;
`

export const StyledSelect = styled.select`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  height: 48px;
  flex-grow: 1;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("/arrow-icon.svg") no-repeat 95% 50%;
`

export const SheetWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`