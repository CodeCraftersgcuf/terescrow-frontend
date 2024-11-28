import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DUMMY_GIFT_SOLDS_BOUGHT } from "@/utils/dummyTrans";
import NavigateBack from "@/components/NavigateBack";
import SearchInputField from "@/components/SearchInputField";
import TransactionData from "@/components/TransactionData";
const GiftCardBought = () => {
  const data = DUMMY_GIFT_SOLDS_BOUGHT;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigateBack text="Gift Card Bought" />
      <SearchInputField />
      <View style={{ flex:1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TransactionData
              icon={item.icon}
              heading={item.heading}
              date={item.date}
              price={item.price}
              productId={item.productId}
            />
          )}
          keyExtractor={(item) => item.key}
          numColumns={1}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default GiftCardBought;
