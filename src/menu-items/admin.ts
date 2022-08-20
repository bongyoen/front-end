export const admin = {
    id: 'admin',
    title: 'Admin',
    type: 'group',
    children: [
        {
            id: 'write',
            title: 'Write',
            type: 'item',
            url: '/admin/write',
            breadcrumbs: false
        }
    ]
}