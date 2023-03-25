import http from "../helpers/request.js";

export default {
    template: `
<div class="wrapper">
    <article class="modal">
        <form @submit.prevent="submit">
            <h2>Добавление нового сотрудника</h2>
            <div>
                <label for="name">Имя</label>
                <input type="text" name="name" id="name" v-model="fields.name">
            </div>
            <div>
                <label for="login">Логин</label>
                <input type="text" name="login" id="login" v-model="fields.login">
            </div>
            <div>
                <label for="password">Пароль</label>
                <input type="password" name="password" id="password" v-model="fields.password">
            </div>
            <div>
                <label for="photo_file" class="photo_input">Фото</label>
                <input type="file" name="photo" id="photo_file" @change="addFile">
            </div>
            <div>
                <label for="role">Роль</label>
                <select name="role" id="role" v-model="fields.role_id">
                    <option value="nothing" selected disabled>Выберите роль:</option>
                    <option value="1">Администратор</option>
                    <option value="2">Официант</option>
                    <option value="3">Повар</option>
                </select>
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
            const response = await http.postForm('/user', this.fields);
        },
        addFile(e) {
            this.fields.photo_file = e.target.files[0];
            console.log(this.fields.photo_file);
        },
    },
}