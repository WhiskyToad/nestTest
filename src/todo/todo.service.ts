import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { todos } from 'src/mock/todos.mock';
import { toTodoDto } from 'src/shared/mapper';
import { toPromise } from 'src/shared/utils';
import { TodoCreateDto, TodoDto } from './todo.dto';
import { TodoEntity } from './entity/todo.entity';
import * as uuid from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,
  ) {}
  todos: TodoEntity[] = todos;

  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = await this.todoRepo.findOne({ where: { id } });

    if (!todo) {
      throw new HttpException(
        `Todo item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toTodoDto(todo);
  }

  async getAllTodo(): Promise<TodoDto[]> {
    return todos.map((todo) => toTodoDto(todo));
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const { name, description } = todoDto;

    const todo: TodoEntity = this.todoRepo.create({ name, description });
    await this.todoRepo.save(todo);

    return toPromise(toTodoDto(todo));
  }

  async updateTodo(todoDto: TodoDto): Promise<TodoDto> {
    return toTodoDto(todos[0]);
  }

  async destroyTodo(id: string): Promise<TodoDto> {
    return toTodoDto(todos[0]);
  }
}
