import React from 'react';

// eslint-disable-next-line react/prop-types
const Line = ({ margins, style }) => {
  return (
    <div
      style={{
        marginLeft: margins,
        marginRight: margins,
        height: '1px',
        backgroundColor: '#C4C4C4',
        ...style
      }}
    />
  );
};

export default Line;
