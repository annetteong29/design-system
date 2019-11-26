

`<MultiValueEnumField>` is a [some thing] that [does what]. It is used when [some stuff].

## Basic Usage

```javascript
<MultiValueEnumField
    label={filterTypes[STATE].label}
    options={TASK_FILTERS}
    value={filterList[STATE]}
    handleChange={handleChangeFilter(STATE)}
/>
```

## Props

* **value** `Array` <br/>Values that have been selected.

```javascript
["Active", "Completed"]
```

* **options** `Array` <br/>All possible options.

```javascript
["Active", "Stopped", "Completed"]
```

* **handleChange** (opt) _(event) -> ?_<br/>Handles event where values in menu have been changed.

* **label** `String` <br/>Label for field.