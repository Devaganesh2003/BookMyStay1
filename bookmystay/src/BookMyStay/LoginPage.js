import React,{useState} from 'react';
import './LoginPage.css';


function LoginPage()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ChangeEmail = (my) => {setEmail(my.target.value);};

  const ChangePassword = (my) => {setPassword(my.target.value);};

  const SubmitHadler = (my) => 
  {
    my.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };
    return(
        <div className='wrapper'>
            <div id="welcome">
                <br></br>
                <h1 id="welcome_text">Book My Stay</h1><br/>
            </div>
            <div>
                <h2 id="email_text">Username</h2>
                <input type="email" placeholder=" Username" id="text" value={email} onChange={ChangeEmail} required autoFocus/>
                <br/>

                <h2 id="password_text">Password</h2>
                <input type="password" placeholder=" Password" id="text" maxLength={8} value={password} onChange={ChangePassword} required autoFocus/>
                <br/><br/>
                <h3 id="forgot_pass" style={{marginLeft:"130px"}}><a href="" style={{textDecoration:"none", color:"aqua"}}></a></h3>

                <button className="login_button" onSubmit={SubmitHadler}>Login</button><br/><br/><br/>

               <h3 className='or'>OR</h3>

                <h3 id="sign_msg"style={{color:"aqua", marginLeft:"130px"}}></h3>
                <button className="login_button1" >Sign up</button>
            </div>
        </div>
    );
}
export default LoginPage;
