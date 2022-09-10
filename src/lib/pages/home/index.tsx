import { Flex, Heading, Input } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const Home = () => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState<{
    lat: number | null;
    lng: number | null;
  }>({
    lat: null,
    lng: null,
  });

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
      <Flex direction="column">
        <Heading>SwapEV</Heading>
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
                  minWidth="300px"
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
      </Flex>
    </Flex>
  );
};

export default Home;
