export interface Teacher {
  id: string;
  name: string;
  gender: string;
  telephone: string;
  email: string;
  description: string;
}

export interface Student {
  id: string;
  name: string;
  gender: string;
  email: string;
}

export interface Course {
  id: string;
  name: string;
  teacher: string;
  price: number;
  rate: string;
  description: string;
}

const teacher: Teacher[] = [
  {
    id: "1",
    name: "Lim Tangmeng",
    gender: "M",
    telephone: "012345678",
    email: "Tangmeng.Lim@gmail.com",
    description: "I Love Hello World",
  },
  {
    id: "2",
    name: "Heidi Gutierrez",
    gender: "F",
    telephone: "(808) 967-1285",
    email: "heidi.gutierrez@example.com",
    description: "4036 Pockrus Page Rd",
  },
  {
    id: "3",
    name: "Christian Russell",
    gender: "F",
    telephone: "(554) 728-2329",
    email: "christian.russell@example.com",
    description: "92 Bollinger Rd",
  },
  {
    id: "4",
    name: "Ralph Woods",
    gender: "M",
    telephone: "(898) 800-0843",
    email: "ralph.woods@example.com",
    description: "I Love Hello World",
  },
];
const student: Student[] = [
  {
    id: "1",
    name: "Lim Tangmeng",
    gender: "M",
    email: "Tangmeng.Lim@gmail.com",
  },
  {
    id: "2",
    name: "Hannah Gordon",
    gender: "F",
    email: "hannah.gordon@example.com",
  },
  {
    id: "3",
    name: "Annette Richardson",
    gender: "F",
    email: "annette.richardson@example.com",
  },
];
const course: Course[] = [
  {
    id: "1",
    name: "Math",
    teacher: "Heidi Gutierrez",
    price: 50,
    rate: "4",
    description: "Learn with ME",
  },
  {
    id: "2",
    name: "Khmer",
    teacher: "Christian Russell",
    price: 30,
    rate: "2",
    description: "Learn Khmer with ME",
  },
];

export { student, teacher, course };
