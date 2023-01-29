import { FC, memo } from "react";

import { ReactComponent as LineHeightIcon } from "./assets/line-height.svg"
import { ReactComponent as LetterSpacingIcon } from "./assets/letter-spacing.svg"

import { ControlWrapper } from "../../common/styled";
import { StyledInput, StyledLabel, StyledUnit } from "./text-format-control.styled";
import { Box } from "reflexbox/styled-components";

type TextFormatControlProps = {
  lineHeight: number
  letterSpacing: number
  onLineHeightChange: (value: number) => void
  onLetterSpacingChange: (value: number) => void
}

type UnitProps = {
  onChange: (value: number) => void 
  icon: React.ReactNode
  value: number
  label?: string
}

const Unit: FC<UnitProps> = ({ icon, value, label, onChange }) => {
  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  return (
    <StyledUnit>
      <Box mr={10}>
      {icon}
      </Box>
      <StyledInput 
        type="number" 
        value={value} 
        onChange={onNumberChange} 
      />
      {!!label && <StyledLabel>{label}</StyledLabel>}
    </StyledUnit>
  )
}

export const TextFormatControl: FC<TextFormatControlProps> = memo(({
  lineHeight,
  letterSpacing,
  onLineHeightChange,
  onLetterSpacingChange,
}) => {
  return (
    <ControlWrapper>
      <Unit 
        value={lineHeight}
        onChange={onLineHeightChange}
        icon={<LineHeightIcon/>}
        label={'%'}
      />
      <Unit 
        value={letterSpacing}
        onChange={onLetterSpacingChange}
        icon={<LetterSpacingIcon/>}
        label={'px'}
      />    
    </ControlWrapper>
  )
})