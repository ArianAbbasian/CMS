import React from "react";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import "./features.css";

export default function Feature() {
  const featuresData = [
    {
      title: "Revenue",
      amount: "$2,415",
      rate: -11.4,
      subtitle: "Compared to last month"
    },
    {
      title: "Sales",
      amount: "$4,215",
      rate: -1.4,
      subtitle: "Compared to last month"
    },
    {
      title: "Cost",
      amount: "$2,225",
      rate: +2.4,
      subtitle: "Compared to last month"
    }
  ];

  return (
    <div className="features">
      {featuresData.map((feature, index) => (
        <div className="featureItem" key={index}>
          <span className="featureTitle">{feature.title}</span>
          <div className="featureContainer">
            <span className="featureMoney">{feature.amount}</span>
            <span className="featureRate">
              {feature.rate}
              {feature.rate >= 0 ? (
                <ArrowUpward className="featureIcon" />
              ) : (
                <ArrowDownward className="featureIcon negative" />
              )}
            </span>
          </div>
          <span className="featureSub">{feature.subtitle}</span>
        </div>
      ))}
    </div>
  );
}