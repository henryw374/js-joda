/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */


export class DateTimeException                 extends Error {} //= createErrorType('DateTimeException', messageWithCause);
export class DateTimeParseException            extends Error {} //= createErrorType('DateTimeParseException', messageForDateTimeParseException);
export class UnsupportedTemporalTypeException  extends Error {} //= createErrorType('UnsupportedTemporalTypeException', null, DateTimeException);
export class ArithmeticException               extends Error {} //= createErrorType('ArithmeticException');
export class IllegalArgumentException          extends Error {} //= createErrorType('IllegalArgumentException');
export class IllegalStateException             extends Error {} //= createErrorType('IllegalStateException');
export class NullPointerException              extends Error {} //= createErrorType('NullPointerException');

function messageWithCause(message, cause = null) {
    let msg = message || this.name;
    if (cause !== null && cause instanceof Error) {
        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
    }
    this.message = msg;
}

function messageForDateTimeParseException(message, text = '', index = 0, cause = null) {
    let msg = message || this.name;
    msg += ': ' + text + ', at index: ' + index;
    if (cause !== null && cause instanceof Error) {
        msg += '\n-------\nCaused by: ' + cause.stack + '\n-------\n';
    }
    this.message = msg;
    this.parsedString = () => {
        return text;
    };
    this.errorIndex = () => {
        return index;
    };
}
