"use strict";

function processNotifications(notifications) {
  return notifications.map(function (n) {
    let type;
    if (n.read === true) {
      type = "read";
    } else if (n.priority === 3) {
      type = "critical";
    } else if (n.priority === 2) {
      type = "warning";
    } else {
      type = "normal";
    }

    return {
      ...n,
      messageType: type,
    };
  });
}
const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

console.log(processNotifications(notifications));
