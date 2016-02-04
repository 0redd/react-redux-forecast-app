import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}
export default (props) => {
  return (
    <Sparklines data={props.data} width={180} height={120}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type='avg' />
      <div className="text-center">{average(props.data)} {props.units}</div>
    </Sparklines>
  )
}
