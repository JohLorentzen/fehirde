
import React from 'react';

interface DashboardHeaderProps {
  totalBalance: number;
  totalChange: number;
  totalChangePercent: number;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  totalBalance, 
  totalChange, 
  totalChangePercent 
}) => {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
  };

  const formatCurrencyWithSign = (amount: number) => {
    return (amount > 0 ? '+' : '') + amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
  };

  const formatPercentage = (percent: number) => {
    return `${percent > 0 ? '+' : ''}${percent.toFixed(2)}%`;
  };

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-2">Investment Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div>
          <p className="text-sm text-muted-foreground">Total Balance</p>
          <p className="text-3xl font-bold">{formatCurrency(totalBalance)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Todays Change</p>
          <div className="flex items-center">
            <p className={`text-xl font-semibold ${totalChange > 0 ? 'text-finance-green' : 'text-finance-red'}`}>
              {formatCurrencyWithSign(totalChange)}
            </p>
            <p className={`ml-2 ${totalChange > 0 ? 'text-finance-green' : 'text-finance-red'}`}>
              {formatPercentage(totalChangePercent)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;