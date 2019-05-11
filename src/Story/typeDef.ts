import {gql} from 'apollo-server';
export const typeDef = gql`
    type Story {
        uri: String
    }

    extend type Query{
        stories: [Story]
    }
`

