
`<TabParent>` is the controller component for tabs. It should be used with `<TabPane>` children.

## Basic Usage
 
```javascript
<TabParent>
    <TabPane name="Tab One Name">
        <TabContentOne />
        <TabContentTwo />
    </TabPane>
    <TabPane name="Tab Two Name">
        <TabContentThree />
    </TabPane>
</TabParent>
```

## Props

* **children** _Components eg `TabPane`_
* **idBase** `String` <br/>ID of component.
* **currentTab** `String` <br/>Indicates which tab is currently selected.<br/>Must match `key` of `TabButton` component.
* **handleTabClick** `(tabName) ->` _props.handleTabClicked_ <br/>Should be called when a tab is clicked.
* **tabBarStyle** `Object of Objects` <br/>Inline styling.
```javascript
{ marginBottom: "2.5em" }
```

## Usage

##### `MyTaskTab.jsx` in Action > Workflow > Tasks tab
 
``` javascript
<TabParent idBase="action-tasks-tab"
    className="fillHeight"
    handleTabClick={handleTabClick}
    currentTab={currentTab}
    tabBarStyle={{ marginBottom: "2.5em" }}>

    <TabPane
        data-testid="assigned-to-me"
        tabName={ACTION_TASKS_TABS.ASSIGNED.id}
        name={ACTION_TASKS_TABS.ASSIGNED.label}
    >
        <AssignedToMeContainer className="fillHeight" />
    </TabPane>
    
    <TabPane
        data-testid="available-to-me"
        tabName={ACTION_TASKS_TABS.AVAILABLE.id}
        name={ACTION_TASKS_TABS.AVAILABLE.label}
    >
        <AvailableToMeContainer className="fillHeight" />
    </TabPane>
    
    <TabPane
        data-testid="task-history"
        tabName={ACTION_TASKS_TABS.HISTORIC.id}
        name={ACTION_TASKS_TABS.HISTORIC.label}
    >
        <TaskHistoryContainer className="fillHeight" />
    </TabPane>

</TabParent>
```