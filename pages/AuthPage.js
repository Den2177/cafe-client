import http from "../helpers/request.js";

export default {
    template: `
<div class="wrapper">
    <article class="modal">
        <form @submit.prevent="submit">
            <h2>Авторизация</h2>
            <div>
                <label for="login_enter">Логин</label>
                <input type="text" name="login" id="login_enter" v-model="fields.login">
            </div>
            <div>
                <label for="password_enter">Пароль</label>
                <input type="password" name="password" id="password_enter" v-model="fields.password">
            </div>
            <div>
                <button class="approve_button">Отправить</button>
                <button class="cancel_button">Отмена</button>
            </div>
        </form>
    </article>
  </div>
    `,
    data() {
        return {
            fields: {},
        }
    },
    computed() {

    },
    methods: {
        async submit() {
            const response = await http.post('/login', this.fields);
            localStorage.setItem('token', response.user_token);
            this.$root.go('HomePage');


        },
    },
}