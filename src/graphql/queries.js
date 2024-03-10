import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          forksCount
          fullName
          id
          language
          ratingAverage
          reviewCount
          stargazersCount
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      description
      forksCount
      fullName
      id
      language
      ratingAverage
      reviewCount
      stargazersCount
      ownerAvatarUrl
      url
    }
  }
`;
