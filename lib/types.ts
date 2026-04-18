export type Language = 'ar' | 'en';
export type ThemeMode = 'light' | 'dark';

export type Device = {
  id: string;
  brand: string;
  model: string;
  ram: string;
  cpu: string;
  storage: string;
  gpu: string;
  battery: string;
  price: number;
  os: 'Windows' | 'macOS';
  image: string;
  buy_link: string;
  portabilityScore: number;
  batteryScore: number;
  performanceScore: number;
  valueScore: number;
  displayScore: number;
};

export type User = {
  name: string;
  email: string;
  password: string;
  university: string;
  major: string;
};

export type QuizAnswers = {
  major: string;
  budget: number;
  usage: string;
  os: string;
  portability: string;
  battery: string;
  heavySoftware: string;
  preference: string;
  lifespan: string;
};

export type Recommendation = {
  device: Device;
  score: number;
  reason: string;
};
