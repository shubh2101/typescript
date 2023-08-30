"use strict";
class TakePhoto {
    constructor(photoMode, filter) {
        this.photoMode = photoMode;
        this.filter = filter;
    }
    getreelTime() {
        // complex calculation
        return 4;
    }
}
class Instagram2 extends TakePhoto {
    constructor(photoMode, filter, burst) {
        super(photoMode, filter);
        this.photoMode = photoMode;
        this.filter = filter;
        this.burst = burst;
    }
    getPicture() {
        console.log("getting pic");
    }
}
const instaPhoto = new Instagram2("test", "filterTest", 3);
instaPhoto.getPicture();
