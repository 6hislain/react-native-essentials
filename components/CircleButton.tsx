import { MaterialIcons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet } from "react-native";

type Props = { onPress: () => void };

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    flex: 1,
    borderRadius: 42,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  circleButtonContainer: {
    width: 84,
    height: 84,
    padding: 3,
    borderWidth: 4,
    borderRadius: 42,
    marginHorizontal: 60,
    borderColor: "#ffd33d",
  },
});
