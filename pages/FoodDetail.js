import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import { BackNavBar } from "../components/BackNavBar/BackNavBar";

export default function FoodDetail({ navigation, route }) {
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <BackNavBar navigation={navigation} title="Food Details" />
      <View style={styles.purposeSection}>
        <Text style={styles.textHeader}>Food available:</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-starts",
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  purposeSection: {
    flex: 1,
    width: "80%",
    marginVertical: 10,
  },
  frequencySection: {
    flex: 2,
    width: "80%",
    marginVertical: 10,
  },
  bestBySection: {
    flex: 4,
    width: "80%",
  },
  frequencyItem: {
    marginTop: 5,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputBox: {
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  nextSection: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
});
