export default {
    template: `
    <div class="wrapper">
    <header>
        <article>
            <img src="assets/img/logo.png" alt="logo">
        </article>
        <nav>
            <a href="#">Сотрудники</a>
            <a href="#">Смены</a>
            <a href="#">Заказы</a>
            <a href="#" class="approve_button">Вход</a>
            <a href="#" class="cancel_button">Выход</a>
        </nav>
    </header>
    <main>
        <section class="employees" style="display: none">
            <article>
                <span>Имя</span>
                <span>Статус</span>
                <span>Должность</span>
                <button>+</button>
            </article>
            <article>
                <span>Ariane</span>
                <span class="working">Работает</span>
                <span>Администратор</span>
                <button>Подробнее</button>
            </article>
            <article>
                <span>John</span>
                <span class="fired">Уволен</span>
                <span>Администратор</span>
                <button>Подробнее</button>
            </article>
            <article>
                <span>Ariane</span>
                <span class="working">Работает</span>
                <span>Администратор</span>
                <button>Подробнее</button>
            </article>
            <article>
                <span>Ariane</span>
                <span class="working">Работает</span>
                <span>Официант</span>
                <button>Подробнее</button>
            </article>
            <article>
                <span>John</span>
                <span class="fired">Уволен</span>
                <span>Повар</span>
                <button>Подробнее</button>
            </article>
        </section>
        <section class="shift" style="display: none">
            <button class="approve_button">Добавить смену</button>
            <article>
                <h2>Смена №5</h2>
                <p>Начало смены в 2021-09-19 08:00</p>
                <p>Конец смены в 2021-09-19 18:00</p>
                <p class="working">Статус: Открыта</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Смена №4</h2>
                <p>Начало смены в 2021-09-18 08:00</p>
                <p>Конец смены в 2021-09-18 18:00</p>
                <p class="fired">Статус: Закрыта</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Смена №3</h2>
                <p>Начало смены в 2021-09-17 08:00</p>
                <p>Конец смены в 2021-09-17 18:00</p>
                <p class="fired">Статус: Закрыта</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Смена №2</h2>
                <p>Начало смены в 2021-09-16 08:00</p>
                <p>Конец смены в 2021-09-16 18:00</p>
                <p class="fired">Статус: Закрыта</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Смена №1</h2>
                <p>Начало смены в 2021-09-15 08:00</p>
                <p>Конец смены в 2021-09-15 18:00</p>
                <p class="fired">Статус: Закрыта</p>
                <button class="approve_button">Управление</button>
            </article>
        </section>
        <section class="orders" style="display: none">
            <button class="approve_button">Принять заказ</button>
            <article>
                <h2>Столик №1</h2>
                <p>Официант: John</p>
                <p class="fired">Статус: Отмена</p>
                <p>Цена: 9238</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Столик №2</h2>
                <p>Официант: John</p>
                <p class="working">Статус: Принят</p>
                <p>Цена: 238</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Столик №3</h2>
                <p>Официант: John</p>
                <p class="working">Статус: Готов</p>
                <p>Цена: 1436</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Столик №4</h2>
                <p>Официант: John</p>
                <p class="working">Статус: Оплачен</p>
                <p>Цена: 2316</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Столик №5</h2>
                <p>Официант: John</p>
                <p class="working">Статус: Оплачен</p>
                <p>Цена: 345345</p>
                <button class="approve_button">Управление</button>
            </article>
            <article>
                <h2>Столик №6</h2>
                <p>Официант: Mike</p>
                <p class="working">Статус: Оплачен</p>
                <p>Цена: 1212</p>
                <button class="approve_button">Управление</button>
            </article>
        </section>
    </main>
    <footer>
        <article>
            &copy; Tortotoro - все права защищены
        </article>
        <article>
            8(888)777-44-11
        </article>
    </footer>
</div>
    `,
    data() {
        return {
            message: "",
        }
    },
    computed() {

    },
    methods: {},
}