import { CalculatorService } from "./calculator.service";
import {  TestBed } from '@angular/core/testing'
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {
let calculator: CalculatorService,
loggerSpy: any;

beforeEach(() => {
    console.log(" calling before each");
    loggerSpy    = jasmine.createSpyObj('LoggerService', ["log"]);
    TestBed.configureTestingModule({
        providers:[
            CalculatorService, 
            {provide: LoggerService, useValue: loggerSpy}
        ]
    })
    calculator = TestBed.inject(CalculatorService);// component or service set up
});
    it('Should Add Two Numbers', () => {
            console.log("add test");
            const result = calculator.add(2,2); //execution phase
            expect(result).toBe(4); //test assertions
            expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
    it('Should Subtract Two Numbers', () => {
            console.log("subtract test");
            const result = calculator.subtract(2,2); //execution phase
            expect(result).toBe(0,"unexpected subtraction result"); //test assertions
            expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});