interface ITask {
  id: string;
  title: string;
}

interface ITaskItems {
  items: ITask[];
}

export type { ITask, ITaskItems };
