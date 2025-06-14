import gql from "graphql-tag";

export const ONE_ARTICLE_QUERY = gql`
  query blogArticle($slug: String!, $preview: Boolean!) {
    blogArticleCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      total
      items {
        sys {
          id
        }
        slug
        articleTitle
        excerpt
        articlePostDate
        coverImage {
          url
          description
        }
        content {
          json
        }
        author {
          name
          picture {
            url
            description
          }
        }
      }
    }
  }
`;

export const ALL_ARTICLES_QUERY = gql`
  query blogArticleCollection($preview: Boolean!) {
    blogArticleCollection(
      order: articlePostDate_DESC
      preview: $preview
      limit: 30
    ) {
      total
      items {
        sys {
          id
        }
        slug
        articleTitle
        articlePostDate
        excerpt
        thumbnail {
          url
          description
        }
        author {
          name
          picture {
            url
            description
          }
        }
      }
    }
  }
`;

export const TEST_ARTICLES_QUERY = gql`
  query blogArticleCollection {
    blogArticleCollection(
      order: articlePostDate_DESC
      preview: false
      limit: 30
    ) {
      total
      items {
        sys {
          id
        }
        slug
        articleTitle
        articlePostDate
        excerpt
        thumbnail {
          url
          description
        }
        author {
          name
          picture {
            url
            description
          }
        }
      }
    }
  }
`;

export const RESUME_QUERY = gql`
  query resumeQuery($preview: Boolean!) {
		resumeEntryCollection( preview:$preview ) {
      total
      items {
        sys {
          id
        }
        type
        company
        positionTitle
        positionStartedOn
        positionEndedOn
        positionSummary { json }
      }
    }
    resumeExtraEntryCollection( preview: $preview ) {
      total
      items {
        sys {
          id
        }
        type
        title
        description { json }
      }
    }
  }
`;