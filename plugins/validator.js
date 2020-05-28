/* eslint-disable guard-for-in */
import Vue from 'vue'
import { ValidationProvider, extend, localize, configure } from 'vee-validate'
import ko from 'vee-validate/dist/locale/ko.json'

import * as rules from 'vee-validate/dist/rules'

// eslint-disable-next-line no-restricted-syntax
for (const rule in rules) {
  extend(rule, rules[rule])
}

localize({
  ko
})
// configure({
//   locale: ko
// })

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
