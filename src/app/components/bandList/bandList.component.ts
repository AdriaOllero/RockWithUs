import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band.mode';

@Component({
  selector: 'app-bandList',
  templateUrl: './bandList.component.html',
  styleUrls: ['./bandList.component.scss'],
})
export class BandListComponent implements OnInit {
  allBands: Array<Band> = [];
  booleanBands: Array<Boolean> = [];
  constructor(private router:Router) {}

  ngOnInit() {
    this.loadData();
    this.mediaBands();
  }

  mediaBands() {
    for (let index = 0; index < this.allBands.length; index++) {
      this.booleanBands.push(true);
    }
  }

  mediaIcon(index: number) {
    if (this.booleanBands[index]) {
      this.booleanBands[index] = !this.booleanBands[index];

    } else {
      this.booleanBands[index] = !this.booleanBands[index];
    }
  }

  loadData() {
    this.allBands = [
      {
        name: 'The Rolling Stones',
        year: '1995',
        photo: '../../../assets/images/bandImages/51QmOMYg4jL._AC_SX425_.jpg',
      },
      {
        name: 'Led Zeppelin',
        year: '1995',
        photo:
          '../../../assets/images/bandImages/ledzeppelindigitalrelease3.jpeg',
      },
      {
        name: 'Queen',
        year: '1995',
        photo: '../../../assets/images/bandImages/CsAff60UsAE9oGR.jpg',
      },
      {
        name: 'Pink Floyd',
        year: '1995',
        photo: '../../../assets/images/bandImages/Pink-Floyd-simbolo.jpg',
      },
      {
        name: 'Deep Purple',
        year: '1995',
        photo: '../../../assets/images/bandImages/Deep Purple.png',
      },
      {
        name: 'AC/DC',
        year: '1995',

        photo: '../../../assets/images/bandImages/AC-DC-Logo.png',
      },
      {
        name: 'The Ramones',
        year: '1995',
        photo: '../../../assets/images/bandImages/51b4aef5854b6_645x429.jpg',
      },
      {
        name: 'Kiss',
        year: '1995',
        photo: '../../../assets/images/bandImages/Kiss-Logo.png',
      },
    ];
  }
}
