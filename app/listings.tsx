import { Button, ColorScheme, LinkButton, Title } from "../components/UI";
import { Image, Platform, SafeAreaView, Text, View } from "react-native";
import { Layout, PageContent } from "../components/Layout";
import { Link, Stack } from "expo-router";

import Header from "../components/Header/Header";
import { PageHeader } from "../components/PageHeader";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { styled } from "styled-components/native";

const NewButtonWrapper = styled.View`
  padding: 16px 24px;
  background-color: ${ColorScheme.background};
`;

const ListingContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #98c0c5;
`;

const SectionRow = styled.View`
  flex-direction: row;
`;

const SectionContainer = styled.View`
  flex: 1;
  margin: 0px 8px;
  margin-top: 24px;
`;
const ListingDetailsContainer = styled.View`
  margin: 24px 0px;
`;
const TextLabel = styled(Title)`
  font-size: 14px;
  margin-bottom: 4px;
`;
const AddressText = styled(Text)`
  text-align: left;
`;

const IS_WEB = Platform.OS === "web";

const listings: React.FC = () => {

  if (IS_WEB) {
    return (
      <ScrollView>
        <Layout>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
          <Header showBackButton />
          <View>
            <ListingContent />
          </View>
        </Layout>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView>
      <Layout>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Header showBackButton />
        <ScrollView style={{ flex: 1 }}>
          <ListingContent />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

export default listings;


const ListingContent = () => (
  <>
  <PageHeader title="Listings">
    View your property listings and average guest ratings below.
  </PageHeader>
  <NewButtonWrapper>
    <Button style={IS_WEB && { maxWidth: 200 }}>
      Add a new listing
    </Button>
  </NewButtonWrapper>

  {Array.from({ length: 5 }).map((_, i) => (
    <ListingContainer key={i}>
    <PageContent>
      <SectionRow>
        <SectionContainer>
          <Image
            style={{ width: 150, height: 100 }}
            source={{ uri: "https://picsum.photos/150/100" }}
          />
        </SectionContainer>

        <SectionContainer>
          <TextLabel variant="uppercase">Property Address</TextLabel>
          <AddressText>
            1234 Main Street, San Francisco, CA 94101
          </AddressText>
        </SectionContainer>
      </SectionRow>

      <SectionRow>
        <SectionContainer>
          <TextLabel variant="uppercase">Status</TextLabel>
          <Text>Active</Text>
        </SectionContainer>

        <SectionContainer>
          <TextLabel variant="uppercase">Average Rating</TextLabel>
          <Text>4.8</Text>
        </SectionContainer>
      </SectionRow>

      <ListingDetailsContainer>
        <LinkButton
          variant="button"
          justify="right"
          onPress={() => console.log("pressed")}
        >
          Listing details
        </LinkButton>
      </ListingDetailsContainer>
    </PageContent>
  </ListingContainer>
  ))}
  </>
);