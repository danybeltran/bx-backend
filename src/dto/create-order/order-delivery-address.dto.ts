import { IsString, IsNotEmpty } from 'class-validator';

export class OrderDeliveryAddressDto {
  @IsString({ message: 'State should be a string' })
  @IsNotEmpty({ message: 'State is required' })
  state: string;

  @IsString({ message: 'City should be a string' })
  @IsNotEmpty({ message: 'City is required' })
  city: string;

  @IsString({ message: 'Full address should be a string' })
  @IsNotEmpty({ message: 'Full address cannot be empty' })
  fullAddress: string;

  @IsString({ message: 'If provided, address reference should be a string' })
  addressReference: string;

  @IsString({ message: 'If provided, Indication should be a string' })
  indications: string;
}
