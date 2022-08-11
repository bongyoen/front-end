// material-ui
import {Typography} from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import education from "../../../../menu-items/education";
import dashboard from "../../../../menu-items/dashboard";
import pages from "../../../../menu-items/pages";
import utilities from "../../../../menu-items/utilities";
import other from "../../../../menu-items/other";

// ==============================|| SIDEBAR MENU LIST ||============================== //
const menuItem = {
    items: [dashboard, education, pages, utilities, other]
};
const MenuList = () => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return <>{navItems}</>;
};

export default MenuList;
