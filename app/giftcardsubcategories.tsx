import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { COLORS, images } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/contexts/themeContext';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigateBack from '@/components/NavigateBack';
import { Image } from 'expo-image';
import { Colors } from '@/constants/Colors';
import CustomSelectField from '@/components/CustomSelectField';
import Button from '@/components/Button';
import CounterInput from '@/components/CounterInput';
import { NavigationProp, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import {
  getSubCategories,
  ICategoryResponse,
} from '@/utils/queries/quickActionQueries';
import { useAuth } from '@/contexts/authContext';
import CustomSelect from '@/components/CustomSelect';

interface CardData {
  id: string;
  card: string;
  text: string;
}

const data: CardData[] = [
  { id: '1', card: images.amazonCard, text: 'Amazon' },
  { id: '2', card: images.americanExpressCard, text: 'American Express' },
  { id: '3', card: images.visaCard, text: 'Visa Card' },
  { id: '4', card: images.ebayCard, text: 'Ebay' },
  { id: '5', card: images.footLockerCard, text: 'Footlocker' },
  { id: '6', card: images.googlePlayCard, text: 'Google Play' },
  { id: '7', card: images.itunesCard, text: 'iTunes' },
  { id: '8', card: images.nikeCard, text: 'Nike' },
];

const CardScreen = () => {
  const { dark } = useTheme();
  const { navigate, goBack } = useNavigation<NavigationProp<any>>();
  const route = useRoute();
  const {
    departmentId,
    categoryData,
  }: {
    departmentId: string;
    categoryData: ICategoryResponse['data']['categories'][number]['category'];
  } = route.params as any;
  if (!departmentId || !categoryData) {
    return goBack();
  }

  const [cardsConter, setCardsConter] = React.useState(0);
  const [availableCards, setAvailableCards] =
    React.useState<{ id: number; title: string }[]>();
  const [selectedCardId, setSelectedCardId] = React.useState<string>('');
  const [amount, setAmount] = React.useState(0.0);
  const { token } = useAuth();
  const {
    data: subcategoriesData,
    isLoading: isLoadingSubcategories,
    isError: isErrorSubcategories,
    error: errorSubcategories,
  } = useQuery({
    queryKey: [departmentId, categoryData.id.toString(), 'subcategories'],
    queryFn: () =>
      getSubCategories(token, departmentId, categoryData.id.toString()),
  });

  useEffect(() => {
    const options = subcategoriesData?.data?.subCategories;
    if (options) {
      const renderedOptions = options.map((option) => ({
        id: option.subCategory.id,
        title: option.subCategory.title,
      }));

      setAvailableCards(
        options.map((option) => ({
          id: option.subCategory.id,
          title: option.subCategory.title,
        }))
      );
    }
  }, [subcategoriesData]);

  const setFieldValue = (title: string, id: any) => {
    console.log(title, id);
    setSelectedCardId(id);
  };

  const renderCard = () => {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={images[categoryData.image as keyof typeof images] as string}
          style={styles.cardImage}
          contentFit="contain"
        />
      </View>
    );
  };

  useEffect(() => {
    if (selectedCardId) {
      const cards = subcategoriesData?.data?.subCategories;
      const card = cards?.find(
        (card) => card.subCategory.id == +selectedCardId
      );
      if (card?.subCategory.price) {
        setAmount(+cardsConter * +card.subCategory.price);
      }
    }
  }, [cardsConter, selectedCardId]);

  // console.log(availableCards);

  const renderInfoFields = () => {
    return (
      <View style={styles.inputFieldsContainer}>
        <CounterInput
          text="How many cards?"
          counter={cardsConter}
          setCounter={setCardsConter}
          type="counter"
        />
        {/* Regular Input */}
        <TextInput
          style={[
            styles.input,
            dark ? { color: Colors.dark.text } : { color: Colors.light.text },
          ]}
          keyboardType="numeric"
          placeholder="Enter amount in USD"
          value={`Amount in USD: ${amount !== 0.0 ? amount.toFixed(2) : 0.0}`}
          readOnly
          placeholderTextColor={'#888'}
        />
        <View style={{ flex: 1, marginTop: 24 }}>
          {availableCards && (
            <CustomSelect
              placeholder="Select Category"
              setFieldValue={setFieldValue}
              currValue={selectedCardId}
              id="category"
              options={availableCards}
              modalLabel="Category"
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <NavigateBack text={categoryData.title} />
          {renderCard()}
          {renderInfoFields()}
        </ScrollView>
        <View style={styles.footer}>
          <Button
            onPress={() => {
              navigate('connectingagent');
            }}
            title="Proceed"
            filled
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  cardContainer: {
    height: 220,
    marginTop: 25,
    marginHorizontal: 16,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  inputFieldsContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 16,
  },
  input: {
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.greyscale300,
  },
});

export default CardScreen;
