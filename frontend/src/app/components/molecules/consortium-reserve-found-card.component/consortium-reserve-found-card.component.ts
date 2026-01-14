import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveFund } from '../../../../models/dashboardSummary.model';
import { IconComponent } from '../../atoms/icon.component/icon.component';
import { LabelComponent } from '../../atoms/label.component/label.component';
import { PorcentageBarComponent } from '../../atoms/porcentage-bar.component/porcentage-bar.component';

@Component({
  selector: 'app-consortium-reserve-found-card',
  imports: [CommonModule, IconComponent, LabelComponent, PorcentageBarComponent],
  templateUrl: './consortium-reserve-found-card.component.html',
  styleUrl: './consortium-reserve-found-card.component.css',
  standalone: true
})
export class ConsortiumReserveFoundCardComponent {
  @Input() reserveFund!: ReserveFund;
}
