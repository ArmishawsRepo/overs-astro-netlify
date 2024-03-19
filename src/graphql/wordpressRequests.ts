import { wpquery } from '~/graphql/wordpressQuery';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const data = await wpquery({
    query: `
      query postQuery {
        posts {
          nodes {
            title
            date
            excerpt
            slug
            content(format: RENDERED)
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    `
  });