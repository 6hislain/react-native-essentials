import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = { label: string; theme?: "primary"; onPress?: () => void };

export default function Button({ label, theme, onPress }: Props) {
  if (theme == "primary")
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          onPress={onPress}
          style={[styles.button, { backgroundColor: "#fff" }]}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  else
    return (
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 3,
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: { paddingRight: 8 },
  buttonLabel: { color: "#fff", fontSize: 16 },
});
