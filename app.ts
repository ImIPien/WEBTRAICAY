import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from "./header/header";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookService } from './Services/fruit-service';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab6_2');
  private bookService = inject(BookService);
  private router = inject(Router);
  
  onSearch(query: string) {
    this.bookService.onSearch(query);
  }

  isDashboardPage(): boolean {
    const url = this.router.url;
    return url.includes('dashboard') || url.includes('employees');
  }
}
