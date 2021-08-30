import React from 'react';
import Band from './Band';

export const Bands = props => {
  const renderBand = props.bands.map(band => (
    <Band key={band.id} deleteBand={props.deleteBand} {...band} />
  ));

  return <li>{renderBand}</li>;
};
