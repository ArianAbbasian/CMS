import React, { useState } from "react";
import FeedbackStats from "../../components/FeedbackStats/FeedbackStats";
import FeedbackFilters from "../../components/FeedbackFilters/FeedbackFilters";
import FeedbackTable from "../../components/tables/FeedbackTable/FeedbackTable";
import FeedbackDetailPanel from "../../components/FeedbackDetailPanel/FeedbackDetailPanel";
import FeedbackCharts from "../../components/Charts/FeedbackCharts/FeedbackCharts";
import PageHeader from "../../components/PageHeader/PageHeader";
import { DynamicFeed } from "@mui/icons-material";
import {
  feedbackStatsData,
  feedbackTableData,
  filterOptions,
  feedbackChartsData,
} from "../../datas";

const FeedbackPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(feedbackTableData);

  const handleRowClick = (feedback) => {
    setSelectedFeedback(feedback);
    setIsDetailOpen(true);
  };

  const handleAction = (action, feedback) => {
    console.log(`${action} action on feedback:`, feedback);
    // Implement action logic here
  };

  const handleSearch = (searchTerm) => {
    const filtered = feedbackTableData.filter(
      (item) =>
        item.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.post.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleStatusFilter = (status) => {
    if (status === "all") {
      setFilteredData(feedbackTableData);
    } else {
      const filtered = feedbackTableData.filter(
        (item) => item.status === status
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="feedback-page">
      <PageHeader
        title="Feedback Management"
        description="Summary of user comments and feedback"
        descriptionIcon={<DynamicFeed className="description-icon" />}
        showTimeFilters={false}
      />

      <FeedbackStats data={feedbackStatsData} />

      <FeedbackCharts data={feedbackChartsData} />

      <FeedbackFilters
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        statusOptions={filterOptions.status}
        dateOptions={filterOptions.date}
        ratingOptions={filterOptions.rating}
      />

      <FeedbackTable
        data={filteredData}
        onRowClick={handleRowClick}
        onAction={handleAction}
      />

      <FeedbackDetailPanel
        feedback={selectedFeedback}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onStatusChange={(id, status) =>
          console.log("Status change:", id, status)
        }
        onReplySubmit={(id, reply) => console.log("Reply:", id, reply)}
      />
    </div>
  );
};

export default FeedbackPage;
