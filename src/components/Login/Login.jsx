import { useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePassword, updateUser } from "../../Store/ReduxStore";
import './Login.css';
export default function Login() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { login, passwordlog ,setIsloging} = useAuth();
  const dispatch =useDispatch();

  // onClick handler for login
  const onClickHandler = (e) => {
    e.preventDefault();  
    if(value!==""&& password!="")
    {
        login(value);        
    passwordlog(password); 
    setValue('');         
     
       setIsloging(true); 
       dispatch(updatePassword(password));
       dispatch(updateUser(value));
      // localStorage.setItem('token', value);
      // localStorage.setItem('isloging', true);
      // setIsloging(localStorage.setItem('isloggin', true));
       navigate('/data');

    }
    else
    {
        alert("Please enter both username and password");
    }
  }

  return (
    <div >
      <h2>Login</h2>
      {/* Form for login */}
      <form>
        <label>
          Name:
          <input 
            type="text" 
            name="Name" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            value={password}  
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <br />
        {/* Submit button with onClick handler */}
        <input 
          type="button" 
          value="Submit"  
          onClick={onClickHandler} 
        />
      </form>
    </div>
  );
}
