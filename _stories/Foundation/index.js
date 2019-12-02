import { storiesOf } from '@storybook/react';

import typography from './Typography/README.md';

const stories = storiesOf('Foundation', module);

stories
    .addParameters({
      info: {
          inline: true,
          source: false
      },
      options: {
          showAddonPanel: false
      }
  })
  .add('Typography', () => {}, { info: { text: typography } });
