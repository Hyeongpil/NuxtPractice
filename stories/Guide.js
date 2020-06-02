import { storiesOf } from '@storybook/vue'

// import ButtonReadme from '../components/UI/buttons/README.md'
import Introduce from './guides/Introduce.md'
import InstallGuide from './guides/Install.md'
import CodeStyleGuide from './guides/CodeStyle.md'
import ComponentDesign from './guides/ComponentDesign.md'
import Dependencies from './guides/dependencies.md'

storiesOf('가이드', module)
  .addParameters({
    options: {
      showPanel: false
    }
  })
  .add(
    '1. 소개',
    () => {
      return {}
    },
    {
      readme: {
        content: Introduce
      }
    }
  )
  .add(
    '2. 설치 및 빌드',
    () => {
      return {}
    },
    {
      readme: {
        content: InstallGuide
      }
    }
  )
  .add(
    '3. 코드 스타일',
    () => {
      return {}
    },
    {
      readme: {
        content: CodeStyleGuide
      }
    }
  )
  .add(
    '4. 컴포넌트 디자인',
    () => {
      return {}
    },
    {
      readme: {
        content: ComponentDesign
      }
    }
  )
  .add(
    '5. 의존성 및 웹팩 설정',
    () => {
      return {}
    },
    {
      readme: {
        content: Dependencies
      }
    }
  )
