import gql from 'graphql-tag';

export const QUERY = gql`
  query sitemaps($urlLimits: Int, $language: LanguageCode)
  @inContext(language: $language) {
    products(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      edges {
        node {
          updatedAt
          handle
          onlineStoreUrl
          title
          featuredImage {
            url
            altText
          }
        }
      }
    }
    collections(
      first: $urlLimits
      query: "published_status:'online_store:visible'"
    ) {
      edges {
        node {
          updatedAt
          handle
          onlineStoreUrl
        }
      }
    }
    pages(first: $urlLimits, query: "published_status:'published'") {
      edges {
        node {
          updatedAt
          handle
          onlineStoreUrl
        }
      }
    }
  }
`;
