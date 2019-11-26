import React from 'react'

/**
 * Tab button component (Intended to use as child for TabBar component)
 */
function TabButton(props) {
  const { id, text, active } = props
  return (
    <li
      id={id}
      className={`tabPanel-tab${active ? ' is-active' : ''}`}
      onClick={props.onClick}
    >
      <a data-testid="tab">{text}</a>
    </li>
  )
}

export default TabButton
