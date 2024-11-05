import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto } from 'src/dto/create-order/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrders() {
    return this.prisma.order.findMany();
  }

  async createOrder(order: CreateOrderDto) {
    return this.prisma.order.create({
      data: order,
    });
  }
}
