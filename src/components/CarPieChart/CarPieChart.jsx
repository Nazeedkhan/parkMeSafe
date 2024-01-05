import React, { useState } from 'react'
import { PieChart, Pie, Sector } from 'recharts';

function CarPieChart(){
    const data = [
        { name: 'parked', value: 300 },
      ];

      const [activeIndex, setActiveIndex] = useState(0)

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
      };

    const renderActiveShape = (props) => {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
        

        return (
            <g>
                <text x={cx} y={cy-2} dy={8} textAnchor="middle" fill="rgb(64, 183, 99)" fontSize={12}>
                    {payload.value}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                
            </g>
        );
    }
    return (
        <div>
            <PieChart width={130} height={85} onMouseEnter={onPieEnter}>
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="54.12%" stopColor="#86B9DD" stopOpacity={0.5} />
                        <stop offset="115.5%" stopColor="#149A4F" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx={50}
                cy={40}
                innerRadius={30}
                outerRadius={40}
                fill="url(#colorUv)"
                paddingAngle={5}
                dataKey="value"
                onMouseEnter={onPieEnter}
                >
                
                </Pie>
            </PieChart>
        </div>
    )
}

export default CarPieChart;