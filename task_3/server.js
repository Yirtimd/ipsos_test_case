const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { title } = require('process');
const { json } = require('stream/consumers');


const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

// Инициализация
let tasks = [];
app.use(express.json());

// Middleware валидации
const middlwareValidateTask = (req, res, next) => {
    if (!req.body?.title || typeof req.body.title !== 'string') {
        return res.status(400).json({error: 'Title is required and must be a string'});
    }
    next();
};

// Работа с файлом
const loadTask = async () => {
    try {
        const data = await fs.readFile(DATA_FILE);
        tasks = JSON.parse(data);
    } catch (error) {
        tasks = [];
    }
};

const saveTasks = async () => {
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// Загрузка данных при запуске
loadTask();


//  Роуты
app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.post('/tasks', middlwareValidateTask, (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title.trim(),
        completed: false,
        reatedAt: new Date().toISOString()
    };

    tasks.push(newTask);
    saveTasks();
    res.status(201).json({newTask})
});


// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  });
  
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });





