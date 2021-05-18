export class Band {
  photo?: string;
  name?: string;
  year?: string;
  description?: string;
  members?: [photo?: string, name?: string];
  songs?: [year?: string, name?: string];
}
