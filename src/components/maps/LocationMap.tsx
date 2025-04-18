import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface LocationMapProps {
  location: { lat: number; lng: number };
  setLocation: (location: { lat: number; lng: number }) => void;
}

export default function LocationMap({ location, setLocation }: LocationMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Имитация загрузки карты
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // В реальном приложении здесь бы использовались API карт
    // Сейчас просто генерируем случайное смещение от текущих координат
    const randomOffset = () => (Math.random() - 0.5) * 0.01;
    
    setLocation({
      lat: location.lat + randomOffset(),
      lng: location.lng + randomOffset(),
    });
  };

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-end mb-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleUserLocation}
          className="text-xs"
        >
          <MapPin className="h-3 w-3 mr-1" />
          Моё местоположение
        </Button>
      </div>
      
      <div 
        className="border rounded-md aspect-video bg-accent relative overflow-hidden"
        onClick={handleMapClick}
      >
        {!mapLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        ) : (
          <>
            {/* Имитация карты */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlOWVjZWYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
            
            {/* Маркер на карте */}
            <div 
              className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 animate-bounce"
              style={{ 
                left: '50%',
                top: '50%',
              }}
            >
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            
            <div className="absolute bottom-2 right-2 bg-white/80 p-1 text-xs rounded">
              {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
            </div>
          </>
        )}
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        Нажмите на карту, чтобы выбрать точное местоположение животного
      </p>
    </div>
  );
}
