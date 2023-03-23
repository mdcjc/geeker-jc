<template>
	<div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column v-for="item in tableColumn" :prop="item.prop" :label="item.label" />
		</el-table>
	</div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
const tableData = [
	{
		date: "2016-05-03",
		name: "Tom",
		address: "No. 189, Grove St, Los Angeles"
	},
	{
		date: "2016-05-02",
		name: "Tom",
		address: "No. 189, Grove St, Los Angeles"
	},
	{
		date: "2016-05-04",
		name: "Tom",
		address: "No. 189, Grove St, Los Angeles"
	},
	{
		date: "2016-05-01",
		name: "Tom",
		address: "No. 189, Grove St, Los Angeles"
	}
];
const tableColumn = [
	{
		prop: "date",
		label: "Date"
	},
	{
		prop: "name",
		label: "name"
	},
	{
		prop: "address",
		label: "address"
	},
	{
		prop: "age",
		label: "age"
	}
];
</script>
<style scoped></style>
