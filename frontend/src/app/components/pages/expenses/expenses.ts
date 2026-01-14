import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpendsService } from '../../../services/spends.services';
import { Spend, SpendStatus } from '../../../../models/spends.model';
import { LabelComponent } from '../../atoms/label.component/label.component';
import { IconComponent } from '../../atoms/icon.component/icon.component';
import { SpendingTableComponent } from '../../molecules/spending-table.component/spending-table.component';

@Component({
  selector: 'app-expenses',
  imports: [CommonModule, RouterModule, LabelComponent, IconComponent, SpendingTableComponent],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css',
  standalone: true
})
export class Expenses implements OnInit {
  consortiumName: string = '';
  spends: Spend[] = [];
  
  totalSpends: number = 0;
  paidSpends: number = 0;
  pendingSpends: number = 0;

  constructor(
    private route: ActivatedRoute,
    private spendsService: SpendsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.consortiumName = params['consortiumName'];
      this.loadSpends();
    });
  }

  loadSpends() {
    this.spendsService.getAllSpends().subscribe({
      next: (data: Spend[]) => {
        this.spends = data;
        this.calculateBalances();
      },
      error: (error: any) => {
        console.error('Error loading spends:', error);
      }
    });
  }

  calculateBalances() {
    this.totalSpends = this.spends.reduce((sum, spend) => sum + spend.amount, 0);
    this.paidSpends = this.spends
      .filter(spend => spend.status === SpendStatus.PAID)
      .reduce((sum, spend) => sum + spend.amount, 0);
    this.pendingSpends = this.spends
      .filter(spend => spend.status === SpendStatus.PENDING)
      .reduce((sum, spend) => sum + spend.amount, 0);
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
