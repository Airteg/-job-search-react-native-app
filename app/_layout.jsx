import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // console.log("Компонент Layout рендериться. fontLoaded:", fontLoaded);

  const onLayoutRootView = useCallback(async () => {
    // console.log("onLayoutRootView викликано. fontLoaded:", fontLoaded);
    if (fontLoaded) {
      // console.log("Шрифти завантажено. Спроба приховати SplashScreen.");
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]); // Залежність від fontLoaded гарантує, що функція оновлюється, коли стан змінюється

  // useEffect(() => {
  //   async function hideSplashScreen() {
  //     if (fontLoaded) await SplashScreen.hideAsync();
  //   }

  //   hideSplashScreen();
  // }, [fontLoaded]);

  // console.log("🚀 ~ fontLoaded:", fontLoaded);
  onLayoutRootView();
  if (!fontLoaded) return null;
  // console.log("Рендер Stack компоненту.");

  return <Stack />;
};

export default Layout;
