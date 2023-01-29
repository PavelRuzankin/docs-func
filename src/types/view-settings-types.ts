import { AlignText } from "../components/align-text-control"
import { FontWeight } from "../components/font-parameters-control"
import { Color } from "../components/select-color"
import { FontFamily } from "../components/select-font"

export type SettingsData = {
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  color: Color
  alignText: AlignText
  lineHeight: number
  letterSpacing: number
  fontSize: number
}