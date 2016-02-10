import * as XLSX from 'xlsx';
import * as XLS from 'xlsjs';

export class ExcelUtils {
    
    constructor(public fileType: string){}

    sheet_to_json(worksheet, options) {
        
        // Ensure backwards compatibility - options could be undefined. 
        var opts = options ? options : {};
        
        if (this.fileType === 'xlsx') {
            return XLSX.utils.sheet_to_json(worksheet, opts);
        }
        else if (this.fileType === 'xls') {
            return XLS.utils.sheet_to_json(worksheet, opts);
        }
    }
    sheet_to_csv(worksheet, options) {
  
        // Ensure backwards compatibility - options could be undefined. 
        var opts = options ? options : {};
        
        if (this.fileType === 'xlsx') {
            return XLSX.utils.sheet_to_csv(worksheet, opts);
        }
        else if (this.fileType === 'xls') {
            return XLS.utils.sheet_to_csv(worksheet, opts);
        }
    }
    encode_cell(cellAddress, options) {
        if (this.fileType === 'xlsx') {
            return XLSX.utils.encode_cell(cellAddress);
        }
        else if (this.fileType === 'xls') {
            return XLS.utils.encode_cell(cellAddress);
        }
    }
    encode_range(range) {
        if (this.fileType === 'xlsx') {
            return XLSX.utils.encode_range(range);
        }
        else if (this.fileType === 'xls') {
            return XLS.utils.encode_range(range);
        }
    };   
}

