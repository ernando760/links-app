import { FlatList } from "react-native";
import { styles } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "../category";

type CategoriesProps = {
  selected: string;
  onChange: (category: string) => void;
};

export function Categories({ selected, onChange }: CategoriesProps) {
  return (
    <FlatList
      style={styles.container}
      horizontal
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name == selected ? true : false}
          onPress={() => onChange(item.name)}
        />
      )}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
