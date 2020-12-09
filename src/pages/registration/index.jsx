import React from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import style from './registration.module.css';
import {maxLength,minLength,validateEmail,validatePassword,isAllValid} from '../../helpers/validators';

const maxLength15=maxLength(15);
const minLength5=minLength(5);



class Registration extends React.Component {
    state={
        name:{
            isValid:false,
            isTouched:false,
            error:null,
            value:''
        },
        email:{
            isValid:false,
            isTouched:false,
            error:null,
            value:''
        },
        password:{
            isValid:false,
            isTouched:false,
            error:null,
            value:''
        },
        confirm:{
            isValid:false,
            isTouched:false,
            error:null,
            value:''
        }
    }
    render() {
        const {name,email,password,confirm}=this.state;
        return (
            <div className={style.registration}>
                <h1>Registration Page</h1>
                <Form>
                    <FormGroup>
                    <div className={!name.isValid && name.isTouched ? style.errorText : null}>
                            <span >{name.error ? name.error : null}</span>
                        </div>
                        <Input type="text" name="name" placeholder="Name" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                    <div className={!email.isValid && email.isTouched?style.errorText:null}>
                    <span>{email.error?email.error:null}</span>
                        </div>
                        <Input type="email" name="email" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                    <div className={!password.isValid && password.isTouched?style.errorText:null}>
                    <span>{password.error?password.error:null}</span>
                        </div>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                    <div className={!confirm.isValid && confirm.isTouched?style.errorText:null}>
                    <span>{confirm.error?confirm.error:null}</span>
                        </div>
                        <Input type="password" name="confirm" placeholder="Confirm Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button onClick={this.handleOnClick}>Registration</Button>
                </Form>
            </div>
        )
    }
    handleOnClick=(event)=>{
        if (isAllValid(this.state)) {
            let users = JSON.parse(localStorage.getItem('users'));
            const obj = {
                id:Date.now(),
                name: this.state.name.value,
                email: this.state.email.value,
                password: this.state.password.value
            }
            if (users) {
                users.push(obj);
                localStorage.setItem('users', JSON.stringify(users))
            } else {
                users = [];
                users.push(obj)
                localStorage.setItem('users' , JSON.stringify(users))
            }

        } else {
            console.log('Errror');
        }

    }
    handleOnChange=(event)=>{
        event.persist();
      const  {name,value}=event.target;
      let isValid=false;
      let error='';

      //validation
      switch(name){
          case 'name':{
              if(maxLength15(value) && minLength5(value)){
                  isValid=true; 
              }
              else {
                   isValid=false;
                    error='your entered name is wrong';
                }
             
             
            break;
          }
          case 'email':{
              if(validateEmail(value)){
                  isValid=true;
              }else {
                  isValid=false;
                  error='your entered email is wrong';
              }
              break;
          }
          case 'password':{
              const isFalsePassword=validatePassword(value);
              if(!(isFalsePassword)){
                  isValid=true;
              } else {
                  isValid=false;
                  error=isFalsePassword[0];
              }
              break;
          }
          case 'confirm':{
            if (this.state.password.value === value) {
                isValid = true;
            } else {
                isValid = false;
                error = 'Wrong password repeat';
            }
                break;
          }
          default :
          
      }
      this.setState(prevState=>({
            ...prevState,
        [name]:{
            value:value,
            isValid:isValid,
            isTouched:false,
            error:error
        }
      }))
    }

}


export default Registration;