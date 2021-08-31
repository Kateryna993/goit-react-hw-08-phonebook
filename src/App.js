import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container/Container';
import ContactsView from './views/ContactsView';
import { HomeView } from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        {/* <Route exact path="/" component={HomeView} /> */}
        {/* <Route path="/register" component={RegisterView} /> */}
        {/* <Route path="/login" component={LoginView} /> */}
        {/* <Route path="/contacts" component={ContactsView} /> */}
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Container>
  );
}
