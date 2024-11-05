import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [OrderController],
  providers: [PrismaService, OrderService],
})
export class AppModule {}
