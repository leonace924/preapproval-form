import { gql } from '@apollo/client'

export const PRE_APPROVAL = gql`
  mutation newPreApproval($input: [AddPreApprovalInput!]!) {
    addPreApproval(input: $input) {
      numUids
    }
  }
`
