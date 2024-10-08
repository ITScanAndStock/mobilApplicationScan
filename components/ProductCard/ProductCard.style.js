import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  designationContainer: {},
  designation: {
    fontSize: 16,
    lineHeight: 19.5,
    fontWeight: "600",
    color: "#024965",
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "Roboto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  stock: {
    padding: 10,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: "rgba(203, 67, 67, 1)",
  },
  changeStock: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  fournisseur: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "300",
  },
  categorie: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "500",
  },
  button: {
    padding: 5,
  },
  stockToChange: {
    padding: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 29,
    color: "rgba(203, 67, 67, 1)",
  },
  textButton: {
    fontSize: 30,
    fontWeight: "800",
    color: "rgba(39, 51, 58, 1)",
  },
});
