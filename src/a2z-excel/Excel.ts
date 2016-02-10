
/// <reference path = "../../typings/auto.d.ts" />

import * as XLSX from 'xlsx';
import * as XLS from 'xlsjs';
import {Workbook} from './workbook'
import {Worksheet} from './worksheet'
import {ExcelUtils} from './utils'

export class Excel {
    public utils: ExcelUtils;
    constructor(public fileType: string){
        
        if(fileType != 'xlsx' && fileType != 'xls'){
            throw new Error("400, File must be of type xlsx or xls");
            }
            
            this.utils = new ExcelUtils(this.fileType);
        
    }
   readFile(fileName, read_opts) {
            if (this.fileType === 'xlsx') {
                return XLSX.readFile(fileName, read_opts);
            }
            else if (this.fileType == 'xls') {
                return XLS.readFile(fileName, read_opts);
            }
        }
   read(file, read_opts) {
            if (this.fileType === 'xlsx') {
                return XLSX.read(file, read_opts);
            }
            else if (this.fileType == 'xls') {
                return XLS.read(file, read_opts);
            }
        }
   createWorkbook() {
        return new Workbook(this.fileType);
        }   
   createWorksheet() {
        return new Worksheet(this.fileType);
        } 
   SayHello(name: string) {
		console.log('Hello, ' + name);
	}       
	static staticSayHello(name: string) {
		console.log('Hello, ' + name);
	}

}

// export class DeepThought {

// 	constructor() {
// 		this.question = new MeaningOfLife();
// 		this.result = this.question.compute();
// 	}

// 	question: MeaningOfLife;
// 	result: number;

// }