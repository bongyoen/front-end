import {lazy} from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

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

const Eduction: any = Loadable(lazy(() => import('../views/education/education')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <DashboardDefault/>
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
        }
    ]
};

export default MainRoutes;
