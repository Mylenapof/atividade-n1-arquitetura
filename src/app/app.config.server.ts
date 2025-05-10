import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([]), // Por enquanto não temos rotas, então deixamos o array vazio
    importProvidersFrom(CommonModule, FormsModule)
  ]
};