import React from 'react';
import ReactDOM from 'react-dom';
import RoutesDefinition from './routes';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <RoutesDefinition />
    </React.StrictMode>,
    document.getElementById('root')
);
