import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import { FestivalService } from '../festival.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  id = signal<number>(0);
  string = signal<number>(0);
  festivalName = signal<string>("Overview")
  
  constructor(private route: ActivatedRoute, private router: Router, private festivalService: FestivalService) {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    effect(async () => {
      if(!Number.isNaN(this.id())){
        this.festivalName.set((await festivalService.getFestival(this.id())).name)
      }
    })

    iconRegistry.addSvgIconLiteral(
      'arrow-down',
      sanitizer.bypassSecurityTrustHtml(
        `<svg xmlns="http://www.w3.org/2000/svg" color="white" id="Outline" viewBox="0 0 24 24" width="512" height="512">
         <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
       </svg>`
      )
    );
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const i = this.router.url.toLowerCase();

      const parts = this.router.url.split('/');

      this.id.set(parseInt(parts[parts.length-1]));

      if (i.includes("content")) {
        this.string.set(0);
      } else if (i.includes("social")) {
        this.string.set(1);
      } else if (i.includes("statistic")) {
        this.string.set(2);
      }
    });
  }

  goTo(path: string) {
    console.log(this.id());
    this.router.navigateByUrl(`${path}/` + this.id());
  }
}
