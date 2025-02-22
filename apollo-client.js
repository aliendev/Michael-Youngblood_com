
process.env.DB_HOST




const SPACE = process.env.NEXT_SERVER_CONTENTFUL_SPACE_ID;
const ENVIRONMENT = process.env.NEXT_SERVER_CONTENTFUL_ENV;
const TOKEN = process.env.NEXT_SERVER_CONTENTFUL_CDA_ACCESS_TOKEN;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
    fetch,
    uri: CONTENTFUL_URL,
    headers: {
        authorization: `Bearer ${TOKEN}`,
        'Content-Language': 'en-us',
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore(initialState || {}),
});