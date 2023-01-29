import { FC, memo } from "react"
import { SelectWrapper, StyledSelect } from "../../common/styled"
import { Marker } from './select-color.styled'
import { Color } from "./select-color.types"

export type SelectColorProps = {
  onChange: (value: Color) => void
  value: Color
}

export const SelectColor: FC<SelectColorProps> = memo(({ value, onChange }) => {
  const onColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Color)
  }
  return (
    <SelectWrapper>
      <Marker color={value} />
      <StyledSelect onChange={onColorChange} value={value}>
        <option>{Color.Black}</option>
        <option>{Color.Green}</option>
        <option>{Color.Red}</option>
        <option>{Color.Violet}</option>
        <option>{Color.Yellow}</option>
      </StyledSelect>
    </SelectWrapper>
  )
})