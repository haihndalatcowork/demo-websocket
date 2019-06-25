import React, {Component, Fragment} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import styles from './styles/RegisterPage.module.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {register} from "./actions";

class RegisterPage extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: ""
    };
    onClickSubmit = (e) => {
        e.preventDefault();
        const {username, password, confirmPassword} = this.state;
        this.props.register({
            username, password, confirmPassword
        })
    };
    onChangeHandle = (state) => {
        this.setState(state);
    };

    componentWillReceiveProps(nextProps,nextContext){
        console.log(nextProps)
    }

    render() {
        const {username, password, confirmPassword} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.formTitle}>
                    <h1>Register</h1>
                </div>
                <div className={styles.formContainer}>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input value={username}
                                   onChange={(e) => this.onChangeHandle({username: e.target.value})}
                                   type="text" name="username"
                                   id="username"
                                   placeholder="Enter username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                value={password}
                                onChange={(e) => this.onChangeHandle({password: e.target.value})}
                                type="password" name="password"
                                id="password"
                                placeholder="Enter password"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm password</Label>
                            <Input value={confirmPassword}
                                   onChange={(e) => this.onChangeHandle({confirmPassword: e.target.value})}
                                   type="password" name="confirmPassword"
                                   id="confirmPassword" placeholder="Enter password again"/>
                        </FormGroup>
                        <Button onClick={(e) => this.onClickSubmit(e)}>Register</Button>
                        <span>You have an account? <Link to={"/login"}>Login now</Link></span>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.register
});
const mapDispatchToProps = dispatch => ({
    register: (user) => dispatch(register(user))

});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)