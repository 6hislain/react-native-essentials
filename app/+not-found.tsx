import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="/(tabs)" style={styles.button}>
          Go back to Home screen
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
  },
  button: { fontSize: 20, color: "#fff", textDecorationLine: "underline" },
});
