import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import EmailList from "../../components/Email/EmailList/EmailList";
import EmailEditor from "../../components/Email/EmailEditor/EmailEditor";
import EmailLabels from "../../components/Email/EmailLabels/EmailLabels";
import EmailReminders from "../../components/Email/EmailReminders/EmailReminders";
import AutoReplies from "../../components/Email/AutoReplies/AutoReplies";
import { MailOutline } from "@mui/icons-material";
import "./Mail.css";

const Mail = () => {
  return (
    <div className="mail-page">
      <PageHeader
        title="Mail Center"
        description="Manage your emails and communications"
        descriptionIcon={<MailOutline className="description-icon" />}
        showTimeFilters={false}
      />

      <div className="mail-container">
        <div className="mail-sidebar">
          <EmailLabels />
          <EmailReminders />
          <AutoReplies />
        </div>

        <div className="mail-content">
          <EmailList />
          <EmailEditor />
        </div>
      </div>
    </div>
  );
};

export default Mail;
