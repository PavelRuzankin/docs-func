import styled from "styled-components/macro";
import { SettingsData } from "../../types/view-settings-types";

export const StyledSheet = styled.textarea<{ settings: SettingsData }>`
  padding: 30px;
  background-color: #FFFFFF;
  width: 600px;
  display: flex;
  flex-shrink: 1;

  /* font-weight: lighter; */
  /* font-weight: normal; */

  font-family: ${({ settings }) => settings.fontFamily };
  font-weight: ${({ settings }) => settings.fontWeight };
  color: ${({ settings }) => settings.color };
  text-align: ${({ settings }) => settings.alignText };
  line-height: ${({ settings }) => settings.lineHeight + '%' };
  letter-spacing: ${({ settings }) => settings.letterSpacing + 'px' };
  font-size: ${({ settings }) => settings.fontSize + 'px' };
`