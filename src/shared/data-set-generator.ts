import { subDays } from 'date-fns';

const names = [
  'Bruce Wayne', 
  'Peter Parker', 
  'Tony Stark', 
  'Steve Rogers',
  'Helena Wayne',
  'Natasha Romanoff',
  'Shayera Thal',
  'Ororo Munroe',
  'Anna Marie',
  'Jean Grey'
];

class Base {
  randomNumber(n: number): number {
    return Math.floor(Math.random() * Math.floor(n));
  }
}

export class Customer extends Base {
  name: string = '';
  purchases: Purchase[] = [];

  constructor() {
    super();
    const amountOfPurchases = this.randomNumber(90);
    this.name = this.createName(names.length - 1);
    this.purchases = this.setPurchaseList(amountOfPurchases);
  }

  private setPurchaseList(amount: number): Purchase[] {
    const pList: Purchase[] = [];
    while (amount) {
      pList.push(new Purchase());
      amount--;
    }

    return pList;
  }

  private createName(n: number): string {
    return names[this.randomNumber(n)];
  }
}

export class Purchase extends Base {
  price: number = 0;
  points: number = 0;
  date: Date = new Date();

  constructor() {
    super();
    this.price = this.randomNumber(500);
    this.points = this.altCalc(this.price);
    this.date = this.createDate();
  }
  
  // could be consolidated to one liner but it's easier to read with if statements
  private createDate(): Date {
    return subDays(this.date, this.randomNumber(90));
  }
  private altCalc(price: number) {
    let points = 0;
    if (price > 50 && price <= 100) {
      points = price - 50;
    }
    if (price > 100) {
      points = ((price - 100) * 2) + 50;
    }
    return points;
  }

  private pointCalculation(price: number): number {
    let points = 0;
    let count = 0;

    if (price < 50) return 0;

    while (count !== price) {
      count++;
      if (count > 100) {
        points += 2;
      }
      if (count > 50 && count <= 100) { 
        points += 1;
      }
    }

    return points;
  }
}


