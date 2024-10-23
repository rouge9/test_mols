// queries.ts
import { gql } from "@apollo/client";

export const INSERT_BASE_OSSC = gql`
  mutation INSERT_BASE_OSSC(
    $name: string!
    $region_id: uuid!
    $subcity_id: uuid!
    $woreda_id: uuid!
    $description: string!
  ) {
    insert_base_ossc(
      objects: {
        name: $name
        region_id: $region_id
        subcity_id: $subcity_id
        woreda_id: $woreda_id
        description: $description
      }
    ) {
      affected_rows
    }
  }
`;
