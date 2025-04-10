'use client'
import React, { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, formatCurrency } from '@/lib/utils';

export interface AllocationData {
  name: string;
  value: number;
  color: string;
  percentage?: number;
}

interface InvestmentDonutChartProps {
  allocations: AllocationData[];
  title?: string;
  className?: string;
}

// Using any for recharts complex types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-md border">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-lg font-bold">{`${formatCurrency(payload[0].value)}`}</p>
        <p className="text-sm text-gray-500">{`${payload[0].payload.percentage}%`}</p>
      </div>
    );
  }
  return null;
};

const DonutChart: React.FC<InvestmentDonutChartProps> = ({ 
  allocations, 
  title = "Investment Allocation",
  className 
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Calculate total for percentages
  const total = allocations.reduce((sum, item) => sum + item.value, 0);
  
  // Add percentage to each item
  const data = allocations.map(item => ({
    ...item,
    percentage: Math.round((item.value / total) * 100)
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderLegend = (props: any) => {
    const { payload } = props;
    
    return (
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {payload.map((entry: any, index: number) => (
          <li 
            key={`item-${index}`} 
            className={cn(
              "flex items-center text-sm",
              activeIndex === index ? "font-bold" : ""
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
            <span>{entry.value} ({entry.payload.percentage}%)</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke={entry.color}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonutChart;