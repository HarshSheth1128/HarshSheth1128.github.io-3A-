import React from 'react';

const ContentSwitch = ({ index, children }) => {
  return React.cloneElement(children[index], children[index].props);
};

export default ContentSwitch;
