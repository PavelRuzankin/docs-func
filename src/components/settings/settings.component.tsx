import { FC, memo, useCallback, useState } from "react"

import { Box } from "reflexbox/styled-components"

import { SettingsData } from "../../types/view-settings-types"

import { SideBar, Title } from "./settings.styled"
import { SelectColor } from "../select-color" 
import { AlignTextControl } from "../align-text-control"
import { SelectFont } from "../select-font"
import { TextFormatControl } from "../text-format-control/text-format-control.component"
import { FontParametersControl } from "../font-parameters-control"
import { Button } from "../button"

type SettingsProps = {
  initial: SettingsData,
  onSubmit: (data: SettingsData) => void
}

export const Settings: FC<SettingsProps> = memo(({ initial, onSubmit }) => {
  const [fontFamily, setFontFamily] = useState(initial.fontFamily)

  const [fontWeight, setFontWeight] = useState(initial.fontWeight)
  const [fontSize, setFontSize] = useState(initial.fontSize)

  const [color, setColor] = useState(initial.color)

  const [letterSpacing, setLetterSpacing] = useState(initial.letterSpacing)
  const [lineHeight, setLineHeight] = useState(initial.lineHeight)

  const [ alignText, setAlignText ] = useState(initial.alignText)

  const handleSubmit = useCallback(() => {
    onSubmit({
      fontFamily,
      fontWeight,
      fontSize,
      color,
      letterSpacing,
      lineHeight,
      alignText
    })
  }, [
    onSubmit, 
    fontFamily,
    fontWeight,
    fontSize,
    color,
    letterSpacing,
    lineHeight,
    alignText,
  ])

  return (
    <SideBar>
      <Title>TEXT</Title>
      <Box mt={10}>
        <SelectFont value={fontFamily} onChange={setFontFamily} />
      </Box>
      <Box mt={10}>
        <FontParametersControl 
          fontWeight={fontWeight}
          fontSize={fontSize}
          onFontWeightChange={setFontWeight}
          onFontSizeChange={setFontSize}
        />
      </Box>
      <Box mt={10}>
        <SelectColor value={color} onChange={setColor} />
      </Box>
      <Box mt={10}>
        <TextFormatControl 
          onLineHeightChange={setLineHeight}
          onLetterSpacingChange={setLetterSpacing}
          letterSpacing={letterSpacing}
          lineHeight={lineHeight}
        />
      </Box>
      <Box mt={10}>
        <AlignTextControl value={alignText} onChange={setAlignText} />
      </Box>
      <Box mt={10}>
        <Button onClick={handleSubmit}>Apply Changes</Button>
      </Box>
    </SideBar>
  )
})