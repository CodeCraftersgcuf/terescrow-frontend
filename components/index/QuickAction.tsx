import { icons } from "@/constants";
import { FlatList, View, Text, StyleSheet } from "react-native";
import QuickBoxItem from "./QuickBoxItem";
import { Route, useRouter } from "expo-router";

const QuickAction = () => {
  const router = useRouter();
  const data = [
    {
      icon: icons.gift,
      key: "1",
      heading: "Sell Gift Card",
      text: "Exchange your gift cards for instant cash",
      route: "/sellgiftcard",
    },
    {
      icon: icons.gift,
      key: "2",
      heading: "Buy Gift Cards",
      text: "Get great deals and instant delivery",
      route: "/buygiftcard",
    },
    {
      icon: icons.bitCoin,
      key: "3",
      heading: "Sell crypto",
      text: "Convert your crypto into cash easily",
      route: "/sellcrypto",
    },
    {
      icon: icons.bitCoin,
      key: "4",
      heading: "Buy crypto",
      text: "Purchase popular crypto quickly and securely",
      route: "/buycrypto",
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainHeading}>Quick Actions</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <QuickBoxItem
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            onSend={() => router.push(item.route as Route)}
          />
        )}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
};

export default QuickAction;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});
