export type Event = {
  id: string;
  category: 'Major' | 'University';
  date: string;       // ISO: '2025-10-07'
  time: string;       // e.g., '7:00 PM'
  title: string;      // e.g., 'Life as a Business Student'
  track: string;      // e.g., 'Business' or 'University of Guelph'
  speakers: string[]; // names only; optional photos later
  blurb: string;
  signupUrl?: string; // per-event sign up link
};

// Fully populated from the PDF. Dates/times are placeholders—update freely.
export const events: Event[] = [
  // -------------------- MAJORS --------------------
  {
    id: 'evt-001',
    category: 'Major',
    date: '2025-10-01',
    time: '7:00 PM',
    title: 'Life as a Business Student',
    track: 'Business',
    speakers: ['Joanna Perlus (Parent)', 'Student Panelists TBD'],
    blurb:
      'Discover the day-to-day experiences of business students and gain insights on courses, clubs, and career paths.',
    signupUrl: '/signup?event=evt-001',
  },
  {
    id: 'evt-002',
    category: 'Major',
    date: '2025-10-02',
    time: '7:00 PM',
    title: 'Studying Psychology: Student Stories',
    track: 'Psychology',
    speakers: ['Student panelists TBD'],
    blurb:
      'Hear from psychology students about their journeys, challenges, and the exciting paths their degree can open.',
    signupUrl: '/signup?event=evt-002',
  },
  {
    id: 'evt-003',
    category: 'Major',
    date: '2025-10-03',
    time: '7:00 PM',
    title: 'Mechanical & Mechatronics Engineering Student Panel',
    track: 'Engineering',
    speakers: ['Student panelists TBD'],
    blurb:
      'Learn how mechanical and mechatronics engineers design, build, and innovate in real-world projects.',
    signupUrl: '/signup?event=evt-003',
  },
  {
    id: 'evt-004',
    category: 'Major',
    date: '2025-10-04',
    time: '7:00 PM',
    title: 'Software, Hardware, & Systems Engineering Student Panel',
    track: 'Engineering',
    speakers: ['Student panelists TBD'],
    blurb:
      'Explore the future of tech through the eyes of engineering students tackling software, hardware, and systems challenges.',
    signupUrl: '/signup?event=evt-004',
  },
  {
    id: 'evt-005',
    category: 'Major',
    date: '2025-10-05',
    time: '7:00 PM',
    title: 'Computer Science: Future in Tech',
    track: 'Computer Science',
    speakers: ['Student panelists TBD'],
    blurb:
      'Get inspired by computer science students sharing their experiences and emerging career opportunities in tech.',
    signupUrl: '/signup?event=evt-005',
  },
  {
    id: 'evt-006',
    category: 'Major',
    date: '2025-10-06',
    time: '7:00 PM',
    title: 'Communication & Journalism',
    track: 'Communication Studies, Journalism',
    speakers: ['Student panelists TBD'],
    blurb:
      'Dive into the world of media and storytelling with students shaping the way we communicate today.',
    signupUrl: '/signup?event=evt-006',
  },
  {
    id: 'evt-007',
    category: 'Major',
    date: '2025-10-07',
    time: '7:00 PM',
    title: 'English & Linguistics in University',
    track: 'English, Linguistics',
    speakers: ['Student panelists TBD'],
    blurb:
      'Discover the power of language through the experiences of students studying English and linguistics.',
    signupUrl: '/signup?event=evt-007',
  },
  {
    id: 'evt-008',
    category: 'Major',
    date: '2025-10-08',
    time: '7:00 PM',
    title: 'Law Pathways in University',
    track: 'Political Science, Law, Philosophy',
    speakers: ['Student panelists TBD'],
    blurb:
      'Learn how students navigate pre-law studies, political science, and philosophy to prepare for a legal career.',
    signupUrl: '/signup?event=evt-008',
  },
  {
    id: 'evt-009',
    category: 'Major',
    date: '2025-10-09',
    time: '7:00 PM',
    title: 'Social Sciences, History & Geography',
    track: 'Sociology, History, Geography',
    speakers: ['Student panelists TBD'],
    blurb:
      'Hear from students exploring society, culture, and the world through social sciences, history, and geography.',
    signupUrl: '/signup?event=evt-009',
  },
  {
    id: 'evt-010',
    category: 'Major',
    date: '2025-10-10',
    time: '7:00 PM',
    title: 'Economics & Math in University',
    track: 'Economics, Math',
    speakers: ['Student panelists TBD'],
    blurb:
      'See how students turn numbers and theories into real-world problem-solving and career opportunities.',
    signupUrl: '/signup?event=evt-010',
  },
  {
    id: 'evt-011',
    category: 'Major',
    date: '2025-10-11',
    time: '7:00 PM',
    title: 'Health Science & Pre-Med Pathways',
    track: 'Health Science, Pre-Med',
    speakers: ['Student panelists TBD'],
    blurb:
      'Explore the journey of health science and pre-med students preparing to make an impact in medicine.',
    signupUrl: '/signup?event=evt-011',
  },
  {
    id: 'evt-012',
    category: 'Major',
    date: '2025-10-12',
    time: '7:00 PM',
    title: 'Kinesiology in University',
    track: 'Kinesiology',
    speakers: ['Student panelists TBD'],
    blurb:
      'Learn how kinesiology students study the human body to improve health, performance, and well-being.',
    signupUrl: '/signup?event=evt-012',
  },
  {
    id: 'evt-013',
    category: 'Major',
    date: '2025-10-13',
    time: '7:00 PM',
    title: 'Fashion Design & Culture',
    track: 'Fashion',
    speakers: ['Student panelists TBD'],
    blurb:
      'Step into the world of fashion as students share how creativity and culture shape their designs.',
    signupUrl: '/signup?event=evt-013',
  },
  {
    id: 'evt-014',
    category: 'Major',
    date: '2025-10-14',
    time: '7:00 PM',
    title: 'Social Work Across Disciplines',
    track: 'Social Work',
    speakers: ['Student panelists TBD'],
    blurb:
      'Discover the inspiring ways social work students support communities and create positive change.',
    signupUrl: '/signup?event=evt-014',
  },

  // -------------------- UNIVERSITIES --------------------
  {
    id: 'evt-015',
    category: 'University',
    date: '2025-10-15',
    time: '7:00 PM',
    title: 'Wilfrid Laurier University',
    track: 'Wilfrid Laurier University',
    speakers: ['Current students TBD'],
    blurb:
      'Explore what life, learning, and opportunities look like at Wilfrid Laurier University.',
    signupUrl: '/signup?event=evt-015',
  },
  {
    id: 'evt-016',
    category: 'University',
    date: '2025-10-16',
    time: '7:00 PM',
    title: 'University of Guelph',
    track: 'University of Guelph',
    speakers: ['Current students TBD'],
    blurb:
      'Get an inside look at academics, campus life, and student experiences at the University of Guelph.',
    signupUrl: '/signup?event=evt-016',
  },
  {
    id: 'evt-017',
    category: 'University',
    date: '2025-10-17',
    time: '7:00 PM',
    title: 'University of Waterloo',
    track: 'University of Waterloo',
    speakers: ['Current students TBD'],
    blurb:
      'See how Waterloo students balance rigorous academics with innovative research and campus culture.',
    signupUrl: '/signup?event=evt-017',
  },
  {
    id: 'evt-018',
    category: 'University',
    date: '2025-10-18',
    time: '7:00 PM',
    title: 'Queen’s University',
    track: 'Queen’s University',
    speakers: ['Current students TBD'],
    blurb:
      'Discover the unique student experience and academic opportunities at Queen’s University.',
    signupUrl: '/signup?event=evt-018',
  },
  {
    id: 'evt-019',
    category: 'University',
    date: '2025-10-19',
    time: '7:00 PM',
    title: 'Western University',
    track: 'Western University',
    speakers: ['Current students TBD'],
    blurb:
      'Learn about Western University’s programs, campus life, and vibrant student community.',
    signupUrl: '/signup?event=evt-019',
  },
  {
    id: 'evt-020',
    category: 'University',
    date: '2025-10-20',
    time: '7:00 PM',
    title: 'University of Toronto',
    track: 'University of Toronto',
    speakers: ['Current students TBD'],
    blurb:
      'Hear from U of T students about their academic journeys and life at Canada’s top-ranked university.',
    signupUrl: '/signup?event=evt-020',
  },
  {
    id: 'evt-021',
    category: 'University',
    date: '2025-10-21',
    time: '7:00 PM',
    title: 'McMaster University',
    track: 'McMaster University',
    speakers: ['Current students TBD'],
    blurb:
      'Explore the student experience, research opportunities, and campus culture at McMaster University.',
    signupUrl: '/signup?event=evt-021',
  },
  {
    id: 'evt-022',
    category: 'University',
    date: '2025-10-22',
    time: '7:00 PM',
    title: 'McGill University',
    track: 'McGill University',
    speakers: ['Current students TBD'],
    blurb:
      'Discover the academic excellence and dynamic student life at McGill University.',
    signupUrl: '/signup?event=evt-022',
  },
  {
    id: 'evt-023',
    category: 'University',
    date: '2025-10-23',
    time: '7:00 PM',
    title: 'Trent University',
    track: 'Trent University',
    speakers: ['Current students TBD'],
    blurb:
      'Get an insider’s view of Trent University’s programs, community, and student life.',
    signupUrl: '/signup?event=evt-023',
  },
  {
    id: 'evt-024',
    category: 'University',
    date: '2025-10-24',
    time: '7:00 PM',
    title: 'York University',
    track: 'York University',
    speakers: ['Current students TBD'],
    blurb:
      'Learn about York University’s diverse programs and how students thrive academically and socially.',
    signupUrl: '/signup?event=evt-024',
  },
  {
    id: 'evt-025',
    category: 'University',
    date: '2025-10-25',
    time: '7:00 PM',
    title: 'Toronto Metropolitan University (TMU)',
    track: 'Toronto Metropolitan University',
    speakers: ['Current students TBD'],
    blurb:
      'See how TMU students combine innovation, creativity, and real-world learning.',
    signupUrl: '/signup?event=evt-025',
  },
  {
    id: 'evt-026',
    category: 'University',
    date: '2025-10-26',
    time: '7:00 PM',
    title: 'Brock University',
    track: 'Brock University',
    speakers: ['Current students TBD'],
    blurb:
      'Discover Brock University’s academic programs, campus life, and student opportunities.',
    signupUrl: '/signup?event=evt-026',
  },
  {
    id: 'evt-027',
    category: 'University',
    date: '2025-10-27',
    time: '7:00 PM',
    title: 'University of Ottawa',
    track: 'University of Ottawa',
    speakers: ['Current students TBD'],
    blurb:
      'Hear from students about studying and thriving at Canada’s bilingual University of Ottawa.',
    signupUrl: '/signup?event=evt-027',
  },
];