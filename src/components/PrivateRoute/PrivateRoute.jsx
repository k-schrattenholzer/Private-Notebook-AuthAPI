import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Auth from '../../views/Auth/Auth.jsx';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  // TODO: Use the user in context to determine whether to redirect to /login
  const { user } = useUser();
  console.log(user);

  return ( 
    <Route 
      {...rest}
      render={({ location }) => 
        user.aud ==='authenticated' ? 
        children : 
        <Redirect 
          to={{
            pathname: '/login', 
            state: { from: location }
          }}
        />
      }
      />);
}
