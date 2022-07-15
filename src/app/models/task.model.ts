export interface Task {
  id?: string;
  text: string;
  day: string;
  reminder: boolean;
}

export interface CreateTaskDTO extends Omit<Task, 'id'> {}
