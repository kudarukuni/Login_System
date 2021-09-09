import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';

import Footer from 'components/Footer';

import useToken from "./hooks/useToken";

import jwt_decode from "jwt-decode";


function DashBoardHome() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Redirect to='/login'  />
    }


    const decoded = jwt_decode(token);

    let name = decoded.name

    return (
        <>
            <Sidebar name={name} />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default DashBoardHome;
