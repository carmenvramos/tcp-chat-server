const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });
   
    it('assigns names', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('gets username', () => {
        const gotClient = clients.get('user1');
        assert.equal(gotClient, c1);
    });

    it('renames username to newusername', () => {
        const newUsername = clients.rename(c1.username, 'carmen');
        assert.equal(newUsername, true);
        const gotClient = clients.get('user1');
        assert.notEqual(gotClient, 'user1');
        assert.equal(gotClient, 'carmen');
    });
});