import React, { Component } from 'react';
import { ResponsiveContainer, Bar, BarChart, Brush, CartesianGrid, Tooltip, XAxis, YAxis, Cell} from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class SimpleHorizontalBar extends Component {

  static propTypes = {
    barClick: PropTypes.func.isRequired,
    data: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <ResponsiveContainer>
      <BarChart layout="vertical"
        data={this.props.data} >
        <Brush dataKey="name" height={30} stroke="#8884d8"/>

        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <CartesianGrid />
        <Tooltip />
        <Bar onClick={this.props.barClick} dataKey="cost" fill="url(#colorPv)">
          {
              this.props.data.map((entry, index) => {
              let color;
              switch (entry.name) {
                case 'A':
                  color = '#0088FE';
                  break;
                case 'B':
                  color = '#00C49F';
                  break;
                case 'D':
                  color = '#FFBB28';
                  break;
                default:
                  color = COLORS[index % COLORS.length];
                  break;
              }
              return <Cell key={`cell-${index}`} fill={color}/>;
            })
          }
        </Bar>
        </BarChart>
    </ResponsiveContainer>
    );
  }

}

export default SimpleHorizontalBar;
