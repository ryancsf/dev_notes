module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'selector-pseudo-element-colon-notation': 'single',
    // There're some cases we should not use shorthands due to browser bugs.
    'declaration-block-no-redundant-longhand-properties': [true, {
      // IE10-11 can't use calc in flex-basis in flex shorthand property.
      // flexboxのバグに立ち向かう（flexboxバグまとめ）
      // https://qiita.com/hashrock/items/189db03021b0f565ae27
      ignoreShorthands: ['flex'],
    }],
  },
};
