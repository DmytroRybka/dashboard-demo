export interface EarlyAccessSubmission {
  email: string;
  useCase: 'hotel' | 'airbnb' | 'child-room' | 'other';
  preferredPrice: '€49' | '€79' | '€99' | 'not-sure';
  submittedAt: string;
}
