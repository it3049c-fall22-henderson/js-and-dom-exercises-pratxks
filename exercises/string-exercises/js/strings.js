class StringFunctions {
  /**
   * @param {string} input
   * @returns {string}
   * @example
   * capitalize('hello world') // 'Hello world'
   * capitalize('HELLO WORLD') // 'Hello world'
   */
  capitalize(input) {
    return input.toUpperCase();
  }
  /**
   * Returns a reversed string. Example: "abc" => "cba"
   * @param {string} input - the string input to be processed 
   * @returns  {string} - the reversed string
   * @example
   * reverse('abc') // 'cba'
   */
  reverse(input) {
    const inputchars = input.split('');
    const revertedchars = inputchars.reverse();
    const reversedinput = revertedchars.join('');

    return reversedinput.toString();
  }
  /**
   * Returns an array of the words in a string
   * @param {string} input - the string input to be processed
   * @returns {string[]} - an array of words in the string
   * @example
   * words('hello world') // ['hello', 'world']
   */
  split(input) {
    const inputarr = input.split(' ');
    return inputarr;
  }
}
