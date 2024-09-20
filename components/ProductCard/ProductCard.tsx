import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ProductCard.style";

function ProductCard() {
  return (
    <View style={styles.container}>
      <View style={styles.designationContainer}>
        <Text style={styles.designation}>Nom du produit</Text>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/images/fournisseur.png")}
          />
          <Text style={styles.fournisseur}>fournisseur</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={require("../../assets/images/categorie.png")}
          />
          <Text style={styles.categorie}>categorie</Text>
        </View>
      </View>

      <Text style={styles.stock}>4</Text>
      <View style={styles.changeStock}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}> - </Text>
        </TouchableOpacity>
        <Text style={styles.stockToChange}>33</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductCard;
