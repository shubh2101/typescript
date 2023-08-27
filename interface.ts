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

//Extending a type via intersections
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

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
//A type cannot be changed after being created
type Window = {
  title: string;
};

//   type Window = {
//     ts: TypeScriptAPI;
//   }

// Error: Duplicate identifier 'Window'.
export {};
