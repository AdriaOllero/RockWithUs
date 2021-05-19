import { Band } from 'src/app/models/band.model';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, Pipe } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  booleanBands: Array<Boolean> = [];

  allBands = this.sharedService.getAllBands();
  mediaBands = this.sharedService.mediaBands();

  customDisplay = false;
  searchText = '';

  name = '';
  year = '';
  bio = '';
  photo = '';
  song = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.booleanBands = this.sharedService.mediaBands();
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

  search(searchValue: HTMLInputElement) {
    console.log(searchValue.value);
    searchValue.value;
    if (searchValue.value !== '') {
      this.allBands = this.allBands.filter((band: Band) => {
        return band.name?.includes(searchValue.value);
      });
      console.log('patata');
    } else {
      this.allBands = this.sharedService.getAllBands();
    }
  }

  imagePickerConf: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '220px',
    height: '140px',
  };

  addNewBand(bandName: string, bandYear: string, bandBio: string) {
    let newBand = {
      name: bandName,
      year: bandYear,
      bio: bandBio,
      song: this.song,
      photo: this.photo,
    };
    this.allBands.push(newBand);
    console.log(newBand);
  }

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
