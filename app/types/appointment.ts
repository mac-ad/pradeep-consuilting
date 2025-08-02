export interface AppointmentData {
  id: string; // ObjectId as string
  name: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  branch: string;
  date: string; // You can change this to Date if you later update the schema
  time: string;
  stripeSessionId: string;
  paymentAmount: number;
  paymentStatus: string; // e.g., "paid", "unpaid"
  appointment_status: string; // e.g., "pending", "confirmed", etc.
  createdAt: Date;
  updatedAt: Date;
}
