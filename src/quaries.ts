// queries.ts
import { gql } from "@apollo/client";

export const GET_BASE_OSSC = gql`
  query {
    base_ossc {
      id
      name
      region {
        id
      }
      description
    }
  }
`;

export const GET_BASE_REGIONS = gql`
  query {
    base_regions {
      id
      name
    }
  }
`;

export const GET_BASE_SUB_CITY = gql`
  query {
    base_subcity {
      id
      name
    }
  }
`;

export const Get_SUB_CITY = gql`
  query BASE_SUBCITY($where: base_subcity_bool_exp) {
    base_subcity(where: $where) {
      id
      name
    }
  }
`;

export const GET_BASE_WEREDA = gql`
  query BASE_WOREDA($where: base_woreda_bool_exp) {
    base_woreda(where: $where) {
      id
      name
    }
  }
`;
