**********************************************************************************************
# yandex_module1_sprint3
**********************************************************************************************
Представленный код является проектным заданием на курсе Яндекс.Практикум, middle-frontend разработчик, модуль 1, спринт 3.
Автор: Кулешов Максим (kmo@evo-m.com)

!!!!!!!!!!!!!!!!!!!!!!!!!

Устранение замечаний:
- добавление функционала обмена сообщениями в чатах
- автоматическая подгрузка истории сообщений при выборе чата
- добавления функционала удаления чата
- добавление функционала выбора необходимости смены пароля при редактировании личных данных аккаунта

!!!!!!!!!!!!!!!!!!!!!!!!!

Основные изменения, внесенные на спринте:
- Добавлен роутинг страниц
- Внедрен механизм API для авторизации, регистрации, изменения личных данных, выхода
- Внедрен механизм API для добавления чатов, добавления и удаления пользователей в/из чатов
- Сделаны наброски класса для работы с Websocket, сейчас работает только инициализация сокета при выборе чата

Результат работы web-приложения доступен по адресу:
https://deluxe-horse-3a2467.netlify.app/

Для сборки приложения воспользуйтесь командой:
npm run-script build

Для запуска приложения воспользуйтесь командой:
npm run start

Макеты страниц в Figma:
https://www.figma.com/file/PtVl3MYKzsbebEx6bvnaFb/module1_design?node-id=0%3A1