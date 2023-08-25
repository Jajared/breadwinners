export interface UserInformation {
  Name: string;
  EmailAddress: string;
  UserType: "Customer" | "Establishment";
}

export interface FoodItem {
  itemId: string;
  establishmentId: string;
  establishmentName: string;
  foodName: string;
  timeOfPost: number;
  stillAvailable: boolean;
  dietaryRestriction: string;
  pictureURL: string;
  latitude: number;
  longitude: number;
}
