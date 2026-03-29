import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
const localVue = createLocalVue();
localVue.use(VueRouter);

/**
 * This test checks the routing paths
 */

describe("Routing", () => {
  it("It should render the home page", async () => {
    const router = new VueRouter({ mode: "abstract", routes });

    const wrapper = mount(App, {
      localVue,
      router,
      mocks: {
        $tc: (a: string) => a,
      },
      data() {
        return { ready: true };
      },
    });

    await router.push("/");
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toContain("home");
  });
});
