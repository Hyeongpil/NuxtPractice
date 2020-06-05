/* eslint-disable guard-for-in */
import { extend, localize } from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'

// eslint-disable-next-line no-restricted-syntax
for (const rule in rules) {
  extend(rule, rules[rule])
}

extend('isPasswordCondition', (value) => {
  const passwordConditionRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  return passwordConditionRegex.test(value)
})

extend('isContinueSameValue', (value) => {
  // 같은 영문자&숫자 연속 4번 정규식
  const continueOfSameTextOrNumberRegex = /(\w)\1\1\1/
  // 같은 특수문자 연속 4번 정규식
  const continueOfSameSpecialCharacterRegex = /([\\{\\}\\[\]\\/?.,;:|\\)*~`!^\-_+<>@\\#$%&\\\\=\\(\\'\\"])\1\1\1/
  // 같은 한글 연속 4번 정규식
  const continueOfSameKoreanRegex = /([가-힣ㄱ-ㅎㅏ-ㅣ\x20])\1\1\1/
  return (
    continueOfSameTextOrNumberRegex.test(value) ||
    continueOfSameSpecialCharacterRegex.test(value) ||
    continueOfSameKoreanRegex.test(value)
  )
})

extend('isContinueNumber', (value) => {
  // 연속된 숫자 정규식
  const continueOfNumberRegex = /(0123)|(1234)|(2345)|(3456)|(4567)|(5678)|(6789)|(7890)/
  return continueOfNumberRegex.test(value)
})

const ko = {
  code: 'ko',
  messages: {
    alpha: '{_field_} 항목에는 영문자만 사용 가능합니다',
    alpha_dash:
      '{_field_} 항목에는 영문자, 숫자와 특수기호(-),(_)만 사용 가능합니다',
    alpha_num: '{_field_} 항목에는 영문자와 숫자만 사용 가능합니다',
    alpha_spaces: '{_field_} 항목에는 영문자와 공백만 사용 가능합니다',
    between: '{_field_} 항목의 값은 {min}에서 {max} 사이여야 합니다',
    confirmed: '{_field_} 항목의 값이 일치하지 않습니다',
    digits: '{_field_} 항목의 값은 {length} 자리의 숫자이어야 합니다',
    dimensions:
      '{_field_} 항목의 크기는 가로 {width} 픽셀, 세로 {height} 픽셀이어야 합니다',
    email: '{_field_} 항목의 값은 유효한 이메일 형식이어야 합니다',
    excluded: '{_field_} 항목은 유효한 값이어야 합니다',
    ext: '{_field_} 항목은 유효한 파일이어야 합니다',
    image: '{_field_} 항목은 이미지 파일이어야 합니다',
    integer: '{_field_} 항목의 값은 정수이어야 합니다',
    length: '{_field_} 항목의 값은 {length}자이어야 합니다',
    max_value: '{_field_} 항목의 값은 {max} 이하이어야 합니다',
    max: '{_field_} 항목의 값은 최대 {length} 글자이어야 합니다',
    mimes: '{_field_}는 유효한 파일 형식의 파일이어야 합니다',
    min_value: '{_field_} 항목의 값은 {min} 이상이어야 합니다',
    min: '{_field_} 항목의 값은 최소 {length}글자이어야 합니다',
    numeric: '{_field_} 항목에는 숫자만 사용 가능합니다',
    oneOf: '{_field_} 항목의 값은 유효한 값이어야 합니다',
    regex: '{_field_} 항목은 형식에 맞지 않습니다',
    required: '{_field_} 항목은 필수 정보입니다',
    required_if: '{_field_} 항목은 필수 정보입니다',
    size: '{_field_} 항목의 크기는 {size}KB보다 작아야 합니다',
    isPasswordCondition:
      '{_field_}는 최소 8자리이상 숫자, 문자, 특수문자 각각 1개 이상 포함하여야 합니다.',
    isContinueSameValue:
      '{_field_}는 연속으로 같은 문자를 4번이상 사용할 수 없습니다.',
    isContinueNumber: '{_field_}는 연속된 숫자를 사용할 수 없습니다.'
  }
}
localize('ko', ko)
