// import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'
import USAGE from './USAGE.md'
import RoundButton from './RoundButton.vue'
import SquareButton from './SquareButton.vue'

const colorProp = {
  label: 'color',
  options: {
    black: 'black',
    primary: 'primary',
    'default(or NONE)': null
  },
  defaultValue: 'primary',
  group: 'props'
}

const sizeProp = {
  label: 'size',
  options: {
    small: 'small',
    'default(or NONE)': 'default',
    large: 'large'
  },
  defaultValue: 'default',
  group: 'props'
}

const stories = storiesOf('Atom 컴포넌트/버튼', module)

// stories.addDecorator(withKnobs)

// stories.addParameters({
//   readme: {
//     content: USAGE
//   }
// })

stories.add(
  'RoundButton',
  () => {
    return {
      components: { RoundButton },
      props: {
        text: {
          default: text('text', '버튼 텍스트', 'props')
        },
        size: {
          default: select(
            sizeProp.label,
            sizeProp.options,
            sizeProp.defaultValue,
            sizeProp.group
          )
        },
        color: {
          default: select(
            colorProp.label,
            colorProp.options,
            colorProp.defaultValue,
            colorProp.group
          )
        },
        slot222: { default: text('slot', 'Are you awesome?') }
      },
      template: `
      <RoundButton 
        :text="text" 
        :color="color"
        :size="size"
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

stories.add('SquareButton', () => {
  return {
    components: { SquareButton },
    props: {
      text: {
        default: text('text (prop)', '버튼 텍스트')
      },
      color: {
        default: text('color (prop)', 'primary')
      },
      size: {
        default: text('size (prop)', 'default')
      },
      // color: {
      //   default: select(label, options, defaultValue, groupId)
      // },
      slot222: { default: text('slot', 'Are you awesome?') }
    },
    template: `
      <SquareButton 
        :text="text" 
        :color="color"
        :size="size"
      />
      `
  }
})
