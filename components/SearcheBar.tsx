import { Image, StyleSheet, TextInput, View } from "react-native";
import { Row } from "./Row";

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export default function SearcheBar({ value, onChange }: Props) {
  return (
    <Row gap={8} style={styles.wrapper}>
      <Image
        source={require("@/assets/images/search.png")}
        width={16}
        height={16}
      />
      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 3,
    height: 43,
    padding: 10,
  },
  input: {
    flex: 1,
    height: 16,
    fontSize: 10,
    lineHeight: 16,
  },
});
