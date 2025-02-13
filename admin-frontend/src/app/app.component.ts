import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const val = localStorage.getItem('colorMode')

    if(val){
      this.darkMode.set(val === "dark");
    }
  }

  setMode(val: string){
    localStorage.setItem('colorMode', val);
  }

  toggleMode(){
    if(this.darkMode()){
      this.setMode("light");
      this.darkMode.set(false);
    }
    else{
      this.setMode("dark");
      this.darkMode.set(true)
    }

  }

  title = 'admin-frontend';

  darkMode = signal<boolean>(false);
}