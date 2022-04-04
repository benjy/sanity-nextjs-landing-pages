export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624b815e3d3343544ffc865d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rpc4aio7',
                  apiId: 'b6fe4155-7e29-4d5b-9455-28172cf35a75'
                },
                {
                  buildHookId: '624b815f2effbc502bdb187c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ukq38gvp',
                  apiId: '5c311eeb-406d-4219-9bed-b3d92d7577c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benjy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ukq38gvp.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
