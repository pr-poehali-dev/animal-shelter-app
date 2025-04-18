import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Paw, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Paw className="h-6 w-6" />
              <span className="font-bold text-lg">Домашний приют</span>
            </div>
            <p className="text-sm">
              Наша миссия - помочь бездомным животным найти новый дом и любящую семью.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                г. Москва, ул. Пушкина, д. 10
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +7 (900) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@domashniy-priyut.ru
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="flex items-center gap-2 hover:underline">
                  <Paw className="h-4 w-4" />
                  Каталог животных
                </Link>
              </li>
              <li>
                <Link to="/found" className="flex items-center gap-2 hover:underline">
                  <Heart className="h-4 w-4" />
                  Нашел животное
                </Link>
              </li>
              <li>
                <Link to="/support" className="flex items-center gap-2 hover:underline">
                  <Heart className="h-4 w-4" />
                  Поддержка
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:underline">
                  <Heart className="h-4 w-4" />
                  О нас
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm">
          © {new Date().getFullYear()} Домашний приют. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
