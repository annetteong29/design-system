import { storiesOf } from '@storybook/react';

import typography from './Typography/README.md';
import colors from './Colors/README.md';
import icons from './Icons/README.md';
import gridspacing from './GridSpacing/README.md'

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
  .add('Typography', () => {}, { info: { text: typography } })
  .add('Colors', () => {}, { info: { text: colors } })
  .add('Icons', () => {}, { info: { text: icons } })
  .add('Grid/Spacing', () => {}, { info: { text: gridspacing } });
