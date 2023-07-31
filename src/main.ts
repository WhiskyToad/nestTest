import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { getDbConnectionOptions, runDbMigrations } from '@shared/utils';

const port = process.env.Port;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
  );
  /**
   * Run DB migrations
   */
  await runDbMigrations();
  await app.listen(port);
  Logger.log(`Server started running onhttp://localhost:${port}`, 'Bootstrap');
}
bootstrap();
