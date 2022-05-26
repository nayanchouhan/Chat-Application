import React from 'react'
import {Box} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const UserBadgeItem = ({ user,handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      colorScheme="blue"
      cursor="pointer"
      onClick={handleFunction}
      bgColor="orange"
    >
        {user.name}
        <CloseIcon pl={1} />
    </Box>
  )
}

export default UserBadgeItem
