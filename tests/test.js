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

		it("should return 'Arithmetic' for [1,3,5,7,9]", () =>  {
			assert.equal(AritGeo([1,3,5,7,9]), 'Arithmetic');
		});

		it("should return 'Geometric' for [2,4,8,16,32]", () =>  {
			assert.equal(AritGeo([2,4,8,16,32]), 'Geometric');
		});

		it("should return '0' for []", () =>  {
			assert.equal(AritGeo([]), '0');
		});

		it("should return 'Arithmetic' for [9,8,7,6,5]", () =>  {
			assert.equal(AritGeo([9,8,7,6,5]), 'Arithmetic');
		});

		it("should return 'Geometric' for [64,32,16,8,4]", () =>  {
			assert.equal(AritGeo([64,32,16,8,4]), 'Geometric');
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

		it("should return 'undefined' for oneMillionWords",  () => {
			assert.equal(AritGeo('oneMillionWords'), 'undefined');
		});

		it("should return '-1' for [2,4,8,10,12,16]", () =>  {
			assert.equal(AritGeo([2,4,8,10,12,16]), '-1');
		});

		it("should return '-1' for [2]", () => {
			assert.equal(AritGeo([2]), '-1');
		});

		it("should return '-1' for [1,2,3,6]", () =>  {
			assert.equal(AritGeo([1,2,3,6]), '-1');
		});
	})
})