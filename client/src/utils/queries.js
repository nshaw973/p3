import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      recruiter
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;


export const QUERY_CHECKOUT = gql`
  query getCheckout($donation: ID!) {
    checkout(donation: $donation) {
      session
    }
  }
`;