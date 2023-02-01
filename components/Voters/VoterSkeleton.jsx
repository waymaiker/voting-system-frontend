import { Flex, Text } from '@chakra-ui/react'

export default function VoterSkeleton () {
  return(
    <Flex direction="column" alignItems="Center" p="5">
      <Text p="5" fontSize="2xl" fontWeight="bold" color="black"> No registered voters yet</Text>
    </Flex>
  )
}