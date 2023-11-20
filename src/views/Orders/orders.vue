<template>
  <div>
    <div >
      <b-tabs align="right">
        <b-tab active title="All">
          <OrderTable type="All Orders" />
        </b-tab>
        <b-tab title="Awaiting">
          <OrderTable type="Awaiting Orders" />
        </b-tab>
        <b-tab title="Processing">
          <OrderTable type="Processing Orders" />
        </b-tab>
        <b-tab title="In Progress">
          <OrderTable type="In Progress Orders" />
        </b-tab>
        <b-tab title="Completed">
          <OrderTable type="Completed Orders" />
        </b-tab>
        <b-tab title="Partial">
          <OrderTable type="Partial Orders" />
        </b-tab>
        <b-tab title="Cancel">
          <OrderTable type="Cancel Orders" />
        </b-tab>
        <b-tab title="Refunded">
          <OrderTable type="Refunded Orders" />
        </b-tab>
      </b-tabs>
    </div>
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
import OrderTable from "@/views/Orders/Components/OrderTable.vue";

export default {
  name: "InstergramService",
  components: {
    BTab,
    BTabs,
    OrderTable,
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
          key: "price",
          label: "price",
          sortable: true,
          // thStyle: { width: "5%" },
          // tdClass: "custom-cell-padding",
        },
        {
          key: "quantity",
          label: "Quantity",
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

      items: [
        {
          reference: "RDV-3967371",
          name: "Instagram Folowers | Instant Delivery",
          price: "0.99",
          quantity: "100",
          type: "Manual",
          status: "",
          action: "",
        },
        {
          reference: "RDV-3967371",
          name: "Instagram Folowers | Instant Delivery",
          price: "4.99",
          quantity: "60",
          type: "Manual",
          status: "",
          action: "",
        },
        {
          reference: "RDV-3967371",
          name: "Instagram Folowers | Instant Delivery",
          price: "6.99",
          quantity: "70",
          type: "Manual",
          status: "",
          action: "",
        },
      ],
      items1: [
        {
          reference: "RDV-3967371",
          name: "Instagram Likes | Instant Delivery",
          price: "0.99",
          quantity: "100",
          type: "Manual",
          status: "",
          action: "",
        },
        {
          reference: "RDV-3967371",
          name: "Instagram Likes | Instant Delivery",
          price: "4.99",
          quantity: "60",
          type: "Manual",
          status: "",
          action: "",
        },
        {
          reference: "RDV-3967371",
          name: "Instagram Likes | Instant Delivery",
          price: "6.99",
          quantity: "70",
          type: "Manual",
          status: "",
          action: "",
        },
      ],
    };
  },

  methods: {
    setCellPadding(value, key, item) {
      // Add a custom class to table cells based on your requirements
      return "custom-cell-padding";
    },
  },
};
</script>

<style>
.custom-cell-padding {
  height: 70px; /* Set your desired padding value */
}
</style>
