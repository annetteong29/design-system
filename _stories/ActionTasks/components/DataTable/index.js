import React from 'react';
import readme from './README.md';
import { text, select, boolean, object, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DataTable from '../../../../components/ActionTasks/components/DataTable';
import { optionalSelect } from '../../../../components/utils/optionalSelect';

const dataTrue = {
    data: [
        { id: "1",
            name: "Approval",
            workflowDefinitionName: "Single-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "Customer",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "01" },
        { id: "2",
            name: "Approval",
            workflowDefinitionName: "Multi-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "Sales",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "02" },
        { id: "3",
            name: "Approval",
            workflowDefinitionName: "Single-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "AL_LANG",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "03" },
        { id: "4",
            name: "HC",
            workflowDefinitionName: "Health Check",
            workflowDefinitionCategory: "ASSET",
            assetName: "Account_Closed_Flag",
            assetType: "Stored Procedure Sub Process",
            // assetIcon
            workflowInstanceId: "04" },
        { id: "5",
            name: "DQ",
            workflowDefinitionName: "Data Quality",
            workflowDefinitionCategory: "ASSET",
            assetName: "Report",
            assetType: "Report",
            // assetIcon
            workflowInstanceId: "05" },
        { id: "6",
            name: "RA",
            workflowDefinitionName: "Risk Assessment",
            workflowDefinitionCategory: "ASSET",
            assetName: "PLATINUMBAL",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "06" },
        { id: "7",
            name: "Approval",
            workflowDefinitionName: "Single-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "al_setoptions",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "07" },
        { id: "8",
            name: "Approval",
            workflowDefinitionName: "Single-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "Customer_Account_ID",
            assetType: "Stored Procedure Sub Process",
            // assetIcon
            workflowInstanceId: "08" },
        { id: "8",
            name: "Approval",
            workflowDefinitionName: "Multi-Level Approval",
            workflowDefinitionCategory: "ASSET",
            assetName: "DataSourceKey",
            assetType: "Stored Procedure Sub Process",
            // assetIcon
            workflowInstanceId: "08" },
        { id: "9",
            name: "HC",
            workflowDefinitionName: "Health Check",
            workflowDefinitionCategory: "ASSET",
            assetName: "CardsData",
            assetType: "Table",
            // assetIcon
            workflowInstanceId: "09" },
        { id: "10",
            name: "RA",
            workflowDefinitionName: "Risk Assessment",
            workflowDefinitionCategory: "ASSET",
            assetName: "Secondary_Segment",
            assetType: "Stored Procedure Sub Process",
            // assetIcon
            workflowInstanceId: "10" },
        { id: "11",
            name: "RA",
            workflowDefinitionName: "Risk Assessment",
            workflowDefinitionCategory: "ASSET",
            assetName: "IS_DIRECTORY",
            assetType: "Column",
            // assetIcon
            workflowInstanceId: "11" },
        { id: "12",
            name: "RA",
            workflowDefinitionName: "Risk Assessment",
            workflowDefinitionCategory: "ASSET",
            assetName: "Mobile_Phone_Number",
            assetType: "Stored Procedure Sub Process",
            // assetIcon
            workflowInstanceId: "12" },
    ]
}

const noData = {
    data: []
};

const headers = [
    { key: "name", label: "Task Name" },
    { key: "workflowDefinitionName", label: "Workflow Type" },
    { key: "workflowDefinitionCategory", label: "Scope"},
    { key: "assetName", label: "Asset Name" },
    { key: "assetType", label: "Asset Type" },
    { key: "assetIcon", label: "Asset Icon" },
    { key: "workflowInstanceId", label: "Workflow ID" }
]

const classes = {
    clickable: "DataTable-clickable-6",
    padded: "DataTable-padded-5"
}

// const error =

const component = () => (
    <div>
        <DataTable
            data={boolean('data', true) ? dataTrue : noData} // {text('data', data)}
            headers={headers}
            handleClick={boolean('handleClick', false) ? action('row_clicked') : undefined}
            noDataMessage={text('noDataMessage', '')}
            // classes={classes}
            refresh={action('refresh_clicked')}
        />
    </div>
)

export default [readme, component];
