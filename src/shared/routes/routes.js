/* ----- Blank ----- */
const blankRoute = [
    {
        path: "/login",
        loader: () => import("../../view/Login/Login"),
        permissionRequired: null,
        exact: true
    },
];

/* ----- Internal ----- */
const internalRoute = [
    {
        path: "/",
        loader: () => import("../../view/Home/Home"),
        permissionRequired: null,
        exact: true
    }
];

/* ----- External ----- */
const externalRoute = [];

export default { blankRoute, internalRoute, externalRoute };