namespace Dummy {
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
    class: string;
  }

  export interface Course {
    id: string;
    name: string;
    teacher: string;
    price: number;
    rate: string;
    description: string;
  }

  export interface Classroom {
    id: string;
    name: string;
    teacher: string;
  }

  export const teacher: Teacher[] = [
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
  export const student: Student[] = [
    {
      id: "1",
      name: "Lim Tangmeng",
      gender: "M",
      email: "Tangmeng.Lim@gmail.com",
      class: "",
    },
    {
      id: "2",
      name: "Hannah Gordon",
      gender: "F",
      email: "hannah.gordon@example.com",
      class: "1",
    },
    {
      id: "3",
      name: "Annette Richardson",
      gender: "F",
      email: "annette.richardson@example.com",
      class: "",
    },
  ];
  export const course: Course[] = [
    {
      id: "1",
      name: "Math",
      teacher: "Heidi Gutierrez",
      price: 50,
      rate: "4.5",
      description: "Learn with ME",
    },
    {
      id: "2",
      name: "Khmer",
      teacher: "Christian Russell",
      price: 30,
      rate: "4",
      description: "Learn Khmer with ME",
    },
  ];

  export const classroom: Classroom[] = [
    {
      id: "1",
      name: "M1",
      teacher: "2",
    },
    {
      id: "22",
      name: "M2",
      teacher: "3",
    },
    {
      id: "3",
      name: "M3",
      teacher: "2",
    },
    {
      id: "4",
      name: "M4",
      teacher: "4",
    },
  ];
}
export default Dummy;
