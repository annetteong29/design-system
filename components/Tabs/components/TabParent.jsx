import React, { Component } from 'react'
import TabBar from './TabBar'
import TabButton from './TabButton'

export default class TabParent extends Component {
  constructor(props) {
    super(props)
  }

  handleTabClick = tabName => () => { this.props.handleTabClick(tabName) }

  render() {
    const { idBase, children, currentTab, tabBarStyle } = this.props
    if (!children) {
      return (null)
    }
    const tabs = children.filter(child => child)

    return (
      <div className="tabParent" data-testid="tab-parent">
        <TabBar style={tabBarStyle}>
          {tabs.map(child => {
            const { name, tabName } = child.props
            return (<TabButton
                id={idBase ? `${tabName}-button` : ''}
                key={tabName}
                active={tabName === currentTab}
                onClick={this.handleTabClick(tabName)}
                text={name}
              />)
            }
          )}
        </TabBar>
        {tabs.find(tab => tab.props.tabName === currentTab)}
      </div>
    )
  }
}
