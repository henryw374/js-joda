/**
 * copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

import {
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException
} from './errors';

import { Enum } from './Enum';
import { TemporalAccessor } from './temporal/TemporalAccessor';
import { Temporal } from './temporal/Temporal';
import { TemporalAdjuster } from './temporal/TemporalAdjuster';
import { DefaultInterfaceTemporal } from './temporal/DefaultInterfaceTemporal';
import { TemporalAdjusters } from './temporal/TemporalAdjusters';
import { TemporalAmount } from './temporal/TemporalAmount';
import { TemporalField } from './temporal/TemporalField';
import { TemporalQueries } from './temporal/TemporalQueries';
import { TemporalQueriesFactory } from './temporal/TemporalQueriesFactory';
import { TemporalQuery } from './temporal/TemporalQuery';
import { TemporalUnit } from './temporal/TemporalUnit';

import { ChronoLocalDate } from './chrono/ChronoLocalDate';
import { ChronoLocalDateTime } from './chrono/ChronoLocalDateTime';
import { ChronoZonedDateTime } from './chrono/ChronoZonedDateTime';
import { IsoChronology } from './chrono/IsoChronology';

import { ChronoField } from './temporal/ChronoField';
import { ChronoUnit } from './temporal/ChronoUnit';


import { Clock } from './Clock';
import { DayOfWeek } from './DayOfWeek';
import { Duration } from './Duration';
import { Instant } from './Instant';
import { LocalDate } from './LocalDate';
import { LocalTime } from './LocalTime';
import { LocalDateTime } from './LocalDateTime';
import { Month } from './Month';
import { MonthDay } from './MonthDay';
import { Period } from './Period';
import { Year } from './Year';
import { YearConstants } from './YearConstants';
import { YearMonth } from './YearMonth';
import { ZonedDateTime } from './ZonedDateTime';

import { ZoneId } from './ZoneId';

import { ZoneIdFactory } from './ZoneIdFactory';
import { ZoneOffset } from './ZoneOffset';
import { ZoneRegion } from './ZoneRegion';

import { SystemDefaultZoneId } from './zone/SystemDefaultZoneId';

import { ZoneOffsetTransition } from './zone/ZoneOffsetTransition';
import { ZoneRules } from './zone/ZoneRules';
import { SystemDefaultZoneRules } from './zone/SystemDefaultZoneRules';
import { ZoneRulesProvider } from './zone/ZoneRulesProvider';




import { IsoFields } from './temporal/IsoFields';
import { ValueRange } from './temporal/ValueRange';

'./format/DateTimeBuilder';
'./format/DateTimeFormatter';
'./format/DateTimeFormatterBuilder';
'./format/DateTimeParseContext';
'./format/DateTimePrintContext';
'./format/DecimalStyle';
'./format/EnumMap';
'./format/ParsePosition';
'./format/parser/CharLiteralPrinterParser';
'./format/parser/CompositePrinterParser';
'./format/parser/FractionPrinterParser';
'./format/parser/NumberPrinterParser';
'./format/parser/OffsetIdPrinterParser';
'./format/parser/PadPrinterParserDecorator';
'./format/parser/SettingsParser';
'./format/parser/StringLiteralPrinterParser';
'./format/parser/ZoneIdPrinterParser';
'./format/ResolverStyle';
'./format/SignStyle';
'./format/StringBuilder';
'./format/TextStyle';


// init static properties
import './_init';

// private/internal exports, e.g. for use in plugins
import { MathUtil } from './MathUtil';
import { StringUtil } from './StringUtil';
import * as assert from './assert';

import { convert } from './convert';
import { nativeJs } from './temporal/NativeJsTemporal';
import { bindUse } from './use';

const _ = {
    assert,
    DateTimeBuilder,
    DateTimeParseContext,
    DateTimePrintContext,
    MathUtil,
    StringUtil,
    StringBuilder,
};

const jsJodaExports = {
    _,
    convert,
    nativeJs,
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException,
    Clock,
    DayOfWeek,
    Duration,
    Instant,
    LocalDate,
    LocalTime,
    LocalDateTime,
    Month,
    MonthDay,
    Period,
    Year,
    YearConstants,
    YearMonth,
    ZonedDateTime,
    ZoneOffset,
    ZoneId,
    ZoneRegion,
    ZoneOffsetTransition,
    ZoneRules,
    ZoneRulesProvider,
    ChronoLocalDate,
    ChronoLocalDateTime,
    ChronoZonedDateTime,
    IsoChronology,
    ChronoField,
    ChronoUnit,
    IsoFields,
    Temporal,
    TemporalAccessor,
    TemporalAdjuster,
    TemporalAdjusters,
    TemporalAmount,
    TemporalField,
    TemporalQueries,
    TemporalQuery,
    TemporalUnit,
    ValueRange,
    DateTimeFormatter,
    DateTimeFormatterBuilder,
    DecimalStyle,
    ResolverStyle,
    SignStyle,
    TextStyle,
};

const use = bindUse(jsJodaExports);
jsJodaExports.use = use;

export {
    _,
    use,
    convert,
    nativeJs,
    ArithmeticException,
    DateTimeException,
    DateTimeParseException,
    IllegalArgumentException,
    IllegalStateException,
    UnsupportedTemporalTypeException,
    NullPointerException,
    Clock,
    DayOfWeek,
    Duration,
    Instant,
    LocalDate,
    LocalTime,
    LocalDateTime,
    Month,
    MonthDay,
    Period,
    Year,
    YearConstants,
    YearMonth,
    ZonedDateTime,
    ZoneOffset,
    ZoneId,
    ZoneRegion,
    ZoneOffsetTransition,
    ZoneRules,
    ZoneRulesProvider,
    ChronoLocalDate,
    ChronoLocalDateTime,
    ChronoZonedDateTime,
    IsoChronology,
    ChronoField,
    ChronoUnit,
    IsoFields,
    Temporal,
    TemporalAccessor,
    TemporalAdjuster,
    TemporalAdjusters,
    TemporalAmount,
    TemporalField,
    TemporalQueries,
    TemporalQuery,
    TemporalUnit,
    ValueRange,
    DateTimeFormatter,
    DateTimeFormatterBuilder,
    DecimalStyle,
    ResolverStyle,
    SignStyle,
    TextStyle,
};
