import { Band } from 'src/app/models/band.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  booleanBands: Array<Boolean> = [];

  mediaBands() {
    for (let index = 0; index < this.allBands.length; index++) {
      this.booleanBands.push(true);
    }
    return this.booleanBands
  }

  mediaIcon(index: number) {
    if (this.booleanBands[index]) {
      this.booleanBands[index] = !this.booleanBands[index];

    } else {
      this.booleanBands[index] = !this.booleanBands[index];
    }
  }



  getAllBands(){
    return this.allBands
  }

  allBands = [
    {
      name: 'The Rolling Stones',
      year: '1995',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
      photo: '../../../assets/images/bandImages/51QmOMYg4jL._AC_SX425_.jpg',
    },
    {
      name: 'Led Zeppelin',
      year: '1995',
      photo:'../../../assets/images/bandImages/ledzeppelindigitalrelease3.jpeg',
    },
    {
      name: 'Queen',
      year: '1995',
      photo: '../../../assets/images/bandImages/CsAff60UsAE9oGR.jpg',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
    {
      name: 'Pink Floyd',
      year: '1995',
      photo: '../../../assets/images/bandImages/Pink-Floyd-simbolo.jpg',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
    {
      name: 'Deep Purple',
      year: '1995',
      photo: '../../../assets/images/bandImages/Deep Purple.png',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
    {
      name: 'AC/DC',
      year: '1995',

      photo: '../../../assets/images/bandImages/AC-DC-Logo.png',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
    {
      name: 'The Ramones',
      year: '1995',
      photo: '../../../assets/images/bandImages/51b4aef5854b6_645x429.jpg',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
    {
      name: 'Kiss',
      year: '1995',
      photo: '../../../assets/images/bandImages/Kiss-Logo.png',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur ratione dolor quis, earu corrupti reprehenderit aspernatur. Ad consequuntur beatae rerum quasi tempore nobis odit dolorem, culpa',
    },
  ];

}
