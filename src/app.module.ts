import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from 'users/users.module';
import { EnvModule } from './env/env.module';
import { OrdersModule } from './domain/orders/orders.module';
import { PaymentsModule } from './domain/payments/payments.module';

@Module({
  imports: [UsersModule, CommonModule, DatabaseModule, EnvModule, OrdersModule, PaymentsModule],

})
export class AppModule { }

