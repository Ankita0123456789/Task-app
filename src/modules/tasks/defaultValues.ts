import { TasksIF } from "./interfaces";

export const TasksInit: TasksIF = {
  id: null,
  title: "",
  description: "",
  duedate: "",
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
    name: "Working",
    value: "Working",
  },
  {
    name: "Pending",
    value: "Pending",
  },
];
