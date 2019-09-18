import { Component, OnInit } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';

  ngOnInit(){
	$(".icono-bar").click(function () {
          $(".menu").toggleClass('menu-activado');
    });

  }
}
