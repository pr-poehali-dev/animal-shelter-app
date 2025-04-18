export interface Animal {
  id: string;
  name: string;
  type: string; // "dog", "cat", "other"
  breed?: string;
  age?: string; // "baby", "young", "adult", "senior"
  gender?: string; // "male", "female"
  size?: string; // "small", "medium", "large"
  color?: string;
  description?: string;
  imageUrl?: string;
  arrivalDate?: string;
  story?: string;
  traits?: string[];
  goodWithChildren?: boolean;
  goodWithDogs?: boolean;
  goodWithCats?: boolean;
  vaccinated?: boolean;
  neutered?: boolean;
  specialNeeds?: string;
  careRecommendations?: string;
}

export interface AdoptionApplication {
  id: string;
  animalId: string;
  applicantName: string;
  applicantPhone: string;
  applicantEmail: string;
  applicantAddress: string;
  status: "pending" | "approved" | "rejected";
  submissionDate: string;
  notes?: string;
}

export interface FoundAnimalReport {
  id: string;
  reporterName: string;
  reporterPhone: string;
  reporterEmail: string;
  animalType: string;
  animalDescription: string;
  location: {
    lat: number;
    lng: number;
  };
  reportDate: string;
  status: "new" | "processing" | "resolved";
}
