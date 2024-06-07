import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss',
})
export class ProductComponent {}
