import { IsInt, IsOptional, IsPositive } from "class-validator";
import { IsCardinal } from "common/decorators/id-cardinal.decorator";

export class PaginationDto {
  @IsOptional()
  @IsCardinal()
  readonly limit: number;

  @IsOptional()
  @IsCardinal()
  readonly offset: number;
}