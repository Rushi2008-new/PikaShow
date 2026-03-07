export const movies = [
  {
    id: 1,
    category: 'now_playing',
    title: 'Now playing',
    image:
      'https://imguscdn.gamespress.com/cdn/files/Square-Enix/2020/06/22225001-3ba63e3c-684b-4386-8d37-75c6a2d62450/MARVELS_AVENGERS_PR_Header_1024x576.jpg?w=600&mode=max&otf=y&quality=90&format=jpg&bgcolor=white&sky=46e29aae7bc7b0e02ff8e987cf8b64039c38742e03e41c4c8924d997a20392a0',
  },
  {
    id: 2,
    category: 'popular',
    title: 'Popular',
    image:
      'https://cdn.pixabay.com/photo/2024/06/22/16/55/ai-generated-8846672_1280.jpg',
  },
  {
    id: 3,
    title: 'Top rated',
    category: 'top_rated',
    image:
      'https://i.etsystatic.com/18284891/r/il/9d88d8/6946543661/il_794xN.6946543661_8sh5.jpg',
  },
  {
    id: 4,
    title: 'Upcoming',
    category: 'upcoming',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg',
  },
];

export const url = 'https://api.themoviedb.org/3/movie/';
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTQ2ZTE0MzYwMjFjMWRjYjcxYTI3OTA3ZTc2MDI3OSIsIm5iZiI6MTc3Mjg2MzYzOS40NzksInN1YiI6IjY5YWJjMDk3NjA4NzY5NDhhNzhmYWZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzr1MOTyeoJb5gV823ifeFVpcT1EkGmXHL5pj0pdxtg'
  }
};

