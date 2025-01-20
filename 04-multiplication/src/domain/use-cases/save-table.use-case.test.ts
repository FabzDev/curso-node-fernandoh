import {SaveTable} from './save-table.use-case'
import fs from 'fs';
describe('Save Table Case Use Test', ()=>{
    
    afterEach(()=> {
        fs.rmSync('outputs/DefaultTable.txt');
    })

    test('should create a file', ()=>{
        const saveTableOptions = { tableContent: 'Default content' };
        const resultSaveTable = new SaveTable().execute( saveTableOptions );
        const path = 'outputs/DefaultTable.txt';
        
        const fileExist = fs.readFileSync(path); 
        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'});
        
        expect(resultSaveTable).toBeTruthy();
        expect(fileExist).toBeTruthy();
        expect(fileContent).toBe(saveTableOptions.tableContent);
        
    })
})