const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);

		expect(message).toInclude({from, text});
		expect(message.createdAt).toBeA('number');
	});
});