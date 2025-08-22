export interface Tasks {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TasksResponse {
  todos: Tasks[];
  total: number;
  skip: number;
  limit: number;
}
