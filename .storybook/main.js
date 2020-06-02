module.exports = {
  stories: [
    // '../components/**/**/*.stories.js',
    // '../stories/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ]
}
