<template>
  <input type="file" @change="previewFiles" name="" id="" />
  <hot-table :data="data" :rowHeaders="true" :colHeaders="true"></hot-table>
</template>

<script setup>
import { reactive } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.css';
import * as XLSX from 'xlsx/xlsx.mjs';

// register Handsontable's modules
registerAllModules();

let data = reactive([
  ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
  ['2016', 10, 11, 12, 13],
  ['2017', 20, 11, 14, 13],
  ['2018', 30, 15, 12, 13],
]);

const previewFiles = (e) => {
  var files = e.target.files,
    f = files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: 'array' });
    let sheetName = workbook.SheetNames[0];
    /* DO SOMETHING WITH workbook HERE */
    console.log(workbook);
    let worksheet = workbook.Sheets[sheetName];
    console.log(XLSX.utils.sheet_to_json(worksheet));
  };
  reader.readAsArrayBuffer(f);
};
</script>
