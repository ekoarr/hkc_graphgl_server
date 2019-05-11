
export const typeDef = `
  type User {
    id: ID!,
    name: String,
    friends: [User]
    stories: [Story]
  }
`

