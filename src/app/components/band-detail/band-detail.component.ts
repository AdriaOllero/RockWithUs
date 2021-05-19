import { Band } from 'src/app/models/band.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagePickerConf } from 'ngp-image-picker';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bandDetail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss'],
})
export class BandDetailComponent implements OnInit {
  booleanBands: Array<Boolean> = [];
  allBands = this.sharedService.getAllBands();
  mediaBands = this.sharedService.mediaBands();

  band: Band = new Band();

  customDisplay = false;
  edit = false;
  name = '';
  year = '';
  bio = '';
  photo = '';
  song = '';

  constructor(
    private sharedService: SharedService,
    private router: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      console.log(params.id);
      this.band = this.sharedService.getAllBands()[params.id];
    });
    this.booleanBands = this.sharedService.mediaBands();
  }

  editText() {
    if (this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }
  handleFileImage(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files.item(0));
    reader.onload = () => {
      this.photo = reader.result as string;
      console.log(this.photo);
    };
  }

  mediaIcon(index: number) {
    this.sharedService.mediaIcon(index);
  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '220px',
    height: '140px',
  };

  editBand(bandName: string, bandYear: string, bandBio: string) {
    this.router.params.subscribe((params) => {
      this.allBands[params.id] = {
        name: bandName,
        year: bandYear,
        bio: bandBio,
        song: this.song,
        photo: this.photo,
      };
      console.log(this.allBands[params.id]);
    });
    this.band.name = bandName;
    this.band.year = bandYear;
    this.band.bio = bandBio;
    this.band.photo = this.photo;
  }
  deleteBand() {
    this.router.params.subscribe((params) => {
      this.allBands.splice(params.id, 1);
    });
    this.routes.navigate(['/bandList']);
  }
}
