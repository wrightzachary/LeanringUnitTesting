const functions = require('./functions');

// toBe 4
test('Add 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// toBe not 5
test('Add 2+2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual user
test('User should be Zach Wright Object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Zach', 
        lastName: 'Wright'
    });
});

// toBeLessThanOrEqual
test('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//regex
test('There is no i in team', () => {
    expect('team').not.toMatch(/I/i);
});

// arrays
test('Admin should be in  usernames', () =>{
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async data
test('User fetched name should be Leanne Graham', () =>{
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
})