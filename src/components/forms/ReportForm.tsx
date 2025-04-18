import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import LocationMap from "@/components/maps/LocationMap";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  species: z.enum(["dog", "cat", "other"], {
    required_error: "Выберите вид животного",
  }),
  description: z.string().min(10, "Опишите животное и ситуацию подробнее"),
  contactName: z.string().min(2, "Укажите Ваше имя"),
  contactPhone: z.string().min(10, "Укажите корректный номер телефона"),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }, {
    required_error: "Укажите местоположение на карте",
  }),
});

interface ReportFormProps {
  onSuccess?: () => void;
}

const ReportForm = ({ onSuccess }: ReportFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      contactName: "",
      contactPhone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Имитация отправки запроса на сервер
    try {
      // В реальном приложении здесь был бы запрос к API
      console.log("Submitting report:", {
        species: values.species,
        description: values.description,
        location: values.location,
        contactInfo: {
          name: values.contactName,
          phone: values.contactPhone,
        },
      });
      
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за вашу помощь. Мы проверим информацию.",
      });
      
      form.reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Пожалуйста, попробуйте еще раз позже",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLocationSelect = (location: { lat: number; lng: number }) => {
    form.setValue("location", location, { shouldValidate: true });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="species"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Вид животного</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вид животного" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dog">Собака</SelectItem>
                      <SelectItem value="cat">Кошка</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание животного и ситуации</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите внешний вид животного, его состояние и где вы его видели" 
                      {...field} 
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormItem>
              <FormLabel>Местоположение</FormLabel>
              <FormControl>
                <LocationMap onLocationSelect={handleLocationSelect} />
              </FormControl>
              {form.formState.errors.location && (
                <FormMessage>{form.formState.errors.location.message}</FormMessage>
              )}
            </FormItem>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ваше имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон для связи</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (999) 123-45-67" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить сообщение"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReportForm;