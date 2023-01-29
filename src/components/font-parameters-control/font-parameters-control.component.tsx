import { FC, memo } from "react";
import { Box } from "reflexbox/styled-components";

import { ReactComponent as FontSizeIcon } from "./assets/font-size.svg"

import { StyledInput, StyledUnit } from "./font-parameters-control.styled";
import { ControlWrapper, StyledSelect } from "../../common/styled";
import { FontWeight } from "./font-parameters-control.types";

type FontParametersControlProps = {
  fontWeight: FontWeight
  fontSize: number
  onFontWeightChange: (value: FontWeight) => void
  onFontSizeChange: (value: number) => void
}

export const FontParametersControl: FC<FontParametersControlProps> = memo(({
  fontWeight,
  fontSize,
  onFontWeightChange,
  onFontSizeChange,
}) => {
  const onFontSizeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFontSizeChange(Number(event.target.value))
  }

  const onSelectFontWeight = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFontWeightChange(event.target.value as FontWeight)
  }

  return (
    <ControlWrapper>
      <StyledUnit width={63}>
        <StyledSelect onChange={onSelectFontWeight} value={fontWeight}>
          <option>{FontWeight.Bold}</option>
          <option>{FontWeight.Normal}</option>
          <option>{FontWeight.Italic}</option>
        </StyledSelect>
      </StyledUnit>
      <StyledUnit width={37}>
        <Box mr={10}>
        <FontSizeIcon />
        </Box>
        <StyledInput 
          type="number" 
          value={fontSize} 
          onChange={onFontSizeNumberChange} 
        />
      </StyledUnit>
    </ControlWrapper>
  )
})