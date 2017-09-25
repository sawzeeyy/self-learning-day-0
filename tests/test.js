import chai, {assert} from 'chai';
import mocha from 'mocha';
import AritGeo from '../src/main.js';

describe("AritGeo", () => {
	describe("handle valid input", () => {

		it("should return 'Arithmetic' for [2,4,6,8]", () =>  {
			assert.equal(AritGeo([2,4,6,8]), 'Arithmetic');
		});

		it("should return 'Geometric' for [3,9,27,81]", () =>  {
			assert.equal(AritGeo([3,9,27,81]), 'Geometric');
		});

		it("should return '-1' for [1,2]", () =>  {
			assert.equal(AritGeo([1,2]), '-1');
		});
	})

	describe("handle invalid input", () => {

		it("should return 'undefined' for notArray",  () => {
			assert.equal(AritGeo('notArray'), 'undefined');
		});

		it("should return '-1' for [1,3,4,5,7]",  () => {
			assert.equal(AritGeo([1,3,4,5,7]), '-1');
		});

		it("should return '-1' for [2947982798]", () => {
			assert.equal(AritGeo([2947982798]), '-1');
		});

		it("should return '-1' for [81,72,27,9,3]",  () => {
			assert.equal(AritGeo([81,72,27,9,3]), '-1');
		});
	})
})