export const TASKS_CONFIGURATION = [
  {
    section: 'integrals',
    section_name: 'Задания по интегралам',
    templates: [
      {
        id: 1,
        name: 'Метод замены переменной',
        view: "\\int{f(g(x))g'(x)}dx",
        template: '\\int{f(g(/@/))g\'(/@/)}dx'
      },
      {
        id: 2,
        name: 'Метод интегрирования по частям',
        view: '\\int{udv} = uv - \\int{vdu}',
        template: '\\int{udv} = uv - \\int{vdu}'
      },
      {
        id: 3,
        name: 'Тут может быть любое название',
        view: '\\int{f(x)e^{kx}}dx',
        template: '\\int{f(/@/)e^{/@|even/x}}dx'
      },
      {
        id: 4,
        name: 'Интегрирование рациональных дробей',
        view: '\\int\\frac{P(x)}{Q(x)}',
        template: '\\int\\frac{P(/@/)}{Q(/@/)}'
      },
      {
        id: 5,
        name: 'Универсальная Тригонометрическая подстановка',
        view: '\\int\\frac{dx}{asinx+bcosx+c}',
        template: '\\int\\frac{dx}{/@|odd/sinx + /@|even/cosx + /@|aboveZero/}'
      }
    ]
  },
  {
    section: 'proizvodnie',
    section_name: 'Задания по производным',
    templates: [
      {
        id: 6,
        name: 'Найти производную функции $y = f(x)$',
        view: '2sin^5 3x + \\sqrt{ln(3x - x^2)}',
        template: '/@|even/sin^/2:3/ /3,5/x + \\sqrt{ln(/1:7|odd/x - x^/2:8|even/)}'
      },
      {
        id: 7,
        name: 'Найти производные функций заданных параметрически',
        view: 'x = e^t sint',
        template: 'x = /trig/^t x sint'
      },
      {
        id: 8,
        name: 'Найти производные функций заданных неявно',
        view: 'tg(y + x) = x^y',
        template: 'tg(/10:100/ + x) = x^/@|even/'
      },
      {
        id: 9,
        name: 'Найти производную второго порядка функции $y = f(x)$',
        view: 'y = cos^2 x^2',
        template: 'y = cos^/1:20|even/ x^/2,4/'
      },
      {
        id: 10,
        name: 'Написать уравнения касательной и нормали к графику функции $y = f(x)$ в точке с абсциссой $x_0$',
        view: 'y = x^3 - 3x + 2; x_0 = 2',
        template: 'y = x^/@|odd/ - /1:9|odd/x + /@|aboveZero/; x_0 = /@|even/'
      },
      {
        id: 11,
        name: 'Вычислить с помощью дифференциала',
        view: 'tg48^\\degree',
        template: 'tg/1:180/^\\degree'
      },
      {
        id: 12,
        name: 'Найти наибольшее и наименьшее значения функции $y = f(x)$ на отрезке $[a; b]$',
        view: 'y = \\sqrt{(1 - x^2)(1 + 2x^2)}, [-1; 1]',
        template: 'y = \\sqrt{(1 - x^/@|even/)(1 + 2x^/@|even/)}, [/@|lessZero/, /@|aboveZero/]'
      }
    ]
  }
];
