import React from "react";
import Features from "../../components/features/Feature";
import Chart from "../../components/Charts/Chart";
import WidgetSm from "../../components/widgets/widgetSm/WidgetSM";
import { xAxisData } from "../../datas";
import WidgetLg from "../../components/widgets/WidgetLg/WidgetLg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sales" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
