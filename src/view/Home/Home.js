import React, { useState, useEffect } from 'react';
import SkeltonLoading from '../../components/Form/MaterialUI/SkeltonLoading';
import { Link, Redirect } from 'react-router-dom';
import { 
    Grid, 
    Button, 
    Typography,
    Tabs,
    Tab,
    Container,
    IconButton,
    Card,
    CardContent,
    CardActions,
} from '@material-ui/core';
import { i18n } from '../../i18n/index';

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
                    <Typography variant="h3" display="block"> Take Control Your Port </Typography>
                </Container>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                    <Typography variant="h3" display="block"> Statistic Viper Dashboard Page </Typography>
                </Container>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "3%" }}>
                    <Button color='primary' style={{ borderRadius: 20 }} variant="contained">Your Analysis / Analysis</Button>
                </Container>
            </Grid>
            {/* Chart */}
            <Grid style={{ paddingTop: "2.5%" }} item xs={12}>
                <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                    {/* Chat 1 */}
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                            <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> Chart </Typography>
                    </Container>
                    </Grid>                    
                    {/* Chat 2 */}
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                            <Typography style={{ paddingLeft: "7%" }} variant="subtitle1" display="block" gutterBottom> Chart Statistic </Typography>
                        </Container>
                    </Grid>
                    {/* Chat 3 */}
                    <Grid item xs={4}>
                        <Container style={{ justifyContent: "center", paddingTop: "1%" }}>
                        <Card style={{ width: "80%", backgroundColor: "#edf3f2c7" }}>
                            <CardContent>
                                <Typography variant="h6" display="block" gutterBottom>
                                  {5235} $
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ width: "80%", marginTop: "2%", backgroundColor: "#edf3f2c7"  }}>
                            <CardContent>
                                <Typography variant="h6" display="block" gutterBottom>
                                  5.235
                                </Typography>
                            </CardContent>
                        </Card>
                        </Container>
                    </Grid>
                </Container>
                {/* Detail text */}
                <Grid item xs={12}>
                    <Container style={{ justifyContent: "center", display: "flex", paddingTop: "3%" }}>
                        <Typography variant="body2" display="block" gutterBottom>
                          20+ COMPANY HAS SHOWED INTEREST TO OUR NEW VIPER DASHBOARD TOOL
                        </Typography>
                    </Container>
                </Grid>
                {/* Icons Compay to use dashboard */}
                <Grid item xs={12}>
                    <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                        <Card style={{ width: "17%", backgroundColor: "#ABB2B9" }}>
                            <CardContent>
                                <Typography style={{ paddingLeft: "2.5%", textAlign: 'center', color: "#17202A" }} variant="subtitle1" display="block" gutterBottom> 
                                    Slack
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ marginLeft: "5%", width: "17%", backgroundColor: "#ABB2B9" }}>
                            <CardContent>
                                <Typography style={{ paddingLeft: "2.5%", textAlign: 'center', color: "#17202A" }} variant="subtitle1" display="block" gutterBottom> 
                                    Quicken Leans
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ marginLeft: "5%", width: "17%", backgroundColor: "#ABB2B9" }}>
                            <CardContent>
                                <Typography style={{ paddingLeft: "2.5%", textAlign: 'center', color: "#17202A" }} variant="subtitle1" display="block" gutterBottom> 
                                    Disney
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ marginLeft: "5%", width: "17%", backgroundColor: "#ABB2B9" }}>
                            <CardContent>
                                <Typography style={{ paddingLeft: "2.5%", textAlign: 'center', color: "#17202A" }} variant="subtitle1" display="block" gutterBottom> 
                                    :hager
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card style={{ marginLeft: "5%", width: "17%", backgroundColor: "#ABB2B9" }}>
                            <CardContent style={{ textAlign: 'center', color: "#17202A" }}>
                                <Typography style={{ paddingLeft: "2.5%" }} variant="subtitle1" display="block" gutterBottom> 
                                    NETFLIX
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                {/* Detail text next feature */}
                <Grid item xs={12}>
                    <Container style={{ justifyContent: "center", display: "flex", paddingTop: "6%" }}>
                        <Typography variant="h4" display="block" gutterBottom>
                            FEATURE TO GET STARTED WITH
                        </Typography>
                    </Container>
                    <Container style={{ justifyContent: "center", display: "flex"}}>
                        <Typography variant="caption" display="block" gutterBottom>
                           Best your management for free try, keep grow up your port with viper dashboard
                        </Typography>
                    </Container>
                </Grid>
                {/* Icon like award */}
                <Grid item xs={12}>
                    <Container style={{ justifyContent: "center", display: "flex", paddingTop: "1%" }}>
                        <Grid xs={4}>
                            <p>Icon + text 1</p>
                        </Grid>
                        <Grid xs={4}>
                            <p>Icon + text 2</p>
                        </Grid>
                        <Grid xs={4}>
                            <p>Icon + text 3</p>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
            </>
        </React.Fragment>
    )
}