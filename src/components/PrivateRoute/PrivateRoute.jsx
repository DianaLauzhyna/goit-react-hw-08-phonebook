import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token: isAuth } = useSelector(getAuth);
  return isAuth ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
