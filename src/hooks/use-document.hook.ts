import { useState, useCallback } from "react"

import { SettingsData } from "../types/view-settings-types";
import { getSettings, getText, saveSettings, saveText } from "../utils/local";
import { useDebounce } from "./use-debounce.hook";

export const useDocument = () => {
  const [text, setText] = useState(getText);
  const [settings, setSettings] = useState<SettingsData>(getSettings)

  const saveSettingsDebounced = useDebounce(saveSettings, 500)
  const saveTextDebounced = useDebounce(saveText, 500)

  const changeText = useCallback((text: string) => {
    setText(text)
    saveTextDebounced(text)
  }, [])

  const changeSettings = useCallback(((settings: SettingsData) => {
    setSettings(settings)
    saveSettingsDebounced(settings)
  }), [])

  return { text, settings, changeText, changeSettings }
}