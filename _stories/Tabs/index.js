import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import TabParent from './components/TabParent/';

const stories = storiesOf('Tabs', module);

stories
    .addDecorator(withKnobs)
    .add('TabParent', withReadme(...TabParent));
