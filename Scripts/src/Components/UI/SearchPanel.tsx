import * as React from "react";
import { OutletEntity } from "../../Entities/OutletEntity";
import FilterEntity from "../../Entities/FilterEntity";
export interface SearchProps { Filter: FilterEntity,  FilterChanged(outletNames: string, outletDescriptions: string, radius: number): Function }

let _entityName: any;
let _entityDescription: any;
var radius: number;

export class SearchPanel extends React.Component<SearchProps, null>
{
    render() {
        radius = this.props.Filter.MaxDistance;
        return <div>
            <p>Enter text to seach by name</p>
            <input type="text" ref={input => _entityName = input} onChange={this.processFilterChange.bind(this)} />
            <p>Enter text to seach by description</p>
            <input type="text" ref={input => _entityDescription = input} onChange={this.processFilterChange.bind(this)} />
            <p >Radius:</p>
            <input type="text" value={radius} onChange={this.radiusChanged.bind(this)} />
            <input type="range" min="100" max="5000" step="100" value={radius} onChange={this.radiusChanged.bind(this)} />
        </div>;
    }

    radiusChanged(source: any)
    {
        var newValueString = source.target.value;
        radius = newValueString === ""
            ? 0
            : parseInt(source.target.value);
        this.processFilterChange();
    }

    processFilterChange() {        
        this.props.FilterChanged(_entityName.value, _entityDescription.value, radius);
    }
}