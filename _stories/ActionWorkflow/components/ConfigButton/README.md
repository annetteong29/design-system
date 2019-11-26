

`<ConfigButton>` [does what]. It is used for [some stuff].

## Basic Usage

```javascript
// icons
<ConfigButton
    buttonType="CLOSE"
    toolTipText="Close"
    onClick={close} />

// with label
<ConfigButton
    buttonType='EDIT'
    buttonName='Edit'
    onClick={this.handleOpenConfig(row)} />
```

## Props

* **buttonTypes** `String` <br/>Defines context of button.

* **buttonName** (opt) `String` <br/>Defines text of button.

* **toolTipText** (opt) `String` <br/>Hint text when cursor is over button.

### Usage of Props

##### Workflow under Action tab

buttonType | toolTipText | buttonName
--- | --- | ---
CLEAR_SELECTED | 'Clear selected' | -
VIEW | 'View tasks' / <br/>'View workflows' | -
DIAGRAM | 'View progress' | -
STOP_WORKFLOW | 'Stop Workflow' | -
CLOSE | 'Close' | -

##### Workflow under Settings page

buttonType | toolTipText | buttonName
--- | --- | ---
INFO | 'View diagram' | -
EDIT | - | 'Edit'
_SAVE_
_CLEAR_