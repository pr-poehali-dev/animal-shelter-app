import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Animal } from "@/types";

interface AnimalCardProps {
  animal: Animal;
  className?: string;
}

export default function AnimalCard({ animal, className }: AnimalCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="aspect-square relative">
        <img
          src={animal.imageUrl || "/placeholder.svg"}
          alt={animal.name}
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2">
          {animal.type === "dog" ? "Собака" : animal.type === "cat" ? "Кошка" : animal.type}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <CardTitle>{animal.name}</CardTitle>
        <CardDescription>
          {animal.breed || "Не указано"} • {animal.age || "Не указан"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span className="font-medium">Пол:</span>
            <span className="ml-1 text-muted-foreground">
              {animal.gender === "male" ? "Мальчик" : animal.gender === "female" ? "Девочка" : "Не указан"}
            </span>
          </div>
          <div>
            <span className="font-medium">Размер:</span>
            <span className="ml-1 text-muted-foreground">
              {animal.size === "small" ? "Маленький" : 
               animal.size === "medium" ? "Средний" : 
               animal.size === "large" ? "Большой" : "Не указан"}
            </span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {animal.description || "Описание отсутствует"}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild className="flex-1">
          <Link to={`/catalog/${animal.id}`}>Подробнее</Link>
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}
