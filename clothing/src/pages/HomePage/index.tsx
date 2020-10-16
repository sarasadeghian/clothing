import React, {memo} from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import Directory from '../../components/Directory';

function HomePage() {
    const theme = useTheme();
    const isMoblie = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box display="flex" flexDirection="column" alignItems="center" paddingY={isMoblie ? 1 : 3} paddingX={isMoblie? 3: 10}>
            <Directory/>       
        </Box>
    );
};

export default memo(HomePage);