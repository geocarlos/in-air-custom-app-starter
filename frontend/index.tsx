import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => <div className="container">Hello from inAir Studio!</div>;

initializeBlock(() => <App/>);