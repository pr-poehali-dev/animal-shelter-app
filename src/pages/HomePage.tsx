import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Cat } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero section */}
      <section className="container py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Найдите нового друга в нашем приюте
        </h1>
        <p className="text-lg text-muted-foreground max-w-[800px] mb-8">
          Мы помогаем бездомным животным обрести новый дом и заботимся о них, пока они ждут своих новых хозяев.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/catalog">
              <Cat className="mr-2 h-5 w-5" />
              Смотреть животных
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/support">
              <Heart className="mr-2 h-5 w-5" />
              Поддержать приют
            </Link>
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
            Как мы помогаем животным
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Cat className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Каталог животных</h3>
                <p className="text-muted-foreground mb-4">
                  Найдите своего идеального питомца из нашей базы животных, ищущих новый дом.
                </p>
                <Button asChild variant="secondary">
                  <Link to="/catalog">Перейти в каталог</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Нашли животное?</h3>
                <p className="text-muted-foreground mb-4">
                  Если вы нашли бездомное животное, сообщите нам о нём, и мы поможем ему.
                </p>
                <Button asChild variant="secondary">
                  <Link to="/found">Сообщить о находке</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Поддержите нас</h3>
                <p className="text-muted-foreground mb-4">
                  Ваша поддержка помогает нам заботиться о животных и находить им новый дом.
                </p>
                <Button asChild variant="secondary">
                  <Link to="/support">Поддержать</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="container py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">О нашем приюте</h2>
            <p className="mb-4 text-muted-foreground">
              Наш приют для животных работает с 2010 года и за это время мы помогли более 5000 животных найти новый дом.
            </p>
            <p className="mb-6 text-muted-foreground">
              Мы обеспечиваем всех наших подопечных качественным питанием, ветеринарной помощью и заботой, пока они ждут своих новых хозяев.
            </p>
            <Button asChild>
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="Приют для животных" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
