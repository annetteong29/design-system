import React from 'react'

/**
 * Utility component which supplies name for tabs and renders content.
 *
 * Props:
 *
 * name: String - Name displayed on tab associated with this tab pane.
 *
 */
export default function TabPane(props) {
  const { name, tabName, ...rest } = props
  return (
    <div {...rest} className="tabPane">
      {props.children}
    </div>
  )
}
