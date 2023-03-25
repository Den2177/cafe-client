import HomePage from "../pages/HomePage.js";
import AddWorker from "../pages/AddWorker.js";
import AuthPage from "../pages/AuthPage.js";

export default {
    components: {HomePage, AddWorker, AuthPage},
    template: `
    <component :is="component"></component>
    `,
    data() {
        return {
            component: "AuthPage",
        }
    },
    created() {
      if (localStorage.getItem('token')) {
          this.component = 'HomePage';
      } else {
          this.component = 'AuthPage';
      }
    },
    methods: {
        go(name) {
            this.component = name;
        }
    }
}