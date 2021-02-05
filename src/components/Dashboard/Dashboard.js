import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '23%',
        padding: '5rem 3rem',
        borderRadius: '1rem',
        marginBottom: '3rem'
    },
    country: {
        marginTop: '1.5rem',
        fontSize: '3rem'
    },
}));

export default function Dashboard() {
    const [flights, setFlights] = useState({});
    const classes = useStyles();

    useEffect(() => {
        fetch("https://opensky-network.org/api/states/all")
        .then(response => response.json())
        .then(data => {
            setFlights(data);
        })
       
    }, [])

    const allFlights = flights?.states?.map(flight => (
        <Card 
            variant="outlined" 
            className={classes.card} 
            key={flight[0]} 
            style={{width: '23%'}}
        >
            <h3>{flight[1]}</h3>
            <h1 className={classes.country}>{flight[2]}</h1>
        </Card>
    ))

    return(
        <div className="dashboard-wrapper">
            <h2 className="text-center title">Dashboard</h2>
            <div className="grid">
                {allFlights}
            </div>
        </div>
    );
}