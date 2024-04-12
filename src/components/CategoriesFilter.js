
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[
              styles.categoryContainer,
              {
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
              },
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                { color: index === 0 ? colors.COLOR_LIGHT : colors.COLOR_DARK },
              ]}
            >
              {category.category}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    marginRight: 36,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 16,
  },
  categoryText: {
    fontSize: 18,
  },
});

export default CategoriesFilter;
