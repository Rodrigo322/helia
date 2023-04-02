import {
  BellRinging,
  Bookmark,
  ChatsTeardrop,
  FadersHorizontal,
  MagnifyingGlass,
} from "phosphor-react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import hotel from "../../assets/images/hotel.png";

export function Home() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <ChatsTeardrop size={30} color="#1AB65C" weight="duotone" />
            <Text style={styles.headerLeftText}>Helia</Text>
          </View>
          <View style={styles.headerRight}>
            <BellRinging size={30} color="#f4f4f4" weight="duotone" />
            <Bookmark size={30} color="#f4f4f4" weight="duotone" />
          </View>
        </View>
        <Text style={styles.userName}>Olá, Rodrigo Lucas</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputGroup}>
            <MagnifyingGlass size={32} color="#757575" weight="thin" />
            <TextInput
              style={styles.input}
              placeholderTextColor="#757575"
              placeholder="Procure por casas aqui"
            />
          </View>
          <FadersHorizontal size={32} color="#1AB65C" weight="thin" />
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardImage} source={hotel} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoTitle}>Hotel Nova Vista</Text>
              <Text style={styles.cardInfoSubTitle}>Posse, Goiás</Text>
            </View>
            <View style={styles.cardInfoBuy}>
              <Text style={styles.cardInfoBuyValue}>R$ 420</Text>
              <Bookmark size={32} color="#F4F4F4" weight="bold" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#f4f4f4",
    fontSize: 24,
    fontWeight: "800",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#f4f4f4",
    fontSize: 25,
    fontWeight: "800",
  },
  inputContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#1F222A",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "60%",
    color: "#f4f4f4",
  },
  content: {
    width: "100%",
    gap: 20,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#1F222A",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  cardInfo: {
    height: "100%",
    gap: 10,
  },
  cardInfoTitle: {
    color: "#f4f4f4",
    fontSize: 16,
    fontWeight: "400",
  },
  cardInfoSubTitle: {
    color: "#f4f4f4",
    fontSize: 14,
    fontWeight: "300",
  },
  cardInfoBuy: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardInfoBuyValue: {
    color: "#1AB65C",
    fontSize: 18,
    fontWeight: "800",
  },
});
