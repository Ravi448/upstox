module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'Source',
        rootPathPrefix: '@app/',
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
