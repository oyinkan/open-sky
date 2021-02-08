import React from "react";
import "./Dashboard.css";
import {airportData} from "./../../airports";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#444',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '46%',
        left: '48%',
        transform: 'translate(-46%, -42%)'
    },
    country: {
        marginTop: '1.5rem',
        fontSize: '2.5rem'
    },
    modalbutton: {
        fontSize: '1.4rem',
        marginTop: '2.5rem',
        padding: '1.2rem 3rem',
        backgroundColor: '#557d48'
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    // useEffect(() => {
    //     fetch("https://opensky-network.org/api/states/all")
    //     .then(response => response.json())
    //     .then(data => {
    //         setFlights(data);
    //     })
       
    // }, [])

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const allAirports = airportData.map(airport => (
        <Card 
            variant="outlined" 
            className="airport-card" 
            key={airport.icao} 
        >
            <h3>{airport.airportName}</h3>
            <h1 className={classes.country}>{`${airport.city}, ${airport.country}`}</h1>
            <Button 
                variant="contained" 
                onClick={handleOpen} 
                color="primary"
                className={classes.modalbutton}
            >
                Open Modal
            </Button>
        </Card>
    ));

    const body = (
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
    );

    return(
        <div className="dashboard-wrapper">
            <h2 className="text-center title">Dashboard</h2>
            <div className="grid">
                {allAirports}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}