import { Task } from "./models/task.model";

export const TASKS : Task[]= [
  {
    id: 1,
    text: 'Pick up dry cleaning',
    day: new Date(new Date().getTime() + 24*60*60*1000),
    reminder: true,
  },
  {
    id: 2,
    text: 'Nail appointment',
    day: new Date(new Date().getTime() + 24*60*60*1000),
    reminder: true,
  },
  {
    id: 1,
    text: 'Grocery shopping',
    day: new Date(new Date().getTime() + 24*60*60*1000),
    reminder: false,
  },
];
