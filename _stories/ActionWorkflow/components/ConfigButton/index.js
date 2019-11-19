import React from 'react';
import readme from './README.md';
import { text, select, boolean, object, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ConfigButton from '../../../../components/ActionWorkflow/components/ConfigButton';
import { optionalSelect } from '../../../../components/utils/optionalSelect';

const typeOptions = {
    'No Value': '',
    CLEAR_SELECTED: 'CLEAR_SELECTED', CLOSE: 'CLOSE', INFO: 'INFO',
    SAVE: 'SAVE', EDIT: 'EDIT', CLEAR: 'CLEAR',
    VIEW: 'VIEW', DIAGRAM: 'DIAGRAM', STOP_WORKFLOW: 'STOP_WORKFLOW'
};

const tooltipOptions = {
    'No Value': '',
    CLEAR_SELECTED: 'Clear selected', CLOSE: 'Close', INFO: 'View Diagram',
    VIEW: 'View tasks / View workflows', DIAGRAM: 'View progress', STOP_WORKFLOW: 'Stop Workflow'
};

const nameOptions = {
    'No Value': '', EDIT: 'Edit'
};

const switchToolTipText = typeOptions => {
    console.log(typeOptions)
    switch (typeOptions) {
        case 'CLEAR_SELECTED':
            return 'Clear selected'
    }
};

const component = () => (
    <div>
        <p>Please check the Props table in 'Readme' tab to make sure the right props are used!</p><br/>
        {/* <p>Possible</p>
        <ConfigButton buttonType="STOP_WORKFLOW" />
        <ConfigButton buttonType="DIAGRAM" />
        <br /><br /> */}
        <ConfigButton
            buttonType={options('buttonType', typeOptions, 'CLEAR_SELECTED', { display: 'select' })}
            // toolTipText={switchToolTipText(typeOptions)}
            toolTipText={options('toolTipText', tooltipOptions, 'Clear selected', { display: 'inline-radio' })}
            // buttonName={optionalSelect('buttonName', nameOptions, '')}
            buttonName={options('buttonName', nameOptions, '', { display: 'inline-radio' })}
            onClick={action('clicked')}
        />
    </div>
)

export default [readme, component];
