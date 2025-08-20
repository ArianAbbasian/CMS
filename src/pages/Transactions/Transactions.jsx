import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import TransactionsStats from "../../components/TransactionsStats/TransactionsStats";
import TopProductsWidget from "../../components/tables/TopProductsTable/TopProductsTable";
import RecentTransactionsChart from "./../../components/Charts/RecentTransactionsChart/RecentTransactionsChart";
import PaymentMethodsChart from "./../../components/Charts/PaymentMethodsChart/PaymentMethodsChart";
import "./Transactions.css";
import {
  AttachMoney,
  ShoppingCart,
  CheckCircle,
  TrendingUp,
} from "@mui/icons-material";

export default function Transactions() {
  return (
    <div className="transactionsPage">
      <PageHeader
        title="Transaction Management"
        description="View and analyze all transactions"
      />

      <div className="transactionsContent">
        {/* TransAction Status */}
        <div className="statsGrid">
          <TransactionsStats
            title="Total Revenue"
            value="$24,265"
            change="+12.4%"
            icon={<AttachMoney fontSize="large" />}
            color="#4CAF50"
          />

          <TransactionsStats
            title="Total Transactions"
            value="1,235"
            change="+8.2%"
            icon={<ShoppingCart fontSize="large" />}
            color="#2196F3"
          />

          <TransactionsStats
            title="Successful"
            value="1,189"
            change="+5.3%"
            icon={<CheckCircle fontSize="large" />}
            color="#8BC34A"
          />

          <TransactionsStats
            title="Avg. Value"
            value="$89.50"
            change="+3.7%"
            icon={<TrendingUp fontSize="large" />}
            color="#FFC107"
          />
        </div>

        {/* TransAction Table */}
        <div className="mainSection">
          <TopProductsWidget />
        </div>

        {/* Charts */}
        <div className="chartsSection">
          <RecentTransactionsChart />
          <PaymentMethodsChart />
        </div>
      </div>
    </div>
  );
}
