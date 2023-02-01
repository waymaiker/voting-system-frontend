import AddVote from "../OnlyVoters/AddVote"
import GetVoter from "../OnlyVoters/GetVoter"
import VotersContent from "../Voters/VotersContent"

import useEventsProvider from "@/hooks/useEventsProvider"

import { WORKFLOW_STATUS_VALUE } from "@/utils/constants"
import { Flex } from "@chakra-ui/react"

export default function VotingSessionStartedView() {
  const { workflowStatus } = useEventsProvider()

  return WORKFLOW_STATUS_VALUE[workflowStatus.previousStatus] == "VotingSessionStarted" 
  && <Flex direction="column" alignItems="center"> 
      <Flex alignItems="center"> 
        <AddVote /> 
        <GetVoter />
      </Flex> 
      <VotersContent />
    </Flex> 
}