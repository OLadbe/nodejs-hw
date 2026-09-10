// src/models/note.js

import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'Todo'],
      default: 'Todo',
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);




// // У папці src/models створіть файл note.js із Mongoose-схемою. Вона має містити поля:

// title — обов’язковий рядок, з параметром trim: true
// content — необов’язковий рядок (за замовчуванням порожній), з параметром trim: true
// tag — приймає одне із фіксованих значень (Work, Personal, Meeting, Shopping, Ideas, Travel, Finance, Health, Important, Todo). Необов’язковий рядок (за замовчуванням Todo)


// Для автоматичного створення полів createdAt та updatedAt, використовуйте параметр timestamps: true при створенні моделі. Це автоматично буде додавати до об'єкту два поля: createdAt (дата створення) та updatedAt (дата оновлення).



// Імпортуйте базовий набір нотатків із файлу notes.json до вашої бази, користуючись будь-яким UI інтерфейсом (в браузері, Mongo Compass тощо). Переконайтеся, що назва колекції в коді моделі та в візуальному інтерфейсі співпадають.
