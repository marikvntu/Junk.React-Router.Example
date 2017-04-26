import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import InitModel from "./Actions/InitModel"
import JunkStore from "./Store"
import Routes from "./Routes"

ReactDOM.render(
    <Provider store={JunkStore}>
        { Routes }
    </Provider>,    
    document.getElementById("app")
);

//temporary thing to have a better "feel" of asynchronous call
setTimeout(function () {
    JunkStore.dispatch(InitModel());
}, 1000);