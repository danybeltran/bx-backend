import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsISO8601,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrderDeliveryAddressDto } from './order-delivery-address.dto';
import { OrderBulkDto } from './order-bulk.dto';

/**
 * DTO representing the new order
 */
export class CreateOrderDto {
  // Address related

  @IsString({ message: 'Collect address should be a string' })
  @IsNotEmpty({ message: 'Collect address cannot be empty' })
  collectAddress: string;

  @IsString({ message: 'Person name should be a string' })
  @IsNotEmpty({ message: 'Person name cannot be empty' })
  personName: string;

  @IsString({ message: 'Person lastname should be a string' })
  @IsNotEmpty({ message: 'Person lastname cannot be empty' })
  personLastname: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  personEmail: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  @IsISO8601()
  date: Date;

  @Type(() => OrderDeliveryAddressDto)
  @ValidateNested({ each: true })
  deliveryAddress: OrderDeliveryAddressDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderBulkDto)
  bulks: OrderBulkDto[];
}
