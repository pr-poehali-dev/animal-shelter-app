import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getAnimalById } from "@/data/animals";
import { Animal } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdoptionForm from "@/components/forms/AdoptionForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AdoptPage = () => {
  const { id } = useParams<{ id: string }>();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Имитация загрузки данных с сервера
    const fetchAnimal = async () => {
      setLoading(true);
      try {
        // Задержка для имитации загрузки
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundAnimal = id ? getAnimalById(id) : undefined;
        
        if (foundAnimal) {
          if (foundAnimal.status !== "available") {
            // Если животное не доступно для опеки, редирект на страницу с информацией
            navigate(`/animal/${id}`, { replace: true });
            return;
          }
          
          setAnimal(foundAnimal);
        } else {
          // Если животное не найдено, редирект на страницу каталога
          navigate("/catalog", { replace: true });
        }
      } catch (error) {
        console.error("Error fetching animal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id, navigate]);

  const handleSuccess = () => {
    setSuccess(true);
    // Прокрутка страницы вверх
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-8 flex justify-center items-center">
          <div className="text-center">
            <div className="animate-pulse h-32 w-32 rounded-full bg-primary/20 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Загрузка...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!animal) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Животное не найдено</h1>
            <Button asChild>
              <Link to="/catalog">Вернуться в каталог</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link to={`/animal/${animal.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к информации о питомце
          </Link>
        </Button>

        {success ? (
          <div className="mx-auto max-w-md text-center bg-primary/10 p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-primary">Спасибо за вашу заявку!</h1>
            <p className="mb-6">
              Мы получили вашу заявку на опеку {animal.name}. 
              Наши сотрудники свяжутся с вами в ближайшее время для уточнения деталей и организации встречи.
            </p>
            <Button asChild>
              <Link to="/catalog">Смотреть других животных</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-4">Заявка на опеку</h1>
              <div className="flex items-center mb-6">
                <img
                  src={animal.imageUrl || "/placeholder.svg"}
                  alt={animal.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-xl font-medium">{animal.name}</h2>
                  <p className="text-muted-foreground">
                    {animal.species === "dog" ? "Собака" : animal.species === "cat" ? "Кошка" : "Другое"} 
                    {animal.breed ? `, ${animal.breed}` : ""}
                    {animal.age ? `, ${animal.age} лет` : ""}
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg mb-6">
                <h3 className="font-medium mb-2">Процесс опеки</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Заполните форму заявки</li>
                  <li>Наши сотрудники свяжутся с вами для уточнения информации</li>
                  <li>Организация встречи с животным</li>
                  <li>Подписание документов</li>
                  <li>Забираете питомца домой</li>
                </ol>
              </div>
            </div>
            
            <div>
              <AdoptionForm animal={animal} onSuccess={handleSuccess} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdoptPage;
