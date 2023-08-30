abstract class TakePhoto {
  constructor(public photoMode: string, public filter: string) {}

  abstract getPicture(): void;

  getreelTime(): number {
    // complex calculation
    return 4;
  }
}

class Instagram2 extends TakePhoto {
  constructor(
    public photoMode: string,
    public filter: string,
    public burst: number
  ) {
    super(photoMode, filter);
  }
  getPicture(): void {
    console.log("getting pic");
  }
}

const instaPhoto = new Instagram2("test", "filterTest", 3);

instaPhoto.getPicture();
