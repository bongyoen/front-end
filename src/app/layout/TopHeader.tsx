import React from "react";
import {AppBar, Tab, Tabs} from "@material-ui/core";


const TopHeader = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                    <Tab label="Home"/>
                    <Tab label="Send"/>
                    <Tab label="Profile"/>
                </Tabs>
            </AppBar>
        </>
    );
};

export default TopHeader;