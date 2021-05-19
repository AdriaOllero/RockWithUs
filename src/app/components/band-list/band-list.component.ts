import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-bandList',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  booleanBands: Array<Boolean> = [];

  allBands = this.sharedService.getAllBands();
  mediaBands = this.sharedService.mediaBands();

  nameSearch =""

  name = '';
  year = '';
  bio = '';
  photo = '';

  constructor(private router: Router,private activeRoute:ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.booleanBands = this.sharedService.mediaBands();
    this.activeRoute.queryParams.subscribe( value => {
      if(value.name != undefined) {
        this.nameSearch = value.name
      }
    })
  }

  mediaIcon(index: number) {
    this.sharedService.mediaIcon(index);
  }
  search(searchValue: string){
    if(searchValue == "") {

    } else {
      this.router.navigate(["/catalogoHome"], { queryParams: { name: searchValue}})
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
      photo: '../../../assets/images/bandImages/51QmOMYg4jL._AC_SX425_.jpg',
    };
    this.allBands.push(newBand);
    console.log(newBand);
  }
}
