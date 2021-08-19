import React, { FC, useContext } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { ProfileContext, ProfileProvider } from "./context/profile-provider";
import { ChatSocketProvider } from "./context/socket-provider";
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
  return (
    <Router>
      <div className="main-container">
        <ChatSocketProvider>
          <ProfileProvider>
            <Switch>
              <ProtectedRoute path="/" exact component={ChatRoom} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </ProfileProvider>
        </ChatSocketProvider>
      </div>
    </Router>
  );
};

export default App;
