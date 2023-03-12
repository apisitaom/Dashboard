import React, { useState, useEffect } from 'react';
import SkeltonLoading from '../../components/Form/MaterialUI/SkeltonLoading';
import { 
    Grid, 
    Button, 
    Card, 
    CardContent, 
    Typography,
    Tabs,
    Tab,
    Container
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';

export default function Home(props) {
    const [loading, SetLoading] = useState(false);
    return (
        loading ? (<SkeltonLoading />)
        :
        <React.Fragment>
            <>
            <Grid container spacing={0}>
            {/* Header */}
                <Grid item xs={11}>
                    <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                        <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> News </Typography>
                        <Typography style={{ paddingLeft: "2.5%" }} variant="subtitle1" display="block" gutterBottom> Cryptocurrency's</Typography>
                        <Typography style={{ paddingLeft: "2.5%" }} variant="subtitle1" display="block" gutterBottom> Effectation </Typography>
                    </Container>
                </Grid>
                
                <Grid style={{ paddingTop: "1%" }} item xs={1}> 
                    <Button style={{ borderRadius: 20 }} variant="outlined">Sign In</Button>
                </Grid>
            </Grid>
            {/* Content */}
            <Grid item xs={12}>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "3%" }}>
                    <Typography variant="h3" display="block"> Take Control Profolio </Typography>
                </Container>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                    <Typography variant="h3" display="block"> Statistic Viper Dashboard page </Typography>
                </Container>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "3%" }}>
                    <Button color='primary' style={{ borderRadius: 20 }} variant="contained">Your Analysis / Analysis</Button>
                </Container>
            </Grid>
            {/* Chart */}
            <Grid style={{ paddingTop: "2.5%" }} item xs={12}>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                            <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> Chart </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                            <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> Chart Statistic </Typography>
                        </Container>
                        </Grid>
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                            <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> Card </Typography>
                        </Container>
                    </Grid>
                </Container>
            </Grid>
            </>
        </React.Fragment>
    )
}