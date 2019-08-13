const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect;

const app = require('../main');

describe('test case 1', () => {
	it('200을 리턴해야 한다. (1000ms 이내)', function(done) {
		this.timeout(1000)
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200)
				done()
			})
	}),
	it('200을 리턴해야 한다. (100ms 이내)', function(done) {
		this.timeout(100)
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200)
				done()
			})
	}),
	it('200을 리턴해야 한다. (10ms 이내)', function(done) {
		this.timeout(10)
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200)
				done()
			})
	})
})

describe('test case 2', () => {
	it('GET / 테스트. return ("Hello World")', function(done) {
		this.timeout(1000)
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res.text).to.equal('Hello World')
				done()
			})
	}),
	it('GET /user 테스트. return { username: "John", pw: "test1234" }', function(done) {
		this.timeout(1000)
		chai.request(app)
			.get('/user')
			.end((err, res) => {
				expect(err).to.be.not.ok
				expect(res).to.have.status(200)
				expect(res).to.be.json
				expect(res.body).to.deep.equal({ username: "John", pw: "test1234" })
				done()
			})
	})
})