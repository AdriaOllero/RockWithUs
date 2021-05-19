import { SafeResourceUrl } from "@angular/platform-browser";

export class Band {
  photo?: string;
  name?: string;
  year?: string;
  bio?: string;
  members?: [photo?: string, name?: string];
  song?:SafeResourceUrl
}
