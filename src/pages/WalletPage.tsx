import React from 'react';
import { DollarSign, Gift, ArrowUpRight, ArrowDownRight, Filter, Download } from 'lucide-react';

const WalletPage: React.FC = () => {
  const walletData = {
    tokens: 1250,
    cash: 75.50,
    points: 500,
    pendingRewards: [
      { type: 'Product', name: 'Wireless Earbuds', value: '$129.99' },
      { type: 'Cash', name: 'Premium Task Reward', value: '$25.00' },
    ],
    transactions: [
      { id: 1, type: 'Earned', amount: 50, currency: 'Tokens', task: 'Share summer collection', date: '2024-03-15' },
      { id: 2, type: 'Redeemed', amount: 25, currency: 'USD', description: 'Cash withdrawal', date: '2024-03-14' },
      { id: 3, type: 'Earned', amount: 100, currency: 'Points', description: 'Referral bonus', date: '2024-03-13' },
      { id: 4, type: 'Earned', amount: 75, currency: 'Tokens', task: 'Product review', date: '2024-03-12' },
      { id: 5, type: 'Redeemed', amount: 500, currency: 'Tokens', description: 'Gift card', date: '2024-03-11' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wallet</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Tokens</h2>
          <p className="text-3xl font-bold text-primary-600">{walletData.tokens}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Cash</h2>
          <p className="text-3xl font-bold text-green-600">${walletData.cash.toFixed(2)}</p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-2">Points</h2>
          <p className="text-3xl font-bold text-blue-600">{walletData.points}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pending Rewards</h2>
        <div className="card p-6">
          {walletData.pendingRewards.map((reward, index) => (
            <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
              <div>
                <p className="font-semibold">{reward.name}</p>
                <p className="text-sm text-gray-600">{reward.type}</p>
              </div>
              <p className="font-bold text-primary-600">{reward.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Transaction History</h2>
          <div className="flex space-x-2">
            <button className="btn-secondary flex items-center">
              <Filter className="mr-2" size={16} />
              Filter
            </button>
            <button className="btn-secondary flex items-center">
              <Download className="mr-2" size={16} />
              Export
            </button>
          </div>
        </div>
        <div className="card p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Date</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {walletData.transactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-gray-200">
                  <td className="py-2">{transaction.date}</td>
                  <td className="py-2">
                    <span className={`flex items-center ${transaction.type === 'Earned' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'Earned' ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-2 font-semibold">
                    {transaction.currency === 'USD' ? '$' : ''}{transaction.amount} {transaction.currency}
                  </td>
                  <td className="py-2">{transaction.task || transaction.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;