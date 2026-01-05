import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partner',
  imports: [FormsModule, CommonModule],
  templateUrl: './partner.html',
  styleUrl: './partner.css',
})
export class Partner {
  // text binding
  title = 'Our Partners'
  cta_message = 'Become a Sponsor'
  corporate = 'Our Corporate Partners';

  // using directives
  partners = [
    { name: 'TechNova Solutions', industry: 'Software', level: 'Platinum', since: 2020 },
    { name: 'Global Edu Group', industry: 'Education', level: 'Gold', since: 2018 },
    { name: 'GreenGrid Systems', industry: 'Renewable Energy', level: 'Silver', since: 2022 },
    { name: 'BioHealth Corp', industry: 'Healthcare', level: 'Platinum', since: 2019 },
    { name: 'Future Finance', industry: 'FinTech', level: 'Gold', since: 2021 }
  ];

  // Logic for dynamic styling
  getBadgeClass(level: string) {
    return {
      'badge-platinum': level === 'Platinum',
      'badge-gold': level === 'Gold',
      'badge-silver': level === 'Silver'
    };
  }

}
