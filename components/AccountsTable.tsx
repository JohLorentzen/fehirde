
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn, formatCurrency, formatPercentage } from '@/lib/utils';

export interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  change: number;
  changePercent: number;
}

interface AccountsTableProps {
  accounts: Account[];
  title?: string;
  className?: string;
}

const AccountsTable: React.FC<AccountsTableProps> = ({ 
  accounts,
  title = "Investment Accounts",
  className
}) => {

  

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell className="font-medium">{account.name}</TableCell>
                <TableCell>{account.type}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(account.balance)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    {account.change > 0 ? (
                      <ArrowUpRight className="mr-1 h-4 w-4 text-finance-green" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-4 w-4 text-finance-red" />
                    )}
                    <span 
                      className={cn(
                        account.change > 0 ? "text-finance-green" : "text-finance-red",
                        "font-medium"
                      )}
                    >
                      {formatPercentage(account.changePercent)}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AccountsTable;