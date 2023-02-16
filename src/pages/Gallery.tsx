import { Box } from '@mui/material';
import React from 'react';
import { Header } from '../components';
import { GalleryItems } from '../components/GalleryItems';
import { ILinks } from './About';

interface IGallery {
  onclickPic: (id: number) => void;
}

export type IPictures = {
  id: number;
  name: string;
  src: string;
  xs?: number;
  size: string;
  year: string;
};

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'О себе', link: '/about', active: true },
  { name: 'Галерея', link: '/gallery' }
];

export const pictures: IPictures[] = [
  {
    id: 0,
    name: 'Натюрморт. Невеста.',
    size: '40х50',
    year: '2018 г.',
    src: '/paints/0.jpg',
    xs: 3
  },
  {
    id: 1,
    name: 'Натюрморт. Ваза сливами.',
    src: '/paints/1.jpg',
    size: '40х50',
    year: '2018 г.',
    xs: 3
  },
  {
    id: 2,
    name: 'Натюрморт. Гжель.',
    size: '60х60',
    year: '2018 г.',
    src: '/paints/2.jpg',
    xs: 3
  },
  {
    id: 3,
    name: 'Из окна мастерской.',
    size: '60х60',
    year: '2018 г.',
    src: '/paints/3.jpg',
    xs: 6
  },
  {
    id: 4,
    name: ' Натюрморт. Сирень.',
    size: '50х60',
    year: '2018 г.',
    src: '/paints/4.jpg',
    xs: 6
  },
  {
    id: 5,
    name: 'Из окна мастерской.',
    size: '',
    year: '2018 г.',
    src: '/paints/5.jpg',
    xs: 3
  },
  {
    id: 6,
    name: 'Натюрморт. Темная сирень.',
    size: '',
    year: '2018 г.',
    src: '/paints/6.jpg',
    xs: 3
  },
  {
    id: 7,
    name: 'Натюрморт. Пионы.',
    size: '40х50',
    year: '2018 г.',
    src: '/paints/7.jpg',
    xs: 3
  },
  {
    id: 8,
    name: 'Пляж в Тель-Авиве.',
    size: '50х60',
    year: '2018 г.',
    src: '/paints/8.jpg',
    xs: 6
  },
  {
    id: 9,
    name: 'В саду. Колотилово.',
    src: '/paints/9.jpg',
    size: '60х60',
    year: '2018 г.',
    xs: 6
  },
  {
    id: 10,
    name: 'Натюрморт. Розовая сирень.',
    src: '/paints/10.jpg',
    size: '40х50',
    year: '2018 г.',
    xs: 3
  },
  {
    id: 11,
    name: 'Яблоки в листьях.',
    src: '/paints/11.jpg',
    size: '50х60',
    year: '2018 г.',
    xs: 3
  },
  {
    id: 12,
    name: 'Натюрморт. Буйство красок.',
    src: '/paints/12.jpg',
    size: '50х60',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 13,
    name: 'Раковины.',
    src: '/paints/13.jpg',
    size: '60х70',
    year: '2019 г.',
    xs: 6
  },
  {
    id: 14,
    name: 'Улочка в Руане.',
    size: '',
    year: '2019 г.',
    src: '/paints/14.jpg',
    xs: 6
  },
  {
    id: 15,
    name: 'Натюрморт. Букет из рюмок.',
    src: '/paints/15.jpg',
    size: '60х60',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 16,
    name: 'Натюрморт. Самовар.',
    src: '/paints/16.jpg',
    size: '50х60',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 17,
    name: 'Ландыши.',
    src: '/paints/17.jpg',
    size: '50х50',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 18,
    name: 'Колодец в Колотилово летом.',
    src: '/paints/18.jpg',
    size: '30х40',
    year: '2019 г.',
    xs: 6
  },
  {
    id: 19,
    name: 'Колодец в Колотилово. Ранняя осень.',
    src: '/paints/19.jpg',
    size: '30х40',
    year: '2019 г.',
    xs: 6
  },
  {
    id: 20,
    name: 'Натюрморт со свечой.',
    src: '/paints/20.jpg',
    size: '50х60',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 21,
    name: 'Колодец в Колотилово. Осень.',
    src: '/paints/21.jpg',
    size: '30х40',
    year: '2019 г.',
    xs: 3
  },
  {
    id: 22,
    name: 'Оливковые яблоки.',
    src: '/paints/22.jpg',
    size: '30х40',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 23,
    name: 'Натюрморт. Мир художника.',
    src: '/paints/23.jpg',
    size: '50х50',
    year: '2020 г.',
    xs: 6
  },
  {
    id: 24,
    name: 'Пионы на окошке в дачном домике.',
    src: '/paints/24.jpg',
    size: '30х40',
    year: '2020 г.',
    xs: 6
  },
  {
    id: 25,
    name: 'Натюрморт. Восточный.',
    src: '/paints/25.jpg',
    size: '50х60',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 26,
    name: 'Натюрморт. Восточный танец.',
    src: '/paints/26.jpg',
    size: '',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 27,
    name: 'Натюрморт. Золотые шары в ночи.',
    src: '/paints/27.jpg',
    size: '',
    year: '2021 г.',
    xs: 3
  },
  {
    id: 28,
    name: 'На улочке в Руане.',
    src: '/paints/28.jpg',
    size: '35х45',
    year: '2021 г.',
    xs: 6
  },
  {
    id: 29,
    name: 'Этюд. Настроение.',
    src: '/paints/29.jpg',
    size: '30х40',
    year: '2021 г.',
    xs: 6
  },
  {
    id: 30,
    name: 'Поздняя осень.',
    src: '/paints/30.jpg',
    size: '',
    year: '2021 г.',
    xs: 3
  },
  {
    id: 31,
    name: 'Пруд в Колотилово.',
    src: '/paints/31.jpg',
    size: '',
    year: '2022 г.',
    xs: 3
  },
  {
    id: 32,
    name: 'Натюрморт. Нежность.',
    src: '/paints/32.jpg',
    size: '40х50',
    year: '2022 г.',
    xs: 3
  },
  {
    id: 33,
    name: 'Яблонька в цвету.',
    src: '/paints/33.jpg',
    size: '',
    year: '2022 г.',
    xs: 6
  },
  {
    id: 34,
    name: 'Натюрморт. Сине-голубой.',
    src: '/paints/34.jpg',
    size: '50х60',
    year: '2022 г.',
    xs: 6
  },
  {
    id: 35,
    name: 'Натюрморт. Букетик ромашки-флоксы.',
    src: '/paints/35.jpg',
    size: '',
    year: '2022 г.',
    xs: 3
  },
  {
    id: 36,
    name: 'Натюрморт. Часы и бархат.',
    src: '/paints/36.jpg',
    size: '',
    year: '2023 г.',
    xs: 3
  },
  {
    id: 37,
    name: 'Натюрморт. Вдохновение.',
    src: '/paints/37.jpg',
    size: '',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 38,
    name: 'Березнячок.',
    src: '/paints/38.jpg',
    size: '40х60',
    year: '2021 г.',
    xs: 6
  },
  {
    id: 39,
    name: 'Натюрморт с тыквами.',
    src: '/paints/39.jpg',
    size: '60х60',
    year: '2019 г.',
    xs: 6
  },
  {
    id: 40,
    name: 'Осенний пейзаж.',
    src: '/paints/40.jpg',
    size: '',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 41,
    name: 'Натюрморт. Сказка Востока.',
    src: '/paints/41.jpg',
    size: '40х50',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 42,
    name: 'Красные яблоки.',
    src: '/paints/42.jpg',
    size: '',
    year: '2020 г.',
    xs: 3
  },
  {
    id: 43,
    name: 'Натюрморт. Груши.',
    src: '/paints/43.jpg',
    size: '',
    year: '2018 г.',
    xs: 6
  },
  {
    id: 44,
    name: 'На улочке в Руане. Карандаш.',
    src: '/paints/44.jpg',
    size: '35х45',
    year: '2021 г.',
    xs: 6
  },
  {
    id: 45,
    name: 'Вид из окошка кабинета. Колотилово. Уголь.',
    src: '/paints/45.jpg',
    size: '',
    year: '',
    xs: 3
  },
  {
    id: 46,
    name: 'На веранде. Колотилово. Уголь.',
    src: '/paints/46.jpg',
    size: '',
    year: '',
    xs: 3
  },
  {
    id: 47,
    name: 'Мостки и прудик. Уголь.',
    src: '/paints/47.jpg',
    size: '',
    year: '',
    xs: 3
  },
  {
    id: 48,
    name: 'Натюрморт. Уголь.',
    src: '/paints/48.jpg',
    size: '',
    year: '',
    xs: 6
  },
  {
    id: 49,
    name: 'lorem',
    src: '/paints/49.jpg',
    size: '',
    year: '',
    xs: 6
  },
  {
    id: 50,
    name: 'Эскиз к Натюрморту «Нежность». Карандаш.',
    src: '/paints/50.jpg',
    size: '',
    year: '',
    xs: 6
  },
  {
    id: 51,
    name: 'Эскиз к натюрморту «Сине-голубой». Уголь.',
    src: '/paints/51.jpg',
    size: '',
    year: '',
    xs: 6
  },
  {
    id: 52,
    name: 'Золотые шары.',
    src: '/paints/52.jpg',
    size: '',
    year: '',
    xs: 6
  },
  {
    id: 53,
    name: 'Эскиз к натюрморту «Сказки Востока». Уголь.',
    src: '/paints/53.jpg',
    size: '',
    year: '',
    xs: 6
  }
];

export const Gallery: React.FC<IGallery> = ({ onclickPic }) => {
  return (
    <Box>
      <Header links={links}></Header>
      <GalleryItems onclickPic={onclickPic} pictures={pictures}></GalleryItems>
    </Box>
  );
};
