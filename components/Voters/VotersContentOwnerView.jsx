import { Wrap } from '@chakra-ui/react'

import VoterItem from './VoterItem'
import VoterSkeleton from './VoterSkeleton'

import useEventsProvider from '@/hooks/useEventsProvider'

export default function VotersContentOwnerView () {
  const { registeredVotersList } = useEventsProvider()

  return (
    <Wrap justify="center">
    { registeredVotersList.length != 0
      ? registeredVotersList.map((voter, index) => <VoterItem key={index} voter={voter} index={index}/>)
      : <VoterSkeleton />
    }
    </Wrap>
  )
}