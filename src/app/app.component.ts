import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
    perfil = 'Perfil';
    profile = 'Profile';
    contacto = 'Contacto';
    contact = 'Contact';
    educacion = 'Educación';
    education = 'Education';
    habilidades = 'Habilidades';
    skills = 'Skills';
    experiencia = 'Experiencia';
    experince = 'Experience';
    lenguajes = 'Lenguajes';
    lenguagues = 'Lenguages';
    name = 'Denny Mabreth Paz Gameros'
    profesion = 'Ingeniera de desarrollo';
    profession = 'Development Engineer';
    more = 'More';
    mas = 'Más';
 
}
