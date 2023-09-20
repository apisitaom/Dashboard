import React from 'react';
import MPExternalLayout from './Layout/MPExternalLayout';
import { Route } from 'react-router-dom';

export default function MPExternalRoute({ component: Component, currentUser, permissionRequired, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => { return (<MPExternalLayout {...props}><Component {...props} /></MPExternalLayout>) }}
        />
    )
}