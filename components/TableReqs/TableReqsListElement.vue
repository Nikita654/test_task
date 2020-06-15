<template>
  <tr class="table_dashboard_element">
    <td class="table_dashboard_checkbox_head">
      <div class="table_dashboard_checkbox">
        <input type="checkbox" />
        <label class="table_dashboard_checkbox-label"></label>
      </div>
    </td>
    <td
      v-for="(column, index) in dataColumns"
      :key="`columnName-${index}`"
      :column="column"
      :index="index"
      :class="{'table_dashboard_element_text-blue':column.name=='Заявка'}"
    >{{(el[column.serverName]!=undefined)?el[column.serverName]:''}}</td>
  </tr>
</template>

<script>
export default {
  name:'TableReqsListElement',
  props:{
    el:Object,
    dataColumns:Array,
  },
}
</script>

<style lang="scss" local>
.table_dashboard_element {
  text-align: center;
  color: #000;
  &_text-blue {
    color: blue;
  }
}
</style>
