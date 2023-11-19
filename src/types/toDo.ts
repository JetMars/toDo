interface ITask {
  id: number;
  title: string;
}

interface ITaskItems {
  items: ITask[];
}

export type { ITask, ITaskItems };
