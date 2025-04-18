import { Animal } from "@/types";

export const animals: Animal[] = [
  {
    id: "1",
    name: "Барсик",
    type: "cat",
    breed: "Сибирская",
    age: "young",
    gender: "male",
    size: "medium",
    color: "Серый с белым",
    description: "Барсик - очень ласковый и игривый кот. Любит общение с людьми и другими животными.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "01.02.2023",
    story: "Барсик был найден на улице волонтерами нашего приюта. Несмотря на трудное начало жизни, он очень дружелюбный и ласковый кот.",
    traits: ["Ласковый", "Игривый", "Дружелюбный"],
    goodWithChildren: true,
    goodWithDogs: true,
    goodWithCats: true,
    vaccinated: true,
    neutered: true
  },
  {
    id: "2",
    name: "Рекс",
    type: "dog",
    breed: "Немецкая овчарка",
    age: "adult",
    gender: "male",
    size: "large",
    color: "Черно-коричневый",
    description: "Рекс - умный и преданный пес. Хорошо поддается дрессировке и любит активные игры.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "15.03.2023",
    traits: ["Умный", "Преданный", "Активный"],
    goodWithChildren: true,
    goodWithDogs: true,
    goodWithCats: false,
    vaccinated: true,
    neutered: true
  },
  {
    id: "3",
    name: "Муся",
    type: "cat",
    breed: "Британская короткошерстная",
    age: "senior",
    gender: "female",
    size: "small",
    color: "Серый",
    description: "Муся - спокойная и ласковая кошка. Любит тишину и уют, предпочитает спокойный образ жизни.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "10.01.2023",
    traits: ["Спокойная", "Ласковая", "Независимая"],
    goodWithChildren: false,
    goodWithDogs: false,
    goodWithCats: true,
    vaccinated: true,
    neutered: true
  },
  {
    id: "4",
    name: "Шарик",
    type: "dog",
    breed: "Дворняжка",
    age: "young",
    gender: "male",
    size: "medium",
    color: "Рыжий",
    description: "Шарик - веселый и энергичный пес. Обожает бегать и играть с мячом.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "05.04.2023",
    traits: ["Веселый", "Энергичный", "Игривый"],
    goodWithChildren: true,
    goodWithDogs: true,
    goodWithCats: true,
    vaccinated: true,
    neutered: false
  },
  {
    id: "5",
    name: "Пушок",
    type: "cat",
    breed: "Мейн-кун",
    age: "young",
    gender: "male",
    size: "large",
    color: "Рыжий с белым",
    description: "Пушок - общительный и ласковый кот с роскошной шерстью. Любит внимание и ласку.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "20.02.2023",
    traits: ["Общительный", "Ласковый", "Красивый"],
    goodWithChildren: true,
    goodWithDogs: false,
    goodWithCats: true,
    vaccinated: true,
    neutered: true
  },
  {
    id: "6",
    name: "Белка",
    type: "dog",
    breed: "Джек-рассел-терьер",
    age: "adult",
    gender: "female",
    size: "small",
    color: "Белый с коричневым",
    description: "Белка - активная и умная собака. Обожает играть и бегать, очень привязана к людям.",
    imageUrl: "/placeholder.svg",
    arrivalDate: "15.05.2023",
    traits: ["Активная", "Умная", "Преданная"],
    goodWithChildren: true,
    goodWithDogs: true,
    goodWithCats: false,
    vaccinated: true,
    neutered: true
  }
];
