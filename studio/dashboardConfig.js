export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '605fa007ca324b93ebee2689',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-jznsj4fj',
                  apiId: '699f2475-ad00-4a78-b621-3efea898e00f'
                },
                {
                  buildHookId: '605fa0081e1e8f75bf056abd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-nkng85ps',
                  apiId: 'e42c0617-3175-486c-bc26-58670af2de2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aaronsturm/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-nkng85ps.netlify.app', category: 'apps'}
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
