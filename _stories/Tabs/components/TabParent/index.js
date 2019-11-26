import React from 'react';
import readme from './README.md';
import { text, select, boolean, object, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { optionalSelect } from '../../../../components/utils/optionalSelect';

import TabParent from '../../../../components/Tabs/components/TabParent';
import TabButton from '../../../../components/Tabs/components/TabButton';
import TabBar from '../../../../components/Tabs/components/TabBar';
import TabPane from '../../../../components/Tabs/components/TabPane';

const currentTab = {
    "assigned": "assigned", "available": "available", "historic": "historic"
}

const component = () => (
    <div>
        <TabParent idBase="action-tasks-tab"
            // className="fillHeight"
            handleTabClick={action('handleTabClick')}
            currentTab={options('currentTab', currentTab, 'assigned', { display: 'select' })}
            tabBarStyle={{ marginBottom: "2.5em" }}
        >
            <TabPane name="Tab One Name" tabName="assigned">
                <p>Tab One</p>
            </TabPane>
            <TabPane name="Tab Two Name" tabName="available">
                <p>Tab Two</p>
            </TabPane>
            <TabPane name="Tab Three Name" tabName="historic">
                <p>Tab Three</p>
            </TabPane>
        </TabParent>
    </div>
)

export default [readme, component];
