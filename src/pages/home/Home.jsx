import React, { useState, useEffect } from "react";
import Features from "../../components/features/Feature";
import Chart from "../../components/Charts/Chart";
import WidgetSm from "../../components/widgets/widgetSm/WidgetSM";
import { xAxisData } from "../../datas";
import WidgetLg from "../../components/widgets/WidgetLg/WidgetLg";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomeIcon from "@mui/icons-material/Home";
import Loading from "../../components/Loading/HomeSkeleton";
import "./Home.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageHeader
            title="Dashboard"
            description="Track, analyze, and grow your business"
            descriptionIcon={<HomeIcon className="description-icon" />}
            showTimeFilters={true}
          />
          <Features />
          <Chart grid title="Month Sales" data={xAxisData} dataKey="Sale" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </>
      )}
    </div>
  );
}
