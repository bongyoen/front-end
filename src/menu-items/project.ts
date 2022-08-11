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
                    id: 'anywhere-mouse',
                    title: 'anywhere mouse',
                    type: 'item',
                    url: '/',
                    breadcrumbs: false
                },
                {
                    id: 'good-luck-dog',
                    title: '개팔자 상팔자',
                    type: 'item',
                    url: '/',
                    breadcrumbs: false
                },
                {
                    id: 'portfolio-site',
                    title: 'PortfolioSite',
                    type: 'item',
                    url: '/',
                    breadcrumbs: false
                },
            ]
        },
    ]
};

export default project;