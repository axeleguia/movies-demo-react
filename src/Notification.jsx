import React from "react";

export const Notification = ({ message, type = "" }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};
