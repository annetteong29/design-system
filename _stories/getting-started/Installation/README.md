## Installation

---

Steps to install and run codebase:

1. Clone from gumdrops (gumgum design system https://github.com/gumgum/gumdrops).
```
npm add gumdrops@1.10.0
npm add gg-design-system node-sass
npm install acorn (resolve dependency issue)
```

2. Add a 'host' param to make Storybook open to public IP addresses (AWS instance).
```
~ in package.json ~
scripts: {
    storybook: "start-storybook -p 6006 -h 0.0.0.0"
}
```

3. Run Storybook.
```
yarn run storybook
```

---

To add a specific version, you can use `yarn add gumdrops@1.0.0` (replace 1.0.0 with whatever version you want, or omit it to get the latest version)

The current and previous versions can be found in [CHANGELOG.md](https://github.com/gumgum/gumdrops/blob/master/CHANGELOG.md)

---

#### Design System

There are two ways to use GumGum's Design System:

###### 1. Link to CSS

Include one of the available CSS theme files in the `<head>` of your HTML document:

```html
<link rel="stylesheet" href="https://assets.ggops.com/stable/theme-blue.css">
```

[See the Design System documentation](https://ds.gumgum.com/stable/md/docs/index.html) for themes, CSS utilities and more.

###### 2. NPM package

Add [gg-design-system](https://www.npmjs.com/package/gg-design-system) and [node-sass](https://www.npmjs.com/package/node-sass) to your project:

```
yarn add gg-design-system node-sass
```

Create and import your main Sass file in main App component:

```jsx
import React, { Component } from 'react';
import './main.scss';

class App extends Component {
    render() {
        return (...);
    }
}

export default App;
```

In main.scss, import the theme first to declare all color variables:

```scss
@import '~gg-design-system/scss/themes/theme-X'; // X - theme color
@import '~gg-design-system/scss/themes/main';
```

The theme file contains variables for every color used in Design System, along with 5 shades darker and lighter of each color.
The prime slots defines theme-specific colors, while the component slots defines component-specific colors.
