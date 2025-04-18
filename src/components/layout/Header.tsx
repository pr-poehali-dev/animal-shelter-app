import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, Paw, Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Каталог", href: "/catalog", icon: <Paw className="mr-2 h-5 w-5" /> },
  { title: "Нашел животное", href: "/found", icon: <Heart className="mr-2 h-5 w-5" /> },
  { title: "Поддержка", href: "/support", icon: <Heart className="mr-2 h-5 w-5" /> },
  { title: "О нас", href: "/about", icon: <Users className="mr-2 h-5 w-5" /> },
];

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Paw className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Домашний приют</span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <Button variant="ghost" className="w-full justify-start">
                      {item.icon}
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center"
                )}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
