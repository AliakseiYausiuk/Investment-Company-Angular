import { Component } from '@angular/core';
import { BurgerComponent } from '../burger/burger.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [BurgerComponent, NgOptimizedImage],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {}
