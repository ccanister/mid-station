import { ref } from "vue";

class MenuService {
  collapse$ = ref(false);

  toggleCollapse() {
    this.collapse$.value = !this.collapse$.value;
  }
}

const menuService = new MenuService();
export default menuService;
