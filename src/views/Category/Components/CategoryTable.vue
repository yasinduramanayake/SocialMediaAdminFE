<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <b-card :title="item.name">
        <div v-if="item.subcategory.length === 0">
          <center>
            <b-card
              ><span class="text-danger font-bold"
                ><b>No Data Available</b></span
              >
            </b-card>
          </center>
        </div>
        <b-table
          v-else
          responsive="sm"
          :items="item.subcategory"
          :fields="fields"
        >
          <template #cell(status)="data">
            <b-badge variant="primary">Active</b-badge>
          </template>
          
          
          
          <template #cell(action)="data">
            <b-row>
              <b-col md="auto">
                <b-button variant="success">
                  <feather-icon icon="EditIcon" class="mr-25"
                /></b-button>
              </b-col>
              <b-col md="auto">
                <b-button variant="danger">
                  <feather-icon icon="DeleteIcon" class="mr-25"
                /></b-button>
              </b-col>
            </b-row>
          </template>
        </b-table>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BCardText,
  BAvatar,
  BLink,
  BContainer,
} from "bootstrap-vue";
import categoryApi from "@/Api/Modules/category";

export default {
  name: "InstergramService",
  components: {
    BCard,
    BButton,
    BCol,
    BBadge,
    BAvatar,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  data() {
    return {
      fields: [
        {
          key: "reference",
          label: "Reference",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "name",
          label: "Name",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      
        {
          key: "type",
          label: "Type",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "action",
          label: "Action",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
      ],
      items: [],
    };
  },
  async mounted() {
    await this.AllCategories();
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
    async AllCategories() {
      const res = await categoryApi.AllCategories();
      this.items = res.data.data;
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
