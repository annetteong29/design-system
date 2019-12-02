import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';

import './index.scss';
import { RadioButtonGroup } from 'material-ui';

addParameters({
    options: {
        isFullScreen: false,
        showNav: true,
        showPanel: true,
        panelPosition: 'right',
        sortStoriesByKind: true,
        hierarchySeparator: /\/|\./,
        hierarchyRootSeparator: /\|/,
        sidebarAnimations: false,
        enableShortcuts: true,
        isToolshown: true,
        theme: create({
            base: 'light',
            // colorPrimary: 'red',
            colorSecondary: '#FF6D00',

            // UI
            // appBg: 'red', // whole background apart from main contents (including sidebar)
            // appContentBg: 'purple', // addons section
            // appBorderColor: 'grey',
            // appBorderRadius: 4,

            // Typography
            fontBase: 'Roboto, "Open Sans", "Helvetica Neue", sans-serif',
            fontCode: 'monospace',

            // Text colors
            // textColor: 'black',
            // textInverseColor: 'rgba(255,255,255,0.9)',

            // Toolbar default and active colors
            // barTextColor: '#9E9E9E', // color of words and icons in addons/toolbar 
            // barSelectedColor: 'black', // color of selected words in addons/toolbar
            // barBg: 'hotpink', // background color of toolbar

            // Form colors
            inputBg: '#F2F2F2', // bg color of input fields in knobs addon
            // inputBorder: 'red',
            // inputTextColor: 'black',
            inputBorderRadius: 4,

            // brand
            brandTitle: 'Style guide',
            brandImage: 'https://alexsolutions.atlassian.net/wiki/download/thumbnails/165216970/alex1.png?version=1&modificationDate=1512365721306&cacheVersion=1&api=v2&width=800&height=304'
            // brandUrl: 'https://storybook.gumgum.com'
        })
    }
});

function loadStories() {
    require('../_stories/');
}

const storyWrapper = story => <div style={{ margin: 35 }}>{story()}</div>;

addDecorator(
    withInfo({
        inline: true,
        header: false,
        source: true,
        maxPropsIntoLine: 1
    })
);

addDecorator(storyWrapper);

configure(loadStories, module);
