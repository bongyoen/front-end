import {lazy} from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import Introduce from "../views/introduce/Introduce";
import TechStack from "../views/techStack/TechStack";
import AnywhereMouseComponent from "../views/project/AnywhereMouse.component";
import PortolioSite from "../views/project/PortolioSite";
import GoodLuckDog from "../views/project/GoodLuckDog";

// dashboard routing
const DashboardDefault: any = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography: any = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor: any = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow: any = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons: any = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons: any = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage: any = Loadable(lazy(() => import('../views/sample-page')));

const Eduction: any = Loadable(lazy(() => import('../views/education/Education')));
const Write: any = Loadable(lazy(() => import('../views/admin/Write')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {

    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Introduce/>
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault/>
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography/>
                },
                {
                    path: 'util-color',
                    element: <UtilsColor/>
                },
                {
                    path: 'util-shadow',
                    element: <UtilsShadow/>
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons/>
                },
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons/>
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage/>
        },
        {
            path: 'education',
            element: <Eduction/>
        },
        {
            path: 'introduce',
            element: <Introduce/>
        },
        {
            path: 'techstack',
            element: <TechStack/>
        },
        {
            path: 'project',
            children: [
                {
                    path: "anywheremouse",
                    element: <AnywhereMouseComponent/>
                },
                {
                    path: "goodluckdog",
                    element: <GoodLuckDog/>
                },
                {
                    path: "portoliosite",
                    element: <PortolioSite/>
                },
            ]
        },
        {
            path: 'admin',
            children: [
                {
                    path: "write",
                    element: <Write/>
                }
            ]
        }
    ]
};

export default MainRoutes;
