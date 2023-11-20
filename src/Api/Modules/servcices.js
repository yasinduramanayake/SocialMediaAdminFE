import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async AddService(payload) {
    return await api.post("/addservice", payload).then((res) => {
      notification.toast("Successfully Added", "success");
    });
  },

  async AllServices() {
    return await api.get("/allcategories");
  },
};
