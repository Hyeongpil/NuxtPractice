// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import USAGE from './CheckboxUsage.md'
import Checkbox from './Checkbox.vue'

const stories = storiesOf('Atom 컴포넌트/체크박스', module)

// stories.addDecorator(withKnobs)

// stories.addParameters({
//   readme: {
//     content: USAGE
//   }
// })

stories.add(
  'Checkbox',
  () => {
    return {
      components: { Checkbox },
      props: {
        label: {
          default: text('label', '라벨', 'props')
        }
      },
      template: `
      <Checkbox
        :label="text" 
      />
      `
    }
  },
  {
    readme: {
      content: USAGE
    }
  }
)
