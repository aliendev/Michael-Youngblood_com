import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

export const USE_PREVIEW_CONTENT = process.env.NEXT_SERVER_CONTENTFUL_PREVIEW_CONTENT === 'true';

const apolloClient = new ApolloClient({
    link: ApolloLink.from(
        [
            new HttpLink(
                {
                    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENV}`,
                    credentials: 'same-origin',
                    headers: {
                        Authorization: `Bearer ${
                            USE_PREVIEW_CONTENT ?
                            process.env.NEXT_PUBLIC_CONTENTFUL_CPA_TOKEN :
                            process.env.NEXT_PUBLIC_CONTENTFUL_CDA_TOKEN
                        }`
                    }
                }
            )
        ]
    ),
    cache: new InMemoryCache()
});

export default apolloClient;
