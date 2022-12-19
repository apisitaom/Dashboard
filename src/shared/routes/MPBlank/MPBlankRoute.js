import React from 'react';
import { Route } from 'react-router-dom';

export default function MPBlankRoute({ component: Component, currentUser, permissionRequired, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => { return (<React.Fragment {...props}><Component {...props} /> </React.Fragment>) }}
        />
    )
}