import React from 'react';
import readme from './README.md';
import ConfigButton from '../../../../components/ActionWorkflow/components/ConfigButton';

const BUTTON_TYPES = {
    SAVE: 'SAVE',
    EDIT: 'EDIT', CLEAR: 'CLEAR', CLEAR_SELECTED: 'CLEAR_SELECTED', VIEW: 'VIEW',
    STOP_WORKFLOW: 'STOP_WORKFLOW', DIAGRAM: 'DIAGRAM', INFO: 'INFO', CLOSE: 'CLOSE',
}

const component = () => (
    <div>
        <ConfigButton toolTipText="Clear selected" buttonType="SAVE" />
        {/* onClick={onClear} */}
    </div>
)

export default [readme, component];
