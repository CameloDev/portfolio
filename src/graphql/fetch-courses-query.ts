import { gql } from "@apollo/client";

export const FETCH_COURSES_QUERY = gql`
  query courses {
    course(orderBy: publishedAt_DESC) {
      id
      institution
      period
      title
      description
    }
  }
`;
