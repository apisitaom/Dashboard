import React from 'react';
/* LAYOUT */
import MPInternalLayoutA from '../childen/MPInternalLayoutA';
export default function MPInternalLayout(props) {
    return (
        <div> {/* ADD | CSS | CLASS */} {/* HEADER */}
            <React.Fragment>
                {/* ADD ELEMENTS */}
                {/* Scroll to Top || Scroll to Buttom */}
                <MPInternalLayoutA />
                <div>{props.children}</div> {/* BODY | COMPONENTS */}
            </React.Fragment>
        </div>
    )
}