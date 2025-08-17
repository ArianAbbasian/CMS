import React from "react";
import { transactions } from "./../../../datas";
import "./WidgetLg.css";
import { useMediaQuery } from "@mui/material";

export default function WidgetLg() {
  const isMobile = useMediaQuery("(max-width:768px)");
  
  const StatusBadge = ({ type }) => {
    return (
      <div className={`WidgetLgStatusBadge ${type}`}>
        {type}
      </div>
    );
  };

  return (
    <div className="WidgetLg">
      <div className="WidgetLgHeader">
        <h3 className="WidgetLgTitle">Latest Transactions</h3>
        <span className="WidgetLgSubtitle">Recent customer activities</span>
      </div>
      
      <div className="WidgetLgCardContainer">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="WidgetLgCard">
            <div className="WidgetLgCardHeader">
              <div className="WidgetLgUser">
                <img 
                  src={process.env.PUBLIC_URL + '/' + transaction.img} 
                  className="WidgetLgImg" 
                  alt={transaction.customer}
                />
                <div className="WidgetLgUserInfo">
                  <div className="WidgetLgName">{transaction.customer}</div>
                  <div className="WidgetLgDate">{transaction.date}</div>
                </div>
              </div>
              <StatusBadge type={transaction.status} />
            </div>
            
            <div className="WidgetLgCardBody">
              <div className="WidgetLgDetailItem">
                <span className="WidgetLgDetailLabel">Amount:</span>
                <span className="WidgetLgDetailValue">${transaction.amount}</span>
              </div>
              <div className="WidgetLgDetailItem">
                <span className="WidgetLgDetailLabel">Transaction ID:</span>
                <span className="WidgetLgDetailValue">#{transaction.id}</span>
              </div>
              {!isMobile && (
                <div className="WidgetLgDetailItem">
                  <span className="WidgetLgDetailLabel">Description:</span>
                  <span className="WidgetLgDetailValue">Payment for services</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}