import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CryptoCardCom from "@/components/CryptoCardCom";
import { icons } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
const Tron = () => {
  return (
    <SafeAreaView>
      <NavigateBack text="TRON" />
      <CryptoCardCom card={icons.tron} />
      <View
        style={{
          height: "62%",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <InformationFields />
        <CustomProceed />
      </View>
    </SafeAreaView>
  );
};

export default Tron;
