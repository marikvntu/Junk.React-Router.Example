import * as ActionTypes from "./ActionTypes";
import FilterEntity, { DefaultFilterEntity } from "../Entities/FilterEntity"

export default function FilterOutlets(outletNames: string, outletDescription: string, radius: number) {
    return (dispatch: Function) => {
        var filter = DefaultFilterEntity();
        filter.EntityName = outletNames;
        filter.Description = outletDescription;
        filter.MaxDistance = radius;
        dispatch({ type: ActionTypes.FilterOutletsAction, payload: filter });
    }
}