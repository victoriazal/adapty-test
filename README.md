# Adapty Landing Page Clone

Полная копия главной страницы [adapty.io](https://adapty.io/) на React.

## Технологии

- **React 18** - UI библиотека
- **Vite** - сборщик проекта
- **SCSS** - препроцессор стилей
- **react-helmet-async** - управление meta тегами

## Установка

```bash
npm install
```

## Запуск проекта

```bash
npm run dev
```

Проект будет доступен по адресу `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── Hero.jsx
│   ├── TrustedBy.jsx
│   ├── Features.jsx
│   ├── Stats.jsx
│   ├── Integration.jsx
│   ├── PaywallManagement.jsx
│   ├── RefundSaver.jsx
│   ├── Analytics.jsx
│   ├── PaywallBuilder.jsx
│   ├── WebFunnels.jsx
│   ├── Integrations.jsx
│   ├── Testimonials.jsx
│   ├── Enterprise.jsx
│   ├── Reviews.jsx
│   ├── Cases.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── styles/             # SCSS стили
│   ├── main.scss
│   └── components/
│       └── [компонент].scss
├── App.jsx             # Главный компонент
└── main.jsx            # Точка входа
```

## Особенности

- ✅ Полная копия структуры страницы adapty.io
- ✅ Адаптивный дизайн
- ✅ Meta теги из оригинального сайта
- ✅ Современный стек технологий
- ✅ Модульная структура компонентов
- ✅ Изображения скачаны с оригинального сайта

## Изображения

Изображения находятся в папке `public/images/` и были скачаны с оригинального сайта adapty.io:

- `adapty-overview.webp` - главное изображение overview
- `adapty-overview-2x.webp` - версия в высоком разрешении
- `adapty-paywall-demo-preview.webp` - превью демо paywall
- `appnation.webp` - логотип AppNation

### Скачивание дополнительных изображений

Для скачивания изображений используйте скрипт:

```bash
./download-images.sh
```

Или скачайте вручную через curl:

```bash
curl -L "https://adapty.io/assets/uploads/2025/02/IMAGE_NAME.webp" -o public/images/IMAGE_NAME.webp
```

