import * as ActionTypes from "../Actions/ActionTypes";
import { OutletEntity } from "../Entities/OutletEntity";

export default function OutletReducer(state: OutletEntity[] = [], action: any): OutletEntity[]
{
    switch (action.type)
    {
        case ActionTypes.InitModelAction:
            return action.payload.Outlets;
        default:
            return state;
    }
}