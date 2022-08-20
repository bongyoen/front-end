// material-ui
import {Typography} from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import career from "../../../../menu-items/career";
import techStack from "../../../../menu-items/techStack";
import github from "../../../../menu-items/github";
import project from "../../../../menu-items/project";
import introduce from "../../../../menu-items/Introduce";

// ==============================|| SIDEBAR MENU LIST ||============================== //
const menuItem = {
    items: [
        introduce,
        techStack,
        project,
        career,
        github,
        // dashboard,
        // pages,
        // utilities,
        // admin
        // other
    ]
};
const MenuList = () => {
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item}/>;
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
