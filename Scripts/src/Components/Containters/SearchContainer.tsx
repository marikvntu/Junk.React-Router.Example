import { connect } from 'react-redux'
import { SearchPanel } from "../UI/SearchPanel"
import FilterOutlets from "../../Actions/FilterOutlets"
import FilterEntity from "../../Entities/FilterEntity"

const mapStateToProps = function ({ Filter }: { Filter: FilterEntity })
{
    return { Filter }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        FilterChanged(outletNames: string, outletDescriptions: string, radius: number) {
            dispatch(FilterOutlets(outletNames, outletDescriptions, radius))
        }
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPanel)
export default SearchContainer