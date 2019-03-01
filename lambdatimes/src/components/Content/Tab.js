import React from 'react';

// ***MAY NEED TO FIX THIS COMPONENT***

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      if(props.tab)

  return (
    <div
      className={props.selected === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
}

// Make sure you include PropTypes on your props.

export default Tab;
