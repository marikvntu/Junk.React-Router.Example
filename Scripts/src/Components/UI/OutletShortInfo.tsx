import * as React from "react";
import { OutletEntity } from "../../Entities/OutletEntity";

export interface OutletProps { Outlet: OutletEntity }

export class OutletShortInfo extends React.Component<OutletProps, null>
{
    render()
    {
        return <div>
            <h3>{this.props.Outlet.EntityName}</h3>
            <div className="well">{this.props.Outlet.Description}</div>
            <b><p>Distance: {this.props.Outlet.Distance} (m)</p></b>
            <p>Rating: {this.props.Outlet.OutletRating}</p>            
        </div>;
    }
}