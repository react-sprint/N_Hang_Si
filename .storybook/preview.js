import React from 'react';
import '../src/assets/scss/project.scss';
import '../src/assets/scss/storybook.scss';
import { addParameters } from '@storybook/react';

addParameters({
  viewport: {
    viewports: {
      ExtraSmall: {
        name: 'Iphone 5/SE',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      Small: {
        name: 'Iphone 6/7/8',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      Medium: {
        name: 'Iphone 7/8/9 Plus',
        styles: {
          width: '414px',
          height: '736px',
        },
      },
      Large: {
        name: 'Ipad',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
    },
  },
});

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
