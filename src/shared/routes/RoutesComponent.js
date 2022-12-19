import React from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import MPBlankRoute from '../routes/MPBlank/MPBlankRoute';
import MPInternalRoute from '../routes/MPInternal/MPInternalRoute';
import MPExternalRoute from '../routes/MPExternal/MPExternalRoute';
import Customloadable from './LoadableComponent/Customloadable';
import routes from '../routes/routes';

function RoutesComponent() {
    return (
        <HashRouter>
            <Switch>
                {routes.blankRoute.map((route) => (
                    <MPBlankRoute
                        key={route.path}
                        permissionRequired={route.permissionRequired}
                        path={route.path}
                        component={Customloadable({ loader: route.loader })}
                        exact={!!route.exact}
                    />
                ))}
                {routes.internalRoute.map((route) => (
                    <MPInternalRoute
                        key={route.path}
                        permissionRequired={route.permissionRequired}
                        path={route.path}
                        component={Customloadable({ loader: route.loader })}
                        exact={!!route.exact}
                    />
                ))}
                {routes.externalRoute.map((route) => (
                    <MPExternalRoute
                        key={route.path}
                        permissionRequired={route.permissionRequired}
                        path={route.path}
                        component={Customloadable({ loader: route.loader })}
                        exact={!!route.exact}
                    />
                ))}
            </Switch>
        </HashRouter>
    )
}

export default RoutesComponent;