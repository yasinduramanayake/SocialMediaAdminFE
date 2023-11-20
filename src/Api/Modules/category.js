import { api } from "../index";
import notification from "@/ApiConstance/toast";

export default {
  async AddCategory(payload) {
    return await api.post("/addcategory", payload).then((res) => {
      notification.toast("Successfully Added", "success");
    });
  },

  async AddSubCategory(payload) {
    return await api.post("/addsubcategory", payload).then((res) => {
      notification.toast("Successfully Added", "success");

      window.location.href = "/categories";
    });
  },
  async AllCategories() {
    return await api.get("/allcategories");
  },
};
