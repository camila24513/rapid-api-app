export interface IFilm {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
}

export interface IPerson {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
}

export interface IVehicle {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
}