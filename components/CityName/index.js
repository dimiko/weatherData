import React, { useState } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react';
import useName from "../../hooks/useName";

const CityName = ({ cityName, setIsSelected, setCityData }) => {
    const { nameData } = useName(cityName ? cityName : [])

    return (
        <Box py={'60px'} >
            <Flex direction={'column'}>
                {Array.isArray(nameData) ?
                    nameData?.map((city, index) => {
                        return (
                            <Button key={index} mb={'15px'}  onClick={() => {setCityData(city), setIsSelected(true)}} display={'flex'} justifyContent={'space-between'}>
                                <Box pr={'12px'}>{'State: '}{city?.state?.length > 5 ? `${city?.state.substring(5, 0)}...` : city?.state }</Box>
                                <Box pr={'12px'}>{city?.name.length > 15 ? `${city?.name.substring(15, 0)}...` : city?.name} - {city?.country}</Box>
                            </Button>
                        )
                    }) : null
                }
            </Flex>
        </Box>
    )
}

export default CityName;
