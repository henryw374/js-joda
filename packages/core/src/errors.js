/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */


export function DateTimeException                (){} //= createErrorType('DateTimeException', messageWithCause);
export function DateTimeParseException           (){} //= createErrorType('DateTimeParseException', messageForDateTimeParseException);
export function UnsupportedTemporalTypeException (){} //= createErrorType('UnsupportedTemporalTypeException', null, DateTimeException);
export function ArithmeticException              (){} //= createErrorType('ArithmeticException');
export function IllegalArgumentException         (){} //= createErrorType('IllegalArgumentException');
export function IllegalStateException            (){} //= createErrorType('IllegalStateException');
export function NullPointerException             (){} //= createErrorType('NullPointerException');

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
