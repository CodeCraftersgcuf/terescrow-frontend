import { StyleSheet, View } from "react-native"
import { Image } from "expo-image"
const CardCom: React.FC<{ card: string }>  = (props) => {

  return (
    <View style={styles.cardContainer}>
        <Image source={props.card} style={styles.cardImage} contentFit="contain" />
    </View>
  )
}

export default CardCom

const styles = StyleSheet.create({
    cardContainer: {
        height: 220,
        marginTop: 32 ,
        marginHorizontal: 16,
        // borderWidth : 1
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 24,
        // borderWidth : 1 
    }
})