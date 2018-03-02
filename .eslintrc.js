module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "no-console": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double",
      { "allowTemplateLiterals": true }
    ],
    "semi": [
      "error",
      "always"
    ],
    "mocha/no-exclusive-tests": "error"
  }
}
