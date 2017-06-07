ЗАПУСКАТЬ  КОМАНДНУЮ СТРОКУ В КОРНЕ ПРОЕКТА<br>
Чтобы установить все пакеты и зависимости для скачанного примера, выполните команду npm i в папке проекта<br>
npm i gulp --save-dev <br>
npm i gulp-sass --save-dev <br>
npm i browser-sync --save-dev <br>
npm i -g bower <br>
<!-- bower i jquery magnific-popup -->
npm i --save-dev gulp-concat gulp-uglifyjs <br>
npm i gulp-cssnano gulp-rename --save-dev <br>
npm i del --save-dev <br>
npm i gulp-imagemin imagemin-pngquant --save-dev <br>
npm i gulp-cache --save-dev    для кэширования картинок для ускорения обработки <br>
npm i --save-dev gulp-autoprefixer <br>
bower i bootstrap@3 --save-dev    (указать путь к bootstrap.less) <br>
npm - --save-dev gulp-cssimport <br>
bower install bootstrap <br>
bower install fancybox <br>


<p>В common.js отключены высплывающие окна.
Метрика настроена (6 целей по onsubmit).
"Внешние" фото. 
Отдельно созданы формы для каждой кнопки вызова FancyBox (в common js нужно откорректировать скрипт раздачи data-attr из кнопок в одну форму и удалить из index.html все формы, кроме одной с добавлением соответствующих data-attr в кнопки)</p>