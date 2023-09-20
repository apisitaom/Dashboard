import React from 'react';
import ProgressBar from './ProgressBar';

export default class LoadingComponent extends React.Component {
    constructor(props) { super(props); this.state = { component: null }; }

    componentWillMount() { ProgressBar.start(); }

    componentWillUnmount() { ProgressBar.done(); }

    render() { return <div /> }
}