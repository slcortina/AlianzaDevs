import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Goku",
    "Cabelleros del Zodiaco",
    "Super Campeones",
  ]);

  const AddNewCategory = (newCategory) => {
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => AddNewCategory(value)} />
      <ol>
        {categories.map((c) => (
          <ul key={c}>{c}</ul>
        ))}
      </ol>
    </>
  );
};
