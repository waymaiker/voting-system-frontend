import { Flex } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import Header from "./Header";
import SignIn from "./SignIn";
import Footer from "./Footer";
import WorkflowStatus from "./WorkflowStatus";

export default function Layout({children, isAGuest}) {
  const { isConnected } = useAccount()

  return (
    <Flex direction="column" h="100vh" backgroundColor="gray.50">
      <Header/>
        { isConnected ? <ViewConnected children={children} isAGuest={isAGuest} />  : <ViewDisconnected /> }
      <Footer/>
    </Flex>
  )
}

const ViewConnected = ({children, isAGuest}) =>
  <Flex grow="1" direction="column">
    {!isAGuest && <WorkflowStatus/>}
    {children}
  </Flex>

const ViewDisconnected = () =>
  <Flex grow="1" direction="column">
    <SignIn/>
  </Flex>