import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-info-window-content',
  templateUrl: './info-window-content.component.html',
  styleUrls: ['./info-window-content.component.css']
})
export class InfoWindowContentComponent implements OnInit {
    @Input('model') model:string;
  constructor() { }

  ngOnInit() {
  }

}
