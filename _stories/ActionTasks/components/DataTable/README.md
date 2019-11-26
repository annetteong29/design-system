

`<DataTable>` is a general purpose paginated table that [does what]. It is used when [some stuff].

## Basic Usage

```javascript
<DataTable
    id={id}
    data={AVAILABLE}
    refresh={onRefresh}
    noDataMessage={this.noTasksMessage}
    headers={this.headers}
    handleClick={onClick}
/>
```

## Props
 
* **data** `Object (named 'data') containing Array of Objects` <br/>Data to be depicted in the table.
```javascript
{ 
    data: [
        { name: "Approval", workflowDefinitionName: "Single-Level Approval" },
        { name: "RA", workflowDefinitionName: "Risk Assessment" }
    ]
}
```

* **headers** `Array of {key: String, label: String} Objects`<br/>Each object in array defines table column.
```javascript
[
    { key: "name", label: "Task Name" },
    { key: "workflowDefinitionName", label: "Workflow Type" }
]
```
    * key = the key used in data to access that column's data
    * label = column text in header

* **noDataMessage** `String` <br/>Message to be displayed on a row when no data is present.
```javascript
    'No tasks available.' // AvailableToMe example
    'No tasks assigned.' // AssignedToMe example
```

* **error** `bool` <br/>Whether the data is empty due to error, checked if data is empty when setting message to display in table.

* **refresh** `() -> void`
    <br/>Should be called when 'Refresh' icon is called.
    <br/>Refreshes the data of the table which is passed in as prop.

* **handleClick** (opt) `(e, data) -> Promise` <br/>Optional handler to perform some action when a row is clicked.
    * e = event
    * data = data corresponding to the row clicked
