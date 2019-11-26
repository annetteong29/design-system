import React from 'react'

/**
 * Renders a tab bar populated by its children.
 */
function TabBar(props) {
  const { style } = props
  return (
    <div className="subtabs">
      <div className="tabPanel" style={style}>
        <ul className="tabPanel-tabs" data-testid="tabs-bar">
          {props.children}
        </ul>
      </div>
    </div>
  )
}

export default TabBar
