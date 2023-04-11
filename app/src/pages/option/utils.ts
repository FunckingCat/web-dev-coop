import { filters, templateConfig } from 'config/templatesConfig';

type Filter = (x: number) => boolean;

const getItemByIndex = (arr: Array<string | number>, index: number) => arr[index % arr.length].toString();

// Функция для вычисления хэша по строке
const getHash = (str: string) => {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);

    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }

  return hash;
};

// Функция для генерации псевдослучайных чисел с заданным сидом
const getRandomNumberBySeed = (seed: number) => {
  const x = Math.sin(seed) * 10000;

  return x - Math.floor(x);
};

// Вычисляет рандомное число в зависимости от строки (userHash) и числа
const getRandomNumber = (str: string, num: number) => {
  const hash = getHash(str + num.toString());
  const random = getRandomNumberBySeed(hash);

  return Math.floor(random * 100);
};

// Генерирует массив, в который входят числа от min до max, проходящие проверку заданной функцией filter
const generateArray = (min: number, max: number, filter?: Filter) => {
  const arr: number[] = [];

  for (let i = min; i <= max; i++) {
    if (!filter) {
      arr.push(i);
    }

    if (filter?.(i)) {
      arr.push(i);
    }
  }

  return arr;
};

// Возвращает рандомный элемент из массива в зависимости от хэша и номера задания в варианте
export const parseTemplate = (template: string, hash: string, serialNumber: number) => {
  let counter = 1;

  const replacer = (match: string) => {
    const str = match.substring(1, match.length - 1);
    const [range, funcName] = str.split('|');
    const [min, max] = range.split(':').map(Number);

    const func = filters[funcName as keyof typeof filters];
    const alias = templateConfig.aliases[range as keyof typeof templateConfig.aliases];

    const random = getRandomNumber(hash, serialNumber + counter++);

    // Если задано дефолтное значение
    if (range === templateConfig.defaultSymbol) {
      const arr = generateArray(templateConfig.min, templateConfig.max, func);
      return getItemByIndex(arr, random);
    }

    // Если задан псевдоним, то берем значения из конфига
    if (alias) {
      return getItemByIndex(alias, random);
    }

    // Если задан не диапозон, а конкретные значения через запятую
    if (!max) {
      const values = range.split(',');
      return getItemByIndex(values, random);
    }

    // Если задан диапозон
    const arr = generateArray(min, max, func);
    return getItemByIndex(arr, random);
  };

  return template.replace(/\/.*?\//g, replacer);
};
