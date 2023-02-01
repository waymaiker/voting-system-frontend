import { Card, Flex, Button, Input, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useSigner } from "wagmi";

import { contract } from "@/utils/constants";
import useEventsProvider from "@/hooks/useEventsProvider";
import { toastError, toastSuccess } from "@/utils/methods";

export default function GetOneProposal () {
  const [proposalId, setProposalId] = useState(0)
  const { getEvents, setProposal, setIsLoading } = useEventsProvider()
  const { data: signer } = useSigner()
  const toast = useToast()

  const getOneProposal = async () => {
    setIsLoading(true)
    try {
      const contractInstance = new ethers.Contract(process.env.NEXT_PUBLIC_SCADDRESS, contract.abi, signer)
      let transaction = await contractInstance.getOneProposal(proposalId)

      setProposal({
        id: proposalId,
        description: transaction.description,
        voteCount: parseInt(transaction.voteCount),
      })

      await getEvents()
      toast(toastSuccess("Get a proposal", "Transaction successful"))
    } catch (error) {
      setIsLoading(false)
      toast(toastError("Get a proposal", error.message))
    }
  }

  return (
    <Card direction="column" p="5" m="2" backgroundColor="white" borderRadius="10" variant='outline'>
      <Button isDisabled={proposalId === parseInt && proposalId >=0 && proposalId <1000 } onClick={() => getOneProposal()} colorScheme='blue' variant='solid' marginTop="2" marginBottom="10">
        Get information on a Proposal
      </Button>
      <Flex direction='column'>
        <FormControl>
          <FormLabel>Proposal Id</FormLabel>
          <Input onChange={(e) => setProposalId(e.target.value)} placeholder="1" />
        </FormControl>
      </Flex>
    </Card>
  )
}