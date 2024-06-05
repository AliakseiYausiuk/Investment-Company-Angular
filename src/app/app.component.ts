import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TechSystemComponent } from './pages/tech-system/tech-system.component';
import { ProductComponent } from './pages/product/product.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MainPageComponent,
		TechSystemComponent,
		ProductComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'investment-company-angular';
}
