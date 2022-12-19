import React, { useState } from 'react';
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

export default function Home(props) {
    const [loading, SetLoading] = useState(false);
    const [tab, SetTab] = useState("1");

    const handleChange = (e, value) => SetTab(value);

    return (
        loading ? (<SkeltonLoading />)
        :
        <React.Fragment>
            <>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Container>
                            <Typography> Viper Dashboard</Typography>
                        </Container>
                    </Grid>
                </Grid>
            </>
        </React.Fragment>
    )
}