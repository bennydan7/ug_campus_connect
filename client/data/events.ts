import { EventItem } from "@/components/EventCard";

export const events: EventItem[] = [
  {
    id: "1",
    title: "Freshers' Welcome: Campus Tour & Mixer",
    dateISO: "2025-10-01",
    time: "10:00 AM - 12:00 PM",
    location: "Main Quad",
    category: "Social",
    attendees: 120,
    attendeesList: [
      { name: "Aisha Mensah", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { name: "Kwame Nkrumah", avatarUrl: "https://i.pravatar.cc/150?img=12" },
      { name: "Lina Owusu", avatarUrl: "https://i.pravatar.cc/150?img=19" },
      { name: "Daniel K.", avatarUrl: "https://i.pravatar.cc/150?img=28" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1400&auto=format&fit=crop",
    description: "Welcome new students! Join the campus tour followed by a casual mixer to meet fellow students, clubs, and faculty. Light refreshments provided.",
  },
  {
    id: "2",
    title: "Tech Talk: Intro to AI & Machine Learning",
    dateISO: "2025-10-03",
    time: "5:30 PM - 7:00 PM",
    location: "Engineering Hall 201",
    category: "Academic",
    attendees: 85,
    attendeesList: [
      { name: "Maya Patel", avatarUrl: "https://i.pravatar.cc/150?img=3" },
      { name: "Owen Lee", avatarUrl: "https://i.pravatar.cc/150?img=7" },
      { name: "Priya R.", avatarUrl: "https://i.pravatar.cc/150?img=11" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    description: "A hands-on talk on AI & Machine Learning basics. Perfect for beginners — code samples and Q&A included.",
  },
  {
    id: "3",
    title: "Career Fair: Meet Top Employers",
    dateISO: "2025-10-05",
    time: "11:00 AM - 3:00 PM",
    location: "Student Center Ballroom",
    category: "Career",
    attendees: 250,
    attendeesList: [
      { name: "Samuel Osei", avatarUrl: "https://i.pravatar.cc/150?img=14" },
      { name: "Nora Green", avatarUrl: "https://i.pravatar.cc/150?img=16" },
      { name: "Ethan P.", avatarUrl: "https://i.pravatar.cc/150?img=22" },
      { name: "Sofia B.", avatarUrl: "https://i.pravatar.cc/150?img=30" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop",
    description: "Meet top employers from tech, finance, and healthcare. Bring resumes and business cards. Workshops and interviews on site.",
  },
  {
    id: "4",
    title: "Intramural Soccer: Semi-Finals Night",
    dateISO: "2025-10-07",
    time: "7:00 PM - 9:00 PM",
    location: "Athletics Field A",
    category: "Sports",
    attendees: 300,
    attendeesList: [
      { name: "Coach Mensah", avatarUrl: "https://i.pravatar.cc/150?img=6" },
      { name: "J. Brown", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { name: "Alex K.", avatarUrl: "https://i.pravatar.cc/150?img=18" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1400&auto=format&fit=crop",
    description: "Cheer for your team at the semi-finals — food trucks and halftime entertainment will be available.",
  },
  {
    id: "5",
    title: "Study Skills Workshop: Acing Midterms",
    dateISO: "2025-10-09",
    time: "2:00 PM - 3:30 PM",
    location: "Library Room 3B",
    category: "Academic",
    attendees: 45,
    attendeesList: [
      { name: "Tina A.", avatarUrl: "https://i.pravatar.cc/150?img=2" },
      { name: "Ravi S.", avatarUrl: "https://i.pravatar.cc/150?img=4" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    description: "Improve your study habits with proven techniques, time management tips, and group exercises to prepare for midterms.",
  },
  {
    id: "6",
    title: "Open Mic Night: Music & Poetry",
    dateISO: "2025-10-11",
    time: "8:00 PM - 10:30 PM",
    location: "Cafe 42",
    category: "Social",
    attendees: 150,
    attendeesList: [
      { name: "Liam G.", avatarUrl: "https://i.pravatar.cc/150?img=10" },
      { name: "Zara H.", avatarUrl: "https://i.pravatar.cc/150?img=13" },
      { name: "Miriam", avatarUrl: "https://i.pravatar.cc/150?img=17" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop",
    description: "Showcase your talent at the Open Mic – music, poetry, and comedy welcome. Sign-up starts an hour before the show.",
  },
  {
    id: "7",
    title: "Women in STEM Networking Evening",
    dateISO: "2025-10-12",
    time: "6:00 PM - 8:00 PM",
    location: "Innovation Hub",
    category: "Career",
    attendees: 90,
    attendeesList: [
      { name: "Grace N.", avatarUrl: "https://i.pravatar.cc/150?img=21" },
      { name: "Isabella", avatarUrl: "https://i.pravatar.cc/150?img=23" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=1400&auto=format&fit=crop",
    description: "An evening to connect with mentors and peers in STEM fields. Light refreshments and mentor tables available.",
  },
  {
    id: "8",
    title: "Basketball Finals: Eagles vs. Wolves",
    dateISO: "2025-10-14",
    time: "7:30 PM - 9:30 PM",
    location: "Campus Arena",
    category: "Sports",
    attendees: 520,
    attendeesList: [
      { name: "Marcus", avatarUrl: "https://i.pravatar.cc/150?img=24" },
      { name: "Eve L.", avatarUrl: "https://i.pravatar.cc/150?img=25" },
      { name: "Sam K.", avatarUrl: "https://i.pravatar.cc/150?img=26" },
      { name: "Rita", avatarUrl: "https://i.pravatar.cc/150?img=27" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
    description: "Final game of the season — bring your friends and support the Eagles! Tickets available at the gate.",
  },
  {
    id: "9",
    title: "Campus Art Fair: Student Showcase",
    dateISO: "2025-10-20",
    time: "12:00 PM - 5:00 PM",
    location: "Arts Quad",
    category: "Arts",
    attendees: 60,
    attendeesList: [
      { name: "Ana B.", avatarUrl: "https://i.pravatar.cc/150?img=29" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
    description: "Browse and support student art across disciplines — paintings, sculpture, and live demonstrations.",
  },
  {
    id: "10",
    title: "Wellness Workshop: Mindfulness & Stress Relief",
    dateISO: "2025-10-22",
    time: "3:00 PM - 4:30 PM",
    location: "Wellness Center",
    category: "Health",
    attendees: 35,
    attendeesList: [
      { name: "Noah", avatarUrl: "https://i.pravatar.cc/150?img=8" },
    ],
    bannerUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop",
    description: "A guided mindfulness session to help reduce stress and build resilience — suitable for all levels.",
  },
];
