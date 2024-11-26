import {FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      //Spacing between rows
      contentContainerClassName="gap-2"
      //Spacing between items in the same row
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductListItem product={item} /> }
    />
  );
}
