import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "@/constants";
const RecentItem: React.FC<{
  icon: string;
  heading: string;
  text: string;
  date: string;
  price: string;
  productId: string;
}> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={props.icon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.contentOne}>
          <Text style={styles.heading}>{props.heading}</Text>
          <View style={styles.details}>
            <Text style={styles.detailPriceProduct}>{props.price}</Text>
            <Text> - </Text>
            <Text style={styles.detailPriceProduct}>{props.productId}</Text>
          </View>
        </View>
        <View style={styles.contentTwo}>
          <View>
            <Text style={styles.text}>{props.text}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.circle}></Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
  },
  circle: {
    width: 10,
    height: 10,
    marginLeft: 5,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: COLORS.green,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 50,
    borderColor: COLORS.green,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  textContainer: {
    flexDirection: "column",
    width: "85%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
    color: COLORS.greyscale600,
  },
  contentOne: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  contentTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 9,
    color: COLORS.greyscale600,
  },
  detailPriceProduct: { fontSize: 10, fontFamily: "Bold" },
});
