import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import style from '../registration/registration.module.css';
import { validateEmail, validatePassword, hasSuchUser } from '../../helpers/validators';

class Login extends React.Component {
    state={
        email:{
            value:'',
            isValid:false,
            isTouched:false,
            error:null
        },
        password:{
             value:'',
             isValid:false,
             isTouched:false,
             error:null
        }
        }
    render (){
        const {email,password}=this.state;
        return (
        <div >
            <h1>Login</h1>
            <Form className="registerForm">
                    <span>{this.state.globalError?this.state.globalError:null}</span> 
                <FormGroup>
                    <div className={!email.isValid && email.isTouched ? style.errorText : null}>
                        <span>{email.error ? email.error : null}</span>
                    </div>
                    <Input type="email" name="email" placeholder="Email" onChange={this.handleOnChange} />
                </FormGroup>
                <FormGroup>
                    <div className={!password.isValid && password.isTouched ? style.errorText : null}>
                        <span>{password.error ? password.error : null}</span>
                    </div>
                    <Input type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
                </FormGroup>
                <Button onClick={this.handleOnClick}>Login</Button>
            </Form>
        </div>
    )  
    }
    handleOnChange=(event)=>{
        event.persist();
        const {name, value}=event.target;
        let isValid=false;
        let error='';

        switch (name) {
            case 'email':{
                if(validateEmail(value)){
                    isValid=true;
                }
                else {
                    isValid=false;
                    error='Your entered email is wrong';
                }
                break;
            }
            case 'password':{
                if(!(validatePassword(value))){
                    isValid=true;
                }
                else {
                    isValid=false;
                    error='Your entered password is wrong';
                }
                break;
            }
            default:
        }
        this.setState(prevState=>({
            ...prevState,
            [name]:{
                value:value,
                isValid:isValid,
                isTouched:true,
                error:error
            }
        }))
    
    }
    handleOnClick=(event)=>{  
        let globalError = null;
        const {history}  = this.props;
        const user = hasSuchUser(this.state.email.value)
        if (user) {

            if (user.password === this.state.password.value) {
                localStorage.setItem('activeUser' , JSON.stringify(user));
                this.props.setIsAuth(true);
                history.push('/');
            } else {
                this.props.setIsAuth(false);
                globalError = 'Password is wrong';
            }
        } else {
            this.props.setIsAuth(false);
            globalError = 'Email is wrong';
        }
        this.setState(prevState => ({
            ...prevState,
            globalError
        }))
}
}

export default Login;