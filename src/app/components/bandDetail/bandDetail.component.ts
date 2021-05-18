import { Band } from 'src/app/models/band.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandDetail',
  templateUrl: './bandDetail.component.html',
  styleUrls: ['./bandDetail.component.scss'],
})
export class BandDetailComponent implements OnInit {
  booleanBands: Array<Boolean> = [];
  allBands = this.sharedService.getAllBands();
  mediaBands = this.sharedService.mediaBands();
  band: Band = new Band();
  constructor(
    private sharedService: SharedService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params.id);
      this.band = this.sharedService.getAllBands()[params.id]
    });
    this.booleanBands = this.sharedService.mediaBands();
  }
  mediaIcon(index: number) {
    this.sharedService.mediaIcon(index);
  }
}
