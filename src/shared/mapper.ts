import { TodoDto } from 'src/todo/todo.dto';
import { TodoEntity } from 'src/todo/todo.entity';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  const todoDto: TodoDto = { id, name, description };
  return todoDto;
};
