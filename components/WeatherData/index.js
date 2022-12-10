import React, { useState } from 'react'
import { Box,Image, Flex } from '@chakra-ui/react';
import useWeather from "../../hooks/useWeather";
import Loader from "../Loader";

const WeatherData = ({ cityData }) => {
    const { weatherData, isLoading } = useWeather(cityData?.lat, cityData?.lon)

    const today = new Date();

    function getValueBeforeDecimal(num) {
        const beforeDecimalStr = num.toString().split('.')[0];
        return beforeDecimalStr;
    }

    return (
            isLoading ?
                <Loader/> :
                <Box w={{base: '100%', lg: '50%'}} px={{base: '0', lg: '40px'}} my={'25px'}>
                    <Box height={{base: 'auto', lg: '80vh'}} overflow={'auto'}>
                        <Box>
                            <Box as={'h1'} textStyle={'h1'}>
                                {cityData?.name}
                                <Box as={'span'}>({cityData?.state})</Box>
                            </Box>
                            {
                                weatherData?.list?.map((list, index) => {
                                    let date = new Date(list?.dt * 1000);
                                    return (
                                        date.toDateString() === today.toDateString() ?
                                            <Box key={index} borderBottom={'1px solid black'} my={'25px'} pb={'15px'}>
                                                <Box>{list?.dt_txt}</Box>
                                                <Box>{'Temperature Now: '}
                                                    <Box as={'span'} fontWeight={'700'}>
                                                        {getValueBeforeDecimal(list?.main?.temp - 273.15)}{'°C'}
                                                    </Box>
                                                </Box>
                                                <Flex fontWeight={'700'} alignItems={'center'}>
                                                    {`Feels like ${getValueBeforeDecimal(list?.main?.feels_like - 273.15)}°C. 
                                        Weather: ${list?.weather[0]?.description}`}
                                                    <Image w={'35px'} src={`http://openweathermap.org/img/w/${list?.weather[0]?.icon}.png`} />
                                                </Flex>
                                                <Box>{'Humidity: '}{list?.main?.humidity}{'%'}</Box>
                                                <Box>
                                                    {'Min Temperature: '}{getValueBeforeDecimal(list?.main?.temp_min - 273.15)}{'°C'}
                                                    {' / '}
                                                    {'Max Temperature: '}{getValueBeforeDecimal(list?.main?.temp_max - 273.15)}{'°C'}
                                                </Box>
                                            </Box>
                                            : null
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>
    )
}

export default WeatherData;
