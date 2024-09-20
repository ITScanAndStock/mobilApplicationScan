import { View, Text, type ViewStyle, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      {/* Désignation */}
      <Text style={styles.designation}>DÉSIGNATION</Text>

      {/* Alerte */}
      <View style={styles.alertContainer}>
        <Text style={styles.alertText}>ALERTE</Text>
        <View style={styles.alertValueContainer}>
          <Text style={styles.alertValue}>8</Text>
        </View>
      </View>

      {/* Stock */}
      <View style={styles.stockContainer}>
        <Text style={styles.stockText}>STOCK</Text>
        <View style={styles.stockValueContainer}>
          <Text style={styles.stockValue}>38</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000", // Bordure noire
    padding: 10,
    borderRadius: 10,
  },
  designation: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e74c3c", // Couleur de fond rouge pour Alerte
    borderRadius: 20,
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginRight: 10,
  },
  alertText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
    marginLeft: 5,
  },
  alertValueContainer: {
    backgroundColor: "#fff", // Fond blanc pour la valeur
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  alertValue: {
    color: "#e74c3c",
    fontWeight: "bold",
  },
  stockContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2980b9",
    borderRadius: 20,
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginRight: 10,
  },
  stockText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
    marginLeft: 5,
  },
  stockValueContainer: {
    backgroundColor: "#fff", // Fond blanc pour la valeur
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  stockValue: {
    color: "#2980b9",
    fontWeight: "bold",
  },
});
