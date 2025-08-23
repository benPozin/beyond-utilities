export type Event = {
  id: string;
  category: 'Major' | 'University';
  date: string;       // ISO: '2025-10-07'  (shifted +1 from PDF)
  time: string;       // e.g., '7:00 PM'
  title: string;      // e.g., 'Life as a Business Student'
  track: string;      // e.g., 'Business' or 'University of Guelph'
  speakers: string[]; // names only; optional photos later
  blurb: string;
  signupUrl?: string; // per-event sign up link
};

// Populated from PDF (dates shifted +1 day).
export const events: Event[] = [
  // -------------------- MAJORS --------------------
  {
    id: 'evt-001',
    category: 'Major',
    date: '2025-10-08', // Tue Oct 7 +1
    time: '7:00 PM',
    title: 'Life as a Business Student',
    track: 'Business',
    speakers: [
      'Elizabeth Pozin','Jacob Tissplat','Kieran Tew','Luca Serio','Liam Tew','Andrew Ashmore'
    ],
    blurb: 'Discover the day-to-day experiences of business students and gain insights on courses, clubs, and career paths.',
    signupUrl: '/signup?event=evt-001',
  },
  {
    id: 'evt-002',
    category: 'Major',
    date: '2025-10-10', // Thu Oct 9 +1
    time: '7:00 PM',
    title: 'Studying Psychology: Student Stories',
    track: 'Psychology',
    speakers: ['Liam Richter','Abby Gourley-Rein','Ava Sigsemund'],
    blurb: 'Hear from psychology students about their journeys, challenges, and the exciting paths their degree can open.',
    signupUrl: '/signup?event=evt-002',
  },
  {
    id: 'evt-003',
    category: 'Major',
    date: '2025-10-15', // Tue Oct 14 +1
    time: '7:00 PM',
    title: 'Mechanical & Mechatronics Engineering Student Panel',
    track: 'Engineering',
    speakers: ['Michael Cherniak','Uriel Marks-Maister'],
    blurb: 'Learn how mechanical and mechatronics engineers design, build, and innovate in real-world projects.',
    signupUrl: '/signup?event=evt-003',
  },
  {
    id: 'evt-004',
    category: 'Major',
    date: '2025-10-17', // Thu Oct 16 +1
    time: '4:00 PM',
    title: 'Software, Hardware, & Systems Engineering Student Panel',
    track: 'Engineering',
    speakers: ['Ryan Silverberg','Lauren Fisk','Arseny Matveev'],
    blurb: 'Explore the future of tech through the eyes of engineering students tackling software, hardware, and systems challenges.',
    signupUrl: '/signup?event=evt-004',
  },
  {
    id: 'evt-005',
    category: 'Major',
    date: '2025-10-22', // Tue Oct 21 +1
    time: '7:00 PM',
    title: 'Computer Science: Future in Tech',
    track: 'Computer Science',
    speakers: ['Ben Pozin','Sean Huang','Sebastian Tsang'],
    blurb: 'Get inspired by computer science students sharing their experiences and emerging career opportunities in tech.',
    signupUrl: '/signup?event=evt-005',
  },
  {
    id: 'evt-006',
    category: 'Major',
    date: '2025-10-24', // Thu Oct 23 +1
    time: '7:00 PM',
    title: 'Communication & Journalism',
    track: 'Communication Studies, Journalism',
    speakers: ['Zoe Silver','Yael Erlich'],
    blurb: 'Dive into the world of media and storytelling with students shaping the way we communicate today.',
    signupUrl: '/signup?event=evt-006',
  },
  {
    id: 'evt-007',
    category: 'Major',
    date: '2025-10-29', // Tue Oct 28 +1
    time: '4:00 PM',
    title: 'English & Linguistics in University',
    track: 'English',
    speakers: ['Rachel Leslie','Stephanie Cohen'],
    blurb: 'Discover the power of language through the experiences of students studying English and linguistics.',
    signupUrl: '/signup?event=evt-007',
  },
  {
    id: 'evt-008',
    category: 'Major',
    date: '2025-10-31', // Thu Oct 30 +1
    time: '4:00 PM',
    title: 'Law Pathways in University',
    track: 'Political Science, Law, Philosophy',
    speakers: ['Jace Dubin','Joshua Kertesz','Natalie Filip'],
    blurb: 'Learn how students navigate pre-law studies, political science, and philosophy to prepare for a legal career.',
    signupUrl: '/signup?event=evt-008',
  },
  {
    id: 'evt-009',
    category: 'Major',
    date: '2025-11-05', // Tue Nov 4 +1
    time: '7:00 PM',
    title: 'Social Sciences, History & Geography',
    track: 'Sociology, History, Geography',
    speakers: ['Nathan Leger','Colby Reijmers','Ava Sigsemund'],
    blurb: 'Hear from students exploring society, culture, and the world through social sciences, history, and geography.',
    signupUrl: '/signup?event=evt-009',
  },
  {
    id: 'evt-010',
    category: 'Major',
    date: '2025-11-07', // Thu Nov 6 +1
    time: '7:00 PM',
    title: 'Economics & Math in University',
    track: 'Economics, Math',
    speakers: ['Alicia Bain','Tarushi Kalra','Amelia Gallacher'],
    blurb: 'See how students turn numbers and theories into real-world problem-solving and career opportunities.',
    signupUrl: '/signup?event=evt-010',
  },
  {
    id: 'evt-011',
    category: 'Major',
    date: '2025-11-12', // Tue Nov 11 +1
    time: '7:00 PM',
    title: 'Health Science & Pre-Med Pathways',
    track: 'Health Science, Pre-Med',
    speakers: ['Brandon Gelber','Arie Mizrahi','Josh Conn'],
    blurb: 'Explore the journey of health science and pre-med students preparing to make an impact in medicine.',
    signupUrl: '/signup?event=evt-011',
  },
  {
    id: 'evt-012',
    category: 'Major',
    date: '2025-11-14', // Thu Nov 13 +1
    time: '7:00 PM',
    title: 'Kinesiology in University',
    track: 'Kinesiology',
    speakers: ['Caelyn Clark','Niv Avni'],
    blurb: 'Learn how kinesiology students study the human body to improve health, performance, and well-being.',
    signupUrl: '/signup?event=evt-012',
  },
  {
    id: 'evt-013',
    category: 'Major',
    date: '2025-11-19', // Tue Nov 18 +1
    time: '7:00 PM',
    title: 'Fashion Design & Culture',
    track: 'Fashion',
    speakers: ['Libbie Abtan','Marisa Hamburg','Isabella Affe'],
    blurb: 'Step into the world of fashion as students share how creativity and culture shape their designs.',
    signupUrl: '/signup?event=evt-013',
  },
  {
    id: 'evt-014',
    category: 'Major',
    date: '2025-11-21', // Thu Nov 20 +1
    time: '4:00 PM',
    title: 'Social Work Across Disciplines',
    track: 'Social Work',
    speakers: ['Julia Harris','Michelle Gorokhovsky'],
    blurb: 'Discover the inspiring ways social work students support communities and create positive change.',
    signupUrl: '/signup?event=evt-014',
  },

  // -------------------- UNIVERSITIES --------------------
  {
    id: 'evt-015',
    category: 'University',
    date: '2025-11-26', // Tue Nov 25 +1
    time: '4:00 PM',
    title: 'Wilfrid Laurier University',
    track: 'Wilfrid Laurier University',
    speakers: ['Josh Segal','Ryan Usprech','Zoe Silver'],
    blurb: 'Explore what life, learning, and opportunities look like at Wilfrid Laurier University.',
    signupUrl: '/signup?event=evt-015',
  },
  {
    id: 'evt-016',
    category: 'University',
    date: '2025-11-27', // Wed Nov 26 +1
    time: '7:00 PM',
    title: 'University of Guelph',
    track: 'University of Guelph',
    speakers: ['Valerie Teplitski','Arseny Mateev'],
    blurb: 'Get an inside look at academics, campus life, and student experiences at the University of Guelph.',
    signupUrl: '/signup?event=evt-016',
  },
  {
    id: 'evt-017',
    category: 'University',
    date: '2025-11-28', // Thu Nov 27 +1
    time: '7:00 PM', // time not explicit; defaulting to 7 PM
    title: 'University of Waterloo',
    track: 'University of Waterloo',
    speakers: ['Caelyn Clark'],
    blurb: 'See how Waterloo students balance rigorous academics with innovative research and campus culture.',
    signupUrl: '/signup?event=evt-017',
  },
  {
    id: 'evt-018',
    category: 'University',
    date: '2025-12-03', // Tue Dec 2 +1
    time: '7:00 PM',
    title: 'Queen’s University',
    track: 'Queen’s University',
    speakers: ['Gefen Shpil','Gabe Ziedenberg'],
    blurb: 'Discover the unique student experience and academic opportunities at Queen’s University.',
    signupUrl: '/signup?event=evt-018',
  },
  {
    id: 'evt-019',
    category: 'University',
    date: '2025-12-04', // Wed Dec 3 +1
    time: '7:00 PM', // time not explicit; defaulting to 7 PM
    title: 'Western University',
    track: 'Western University',
    speakers: ['Natalie Filip'],
    blurb: 'Learn about Western University’s programs, campus life, and vibrant student community.',
    signupUrl: '/signup?event=evt-019',
  },
  {
    id: 'evt-020',
    category: 'University',
    date: '2025-12-05', // Thu Dec 4 +1
    time: '7:00 PM',
    title: 'University of Toronto',
    track: 'University of Toronto',
    speakers: ['Daniel Cruz','Karen Wirmanito'],
    blurb: 'Hear from U of T students about their academic journeys and life at Canada’s top-ranked university.',
    signupUrl: '/signup?event=evt-020',
  },
  {
    id: 'evt-021',
    category: 'University',
    date: '2025-12-10', // Tue Dec 9 +1
    time: '7:00 PM',
    title: 'McMaster University',
    track: 'McMaster University',
    speakers: ['Alicia Bain','Arie Mizrahi','Eden Tropepe'],
    blurb: 'Explore the student experience, research opportunities, and campus culture at McMaster University.',
    signupUrl: '/signup?event=evt-021',
  },
  {
    id: 'evt-022',
    category: 'University',
    date: '2025-12-11', // Wed Dec 10 +1
    time: '7:00 PM',
    title: 'McGill University',
    track: 'McGill University',
    speakers: ['Joshua Kertesz'],
    blurb: 'Discover the academic excellence and dynamic student life at McGill University.',
    signupUrl: '/signup?event=evt-022',
  },
  {
    id: 'evt-023',
    category: 'University',
    date: '2025-12-11', // inferred from adjacency to Dec 10 entry (+1 applied)
    time: '7:00 PM',
    title: 'Trent University',
    track: 'Trent University',
    speakers: ['Liam Tew'],
    blurb: 'Get an insider’s view of Trent University’s programs, community, and student life.',
    signupUrl: '/signup?event=evt-023',
  },
  {
    id: 'evt-024',
    category: 'University',
    date: '2025-12-17', // Tue Dec 16 +1
    time: '7:00 PM',
    title: 'York University',
    track: 'York University',
    speakers: ['Luca Serio','Krish Malhotra'],
    blurb: 'Learn about York University’s diverse programs and how students thrive academically and socially.',
    signupUrl: '/signup?event=evt-024',
  },
  {
    id: 'evt-025',
    category: 'University',
    date: '2025-12-18', // Wed Dec 17 +1
    time: '4:00 PM',
    title: 'Toronto Metropolitan University (TMU)',
    track: 'Toronto Metropolitan University',
    speakers: ['Sean Huang','Ayden Cheung'],
    blurb: 'See how TMU students combine innovation, creativity, and real-world learning.',
    signupUrl: '/signup?event=evt-025',
  },
  {
    id: 'evt-026',
    category: 'University',
    date: '2025-12-19', // Thu Dec 18 +1
    time: '7:00 PM',
    title: 'Brock University',
    track: 'Brock University',
    speakers: ['Niv Avni','Dylan Goodman'],
    blurb: 'Discover Brock University’s academic programs, campus life, and student opportunities.',
    signupUrl: '/signup?event=evt-026',
  },
  {
    id: 'evt-027',
    category: 'University',
    date: '2025-12-24', // Tue Dec 23 +1
    time: '7:00 PM',
    title: 'University of Ottawa',
    track: 'University of Ottawa',
    speakers: ['Kieran Tew'],
    blurb: 'Hear from students about studying and thriving at Canada’s bilingual University of Ottawa.',
    signupUrl: '/signup?event=evt-027',
  },
];