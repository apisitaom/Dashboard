import React from 'react';
import MPInternalLayout from './Layout/MPInternalLayout';
import { Route } from 'react-router-dom';

export default function MPInternalRoute({ component: Component, currentUser, permissionRequired, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => { return (<MPInternalLayout {...props}><Component {...props} /></MPInternalLayout>) }}
        />
    )
}