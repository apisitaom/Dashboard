import React, { useState, useEffect } from 'react';
import SkeltonLoading from '../../components/Form/MaterialUI/SkeltonLoading';
import { i18n } from "../../i18n";
import { Link, useHistory } from 'react-router-dom';
import InputFormItem from '../../components/Form/InputFormItem';
import FormWrapper from '../../components/Form/FormWrapper';
import { Formik } from 'formik';
import fields from '../../models/Login/LoginModel';
import FormSchema from '../../components/Form/FormSchema';
import {
    Grid,
    Button,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

export default function Login(props) {
    const [loading, SetLoading] = useState(false);

    let history = useHistory();

    const schema = new FormSchema(fields.id, [
        fields.userId,
        fields.password,
    ]);

    const initialValues = () => {
        const record = props.record || {};
        return schema.initialValues(record);
    };

    const handleSubmit = (values) => {
        const { id, ...data_ } = schema.cast(values);
        console.log('handleSubmit ', values);

        // * Redirect
        // history.push("/home")
    };

    return (
        loading ? (<SkeltonLoading />)
            :
            <React.Fragment>
                <div>
                    <FormWrapper>
                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={initialValues()}
                            // validationSchema={schema.schema}
                            render={(form) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={4}>
                                            <Grid item xs={12} sm={2} />
                                            <Grid style={{ marginTop: "18%" }} item xs={12} sm={4}>
                                                <InputFormItem
                                                    name={fields.userId.name}
                                                    label={fields.userId.label}
                                                    required={fields.userId.required}
                                                />
                                                <InputFormItem
                                                    name={fields.password.name}
                                                    label={fields.password.label}
                                                    required={fields.password.required}
                                                />
                                                <Button
                                                    onClick={() => form.handleSubmit(form.values)}
                                                    variant="contained"
                                                    color="primary">
                                                    Login
                                            </Button>
                                            </Grid>
                                            <Grid style={{ marginTop: "2.5%" }} item xs={12} sm={5}>
                                                <Card>
                                                    <CardContent>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>

                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>

                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>

                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            Content Typography
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={1} />
                                        </Grid>
                                    </form>
                                )
                            }}
                        />
                    </FormWrapper>
                </div>
            </React.Fragment>
    )
}