import { connect } from 'react-redux'
import { OutletsList } from "../UI/OutletsList"
import { OutletEntity } from "../../Entities/OutletEntity"
import FilterEntity from "../../Entities/FilterEntity"

const mapStateToProps = function ({ Outlets, Filter }: { Outlets: OutletEntity[], Filter: FilterEntity })
{   
    return { Outlets: FilterOutlets(Outlets, Filter) }
}

function FilterOutlets(outlets: OutletEntity[], filter: FilterEntity): OutletEntity[]
{
    return outlets
        .filter(entity => entity.EntityName.toLowerCase().indexOf(filter.EntityName.toLowerCase()) >= 0)
        .filter(entity => entity.Description.toLowerCase().indexOf(filter.Description.toLowerCase()) >= 0)
        .filter(entity => entity.Distance < filter.MaxDistance);
}

const OutletListContainter = connect(mapStateToProps)(OutletsList)
export default OutletListContainter