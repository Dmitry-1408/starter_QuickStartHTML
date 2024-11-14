# Starter QuickStartHTML

Этот репозиторий содержит шаблон для быстрого старта разработки HTML-проектов. Данный шаблон подойдет как для учебных проектов, так и для создания простых одностраничных сайтов.

## Описание

**starter_QuickStartHTML** — это базовая структура HTML-проекта, которая включает в себя минимальные файлы и настройки для быстрого начала разработки. В составе:

src/
  ├── audio/                # Папка для аудиофайлов
  ├── css/
  │   └── style.css         # Основной файл стилей CSS
  ├── js/
  │   └── script.js         # Основной файл JavaScript для динамического функционала
  ├── fonts/                # Папка для шрифтов
  ├── html/                 # файлы html
  │    ├── index.html       # Основной HTML файл
  │    ├── header.html
  │    ├── hero.html
  │    └── footer.html
  ├── icons/                # Папка для иконок, SVG или других графических файлов
  ├── img/                  # Папка для изображений
  ├── js/                   # Папка для JavaScript
  │    ├── bottom.js
  │    ├── modal.js
  │    ├── header.html
  │    ├── footer.html
  │    └── lazyLoad.html    # "ленивое" всплытие секции при прокрутке страницы
  ├── sass/
  ├── .gitignore
  ├── gulpfile.js
  ├── package.json
  └── README.md

##  файл gulpfile.js

Содержит задачи для автоматизации сборки проекта с помощью Gulp. Он используется для запуска локального сервера, обработки стилей, скриптов, изображений и других ресурсов.

## Импортируемые зависимости:

**gulp** - Основной модуль для запуска задач.
** browser-sync ** - Поднимает локальный сервер и обновляет страницу при изменениях.
** gulp-sass ** - Компиляция SASS/SCSS файлов в CSS.
** gulp-clean-css ** - Минификация CSS.
** gulp-autoprefixer ** - Добавление префиксов для CSS свойств, обеспечивая совместимость с разными браузерами.
** gulp-rename ** - Переименование файлов, например, добавление суффиксов .min.
** gulp-imagemin ** - Оптимизация изображений.
** gulp-htmlmin ** - Минификация HTML.
** gulp-terser ** - Минификация JavaScript.
** gulp-file-include ** - Позволяет включать части HTML-файлов (например, хедер, футер) в основной файл.

## Описание задач:

1. Задача server:
Запускает локальный сервер с помощью browser-sync, который обслуживает файлы из директории dist.
Отслеживает изменения в файлах src/*.html и перезагружает браузер при изменении.

2. Задача styles:
Компилирует SASS/SCSS файлы из src/sass/ в CSS.
Минифицирует CSS и добавляет префиксы с помощью autoprefixer.
Сохраняет готовый файл в dist/css с суффиксом .min.
Обновляет стили в браузере после сборки.

3. Задача watch:
Отслеживает изменения в SCSS, JS, HTML и запускает соответствующие задачи (styles, scripts, html), чтобы пересобрать и обновить содержимое.

4. Задача html:
Обрабатывает файл src/html/index.html и включает другие HTML-файлы с помощью gulp-file-include (для модульного подхода к HTML).
Минифицирует HTML, удаляет лишние пробелы и комментарии.
Сохраняет обработанный HTML-файл в dist/ и обновляет страницу в браузере.

5. Задача scripts:
Минифицирует JavaScript файлы из src/js/, добавляет суффикс .min.
Сохраняет обработанные скрипты в dist/js.
Автоматически обновляет страницу.

6. Задача fonts:
Копирует шрифты из src/fonts в dist/fonts.

7. Задача icons:
Копирует иконки из src/icons в dist/icons.

8. Задача images:
Оптимизирует изображения из src/img и сохраняет их в dist/img.

9. Задача audio:
Копирует аудиофайлы из src/audio в dist/audio.

10. Задача default:
Запускает параллельно задачи watch, server, styles, scripts, fonts, icons, html, images, audio, обеспечивая полноценную сборку проекта и обновление при изменениях.

## Общая структура сборки:
Файл gulpfile.js настроен для полной автоматизации процесса разработки и сборки, позволяя работать над кодом в src/, автоматически собирая, оптимизируя и перезагружая проект в папке dist.

## Чтобы подключить этот Gulp-конфиг к проекту, выполните следующие шаги:

1. Установите Node.js и npm
Если у вас еще не установлены Node.js и npm, скачайте их с официального сайта Node.js и установите. Это потребуется для управления зависимостями и запуска задач Gulp.

2. Инициализация проекта и установка Gulp
# Перейдите в корневую папку вашего проекта через терминал или командную строку:
cd путь/к/проекту
Инициализируйте package.json командой:
npm init -y

# Установите Gulp глобально (опционально) и в проект:
npm install --global gulp-cli
npm install gulp --save-dev

3. Установите зависимости Gulp
# Выполните установку всех используемых в конфигурации модулей:
npm install browser-sync gulp-sass gulp-clean-css gulp-autoprefixer gulp-rename gulp-imagemin gul