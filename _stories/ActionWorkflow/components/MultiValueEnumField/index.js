import React from 'react';
import readme from './README.md';
import { text, select, boolean, object, optionsKnob } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import MultiValueEnumField from '../../../../components/ActionWorkflow/components/MultiValueEnumField';
import { optionalSelect } from '../../../../components/utils/optionalSelect';

const options = ["Active", "Stopped", "Completed"];

const values = ["Active", "Completed"]

const component = () => (
    <div>
        <MultiValueEnumField
            label={text('label', "State")}
            value={object('value', values)}
            options={object('options', options)}
            handleChange={action('handleChange')}
        />
    </div>
)

export default [readme, component];
