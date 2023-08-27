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
  githubToken: string;
}

// inheritance
interface Admin extends User {
  role: "admin" | "ts" | "learner";
}

const john: Admin = {
  dbId: 123,
  userId: 456,
  email: "shubh@gmail.com",
  githubToken: "hsakhdka",
  role: "admin",
  startTrail: () => {
    return "trial started";
  },
  getCoupan: (name: "coupanhero", value: 90909) => {
    return 100;
  },
};
