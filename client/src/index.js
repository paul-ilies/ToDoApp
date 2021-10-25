import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import App from "./App";
import "./index.scss";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import history from "./history"
import Tasks from "./pages/Tasks";
import CreateTask from "./components/tasks/CreateTask";
import SingleTask from "./pages/SingleTask";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, { auth: { userInfo: localStorage.getItem("token") } },
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/login" exact component={SignIn} />
                    <Route path="/tasks" exact component={Tasks} />
                    <Route path="/task" exact component={CreateTask} />
                    <Route path="/task/:id" exact component={SingleTask} />
                    <Redirect to="/" />
                </Switch>
            </App>
        </Router>
    </Provider>

    , document.querySelector("#root"))