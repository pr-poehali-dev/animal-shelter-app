import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin } from "lucide-react";
import LocationMap from "@/components/maps/LocationMap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FoundAnimalPage() {
  const [location, setLocation] = useState({ lat: 55.755819, lng: 37.617644 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    animalType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за информацию! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      animalType: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Нашли животное?</h1>
      <p className="text-muted-foreground mb-8">
        Если вы нашли бездомное животное, пожалуйста, заполните форму ниже.
        Мы свяжемся с вами, чтобы помочь животному.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="animalType">Тип животного</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange("animalType", value)}
                  value={formData.animalType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип животного" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Собака</SelectItem>
                    <SelectItem value="cat">Кошка</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Описание животного</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Опишите животное (порода, цвет, примерный возраст, особые приметы)"
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">Отправить информацию</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Укажите место, где вы нашли животное</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Нажмите на карту, чтобы отметить местоположение животного
          </p>
          <LocationMap location={location} setLocation={setLocation} />
          <div className="text-sm text-muted-foreground">
            Выбранные координаты: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
          </div>
        </div>
      </div>
    </div>
  );
}
