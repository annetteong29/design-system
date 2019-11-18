import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ConfigButton from './components/ConfigButton/';

const stories = storiesOf('AlexWorkflow', module);

stories
    .addDecorator(withKnobs)
    .add('ConfigButton', withReadme(...ConfigButton));
