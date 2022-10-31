import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/selectorsAuth';
import { WelcomeUser } from 'components/WelcomeUser/WelcomeUser';

import {Link, Nav} from './Navigation.styled'

export const Navigation = () => {
    const { isAuth } = useSelector(getAuth);
  
    return (
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        {isAuth && <Link to="/phonebook">Phone book</Link>}
        {isAuth ? (
          <WelcomeUser />
        ) : (
          <div style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
            <Link to="/signIn">Sign In</Link>
            <Link to="/signUp">Sign Up</Link>
          </div>
        )}
      </Nav>
    );
  };
  