import { Card, Flex, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useSigner } from "wagmi";

import { toastError, toastSuccess } from "@/utils/methods";
import useEventsProvider from "@/hooks/useEventsProvider";
import { contract } from "@/utils/constants";

export default function AddVote () {
  const [voteId, setVoteId] = useState(0)
  const { getEvents, setIsLoading } = useEventsProvider()
  const { data: signer } = useSigner()  

  const addVote = async () => {
    setIsLoading(true)
    try {
      const contractInstance = new ethers.Contract(process.env.NEXT_PUBLIC_SCADDRESS, contract.abi, signer)
      let transaction = await contractInstance.setVote(voteId)
      await transaction.wait()
      
      await getEvents()
      toast(toastSuccess("Add vote", "Transaction successful")) 
    } catch (error) {
      toastError("Add vote", error.reason)
    }
  }

  return (
    <Card direction="column" p="5" m="2" backgroundColor="white" borderRadius="10" variant='outline'>
      <Button isDisabled={voteId == 0} onClick={() => addVote()} colorScheme='blue' variant='solid' marginTop="2" marginBottom="10">
        Vote for a proposal
      </Button>
      <Flex direction='column'>
        <FormControl>
          <FormLabel>Proposal Id</FormLabel>
          <Input onChange={(e) => setVoteId(e.target.value)} placeholder="1" />
        </FormControl>
      </Flex>
    </Card>
  )
}