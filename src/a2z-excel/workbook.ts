import * as XLSX from 'xlsx';
import * as XLS from 'xlsjs';

export class Workbook {
    
    SheetNames: Array<string>
    Sheets: any
    
    constructor(public fileType: string){}
    
    addSheet(sheetName, sheet) {
        this.SheetNames.push(sheetName);
        this.Sheets[sheetName] = sheet;
    }
    writeToFile(filePath) {
        if (this.fileType === 'xlsx') {
            return XLSX.writeFile(this, filePath);
        }
        else if (this.fileType == 'xls') {
            return XLS.writeFile(this, filePath);
        }
    }
    write(wopts) {
        if (this.fileType === 'xlsx') {
            return XLSX.write(this, wopts);
        }
        else if (this.fileType == 'xls') {
            return XLS.write(this, wopts);
        }
    }
}
