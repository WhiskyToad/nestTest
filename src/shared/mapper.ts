import { TodoDto } from '@todo/todo.dto';
import { TodoEntity } from '@todo/entity/todo.entity';
import { UserEntity } from 'src/user/user.entity';
import { UserDto } from 'src/user/user.dto';

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  const todoDto: TodoDto = { id, name, description };
  return todoDto;
};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;

  const userDto: UserDto = {
    id,
    username,
    email,
  };

  return userDto;
};
