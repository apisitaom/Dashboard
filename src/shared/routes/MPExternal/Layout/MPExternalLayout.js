import React from 'react';

export default function MPExternalLayout(props) {
    return (
        <div> {/* ADD | CSS | CLASS */} {/* HEADER */}
            <h1 style={{ backgroundColor: 'pink' }}>Header MPExterial</h1>
            <div>{props.children}</div> {/* BODY | COMPONENTS */}
            <React.Fragment>
                {/* ADD ELEMENTS */}
                {/* Scroll to Top || Scroll to Buttom */}
            </React.Fragment>
        </div>
    )
}