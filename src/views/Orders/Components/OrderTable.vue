<template>
  <div>
    <br />
    <b-card :title="type">
      <b-table responsive="sm" :items="orders" :fields="fields">
        <template #cell(status)="data">
          <b-badge :variant="data.item.status.color">{{
            data.item.status.data
          }}</b-badge>
        </template>
        <template #cell(action)="data">
          <b-row>
            <b-col md="6">
              <b-button variant="success">
                <feather-icon icon="EditIcon" class="mr-25"
              /></b-button>
            </b-col>
            <b-col md="6">
              <b-button variant="danger">
                <feather-icon icon="DeleteIcon" class="mr-25"
              /></b-button>
            </b-col>
          </b-row>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BTab,
  BTabs,
  BTable,
  BBadge,
  BButton,
  BCol,
  BRow,
  BCardText,
  BLink,
  BContainer,
} from "bootstrap-vue";
import orderApi from "@/Api/Modules/orders";

export default {
  name: "InstergramService",
  components: {
    BTab,
    BTabs,

    BCard,
    BButton,
    BCol,
    BBadge,
    BTable,
    BRow,
    BContainer,
    BCardText,
    BLink,
  },
  props: {
    type: String,
  },
  data() {
    return {
      orders: [],
      fields: [
        {
          key: "orderid",
          label: "Order Id",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "customer",
          label: "Customer",
          sortable: true,
          // thStyle: { width: "2%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "orderdetails",
          label: "Order Info",
          sortable: true,
          // thStyle: { width: "5%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "created_at",
          label: "Created Date",
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
    await this.allOrders();
  },
  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },

    async allOrders() {
      const res = await orderApi.Allorders();
      this.items = res.data.data;

      this.items.forEach((value) => {
        if (this.type === "All Orders") {
          this.orders.push(value);
        }
      });
      console.log(this.orders);
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
