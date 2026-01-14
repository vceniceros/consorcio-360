import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LabelComponent } from '../../atoms/label.component/label.component';
import { SpendStatus } from '../../../../models/spends.model';

@Component({
  selector: 'app-expense-form',
  imports: [CommonModule, ReactiveFormsModule, LabelComponent],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css',
  standalone: true
})
export class ExpenseForm {
  @Input() form!: FormGroup;
  
  SpendStatus = SpendStatus;
  
  get date() { return this.form.get('date'); }
  get category() { return this.form.get('category'); }
  get description() { return this.form.get('description'); }
  get provider() { return this.form.get('provider'); }
  get amount() { return this.form.get('amount'); }
  get status() { return this.form.get('status'); }
}