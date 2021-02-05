import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 450,
        margin: 'auto',
        padding: '5rem 3rem'
    },
    form: {
        '& > *': {
          width: '100%',
          marginBottom: '2rem'
        },
    },
    submit: {
        background: '#00B242',
        fontSize: '16px',
        padding: '10px',
        marginBottom: 0
    },
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "demo" && password === "demo") {
            setError(false);
            localStorage.token = "gffcvybjytvtryuhuy";
            history.push("/dashboard");
        } else {
            setError(true);
        }
    }

    return(
        <div className="login-wrapper">
            <Card className={classes.root} variant="outlined">
                <h2 className="text-center">Login</h2>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined"
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        variant="outlined" 
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error && <p className="color-red">Wrong username/password. Try again!"</p>}
                    <Button variant="contained" color="primary" className={classes.submit} onClick={handleSubmit}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}