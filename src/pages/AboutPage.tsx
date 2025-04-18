import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Heart, Phone, ThumbsUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">О нашем приюте</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4">
            Наш приют для бездомных животных был основан в 2010 году группой энтузиастов, 
            неравнодушных к судьбе бездомных животных.
          </p>
          <p className="text-lg mb-4">
            За годы работы мы помогли более 5000 животным найти новый дом и заботливых хозяев. 
            Ежедневно наши сотрудники и волонтёры заботятся о более чем 100 животных, 
            обеспечивая их кормом, медицинской помощью и уютом.
          </p>
          <p className="text-lg mb-6">
            Мы верим, что каждое животное заслуживает любящего дома и делаем всё возможное, 
            чтобы помочь им в этом.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/catalog">
                <Heart className="mr-2 h-5 w-5" />
                Найти питомца
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/support">
                <ThumbsUp className="mr-2 h-5 w-5" />
                Поддержать приют
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <img
            src="/placeholder.svg"
            alt="Приют для животных"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold tracking-tight mb-6">Наша команда</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {["Иван Петров", "Мария Иванова", "Алексей Сидоров"].map((name, index) => (
          <Card key={index}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-muted-foreground">
                {index === 0 ? "Директор" : index === 1 ? "Ветеринар" : "Координатор волонтёров"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold tracking-tight mb-6">Как нас найти</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Карта загружается...</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
          <div className="space-y-4">
            <p className="flex items-start gap-2">
              <span className="mt-1"><Phone className="h-5 w-5 text-primary" /></span>
              <span>
                <strong>Телефон:</strong><br />
                +7 (900) 123-45-67
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="mt-1"><Heart className="h-5 w-5 text-primary" /></span>
              <span>
                <strong>Адрес:</strong><br />
                г. Москва, ул. Пушкина, д. 10<br />
                Пн-Вс: 10:00 - 18:00
              </span>
            </p>
          </div>
          <div className="mt-6">
            <Button asChild>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Построить маршрут
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
