import { Flex } from 'reflexbox';

import { useDocument } from './hooks/use-document.hook';

import { Settings } from './components/settings/settings.component';
import { Sheet } from './components/sheet/sheet.component';

import { SheetWrapper } from './common/styled';

const App = () => {
  const {
    text,
    settings,
    changeText,
    changeSettings
  } = useDocument()

  return (
    <Flex>
      <SheetWrapper>
        <Sheet 
          text={text} 
          settings={settings} 
          onChange={changeText} 
        />
      </SheetWrapper>
      <Settings 
        initial={settings} 
        onSubmit={changeSettings} 
      />
    </Flex>
  )
}

export default App;
