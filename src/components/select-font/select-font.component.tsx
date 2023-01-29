import { FC, memo } from "react"
import { SelectWrapper, StyledSelect } from "../../common/styled"
import { FontFamily } from "./select-font.types"

export type SelectFontProps = {
  onChange: (value: FontFamily) => void 
  value: string
}

export const SelectFont: FC<SelectFontProps> = memo(({ value, onChange }) => {
  const onFontChage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as FontFamily)
  }
  return (
    <SelectWrapper>
      <StyledSelect onChange={onFontChage} value={value}>
        <option id={FontFamily.Roboto} >{FontFamily.Roboto}</option>
        <option id={FontFamily.Raleway} >{FontFamily.Raleway}</option>
        <option id={FontFamily.Oswald} >{FontFamily.Oswald}</option>
      </StyledSelect>
    </SelectWrapper>
  )
})