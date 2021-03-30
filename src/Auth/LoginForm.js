// rafce imports React, exports and creates function with ES7 React/Redux/GraphQL/React-Native snippets extention
import { TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React from 'react';
import './LoginForm.css';

const styles = theme => ({
    input: {
      height: 40
    },
    button: {
      height: 10
    }
  });


const LoginForm = withStyles(styles) (props => {
    const { classes } = props;
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
   
     const handleChange = (e, type) =>{
           e.preventDefault();
           if(type === 'email') {
             setEmail(e.target.value)
           }
           if(type==='password') {
             setPassword(e.target.value)
           }
     }

     const buttonClick = () => {
       console.log('E-Mail: ', email , ' Password: ', password)
     }

    return (
        <div className="loginForm"> 
             <TextField 
             className="UNForm" 
             label="Email" 
             variant="filled" 
             size="small" 
             InputProps={{className: classes.input }}
             InputLabelProps={{shrink: true}}
             value={email}
             onChange={e => handleChange(e, 'email')}
             />
             {/* hide password */}
             <TextField 
             className="PWForm" 
             label="Password" 
             type='password'
             variant="filled" 
             size="small" 
             height="50%" 
             InputProps={{className: classes.input }} 
             InputLabelProps={{shrink: true}}
             value={password}
             onChange={e => handleChange(e, 'password')}
             />
              <Button className="loginButton" variant="contained"size="small" style={{width:'90%'}} onClick={buttonClick}>
                 Log in
              </Button>

             <div className="loginAnchors" >
              <span className="forgotPassword">Forgot password?</span>
              <span className="signUpAnchor"  onClick={console.log('testing sign up')}>
                Sign up
              </span>
              
            </div>
        </div>
    )
});

export default LoginForm
