module.exports = {
  root: true,
  extends: ["@react-native", "plugin:jest/recommended"],
  env: { browser: true },
  // Switching off formatting linting to reduce noise in the lint report and
  // in the IDE; consistent formatting is ensured running Prettier automatically
  // every time a file is saved
  rules: {
    "prettier/prettier": 0,
    quotes: 0,
    curly: 0,
    semi: 0,
    "keyword-spacing": 0,
    "jsx-quotes": 0,
    "consistent-this": 0,
    "eol-last": 0,
    "new-parens": 0,
    "no-array-constructor": 0,
    "no-empty-character-class": 0,
    "no-new-object": 0,
    "no-spaced-func": 0,
    "no-trailing-spaces": 0,
    "no-mixed-spaces-and-tabs": 0,
    "space-infix-ops": 0,
    "space-unary-ops": 0,
    "comma-dangle": 0,
    "no-extra-boolean-cast": 0,
    "react-native/no-inline-styles": 0,
    "react-hooks/exhaustive-deps": 0,
    "dot-notation": 0,
    "no-useless-escape": 0,
    "react/no-unstable-nested-components": 0,
    "no-shadow": 0,
    "jest/expect-expect": 0,
    "jest/no-identical-title": 0,
    eqeqeq: 0,
    "react/self-closing-comp": "off"
  }
}
