import { Flex, Heading, Input } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import HomeButton from "lib/components/HomeButton";

const Home = () => {
  const router = useRouter();
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState<{
    lat: number | null;
    lng: number | null;
  }>({
    lat: null,
    lng: null,
  });

  console.log(coordinates);

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <Flex direction="column">
      <Head>
        <title>Home</title>
      </Head>
      <NextSeo title="Home" />
      <Flex direction="column" alignItems="center">
        <Heading width="100%">SwapEV</Heading>
        <Flex mt="50px" alignItems="center" justifyContent="center">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <Flex direction="column">
                <Input
                  borderColor="white"
                  minWidth="320px"
                  border="2px solid white"
                  {...getInputProps({ placeholder: "Find Charging Stations" })}
                />
                <Flex direction="column">
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    return (
                      <Flex
                        p="5px"
                        border="1px solid #585858"
                        cursor="pointer"
                        {...getSuggestionItemProps(suggestion)}
                      >
                        {suggestion.description}
                      </Flex>
                    );
                  })}
                </Flex>
              </Flex>
            )}
          </PlacesAutocomplete>
        </Flex>
        <Flex columnGap="15px" mt="50px">
          <HomeButton
            buttonText="Find Nearest Charging Station"
            imageUrl="https://i.imgur.com/clGXNXF.jpg"
            functionToExecute={() => router.push("/find")}
            disabled
          />
          <HomeButton
            buttonText="Find Charging Stations in Your City"
            imageUrl="https://i.imgur.com/LnChHVh.png"
            functionToExecute={() => router.push("/find")}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
