
import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, Bar, BarChart, Brush, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const formatter = (value) => moment(value).format('MMM YYYY');

class SimpleBar extends Component {

  render() {
    let barData = this.props.data;
    return (
      <ResponsiveContainer>
        <BarChart
            data={barData}
            height={300}
            width={200}>
            <XAxis tickFormatter={formatter} dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Brush dataKey='month' height={30} stroke="#8884d8"/>
            <Bar dataKey="costA" fill="#0088FE" />
            <Bar dataKey="costB" fill="#00C49F" />
            <Bar dataKey="costD" fill="#FFBB28" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleBar;
