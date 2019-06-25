import React, {Component, Fragment} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import styles from './styles/LoginPage.module.css'
import {Link} from "react-router-dom";

class LoginPage extends Component {
    state = {
        username: "",
        password: ""
    };
    onClickSubmit = (e) => {
        e.preventDefault();
    };
    onChangeHandle = (state) => {
        this.setState(state);
    };

    render() {
        const {username,password} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.formTitle}>
                    <h1>Login</h1>
                </div>
                <div className={styles.formContainer}>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input value={username} onChange={(e) => this.onChangeHandle({username: e.target.value})} type="text"
                                   name="username" id="username" placeholder="Enter username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input value={password} onChange={(e) => this.onChangeHandle({password: e.target.value})} type="password" name="password" id="password" placeholder="Enter password"/>
                        </FormGroup>
                        <Button onClick={(e)=>this.onClickSubmit(e)}>Login</Button>
                        <Link to={"/register"}>Create an account free</Link>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginPage