import { SharedService } from './../../services/shared.service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band.model';

@Component({
  selector: 'app-bandList',
  templateUrl: './bandList.component.html',
  styleUrls: ['./bandList.component.scss'],
})
export class BandListComponent implements OnInit {
  booleanBands: Array<Boolean> = [];

  allBands =  this.sharedService.getAllBands()
  mediaBands =  this.sharedService.mediaBands()

  constructor(private router:Router, private sharedService: SharedService) {}

  ngOnInit():void {
    this.booleanBands = this.sharedService.mediaBands()

  }

  mediaIcon(index: number) {
   this.sharedService.mediaIcon(index)
  }


}
