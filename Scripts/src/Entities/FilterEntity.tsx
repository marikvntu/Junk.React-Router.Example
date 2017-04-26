export default class FilterEntity
{
    EntityName: string;
    Description: string;
    MinRating: number;    
    MaxDistance: number;

    constructor()
    {
        this.EntityName = "";
        this.Description = "";
        this.MinRating = 0;
        this.MaxDistance = 500;
    }
}

const DefaultFilterEntity = () =>  new FilterEntity() 
export { DefaultFilterEntity };