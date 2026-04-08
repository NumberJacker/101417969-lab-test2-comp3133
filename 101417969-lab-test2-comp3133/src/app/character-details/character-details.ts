import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-character-details',
  imports: [CommonModule],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css',
})
export class CharacterDetails implements OnInit {

  character: any = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route id:', id);
    this.http.get<any[]>('https://hp-api.onrender.com/api/characters')
      .subscribe(data => {
        this.character = data.find(c => String(c.id) === String(id));
        this.cdr.markForCheck();
        console.log('Found character:', this.character);
      });
  }

}
