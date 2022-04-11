module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["./"],
          alias: {
            '@application': './src/application',
            '@main': './src/main',
            '@infra': './src/infra',
            '@core': './src/core',
          }
        }
      ]
    ]
  }
}
