import { SETTINGS_LOCAL_STORAGE_KEY, TEXT_LOCAL_STORAGE_KEY } from "../constants/local"
import { DEFAULT_TEXT, INITIAL_VIEW_SETTINGS } from "../constants/settings"
import { SettingsData } from "../types/view-settings-types"

export const getSettings = (): SettingsData => {
  const settings = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY)

  if(!settings) { 
    return INITIAL_VIEW_SETTINGS
  }

  try {
    return JSON.parse(settings) as SettingsData
  } catch(e) {
    console.error(e);
    return INITIAL_VIEW_SETTINGS
  }
}

export const saveSettings = (settings: SettingsData) => {
  localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(settings))
}

export const getText = () => {
  const data = localStorage.getItem(TEXT_LOCAL_STORAGE_KEY)

  if(!data) {
    return DEFAULT_TEXT
  }

  try {
    const { text } = JSON.parse(data) as { text: string }
    return text
  } catch(e) {
    console.error(e);
    return DEFAULT_TEXT
  }

}

export const saveText = (text: string) => {
  localStorage.setItem(TEXT_LOCAL_STORAGE_KEY, JSON.stringify({ text }))
}