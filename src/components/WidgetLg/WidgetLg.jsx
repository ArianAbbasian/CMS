import { transactions } from "./../../datas";
import "./WidgetLg.css";

export default function WidgetLg() {
  const StatusButton = ({ type }) => {
    return (
      <button className={`WidgetLgStatusButton ${type}`}>
        {type}
        <span className="WidgetLgStatusIcon"></span>
      </button>
    );
  };

  return (
    <div className="WidgetLg">
      <div className="WidgetLgHeader">
        <h3 className="WidgetLgTitle">Latest Transactions</h3>
        <span className="WidgetLgSubtitle">Recent customer activities</span>
      </div>
      
      <div className="WidgetLgTableContainer">
        <table className="WidgetLgTable">
          <thead>
            <tr className="WidgetLgTr">
              <th className="WidgetLgTh">Customer</th>
              <th className="WidgetLgTh">Date</th>
              <th className="WidgetLgTh">Amount</th>
              <th className="WidgetLgTh">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="WidgetLgTr">
                <td className="WidgetLgUser">
                  <img 
                    src={process.env.PUBLIC_URL + '/' + transaction.img} 
                    className="WidgetLgImg" 
                    alt={transaction.customer}
                  />
                  <span className="WidgetLgName">{transaction.customer}</span>
                </td>
                <td className="WidgetLgDate">{transaction.date}</td>
                <td className="WidgetLgAmount">${transaction.amount}</td>
                <td className="WidgetLgStatus">
                  <StatusButton type={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}