import { OutletEntity } from "./OutletEntity"
import FilterEntity, { DefaultFilterEntity } from "../Entities/FilterEntity"

export default function ()
{
    return { Outlets: new Array<OutletEntity>(), Filter: DefaultFilterEntity() };
};