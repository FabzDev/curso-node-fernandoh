import {SaveTable} from './save-table.use-case'
import fs from 'fs';
describe('Save Table Case Use Test', ()=>{
    
    afterEach(()=> {
        // fs.rmSync('custom-outputs', { recursive: true });
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

    test('should save a file with custom values', ()=>{
        const saveTableOptions = { 
            tableContent: 'Default content',
            fileDest: 'custom-outputs/file-destination/',
            fileName: 'custom-table-name' 
        };
        const resultSaveTable = new SaveTable().execute( saveTableOptions );
        const path = saveTableOptions.fileDest+saveTableOptions.fileName+'.txt';
        
        
        const fileExist = fs.readFileSync(path); 
        const fileContent = fs.readFileSync(path, {encoding: 'utf-8'});
        
        expect(resultSaveTable).toBeTruthy();
        expect(fileExist).toBeTruthy();
        expect(fileContent).toBe(saveTableOptions.tableContent);
        
    })
})