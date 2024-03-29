export interface IWeatherList {
  time: string;
  value: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export type dailyWeatherList = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
};
export type currentWeatherData =
  | (Coord & {
      weather: Weather[];
      base: string;
      main: Main;
      visibility: number;
      wind: Wind;
      clouds: Clouds;
      dt: number;
      sys: Sys;
      timezone: number;
      id: number;
      name: string;
      cod: number;
    })
  | null;
export type dailyWeatherData = {
  city: {
    coord: Coord;
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cod: string;
  cnt: number;
  list: dailyWeatherList[];
} | null;

export type groupedDateData = {
  list: dailyWeatherList[];
};
