import "./index.css";

// React
import React from "react";

// Redux
// import { connect } from "react-redux";

// React Router Config
import { renderRoutes } from "react-router-config";

// Components
import Header from "../../components/Header";
import AppNavbar from "../../components/AppNavbar";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const App = (props) => {

    const { route } = props;

    return (
        <div className="d-flex flex-column vh-100">            
            <Header>
                <AppNavbar />
            </Header>
            
            <Main>
                { renderRoutes(route.routes) }
            </Main>

            <Footer />
        </div>
    );
};

// const mapStateToProps = state => {
//     return {};
// };

// const loadData = (store) => store.dispatch(checkLoginStatus());

export default {
    // loadData,
    // component: connect(mapStateToProps)(App)]
    component: App
};