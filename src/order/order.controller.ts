import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getOrders() {
    const orders = await this.orderService.getOrders();
    return {
      orders,
    };
  }

  @Post()
  addOrder(
    @Body()
    newOrder: CreateOrderDto,
  ) {
    return this.orderService.createOrder(newOrder);
  }
}
