import React from 'react';

import {useSelector} from 'react-redux';

import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline, StyledEngineProvider} from '@mui/material';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
// import NavigationScroll from 'layout/NavigationScroll';
import Modal from 'react-modal';


const App = () => {
    const customization = useSelector((state: any) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

Modal.setAppElement('#root')
export default App;