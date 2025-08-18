import React from "react";
import GeographyChart from "../../components/Charts/GeographyChart/GeographyChart";
import TrafficChart from "../../components/Charts/TrafficChart/TrafficChart";
import TopProductsTable from "../../components/tables/TopProductsTable";
import WidgetLg from "../../components/widgets/WidgetLg/WidgetLg";
import ProgressWidget from "../../components/widgets/ProgressWidget/ProgressWidget";
import ActivityFeed from "../../components/widgets/ActivityFeed/ActivityFeed";
import InventoryAlert from "../../components/widgets/InventoryAlert/InventoryAlert";
import SummaryCard from "../../components/cards/SummaryCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import { TrendingUp as TrendingUpIcon } from "@mui/icons-material";
import "./Analytics.css";

export default function Analytics() {
  return (
    <div className="analytics">
      {/* هدر صفحه */}
      <PageHeader
        title="Analytics Dashboard"
        description="Business performance overview"
        descriptionIcon={<TrendingUpIcon className="description-icon" />}
        showTimeFilters={true}
      />

      {/* کارت‌های خلاصه */}
      <div className="analytics-summary-cards">
        <SummaryCard
          title="Total Sales"
          value="$24,780"
          change="+12%"
          icon="AttachMoney"
        />
        <SummaryCard
          title="New Users"
          value="1,254"
          change="+8%"
          icon="People"
        />
        <SummaryCard
          title="Orders"
          value="845"
          change="-2%"
          icon="ShoppingCart"
        />
        <SummaryCard
          title="Inventory"
          value="1,284"
          change="+5%"
          icon="Store"
        />
      </div>

      {/* چارت‌ها */}
      <div className="analytics-charts">
        <div className="chart-item">
          <GeographyChart />
        </div>
        <div className="chart-item">
          <TrafficChart />
        </div>
      </div>

      {/* ویجت‌ها */}
      <div className="analytics-widgets">
        <div className="main-widgets">
          <div className="widget-content">
            <TopProductsTable />
          </div>
          <div className="widget-content">
            <WidgetLg />
          </div>
        </div>
        <div className="side-widgets">
          <ProgressWidget />
          <ActivityFeed />
          <InventoryAlert />
        </div>
      </div>
    </div>
  );
}
