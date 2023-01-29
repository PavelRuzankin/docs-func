import { FC, memo, ReactNode } from "react"
import { ControlWrapper } from "../../common/styled"
import { StyledLabel, StyledRadio } from "./align-text-control.styled"
import { AlignText } from "./align-text-control.types"

import { ReactComponent as AlignCenterIcon } from "./assets/align-center.svg"
import { ReactComponent as AlignJustifyIcon } from "./assets/align-justify.svg"
import { ReactComponent as AlignLeftIcon } from "./assets/align-left.svg"
import { ReactComponent as AlignRightIcon } from "./assets/align-right.svg"

type AlignTextControlProps = {
  onChange: (id: AlignText) => void
  value: AlignText
}

type RadioProps = {
  id: AlignText,
  activeId: AlignText
  children: ReactNode
  onChange: (id: AlignText) => void
}

const Radio: FC<RadioProps> = ({ children, id, activeId, onChange }) => {
  return (
    <>
      <StyledRadio 
        onChange={() => onChange(id)} 
        type="radio" 
        value={id} 
        id={id}
        checked={activeId === id}
      />
      <StyledLabel htmlFor={id}>
        {children}
      </StyledLabel>
    </>
  )
}

export const AlignTextControl = memo(({ value, onChange }: AlignTextControlProps) => {
  return (
    <ControlWrapper>
      <Radio 
        id={AlignText.Start} 
        activeId={value}
        onChange={onChange}
        >
        <AlignLeftIcon />
      </Radio>
      <Radio 
        id={AlignText.Center} 
        activeId={value}
        onChange={onChange}
        >
        <AlignCenterIcon />
      </Radio>
      <Radio 
        id={AlignText.End} 
        activeId={value}
        onChange={onChange}
        >
        <AlignRightIcon />
      </Radio>
      <Radio 
        id={AlignText.Justify} 
        activeId={value}
        onChange={onChange}
        >
        <AlignJustifyIcon />
      </Radio>
    </ControlWrapper>
  )
})