import { TodoDto } from '@todo/todo.dto';
import { TodoEntity } from '@todo/entity/todo.entity';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  const todoDto: TodoDto = { id, name, description };
  return todoDto;
};
