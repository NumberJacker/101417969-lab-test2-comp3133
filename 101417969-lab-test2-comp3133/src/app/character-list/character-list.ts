
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css',
})
export class CharacterList implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  houses: string[] = [];
  selectedHouse: string = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
      .subscribe(data => {
        this.characters = data;
        this.filteredCharacters = data;
        this.houses = Array.from(new Set(data.map(c => c.house).filter(h => h)));
        this.cdr.markForCheck();
      });
  }

  filterByHouse() {
    if (!this.selectedHouse) {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(c => c.house === this.selectedHouse);
    }
  }
}
