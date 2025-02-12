import { useDispatch, useSelector } from "react-redux";
import './useDetails.css';
import { logout } from "../../Store/ReduxStore";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

export default function UserDeatils() {
  const userName = useSelector((state) => state.login.user);
  const Password = useSelector((state) => state.login.password);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onclickHandler = () => {
    dispatch(logout(userName)); // logout action
    navigate('/data'); // navigate to data page
  }

  return (
    // Properly wrapped JSX
    userName ? (
      <div>
        <h1>Welcome {userName}</h1>
        <p>Your Username is {userName}</p>
        <p>Your Password is {Password}</p>
        <button onClick={onclickHandler}>Logout</button>
      </div>
    ) : (
      <Login /> // Show this if userName is not present
    )
  );
}
