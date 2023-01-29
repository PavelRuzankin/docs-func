import { FC, memo } from "react";
import { SettingsData } from "../../types/view-settings-types";
import { StyledSheet } from "./sheet.styled";

type SheetProps = {
  text: string
  settings: SettingsData
  onChange: (value: string) => void
}

export const Sheet: FC<SheetProps> = memo(({ text, settings, onChange }) => {
  const onSheetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <StyledSheet 
      value={text} 
      settings={settings} 
      onChange={onSheetChange}
    />
  )
})