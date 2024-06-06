import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TechSystemComponent } from './pages/tech-system/tech-system.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewsComponent } from './pages/news/news.component';
import { OffersComponent } from './pages/offers/offers.component';
import { PrinciplesComponent } from './pages/principles/principles.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { SchemeComponent } from './pages/scheme/scheme.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MainPageComponent,
		TechSystemComponent,
		ProductComponent,
		AboutComponent,
		AuthorsComponent,
		ContactsComponent,
		NewsComponent,
		OffersComponent,
		PrinciplesComponent,
		ProgramsComponent,
		SchemeComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'investment-company-angular';
}
