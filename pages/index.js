import { Flex } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import Container from "../components/Container";
import SearchWrapper from "../components/SearchWrapper";
import WeatherData from "../components/WeatherData";
import Spacer from "../components/Spacer";

export default function Home() {
    const [cityData, setCityData] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {

    }, [cityData])


  return (
      <Container>
          <Spacer />
          <Flex w={'100%'} pt={'40px'} direction={{base: 'column', lg: 'row'}}>
              <SearchWrapper
                  setCityData={setCityData}
                  setIsSelected={setIsSelected}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked} />
              {
                  isSelected ? <WeatherData cityData={cityData} /> : null
              }

          </Flex>
      </Container>
  )
}
