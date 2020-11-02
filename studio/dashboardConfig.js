export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fa03a9d8642f5008c45dd28',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7du6hihv',
                  apiId: 'a8ebcb54-75a9-4aeb-8810-d56c0fc5552e'
                },
                {
                  buildHookId: '5fa03a9e0a252d00bf9250c2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-jdui4r2g',
                  apiId: 'a03d78dc-65db-425b-af2c-3236324b0324'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zanjani1/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-jdui4r2g.netlify.app', category: 'apps'}
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
