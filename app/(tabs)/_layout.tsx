import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Tabs, Stack } from "expo-router";
import icons from "@/constant/icons";
import { LinearGradient } from "expo-linear-gradient";

import { ImageSourcePropType } from "react-native";
import Header from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

type TabIconProps = {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, focused }: TabIconProps) => {
  return (
    <View style={[styles.container, focused ? styles.focused : null]}>
      <Image source={icon} resizeMode="stretch" tintColor={color} style={styles.icon} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Header />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarBackground() {
            return <LinearGradient colors={["#24353E", "#024965"]} style={{ flex: 1 }} />;
          },
          tabBarStyle: {
            borderTopColor: "transparent",
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="order"
          options={{
            title: "Commandes",
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabIcon icon={icons.order} color={focused ? "black" : "white"} focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="panier"
          options={{
            title: "Panier",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.darkBasket} color={focused ? "black" : "white"} focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: "Scan",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.darkScan} color={focused ? "black" : "white"} focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="fournisseurs"
          options={{
            title: "fournisseurs",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.darkTruck} color={focused ? "black" : "white"} focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="stock"
          options={{
            title: "stock",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => <TabIcon icon={icons.darkStock} color={focused ? "black" : "white"} focused={focused} />,
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  focused: {
    backgroundColor: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    width: 50,
    height: 40,
    top: -5,
  },
});

export default TabsLayout;
