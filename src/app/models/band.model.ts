export class Band {
  photo?: string;
  name?: string;
  year?: string;
  bio?: string;
  members?: [photo?: string, name?: string];
  songs?: [year?: string, name?: string];
}
