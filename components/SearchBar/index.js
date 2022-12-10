import React, {useState} from 'react'
import { Box, FormControl, Input, Button, FormLabel } from '@chakra-ui/react';
import useCities from "../../hooks/useCities";

const SearchBar = ({ cityName, setCityName, setIsClicked }) => {
    const {cities} = useCities(cityName ? cityName : null)

    const handleCity = (event) => {
        setCityName(event.target.value);
        setIsClicked(false)
    };

    const handleCityWeather = (data) => {
        setIsClicked(true)
        setCityName(data)
    };

    return <div>

        <Box as={'form'}>
            <FormControl>
                <FormLabel htmlFor="city">
                    Search city
                </FormLabel>
                <Input type="text" name="city" required autoComplete="off" onChange={handleCity} value={cityName} mb={'20px'} />
                <Button
                    bg={"#eb6e4c"}
                    color={'white'}
                    _hover={{
                        bg: "white",
                        color: '#eb6e4c',
                        border: "1px solid #eb6e4c"
                    }}
                    w={'100%'}
                    onClick={() => handleCityWeather(cityName)}
                >
                    Search
                </Button>
            </FormControl>
        </Box>
    </div>
};

export default SearchBar;
