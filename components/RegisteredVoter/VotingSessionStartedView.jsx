import { useAccount } from "wagmi"

import AddVote from "../OnlyVoters/AddVote"
import GetVoter from "../OnlyVoters/GetVoter"
import VotersContent from "../Voters/VotersContent"

import useEventsProvider from "@/hooks/useEventsProvider"

import { WORKFLOW_STATUS_VALUE } from "@/utils/constants"
import { Card, Flex, FormControl, Input, Text } from "@chakra-ui/react"

export default function VotingSessionStartedView() {
  const { address } = useAccount()
  const { workflowStatus, votedList } = useEventsProvider()
  const isUserAlreadyVoted = votedList.find(vote => vote.voterAddress == address) != undefined

  return WORKFLOW_STATUS_VALUE[workflowStatus.previousStatus] == "VotingSessionStarted"
  && <Flex direction="column" alignItems="center">
      <Flex>
      {
          isUserAlreadyVoted
          ? <Card direction="column" p="5" m="2" backgroundColor="white" borderRadius="10" variant='outline'>
              <Flex grow="1" direction='column' justifyContent="center" alignItems="center">
                <Text fontWeight="medium">User has alredy voted</Text>
                <FormControl>
                  <Input disabled  placeholder="" />
                </FormControl>
              </Flex>
            </Card>
          : <AddVote />
        }
        <GetVoter />
      </Flex>
      <VotersContent />
    </Flex>
}