export interface Employee {
    id: number;
    name: string;
    position: string;
    contractDuration: string;
    contractPeriod: string;
    status: 'Active' | 'Expired';
    image: string;
    progress:number;
  }