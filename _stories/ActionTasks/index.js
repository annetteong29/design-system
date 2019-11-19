import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import DataTable from './components/DataTable';

const stories = storiesOf('ActionTasks', module);

stories
    .addDecorator(withKnobs)
    .add('DataTable', withReadme(...DataTable));
