import React from "react";
import { CheckCircle, Error, Info } from "@mui/icons-material";
import "./ExecutionLogs.css";

const ExecutionLogs = () => {
  const logs = [
    {
      id: 1,
      workflow: "Abandoned Cart Recovery",
      status: "success",
      timestamp: "2025-05-15 14:30",
      triggeredBy: "user#1234",
      details: "Sent email reminder with 10% discount code"
    },
    {
      id: 2,
      workflow: "New User Welcome",
      status: "error",
      timestamp: "2025-05-15 10:15",
      triggeredBy: "user#5678",
      details: "Failed to add to mailing list"
    },
    {
      id: 3,
      workflow: "Low Stock Alert",
      status: "pending",
      timestamp: "2025-05-14 16:45",
      triggeredBy: "system",
      details: "Waiting for manager approval"
    }
  ];

  const statusIcons = {
    success: <CheckCircle className="status-icon success" />,
    error: <Error className="status-icon error" />,
    pending: <Info className="status-icon pending" />
  };

  return (
    <div className="ExecutionLogs">
      <div className="LogsHeader">
        <h3 className="LogsTitle">Execution Logs</h3>
        <span className="LogsSubtitle">Recent automation executions</span>
      </div>
      
      <div className="LogsTableContainer">
        <table className="LogsTable">
          <thead>
            <tr className="TableHeaderRow">
              <th className="TableHeader">Workflow</th>
              <th className="TableHeader">Status</th>
              <th className="TableHeader">Triggered By</th>
              <th className="TableHeader">Time</th>
              <th className="TableHeader">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="TableRow">
                <td className="TableCell workflow-cell">
                  <span className="WorkflowName">{log.workflow}</span>
                </td>
                <td className="TableCell status-cell">
                  <div className={`StatusBadge ${log.status}`}>
                    {statusIcons[log.status]}
                    <span>
                      {log.status === 'success' ? 'Success' : 
                       log.status === 'error' ? 'Failed' : 'Pending'}
                    </span>
                  </div>
                </td>
                <td className="TableCell triggered-cell">
                  {log.triggeredBy}
                </td>
                <td className="TableCell time-cell">
                  {log.timestamp}
                </td>
                <td className="TableCell details-cell">
                  {log.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExecutionLogs;