import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './cards.module.css';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return <div className="loader"></div>;
    }
    return (

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h4" className={cx(styles.textCenter, styles.textBlue)} gutterBottom> Infected </Typography>
                        <Typography variant="h5" className={styles.textCenter}>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography><br />
                        <Typography color="textSecondary" className={styles.textCenter}>Updated At : <br /> {new Date(lastUpdate).toLocaleDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography> <br />
                        <Typography variant="body2" className={styles.textCenter}> Number of active cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h4" className={cx(styles.textCenter, styles.textGreen)} gutterBottom> Recovered </Typography>
                        <Typography variant="h5" className={styles.textCenter}>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography><br />
                        <Typography color="textSecondary" className={styles.textCenter}>Updated At : <br /> {new Date(lastUpdate).toLocaleDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography><br />
                        <Typography variant="body2" className={styles.textCenter}> Number of recoveries cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" variant="h4" className={cx(styles.textCenter, styles.textRed)} gutterBottom> Deaths </Typography>
                        <Typography variant="h5" className={styles.textCenter}>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography><br />
                        <Typography color="textSecondary" className={styles.textCenter}>Updated At : <br /> {new Date(lastUpdate).toLocaleDateString()} {new Date(lastUpdate).toLocaleTimeString()}</Typography><br />
                        <Typography variant="body2" className={styles.textCenter}> Number of deaths cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div >

    );
}

export default Cards;