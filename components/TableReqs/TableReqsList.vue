<template>
  <div>
    <table class="table_dashboard">
      <thead>
        <tr class="table_dashboard_tr">
          <th scope="col" class="table_dashboard_checkbox_head">
            <div class="table_dashboard_checkbox">
              <input type="checkbox" />
              <label class="table_dashboard_checkbox-label"></label>
            </div>
            <div class="table_dashboard_arrow-down">&#8964;</div>
          </th>
        </tr>
        <tr>
          <th scope="col" class="table_dashboard_checkbox_head"></th>
          <th
            v-for="(column, index) in dataColumns"
            :key="`columnName-${index}`"
            :column="column"
            :index="index"
            scope="col"
          >
            {{column.name}}
            <span
              v-if="column.name=='ID'||
									column.name=='Дата платежа'||
									column.name=='Дата слота'"
            >&#8645;</span>
          </th>
        </tr>
      </thead>
      <transition-group name="fade" tag="tbody">
        <TableReqsListElement
          v-for="(el, indes) in dataReqsList.filter(el => el.hide == undefined)"
          :key="`elementTableName-${indes}`"
          :el="el"
          :indes="indes"
          :dataColumns="dataColumns"
        />
      </transition-group>
    </table>
  </div>
</template>

<script>
import TableReqsListElement from  '@/components/TableReqs/TableReqsListElement'
export default {
 components: {
    TableReqsListElement
  },
  name:'TableReqsList',
  props:{
    dataReqsList:Array,
    dataColumns:Array,
  },
}
</script>

<style lang="scss" local>
.table_dashboard {
  display: block;
  height: calc(80vh - 89px);
  overflow-y: auto;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 15px;
  color: grey;
  border-collapse: collapse;
  &_arrow-down {
    display: inline-block;
    position: relative;
    top: -2px;
    left: 3px;
    font-size: 18px;
  }

  th {
    border: none;
    padding: 20px 12px;
    min-width: 118.2px;
  }
  tr {
    border-bottom: 1px solid #eee;
  }
  &_tr {
    border-bottom: 1px solid transparent;
  }
  td {
    padding: 20px 12px;
    min-width: 50px;
    vertical-align: middle;
  }

  &_checkbox_head {
    width: 44px;
  }
  &_checkbox {
    padding: 0;
    min-height: auto;
    width: 16px;
    height: 16px;
    margin: 0 auto;
    display: inline-block;
    vertical-align: middle;
  }
  &_checkbox input {
    cursor: pointer;
    outline: none;
  }
  &_checkbox &_checkbox-label {
    width: 16px;
    height: 16px;
  }
  &_checkbox &_checkbox-label:before,
  &_checkbox &_checkbox-label:after {
    top: 0;
    left: 0;
    margin-top: 0;
  }
}
</style>
