import { Component } from '@angular/core';
import { BurgerComponent } from '../burger/burger.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [BurgerComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {}
