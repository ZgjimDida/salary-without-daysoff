import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  salaryForm: number = 0;
  baseSalary: number = 0;
  calculatedSalary: number = 0;
  workingDays: number = 260;
  daysOff: number = 20;

  changeSalaryForm(): void{
    this.baseSalary = 0;
    this.calculatedSalary = 0;
  }

  calculateNewSalary(): void{
      this.calculatedSalary = this.baseSalary / this.workingDays * (this.workingDays - this.daysOff);
  }
}
