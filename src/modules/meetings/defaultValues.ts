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
    name: "Choose Status",
    value: "Choose Status",
  },
  {
    name: "Open",
    value: "Open",
  },
  {
    name: "Closed",
    value: "Closed",
  },
  {
    name: "Started",
    value: "Started",
  },
];
