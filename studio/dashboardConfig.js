export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bbb09a25a1b0e5a07c87fe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gme9g8ke',
                  apiId: 'c621b0b4-4f71-466a-b2f4-17e766632119'
                },
                {
                  buildHookId: '60bbb09bf10711ddff10d166',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yx2nk6rv',
                  apiId: '19db1dd4-805e-45a7-9ddb-63307e2b53a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kiril-daskalov/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yx2nk6rv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
