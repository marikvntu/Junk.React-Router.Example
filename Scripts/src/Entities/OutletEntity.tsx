import { BaseEntity } from "./BaseEntity";

export class OutletEntity extends BaseEntity
{
    Description: string;
    ImageUrl: string;
    OutletRating: number;
    Votes: number;
    Latitude: number;
    Longitude: number;
    Distance: number;
}