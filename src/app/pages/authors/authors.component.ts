import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-authors',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './authors.component.html',
	styleUrl: './authors.component.scss',
})
export class AuthorsComponent {}
