import { uuid } from 'src/app/shared/helpers/uuid';

export interface Todo {
  _id: string;
  title: string;
  isCompleted: boolean;
}

export type TodoInsert = Omit<Todo, 'id'>;

export function createTempTodo(title: string): Todo {
  return {
    _id: uuid(),
    title,
    isCompleted: false
  };
}

export function isTodoTitleValid(title: string): boolean {
  return Boolean(title && title.length);
}
