import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, Cell, Pie, PieChart, Tooltip} from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
    let x  = cx + (radius) * Math.cos(-midAngle * RADIAN);
    const y = cy  + (radius) * Math.sin(-midAngle * RADIAN);
    if (percent < 0.1) {
      x = x + 5;
    }

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} style={{ fontSize: 16 }} dominantBaseline="central">
            {percent > 0 ? `${(percent * 100).toFixed(0)}%` : ''}
        </text>
    );
};

class TwoLevelPie extends Component {

  static propTypes = {
    animated: PropTypes.bool,
    parts: PropTypes.array,
    pieClick: PropTypes.func,
    resetFilters: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <ResponsiveContainer>
        <PieChart>
            <Tooltip />
            <svg>
                <circle onClick={this.props.resetFilters} cx='50%' cy='50%' r="50" fill="#FFFFFF"/>
            </svg>
            <Pie
              valueKey="cost"
              isAnimationActive={this.props.animated}
              onClick={this.props.pieClick} labelLine={false}
              data={this.props.parts} innerRadius="70%"
              outerRadius="100%" fill="url(#colorPv)"
              label={renderCustomizedLabel}>
                {
                    this.props.parts.map((entry, index) => {
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
                      }
                      return <Cell key={`cell-${index}`} fill={color}/>;
                    })
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
    );
  }
}

TwoLevelPie.defaultProps = {
  animated: true
};

export default TwoLevelPie;
