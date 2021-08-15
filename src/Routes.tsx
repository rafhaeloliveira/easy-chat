import React, { FC, useContext } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
// import { io } from "socket.io-client";
import { ProfileContext, ProfileProvider } from "./context/profile-provider";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";

const ProtectedRoute = ({ component, exact, path }: any) => {
  const { profile }: any = useContext(ProfileContext);

  return profile.user ? (
    <Route path={path} component={component} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
};

const App: FC<any> = () => {
  // const socket = io("http://localhost:3001", {
  //   reconnectionDelayMax: 10000,
  // });

  // useEffect(() => {
  //   console.log("socket =>", socket);
  // }, []);

  return (
    <Router>
      <div className="main-container">
        <ProfileProvider>
          <Switch>
            <ProtectedRoute path="/" exact component={ChatRoom} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </ProfileProvider>
      </div>
    </Router>
  );
};

export default App;
