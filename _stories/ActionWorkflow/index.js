import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ConfigButton from './components/ConfigButton/';

const stories = storiesOf('ActionWorkflow', module);

console.log(...ConfigButton);

stories
    .addDecorator(withKnobs)
    .add('ConfigButton', withReadme(...ConfigButton));
