import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectorsAuth';


const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token: isAuth } = useSelector(getAuth);
  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
