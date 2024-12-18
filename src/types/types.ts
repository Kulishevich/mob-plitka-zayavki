export enum State {
  InProgress = "В работе",
  Overdue = "Просрочена",
  Reviewed = "Есть отзыв",
  Completed = "Выполнена",
}

export type CardType = {
  id: string;
  applicationNumber: number;
  createdAt: Date;
  controlDate: Date;
  doneDate: Date | null;
  system: string;
  type: string;
  object: {
    name: string;
    city: string;
    street: string;
  };
  text: string;
  state: State;
  isTechnological: boolean;
};
