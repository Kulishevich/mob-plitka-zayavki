# Tile Component

Этот проект содержит мобильный компонент "Плитка заявки" на ReactJS, который динамически изменяет текст и стиль в зависимости от переданных данных. Также компонент поддерживает расширение вниз при нажатии на кнопку "Читать далее".

## 🚀 Установка и запуск проекта

1. **Клонирование репозитория:**
   ```bash
   git clone https://github.com/USERNAME/tile-component.git
   cd tile-component
   ```
2. **Установка зависимостей:**
   Убедитесь, что у вас установлен Node.js (рекомендуется версия 16 или выше).
   npm install
3. **Запуск проекта:**
   npm start
   После запуска проект будет доступен по адресу: http://localhost:3000.
4. **Настройка входных данных:**
   Исходные данные для компонента "Плитка заявки" находятся в файле src/data/data.json. Для тестирования вы можете изменить значения в этом файле.

Пример структуры JSON:
[
{
"id": "124",
"applicationNumber": 85472,
"createdAt": "2024-12-10T15:30:00.000Z",
"controlDate": "2024-12-15T15:30:00.000Z",
"doneDate": null,
"system": "Система B",
"type": "Тип A",
"object": {
"name": "Аптека 'Здоровье'",
"city": "Гродно",
"street": "ул. Советская, 12"
},
"text": "Пример текста для описания заявки",
"state": "В работе",
"isTechnological": false
}
] 5. **Изменение стилей и форматов:**
Типовые форматы вывода (ТФВ): Форматирование данных (например, дат) вынесено в src/utils/formatters.ts. Здесь можно изменить функции форматирования:

export const formatDate = (date: Date) => {
return new Date(date).toLocaleDateString("ru-RU", {
year: "numeric",
month: "long",
day: "numeric",
});
}; 6. **Структура проекта:**
src/components/Card.tsx: Реализация компонента "Плитка заявки".
src/data/data.json: Пример входных данных.
src/utils/formatters.ts: Функции для форматирования данных. 7. **Тестирование:**
Для тестирования различных стилей и текста измените поля в файле src/data/data.json.
Убедитесь, что компонент корректно отображается при изменении данных

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

#   m o b - p l i t k a - z a y a v k i 
 
 
