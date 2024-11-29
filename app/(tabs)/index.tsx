import { Image, StyleSheet, Platform, View, Dimensions, ScrollView } from "react-native";
import Header from "@/components/index/Header";
import CardSwiper from "@/components/index/CardSwiper";
import { SafeAreaView } from "react-native-safe-area-context";
import QuickAction from "@/components/index/QuickAction";
import RecentContainer from "@/components/index/RecentContainer";
import { useTheme } from "@/contexts/themeContext";
import { COLORS } from "@/constants";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
<<<<<<< HEAD
=======
import Profile from "./profile";
import TerceScrow from "../tercescrow";
import SplashSteam from "../splashsteam";
>>>>>>> 024119fce275f5b4200b51a9338a45e48699fd38
export default function HomeScreen() {
  const { dark } = useTheme();
  console.log(dark);
  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <View>
        <Header />
      </View>
<<<<<<< HEAD
      <ScrollView style={{ flex: 1 }}>
        {/* Responsive CardSwiper */}
=======
      <View style={{ flex: 10 }}>
>>>>>>> 024119fce275f5b4200b51a9338a45e48699fd38
        <View style={{ width: "100%", height: screenHeight * 0.25 }}>
          <CardSwiper />
        </View>
        {/* Responsive QuickAction */}
        <View>
          <QuickAction />
        </View>
        {/* Responsive RecentContainer */}
        <View style={{ width: "100%", flex:1 }}>
          <RecentContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
