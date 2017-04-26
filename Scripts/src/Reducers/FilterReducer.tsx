import * as ActionTypes from "../Actions/ActionTypes";
import FilterEntity, {DefaultFilterEntity } from "../Entities/FilterEntity"

export default function FilterReducer(state: FilterEntity = DefaultFilterEntity(), action: any): FilterEntity {
    switch (action.type)
    {
        case ActionTypes.FilterOutletsAction:
            return action.payload;
        default:
            return state;
    }
}