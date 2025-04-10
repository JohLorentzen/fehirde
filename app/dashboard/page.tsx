import React from 'react';
import DonutChart, { AllocationData } from '@/components/DonutChart';
import AccountsTable, { Account } from '@/components/AccountsTable';
import DashboardHeader from '@/components/DashboardHeader';

const DashboardPage = () => {
  // Sample allocation data
  const allocationData: AllocationData[] = [
    { name: 'US Stocks', value: 320000, color: '#2563eb' },
    { name: 'International Stocks', value: 180000, color: '#6366f1' },
    { name: 'Bonds', value: 120000, color: '#10b981' },
    { name: 'Real Estate', value: 75000, color: '#f97316' },
    { name: 'Cash', value: 25000, color: '#f59e0b' },
    { name: 'Alternatives', value: 80000, color: '#8b5cf6' },
  ];

  // Sample accounts data
  const accountsData: Account[] = [
    { 
      id: '1', 
      name: '401(k) - Fidelity', 
      type: 'Retirement', 
      balance: 412000, 
      change: 1520, 
      changePercent: 0.37
    },
    { 
      id: '2', 
      name: 'Roth IRA - Vanguard', 
      type: 'Retirement', 
      balance: 153000, 
      change: 830, 
      changePercent: 0.54
    },
    { 
      id: '3', 
      name: 'Brokerage - Charles Schwab', 
      type: 'Taxable', 
      balance: 98500, 
      change: -420, 
      changePercent: -0.42
    },
    { 
      id: '4', 
      name: 'High-Yield Savings', 
      type: 'Cash', 
      balance: 25000, 
      change: 12, 
      changePercent: 0.05
    },
    { 
      id: '5', 
      name: 'REIT Fund - Fundrise', 
      type: 'Alternative', 
      balance: 75000, 
      change: 250, 
      changePercent: 0.33
    },
    { 
      id: '6', 
      name: 'HSA - HealthEquity', 
      type: 'Health', 
      balance: 36500, 
      change: 120, 
      changePercent: 0.33
    },
  ];

  // Calculate totals
  const totalBalance = accountsData.reduce((sum, account) => sum + account.balance, 0);
  const totalChange = accountsData.reduce((sum, account) => sum + account.change, 0);
  const totalChangePercent = (totalChange / (totalBalance - totalChange)) * 100;

  return (
    <div className="container py-8">
      <DashboardHeader 
        totalBalance={totalBalance}
        totalChange={totalChange}
        totalChangePercent={totalChangePercent}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <DonutChart allocations={allocationData} />
        <AccountsTable accounts={accountsData} />
      </div>
    </div>
  );
};

export default DashboardPage;