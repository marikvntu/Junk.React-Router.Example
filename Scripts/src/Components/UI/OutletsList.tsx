import * as React from "react";
import { OutletEntity } from "../../Entities/OutletEntity";
import FilterEntity from "../../Entities/FilterEntity";
import { OutletShortInfo } from "./OutletShortInfo";

const defaultProps = { Outlets : new Array<OutletEntity>() };
export interface OutletListProps { Outlets: OutletEntity[] }

export class OutletsList extends React.Component<OutletListProps, null>
{
    render(){
        return <div className="container">
            <div className="row">                
                {this.props.Outlets                    
                    .map(entity =>
                    <div className="col-*-*">
                        <OutletShortInfo Outlet={entity} />
                    </div>)
                }
            </div>            
        </div>;
    }
 }