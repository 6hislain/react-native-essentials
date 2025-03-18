import { PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

type Props = PropsWithChildren<{ isVisible: boolean; onClose: () => void }>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={12} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { color: "#fff", fontSize: 16 },
  modalContent: {
    bottom: 0,
    height: "25%",
    width: "100%",
    position: "absolute",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: "#25292e",
  },
  titleContainer: {
    height: "16%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#464C55",
    justifyContent: "space-between",
  },
});
