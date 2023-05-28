import { RingLoader } from 'react-spinners';
import React from 'react';

const Spinner = (props) => {
  const style = { textAlign: 'center' };
  return (
    <div style={style}>
      <RingLoader color={'#123abc'} loading={props.isFetching} />
    </div>
  );
};

export default Spinner;
