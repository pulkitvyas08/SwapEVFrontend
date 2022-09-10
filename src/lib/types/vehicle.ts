export type Vehicle = {
  manufacturer: string;
  model: string;
  licenseNo: string;
  carPurchaseDate: Date;
  lastBatteryPurchase: Date;
  chargePercentage?: number;
};
