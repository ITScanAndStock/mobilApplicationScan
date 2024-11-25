import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearcheBar from "../components/SearcheBar";
import { Row } from "@/components/Row";
import AlerteAndStock from "@/components/AlerteAndStock";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Index() {
  const [search, setSearch] = useState("");

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <SafeAreaView style={styles.container}>
        <Row style={styles.header}>
          <Pressable onPress={() => alert("Tu as cliqué sur un bouton")}>
            <Image source={require("../assets/images/burgerMenu.png")} />
          </Pressable>

          <Image source={require("../assets/images/logoScanAndStock.png")} />
        </Row>
      </SafeAreaView>

      <Row style={styles.search}>
        <SearcheBar value={search} onChange={setSearch} />
      </Row>
      <View style={styles.search}>
        <AlerteAndStock />
      </View>

      <View style={{ paddingHorizontal: 12 }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#024965",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    gap: 16,
    padding: 15,
    backgroundColor: "#024965",
    justifyContent: "space-between",
  },
  search: {
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center", // pour aligner verticalement
    padding: 10,
  },
});
