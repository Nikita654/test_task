<template>
<div>
    <table class=" table_dashboard">
						<thead>
							<tr class="table_dashboard_tr">
								<th scope="col" class="table_checkbox_head">
									<div class=" table_checkbox">
										<input  type="checkbox">
										<label class="table_checkbox-label"></label>
									</div>
									<div class="table_arrow-down">&#8964;</div> 
								</th>
							</tr>
                            <tr>
								<th scope="col" class="table_checkbox_head">
									
								</th>
							<th v-for="(column, index) in dataColumns"
                                  :key="`columnName-${index}`"
                                    :column="column"
                                    :index="index" scope="col">{{column.name}}
									<span v-if="column.name=='ID'||
									column.name=='Дата платежа'||
									column.name=='Дата слота'">&#8645;</span>
									</th>
							</tr>
						</thead>
							 <transition-group name="fade" tag="tbody">
							 <tableReqsEl 
                               v-for="(el, indes) in dataReqs.filter(el => el.hide == undefined)"
                                  :key="`elementTableName-${indes}`"
                                    :el="el"
                                    :indes="indes"
                              :dataColumns="dataColumns" />
							    </transition-group>
					</table>
					</div>
</template>

<script>
import tableReqsEl from  '@/components/tables/tableReqsEl'
export default {
 components: {
    tableReqsEl
  },
  name:'tableRegs',
  data() {
    return {
   };
  },
  computed:{
    
  },
  methods:{},
  props:{
    dataReqs:Array,
    dataColumns:Array,
  },
  watch:{
  },
  mounted(){
  }
}
</script>

<style lang="css" local>
.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-leave-active {
  transition: all .7s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter{
  opacity: 0;
}

.table_arrow-down{
	display: inline-block;
	position: relative;
	top:-2px;
	left:3px;
	font-size: 18px;
}
.table_dashboard{
	display: block;
	height: calc(80vh - 89px);
	overflow-y: auto;
}
.table_dashboard{
		margin-bottom: 0;
		font-size:13px;
		line-height:15px;
		color:grey;
		border-collapse: collapse; 
	}
	.table_dashboard th{
		border:none;
		padding:20px 12px;
		min-width: 118.2px;
	}
	.table_dashboard tr{
     border-bottom: 1px solid #eee;
     }
	 .table_dashboard .table_dashboard_tr{
		 border-bottom: 1px solid transparent;
	 }
	.table_dashboard td{
		padding:20px 12px;
		min-width: 50px;
		vertical-align: middle;
	}
	.table_checkbox_head{
		width:44px;
	}
	.table_checkbox{
		padding: 0;
		min-height: auto;
		width: 16px;
		height: 16px;
		margin: 0 auto;
		display: inline-block;
		vertical-align: middle;
	}
	.table_checkbox input{
        cursor:pointer;
		outline: none;
	}
	.table_checkbox .table_checkbox-label{
		width: 16px;
		height: 16px;
	}
	.table_checkbox .table_checkbox-label:before, .table_checkbox .table_checkbox-label:after{
		top: 0;
		left: 0;
		margin-top: 0;
	}
	

</style>
