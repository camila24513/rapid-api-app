import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { IFilm, IVehicle } from '../../modelo/film-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-film',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-film.html',
  styleUrl: './detail-film.css'
})
export class DetailFilmComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  film: IFilm | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarDetalle(id);
    }
  }

  // Llama al MÉTODO 2: getFilmById
  cargarDetalle(id: string): void {
    this.filmService.getFilmById(id).subscribe({
      next: (data) => {
        this.film = data;
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo cargar la información de la película.'
        });
      }
    });
  }

  // Llama al MÉTODO 10: getVehicles
  verVehiculos(): void {
    this.filmService.getVehicles().subscribe({
      next: (data) => {
        const lista = data.map(v => `• <b>${v.name}</b> (${v.vehicle_class}): ${v.description}`).join('<br><br>');
        Swal.fire({
          title: 'Vehículos del Universo Ghibli',
          html: lista || 'No se encontraron vehículos.',
          icon: 'info',
          confirmButtonText: 'Cerrar'
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar los vehículos.'
        });
      }
    });
  }
}