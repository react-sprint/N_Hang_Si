import React from 'react';
import '../src/assets/scss/project.scss';
import '../src/assets/scss/storybook.scss';

export const parameters = {
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'figma',
        value: '#E5E5E5',
      },
      {
        name: 'app_default',
        value: '#FAFAFA',
      },
    ],
  },
};
