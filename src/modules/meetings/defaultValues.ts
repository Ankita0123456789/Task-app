import { MeetingIF } from "./interfaces";

export const meetingInit: MeetingIF = {
  id: null,
  title: "",
  description: "",
  date: "",
  status: "",
};

export const statuses = [
  {
    name: "Open",
    value: "open",
  },
  {
    name: "Closed",
    value: "closed",
  },
  {
    name: "Started",
    value: "started",
  },
];
