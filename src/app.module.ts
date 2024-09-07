import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule],

})
export class AppModule { }

