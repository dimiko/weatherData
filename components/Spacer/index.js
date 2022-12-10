import { Box } from '@chakra-ui/react';

export default function Spacer() {
    return <Box display={{base: 'none', lg: 'block'}} pos={'absolute'} top={'0'} left={'50%'} height={'100vh'} border={'1px dotted #eb6e4c'} />
}
