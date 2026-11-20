
export interface RSVPFormData {
  guestName: string;
  email: string;
  attending: 'yes' | 'no' | '';
  hasPlusOne: 'yes' | 'no' | '';
  plusOneName: string;
  dietaryRestrictions: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
