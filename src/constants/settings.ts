import { AlignText } from "../components/align-text-control";
import { FontWeight } from "../components/font-parameters-control";
import { Color } from "../components/select-color";
import { FontFamily } from "../components/select-font";
import { SettingsData } from "../types/view-settings-types";

export const INITIAL_VIEW_SETTINGS: SettingsData = {
  fontFamily: FontFamily.Roboto,
  fontWeight: FontWeight.Normal,
  color: Color.Black,
  alignText: AlignText.Start,
  lineHeight: 125,
  letterSpacing: 0.6,
  fontSize: 14
}

export const DEFAULT_TEXT = 'Type Here...'