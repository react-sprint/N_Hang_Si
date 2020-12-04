const path = require('path');
module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: ['file-loader'],
      },
    ];
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.node = {
      __dirname: true,
    };
    return config;
  },
};
