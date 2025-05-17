
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TestRun
 * 
 */
export type TestRun = $Result.DefaultSelection<Prisma.$TestRunPayload>
/**
 * Model TestLog
 * 
 */
export type TestLog = $Result.DefaultSelection<Prisma.$TestLogPayload>
/**
 * Model TestEnvironment
 * 
 */
export type TestEnvironment = $Result.DefaultSelection<Prisma.$TestEnvironmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TestRuns
 * const testRuns = await prisma.testRun.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TestRuns
   * const testRuns = await prisma.testRun.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.testRun`: Exposes CRUD operations for the **TestRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestRuns
    * const testRuns = await prisma.testRun.findMany()
    * ```
    */
  get testRun(): Prisma.TestRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testLog`: Exposes CRUD operations for the **TestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestLogs
    * const testLogs = await prisma.testLog.findMany()
    * ```
    */
  get testLog(): Prisma.TestLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testEnvironment`: Exposes CRUD operations for the **TestEnvironment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestEnvironments
    * const testEnvironments = await prisma.testEnvironment.findMany()
    * ```
    */
  get testEnvironment(): Prisma.TestEnvironmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TestRun: 'TestRun',
    TestLog: 'TestLog',
    TestEnvironment: 'TestEnvironment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db_test_preprod?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "testRun" | "testLog" | "testEnvironment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TestRun: {
        payload: Prisma.$TestRunPayload<ExtArgs>
        fields: Prisma.TestRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findFirst: {
            args: Prisma.TestRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          findMany: {
            args: Prisma.TestRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>[]
          }
          create: {
            args: Prisma.TestRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          createMany: {
            args: Prisma.TestRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          update: {
            args: Prisma.TestRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          deleteMany: {
            args: Prisma.TestRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestRunPayload>
          }
          aggregate: {
            args: Prisma.TestRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestRun>
          }
          groupBy: {
            args: Prisma.TestRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestRunCountArgs<ExtArgs>
            result: $Utils.Optional<TestRunCountAggregateOutputType> | number
          }
        }
      }
      TestLog: {
        payload: Prisma.$TestLogPayload<ExtArgs>
        fields: Prisma.TestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          findFirst: {
            args: Prisma.TestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          findMany: {
            args: Prisma.TestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>[]
          }
          create: {
            args: Prisma.TestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          createMany: {
            args: Prisma.TestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          update: {
            args: Prisma.TestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          deleteMany: {
            args: Prisma.TestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestLogPayload>
          }
          aggregate: {
            args: Prisma.TestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestLog>
          }
          groupBy: {
            args: Prisma.TestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestLogCountArgs<ExtArgs>
            result: $Utils.Optional<TestLogCountAggregateOutputType> | number
          }
        }
      }
      TestEnvironment: {
        payload: Prisma.$TestEnvironmentPayload<ExtArgs>
        fields: Prisma.TestEnvironmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestEnvironmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestEnvironmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          findFirst: {
            args: Prisma.TestEnvironmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestEnvironmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          findMany: {
            args: Prisma.TestEnvironmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>[]
          }
          create: {
            args: Prisma.TestEnvironmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          createMany: {
            args: Prisma.TestEnvironmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestEnvironmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          update: {
            args: Prisma.TestEnvironmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          deleteMany: {
            args: Prisma.TestEnvironmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestEnvironmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestEnvironmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestEnvironmentPayload>
          }
          aggregate: {
            args: Prisma.TestEnvironmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestEnvironment>
          }
          groupBy: {
            args: Prisma.TestEnvironmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestEnvironmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestEnvironmentCountArgs<ExtArgs>
            result: $Utils.Optional<TestEnvironmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    testRun?: TestRunOmit
    testLog?: TestLogOmit
    testEnvironment?: TestEnvironmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TestRunCountOutputType
   */

  export type TestRunCountOutputType = {
    testLogs: number
  }

  export type TestRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testLogs?: boolean | TestRunCountOutputTypeCountTestLogsArgs
  }

  // Custom InputTypes
  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRunCountOutputType
     */
    select?: TestRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestRunCountOutputType without action
   */
  export type TestRunCountOutputTypeCountTestLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TestRun
   */

  export type AggregateTestRun = {
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  export type TestRunAvgAggregateOutputType = {
    id: number | null
    testId: number | null
    duration: number | null
  }

  export type TestRunSumAggregateOutputType = {
    id: number | null
    testId: number | null
    duration: number | null
  }

  export type TestRunMinAggregateOutputType = {
    id: number | null
    testId: number | null
    status: string | null
    duration: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunMaxAggregateOutputType = {
    id: number | null
    testId: number | null
    status: string | null
    duration: number | null
    error: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestRunCountAggregateOutputType = {
    id: number
    testId: number
    status: number
    duration: number
    error: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestRunAvgAggregateInputType = {
    id?: true
    testId?: true
    duration?: true
  }

  export type TestRunSumAggregateInputType = {
    id?: true
    testId?: true
    duration?: true
  }

  export type TestRunMinAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    duration?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunMaxAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    duration?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestRunCountAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    duration?: true
    error?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRun to aggregate.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestRuns
    **/
    _count?: true | TestRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestRunMaxAggregateInputType
  }

  export type GetTestRunAggregateType<T extends TestRunAggregateArgs> = {
        [P in keyof T & keyof AggregateTestRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestRun[P]>
      : GetScalarType<T[P], AggregateTestRun[P]>
  }




  export type TestRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestRunWhereInput
    orderBy?: TestRunOrderByWithAggregationInput | TestRunOrderByWithAggregationInput[]
    by: TestRunScalarFieldEnum[] | TestRunScalarFieldEnum
    having?: TestRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestRunCountAggregateInputType | true
    _avg?: TestRunAvgAggregateInputType
    _sum?: TestRunSumAggregateInputType
    _min?: TestRunMinAggregateInputType
    _max?: TestRunMaxAggregateInputType
  }

  export type TestRunGroupByOutputType = {
    id: number
    testId: number
    status: string
    duration: number
    error: string | null
    startedAt: Date
    completedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: TestRunCountAggregateOutputType | null
    _avg: TestRunAvgAggregateOutputType | null
    _sum: TestRunSumAggregateOutputType | null
    _min: TestRunMinAggregateOutputType | null
    _max: TestRunMaxAggregateOutputType | null
  }

  type GetTestRunGroupByPayload<T extends TestRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestRunGroupByOutputType[P]>
            : GetScalarType<T[P], TestRunGroupByOutputType[P]>
        }
      >
    >


  export type TestRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    status?: boolean
    duration?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    testLogs?: boolean | TestRun$testLogsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testRun"]>



  export type TestRunSelectScalar = {
    id?: boolean
    testId?: boolean
    status?: boolean
    duration?: boolean
    error?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "status" | "duration" | "error" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["testRun"]>
  export type TestRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testLogs?: boolean | TestRun$testLogsArgs<ExtArgs>
    _count?: boolean | TestRunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TestRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestRun"
    objects: {
      testLogs: Prisma.$TestLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testId: number
      status: string
      duration: number
      error: string | null
      startedAt: Date
      completedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testRun"]>
    composites: {}
  }

  type TestRunGetPayload<S extends boolean | null | undefined | TestRunDefaultArgs> = $Result.GetResult<Prisma.$TestRunPayload, S>

  type TestRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestRunCountAggregateInputType | true
    }

  export interface TestRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestRun'], meta: { name: 'TestRun' } }
    /**
     * Find zero or one TestRun that matches the filter.
     * @param {TestRunFindUniqueArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestRunFindUniqueArgs>(args: SelectSubset<T, TestRunFindUniqueArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestRunFindUniqueOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestRunFindUniqueOrThrowArgs>(args: SelectSubset<T, TestRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestRunFindFirstArgs>(args?: SelectSubset<T, TestRunFindFirstArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindFirstOrThrowArgs} args - Arguments to find a TestRun
     * @example
     * // Get one TestRun
     * const testRun = await prisma.testRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestRunFindFirstOrThrowArgs>(args?: SelectSubset<T, TestRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestRuns
     * const testRuns = await prisma.testRun.findMany()
     * 
     * // Get first 10 TestRuns
     * const testRuns = await prisma.testRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testRunWithIdOnly = await prisma.testRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestRunFindManyArgs>(args?: SelectSubset<T, TestRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestRun.
     * @param {TestRunCreateArgs} args - Arguments to create a TestRun.
     * @example
     * // Create one TestRun
     * const TestRun = await prisma.testRun.create({
     *   data: {
     *     // ... data to create a TestRun
     *   }
     * })
     * 
     */
    create<T extends TestRunCreateArgs>(args: SelectSubset<T, TestRunCreateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestRuns.
     * @param {TestRunCreateManyArgs} args - Arguments to create many TestRuns.
     * @example
     * // Create many TestRuns
     * const testRun = await prisma.testRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestRunCreateManyArgs>(args?: SelectSubset<T, TestRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestRun.
     * @param {TestRunDeleteArgs} args - Arguments to delete one TestRun.
     * @example
     * // Delete one TestRun
     * const TestRun = await prisma.testRun.delete({
     *   where: {
     *     // ... filter to delete one TestRun
     *   }
     * })
     * 
     */
    delete<T extends TestRunDeleteArgs>(args: SelectSubset<T, TestRunDeleteArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestRun.
     * @param {TestRunUpdateArgs} args - Arguments to update one TestRun.
     * @example
     * // Update one TestRun
     * const testRun = await prisma.testRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestRunUpdateArgs>(args: SelectSubset<T, TestRunUpdateArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestRuns.
     * @param {TestRunDeleteManyArgs} args - Arguments to filter TestRuns to delete.
     * @example
     * // Delete a few TestRuns
     * const { count } = await prisma.testRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestRunDeleteManyArgs>(args?: SelectSubset<T, TestRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestRuns
     * const testRun = await prisma.testRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestRunUpdateManyArgs>(args: SelectSubset<T, TestRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestRun.
     * @param {TestRunUpsertArgs} args - Arguments to update or create a TestRun.
     * @example
     * // Update or create a TestRun
     * const testRun = await prisma.testRun.upsert({
     *   create: {
     *     // ... data to create a TestRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestRun we want to update
     *   }
     * })
     */
    upsert<T extends TestRunUpsertArgs>(args: SelectSubset<T, TestRunUpsertArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunCountArgs} args - Arguments to filter TestRuns to count.
     * @example
     * // Count the number of TestRuns
     * const count = await prisma.testRun.count({
     *   where: {
     *     // ... the filter for the TestRuns we want to count
     *   }
     * })
    **/
    count<T extends TestRunCountArgs>(
      args?: Subset<T, TestRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestRunAggregateArgs>(args: Subset<T, TestRunAggregateArgs>): Prisma.PrismaPromise<GetTestRunAggregateType<T>>

    /**
     * Group by TestRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestRunGroupByArgs['orderBy'] }
        : { orderBy?: TestRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestRun model
   */
  readonly fields: TestRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testLogs<T extends TestRun$testLogsArgs<ExtArgs> = {}>(args?: Subset<T, TestRun$testLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestRun model
   */
  interface TestRunFieldRefs {
    readonly id: FieldRef<"TestRun", 'Int'>
    readonly testId: FieldRef<"TestRun", 'Int'>
    readonly status: FieldRef<"TestRun", 'String'>
    readonly duration: FieldRef<"TestRun", 'Int'>
    readonly error: FieldRef<"TestRun", 'String'>
    readonly startedAt: FieldRef<"TestRun", 'DateTime'>
    readonly completedAt: FieldRef<"TestRun", 'DateTime'>
    readonly createdAt: FieldRef<"TestRun", 'DateTime'>
    readonly updatedAt: FieldRef<"TestRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestRun findUnique
   */
  export type TestRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findUniqueOrThrow
   */
  export type TestRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun findFirst
   */
  export type TestRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findFirstOrThrow
   */
  export type TestRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRun to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestRuns.
     */
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun findMany
   */
  export type TestRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter, which TestRuns to fetch.
     */
    where?: TestRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestRuns to fetch.
     */
    orderBy?: TestRunOrderByWithRelationInput | TestRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestRuns.
     */
    cursor?: TestRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestRuns.
     */
    skip?: number
    distinct?: TestRunScalarFieldEnum | TestRunScalarFieldEnum[]
  }

  /**
   * TestRun create
   */
  export type TestRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to create a TestRun.
     */
    data: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
  }

  /**
   * TestRun createMany
   */
  export type TestRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestRuns.
     */
    data: TestRunCreateManyInput | TestRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestRun update
   */
  export type TestRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The data needed to update a TestRun.
     */
    data: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
    /**
     * Choose, which TestRun to update.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun updateMany
   */
  export type TestRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestRuns.
     */
    data: XOR<TestRunUpdateManyMutationInput, TestRunUncheckedUpdateManyInput>
    /**
     * Filter which TestRuns to update
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to update.
     */
    limit?: number
  }

  /**
   * TestRun upsert
   */
  export type TestRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * The filter to search for the TestRun to update in case it exists.
     */
    where: TestRunWhereUniqueInput
    /**
     * In case the TestRun found by the `where` argument doesn't exist, create a new TestRun with this data.
     */
    create: XOR<TestRunCreateInput, TestRunUncheckedCreateInput>
    /**
     * In case the TestRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestRunUpdateInput, TestRunUncheckedUpdateInput>
  }

  /**
   * TestRun delete
   */
  export type TestRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
    /**
     * Filter which TestRun to delete.
     */
    where: TestRunWhereUniqueInput
  }

  /**
   * TestRun deleteMany
   */
  export type TestRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestRuns to delete
     */
    where?: TestRunWhereInput
    /**
     * Limit how many TestRuns to delete.
     */
    limit?: number
  }

  /**
   * TestRun.testLogs
   */
  export type TestRun$testLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    where?: TestLogWhereInput
    orderBy?: TestLogOrderByWithRelationInput | TestLogOrderByWithRelationInput[]
    cursor?: TestLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestLogScalarFieldEnum | TestLogScalarFieldEnum[]
  }

  /**
   * TestRun without action
   */
  export type TestRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestRun
     */
    select?: TestRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestRun
     */
    omit?: TestRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestRunInclude<ExtArgs> | null
  }


  /**
   * Model TestLog
   */

  export type AggregateTestLog = {
    _count: TestLogCountAggregateOutputType | null
    _avg: TestLogAvgAggregateOutputType | null
    _sum: TestLogSumAggregateOutputType | null
    _min: TestLogMinAggregateOutputType | null
    _max: TestLogMaxAggregateOutputType | null
  }

  export type TestLogAvgAggregateOutputType = {
    id: number | null
    testRunId: number | null
  }

  export type TestLogSumAggregateOutputType = {
    id: number | null
    testRunId: number | null
  }

  export type TestLogMinAggregateOutputType = {
    id: number | null
    testRunId: number | null
    logLevel: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TestLogMaxAggregateOutputType = {
    id: number | null
    testRunId: number | null
    logLevel: string | null
    message: string | null
    createdAt: Date | null
  }

  export type TestLogCountAggregateOutputType = {
    id: number
    testRunId: number
    logLevel: number
    message: number
    createdAt: number
    _all: number
  }


  export type TestLogAvgAggregateInputType = {
    id?: true
    testRunId?: true
  }

  export type TestLogSumAggregateInputType = {
    id?: true
    testRunId?: true
  }

  export type TestLogMinAggregateInputType = {
    id?: true
    testRunId?: true
    logLevel?: true
    message?: true
    createdAt?: true
  }

  export type TestLogMaxAggregateInputType = {
    id?: true
    testRunId?: true
    logLevel?: true
    message?: true
    createdAt?: true
  }

  export type TestLogCountAggregateInputType = {
    id?: true
    testRunId?: true
    logLevel?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type TestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestLog to aggregate.
     */
    where?: TestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestLogs to fetch.
     */
    orderBy?: TestLogOrderByWithRelationInput | TestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestLogs
    **/
    _count?: true | TestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestLogMaxAggregateInputType
  }

  export type GetTestLogAggregateType<T extends TestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestLog[P]>
      : GetScalarType<T[P], AggregateTestLog[P]>
  }




  export type TestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestLogWhereInput
    orderBy?: TestLogOrderByWithAggregationInput | TestLogOrderByWithAggregationInput[]
    by: TestLogScalarFieldEnum[] | TestLogScalarFieldEnum
    having?: TestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestLogCountAggregateInputType | true
    _avg?: TestLogAvgAggregateInputType
    _sum?: TestLogSumAggregateInputType
    _min?: TestLogMinAggregateInputType
    _max?: TestLogMaxAggregateInputType
  }

  export type TestLogGroupByOutputType = {
    id: number
    testRunId: number
    logLevel: string
    message: string
    createdAt: Date
    _count: TestLogCountAggregateOutputType | null
    _avg: TestLogAvgAggregateOutputType | null
    _sum: TestLogSumAggregateOutputType | null
    _min: TestLogMinAggregateOutputType | null
    _max: TestLogMaxAggregateOutputType | null
  }

  type GetTestLogGroupByPayload<T extends TestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestLogGroupByOutputType[P]>
            : GetScalarType<T[P], TestLogGroupByOutputType[P]>
        }
      >
    >


  export type TestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testRunId?: boolean
    logLevel?: boolean
    message?: boolean
    createdAt?: boolean
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testLog"]>



  export type TestLogSelectScalar = {
    id?: boolean
    testRunId?: boolean
    logLevel?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type TestLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testRunId" | "logLevel" | "message" | "createdAt", ExtArgs["result"]["testLog"]>
  export type TestLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testRun?: boolean | TestRunDefaultArgs<ExtArgs>
  }

  export type $TestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestLog"
    objects: {
      testRun: Prisma.$TestRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testRunId: number
      logLevel: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["testLog"]>
    composites: {}
  }

  type TestLogGetPayload<S extends boolean | null | undefined | TestLogDefaultArgs> = $Result.GetResult<Prisma.$TestLogPayload, S>

  type TestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestLogCountAggregateInputType | true
    }

  export interface TestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestLog'], meta: { name: 'TestLog' } }
    /**
     * Find zero or one TestLog that matches the filter.
     * @param {TestLogFindUniqueArgs} args - Arguments to find a TestLog
     * @example
     * // Get one TestLog
     * const testLog = await prisma.testLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestLogFindUniqueArgs>(args: SelectSubset<T, TestLogFindUniqueArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestLogFindUniqueOrThrowArgs} args - Arguments to find a TestLog
     * @example
     * // Get one TestLog
     * const testLog = await prisma.testLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogFindFirstArgs} args - Arguments to find a TestLog
     * @example
     * // Get one TestLog
     * const testLog = await prisma.testLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestLogFindFirstArgs>(args?: SelectSubset<T, TestLogFindFirstArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogFindFirstOrThrowArgs} args - Arguments to find a TestLog
     * @example
     * // Get one TestLog
     * const testLog = await prisma.testLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestLogs
     * const testLogs = await prisma.testLog.findMany()
     * 
     * // Get first 10 TestLogs
     * const testLogs = await prisma.testLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testLogWithIdOnly = await prisma.testLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestLogFindManyArgs>(args?: SelectSubset<T, TestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestLog.
     * @param {TestLogCreateArgs} args - Arguments to create a TestLog.
     * @example
     * // Create one TestLog
     * const TestLog = await prisma.testLog.create({
     *   data: {
     *     // ... data to create a TestLog
     *   }
     * })
     * 
     */
    create<T extends TestLogCreateArgs>(args: SelectSubset<T, TestLogCreateArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestLogs.
     * @param {TestLogCreateManyArgs} args - Arguments to create many TestLogs.
     * @example
     * // Create many TestLogs
     * const testLog = await prisma.testLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestLogCreateManyArgs>(args?: SelectSubset<T, TestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestLog.
     * @param {TestLogDeleteArgs} args - Arguments to delete one TestLog.
     * @example
     * // Delete one TestLog
     * const TestLog = await prisma.testLog.delete({
     *   where: {
     *     // ... filter to delete one TestLog
     *   }
     * })
     * 
     */
    delete<T extends TestLogDeleteArgs>(args: SelectSubset<T, TestLogDeleteArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestLog.
     * @param {TestLogUpdateArgs} args - Arguments to update one TestLog.
     * @example
     * // Update one TestLog
     * const testLog = await prisma.testLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestLogUpdateArgs>(args: SelectSubset<T, TestLogUpdateArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestLogs.
     * @param {TestLogDeleteManyArgs} args - Arguments to filter TestLogs to delete.
     * @example
     * // Delete a few TestLogs
     * const { count } = await prisma.testLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestLogDeleteManyArgs>(args?: SelectSubset<T, TestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestLogs
     * const testLog = await prisma.testLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestLogUpdateManyArgs>(args: SelectSubset<T, TestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestLog.
     * @param {TestLogUpsertArgs} args - Arguments to update or create a TestLog.
     * @example
     * // Update or create a TestLog
     * const testLog = await prisma.testLog.upsert({
     *   create: {
     *     // ... data to create a TestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestLog we want to update
     *   }
     * })
     */
    upsert<T extends TestLogUpsertArgs>(args: SelectSubset<T, TestLogUpsertArgs<ExtArgs>>): Prisma__TestLogClient<$Result.GetResult<Prisma.$TestLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogCountArgs} args - Arguments to filter TestLogs to count.
     * @example
     * // Count the number of TestLogs
     * const count = await prisma.testLog.count({
     *   where: {
     *     // ... the filter for the TestLogs we want to count
     *   }
     * })
    **/
    count<T extends TestLogCountArgs>(
      args?: Subset<T, TestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestLogAggregateArgs>(args: Subset<T, TestLogAggregateArgs>): Prisma.PrismaPromise<GetTestLogAggregateType<T>>

    /**
     * Group by TestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestLogGroupByArgs['orderBy'] }
        : { orderBy?: TestLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestLog model
   */
  readonly fields: TestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    testRun<T extends TestRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestRunDefaultArgs<ExtArgs>>): Prisma__TestRunClient<$Result.GetResult<Prisma.$TestRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestLog model
   */
  interface TestLogFieldRefs {
    readonly id: FieldRef<"TestLog", 'Int'>
    readonly testRunId: FieldRef<"TestLog", 'Int'>
    readonly logLevel: FieldRef<"TestLog", 'String'>
    readonly message: FieldRef<"TestLog", 'String'>
    readonly createdAt: FieldRef<"TestLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestLog findUnique
   */
  export type TestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter, which TestLog to fetch.
     */
    where: TestLogWhereUniqueInput
  }

  /**
   * TestLog findUniqueOrThrow
   */
  export type TestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter, which TestLog to fetch.
     */
    where: TestLogWhereUniqueInput
  }

  /**
   * TestLog findFirst
   */
  export type TestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter, which TestLog to fetch.
     */
    where?: TestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestLogs to fetch.
     */
    orderBy?: TestLogOrderByWithRelationInput | TestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestLogs.
     */
    cursor?: TestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestLogs.
     */
    distinct?: TestLogScalarFieldEnum | TestLogScalarFieldEnum[]
  }

  /**
   * TestLog findFirstOrThrow
   */
  export type TestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter, which TestLog to fetch.
     */
    where?: TestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestLogs to fetch.
     */
    orderBy?: TestLogOrderByWithRelationInput | TestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestLogs.
     */
    cursor?: TestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestLogs.
     */
    distinct?: TestLogScalarFieldEnum | TestLogScalarFieldEnum[]
  }

  /**
   * TestLog findMany
   */
  export type TestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter, which TestLogs to fetch.
     */
    where?: TestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestLogs to fetch.
     */
    orderBy?: TestLogOrderByWithRelationInput | TestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestLogs.
     */
    cursor?: TestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestLogs.
     */
    skip?: number
    distinct?: TestLogScalarFieldEnum | TestLogScalarFieldEnum[]
  }

  /**
   * TestLog create
   */
  export type TestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TestLog.
     */
    data: XOR<TestLogCreateInput, TestLogUncheckedCreateInput>
  }

  /**
   * TestLog createMany
   */
  export type TestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestLogs.
     */
    data: TestLogCreateManyInput | TestLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestLog update
   */
  export type TestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TestLog.
     */
    data: XOR<TestLogUpdateInput, TestLogUncheckedUpdateInput>
    /**
     * Choose, which TestLog to update.
     */
    where: TestLogWhereUniqueInput
  }

  /**
   * TestLog updateMany
   */
  export type TestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestLogs.
     */
    data: XOR<TestLogUpdateManyMutationInput, TestLogUncheckedUpdateManyInput>
    /**
     * Filter which TestLogs to update
     */
    where?: TestLogWhereInput
    /**
     * Limit how many TestLogs to update.
     */
    limit?: number
  }

  /**
   * TestLog upsert
   */
  export type TestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TestLog to update in case it exists.
     */
    where: TestLogWhereUniqueInput
    /**
     * In case the TestLog found by the `where` argument doesn't exist, create a new TestLog with this data.
     */
    create: XOR<TestLogCreateInput, TestLogUncheckedCreateInput>
    /**
     * In case the TestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestLogUpdateInput, TestLogUncheckedUpdateInput>
  }

  /**
   * TestLog delete
   */
  export type TestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
    /**
     * Filter which TestLog to delete.
     */
    where: TestLogWhereUniqueInput
  }

  /**
   * TestLog deleteMany
   */
  export type TestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestLogs to delete
     */
    where?: TestLogWhereInput
    /**
     * Limit how many TestLogs to delete.
     */
    limit?: number
  }

  /**
   * TestLog without action
   */
  export type TestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestLog
     */
    select?: TestLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestLog
     */
    omit?: TestLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestLogInclude<ExtArgs> | null
  }


  /**
   * Model TestEnvironment
   */

  export type AggregateTestEnvironment = {
    _count: TestEnvironmentCountAggregateOutputType | null
    _avg: TestEnvironmentAvgAggregateOutputType | null
    _sum: TestEnvironmentSumAggregateOutputType | null
    _min: TestEnvironmentMinAggregateOutputType | null
    _max: TestEnvironmentMaxAggregateOutputType | null
  }

  export type TestEnvironmentAvgAggregateOutputType = {
    id: number | null
  }

  export type TestEnvironmentSumAggregateOutputType = {
    id: number | null
  }

  export type TestEnvironmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestEnvironmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestEnvironmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestEnvironmentAvgAggregateInputType = {
    id?: true
  }

  export type TestEnvironmentSumAggregateInputType = {
    id?: true
  }

  export type TestEnvironmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestEnvironmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestEnvironmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestEnvironmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestEnvironment to aggregate.
     */
    where?: TestEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestEnvironments to fetch.
     */
    orderBy?: TestEnvironmentOrderByWithRelationInput | TestEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestEnvironments
    **/
    _count?: true | TestEnvironmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestEnvironmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestEnvironmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestEnvironmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestEnvironmentMaxAggregateInputType
  }

  export type GetTestEnvironmentAggregateType<T extends TestEnvironmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTestEnvironment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestEnvironment[P]>
      : GetScalarType<T[P], AggregateTestEnvironment[P]>
  }




  export type TestEnvironmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestEnvironmentWhereInput
    orderBy?: TestEnvironmentOrderByWithAggregationInput | TestEnvironmentOrderByWithAggregationInput[]
    by: TestEnvironmentScalarFieldEnum[] | TestEnvironmentScalarFieldEnum
    having?: TestEnvironmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestEnvironmentCountAggregateInputType | true
    _avg?: TestEnvironmentAvgAggregateInputType
    _sum?: TestEnvironmentSumAggregateInputType
    _min?: TestEnvironmentMinAggregateInputType
    _max?: TestEnvironmentMaxAggregateInputType
  }

  export type TestEnvironmentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestEnvironmentCountAggregateOutputType | null
    _avg: TestEnvironmentAvgAggregateOutputType | null
    _sum: TestEnvironmentSumAggregateOutputType | null
    _min: TestEnvironmentMinAggregateOutputType | null
    _max: TestEnvironmentMaxAggregateOutputType | null
  }

  type GetTestEnvironmentGroupByPayload<T extends TestEnvironmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestEnvironmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestEnvironmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestEnvironmentGroupByOutputType[P]>
            : GetScalarType<T[P], TestEnvironmentGroupByOutputType[P]>
        }
      >
    >


  export type TestEnvironmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["testEnvironment"]>



  export type TestEnvironmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestEnvironmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["testEnvironment"]>

  export type $TestEnvironmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestEnvironment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testEnvironment"]>
    composites: {}
  }

  type TestEnvironmentGetPayload<S extends boolean | null | undefined | TestEnvironmentDefaultArgs> = $Result.GetResult<Prisma.$TestEnvironmentPayload, S>

  type TestEnvironmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestEnvironmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestEnvironmentCountAggregateInputType | true
    }

  export interface TestEnvironmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestEnvironment'], meta: { name: 'TestEnvironment' } }
    /**
     * Find zero or one TestEnvironment that matches the filter.
     * @param {TestEnvironmentFindUniqueArgs} args - Arguments to find a TestEnvironment
     * @example
     * // Get one TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestEnvironmentFindUniqueArgs>(args: SelectSubset<T, TestEnvironmentFindUniqueArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestEnvironment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestEnvironmentFindUniqueOrThrowArgs} args - Arguments to find a TestEnvironment
     * @example
     * // Get one TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestEnvironmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TestEnvironmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestEnvironment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentFindFirstArgs} args - Arguments to find a TestEnvironment
     * @example
     * // Get one TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestEnvironmentFindFirstArgs>(args?: SelectSubset<T, TestEnvironmentFindFirstArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestEnvironment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentFindFirstOrThrowArgs} args - Arguments to find a TestEnvironment
     * @example
     * // Get one TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestEnvironmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TestEnvironmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestEnvironments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestEnvironments
     * const testEnvironments = await prisma.testEnvironment.findMany()
     * 
     * // Get first 10 TestEnvironments
     * const testEnvironments = await prisma.testEnvironment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testEnvironmentWithIdOnly = await prisma.testEnvironment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestEnvironmentFindManyArgs>(args?: SelectSubset<T, TestEnvironmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestEnvironment.
     * @param {TestEnvironmentCreateArgs} args - Arguments to create a TestEnvironment.
     * @example
     * // Create one TestEnvironment
     * const TestEnvironment = await prisma.testEnvironment.create({
     *   data: {
     *     // ... data to create a TestEnvironment
     *   }
     * })
     * 
     */
    create<T extends TestEnvironmentCreateArgs>(args: SelectSubset<T, TestEnvironmentCreateArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestEnvironments.
     * @param {TestEnvironmentCreateManyArgs} args - Arguments to create many TestEnvironments.
     * @example
     * // Create many TestEnvironments
     * const testEnvironment = await prisma.testEnvironment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestEnvironmentCreateManyArgs>(args?: SelectSubset<T, TestEnvironmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TestEnvironment.
     * @param {TestEnvironmentDeleteArgs} args - Arguments to delete one TestEnvironment.
     * @example
     * // Delete one TestEnvironment
     * const TestEnvironment = await prisma.testEnvironment.delete({
     *   where: {
     *     // ... filter to delete one TestEnvironment
     *   }
     * })
     * 
     */
    delete<T extends TestEnvironmentDeleteArgs>(args: SelectSubset<T, TestEnvironmentDeleteArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestEnvironment.
     * @param {TestEnvironmentUpdateArgs} args - Arguments to update one TestEnvironment.
     * @example
     * // Update one TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestEnvironmentUpdateArgs>(args: SelectSubset<T, TestEnvironmentUpdateArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestEnvironments.
     * @param {TestEnvironmentDeleteManyArgs} args - Arguments to filter TestEnvironments to delete.
     * @example
     * // Delete a few TestEnvironments
     * const { count } = await prisma.testEnvironment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestEnvironmentDeleteManyArgs>(args?: SelectSubset<T, TestEnvironmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestEnvironments
     * const testEnvironment = await prisma.testEnvironment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestEnvironmentUpdateManyArgs>(args: SelectSubset<T, TestEnvironmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TestEnvironment.
     * @param {TestEnvironmentUpsertArgs} args - Arguments to update or create a TestEnvironment.
     * @example
     * // Update or create a TestEnvironment
     * const testEnvironment = await prisma.testEnvironment.upsert({
     *   create: {
     *     // ... data to create a TestEnvironment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestEnvironment we want to update
     *   }
     * })
     */
    upsert<T extends TestEnvironmentUpsertArgs>(args: SelectSubset<T, TestEnvironmentUpsertArgs<ExtArgs>>): Prisma__TestEnvironmentClient<$Result.GetResult<Prisma.$TestEnvironmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestEnvironments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentCountArgs} args - Arguments to filter TestEnvironments to count.
     * @example
     * // Count the number of TestEnvironments
     * const count = await prisma.testEnvironment.count({
     *   where: {
     *     // ... the filter for the TestEnvironments we want to count
     *   }
     * })
    **/
    count<T extends TestEnvironmentCountArgs>(
      args?: Subset<T, TestEnvironmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestEnvironmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestEnvironmentAggregateArgs>(args: Subset<T, TestEnvironmentAggregateArgs>): Prisma.PrismaPromise<GetTestEnvironmentAggregateType<T>>

    /**
     * Group by TestEnvironment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestEnvironmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestEnvironmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestEnvironmentGroupByArgs['orderBy'] }
        : { orderBy?: TestEnvironmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestEnvironmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestEnvironmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestEnvironment model
   */
  readonly fields: TestEnvironmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestEnvironment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestEnvironmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestEnvironment model
   */
  interface TestEnvironmentFieldRefs {
    readonly id: FieldRef<"TestEnvironment", 'Int'>
    readonly name: FieldRef<"TestEnvironment", 'String'>
    readonly description: FieldRef<"TestEnvironment", 'String'>
    readonly createdAt: FieldRef<"TestEnvironment", 'DateTime'>
    readonly updatedAt: FieldRef<"TestEnvironment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestEnvironment findUnique
   */
  export type TestEnvironmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter, which TestEnvironment to fetch.
     */
    where: TestEnvironmentWhereUniqueInput
  }

  /**
   * TestEnvironment findUniqueOrThrow
   */
  export type TestEnvironmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter, which TestEnvironment to fetch.
     */
    where: TestEnvironmentWhereUniqueInput
  }

  /**
   * TestEnvironment findFirst
   */
  export type TestEnvironmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter, which TestEnvironment to fetch.
     */
    where?: TestEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestEnvironments to fetch.
     */
    orderBy?: TestEnvironmentOrderByWithRelationInput | TestEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestEnvironments.
     */
    cursor?: TestEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestEnvironments.
     */
    distinct?: TestEnvironmentScalarFieldEnum | TestEnvironmentScalarFieldEnum[]
  }

  /**
   * TestEnvironment findFirstOrThrow
   */
  export type TestEnvironmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter, which TestEnvironment to fetch.
     */
    where?: TestEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestEnvironments to fetch.
     */
    orderBy?: TestEnvironmentOrderByWithRelationInput | TestEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestEnvironments.
     */
    cursor?: TestEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestEnvironments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestEnvironments.
     */
    distinct?: TestEnvironmentScalarFieldEnum | TestEnvironmentScalarFieldEnum[]
  }

  /**
   * TestEnvironment findMany
   */
  export type TestEnvironmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter, which TestEnvironments to fetch.
     */
    where?: TestEnvironmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestEnvironments to fetch.
     */
    orderBy?: TestEnvironmentOrderByWithRelationInput | TestEnvironmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestEnvironments.
     */
    cursor?: TestEnvironmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestEnvironments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestEnvironments.
     */
    skip?: number
    distinct?: TestEnvironmentScalarFieldEnum | TestEnvironmentScalarFieldEnum[]
  }

  /**
   * TestEnvironment create
   */
  export type TestEnvironmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * The data needed to create a TestEnvironment.
     */
    data: XOR<TestEnvironmentCreateInput, TestEnvironmentUncheckedCreateInput>
  }

  /**
   * TestEnvironment createMany
   */
  export type TestEnvironmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestEnvironments.
     */
    data: TestEnvironmentCreateManyInput | TestEnvironmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestEnvironment update
   */
  export type TestEnvironmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * The data needed to update a TestEnvironment.
     */
    data: XOR<TestEnvironmentUpdateInput, TestEnvironmentUncheckedUpdateInput>
    /**
     * Choose, which TestEnvironment to update.
     */
    where: TestEnvironmentWhereUniqueInput
  }

  /**
   * TestEnvironment updateMany
   */
  export type TestEnvironmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestEnvironments.
     */
    data: XOR<TestEnvironmentUpdateManyMutationInput, TestEnvironmentUncheckedUpdateManyInput>
    /**
     * Filter which TestEnvironments to update
     */
    where?: TestEnvironmentWhereInput
    /**
     * Limit how many TestEnvironments to update.
     */
    limit?: number
  }

  /**
   * TestEnvironment upsert
   */
  export type TestEnvironmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * The filter to search for the TestEnvironment to update in case it exists.
     */
    where: TestEnvironmentWhereUniqueInput
    /**
     * In case the TestEnvironment found by the `where` argument doesn't exist, create a new TestEnvironment with this data.
     */
    create: XOR<TestEnvironmentCreateInput, TestEnvironmentUncheckedCreateInput>
    /**
     * In case the TestEnvironment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestEnvironmentUpdateInput, TestEnvironmentUncheckedUpdateInput>
  }

  /**
   * TestEnvironment delete
   */
  export type TestEnvironmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
    /**
     * Filter which TestEnvironment to delete.
     */
    where: TestEnvironmentWhereUniqueInput
  }

  /**
   * TestEnvironment deleteMany
   */
  export type TestEnvironmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestEnvironments to delete
     */
    where?: TestEnvironmentWhereInput
    /**
     * Limit how many TestEnvironments to delete.
     */
    limit?: number
  }

  /**
   * TestEnvironment without action
   */
  export type TestEnvironmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestEnvironment
     */
    select?: TestEnvironmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestEnvironment
     */
    omit?: TestEnvironmentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestRunScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    status: 'status',
    duration: 'duration',
    error: 'error',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestRunScalarFieldEnum = (typeof TestRunScalarFieldEnum)[keyof typeof TestRunScalarFieldEnum]


  export const TestLogScalarFieldEnum: {
    id: 'id',
    testRunId: 'testRunId',
    logLevel: 'logLevel',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type TestLogScalarFieldEnum = (typeof TestLogScalarFieldEnum)[keyof typeof TestLogScalarFieldEnum]


  export const TestEnvironmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestEnvironmentScalarFieldEnum = (typeof TestEnvironmentScalarFieldEnum)[keyof typeof TestEnvironmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TestRunOrderByRelevanceFieldEnum: {
    status: 'status',
    error: 'error'
  };

  export type TestRunOrderByRelevanceFieldEnum = (typeof TestRunOrderByRelevanceFieldEnum)[keyof typeof TestRunOrderByRelevanceFieldEnum]


  export const TestLogOrderByRelevanceFieldEnum: {
    logLevel: 'logLevel',
    message: 'message'
  };

  export type TestLogOrderByRelevanceFieldEnum = (typeof TestLogOrderByRelevanceFieldEnum)[keyof typeof TestLogOrderByRelevanceFieldEnum]


  export const TestEnvironmentOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type TestEnvironmentOrderByRelevanceFieldEnum = (typeof TestEnvironmentOrderByRelevanceFieldEnum)[keyof typeof TestEnvironmentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TestRunWhereInput = {
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    id?: IntFilter<"TestRun"> | number
    testId?: IntFilter<"TestRun"> | number
    status?: StringFilter<"TestRun"> | string
    duration?: IntFilter<"TestRun"> | number
    error?: StringNullableFilter<"TestRun"> | string | null
    startedAt?: DateTimeFilter<"TestRun"> | Date | string
    completedAt?: DateTimeFilter<"TestRun"> | Date | string
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    testLogs?: TestLogListRelationFilter
  }

  export type TestRunOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    testLogs?: TestLogOrderByRelationAggregateInput
    _relevance?: TestRunOrderByRelevanceInput
  }

  export type TestRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestRunWhereInput | TestRunWhereInput[]
    OR?: TestRunWhereInput[]
    NOT?: TestRunWhereInput | TestRunWhereInput[]
    testId?: IntFilter<"TestRun"> | number
    status?: StringFilter<"TestRun"> | string
    duration?: IntFilter<"TestRun"> | number
    error?: StringNullableFilter<"TestRun"> | string | null
    startedAt?: DateTimeFilter<"TestRun"> | Date | string
    completedAt?: DateTimeFilter<"TestRun"> | Date | string
    createdAt?: DateTimeFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeFilter<"TestRun"> | Date | string
    testLogs?: TestLogListRelationFilter
  }, "id">

  export type TestRunOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    error?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestRunCountOrderByAggregateInput
    _avg?: TestRunAvgOrderByAggregateInput
    _max?: TestRunMaxOrderByAggregateInput
    _min?: TestRunMinOrderByAggregateInput
    _sum?: TestRunSumOrderByAggregateInput
  }

  export type TestRunScalarWhereWithAggregatesInput = {
    AND?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    OR?: TestRunScalarWhereWithAggregatesInput[]
    NOT?: TestRunScalarWhereWithAggregatesInput | TestRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestRun"> | number
    testId?: IntWithAggregatesFilter<"TestRun"> | number
    status?: StringWithAggregatesFilter<"TestRun"> | string
    duration?: IntWithAggregatesFilter<"TestRun"> | number
    error?: StringNullableWithAggregatesFilter<"TestRun"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    completedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestRun"> | Date | string
  }

  export type TestLogWhereInput = {
    AND?: TestLogWhereInput | TestLogWhereInput[]
    OR?: TestLogWhereInput[]
    NOT?: TestLogWhereInput | TestLogWhereInput[]
    id?: IntFilter<"TestLog"> | number
    testRunId?: IntFilter<"TestLog"> | number
    logLevel?: StringFilter<"TestLog"> | string
    message?: StringFilter<"TestLog"> | string
    createdAt?: DateTimeFilter<"TestLog"> | Date | string
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }

  export type TestLogOrderByWithRelationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    testRun?: TestRunOrderByWithRelationInput
    _relevance?: TestLogOrderByRelevanceInput
  }

  export type TestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestLogWhereInput | TestLogWhereInput[]
    OR?: TestLogWhereInput[]
    NOT?: TestLogWhereInput | TestLogWhereInput[]
    testRunId?: IntFilter<"TestLog"> | number
    logLevel?: StringFilter<"TestLog"> | string
    message?: StringFilter<"TestLog"> | string
    createdAt?: DateTimeFilter<"TestLog"> | Date | string
    testRun?: XOR<TestRunScalarRelationFilter, TestRunWhereInput>
  }, "id">

  export type TestLogOrderByWithAggregationInput = {
    id?: SortOrder
    testRunId?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: TestLogCountOrderByAggregateInput
    _avg?: TestLogAvgOrderByAggregateInput
    _max?: TestLogMaxOrderByAggregateInput
    _min?: TestLogMinOrderByAggregateInput
    _sum?: TestLogSumOrderByAggregateInput
  }

  export type TestLogScalarWhereWithAggregatesInput = {
    AND?: TestLogScalarWhereWithAggregatesInput | TestLogScalarWhereWithAggregatesInput[]
    OR?: TestLogScalarWhereWithAggregatesInput[]
    NOT?: TestLogScalarWhereWithAggregatesInput | TestLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestLog"> | number
    testRunId?: IntWithAggregatesFilter<"TestLog"> | number
    logLevel?: StringWithAggregatesFilter<"TestLog"> | string
    message?: StringWithAggregatesFilter<"TestLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestLog"> | Date | string
  }

  export type TestEnvironmentWhereInput = {
    AND?: TestEnvironmentWhereInput | TestEnvironmentWhereInput[]
    OR?: TestEnvironmentWhereInput[]
    NOT?: TestEnvironmentWhereInput | TestEnvironmentWhereInput[]
    id?: IntFilter<"TestEnvironment"> | number
    name?: StringFilter<"TestEnvironment"> | string
    description?: StringNullableFilter<"TestEnvironment"> | string | null
    createdAt?: DateTimeFilter<"TestEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"TestEnvironment"> | Date | string
  }

  export type TestEnvironmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: TestEnvironmentOrderByRelevanceInput
  }

  export type TestEnvironmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestEnvironmentWhereInput | TestEnvironmentWhereInput[]
    OR?: TestEnvironmentWhereInput[]
    NOT?: TestEnvironmentWhereInput | TestEnvironmentWhereInput[]
    name?: StringFilter<"TestEnvironment"> | string
    description?: StringNullableFilter<"TestEnvironment"> | string | null
    createdAt?: DateTimeFilter<"TestEnvironment"> | Date | string
    updatedAt?: DateTimeFilter<"TestEnvironment"> | Date | string
  }, "id">

  export type TestEnvironmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestEnvironmentCountOrderByAggregateInput
    _avg?: TestEnvironmentAvgOrderByAggregateInput
    _max?: TestEnvironmentMaxOrderByAggregateInput
    _min?: TestEnvironmentMinOrderByAggregateInput
    _sum?: TestEnvironmentSumOrderByAggregateInput
  }

  export type TestEnvironmentScalarWhereWithAggregatesInput = {
    AND?: TestEnvironmentScalarWhereWithAggregatesInput | TestEnvironmentScalarWhereWithAggregatesInput[]
    OR?: TestEnvironmentScalarWhereWithAggregatesInput[]
    NOT?: TestEnvironmentScalarWhereWithAggregatesInput | TestEnvironmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestEnvironment"> | number
    name?: StringWithAggregatesFilter<"TestEnvironment"> | string
    description?: StringNullableWithAggregatesFilter<"TestEnvironment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestEnvironment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestEnvironment"> | Date | string
  }

  export type TestRunCreateInput = {
    testId: number
    status: string
    duration: number
    error?: string | null
    startedAt: Date | string
    completedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testLogs?: TestLogCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUncheckedCreateInput = {
    id?: number
    testId: number
    status: string
    duration: number
    error?: string | null
    startedAt: Date | string
    completedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    testLogs?: TestLogUncheckedCreateNestedManyWithoutTestRunInput
  }

  export type TestRunUpdateInput = {
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testLogs?: TestLogUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testLogs?: TestLogUncheckedUpdateManyWithoutTestRunNestedInput
  }

  export type TestRunCreateManyInput = {
    id?: number
    testId: number
    status: string
    duration: number
    error?: string | null
    startedAt: Date | string
    completedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUpdateManyMutationInput = {
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogCreateInput = {
    logLevel: string
    message: string
    createdAt?: Date | string
    testRun: TestRunCreateNestedOneWithoutTestLogsInput
  }

  export type TestLogUncheckedCreateInput = {
    id?: number
    testRunId: number
    logLevel: string
    message: string
    createdAt?: Date | string
  }

  export type TestLogUpdateInput = {
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testRun?: TestRunUpdateOneRequiredWithoutTestLogsNestedInput
  }

  export type TestLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testRunId?: IntFieldUpdateOperationsInput | number
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogCreateManyInput = {
    id?: number
    testRunId: number
    logLevel: string
    message: string
    createdAt?: Date | string
  }

  export type TestLogUpdateManyMutationInput = {
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testRunId?: IntFieldUpdateOperationsInput | number
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestEnvironmentCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestEnvironmentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestEnvironmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestEnvironmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestEnvironmentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestEnvironmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestEnvironmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestLogListRelationFilter = {
    every?: TestLogWhereInput
    some?: TestLogWhereInput
    none?: TestLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TestLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestRunOrderByRelevanceInput = {
    fields: TestRunOrderByRelevanceFieldEnum | TestRunOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestRunCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunAvgOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    duration?: SortOrder
  }

  export type TestRunMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    error?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestRunSumOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TestRunScalarRelationFilter = {
    is?: TestRunWhereInput
    isNot?: TestRunWhereInput
  }

  export type TestLogOrderByRelevanceInput = {
    fields: TestLogOrderByRelevanceFieldEnum | TestLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestLogCountOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TestLogAvgOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
  }

  export type TestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TestLogMinOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type TestLogSumOrderByAggregateInput = {
    id?: SortOrder
    testRunId?: SortOrder
  }

  export type TestEnvironmentOrderByRelevanceInput = {
    fields: TestEnvironmentOrderByRelevanceFieldEnum | TestEnvironmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestEnvironmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestEnvironmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestEnvironmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestEnvironmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestEnvironmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestLogCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput> | TestLogCreateWithoutTestRunInput[] | TestLogUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestLogCreateOrConnectWithoutTestRunInput | TestLogCreateOrConnectWithoutTestRunInput[]
    createMany?: TestLogCreateManyTestRunInputEnvelope
    connect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
  }

  export type TestLogUncheckedCreateNestedManyWithoutTestRunInput = {
    create?: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput> | TestLogCreateWithoutTestRunInput[] | TestLogUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestLogCreateOrConnectWithoutTestRunInput | TestLogCreateOrConnectWithoutTestRunInput[]
    createMany?: TestLogCreateManyTestRunInputEnvelope
    connect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TestLogUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput> | TestLogCreateWithoutTestRunInput[] | TestLogUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestLogCreateOrConnectWithoutTestRunInput | TestLogCreateOrConnectWithoutTestRunInput[]
    upsert?: TestLogUpsertWithWhereUniqueWithoutTestRunInput | TestLogUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestLogCreateManyTestRunInputEnvelope
    set?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    disconnect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    delete?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    connect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    update?: TestLogUpdateWithWhereUniqueWithoutTestRunInput | TestLogUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestLogUpdateManyWithWhereWithoutTestRunInput | TestLogUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestLogScalarWhereInput | TestLogScalarWhereInput[]
  }

  export type TestLogUncheckedUpdateManyWithoutTestRunNestedInput = {
    create?: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput> | TestLogCreateWithoutTestRunInput[] | TestLogUncheckedCreateWithoutTestRunInput[]
    connectOrCreate?: TestLogCreateOrConnectWithoutTestRunInput | TestLogCreateOrConnectWithoutTestRunInput[]
    upsert?: TestLogUpsertWithWhereUniqueWithoutTestRunInput | TestLogUpsertWithWhereUniqueWithoutTestRunInput[]
    createMany?: TestLogCreateManyTestRunInputEnvelope
    set?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    disconnect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    delete?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    connect?: TestLogWhereUniqueInput | TestLogWhereUniqueInput[]
    update?: TestLogUpdateWithWhereUniqueWithoutTestRunInput | TestLogUpdateWithWhereUniqueWithoutTestRunInput[]
    updateMany?: TestLogUpdateManyWithWhereWithoutTestRunInput | TestLogUpdateManyWithWhereWithoutTestRunInput[]
    deleteMany?: TestLogScalarWhereInput | TestLogScalarWhereInput[]
  }

  export type TestRunCreateNestedOneWithoutTestLogsInput = {
    create?: XOR<TestRunCreateWithoutTestLogsInput, TestRunUncheckedCreateWithoutTestLogsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestLogsInput
    connect?: TestRunWhereUniqueInput
  }

  export type TestRunUpdateOneRequiredWithoutTestLogsNestedInput = {
    create?: XOR<TestRunCreateWithoutTestLogsInput, TestRunUncheckedCreateWithoutTestLogsInput>
    connectOrCreate?: TestRunCreateOrConnectWithoutTestLogsInput
    upsert?: TestRunUpsertWithoutTestLogsInput
    connect?: TestRunWhereUniqueInput
    update?: XOR<XOR<TestRunUpdateToOneWithWhereWithoutTestLogsInput, TestRunUpdateWithoutTestLogsInput>, TestRunUncheckedUpdateWithoutTestLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TestLogCreateWithoutTestRunInput = {
    logLevel: string
    message: string
    createdAt?: Date | string
  }

  export type TestLogUncheckedCreateWithoutTestRunInput = {
    id?: number
    logLevel: string
    message: string
    createdAt?: Date | string
  }

  export type TestLogCreateOrConnectWithoutTestRunInput = {
    where: TestLogWhereUniqueInput
    create: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput>
  }

  export type TestLogCreateManyTestRunInputEnvelope = {
    data: TestLogCreateManyTestRunInput | TestLogCreateManyTestRunInput[]
    skipDuplicates?: boolean
  }

  export type TestLogUpsertWithWhereUniqueWithoutTestRunInput = {
    where: TestLogWhereUniqueInput
    update: XOR<TestLogUpdateWithoutTestRunInput, TestLogUncheckedUpdateWithoutTestRunInput>
    create: XOR<TestLogCreateWithoutTestRunInput, TestLogUncheckedCreateWithoutTestRunInput>
  }

  export type TestLogUpdateWithWhereUniqueWithoutTestRunInput = {
    where: TestLogWhereUniqueInput
    data: XOR<TestLogUpdateWithoutTestRunInput, TestLogUncheckedUpdateWithoutTestRunInput>
  }

  export type TestLogUpdateManyWithWhereWithoutTestRunInput = {
    where: TestLogScalarWhereInput
    data: XOR<TestLogUpdateManyMutationInput, TestLogUncheckedUpdateManyWithoutTestRunInput>
  }

  export type TestLogScalarWhereInput = {
    AND?: TestLogScalarWhereInput | TestLogScalarWhereInput[]
    OR?: TestLogScalarWhereInput[]
    NOT?: TestLogScalarWhereInput | TestLogScalarWhereInput[]
    id?: IntFilter<"TestLog"> | number
    testRunId?: IntFilter<"TestLog"> | number
    logLevel?: StringFilter<"TestLog"> | string
    message?: StringFilter<"TestLog"> | string
    createdAt?: DateTimeFilter<"TestLog"> | Date | string
  }

  export type TestRunCreateWithoutTestLogsInput = {
    testId: number
    status: string
    duration: number
    error?: string | null
    startedAt: Date | string
    completedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunUncheckedCreateWithoutTestLogsInput = {
    id?: number
    testId: number
    status: string
    duration: number
    error?: string | null
    startedAt: Date | string
    completedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestRunCreateOrConnectWithoutTestLogsInput = {
    where: TestRunWhereUniqueInput
    create: XOR<TestRunCreateWithoutTestLogsInput, TestRunUncheckedCreateWithoutTestLogsInput>
  }

  export type TestRunUpsertWithoutTestLogsInput = {
    update: XOR<TestRunUpdateWithoutTestLogsInput, TestRunUncheckedUpdateWithoutTestLogsInput>
    create: XOR<TestRunCreateWithoutTestLogsInput, TestRunUncheckedCreateWithoutTestLogsInput>
    where?: TestRunWhereInput
  }

  export type TestRunUpdateToOneWithWhereWithoutTestLogsInput = {
    where?: TestRunWhereInput
    data: XOR<TestRunUpdateWithoutTestLogsInput, TestRunUncheckedUpdateWithoutTestLogsInput>
  }

  export type TestRunUpdateWithoutTestLogsInput = {
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestRunUncheckedUpdateWithoutTestLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogCreateManyTestRunInput = {
    id?: number
    logLevel: string
    message: string
    createdAt?: Date | string
  }

  export type TestLogUpdateWithoutTestRunInput = {
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogUncheckedUpdateWithoutTestRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestLogUncheckedUpdateManyWithoutTestRunInput = {
    id?: IntFieldUpdateOperationsInput | number
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}