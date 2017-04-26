import { WebAgent } from "../WebHandling/WebAgent";
import { plainToClass } from "class-transformer";
import { OutletEntity } from "../Entities/OutletEntity";
import * as ActionTypes from "./ActionTypes";

export default function InitializeModel()
{
    return (dispatch: Function) =>
    {
        var webAgent = new WebAgent();
        webAgent
            .Get("http://localhost:50434/api/initialData/49.226/28.448", (responseJson) => {
                let deseriallizedObject: Array<OutletEntity> = plainToClass(OutletEntity, responseJson);
                dispatch({ type: ActionTypes.InitModelAction, payload: { Outlets: deseriallizedObject, FilterString: ""} });
            });
    }
}