import { useState } from "react";
import { Image, type ImageSource } from "expo-image";
import { StyleSheet, FlatList, Platform, Pressable } from "react-native";

type Props = {
  onCloseModal: () => void;
  onSelect: (image: ImageSource) => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSource[]>([
    require("@/assets/images/emoji/angry-face.png"),
    require("@/assets/images/emoji/cool-dude.png"),
    require("@/assets/images/emoji/happy-face.png"),
    require("@/assets/images/emoji/laugh-beam.png"),
    require("@/assets/images/emoji/naughty.png"),
    require("@/assets/images/emoji/smiling-face.png"),
    require("@/assets/images/emoji/worried.png"),
  ]);

  return (
    <FlatList
      horizontal
      data={emoji}
      contentContainerStyle={styles.listContainer}
      showsHorizontalScrollIndicator={Platform.OS == "web"}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image key={index} source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 100, height: 100, marginRight: 20 },
  listContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "space-between",
  },
});
