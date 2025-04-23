export interface IJob {
    salary: number;
    jobType: "Full-time" | "Part-time" | "Remote" | "Internship";
    description: string;
    postedBy: string; // user id
    createdAt?: Date;
    updatedAt?: Date;
  }
  