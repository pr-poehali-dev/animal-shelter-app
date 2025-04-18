import AnimalCard from "./AnimalCard";
import { Animal } from "@/types";

interface AnimalsListProps {
  animals: Animal[];
}

export function AnimalsList({ animals }: AnimalsListProps) {
  if (animals.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">Животные не найдены</h3>
        <p className="text-muted-foreground">
          Попробуйте изменить параметры фильтрации или вернитесь позже.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
