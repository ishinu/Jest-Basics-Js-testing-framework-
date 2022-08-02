const functions = require('./function.js');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized ... ');
const closeDatabase = () => console.log('Database Closed ... ');

const nameCheck = () => console.log('Checking Name...');

describe('Checking names', () => {
    beforeEach(() => nameCheck());
    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });
    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

/* 
    1. toBe() expects the returned value to equal what value we passed.
    2. not.toBe() expects the returned value to not equal the one we passed.
    3. toBeNull()
    4. toBeUndefined
    5. toBeDefined
    6. toBeTruthy
    7. toBeFalse
    8. toEqual
    9. toBeLessThan
    10.toBeGreaterThan
    11.toBeLessThanOrEqual
    12.toMatch
    13.toContain
*/

test('Should be null', () => {
    expect(functions.checkIfNull()).toBeNull();
});

test('Should be false', () => {
    // Test passes for false/null/0/undefined values but not for true.
    // expect(functions.checkValue(null)).toBeFalsy();
    // expect(functions.checkValue(0)).toBeFalsy();
    // expect(functions.checkValue(undefined)).toBeFalsy();
    // expect(functions.checkValue(false)).toBeFalsy();
    // expect(functions.checkValue(2)).not.toBeFalsy();
    expect(functions.checkValue(2)).not.toBeFalsy();
});

test('User should be Brae Naaaeif object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Brae', 
        lastName: 'Naaaeif'
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    const load3 = 800;
    // expect(load1 + load2).toBeLessThan(1600);
    // expect(load1 + load3).toBeLessThanOrEqual(1600);
    expect(load1 + load3).toBeGreaterThan(1300);
});

test('There is no I in team', () => {
    // expect('team').not.toMatch(/t/);
    // expect('team').not.toMatch(/I/i);
    expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    usernames = ['John','Jaeea','Esve','admin'];
    expect(usernames).toContain('admin');
});

/* 
    ~ async data implementation
    i) Promise
*/
test('User fetched name should be Leanne Graham using Promise',() => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

/* 
    ~ async data implementation
    ii) Async await 
*/

test('User fetched name should be Leanne Graham using async await', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});