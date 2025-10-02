export interface FormData {
  name: string;
  phone: string;
  email: string;
  farmSize: string;
  chickenType: string;
  location: string;
  notes: string;
}

export enum ChickenType {
  BROILER = 'Gà thịt',
  LAYER = 'Gà đẻ',
  NATIVE = 'Gà thả vườn/Gà ta',
  OTHER = 'Loại khác'
}