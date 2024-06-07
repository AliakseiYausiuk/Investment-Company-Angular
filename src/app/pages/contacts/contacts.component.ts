import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-contacts',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.scss',
})
export class ContactsComponent {}
