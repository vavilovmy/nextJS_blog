<h1>Пример блога, построенного на фреймворке Next.js</h1>

<h2>Что было реализовано:</h2>
<ul>
  <li>Базовая вёрстка без адаптива @media и пиксель-пёрфекта с использованием препроцессора scss, <a href="https://www.figma.com/design/EP6fuAlvlW5kAKdIetojs1/Simple-Website-Blog-Space-(GBLOG)-(Community)?node-id=0-1&t=6GIsgg1PQz1SBEht-1" target="_blank">референс</a></li>
  <li>Одинаковые футер и хедер на всех страницах через построение оных с помощью компонентов и рендер в layout.tsx</li>
  <li>Базовая маршрутизация через Link - главная страница и страница с постами в блоге</li>
  <li>Динамическая маршрутизация для каждого поста в блоге через помещение названия маршрута (папки) в квадратные скобки [id], данные для постов подтягиваются из массива объектов в /data/index.tsx</li>
  <li>Функционал тёмной темы через изменение стилей в body с помощью стилизованной и анимированной кнопки в header</li>
</ul>
