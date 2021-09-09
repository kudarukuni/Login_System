import { Switch, Route, Redirect } from 'react-router-dom';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoardHome from "./DashboardHome";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={DashBoardHome} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    );
}

export default App;
