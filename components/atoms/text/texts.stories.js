// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import USAGE from './USAGE.md'
import BlockText from './BlockText.vue'
// import InlineText from './InlineText.vue'

import RoundButton from '../buttons/RoundButton.vue'

const stories = storiesOf('Atom 컴포넌트/텍스트', module)

// stories.addDecorator(withKnobs)

// stories.addParameters({
//   readme: {
//     content: USAGE
//   }
// })

stories.add(
  'BlockText',
  () => {
    return {
      components: { BlockText, RoundButton },
      props: {
        text: {
          default: text(
            'text',
            'BlockText는 줄바꿈이 일어나는 텍스트입니다.',
            'props'
          )
        }
      },
      template: `
      <div>
        <RoundButton 
          text="버튼"
        />
        <BlockText 
          :text="text" 
        />
      </div>
      `
    }
  },
  {
    readme: {
      content: USAGE
    }
  }
)
