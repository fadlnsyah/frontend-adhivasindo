export const featuredModule = {
  category: 'Pemrograman',
  title: 'Pemrograman Frontend Modern dengan React dan Angular',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  instructor: 'Josep',
  date: '14-06-2025',
}

export const competencyModules = [
  {
    title: 'Pemrograman',
    theme: 'image',
    lessons: [
      'Pemrograman Frontend Modern dengan React dan Angular',
      'Pengembangan API Berkualitas untuk Integrasi Aplikasi dan REST',
      'Menerapkan Clean Code dan Design Pattern dalam Pengembangan Software',
    ],
  },
  {
    title: 'Creative Marketing',
    theme: 'coral',
    lessons: [
      'Storytelling dalam Pemasaran Mengubah Data menjadi Cerita yang Menginspirasi',
      'Pemasaran Viral Bagaimana Menciptakan Konten yang Cepat Menyebar',
      'Memaksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif',
    ],
  },
  {
    title: 'Management SDM',
    theme: 'yellow',
    lessons: [
      'Storytelling dalam Pemasaran Mengubah Data menjadi Cerita yang Menginspirasi',
      'Pemasaran Viral Bagaimana Menciptakan Konten yang Cepat Menyebar',
      'Memaksimalkan User-Generated Content dalam Strategi Pemasaran Kreatif',
    ],
  },
] as const

export const studentScores = [
  {
    rank: 1,
    name: 'Parija Faiza',
    className: 'Pemrograman',
    module: 'L1',
    point: '1,234 Point',
  },
  {
    rank: 2,
    name: 'Julian Permana',
    className: 'Pemrograman',
    module: 'L2',
    point: '1,100 Point',
  },
  {
    rank: 3,
    name: 'Sinta Lestari',
    className: 'Marketing',
    module: 'L1',
    point: '985 Point',
  },
]

export const calendarDays = [
  { day: 'Su', date: '1' },
  { day: 'Mo', date: '2' },
  { day: 'Tu', date: '3' },
  { day: 'We', date: '4', active: true },
  { day: 'Th', date: '5' },
  { day: 'Fr', date: '6' },
  { day: 'Sa', date: '7' },
]

export const instructorSchedules = [
  {
    title: 'Storytelling dalam Pemasaran',
    time: '09:00 - 10:00 WIB',
    color: '#7667f6',
  },
  {
    title: 'Pemrograman Frontend Modern',
    time: '12:00 - 14:00 WIB',
    color: '#ff8078',
  },
  {
    title: 'Pengembangan API',
    time: '14:30 - 15:30 WIB',
    color: '#ffdd75',
  },
]
