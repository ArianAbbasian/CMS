import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Label
} from 'recharts';
import { Typography } from '@mui/material';
import { useTheme } from '../../../contexts/ThemeContext';
import { paymentMethodsData, paymentColors } from '../../../datas';
import './PaymentMethodsChart.css';

const PaymentMethodsChart = () => {
  const { isDarkMode } = useTheme();
  const { colors, text, tooltipBg } = isDarkMode ? paymentColors.dark : paymentColors.light;

  // --- Custom Tooltip for the pie chart ---
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;

    return (
      <div className="payment-tooltip">
        <Typography variant="subtitle2" style={{ marginBottom: 4 }}>
          {data.name} <small>({data.value}%)</small>
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: payload[0].color,
              borderRadius: '2px'
            }}
          />
          <span>Market Share:</span>
          <strong>{data.value}%</strong>
        </div>
      </div>
    );
  };

  return (
    <div className="payment-widget">
      {/* --- Widget Header --- */}
      <div className="payment-widget-header">
        <h3 className="payment-widget-title">Payment Methods</h3>
        <span className="payment-widget-subtitle">Distribution by payment type</span>
      </div>

      {/* --- Pie Chart Container --- */}
      <div className="payment-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={paymentMethodsData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
            >
              {/* --- Pie segments with colors --- */}
              {paymentMethodsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  stroke={isDarkMode ? '#2a3042' : '#fff'}
                  strokeWidth={2}
                />
              ))}

              {/* --- Center label --- */}
              <Label
                value="Payment"
                position="center"
                fill={text}
                fontSize={14}
                fontWeight={500}
              />
            </Pie>

            {/* --- Tooltip --- */}
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                backgroundColor: tooltipBg,
                borderColor: isDarkMode ? '#444' : '#eee'
              }}
            />

            {/* --- Legend --- */}
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconSize={10}
              iconType="circle"
              formatter={(value, entry, index) => (
                <span style={{ color: text }}>
                  {value} ({paymentMethodsData[index].value}%)
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentMethodsChart;
