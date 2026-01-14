import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spend } from '../../../../models/spends.model';
import { LabelComponent } from '../../atoms/label.component/label.component';
import { IconComponent } from '../../atoms/icon.component/icon.component';

@Component({
  selector: 'app-spending-table',
  imports: [CommonModule, LabelComponent, IconComponent],
  templateUrl: './spending-table.component.html',
  styleUrl: './spending-table.component.css',
  standalone: true
})
export class SpendingTableComponent {
  @Input() spends!: Spend[];

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
}
