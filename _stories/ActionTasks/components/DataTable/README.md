

```DataTable``` is a general purpose paginated table that [does what]. It is used for [some stuff].

### Props
 
* **data** ```Array of Objects``` <br/>Data to be depicted in the table.
        [{ 
            name: "Approval",
            workflowDefinitionName: "Single-Level Approval"
        }]

* **headers** ```Array of {key: String, label: String}```<br/>Each object in array defines table column.
        [
            { key: "name", label: "Task Name" },
            { key: "workflowDefinitionName", label: "Workflow Type" }
        ]
    * key = the key used in data to access that column's data
    * label = column text in header

* **noDataMessage** ```String``` <br/>Message to be displayed on a row when no data is present.
        'No tasks available.' // AvailableToMe
        'No tasks assigned.' // AssignedToMe

* **error** ```bool``` <br/>Whether the data is empty due to error, checked if data is empty when setting message to display in table.

* **refresh** ```() -> void```
    <br/>Should be called when 'Refresh' icon is called.
    <br/>Refreshes the data of the table which is passed in as prop.

* **handleClick** (opt) ```(e, data) -> Promise``` <br/>Optional handler to perform some action when a row is clicked.
    * e = event
    * data = data corresponding to the row clicked

### Example uses
