import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { ScreenHeaderBtn } from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} />,
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.menu} />,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
