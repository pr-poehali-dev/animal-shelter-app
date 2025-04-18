import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface AnimalFilterProps {
  filters: {
    type: string;
    age: string;
    gender: string;
    size: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      type: string;
      age: string;
      gender: string;
      size: string;
    }>
  >;
}

export function AnimalFilter({ filters, setFilters }: AnimalFilterProps) {
  const handleReset = () => {
    setFilters({
      type: "",
      age: "",
      gender: "",
      size: "",
    });
  };

  return (
    <div className="bg-card p-4 rounded-lg border shadow-sm">
      <h2 className="font-semibold text-lg mb-4">Фильтры</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="type">Тип животного</Label>
          <Select
            value={filters.type}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, type: value }))
            }
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Все типы</SelectItem>
              <SelectItem value="dog">Собаки</SelectItem>
              <SelectItem value="cat">Кошки</SelectItem>
              <SelectItem value="other">Другие</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Возраст</Label>
          <Select
            value={filters.age}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, age: value }))
            }
          >
            <SelectTrigger id="age">
              <SelectValue placeholder="Любой возраст" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Любой возраст</SelectItem>
              <SelectItem value="baby">Детёныш</SelectItem>
              <SelectItem value="young">Молодой</SelectItem>
              <SelectItem value="adult">Взрослый</SelectItem>
              <SelectItem value="senior">Пожилой</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Пол</Label>
          <Select
            value={filters.gender}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, gender: value }))
            }
          >
            <SelectTrigger id="gender">
              <SelectValue placeholder="Любой пол" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Любой пол</SelectItem>
              <SelectItem value="male">Мальчик</SelectItem>
              <SelectItem value="female">Девочка</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Размер</Label>
          <Select
            value={filters.size}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, size: value }))
            }
          >
            <SelectTrigger id="size">
              <SelectValue placeholder="Любой размер" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Любой размер</SelectItem>
              <SelectItem value="small">Маленький</SelectItem>
              <SelectItem value="medium">Средний</SelectItem>
              <SelectItem value="large">Большой</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" className="w-full" onClick={handleReset}>
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
}
