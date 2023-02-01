import { Flex, Text } from "@chakra-ui/react";

import ProposalsRegistrationStartedView from "./ProposalsRegistrationStartedView";

import useEventsProvider from "@/hooks/useEventsProvider";

import { WORKFLOW_STATUS_VALUE } from "@/utils/constants";

export default function VotesTailledView() {
  const { workflowStatus, winningProposalId } = useEventsProvider()
  
  return WORKFLOW_STATUS_VALUE[workflowStatus.previousStatus] == "VotesTallied" 
    ? <Flex grow="1" alignItems="center"> 
        <Text fontWeight='bold' fontSize='3xl'> The winning proposal is {winningProposalId} </Text>         
      </Flex>
    :  <ProposalsRegistrationStartedView />      
}