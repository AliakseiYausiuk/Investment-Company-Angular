import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-offers',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './offers.component.html',
	styleUrl: './offers.component.scss',
})
export class OffersComponent {}
