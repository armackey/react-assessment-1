import { subDays, getTime, getMonth } from 'date-fns';

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

export class Purchase extends Base {
  price: number = 0;
  points: number = 0;
  date: Date = new Date();

  constructor() {
    super();
    this.price = this.randomNumber(500);
    this.points = this.pointCalculation(this.price);
    this.date = this.createDate();
  }

  private createDate(): Date {
    return subDays(this.date, this.randomNumber(90));
  }

  // could be consolidated to one liner but it's easier to read with if statements
  private pointCalculation(price: number) {
    let points = 0;
    if (price > 50 && price <= 100) {
      points = price - 50;
    }
    if (price > 100) {
      points = ((price - 100) * 2) + 50;
    }
    return points;
  }
}


class Month {
  id: number | null = null;
  totalPoints: number = 0;
  purchases: Purchase[] = [];

  constructor(private date: Date) {
    this.id = getMonth(date);
  }
  addPoints(points: number): void {
    this.totalPoints += points;
  }
  addPurchase(item: Purchase) {
    this.purchases = [ ...this.purchases, item ];
  }
}

export class Customer extends Base {
  name: string = '';
  months: Month[] = [];
  totalPoints: number = 0;

  constructor() {
    super();
    const amountOfPurchases = this.randomNumber(40);
    this.name = this.createName(names.length - 1);
    const purchases = this.setPurchaseList(amountOfPurchases);
    purchases.map(p => {
      const month = new Month(p.date);
      const foundMonth = this.findMonth(month);
      if (!foundMonth) {
        month.addPoints(p.points);
        month.addPurchase(p);
        this.months.push(month);
      } else {
        
        foundMonth.addPoints(p.points);
        foundMonth.addPurchase(p);
      }
    });
    this.totalPoints = this.months.reduce((prev, curr) => (prev + curr.totalPoints), 0);
  }

  private findMonth(month: Month): Month | undefined {
    return this.months.find(m => m.id === month.id);
  }

  private sortByDate(purchases: Purchase[]): Purchase[] {
    const list = purchases.sort((a, b) => getTime(a.date) - getTime(b.date));
    return list;
  }

  private setPurchaseList(amount: number): Purchase[] {
    const pList: Purchase[] = [];
    while (amount) {
      pList.push(new Purchase());
      amount--;
    }

    return this.sortByDate(pList);
  }

  private createName(n: number): string {
    return names[this.randomNumber(n)];
  }
}
