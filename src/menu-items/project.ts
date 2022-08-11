import {IconBulb} from "@tabler/icons";

const project = {
    id: 'project',
    title: 'Project',
    type: 'group',
    children: [
        {
            id: 'project-project',
            title: 'Project',
            type: 'collapse',
            icon: IconBulb,
            children: [
                {
                    id: 'anywheremouse',
                    title: 'anywhere mouse',
                    type: 'item',
                    url: '/project/anywheremouse',
                    breadcrumbs: false
                },
                {
                    id: 'goodluckdog',
                    title: '개팔자 상팔자',
                    type: 'item',
                    url: '/project/goodluckdog',
                    breadcrumbs: false
                },
                {
                    id: 'portoliosite',
                    title: 'PortfolioSite',
                    type: 'item',
                    url: '/project/portoliosite',
                    breadcrumbs: false
                },
            ]
        },
    ]
};

export default project;