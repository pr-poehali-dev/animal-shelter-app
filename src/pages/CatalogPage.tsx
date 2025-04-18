import { useState } from "react";
import { AnimalsList } from "@/components/animals/AnimalsList";
import { AnimalFilter } from "@/components/animals/AnimalFilter";
import { animals } from "@/data/animals";

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    gender: "",
    size: "",
  });

  const filteredAnimals = animals.filter((animal) => {
    if (filters.type && animal.type !== filters.type) return false;
    if (filters.age && animal.age !== filters.age) return false;
    if (filters.gender && animal.gender !== filters.gender) return false;
    if (filters.size && animal.size !== filters.size) return false;
    return true;
  });

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Каталог животных</h1>
      <p className="text-muted-foreground mb-8">
        Найдите своего идеального питомца из нашей базы животных, ищущих новый дом.
        Вы можете отфильтровать животных по типу, возрасту, полу и размеру.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <AnimalFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="md:w-3/4">
          <AnimalsList animals={filteredAnimals} />
        </div>
      </div>
    </div>
  );
}
