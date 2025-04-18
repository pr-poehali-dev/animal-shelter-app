import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Heart, Info, Map, MapPin } from "lucide-react";
import { animals } from "@/data/animals";
import LocationMap from "@/components/maps/LocationMap";
import { useState } from "react";
import { toast } from "sonner";

export default function AnimalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [location, setLocation] = useState({ lat: 55.755819, lng: 37.617644 });
  
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Животное не найдено</h1>
        <p className="text-muted-foreground mb-8">
          К сожалению, информация о запрошенном животном отсутствует.
        </p>
        <Button asChild>
          <Link to="/catalog">Вернуться в каталог</Link>
        </Button>
      </div>
    );
  }

  const handleAdopt = () => {
    toast.success("Заявка на опеку отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="container py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/catalog" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться в каталог
        </Link>
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <img
            src={animal.imageUrl || "/placeholder.svg"}
            alt={animal.name}
            className="object-cover w-full h-full"
          />
          <Badge className="absolute top-4 right-4 text-sm">
            {animal.type === "dog" ? "Собака" : animal.type === "cat" ? "Кошка" : animal.type}
          </Badge>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{animal.name}</h1>
          <p className="text-muted-foreground mb-6">
            {animal.breed || "Порода не указана"} • {animal.age || "Возраст не указан"}
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 mb-6">
            <div>
              <span className="text-muted-foreground">Пол:</span>
              <span className="font-medium ml-2">
                {animal.gender === "male" ? "Мальчик" : 
                animal.gender === "female" ? "Девочка" : "Не указан"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Размер:</span>
              <span className="font-medium ml-2">
                {animal.size === "small" ? "Маленький" : 
                animal.size === "medium" ? "Средний" : 
                animal.size === "large" ? "Большой" : "Не указан"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Окрас:</span>
              <span className="font-medium ml-2">
                {animal.color || "Не указан"}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">В приюте с:</span>
              <span className="font-medium ml-2">
                {animal.arrivalDate || "Не указано"}
              </span>
            </div>
          </div>
          
          <p className="mb-6">{animal.description || "Описание отсутствует"}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={handleAdopt}>
              <Heart className="mr-2 h-5 w-5" />
              Оставить заявку на опеку
            </Button>
            <Button variant="outline" size="lg">
              <MapPin className="mr-2 h-5 w-5" />
              Посетить в приюте
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="about" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="h-4 w-4" /> О питомце
          </TabsTrigger>
          <TabsTrigger value="health" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Здоровье
          </TabsTrigger>
          <TabsTrigger value="location" className="flex items-center gap-2">
            <Map className="h-4 w-4" /> Где находится
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="about" className="pt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">История питомца</h3>
              <p className="mb-4 text-muted-foreground">
                {animal.story || `${animal.name} ждет своего хозяина в нашем приюте. 
                Этот замечательный питомец будет отличным другом и компаньоном для вас и вашей семьи.`}
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-4">Характер</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {(animal.traits || ["Дружелюбный", "Активный", "Игривый"]).map((trait, index) => (
                  <Badge key={index} variant="secondary">{trait}</Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-4">Совместимость</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="font-medium mb-2">С детьми</p>
                  <p className="text-muted-foreground">
                    {animal.goodWithChildren ? "Хорошо" : "Не определено"}
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="font-medium mb-2">С собаками</p>
                  <p className="text-muted-foreground">
                    {animal.goodWithDogs ? "Хорошо" : "Не определено"}
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <p className="font-medium mb-2">С кошками</p>
                  <p className="text-muted-foreground">
                    {animal.goodWithCats ? "Хорошо" : "Не определено"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health" className="pt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Медицинская информация</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Вакцинация</h4>
                  <p className="text-muted-foreground">
                    {animal.vaccinated ? "Полностью вакцинирован(а)" : "Информация о вакцинации отсутствует"}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Стерилизация/Кастрация</h4>
                  <p className="text-muted-foreground">
                    {animal.neutered ? "Проведена" : "Не проведена/Информация отсутствует"}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Особые потребности</h4>
                  <p className="text-muted-foreground">
                    {animal.specialNeeds || "Особых потребностей нет"}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Рекомендации по уходу</h4>
                  <p className="text-muted-foreground">
                    {animal.careRecommendations || "Стандартный уход за питомцем"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="location" className="pt-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Местонахождение</h3>
              <p className="mb-6 text-muted-foreground">
                В настоящее время {animal.name} находится в нашем приюте по адресу:
                г. Москва, ул. Пушкина, д. 10
              </p>
              
              <LocationMap location={location} setLocation={setLocation} />
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Часы посещения</h4>
                <p className="text-muted-foreground">
                  Пн-Пт: 10:00 - 19:00<br />
                  Сб-Вс: 10:00 - 18:00
                </p>
                
                <p className="mt-4 text-sm text-muted-foreground">
                  Для посещения питомца необходимо предварительно записаться по телефону
                </p>
                
                <Button className="mt-4">
                  <Phone className="mr-2 h-4 w-4" />
                  Записаться на посещение
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
