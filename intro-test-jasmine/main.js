/** 
 * Test Suite
 */
describe( `${Person.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new Person();
        console.log('Before Each');
    })
    describe('Default Values', ()=>{
        it('first name defaults to empty string', () => {
            console.log(1)
            // assert
            expect(model.firstName).toBe('');
            
        });
        it('last name defaults to empty string', () => {
            console.log(2)
            // assert
            expect(model.lastName).toBe('');
            
        });

        it('middle name defaults to empty string', () => {
            console.log(3)
            // assert
            expect(model.middleName).toBe('');
            
        });
    });
});

describe(' full name ', () => {
    beforeEach(() => {
        model = new Person({
            firstName: 'Zach',
            lastName: 'Wright', 
        });
        
    });
    it('middle initial when defined with first and last name', () => {
        // arrange
        model.middleName = 'Taylor';

        // act
        const result = model.fullName
        console.log(result);

        // audit 
        const { firstName: fn, lastName: ln, middleName: mn} = model
        // assert
        expect(result).toBe(`${fn} ${mn[0]}. ${ln}`)
    });

    it('when middle name is NOT defined, just first and last', () => {
        // arrange
        model.middleName = '';

        //act 
        const result = model.fullName;

        // audit
        const {firstName: fn, lastName: ln} = model
        // assert
        expect(result).toBe(`${fn} ${ln}`)

    });
});