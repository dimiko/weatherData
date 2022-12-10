import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';
import SearchBar from "../SearchBar";
import CityName from "../CityName";

const SearchWrapper = ({ setIsSelected, isClicked, setIsClicked, setCityData }) => {
    const [cityName, setCityName] = useState("");

    return (
        <Box w={{base: '100%', lg: '50%'}} px={{base: '0', lg: '40px'}}>
            <SearchBar cityName={cityName} setCityName={setCityName} setIsClicked={setIsClicked} />
            {
                isClicked ? <CityName cityName={cityName} setCityData={setCityData} setIsSelected={setIsSelected} /> : null
            }
        </Box>
    )
}

export default SearchWrapper;

