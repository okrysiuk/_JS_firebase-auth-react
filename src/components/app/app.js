import React from "react";
import Signup from "../signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/auth-context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard";
import Login from "../login";
import PrivateRoute from "../private-route";
import ForgotPassword from "../forgot-password";
import UpdateProfile from "../update-profile";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
