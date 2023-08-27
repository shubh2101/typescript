interface User {
  readonly dbId: number;
  userId: number;
  email: string;
  googleId?: string;
  // startTrail : () => string
  startTrail(): string;
  getCoupan(coupanName: string, value: number): number;
}

//reopening of interface

interface User {
    githubToken : string
}

const john: User = {
  dbId: 123,
  userId: 456,
  email: "shubh@gmail.com",
  githubToken : "hsakhdka",
  startTrail: () => {
    return "trial started";
  },
  getCoupan: (name: "coupanhero", value: 90909) => {
    return 100;
  },
};
