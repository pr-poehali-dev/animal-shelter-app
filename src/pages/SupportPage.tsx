import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ThumbsUp, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function SupportPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за вашу поддержку!");
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Поддержать приют</h1>
      <p className="text-muted-foreground mb-8">
        Ваша поддержка помогает нам заботиться о бездомных животных и находить им новый дом.
        Вы можете поддержать приют финансово или волонтёрством.
      </p>

      <Tabs defaultValue="donate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="donate" className="flex items-center gap-2">
            <Heart className="h-4 w-4" /> Финансовая помощь
          </TabsTrigger>
          <TabsTrigger value="volunteer" className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" /> Волонтёрство
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="donate" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Разовое пожертвование</CardTitle>
                <CardDescription>Помочь один раз</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма</Label>
                    <Select defaultValue="1000">
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сумму" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100 ₽</SelectItem>
                        <SelectItem value="500">500 ₽</SelectItem>
                        <SelectItem value="1000">1000 ₽</SelectItem>
                        <SelectItem value="5000">5000 ₽</SelectItem>
                        <SelectItem value="custom">Другая сумма</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Поддержать</Button>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Ежемесячная поддержка</CardTitle>
                <CardDescription>Помогать регулярно</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма в месяц</Label>
                    <Select defaultValue="500">
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сумму" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100 ₽</SelectItem>
                        <SelectItem value="500">500 ₽</SelectItem>
                        <SelectItem value="1000">1000 ₽</SelectItem>
                        <SelectItem value="5000">5000 ₽</SelectItem>
                        <SelectItem value="custom">Другая сумма</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">Подписаться</Button>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Материальная помощь</CardTitle>
                <CardDescription>Привезти вещи, корм и др.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Что нам нужно:</h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                    <li>Корм для кошек и собак</li>
                    <li>Наполнители для лотков</li>
                    <li>Лекарства</li>
                    <li>Пеленки и полотенца</li>
                    <li>Игрушки для животных</li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full">Узнать адрес</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="volunteer" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Стать волонтёром
              </CardTitle>
              <CardDescription>
                Мы всегда рады новым волонтёрам, которые готовы помочь нашим животным
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="helpType">Как вы хотите помочь</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вариант" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="walking">Выгул собак</SelectItem>
                        <SelectItem value="cleaning">Уборка помещений</SelectItem>
                        <SelectItem value="transport">Транспортировка животных</SelectItem>
                        <SelectItem value="events">Помощь на мероприятиях</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Дополнительная информация" />
                </div>
                <Button type="submit">Отправить заявку</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
