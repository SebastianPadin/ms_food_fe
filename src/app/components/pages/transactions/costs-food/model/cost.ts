export interface FoodCost {
  idFoodCosts: number;
  weekNumber: string;
  foodId : number;
  gramsPerChicken: string;
  totalKg: string;
  totalCost: string;
  startDate: Date;
  endDate: Date;
  status: string;
}

export interface InsertCost {
  weekNumber: string;
  foodId : number;
  gramsPerChicken: string;
  totalKg: string;
  totalCost: string;
  startDate: Date;
  endDate: Date;
}

export interface UpdateCost {
  idFoodCosts: number;
  weekNumber: string;
  foodId : string | number;
  gramsPerChicken: string;
  totalKg: string;
  totalCost: string;
  startDate: Date;
  endDate: Date;
}
