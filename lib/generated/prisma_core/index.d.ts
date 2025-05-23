
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UsersContacts
 * 
 */
export type UsersContacts = $Result.DefaultSelection<Prisma.$UsersContactsPayload>
/**
 * Model UsersAuth
 * 
 */
export type UsersAuth = $Result.DefaultSelection<Prisma.$UsersAuthPayload>
/**
 * Model AdGroups
 * 
 */
export type AdGroups = $Result.DefaultSelection<Prisma.$AdGroupsPayload>
/**
 * Model UsersAdGroups
 * 
 */
export type UsersAdGroups = $Result.DefaultSelection<Prisma.$UsersAdGroupsPayload>
/**
 * Model Languages
 * 
 */
export type Languages = $Result.DefaultSelection<Prisma.$LanguagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContactsTypes: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  SOCIAL: 'SOCIAL'
};

export type ContactsTypes = (typeof ContactsTypes)[keyof typeof ContactsTypes]


export const ContactsScopes: {
  PERSONAL: 'PERSONAL',
  PROFESSIONAL: 'PROFESSIONAL',
  OTHER: 'OTHER'
};

export type ContactsScopes = (typeof ContactsScopes)[keyof typeof ContactsScopes]

}

export type ContactsTypes = $Enums.ContactsTypes

export const ContactsTypes: typeof $Enums.ContactsTypes

export type ContactsScopes = $Enums.ContactsScopes

export const ContactsScopes: typeof $Enums.ContactsScopes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersContacts`: Exposes CRUD operations for the **UsersContacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersContacts
    * const usersContacts = await prisma.usersContacts.findMany()
    * ```
    */
  get usersContacts(): Prisma.UsersContactsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersAuth`: Exposes CRUD operations for the **UsersAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersAuths
    * const usersAuths = await prisma.usersAuth.findMany()
    * ```
    */
  get usersAuth(): Prisma.UsersAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adGroups`: Exposes CRUD operations for the **AdGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdGroups
    * const adGroups = await prisma.adGroups.findMany()
    * ```
    */
  get adGroups(): Prisma.AdGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersAdGroups`: Exposes CRUD operations for the **UsersAdGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersAdGroups
    * const usersAdGroups = await prisma.usersAdGroups.findMany()
    * ```
    */
  get usersAdGroups(): Prisma.UsersAdGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.LanguagesDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    UsersContacts: 'UsersContacts',
    UsersAuth: 'UsersAuth',
    AdGroups: 'AdGroups',
    UsersAdGroups: 'UsersAdGroups',
    Languages: 'Languages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db_core_core?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "usersContacts" | "usersAuth" | "adGroups" | "usersAdGroups" | "languages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UsersContacts: {
        payload: Prisma.$UsersContactsPayload<ExtArgs>
        fields: Prisma.UsersContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          findFirst: {
            args: Prisma.UsersContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          findMany: {
            args: Prisma.UsersContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>[]
          }
          create: {
            args: Prisma.UsersContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          createMany: {
            args: Prisma.UsersContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          update: {
            args: Prisma.UsersContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          deleteMany: {
            args: Prisma.UsersContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersContactsPayload>
          }
          aggregate: {
            args: Prisma.UsersContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersContacts>
          }
          groupBy: {
            args: Prisma.UsersContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersContactsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersContactsCountAggregateOutputType> | number
          }
        }
      }
      UsersAuth: {
        payload: Prisma.$UsersAuthPayload<ExtArgs>
        fields: Prisma.UsersAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          findFirst: {
            args: Prisma.UsersAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          findMany: {
            args: Prisma.UsersAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>[]
          }
          create: {
            args: Prisma.UsersAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          createMany: {
            args: Prisma.UsersAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          update: {
            args: Prisma.UsersAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          deleteMany: {
            args: Prisma.UsersAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAuthPayload>
          }
          aggregate: {
            args: Prisma.UsersAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersAuth>
          }
          groupBy: {
            args: Prisma.UsersAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersAuthCountArgs<ExtArgs>
            result: $Utils.Optional<UsersAuthCountAggregateOutputType> | number
          }
        }
      }
      AdGroups: {
        payload: Prisma.$AdGroupsPayload<ExtArgs>
        fields: Prisma.AdGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          findFirst: {
            args: Prisma.AdGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          findMany: {
            args: Prisma.AdGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>[]
          }
          create: {
            args: Prisma.AdGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          createMany: {
            args: Prisma.AdGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          update: {
            args: Prisma.AdGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          deleteMany: {
            args: Prisma.AdGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupsPayload>
          }
          aggregate: {
            args: Prisma.AdGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdGroups>
          }
          groupBy: {
            args: Prisma.AdGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<AdGroupsCountAggregateOutputType> | number
          }
        }
      }
      UsersAdGroups: {
        payload: Prisma.$UsersAdGroupsPayload<ExtArgs>
        fields: Prisma.UsersAdGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersAdGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersAdGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          findFirst: {
            args: Prisma.UsersAdGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersAdGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          findMany: {
            args: Prisma.UsersAdGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>[]
          }
          create: {
            args: Prisma.UsersAdGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          createMany: {
            args: Prisma.UsersAdGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersAdGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          update: {
            args: Prisma.UsersAdGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          deleteMany: {
            args: Prisma.UsersAdGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersAdGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersAdGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersAdGroupsPayload>
          }
          aggregate: {
            args: Prisma.UsersAdGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersAdGroups>
          }
          groupBy: {
            args: Prisma.UsersAdGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersAdGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersAdGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersAdGroupsCountAggregateOutputType> | number
          }
        }
      }
      Languages: {
        payload: Prisma.$LanguagesPayload<ExtArgs>
        fields: Prisma.LanguagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findFirst: {
            args: Prisma.LanguagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findMany: {
            args: Prisma.LanguagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          create: {
            args: Prisma.LanguagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          createMany: {
            args: Prisma.LanguagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          update: {
            args: Prisma.LanguagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          deleteMany: {
            args: Prisma.LanguagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          aggregate: {
            args: Prisma.LanguagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguages>
          }
          groupBy: {
            args: Prisma.LanguagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguagesCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagesCountAggregateOutputType> | number
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
    users?: UsersOmit
    usersContacts?: UsersContactsOmit
    usersAuth?: UsersAuthOmit
    adGroups?: AdGroupsOmit
    usersAdGroups?: UsersAdGroupsOmit
    languages?: LanguagesOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    adGroups: number
    contacts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroups?: boolean | UsersCountOutputTypeCountAdGroupsArgs
    contacts?: boolean | UsersCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersAdGroupsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersContactsWhereInput
  }


  /**
   * Count Type AdGroupsCountOutputType
   */

  export type AdGroupsCountOutputType = {
    users: number
  }

  export type AdGroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AdGroupsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AdGroupsCountOutputType without action
   */
  export type AdGroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroupsCountOutputType
     */
    select?: AdGroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdGroupsCountOutputType without action
   */
  export type AdGroupsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersAdGroupsWhereInput
  }


  /**
   * Count Type LanguagesCountOutputType
   */

  export type LanguagesCountOutputType = {
    users: number
  }

  export type LanguagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | LanguagesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagesCountOutputType
     */
    select?: LanguagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    userLanguageId: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    userLanguageId: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    userName: string | null
    userSurname: string | null
    userCode: string | null
    isActive: boolean | null
    userLanguageId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    userName: string | null
    userSurname: string | null
    userCode: string | null
    isActive: boolean | null
    userLanguageId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    userName: number
    userSurname: number
    userCode: number
    isActive: number
    userLanguageId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    userLanguageId?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    userLanguageId?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    userLanguageId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    userLanguageId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    userLanguageId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    userName: string
    userSurname: string
    userCode: string
    isActive: boolean
    userLanguageId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userSurname?: boolean
    userCode?: boolean
    isActive?: boolean
    userLanguageId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    language?: boolean | LanguagesDefaultArgs<ExtArgs>
    adGroups?: boolean | Users$adGroupsArgs<ExtArgs>
    auth?: boolean | Users$authArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    userId?: boolean
    userName?: boolean
    userSurname?: boolean
    userCode?: boolean
    isActive?: boolean
    userLanguageId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "userSurname" | "userCode" | "isActive" | "userLanguageId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguagesDefaultArgs<ExtArgs>
    adGroups?: boolean | Users$adGroupsArgs<ExtArgs>
    auth?: boolean | Users$authArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      language: Prisma.$LanguagesPayload<ExtArgs>
      adGroups: Prisma.$UsersAdGroupsPayload<ExtArgs>[]
      auth: Prisma.$UsersAuthPayload<ExtArgs> | null
      contacts: Prisma.$UsersContactsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userName: string
      userSurname: string
      userCode: string
      isActive: boolean
      userLanguageId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    language<T extends LanguagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguagesDefaultArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adGroups<T extends Users$adGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$adGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth<T extends Users$authArgs<ExtArgs> = {}>(args?: Subset<T, Users$authArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contacts<T extends Users$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Users$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'Int'>
    readonly userName: FieldRef<"Users", 'String'>
    readonly userSurname: FieldRef<"Users", 'String'>
    readonly userCode: FieldRef<"Users", 'String'>
    readonly isActive: FieldRef<"Users", 'Boolean'>
    readonly userLanguageId: FieldRef<"Users", 'Int'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly createdBy: FieldRef<"Users", 'String'>
    readonly isDeleted: FieldRef<"Users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.adGroups
   */
  export type Users$adGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    where?: UsersAdGroupsWhereInput
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    cursor?: UsersAdGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersAdGroupsScalarFieldEnum | UsersAdGroupsScalarFieldEnum[]
  }

  /**
   * Users.auth
   */
  export type Users$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    where?: UsersAuthWhereInput
  }

  /**
   * Users.contacts
   */
  export type Users$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    where?: UsersContactsWhereInput
    orderBy?: UsersContactsOrderByWithRelationInput | UsersContactsOrderByWithRelationInput[]
    cursor?: UsersContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersContactsScalarFieldEnum | UsersContactsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model UsersContacts
   */

  export type AggregateUsersContacts = {
    _count: UsersContactsCountAggregateOutputType | null
    _avg: UsersContactsAvgAggregateOutputType | null
    _sum: UsersContactsSumAggregateOutputType | null
    _min: UsersContactsMinAggregateOutputType | null
    _max: UsersContactsMaxAggregateOutputType | null
  }

  export type UsersContactsAvgAggregateOutputType = {
    userContactId: number | null
    userId: number | null
  }

  export type UsersContactsSumAggregateOutputType = {
    userContactId: number | null
    userId: number | null
  }

  export type UsersContactsMinAggregateOutputType = {
    userContactId: number | null
    userContactType: $Enums.ContactsTypes | null
    userContactScope: $Enums.ContactsScopes | null
    userContactValue: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UsersContactsMaxAggregateOutputType = {
    userContactId: number | null
    userContactType: $Enums.ContactsTypes | null
    userContactScope: $Enums.ContactsScopes | null
    userContactValue: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UsersContactsCountAggregateOutputType = {
    userContactId: number
    userContactType: number
    userContactScope: number
    userContactValue: number
    createdAt: number
    createdBy: number
    isDeleted: number
    userId: number
    _all: number
  }


  export type UsersContactsAvgAggregateInputType = {
    userContactId?: true
    userId?: true
  }

  export type UsersContactsSumAggregateInputType = {
    userContactId?: true
    userId?: true
  }

  export type UsersContactsMinAggregateInputType = {
    userContactId?: true
    userContactType?: true
    userContactScope?: true
    userContactValue?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UsersContactsMaxAggregateInputType = {
    userContactId?: true
    userContactType?: true
    userContactScope?: true
    userContactValue?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UsersContactsCountAggregateInputType = {
    userContactId?: true
    userContactType?: true
    userContactScope?: true
    userContactValue?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
    _all?: true
  }

  export type UsersContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersContacts to aggregate.
     */
    where?: UsersContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersContacts to fetch.
     */
    orderBy?: UsersContactsOrderByWithRelationInput | UsersContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersContacts
    **/
    _count?: true | UsersContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersContactsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersContactsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersContactsMaxAggregateInputType
  }

  export type GetUsersContactsAggregateType<T extends UsersContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersContacts[P]>
      : GetScalarType<T[P], AggregateUsersContacts[P]>
  }




  export type UsersContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersContactsWhereInput
    orderBy?: UsersContactsOrderByWithAggregationInput | UsersContactsOrderByWithAggregationInput[]
    by: UsersContactsScalarFieldEnum[] | UsersContactsScalarFieldEnum
    having?: UsersContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersContactsCountAggregateInputType | true
    _avg?: UsersContactsAvgAggregateInputType
    _sum?: UsersContactsSumAggregateInputType
    _min?: UsersContactsMinAggregateInputType
    _max?: UsersContactsMaxAggregateInputType
  }

  export type UsersContactsGroupByOutputType = {
    userContactId: number
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    userId: number
    _count: UsersContactsCountAggregateOutputType | null
    _avg: UsersContactsAvgAggregateOutputType | null
    _sum: UsersContactsSumAggregateOutputType | null
    _min: UsersContactsMinAggregateOutputType | null
    _max: UsersContactsMaxAggregateOutputType | null
  }

  type GetUsersContactsGroupByPayload<T extends UsersContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersContactsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersContactsGroupByOutputType[P]>
        }
      >
    >


  export type UsersContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userContactId?: boolean
    userContactType?: boolean
    userContactScope?: boolean
    userContactValue?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersContacts"]>



  export type UsersContactsSelectScalar = {
    userContactId?: boolean
    userContactType?: boolean
    userContactScope?: boolean
    userContactValue?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
  }

  export type UsersContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userContactId" | "userContactType" | "userContactScope" | "userContactValue" | "createdAt" | "createdBy" | "isDeleted" | "userId", ExtArgs["result"]["usersContacts"]>
  export type UsersContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UsersContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersContacts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userContactId: number
      userContactType: $Enums.ContactsTypes
      userContactScope: $Enums.ContactsScopes
      userContactValue: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
      userId: number
    }, ExtArgs["result"]["usersContacts"]>
    composites: {}
  }

  type UsersContactsGetPayload<S extends boolean | null | undefined | UsersContactsDefaultArgs> = $Result.GetResult<Prisma.$UsersContactsPayload, S>

  type UsersContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersContactsCountAggregateInputType | true
    }

  export interface UsersContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersContacts'], meta: { name: 'UsersContacts' } }
    /**
     * Find zero or one UsersContacts that matches the filter.
     * @param {UsersContactsFindUniqueArgs} args - Arguments to find a UsersContacts
     * @example
     * // Get one UsersContacts
     * const usersContacts = await prisma.usersContacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersContactsFindUniqueArgs>(args: SelectSubset<T, UsersContactsFindUniqueArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersContacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersContactsFindUniqueOrThrowArgs} args - Arguments to find a UsersContacts
     * @example
     * // Get one UsersContacts
     * const usersContacts = await prisma.usersContacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsFindFirstArgs} args - Arguments to find a UsersContacts
     * @example
     * // Get one UsersContacts
     * const usersContacts = await prisma.usersContacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersContactsFindFirstArgs>(args?: SelectSubset<T, UsersContactsFindFirstArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersContacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsFindFirstOrThrowArgs} args - Arguments to find a UsersContacts
     * @example
     * // Get one UsersContacts
     * const usersContacts = await prisma.usersContacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersContacts
     * const usersContacts = await prisma.usersContacts.findMany()
     * 
     * // Get first 10 UsersContacts
     * const usersContacts = await prisma.usersContacts.findMany({ take: 10 })
     * 
     * // Only select the `userContactId`
     * const usersContactsWithUserContactIdOnly = await prisma.usersContacts.findMany({ select: { userContactId: true } })
     * 
     */
    findMany<T extends UsersContactsFindManyArgs>(args?: SelectSubset<T, UsersContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersContacts.
     * @param {UsersContactsCreateArgs} args - Arguments to create a UsersContacts.
     * @example
     * // Create one UsersContacts
     * const UsersContacts = await prisma.usersContacts.create({
     *   data: {
     *     // ... data to create a UsersContacts
     *   }
     * })
     * 
     */
    create<T extends UsersContactsCreateArgs>(args: SelectSubset<T, UsersContactsCreateArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersContacts.
     * @param {UsersContactsCreateManyArgs} args - Arguments to create many UsersContacts.
     * @example
     * // Create many UsersContacts
     * const usersContacts = await prisma.usersContacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersContactsCreateManyArgs>(args?: SelectSubset<T, UsersContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersContacts.
     * @param {UsersContactsDeleteArgs} args - Arguments to delete one UsersContacts.
     * @example
     * // Delete one UsersContacts
     * const UsersContacts = await prisma.usersContacts.delete({
     *   where: {
     *     // ... filter to delete one UsersContacts
     *   }
     * })
     * 
     */
    delete<T extends UsersContactsDeleteArgs>(args: SelectSubset<T, UsersContactsDeleteArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersContacts.
     * @param {UsersContactsUpdateArgs} args - Arguments to update one UsersContacts.
     * @example
     * // Update one UsersContacts
     * const usersContacts = await prisma.usersContacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersContactsUpdateArgs>(args: SelectSubset<T, UsersContactsUpdateArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersContacts.
     * @param {UsersContactsDeleteManyArgs} args - Arguments to filter UsersContacts to delete.
     * @example
     * // Delete a few UsersContacts
     * const { count } = await prisma.usersContacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersContactsDeleteManyArgs>(args?: SelectSubset<T, UsersContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersContacts
     * const usersContacts = await prisma.usersContacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersContactsUpdateManyArgs>(args: SelectSubset<T, UsersContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersContacts.
     * @param {UsersContactsUpsertArgs} args - Arguments to update or create a UsersContacts.
     * @example
     * // Update or create a UsersContacts
     * const usersContacts = await prisma.usersContacts.upsert({
     *   create: {
     *     // ... data to create a UsersContacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersContacts we want to update
     *   }
     * })
     */
    upsert<T extends UsersContactsUpsertArgs>(args: SelectSubset<T, UsersContactsUpsertArgs<ExtArgs>>): Prisma__UsersContactsClient<$Result.GetResult<Prisma.$UsersContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsCountArgs} args - Arguments to filter UsersContacts to count.
     * @example
     * // Count the number of UsersContacts
     * const count = await prisma.usersContacts.count({
     *   where: {
     *     // ... the filter for the UsersContacts we want to count
     *   }
     * })
    **/
    count<T extends UsersContactsCountArgs>(
      args?: Subset<T, UsersContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersContactsAggregateArgs>(args: Subset<T, UsersContactsAggregateArgs>): Prisma.PrismaPromise<GetUsersContactsAggregateType<T>>

    /**
     * Group by UsersContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersContactsGroupByArgs} args - Group by arguments.
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
      T extends UsersContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersContactsGroupByArgs['orderBy'] }
        : { orderBy?: UsersContactsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersContacts model
   */
  readonly fields: UsersContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersContacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersContacts model
   */
  interface UsersContactsFieldRefs {
    readonly userContactId: FieldRef<"UsersContacts", 'Int'>
    readonly userContactType: FieldRef<"UsersContacts", 'ContactsTypes'>
    readonly userContactScope: FieldRef<"UsersContacts", 'ContactsScopes'>
    readonly userContactValue: FieldRef<"UsersContacts", 'String'>
    readonly createdAt: FieldRef<"UsersContacts", 'DateTime'>
    readonly createdBy: FieldRef<"UsersContacts", 'String'>
    readonly isDeleted: FieldRef<"UsersContacts", 'Boolean'>
    readonly userId: FieldRef<"UsersContacts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersContacts findUnique
   */
  export type UsersContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter, which UsersContacts to fetch.
     */
    where: UsersContactsWhereUniqueInput
  }

  /**
   * UsersContacts findUniqueOrThrow
   */
  export type UsersContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter, which UsersContacts to fetch.
     */
    where: UsersContactsWhereUniqueInput
  }

  /**
   * UsersContacts findFirst
   */
  export type UsersContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter, which UsersContacts to fetch.
     */
    where?: UsersContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersContacts to fetch.
     */
    orderBy?: UsersContactsOrderByWithRelationInput | UsersContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersContacts.
     */
    cursor?: UsersContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersContacts.
     */
    distinct?: UsersContactsScalarFieldEnum | UsersContactsScalarFieldEnum[]
  }

  /**
   * UsersContacts findFirstOrThrow
   */
  export type UsersContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter, which UsersContacts to fetch.
     */
    where?: UsersContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersContacts to fetch.
     */
    orderBy?: UsersContactsOrderByWithRelationInput | UsersContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersContacts.
     */
    cursor?: UsersContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersContacts.
     */
    distinct?: UsersContactsScalarFieldEnum | UsersContactsScalarFieldEnum[]
  }

  /**
   * UsersContacts findMany
   */
  export type UsersContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter, which UsersContacts to fetch.
     */
    where?: UsersContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersContacts to fetch.
     */
    orderBy?: UsersContactsOrderByWithRelationInput | UsersContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersContacts.
     */
    cursor?: UsersContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersContacts.
     */
    skip?: number
    distinct?: UsersContactsScalarFieldEnum | UsersContactsScalarFieldEnum[]
  }

  /**
   * UsersContacts create
   */
  export type UsersContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersContacts.
     */
    data: XOR<UsersContactsCreateInput, UsersContactsUncheckedCreateInput>
  }

  /**
   * UsersContacts createMany
   */
  export type UsersContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersContacts.
     */
    data: UsersContactsCreateManyInput | UsersContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersContacts update
   */
  export type UsersContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersContacts.
     */
    data: XOR<UsersContactsUpdateInput, UsersContactsUncheckedUpdateInput>
    /**
     * Choose, which UsersContacts to update.
     */
    where: UsersContactsWhereUniqueInput
  }

  /**
   * UsersContacts updateMany
   */
  export type UsersContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersContacts.
     */
    data: XOR<UsersContactsUpdateManyMutationInput, UsersContactsUncheckedUpdateManyInput>
    /**
     * Filter which UsersContacts to update
     */
    where?: UsersContactsWhereInput
    /**
     * Limit how many UsersContacts to update.
     */
    limit?: number
  }

  /**
   * UsersContacts upsert
   */
  export type UsersContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersContacts to update in case it exists.
     */
    where: UsersContactsWhereUniqueInput
    /**
     * In case the UsersContacts found by the `where` argument doesn't exist, create a new UsersContacts with this data.
     */
    create: XOR<UsersContactsCreateInput, UsersContactsUncheckedCreateInput>
    /**
     * In case the UsersContacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersContactsUpdateInput, UsersContactsUncheckedUpdateInput>
  }

  /**
   * UsersContacts delete
   */
  export type UsersContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
    /**
     * Filter which UsersContacts to delete.
     */
    where: UsersContactsWhereUniqueInput
  }

  /**
   * UsersContacts deleteMany
   */
  export type UsersContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersContacts to delete
     */
    where?: UsersContactsWhereInput
    /**
     * Limit how many UsersContacts to delete.
     */
    limit?: number
  }

  /**
   * UsersContacts without action
   */
  export type UsersContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersContacts
     */
    select?: UsersContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersContacts
     */
    omit?: UsersContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersContactsInclude<ExtArgs> | null
  }


  /**
   * Model UsersAuth
   */

  export type AggregateUsersAuth = {
    _count: UsersAuthCountAggregateOutputType | null
    _avg: UsersAuthAvgAggregateOutputType | null
    _sum: UsersAuthSumAggregateOutputType | null
    _min: UsersAuthMinAggregateOutputType | null
    _max: UsersAuthMaxAggregateOutputType | null
  }

  export type UsersAuthAvgAggregateOutputType = {
    authId: number | null
    userId: number | null
  }

  export type UsersAuthSumAggregateOutputType = {
    authId: number | null
    userId: number | null
  }

  export type UsersAuthMinAggregateOutputType = {
    authId: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UsersAuthMaxAggregateOutputType = {
    authId: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UsersAuthCountAggregateOutputType = {
    authId: number
    email: number
    password: number
    createdAt: number
    createdBy: number
    isDeleted: number
    userId: number
    _all: number
  }


  export type UsersAuthAvgAggregateInputType = {
    authId?: true
    userId?: true
  }

  export type UsersAuthSumAggregateInputType = {
    authId?: true
    userId?: true
  }

  export type UsersAuthMinAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UsersAuthMaxAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UsersAuthCountAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
    _all?: true
  }

  export type UsersAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersAuth to aggregate.
     */
    where?: UsersAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAuths to fetch.
     */
    orderBy?: UsersAuthOrderByWithRelationInput | UsersAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersAuths
    **/
    _count?: true | UsersAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersAuthMaxAggregateInputType
  }

  export type GetUsersAuthAggregateType<T extends UsersAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersAuth[P]>
      : GetScalarType<T[P], AggregateUsersAuth[P]>
  }




  export type UsersAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersAuthWhereInput
    orderBy?: UsersAuthOrderByWithAggregationInput | UsersAuthOrderByWithAggregationInput[]
    by: UsersAuthScalarFieldEnum[] | UsersAuthScalarFieldEnum
    having?: UsersAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersAuthCountAggregateInputType | true
    _avg?: UsersAuthAvgAggregateInputType
    _sum?: UsersAuthSumAggregateInputType
    _min?: UsersAuthMinAggregateInputType
    _max?: UsersAuthMaxAggregateInputType
  }

  export type UsersAuthGroupByOutputType = {
    authId: number
    email: string
    password: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    userId: number
    _count: UsersAuthCountAggregateOutputType | null
    _avg: UsersAuthAvgAggregateOutputType | null
    _sum: UsersAuthSumAggregateOutputType | null
    _min: UsersAuthMinAggregateOutputType | null
    _max: UsersAuthMaxAggregateOutputType | null
  }

  type GetUsersAuthGroupByPayload<T extends UsersAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UsersAuthGroupByOutputType[P]>
        }
      >
    >


  export type UsersAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authId?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersAuth"]>



  export type UsersAuthSelectScalar = {
    authId?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
  }

  export type UsersAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authId" | "email" | "password" | "createdAt" | "createdBy" | "isDeleted" | "userId", ExtArgs["result"]["usersAuth"]>
  export type UsersAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UsersAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersAuth"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      authId: number
      email: string
      password: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
      userId: number
    }, ExtArgs["result"]["usersAuth"]>
    composites: {}
  }

  type UsersAuthGetPayload<S extends boolean | null | undefined | UsersAuthDefaultArgs> = $Result.GetResult<Prisma.$UsersAuthPayload, S>

  type UsersAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersAuthCountAggregateInputType | true
    }

  export interface UsersAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersAuth'], meta: { name: 'UsersAuth' } }
    /**
     * Find zero or one UsersAuth that matches the filter.
     * @param {UsersAuthFindUniqueArgs} args - Arguments to find a UsersAuth
     * @example
     * // Get one UsersAuth
     * const usersAuth = await prisma.usersAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersAuthFindUniqueArgs>(args: SelectSubset<T, UsersAuthFindUniqueArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersAuthFindUniqueOrThrowArgs} args - Arguments to find a UsersAuth
     * @example
     * // Get one UsersAuth
     * const usersAuth = await prisma.usersAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthFindFirstArgs} args - Arguments to find a UsersAuth
     * @example
     * // Get one UsersAuth
     * const usersAuth = await prisma.usersAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersAuthFindFirstArgs>(args?: SelectSubset<T, UsersAuthFindFirstArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthFindFirstOrThrowArgs} args - Arguments to find a UsersAuth
     * @example
     * // Get one UsersAuth
     * const usersAuth = await prisma.usersAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersAuths
     * const usersAuths = await prisma.usersAuth.findMany()
     * 
     * // Get first 10 UsersAuths
     * const usersAuths = await prisma.usersAuth.findMany({ take: 10 })
     * 
     * // Only select the `authId`
     * const usersAuthWithAuthIdOnly = await prisma.usersAuth.findMany({ select: { authId: true } })
     * 
     */
    findMany<T extends UsersAuthFindManyArgs>(args?: SelectSubset<T, UsersAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersAuth.
     * @param {UsersAuthCreateArgs} args - Arguments to create a UsersAuth.
     * @example
     * // Create one UsersAuth
     * const UsersAuth = await prisma.usersAuth.create({
     *   data: {
     *     // ... data to create a UsersAuth
     *   }
     * })
     * 
     */
    create<T extends UsersAuthCreateArgs>(args: SelectSubset<T, UsersAuthCreateArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersAuths.
     * @param {UsersAuthCreateManyArgs} args - Arguments to create many UsersAuths.
     * @example
     * // Create many UsersAuths
     * const usersAuth = await prisma.usersAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersAuthCreateManyArgs>(args?: SelectSubset<T, UsersAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersAuth.
     * @param {UsersAuthDeleteArgs} args - Arguments to delete one UsersAuth.
     * @example
     * // Delete one UsersAuth
     * const UsersAuth = await prisma.usersAuth.delete({
     *   where: {
     *     // ... filter to delete one UsersAuth
     *   }
     * })
     * 
     */
    delete<T extends UsersAuthDeleteArgs>(args: SelectSubset<T, UsersAuthDeleteArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersAuth.
     * @param {UsersAuthUpdateArgs} args - Arguments to update one UsersAuth.
     * @example
     * // Update one UsersAuth
     * const usersAuth = await prisma.usersAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersAuthUpdateArgs>(args: SelectSubset<T, UsersAuthUpdateArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersAuths.
     * @param {UsersAuthDeleteManyArgs} args - Arguments to filter UsersAuths to delete.
     * @example
     * // Delete a few UsersAuths
     * const { count } = await prisma.usersAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersAuthDeleteManyArgs>(args?: SelectSubset<T, UsersAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersAuths
     * const usersAuth = await prisma.usersAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersAuthUpdateManyArgs>(args: SelectSubset<T, UsersAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersAuth.
     * @param {UsersAuthUpsertArgs} args - Arguments to update or create a UsersAuth.
     * @example
     * // Update or create a UsersAuth
     * const usersAuth = await prisma.usersAuth.upsert({
     *   create: {
     *     // ... data to create a UsersAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersAuth we want to update
     *   }
     * })
     */
    upsert<T extends UsersAuthUpsertArgs>(args: SelectSubset<T, UsersAuthUpsertArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthCountArgs} args - Arguments to filter UsersAuths to count.
     * @example
     * // Count the number of UsersAuths
     * const count = await prisma.usersAuth.count({
     *   where: {
     *     // ... the filter for the UsersAuths we want to count
     *   }
     * })
    **/
    count<T extends UsersAuthCountArgs>(
      args?: Subset<T, UsersAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAuthAggregateArgs>(args: Subset<T, UsersAuthAggregateArgs>): Prisma.PrismaPromise<GetUsersAuthAggregateType<T>>

    /**
     * Group by UsersAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAuthGroupByArgs} args - Group by arguments.
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
      T extends UsersAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersAuthGroupByArgs['orderBy'] }
        : { orderBy?: UsersAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersAuth model
   */
  readonly fields: UsersAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersAuth model
   */
  interface UsersAuthFieldRefs {
    readonly authId: FieldRef<"UsersAuth", 'Int'>
    readonly email: FieldRef<"UsersAuth", 'String'>
    readonly password: FieldRef<"UsersAuth", 'String'>
    readonly createdAt: FieldRef<"UsersAuth", 'DateTime'>
    readonly createdBy: FieldRef<"UsersAuth", 'String'>
    readonly isDeleted: FieldRef<"UsersAuth", 'Boolean'>
    readonly userId: FieldRef<"UsersAuth", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsersAuth findUnique
   */
  export type UsersAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter, which UsersAuth to fetch.
     */
    where: UsersAuthWhereUniqueInput
  }

  /**
   * UsersAuth findUniqueOrThrow
   */
  export type UsersAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter, which UsersAuth to fetch.
     */
    where: UsersAuthWhereUniqueInput
  }

  /**
   * UsersAuth findFirst
   */
  export type UsersAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter, which UsersAuth to fetch.
     */
    where?: UsersAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAuths to fetch.
     */
    orderBy?: UsersAuthOrderByWithRelationInput | UsersAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersAuths.
     */
    cursor?: UsersAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersAuths.
     */
    distinct?: UsersAuthScalarFieldEnum | UsersAuthScalarFieldEnum[]
  }

  /**
   * UsersAuth findFirstOrThrow
   */
  export type UsersAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter, which UsersAuth to fetch.
     */
    where?: UsersAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAuths to fetch.
     */
    orderBy?: UsersAuthOrderByWithRelationInput | UsersAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersAuths.
     */
    cursor?: UsersAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersAuths.
     */
    distinct?: UsersAuthScalarFieldEnum | UsersAuthScalarFieldEnum[]
  }

  /**
   * UsersAuth findMany
   */
  export type UsersAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter, which UsersAuths to fetch.
     */
    where?: UsersAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAuths to fetch.
     */
    orderBy?: UsersAuthOrderByWithRelationInput | UsersAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersAuths.
     */
    cursor?: UsersAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAuths.
     */
    skip?: number
    distinct?: UsersAuthScalarFieldEnum | UsersAuthScalarFieldEnum[]
  }

  /**
   * UsersAuth create
   */
  export type UsersAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersAuth.
     */
    data: XOR<UsersAuthCreateInput, UsersAuthUncheckedCreateInput>
  }

  /**
   * UsersAuth createMany
   */
  export type UsersAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersAuths.
     */
    data: UsersAuthCreateManyInput | UsersAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersAuth update
   */
  export type UsersAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersAuth.
     */
    data: XOR<UsersAuthUpdateInput, UsersAuthUncheckedUpdateInput>
    /**
     * Choose, which UsersAuth to update.
     */
    where: UsersAuthWhereUniqueInput
  }

  /**
   * UsersAuth updateMany
   */
  export type UsersAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersAuths.
     */
    data: XOR<UsersAuthUpdateManyMutationInput, UsersAuthUncheckedUpdateManyInput>
    /**
     * Filter which UsersAuths to update
     */
    where?: UsersAuthWhereInput
    /**
     * Limit how many UsersAuths to update.
     */
    limit?: number
  }

  /**
   * UsersAuth upsert
   */
  export type UsersAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersAuth to update in case it exists.
     */
    where: UsersAuthWhereUniqueInput
    /**
     * In case the UsersAuth found by the `where` argument doesn't exist, create a new UsersAuth with this data.
     */
    create: XOR<UsersAuthCreateInput, UsersAuthUncheckedCreateInput>
    /**
     * In case the UsersAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersAuthUpdateInput, UsersAuthUncheckedUpdateInput>
  }

  /**
   * UsersAuth delete
   */
  export type UsersAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
    /**
     * Filter which UsersAuth to delete.
     */
    where: UsersAuthWhereUniqueInput
  }

  /**
   * UsersAuth deleteMany
   */
  export type UsersAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersAuths to delete
     */
    where?: UsersAuthWhereInput
    /**
     * Limit how many UsersAuths to delete.
     */
    limit?: number
  }

  /**
   * UsersAuth without action
   */
  export type UsersAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAuth
     */
    select?: UsersAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAuth
     */
    omit?: UsersAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAuthInclude<ExtArgs> | null
  }


  /**
   * Model AdGroups
   */

  export type AggregateAdGroups = {
    _count: AdGroupsCountAggregateOutputType | null
    _avg: AdGroupsAvgAggregateOutputType | null
    _sum: AdGroupsSumAggregateOutputType | null
    _min: AdGroupsMinAggregateOutputType | null
    _max: AdGroupsMaxAggregateOutputType | null
  }

  export type AdGroupsAvgAggregateOutputType = {
    adGroupId: number | null
  }

  export type AdGroupsSumAggregateOutputType = {
    adGroupId: number | null
  }

  export type AdGroupsMinAggregateOutputType = {
    adGroupId: number | null
    adGroupName: string | null
    comment: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type AdGroupsMaxAggregateOutputType = {
    adGroupId: number | null
    adGroupName: string | null
    comment: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type AdGroupsCountAggregateOutputType = {
    adGroupId: number
    adGroupName: number
    comment: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type AdGroupsAvgAggregateInputType = {
    adGroupId?: true
  }

  export type AdGroupsSumAggregateInputType = {
    adGroupId?: true
  }

  export type AdGroupsMinAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    comment?: true
    createdAt?: true
    createdBy?: true
  }

  export type AdGroupsMaxAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    comment?: true
    createdAt?: true
    createdBy?: true
  }

  export type AdGroupsCountAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    comment?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type AdGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroups to aggregate.
     */
    where?: AdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupsOrderByWithRelationInput | AdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdGroups
    **/
    _count?: true | AdGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdGroupsMaxAggregateInputType
  }

  export type GetAdGroupsAggregateType<T extends AdGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdGroups[P]>
      : GetScalarType<T[P], AggregateAdGroups[P]>
  }




  export type AdGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdGroupsWhereInput
    orderBy?: AdGroupsOrderByWithAggregationInput | AdGroupsOrderByWithAggregationInput[]
    by: AdGroupsScalarFieldEnum[] | AdGroupsScalarFieldEnum
    having?: AdGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdGroupsCountAggregateInputType | true
    _avg?: AdGroupsAvgAggregateInputType
    _sum?: AdGroupsSumAggregateInputType
    _min?: AdGroupsMinAggregateInputType
    _max?: AdGroupsMaxAggregateInputType
  }

  export type AdGroupsGroupByOutputType = {
    adGroupId: number
    adGroupName: string
    comment: string
    createdAt: Date
    createdBy: string
    _count: AdGroupsCountAggregateOutputType | null
    _avg: AdGroupsAvgAggregateOutputType | null
    _sum: AdGroupsSumAggregateOutputType | null
    _min: AdGroupsMinAggregateOutputType | null
    _max: AdGroupsMaxAggregateOutputType | null
  }

  type GetAdGroupsGroupByPayload<T extends AdGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupsGroupByOutputType[P]>
        }
      >
    >


  export type AdGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adGroupId?: boolean
    adGroupName?: boolean
    comment?: boolean
    createdAt?: boolean
    createdBy?: boolean
    users?: boolean | AdGroups$usersArgs<ExtArgs>
    _count?: boolean | AdGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroups"]>



  export type AdGroupsSelectScalar = {
    adGroupId?: boolean
    adGroupName?: boolean
    comment?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type AdGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adGroupId" | "adGroupName" | "comment" | "createdAt" | "createdBy", ExtArgs["result"]["adGroups"]>
  export type AdGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AdGroups$usersArgs<ExtArgs>
    _count?: boolean | AdGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdGroups"
    objects: {
      users: Prisma.$UsersAdGroupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      adGroupId: number
      adGroupName: string
      comment: string
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["adGroups"]>
    composites: {}
  }

  type AdGroupsGetPayload<S extends boolean | null | undefined | AdGroupsDefaultArgs> = $Result.GetResult<Prisma.$AdGroupsPayload, S>

  type AdGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdGroupsCountAggregateInputType | true
    }

  export interface AdGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdGroups'], meta: { name: 'AdGroups' } }
    /**
     * Find zero or one AdGroups that matches the filter.
     * @param {AdGroupsFindUniqueArgs} args - Arguments to find a AdGroups
     * @example
     * // Get one AdGroups
     * const adGroups = await prisma.adGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdGroupsFindUniqueArgs>(args: SelectSubset<T, AdGroupsFindUniqueArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdGroupsFindUniqueOrThrowArgs} args - Arguments to find a AdGroups
     * @example
     * // Get one AdGroups
     * const adGroups = await prisma.adGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsFindFirstArgs} args - Arguments to find a AdGroups
     * @example
     * // Get one AdGroups
     * const adGroups = await prisma.adGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdGroupsFindFirstArgs>(args?: SelectSubset<T, AdGroupsFindFirstArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsFindFirstOrThrowArgs} args - Arguments to find a AdGroups
     * @example
     * // Get one AdGroups
     * const adGroups = await prisma.adGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdGroups
     * const adGroups = await prisma.adGroups.findMany()
     * 
     * // Get first 10 AdGroups
     * const adGroups = await prisma.adGroups.findMany({ take: 10 })
     * 
     * // Only select the `adGroupId`
     * const adGroupsWithAdGroupIdOnly = await prisma.adGroups.findMany({ select: { adGroupId: true } })
     * 
     */
    findMany<T extends AdGroupsFindManyArgs>(args?: SelectSubset<T, AdGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdGroups.
     * @param {AdGroupsCreateArgs} args - Arguments to create a AdGroups.
     * @example
     * // Create one AdGroups
     * const AdGroups = await prisma.adGroups.create({
     *   data: {
     *     // ... data to create a AdGroups
     *   }
     * })
     * 
     */
    create<T extends AdGroupsCreateArgs>(args: SelectSubset<T, AdGroupsCreateArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdGroups.
     * @param {AdGroupsCreateManyArgs} args - Arguments to create many AdGroups.
     * @example
     * // Create many AdGroups
     * const adGroups = await prisma.adGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdGroupsCreateManyArgs>(args?: SelectSubset<T, AdGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdGroups.
     * @param {AdGroupsDeleteArgs} args - Arguments to delete one AdGroups.
     * @example
     * // Delete one AdGroups
     * const AdGroups = await prisma.adGroups.delete({
     *   where: {
     *     // ... filter to delete one AdGroups
     *   }
     * })
     * 
     */
    delete<T extends AdGroupsDeleteArgs>(args: SelectSubset<T, AdGroupsDeleteArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdGroups.
     * @param {AdGroupsUpdateArgs} args - Arguments to update one AdGroups.
     * @example
     * // Update one AdGroups
     * const adGroups = await prisma.adGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdGroupsUpdateArgs>(args: SelectSubset<T, AdGroupsUpdateArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdGroups.
     * @param {AdGroupsDeleteManyArgs} args - Arguments to filter AdGroups to delete.
     * @example
     * // Delete a few AdGroups
     * const { count } = await prisma.adGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdGroupsDeleteManyArgs>(args?: SelectSubset<T, AdGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdGroups
     * const adGroups = await prisma.adGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdGroupsUpdateManyArgs>(args: SelectSubset<T, AdGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdGroups.
     * @param {AdGroupsUpsertArgs} args - Arguments to update or create a AdGroups.
     * @example
     * // Update or create a AdGroups
     * const adGroups = await prisma.adGroups.upsert({
     *   create: {
     *     // ... data to create a AdGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdGroups we want to update
     *   }
     * })
     */
    upsert<T extends AdGroupsUpsertArgs>(args: SelectSubset<T, AdGroupsUpsertArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsCountArgs} args - Arguments to filter AdGroups to count.
     * @example
     * // Count the number of AdGroups
     * const count = await prisma.adGroups.count({
     *   where: {
     *     // ... the filter for the AdGroups we want to count
     *   }
     * })
    **/
    count<T extends AdGroupsCountArgs>(
      args?: Subset<T, AdGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdGroupsAggregateArgs>(args: Subset<T, AdGroupsAggregateArgs>): Prisma.PrismaPromise<GetAdGroupsAggregateType<T>>

    /**
     * Group by AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupsGroupByArgs} args - Group by arguments.
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
      T extends AdGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupsGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdGroups model
   */
  readonly fields: AdGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends AdGroups$usersArgs<ExtArgs> = {}>(args?: Subset<T, AdGroups$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdGroups model
   */
  interface AdGroupsFieldRefs {
    readonly adGroupId: FieldRef<"AdGroups", 'Int'>
    readonly adGroupName: FieldRef<"AdGroups", 'String'>
    readonly comment: FieldRef<"AdGroups", 'String'>
    readonly createdAt: FieldRef<"AdGroups", 'DateTime'>
    readonly createdBy: FieldRef<"AdGroups", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdGroups findUnique
   */
  export type AdGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where: AdGroupsWhereUniqueInput
  }

  /**
   * AdGroups findUniqueOrThrow
   */
  export type AdGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where: AdGroupsWhereUniqueInput
  }

  /**
   * AdGroups findFirst
   */
  export type AdGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where?: AdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupsOrderByWithRelationInput | AdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdGroups.
     */
    distinct?: AdGroupsScalarFieldEnum | AdGroupsScalarFieldEnum[]
  }

  /**
   * AdGroups findFirstOrThrow
   */
  export type AdGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where?: AdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupsOrderByWithRelationInput | AdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdGroups.
     */
    distinct?: AdGroupsScalarFieldEnum | AdGroupsScalarFieldEnum[]
  }

  /**
   * AdGroups findMany
   */
  export type AdGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where?: AdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupsOrderByWithRelationInput | AdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdGroups.
     */
    cursor?: AdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdGroups.
     */
    skip?: number
    distinct?: AdGroupsScalarFieldEnum | AdGroupsScalarFieldEnum[]
  }

  /**
   * AdGroups create
   */
  export type AdGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a AdGroups.
     */
    data: XOR<AdGroupsCreateInput, AdGroupsUncheckedCreateInput>
  }

  /**
   * AdGroups createMany
   */
  export type AdGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdGroups.
     */
    data: AdGroupsCreateManyInput | AdGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdGroups update
   */
  export type AdGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a AdGroups.
     */
    data: XOR<AdGroupsUpdateInput, AdGroupsUncheckedUpdateInput>
    /**
     * Choose, which AdGroups to update.
     */
    where: AdGroupsWhereUniqueInput
  }

  /**
   * AdGroups updateMany
   */
  export type AdGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdGroups.
     */
    data: XOR<AdGroupsUpdateManyMutationInput, AdGroupsUncheckedUpdateManyInput>
    /**
     * Filter which AdGroups to update
     */
    where?: AdGroupsWhereInput
    /**
     * Limit how many AdGroups to update.
     */
    limit?: number
  }

  /**
   * AdGroups upsert
   */
  export type AdGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the AdGroups to update in case it exists.
     */
    where: AdGroupsWhereUniqueInput
    /**
     * In case the AdGroups found by the `where` argument doesn't exist, create a new AdGroups with this data.
     */
    create: XOR<AdGroupsCreateInput, AdGroupsUncheckedCreateInput>
    /**
     * In case the AdGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdGroupsUpdateInput, AdGroupsUncheckedUpdateInput>
  }

  /**
   * AdGroups delete
   */
  export type AdGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
    /**
     * Filter which AdGroups to delete.
     */
    where: AdGroupsWhereUniqueInput
  }

  /**
   * AdGroups deleteMany
   */
  export type AdGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroups to delete
     */
    where?: AdGroupsWhereInput
    /**
     * Limit how many AdGroups to delete.
     */
    limit?: number
  }

  /**
   * AdGroups.users
   */
  export type AdGroups$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    where?: UsersAdGroupsWhereInput
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    cursor?: UsersAdGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersAdGroupsScalarFieldEnum | UsersAdGroupsScalarFieldEnum[]
  }

  /**
   * AdGroups without action
   */
  export type AdGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroups
     */
    select?: AdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroups
     */
    omit?: AdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupsInclude<ExtArgs> | null
  }


  /**
   * Model UsersAdGroups
   */

  export type AggregateUsersAdGroups = {
    _count: UsersAdGroupsCountAggregateOutputType | null
    _avg: UsersAdGroupsAvgAggregateOutputType | null
    _sum: UsersAdGroupsSumAggregateOutputType | null
    _min: UsersAdGroupsMinAggregateOutputType | null
    _max: UsersAdGroupsMaxAggregateOutputType | null
  }

  export type UsersAdGroupsAvgAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
  }

  export type UsersAdGroupsSumAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
  }

  export type UsersAdGroupsMinAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersAdGroupsMaxAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersAdGroupsCountAggregateOutputType = {
    userAdGroupId: number
    userId: number
    adGroupId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UsersAdGroupsAvgAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
  }

  export type UsersAdGroupsSumAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
  }

  export type UsersAdGroupsMinAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersAdGroupsMaxAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersAdGroupsCountAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type UsersAdGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersAdGroups to aggregate.
     */
    where?: UsersAdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAdGroups to fetch.
     */
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersAdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersAdGroups
    **/
    _count?: true | UsersAdGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAdGroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersAdGroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersAdGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersAdGroupsMaxAggregateInputType
  }

  export type GetUsersAdGroupsAggregateType<T extends UsersAdGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersAdGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersAdGroups[P]>
      : GetScalarType<T[P], AggregateUsersAdGroups[P]>
  }




  export type UsersAdGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersAdGroupsWhereInput
    orderBy?: UsersAdGroupsOrderByWithAggregationInput | UsersAdGroupsOrderByWithAggregationInput[]
    by: UsersAdGroupsScalarFieldEnum[] | UsersAdGroupsScalarFieldEnum
    having?: UsersAdGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersAdGroupsCountAggregateInputType | true
    _avg?: UsersAdGroupsAvgAggregateInputType
    _sum?: UsersAdGroupsSumAggregateInputType
    _min?: UsersAdGroupsMinAggregateInputType
    _max?: UsersAdGroupsMaxAggregateInputType
  }

  export type UsersAdGroupsGroupByOutputType = {
    userAdGroupId: number
    userId: number
    adGroupId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: UsersAdGroupsCountAggregateOutputType | null
    _avg: UsersAdGroupsAvgAggregateOutputType | null
    _sum: UsersAdGroupsSumAggregateOutputType | null
    _min: UsersAdGroupsMinAggregateOutputType | null
    _max: UsersAdGroupsMaxAggregateOutputType | null
  }

  type GetUsersAdGroupsGroupByPayload<T extends UsersAdGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersAdGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersAdGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersAdGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersAdGroupsGroupByOutputType[P]>
        }
      >
    >


  export type UsersAdGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAdGroupId?: boolean
    userId?: boolean
    adGroupId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    adGroup?: boolean | AdGroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersAdGroups"]>



  export type UsersAdGroupsSelectScalar = {
    userAdGroupId?: boolean
    userId?: boolean
    adGroupId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UsersAdGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userAdGroupId" | "userId" | "adGroupId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["usersAdGroups"]>
  export type UsersAdGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroup?: boolean | AdGroupsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UsersAdGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersAdGroups"
    objects: {
      adGroup: Prisma.$AdGroupsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userAdGroupId: number
      userId: number
      adGroupId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["usersAdGroups"]>
    composites: {}
  }

  type UsersAdGroupsGetPayload<S extends boolean | null | undefined | UsersAdGroupsDefaultArgs> = $Result.GetResult<Prisma.$UsersAdGroupsPayload, S>

  type UsersAdGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersAdGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersAdGroupsCountAggregateInputType | true
    }

  export interface UsersAdGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersAdGroups'], meta: { name: 'UsersAdGroups' } }
    /**
     * Find zero or one UsersAdGroups that matches the filter.
     * @param {UsersAdGroupsFindUniqueArgs} args - Arguments to find a UsersAdGroups
     * @example
     * // Get one UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersAdGroupsFindUniqueArgs>(args: SelectSubset<T, UsersAdGroupsFindUniqueArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersAdGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersAdGroupsFindUniqueOrThrowArgs} args - Arguments to find a UsersAdGroups
     * @example
     * // Get one UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersAdGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersAdGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersAdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsFindFirstArgs} args - Arguments to find a UsersAdGroups
     * @example
     * // Get one UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersAdGroupsFindFirstArgs>(args?: SelectSubset<T, UsersAdGroupsFindFirstArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersAdGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsFindFirstOrThrowArgs} args - Arguments to find a UsersAdGroups
     * @example
     * // Get one UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersAdGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersAdGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersAdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findMany()
     * 
     * // Get first 10 UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.findMany({ take: 10 })
     * 
     * // Only select the `userAdGroupId`
     * const usersAdGroupsWithUserAdGroupIdOnly = await prisma.usersAdGroups.findMany({ select: { userAdGroupId: true } })
     * 
     */
    findMany<T extends UsersAdGroupsFindManyArgs>(args?: SelectSubset<T, UsersAdGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersAdGroups.
     * @param {UsersAdGroupsCreateArgs} args - Arguments to create a UsersAdGroups.
     * @example
     * // Create one UsersAdGroups
     * const UsersAdGroups = await prisma.usersAdGroups.create({
     *   data: {
     *     // ... data to create a UsersAdGroups
     *   }
     * })
     * 
     */
    create<T extends UsersAdGroupsCreateArgs>(args: SelectSubset<T, UsersAdGroupsCreateArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersAdGroups.
     * @param {UsersAdGroupsCreateManyArgs} args - Arguments to create many UsersAdGroups.
     * @example
     * // Create many UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersAdGroupsCreateManyArgs>(args?: SelectSubset<T, UsersAdGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersAdGroups.
     * @param {UsersAdGroupsDeleteArgs} args - Arguments to delete one UsersAdGroups.
     * @example
     * // Delete one UsersAdGroups
     * const UsersAdGroups = await prisma.usersAdGroups.delete({
     *   where: {
     *     // ... filter to delete one UsersAdGroups
     *   }
     * })
     * 
     */
    delete<T extends UsersAdGroupsDeleteArgs>(args: SelectSubset<T, UsersAdGroupsDeleteArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersAdGroups.
     * @param {UsersAdGroupsUpdateArgs} args - Arguments to update one UsersAdGroups.
     * @example
     * // Update one UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersAdGroupsUpdateArgs>(args: SelectSubset<T, UsersAdGroupsUpdateArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersAdGroups.
     * @param {UsersAdGroupsDeleteManyArgs} args - Arguments to filter UsersAdGroups to delete.
     * @example
     * // Delete a few UsersAdGroups
     * const { count } = await prisma.usersAdGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersAdGroupsDeleteManyArgs>(args?: SelectSubset<T, UsersAdGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersAdGroupsUpdateManyArgs>(args: SelectSubset<T, UsersAdGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersAdGroups.
     * @param {UsersAdGroupsUpsertArgs} args - Arguments to update or create a UsersAdGroups.
     * @example
     * // Update or create a UsersAdGroups
     * const usersAdGroups = await prisma.usersAdGroups.upsert({
     *   create: {
     *     // ... data to create a UsersAdGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersAdGroups we want to update
     *   }
     * })
     */
    upsert<T extends UsersAdGroupsUpsertArgs>(args: SelectSubset<T, UsersAdGroupsUpsertArgs<ExtArgs>>): Prisma__UsersAdGroupsClient<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsCountArgs} args - Arguments to filter UsersAdGroups to count.
     * @example
     * // Count the number of UsersAdGroups
     * const count = await prisma.usersAdGroups.count({
     *   where: {
     *     // ... the filter for the UsersAdGroups we want to count
     *   }
     * })
    **/
    count<T extends UsersAdGroupsCountArgs>(
      args?: Subset<T, UsersAdGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersAdGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAdGroupsAggregateArgs>(args: Subset<T, UsersAdGroupsAggregateArgs>): Prisma.PrismaPromise<GetUsersAdGroupsAggregateType<T>>

    /**
     * Group by UsersAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAdGroupsGroupByArgs} args - Group by arguments.
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
      T extends UsersAdGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersAdGroupsGroupByArgs['orderBy'] }
        : { orderBy?: UsersAdGroupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersAdGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersAdGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersAdGroups model
   */
  readonly fields: UsersAdGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersAdGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersAdGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adGroup<T extends AdGroupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdGroupsDefaultArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersAdGroups model
   */
  interface UsersAdGroupsFieldRefs {
    readonly userAdGroupId: FieldRef<"UsersAdGroups", 'Int'>
    readonly userId: FieldRef<"UsersAdGroups", 'Int'>
    readonly adGroupId: FieldRef<"UsersAdGroups", 'Int'>
    readonly createdAt: FieldRef<"UsersAdGroups", 'DateTime'>
    readonly createdBy: FieldRef<"UsersAdGroups", 'String'>
    readonly isDeleted: FieldRef<"UsersAdGroups", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UsersAdGroups findUnique
   */
  export type UsersAdGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which UsersAdGroups to fetch.
     */
    where: UsersAdGroupsWhereUniqueInput
  }

  /**
   * UsersAdGroups findUniqueOrThrow
   */
  export type UsersAdGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which UsersAdGroups to fetch.
     */
    where: UsersAdGroupsWhereUniqueInput
  }

  /**
   * UsersAdGroups findFirst
   */
  export type UsersAdGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which UsersAdGroups to fetch.
     */
    where?: UsersAdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAdGroups to fetch.
     */
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersAdGroups.
     */
    cursor?: UsersAdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersAdGroups.
     */
    distinct?: UsersAdGroupsScalarFieldEnum | UsersAdGroupsScalarFieldEnum[]
  }

  /**
   * UsersAdGroups findFirstOrThrow
   */
  export type UsersAdGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which UsersAdGroups to fetch.
     */
    where?: UsersAdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAdGroups to fetch.
     */
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersAdGroups.
     */
    cursor?: UsersAdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersAdGroups.
     */
    distinct?: UsersAdGroupsScalarFieldEnum | UsersAdGroupsScalarFieldEnum[]
  }

  /**
   * UsersAdGroups findMany
   */
  export type UsersAdGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter, which UsersAdGroups to fetch.
     */
    where?: UsersAdGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersAdGroups to fetch.
     */
    orderBy?: UsersAdGroupsOrderByWithRelationInput | UsersAdGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersAdGroups.
     */
    cursor?: UsersAdGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersAdGroups.
     */
    skip?: number
    distinct?: UsersAdGroupsScalarFieldEnum | UsersAdGroupsScalarFieldEnum[]
  }

  /**
   * UsersAdGroups create
   */
  export type UsersAdGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersAdGroups.
     */
    data: XOR<UsersAdGroupsCreateInput, UsersAdGroupsUncheckedCreateInput>
  }

  /**
   * UsersAdGroups createMany
   */
  export type UsersAdGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersAdGroups.
     */
    data: UsersAdGroupsCreateManyInput | UsersAdGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersAdGroups update
   */
  export type UsersAdGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersAdGroups.
     */
    data: XOR<UsersAdGroupsUpdateInput, UsersAdGroupsUncheckedUpdateInput>
    /**
     * Choose, which UsersAdGroups to update.
     */
    where: UsersAdGroupsWhereUniqueInput
  }

  /**
   * UsersAdGroups updateMany
   */
  export type UsersAdGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersAdGroups.
     */
    data: XOR<UsersAdGroupsUpdateManyMutationInput, UsersAdGroupsUncheckedUpdateManyInput>
    /**
     * Filter which UsersAdGroups to update
     */
    where?: UsersAdGroupsWhereInput
    /**
     * Limit how many UsersAdGroups to update.
     */
    limit?: number
  }

  /**
   * UsersAdGroups upsert
   */
  export type UsersAdGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersAdGroups to update in case it exists.
     */
    where: UsersAdGroupsWhereUniqueInput
    /**
     * In case the UsersAdGroups found by the `where` argument doesn't exist, create a new UsersAdGroups with this data.
     */
    create: XOR<UsersAdGroupsCreateInput, UsersAdGroupsUncheckedCreateInput>
    /**
     * In case the UsersAdGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersAdGroupsUpdateInput, UsersAdGroupsUncheckedUpdateInput>
  }

  /**
   * UsersAdGroups delete
   */
  export type UsersAdGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
    /**
     * Filter which UsersAdGroups to delete.
     */
    where: UsersAdGroupsWhereUniqueInput
  }

  /**
   * UsersAdGroups deleteMany
   */
  export type UsersAdGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersAdGroups to delete
     */
    where?: UsersAdGroupsWhereInput
    /**
     * Limit how many UsersAdGroups to delete.
     */
    limit?: number
  }

  /**
   * UsersAdGroups without action
   */
  export type UsersAdGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersAdGroups
     */
    select?: UsersAdGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersAdGroups
     */
    omit?: UsersAdGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersAdGroupsInclude<ExtArgs> | null
  }


  /**
   * Model Languages
   */

  export type AggregateLanguages = {
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  export type LanguagesAvgAggregateOutputType = {
    languageId: number | null
  }

  export type LanguagesSumAggregateOutputType = {
    languageId: number | null
  }

  export type LanguagesMinAggregateOutputType = {
    languageId: number | null
    languageName: string | null
    languageCode: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type LanguagesMaxAggregateOutputType = {
    languageId: number | null
    languageName: string | null
    languageCode: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type LanguagesCountAggregateOutputType = {
    languageId: number
    languageName: number
    languageCode: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type LanguagesAvgAggregateInputType = {
    languageId?: true
  }

  export type LanguagesSumAggregateInputType = {
    languageId?: true
  }

  export type LanguagesMinAggregateInputType = {
    languageId?: true
    languageName?: true
    languageCode?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type LanguagesMaxAggregateInputType = {
    languageId?: true
    languageName?: true
    languageCode?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type LanguagesCountAggregateInputType = {
    languageId?: true
    languageName?: true
    languageCode?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to aggregate.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagesMaxAggregateInputType
  }

  export type GetLanguagesAggregateType<T extends LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguages[P]>
      : GetScalarType<T[P], AggregateLanguages[P]>
  }




  export type LanguagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithAggregationInput | LanguagesOrderByWithAggregationInput[]
    by: LanguagesScalarFieldEnum[] | LanguagesScalarFieldEnum
    having?: LanguagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagesCountAggregateInputType | true
    _avg?: LanguagesAvgAggregateInputType
    _sum?: LanguagesSumAggregateInputType
    _min?: LanguagesMinAggregateInputType
    _max?: LanguagesMaxAggregateInputType
  }

  export type LanguagesGroupByOutputType = {
    languageId: number
    languageName: string
    languageCode: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  type GetLanguagesGroupByPayload<T extends LanguagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type LanguagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    languageId?: boolean
    languageName?: boolean
    languageCode?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    users?: boolean | Languages$usersArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>



  export type LanguagesSelectScalar = {
    languageId?: boolean
    languageName?: boolean
    languageCode?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type LanguagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"languageId" | "languageName" | "languageCode" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["languages"]>
  export type LanguagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Languages$usersArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LanguagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Languages"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      languageId: number
      languageName: string
      languageCode: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["languages"]>
    composites: {}
  }

  type LanguagesGetPayload<S extends boolean | null | undefined | LanguagesDefaultArgs> = $Result.GetResult<Prisma.$LanguagesPayload, S>

  type LanguagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguagesCountAggregateInputType | true
    }

  export interface LanguagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Languages'], meta: { name: 'Languages' } }
    /**
     * Find zero or one Languages that matches the filter.
     * @param {LanguagesFindUniqueArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguagesFindUniqueArgs>(args: SelectSubset<T, LanguagesFindUniqueArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Languages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguagesFindUniqueOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguagesFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguagesFindFirstArgs>(args?: SelectSubset<T, LanguagesFindFirstArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguagesFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.languages.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.languages.findMany({ take: 10 })
     * 
     * // Only select the `languageId`
     * const languagesWithLanguageIdOnly = await prisma.languages.findMany({ select: { languageId: true } })
     * 
     */
    findMany<T extends LanguagesFindManyArgs>(args?: SelectSubset<T, LanguagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Languages.
     * @param {LanguagesCreateArgs} args - Arguments to create a Languages.
     * @example
     * // Create one Languages
     * const Languages = await prisma.languages.create({
     *   data: {
     *     // ... data to create a Languages
     *   }
     * })
     * 
     */
    create<T extends LanguagesCreateArgs>(args: SelectSubset<T, LanguagesCreateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguagesCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguagesCreateManyArgs>(args?: SelectSubset<T, LanguagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Languages.
     * @param {LanguagesDeleteArgs} args - Arguments to delete one Languages.
     * @example
     * // Delete one Languages
     * const Languages = await prisma.languages.delete({
     *   where: {
     *     // ... filter to delete one Languages
     *   }
     * })
     * 
     */
    delete<T extends LanguagesDeleteArgs>(args: SelectSubset<T, LanguagesDeleteArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Languages.
     * @param {LanguagesUpdateArgs} args - Arguments to update one Languages.
     * @example
     * // Update one Languages
     * const languages = await prisma.languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguagesUpdateArgs>(args: SelectSubset<T, LanguagesUpdateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguagesDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguagesDeleteManyArgs>(args?: SelectSubset<T, LanguagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguagesUpdateManyArgs>(args: SelectSubset<T, LanguagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Languages.
     * @param {LanguagesUpsertArgs} args - Arguments to update or create a Languages.
     * @example
     * // Update or create a Languages
     * const languages = await prisma.languages.upsert({
     *   create: {
     *     // ... data to create a Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Languages we want to update
     *   }
     * })
     */
    upsert<T extends LanguagesUpsertArgs>(args: SelectSubset<T, LanguagesUpsertArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.languages.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguagesCountArgs>(
      args?: Subset<T, LanguagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguagesAggregateArgs>(args: Subset<T, LanguagesAggregateArgs>): Prisma.PrismaPromise<GetLanguagesAggregateType<T>>

    /**
     * Group by Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesGroupByArgs} args - Group by arguments.
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
      T extends LanguagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguagesGroupByArgs['orderBy'] }
        : { orderBy?: LanguagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Languages model
   */
  readonly fields: LanguagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Languages$usersArgs<ExtArgs> = {}>(args?: Subset<T, Languages$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Languages model
   */
  interface LanguagesFieldRefs {
    readonly languageId: FieldRef<"Languages", 'Int'>
    readonly languageName: FieldRef<"Languages", 'String'>
    readonly languageCode: FieldRef<"Languages", 'String'>
    readonly createdAt: FieldRef<"Languages", 'DateTime'>
    readonly createdBy: FieldRef<"Languages", 'String'>
    readonly isDeleted: FieldRef<"Languages", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Languages findUnique
   */
  export type LanguagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findUniqueOrThrow
   */
  export type LanguagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findFirst
   */
  export type LanguagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findFirstOrThrow
   */
  export type LanguagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findMany
   */
  export type LanguagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages create
   */
  export type LanguagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Languages.
     */
    data: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
  }

  /**
   * Languages createMany
   */
  export type LanguagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Languages update
   */
  export type LanguagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Languages.
     */
    data: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
    /**
     * Choose, which Languages to update.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages updateMany
   */
  export type LanguagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguagesWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Languages upsert
   */
  export type LanguagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Languages to update in case it exists.
     */
    where: LanguagesWhereUniqueInput
    /**
     * In case the Languages found by the `where` argument doesn't exist, create a new Languages with this data.
     */
    create: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
    /**
     * In case the Languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
  }

  /**
   * Languages delete
   */
  export type LanguagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter which Languages to delete.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages deleteMany
   */
  export type LanguagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguagesWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Languages.users
   */
  export type Languages$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Languages without action
   */
  export type LanguagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    userSurname: 'userSurname',
    userCode: 'userCode',
    isActive: 'isActive',
    userLanguageId: 'userLanguageId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsersContactsScalarFieldEnum: {
    userContactId: 'userContactId',
    userContactType: 'userContactType',
    userContactScope: 'userContactScope',
    userContactValue: 'userContactValue',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    userId: 'userId'
  };

  export type UsersContactsScalarFieldEnum = (typeof UsersContactsScalarFieldEnum)[keyof typeof UsersContactsScalarFieldEnum]


  export const UsersAuthScalarFieldEnum: {
    authId: 'authId',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    userId: 'userId'
  };

  export type UsersAuthScalarFieldEnum = (typeof UsersAuthScalarFieldEnum)[keyof typeof UsersAuthScalarFieldEnum]


  export const AdGroupsScalarFieldEnum: {
    adGroupId: 'adGroupId',
    adGroupName: 'adGroupName',
    comment: 'comment',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type AdGroupsScalarFieldEnum = (typeof AdGroupsScalarFieldEnum)[keyof typeof AdGroupsScalarFieldEnum]


  export const UsersAdGroupsScalarFieldEnum: {
    userAdGroupId: 'userAdGroupId',
    userId: 'userId',
    adGroupId: 'adGroupId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UsersAdGroupsScalarFieldEnum = (typeof UsersAdGroupsScalarFieldEnum)[keyof typeof UsersAdGroupsScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    languageId: 'languageId',
    languageName: 'languageName',
    languageCode: 'languageCode',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    userName: 'userName',
    userSurname: 'userSurname',
    userCode: 'userCode',
    createdBy: 'createdBy'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const UsersContactsOrderByRelevanceFieldEnum: {
    userContactValue: 'userContactValue',
    createdBy: 'createdBy'
  };

  export type UsersContactsOrderByRelevanceFieldEnum = (typeof UsersContactsOrderByRelevanceFieldEnum)[keyof typeof UsersContactsOrderByRelevanceFieldEnum]


  export const UsersAuthOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    createdBy: 'createdBy'
  };

  export type UsersAuthOrderByRelevanceFieldEnum = (typeof UsersAuthOrderByRelevanceFieldEnum)[keyof typeof UsersAuthOrderByRelevanceFieldEnum]


  export const AdGroupsOrderByRelevanceFieldEnum: {
    adGroupName: 'adGroupName',
    comment: 'comment',
    createdBy: 'createdBy'
  };

  export type AdGroupsOrderByRelevanceFieldEnum = (typeof AdGroupsOrderByRelevanceFieldEnum)[keyof typeof AdGroupsOrderByRelevanceFieldEnum]


  export const UsersAdGroupsOrderByRelevanceFieldEnum: {
    createdBy: 'createdBy'
  };

  export type UsersAdGroupsOrderByRelevanceFieldEnum = (typeof UsersAdGroupsOrderByRelevanceFieldEnum)[keyof typeof UsersAdGroupsOrderByRelevanceFieldEnum]


  export const LanguagesOrderByRelevanceFieldEnum: {
    languageName: 'languageName',
    languageCode: 'languageCode',
    createdBy: 'createdBy'
  };

  export type LanguagesOrderByRelevanceFieldEnum = (typeof LanguagesOrderByRelevanceFieldEnum)[keyof typeof LanguagesOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ContactsTypes'
   */
  export type EnumContactsTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactsTypes'>
    


  /**
   * Reference to a field of type 'ContactsScopes'
   */
  export type EnumContactsScopesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactsScopes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: IntFilter<"Users"> | number
    userName?: StringFilter<"Users"> | string
    userSurname?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    userLanguageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
    language?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    adGroups?: UsersAdGroupsListRelationFilter
    auth?: XOR<UsersAuthNullableScalarRelationFilter, UsersAuthWhereInput> | null
    contacts?: UsersContactsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    userLanguageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    language?: LanguagesOrderByWithRelationInput
    adGroups?: UsersAdGroupsOrderByRelationAggregateInput
    auth?: UsersAuthOrderByWithRelationInput
    contacts?: UsersContactsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userName?: StringFilter<"Users"> | string
    userSurname?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    userLanguageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
    language?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    adGroups?: UsersAdGroupsListRelationFilter
    auth?: XOR<UsersAuthNullableScalarRelationFilter, UsersAuthWhereInput> | null
    contacts?: UsersContactsListRelationFilter
  }, "userId">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    userLanguageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Users"> | number
    userName?: StringWithAggregatesFilter<"Users"> | string
    userSurname?: StringWithAggregatesFilter<"Users"> | string
    userCode?: StringWithAggregatesFilter<"Users"> | string
    isActive?: BoolWithAggregatesFilter<"Users"> | boolean
    userLanguageId?: IntWithAggregatesFilter<"Users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Users"> | string
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
  }

  export type UsersContactsWhereInput = {
    AND?: UsersContactsWhereInput | UsersContactsWhereInput[]
    OR?: UsersContactsWhereInput[]
    NOT?: UsersContactsWhereInput | UsersContactsWhereInput[]
    userContactId?: IntFilter<"UsersContacts"> | number
    userContactType?: EnumContactsTypesFilter<"UsersContacts"> | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFilter<"UsersContacts"> | $Enums.ContactsScopes
    userContactValue?: StringFilter<"UsersContacts"> | string
    createdAt?: DateTimeFilter<"UsersContacts"> | Date | string
    createdBy?: StringFilter<"UsersContacts"> | string
    isDeleted?: BoolFilter<"UsersContacts"> | boolean
    userId?: IntFilter<"UsersContacts"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UsersContactsOrderByWithRelationInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: UsersContactsOrderByRelevanceInput
  }

  export type UsersContactsWhereUniqueInput = Prisma.AtLeast<{
    userContactId?: number
    AND?: UsersContactsWhereInput | UsersContactsWhereInput[]
    OR?: UsersContactsWhereInput[]
    NOT?: UsersContactsWhereInput | UsersContactsWhereInput[]
    userContactType?: EnumContactsTypesFilter<"UsersContacts"> | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFilter<"UsersContacts"> | $Enums.ContactsScopes
    userContactValue?: StringFilter<"UsersContacts"> | string
    createdAt?: DateTimeFilter<"UsersContacts"> | Date | string
    createdBy?: StringFilter<"UsersContacts"> | string
    isDeleted?: BoolFilter<"UsersContacts"> | boolean
    userId?: IntFilter<"UsersContacts"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "userContactId">

  export type UsersContactsOrderByWithAggregationInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    _count?: UsersContactsCountOrderByAggregateInput
    _avg?: UsersContactsAvgOrderByAggregateInput
    _max?: UsersContactsMaxOrderByAggregateInput
    _min?: UsersContactsMinOrderByAggregateInput
    _sum?: UsersContactsSumOrderByAggregateInput
  }

  export type UsersContactsScalarWhereWithAggregatesInput = {
    AND?: UsersContactsScalarWhereWithAggregatesInput | UsersContactsScalarWhereWithAggregatesInput[]
    OR?: UsersContactsScalarWhereWithAggregatesInput[]
    NOT?: UsersContactsScalarWhereWithAggregatesInput | UsersContactsScalarWhereWithAggregatesInput[]
    userContactId?: IntWithAggregatesFilter<"UsersContacts"> | number
    userContactType?: EnumContactsTypesWithAggregatesFilter<"UsersContacts"> | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesWithAggregatesFilter<"UsersContacts"> | $Enums.ContactsScopes
    userContactValue?: StringWithAggregatesFilter<"UsersContacts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsersContacts"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UsersContacts"> | string
    isDeleted?: BoolWithAggregatesFilter<"UsersContacts"> | boolean
    userId?: IntWithAggregatesFilter<"UsersContacts"> | number
  }

  export type UsersAuthWhereInput = {
    AND?: UsersAuthWhereInput | UsersAuthWhereInput[]
    OR?: UsersAuthWhereInput[]
    NOT?: UsersAuthWhereInput | UsersAuthWhereInput[]
    authId?: IntFilter<"UsersAuth"> | number
    email?: StringFilter<"UsersAuth"> | string
    password?: StringFilter<"UsersAuth"> | string
    createdAt?: DateTimeFilter<"UsersAuth"> | Date | string
    createdBy?: StringFilter<"UsersAuth"> | string
    isDeleted?: BoolFilter<"UsersAuth"> | boolean
    userId?: IntFilter<"UsersAuth"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UsersAuthOrderByWithRelationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: UsersAuthOrderByRelevanceInput
  }

  export type UsersAuthWhereUniqueInput = Prisma.AtLeast<{
    authId?: number
    email?: string
    userId?: number
    AND?: UsersAuthWhereInput | UsersAuthWhereInput[]
    OR?: UsersAuthWhereInput[]
    NOT?: UsersAuthWhereInput | UsersAuthWhereInput[]
    password?: StringFilter<"UsersAuth"> | string
    createdAt?: DateTimeFilter<"UsersAuth"> | Date | string
    createdBy?: StringFilter<"UsersAuth"> | string
    isDeleted?: BoolFilter<"UsersAuth"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "authId" | "email" | "userId">

  export type UsersAuthOrderByWithAggregationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    _count?: UsersAuthCountOrderByAggregateInput
    _avg?: UsersAuthAvgOrderByAggregateInput
    _max?: UsersAuthMaxOrderByAggregateInput
    _min?: UsersAuthMinOrderByAggregateInput
    _sum?: UsersAuthSumOrderByAggregateInput
  }

  export type UsersAuthScalarWhereWithAggregatesInput = {
    AND?: UsersAuthScalarWhereWithAggregatesInput | UsersAuthScalarWhereWithAggregatesInput[]
    OR?: UsersAuthScalarWhereWithAggregatesInput[]
    NOT?: UsersAuthScalarWhereWithAggregatesInput | UsersAuthScalarWhereWithAggregatesInput[]
    authId?: IntWithAggregatesFilter<"UsersAuth"> | number
    email?: StringWithAggregatesFilter<"UsersAuth"> | string
    password?: StringWithAggregatesFilter<"UsersAuth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsersAuth"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UsersAuth"> | string
    isDeleted?: BoolWithAggregatesFilter<"UsersAuth"> | boolean
    userId?: IntWithAggregatesFilter<"UsersAuth"> | number
  }

  export type AdGroupsWhereInput = {
    AND?: AdGroupsWhereInput | AdGroupsWhereInput[]
    OR?: AdGroupsWhereInput[]
    NOT?: AdGroupsWhereInput | AdGroupsWhereInput[]
    adGroupId?: IntFilter<"AdGroups"> | number
    adGroupName?: StringFilter<"AdGroups"> | string
    comment?: StringFilter<"AdGroups"> | string
    createdAt?: DateTimeFilter<"AdGroups"> | Date | string
    createdBy?: StringFilter<"AdGroups"> | string
    users?: UsersAdGroupsListRelationFilter
  }

  export type AdGroupsOrderByWithRelationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    users?: UsersAdGroupsOrderByRelationAggregateInput
    _relevance?: AdGroupsOrderByRelevanceInput
  }

  export type AdGroupsWhereUniqueInput = Prisma.AtLeast<{
    adGroupId?: number
    AND?: AdGroupsWhereInput | AdGroupsWhereInput[]
    OR?: AdGroupsWhereInput[]
    NOT?: AdGroupsWhereInput | AdGroupsWhereInput[]
    adGroupName?: StringFilter<"AdGroups"> | string
    comment?: StringFilter<"AdGroups"> | string
    createdAt?: DateTimeFilter<"AdGroups"> | Date | string
    createdBy?: StringFilter<"AdGroups"> | string
    users?: UsersAdGroupsListRelationFilter
  }, "adGroupId">

  export type AdGroupsOrderByWithAggregationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: AdGroupsCountOrderByAggregateInput
    _avg?: AdGroupsAvgOrderByAggregateInput
    _max?: AdGroupsMaxOrderByAggregateInput
    _min?: AdGroupsMinOrderByAggregateInput
    _sum?: AdGroupsSumOrderByAggregateInput
  }

  export type AdGroupsScalarWhereWithAggregatesInput = {
    AND?: AdGroupsScalarWhereWithAggregatesInput | AdGroupsScalarWhereWithAggregatesInput[]
    OR?: AdGroupsScalarWhereWithAggregatesInput[]
    NOT?: AdGroupsScalarWhereWithAggregatesInput | AdGroupsScalarWhereWithAggregatesInput[]
    adGroupId?: IntWithAggregatesFilter<"AdGroups"> | number
    adGroupName?: StringWithAggregatesFilter<"AdGroups"> | string
    comment?: StringWithAggregatesFilter<"AdGroups"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdGroups"> | Date | string
    createdBy?: StringWithAggregatesFilter<"AdGroups"> | string
  }

  export type UsersAdGroupsWhereInput = {
    AND?: UsersAdGroupsWhereInput | UsersAdGroupsWhereInput[]
    OR?: UsersAdGroupsWhereInput[]
    NOT?: UsersAdGroupsWhereInput | UsersAdGroupsWhereInput[]
    userAdGroupId?: IntFilter<"UsersAdGroups"> | number
    userId?: IntFilter<"UsersAdGroups"> | number
    adGroupId?: IntFilter<"UsersAdGroups"> | number
    createdAt?: DateTimeFilter<"UsersAdGroups"> | Date | string
    createdBy?: StringFilter<"UsersAdGroups"> | string
    isDeleted?: BoolFilter<"UsersAdGroups"> | boolean
    adGroup?: XOR<AdGroupsScalarRelationFilter, AdGroupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UsersAdGroupsOrderByWithRelationInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    adGroup?: AdGroupsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    _relevance?: UsersAdGroupsOrderByRelevanceInput
  }

  export type UsersAdGroupsWhereUniqueInput = Prisma.AtLeast<{
    userAdGroupId?: number
    AND?: UsersAdGroupsWhereInput | UsersAdGroupsWhereInput[]
    OR?: UsersAdGroupsWhereInput[]
    NOT?: UsersAdGroupsWhereInput | UsersAdGroupsWhereInput[]
    userId?: IntFilter<"UsersAdGroups"> | number
    adGroupId?: IntFilter<"UsersAdGroups"> | number
    createdAt?: DateTimeFilter<"UsersAdGroups"> | Date | string
    createdBy?: StringFilter<"UsersAdGroups"> | string
    isDeleted?: BoolFilter<"UsersAdGroups"> | boolean
    adGroup?: XOR<AdGroupsScalarRelationFilter, AdGroupsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "userAdGroupId">

  export type UsersAdGroupsOrderByWithAggregationInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: UsersAdGroupsCountOrderByAggregateInput
    _avg?: UsersAdGroupsAvgOrderByAggregateInput
    _max?: UsersAdGroupsMaxOrderByAggregateInput
    _min?: UsersAdGroupsMinOrderByAggregateInput
    _sum?: UsersAdGroupsSumOrderByAggregateInput
  }

  export type UsersAdGroupsScalarWhereWithAggregatesInput = {
    AND?: UsersAdGroupsScalarWhereWithAggregatesInput | UsersAdGroupsScalarWhereWithAggregatesInput[]
    OR?: UsersAdGroupsScalarWhereWithAggregatesInput[]
    NOT?: UsersAdGroupsScalarWhereWithAggregatesInput | UsersAdGroupsScalarWhereWithAggregatesInput[]
    userAdGroupId?: IntWithAggregatesFilter<"UsersAdGroups"> | number
    userId?: IntWithAggregatesFilter<"UsersAdGroups"> | number
    adGroupId?: IntWithAggregatesFilter<"UsersAdGroups"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsersAdGroups"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UsersAdGroups"> | string
    isDeleted?: BoolWithAggregatesFilter<"UsersAdGroups"> | boolean
  }

  export type LanguagesWhereInput = {
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    languageId?: IntFilter<"Languages"> | number
    languageName?: StringFilter<"Languages"> | string
    languageCode?: StringFilter<"Languages"> | string
    createdAt?: DateTimeFilter<"Languages"> | Date | string
    createdBy?: StringFilter<"Languages"> | string
    isDeleted?: BoolFilter<"Languages"> | boolean
    users?: UsersListRelationFilter
  }

  export type LanguagesOrderByWithRelationInput = {
    languageId?: SortOrder
    languageName?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    users?: UsersOrderByRelationAggregateInput
    _relevance?: LanguagesOrderByRelevanceInput
  }

  export type LanguagesWhereUniqueInput = Prisma.AtLeast<{
    languageId?: number
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    languageName?: StringFilter<"Languages"> | string
    languageCode?: StringFilter<"Languages"> | string
    createdAt?: DateTimeFilter<"Languages"> | Date | string
    createdBy?: StringFilter<"Languages"> | string
    isDeleted?: BoolFilter<"Languages"> | boolean
    users?: UsersListRelationFilter
  }, "languageId">

  export type LanguagesOrderByWithAggregationInput = {
    languageId?: SortOrder
    languageName?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: LanguagesCountOrderByAggregateInput
    _avg?: LanguagesAvgOrderByAggregateInput
    _max?: LanguagesMaxOrderByAggregateInput
    _min?: LanguagesMinOrderByAggregateInput
    _sum?: LanguagesSumOrderByAggregateInput
  }

  export type LanguagesScalarWhereWithAggregatesInput = {
    AND?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    OR?: LanguagesScalarWhereWithAggregatesInput[]
    NOT?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    languageId?: IntWithAggregatesFilter<"Languages"> | number
    languageName?: StringWithAggregatesFilter<"Languages"> | string
    languageCode?: StringWithAggregatesFilter<"Languages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Languages"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Languages"> | string
    isDeleted?: BoolWithAggregatesFilter<"Languages"> | boolean
  }

  export type UsersCreateInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    adGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
    contacts?: UsersContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    userLanguageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
    contacts?: UsersContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    adGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userLanguageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    userLanguageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userLanguageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsCreateInput = {
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UsersCreateNestedOneWithoutContactsInput
  }

  export type UsersContactsUncheckedCreateInput = {
    userContactId?: number
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UsersContactsUpdateInput = {
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutContactsNestedInput
  }

  export type UsersContactsUncheckedUpdateInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersContactsCreateManyInput = {
    userContactId?: number
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UsersContactsUpdateManyMutationInput = {
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsUncheckedUpdateManyInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersAuthCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UsersCreateNestedOneWithoutAuthInput
  }

  export type UsersAuthUncheckedCreateInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UsersAuthUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutAuthNestedInput
  }

  export type UsersAuthUncheckedUpdateInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersAuthCreateManyInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UsersAuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAuthUncheckedUpdateManyInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdGroupsCreateInput = {
    adGroupName: string
    comment: string
    createdAt?: Date | string
    createdBy?: string
    users?: UsersAdGroupsCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupsUncheckedCreateInput = {
    adGroupId?: number
    adGroupName: string
    comment: string
    createdAt?: Date | string
    createdBy?: string
    users?: UsersAdGroupsUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupsUpdateInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    users?: UsersAdGroupsUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupsUncheckedUpdateInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    users?: UsersAdGroupsUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupsCreateManyInput = {
    adGroupId?: number
    adGroupName: string
    comment: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupsUpdateManyMutationInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type AdGroupsUncheckedUpdateManyInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UsersAdGroupsCreateInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroup: AdGroupsCreateNestedOneWithoutUsersInput
    user: UsersCreateNestedOneWithoutAdGroupsInput
  }

  export type UsersAdGroupsUncheckedCreateInput = {
    userAdGroupId?: number
    userId: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroup?: AdGroupsUpdateOneRequiredWithoutUsersNestedInput
    user?: UsersUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type UsersAdGroupsUncheckedUpdateInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsCreateManyInput = {
    userAdGroupId?: number
    userId: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsUncheckedUpdateManyInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguagesCreateInput = {
    languageName: string
    languageCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    users?: UsersCreateNestedManyWithoutLanguageInput
  }

  export type LanguagesUncheckedCreateInput = {
    languageId?: number
    languageName: string
    languageCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    users?: UsersUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguagesUpdateInput = {
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UsersUpdateManyWithoutLanguageNestedInput
  }

  export type LanguagesUncheckedUpdateInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UsersUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguagesCreateManyInput = {
    languageId?: number
    languageName: string
    languageCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type LanguagesUpdateManyMutationInput = {
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguagesUncheckedUpdateManyInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type LanguagesScalarRelationFilter = {
    is?: LanguagesWhereInput
    isNot?: LanguagesWhereInput
  }

  export type UsersAdGroupsListRelationFilter = {
    every?: UsersAdGroupsWhereInput
    some?: UsersAdGroupsWhereInput
    none?: UsersAdGroupsWhereInput
  }

  export type UsersAuthNullableScalarRelationFilter = {
    is?: UsersAuthWhereInput | null
    isNot?: UsersAuthWhereInput | null
  }

  export type UsersContactsListRelationFilter = {
    every?: UsersContactsWhereInput
    some?: UsersContactsWhereInput
    none?: UsersContactsWhereInput
  }

  export type UsersAdGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    userLanguageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userId?: SortOrder
    userLanguageId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    userLanguageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    userLanguageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userId?: SortOrder
    userLanguageId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumContactsTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsTypes | EnumContactsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsTypes[]
    notIn?: $Enums.ContactsTypes[]
    not?: NestedEnumContactsTypesFilter<$PrismaModel> | $Enums.ContactsTypes
  }

  export type EnumContactsScopesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsScopes | EnumContactsScopesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsScopes[]
    notIn?: $Enums.ContactsScopes[]
    not?: NestedEnumContactsScopesFilter<$PrismaModel> | $Enums.ContactsScopes
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UsersContactsOrderByRelevanceInput = {
    fields: UsersContactsOrderByRelevanceFieldEnum | UsersContactsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersContactsCountOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersContactsAvgOrderByAggregateInput = {
    userContactId?: SortOrder
    userId?: SortOrder
  }

  export type UsersContactsMaxOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersContactsMinOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersContactsSumOrderByAggregateInput = {
    userContactId?: SortOrder
    userId?: SortOrder
  }

  export type EnumContactsTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsTypes | EnumContactsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsTypes[]
    notIn?: $Enums.ContactsTypes[]
    not?: NestedEnumContactsTypesWithAggregatesFilter<$PrismaModel> | $Enums.ContactsTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactsTypesFilter<$PrismaModel>
    _max?: NestedEnumContactsTypesFilter<$PrismaModel>
  }

  export type EnumContactsScopesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsScopes | EnumContactsScopesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsScopes[]
    notIn?: $Enums.ContactsScopes[]
    not?: NestedEnumContactsScopesWithAggregatesFilter<$PrismaModel> | $Enums.ContactsScopes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactsScopesFilter<$PrismaModel>
    _max?: NestedEnumContactsScopesFilter<$PrismaModel>
  }

  export type UsersAuthOrderByRelevanceInput = {
    fields: UsersAuthOrderByRelevanceFieldEnum | UsersAuthOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersAuthCountOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersAuthAvgOrderByAggregateInput = {
    authId?: SortOrder
    userId?: SortOrder
  }

  export type UsersAuthMaxOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersAuthMinOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UsersAuthSumOrderByAggregateInput = {
    authId?: SortOrder
    userId?: SortOrder
  }

  export type AdGroupsOrderByRelevanceInput = {
    fields: AdGroupsOrderByRelevanceFieldEnum | AdGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdGroupsCountOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupsAvgOrderByAggregateInput = {
    adGroupId?: SortOrder
  }

  export type AdGroupsMaxOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupsMinOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupsSumOrderByAggregateInput = {
    adGroupId?: SortOrder
  }

  export type AdGroupsScalarRelationFilter = {
    is?: AdGroupsWhereInput
    isNot?: AdGroupsWhereInput
  }

  export type UsersAdGroupsOrderByRelevanceInput = {
    fields: UsersAdGroupsOrderByRelevanceFieldEnum | UsersAdGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersAdGroupsCountOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAdGroupsAvgOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
  }

  export type UsersAdGroupsMaxOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAdGroupsMinOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAdGroupsSumOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguagesOrderByRelevanceInput = {
    fields: LanguagesOrderByRelevanceFieldEnum | LanguagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LanguagesCountOrderByAggregateInput = {
    languageId?: SortOrder
    languageName?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type LanguagesAvgOrderByAggregateInput = {
    languageId?: SortOrder
  }

  export type LanguagesMaxOrderByAggregateInput = {
    languageId?: SortOrder
    languageName?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type LanguagesMinOrderByAggregateInput = {
    languageId?: SortOrder
    languageName?: SortOrder
    languageCode?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type LanguagesSumOrderByAggregateInput = {
    languageId?: SortOrder
  }

  export type LanguagesCreateNestedOneWithoutUsersInput = {
    create?: XOR<LanguagesCreateWithoutUsersInput, LanguagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutUsersInput
    connect?: LanguagesWhereUniqueInput
  }

  export type UsersAdGroupsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput> | UsersAdGroupsCreateWithoutUserInput[] | UsersAdGroupsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutUserInput | UsersAdGroupsCreateOrConnectWithoutUserInput[]
    createMany?: UsersAdGroupsCreateManyUserInputEnvelope
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
  }

  export type UsersAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersAuthCreateOrConnectWithoutUserInput
    connect?: UsersAuthWhereUniqueInput
  }

  export type UsersContactsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput> | UsersContactsCreateWithoutUserInput[] | UsersContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersContactsCreateOrConnectWithoutUserInput | UsersContactsCreateOrConnectWithoutUserInput[]
    createMany?: UsersContactsCreateManyUserInputEnvelope
    connect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
  }

  export type UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput> | UsersAdGroupsCreateWithoutUserInput[] | UsersAdGroupsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutUserInput | UsersAdGroupsCreateOrConnectWithoutUserInput[]
    createMany?: UsersAdGroupsCreateManyUserInputEnvelope
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
  }

  export type UsersAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersAuthCreateOrConnectWithoutUserInput
    connect?: UsersAuthWhereUniqueInput
  }

  export type UsersContactsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput> | UsersContactsCreateWithoutUserInput[] | UsersContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersContactsCreateOrConnectWithoutUserInput | UsersContactsCreateOrConnectWithoutUserInput[]
    createMany?: UsersContactsCreateManyUserInputEnvelope
    connect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LanguagesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<LanguagesCreateWithoutUsersInput, LanguagesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutUsersInput
    upsert?: LanguagesUpsertWithoutUsersInput
    connect?: LanguagesWhereUniqueInput
    update?: XOR<XOR<LanguagesUpdateToOneWithWhereWithoutUsersInput, LanguagesUpdateWithoutUsersInput>, LanguagesUncheckedUpdateWithoutUsersInput>
  }

  export type UsersAdGroupsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput> | UsersAdGroupsCreateWithoutUserInput[] | UsersAdGroupsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutUserInput | UsersAdGroupsCreateOrConnectWithoutUserInput[]
    upsert?: UsersAdGroupsUpsertWithWhereUniqueWithoutUserInput | UsersAdGroupsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersAdGroupsCreateManyUserInputEnvelope
    set?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    disconnect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    delete?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    update?: UsersAdGroupsUpdateWithWhereUniqueWithoutUserInput | UsersAdGroupsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersAdGroupsUpdateManyWithWhereWithoutUserInput | UsersAdGroupsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
  }

  export type UsersAuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersAuthCreateOrConnectWithoutUserInput
    upsert?: UsersAuthUpsertWithoutUserInput
    disconnect?: UsersAuthWhereInput | boolean
    delete?: UsersAuthWhereInput | boolean
    connect?: UsersAuthWhereUniqueInput
    update?: XOR<XOR<UsersAuthUpdateToOneWithWhereWithoutUserInput, UsersAuthUpdateWithoutUserInput>, UsersAuthUncheckedUpdateWithoutUserInput>
  }

  export type UsersContactsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput> | UsersContactsCreateWithoutUserInput[] | UsersContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersContactsCreateOrConnectWithoutUserInput | UsersContactsCreateOrConnectWithoutUserInput[]
    upsert?: UsersContactsUpsertWithWhereUniqueWithoutUserInput | UsersContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersContactsCreateManyUserInputEnvelope
    set?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    disconnect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    delete?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    connect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    update?: UsersContactsUpdateWithWhereUniqueWithoutUserInput | UsersContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersContactsUpdateManyWithWhereWithoutUserInput | UsersContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersContactsScalarWhereInput | UsersContactsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput> | UsersAdGroupsCreateWithoutUserInput[] | UsersAdGroupsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutUserInput | UsersAdGroupsCreateOrConnectWithoutUserInput[]
    upsert?: UsersAdGroupsUpsertWithWhereUniqueWithoutUserInput | UsersAdGroupsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersAdGroupsCreateManyUserInputEnvelope
    set?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    disconnect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    delete?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    update?: UsersAdGroupsUpdateWithWhereUniqueWithoutUserInput | UsersAdGroupsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersAdGroupsUpdateManyWithWhereWithoutUserInput | UsersAdGroupsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
  }

  export type UsersAuthUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UsersAuthCreateOrConnectWithoutUserInput
    upsert?: UsersAuthUpsertWithoutUserInput
    disconnect?: UsersAuthWhereInput | boolean
    delete?: UsersAuthWhereInput | boolean
    connect?: UsersAuthWhereUniqueInput
    update?: XOR<XOR<UsersAuthUpdateToOneWithWhereWithoutUserInput, UsersAuthUpdateWithoutUserInput>, UsersAuthUncheckedUpdateWithoutUserInput>
  }

  export type UsersContactsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput> | UsersContactsCreateWithoutUserInput[] | UsersContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersContactsCreateOrConnectWithoutUserInput | UsersContactsCreateOrConnectWithoutUserInput[]
    upsert?: UsersContactsUpsertWithWhereUniqueWithoutUserInput | UsersContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersContactsCreateManyUserInputEnvelope
    set?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    disconnect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    delete?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    connect?: UsersContactsWhereUniqueInput | UsersContactsWhereUniqueInput[]
    update?: UsersContactsUpdateWithWhereUniqueWithoutUserInput | UsersContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersContactsUpdateManyWithWhereWithoutUserInput | UsersContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersContactsScalarWhereInput | UsersContactsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutContactsInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumContactsTypesFieldUpdateOperationsInput = {
    set?: $Enums.ContactsTypes
  }

  export type EnumContactsScopesFieldUpdateOperationsInput = {
    set?: $Enums.ContactsScopes
  }

  export type UsersUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    upsert?: UsersUpsertWithoutContactsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutContactsInput, UsersUpdateWithoutContactsInput>, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type UsersCreateNestedOneWithoutAuthInput = {
    create?: XOR<UsersCreateWithoutAuthInput, UsersUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAuthInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAuthNestedInput = {
    create?: XOR<UsersCreateWithoutAuthInput, UsersUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAuthInput
    upsert?: UsersUpsertWithoutAuthInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAuthInput, UsersUpdateWithoutAuthInput>, UsersUncheckedUpdateWithoutAuthInput>
  }

  export type UsersAdGroupsCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput> | UsersAdGroupsCreateWithoutAdGroupInput[] | UsersAdGroupsUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutAdGroupInput | UsersAdGroupsCreateOrConnectWithoutAdGroupInput[]
    createMany?: UsersAdGroupsCreateManyAdGroupInputEnvelope
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
  }

  export type UsersAdGroupsUncheckedCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput> | UsersAdGroupsCreateWithoutAdGroupInput[] | UsersAdGroupsUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutAdGroupInput | UsersAdGroupsCreateOrConnectWithoutAdGroupInput[]
    createMany?: UsersAdGroupsCreateManyAdGroupInputEnvelope
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
  }

  export type UsersAdGroupsUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput> | UsersAdGroupsCreateWithoutAdGroupInput[] | UsersAdGroupsUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutAdGroupInput | UsersAdGroupsCreateOrConnectWithoutAdGroupInput[]
    upsert?: UsersAdGroupsUpsertWithWhereUniqueWithoutAdGroupInput | UsersAdGroupsUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: UsersAdGroupsCreateManyAdGroupInputEnvelope
    set?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    disconnect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    delete?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    update?: UsersAdGroupsUpdateWithWhereUniqueWithoutAdGroupInput | UsersAdGroupsUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: UsersAdGroupsUpdateManyWithWhereWithoutAdGroupInput | UsersAdGroupsUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
  }

  export type UsersAdGroupsUncheckedUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput> | UsersAdGroupsCreateWithoutAdGroupInput[] | UsersAdGroupsUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UsersAdGroupsCreateOrConnectWithoutAdGroupInput | UsersAdGroupsCreateOrConnectWithoutAdGroupInput[]
    upsert?: UsersAdGroupsUpsertWithWhereUniqueWithoutAdGroupInput | UsersAdGroupsUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: UsersAdGroupsCreateManyAdGroupInputEnvelope
    set?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    disconnect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    delete?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    connect?: UsersAdGroupsWhereUniqueInput | UsersAdGroupsWhereUniqueInput[]
    update?: UsersAdGroupsUpdateWithWhereUniqueWithoutAdGroupInput | UsersAdGroupsUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: UsersAdGroupsUpdateManyWithWhereWithoutAdGroupInput | UsersAdGroupsUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
  }

  export type AdGroupsCreateNestedOneWithoutUsersInput = {
    create?: XOR<AdGroupsCreateWithoutUsersInput, AdGroupsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdGroupsCreateOrConnectWithoutUsersInput
    connect?: AdGroupsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutAdGroupsInput = {
    create?: XOR<UsersCreateWithoutAdGroupsInput, UsersUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdGroupsInput
    connect?: UsersWhereUniqueInput
  }

  export type AdGroupsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AdGroupsCreateWithoutUsersInput, AdGroupsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdGroupsCreateOrConnectWithoutUsersInput
    upsert?: AdGroupsUpsertWithoutUsersInput
    connect?: AdGroupsWhereUniqueInput
    update?: XOR<XOR<AdGroupsUpdateToOneWithWhereWithoutUsersInput, AdGroupsUpdateWithoutUsersInput>, AdGroupsUncheckedUpdateWithoutUsersInput>
  }

  export type UsersUpdateOneRequiredWithoutAdGroupsNestedInput = {
    create?: XOR<UsersCreateWithoutAdGroupsInput, UsersUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdGroupsInput
    upsert?: UsersUpsertWithoutAdGroupsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAdGroupsInput, UsersUpdateWithoutAdGroupsInput>, UsersUncheckedUpdateWithoutAdGroupsInput>
  }

  export type UsersCreateNestedManyWithoutLanguageInput = {
    create?: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput> | UsersCreateWithoutLanguageInput[] | UsersUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLanguageInput | UsersCreateOrConnectWithoutLanguageInput[]
    createMany?: UsersCreateManyLanguageInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput> | UsersCreateWithoutLanguageInput[] | UsersUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLanguageInput | UsersCreateOrConnectWithoutLanguageInput[]
    createMany?: UsersCreateManyLanguageInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput> | UsersCreateWithoutLanguageInput[] | UsersUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLanguageInput | UsersCreateOrConnectWithoutLanguageInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutLanguageInput | UsersUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: UsersCreateManyLanguageInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutLanguageInput | UsersUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutLanguageInput | UsersUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput> | UsersCreateWithoutLanguageInput[] | UsersUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutLanguageInput | UsersCreateOrConnectWithoutLanguageInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutLanguageInput | UsersUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: UsersCreateManyLanguageInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutLanguageInput | UsersUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutLanguageInput | UsersUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumContactsTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsTypes | EnumContactsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsTypes[]
    notIn?: $Enums.ContactsTypes[]
    not?: NestedEnumContactsTypesFilter<$PrismaModel> | $Enums.ContactsTypes
  }

  export type NestedEnumContactsScopesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsScopes | EnumContactsScopesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsScopes[]
    notIn?: $Enums.ContactsScopes[]
    not?: NestedEnumContactsScopesFilter<$PrismaModel> | $Enums.ContactsScopes
  }

  export type NestedEnumContactsTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsTypes | EnumContactsTypesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsTypes[]
    notIn?: $Enums.ContactsTypes[]
    not?: NestedEnumContactsTypesWithAggregatesFilter<$PrismaModel> | $Enums.ContactsTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactsTypesFilter<$PrismaModel>
    _max?: NestedEnumContactsTypesFilter<$PrismaModel>
  }

  export type NestedEnumContactsScopesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactsScopes | EnumContactsScopesFieldRefInput<$PrismaModel>
    in?: $Enums.ContactsScopes[]
    notIn?: $Enums.ContactsScopes[]
    not?: NestedEnumContactsScopesWithAggregatesFilter<$PrismaModel> | $Enums.ContactsScopes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactsScopesFilter<$PrismaModel>
    _max?: NestedEnumContactsScopesFilter<$PrismaModel>
  }

  export type LanguagesCreateWithoutUsersInput = {
    languageName: string
    languageCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type LanguagesUncheckedCreateWithoutUsersInput = {
    languageId?: number
    languageName: string
    languageCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type LanguagesCreateOrConnectWithoutUsersInput = {
    where: LanguagesWhereUniqueInput
    create: XOR<LanguagesCreateWithoutUsersInput, LanguagesUncheckedCreateWithoutUsersInput>
  }

  export type UsersAdGroupsCreateWithoutUserInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroup: AdGroupsCreateNestedOneWithoutUsersInput
  }

  export type UsersAdGroupsUncheckedCreateWithoutUserInput = {
    userAdGroupId?: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsCreateOrConnectWithoutUserInput = {
    where: UsersAdGroupsWhereUniqueInput
    create: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput>
  }

  export type UsersAdGroupsCreateManyUserInputEnvelope = {
    data: UsersAdGroupsCreateManyUserInput | UsersAdGroupsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersAuthCreateWithoutUserInput = {
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAuthUncheckedCreateWithoutUserInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAuthCreateOrConnectWithoutUserInput = {
    where: UsersAuthWhereUniqueInput
    create: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
  }

  export type UsersContactsCreateWithoutUserInput = {
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersContactsUncheckedCreateWithoutUserInput = {
    userContactId?: number
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersContactsCreateOrConnectWithoutUserInput = {
    where: UsersContactsWhereUniqueInput
    create: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput>
  }

  export type UsersContactsCreateManyUserInputEnvelope = {
    data: UsersContactsCreateManyUserInput | UsersContactsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LanguagesUpsertWithoutUsersInput = {
    update: XOR<LanguagesUpdateWithoutUsersInput, LanguagesUncheckedUpdateWithoutUsersInput>
    create: XOR<LanguagesCreateWithoutUsersInput, LanguagesUncheckedCreateWithoutUsersInput>
    where?: LanguagesWhereInput
  }

  export type LanguagesUpdateToOneWithWhereWithoutUsersInput = {
    where?: LanguagesWhereInput
    data: XOR<LanguagesUpdateWithoutUsersInput, LanguagesUncheckedUpdateWithoutUsersInput>
  }

  export type LanguagesUpdateWithoutUsersInput = {
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguagesUncheckedUpdateWithoutUsersInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    languageName?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersAdGroupsWhereUniqueInput
    update: XOR<UsersAdGroupsUpdateWithoutUserInput, UsersAdGroupsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersAdGroupsCreateWithoutUserInput, UsersAdGroupsUncheckedCreateWithoutUserInput>
  }

  export type UsersAdGroupsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersAdGroupsWhereUniqueInput
    data: XOR<UsersAdGroupsUpdateWithoutUserInput, UsersAdGroupsUncheckedUpdateWithoutUserInput>
  }

  export type UsersAdGroupsUpdateManyWithWhereWithoutUserInput = {
    where: UsersAdGroupsScalarWhereInput
    data: XOR<UsersAdGroupsUpdateManyMutationInput, UsersAdGroupsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersAdGroupsScalarWhereInput = {
    AND?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
    OR?: UsersAdGroupsScalarWhereInput[]
    NOT?: UsersAdGroupsScalarWhereInput | UsersAdGroupsScalarWhereInput[]
    userAdGroupId?: IntFilter<"UsersAdGroups"> | number
    userId?: IntFilter<"UsersAdGroups"> | number
    adGroupId?: IntFilter<"UsersAdGroups"> | number
    createdAt?: DateTimeFilter<"UsersAdGroups"> | Date | string
    createdBy?: StringFilter<"UsersAdGroups"> | string
    isDeleted?: BoolFilter<"UsersAdGroups"> | boolean
  }

  export type UsersAuthUpsertWithoutUserInput = {
    update: XOR<UsersAuthUpdateWithoutUserInput, UsersAuthUncheckedUpdateWithoutUserInput>
    create: XOR<UsersAuthCreateWithoutUserInput, UsersAuthUncheckedCreateWithoutUserInput>
    where?: UsersAuthWhereInput
  }

  export type UsersAuthUpdateToOneWithWhereWithoutUserInput = {
    where?: UsersAuthWhereInput
    data: XOR<UsersAuthUpdateWithoutUserInput, UsersAuthUncheckedUpdateWithoutUserInput>
  }

  export type UsersAuthUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAuthUncheckedUpdateWithoutUserInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersContactsWhereUniqueInput
    update: XOR<UsersContactsUpdateWithoutUserInput, UsersContactsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersContactsCreateWithoutUserInput, UsersContactsUncheckedCreateWithoutUserInput>
  }

  export type UsersContactsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersContactsWhereUniqueInput
    data: XOR<UsersContactsUpdateWithoutUserInput, UsersContactsUncheckedUpdateWithoutUserInput>
  }

  export type UsersContactsUpdateManyWithWhereWithoutUserInput = {
    where: UsersContactsScalarWhereInput
    data: XOR<UsersContactsUpdateManyMutationInput, UsersContactsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersContactsScalarWhereInput = {
    AND?: UsersContactsScalarWhereInput | UsersContactsScalarWhereInput[]
    OR?: UsersContactsScalarWhereInput[]
    NOT?: UsersContactsScalarWhereInput | UsersContactsScalarWhereInput[]
    userContactId?: IntFilter<"UsersContacts"> | number
    userContactType?: EnumContactsTypesFilter<"UsersContacts"> | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFilter<"UsersContacts"> | $Enums.ContactsScopes
    userContactValue?: StringFilter<"UsersContacts"> | string
    createdAt?: DateTimeFilter<"UsersContacts"> | Date | string
    createdBy?: StringFilter<"UsersContacts"> | string
    isDeleted?: BoolFilter<"UsersContacts"> | boolean
    userId?: IntFilter<"UsersContacts"> | number
  }

  export type UsersCreateWithoutContactsInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    adGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutContactsInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    userLanguageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutContactsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
  }

  export type UsersUpsertWithoutContactsInput = {
    update: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutContactsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type UsersUpdateWithoutContactsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    adGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutContactsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userLanguageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateWithoutAuthInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    adGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    contacts?: UsersContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAuthInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    userLanguageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    contacts?: UsersContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAuthInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAuthInput, UsersUncheckedCreateWithoutAuthInput>
  }

  export type UsersUpsertWithoutAuthInput = {
    update: XOR<UsersUpdateWithoutAuthInput, UsersUncheckedUpdateWithoutAuthInput>
    create: XOR<UsersCreateWithoutAuthInput, UsersUncheckedCreateWithoutAuthInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAuthInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAuthInput, UsersUncheckedUpdateWithoutAuthInput>
  }

  export type UsersUpdateWithoutAuthInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    adGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    contacts?: UsersContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAuthInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userLanguageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    contacts?: UsersContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersAdGroupsCreateWithoutAdGroupInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UsersCreateNestedOneWithoutAdGroupsInput
  }

  export type UsersAdGroupsUncheckedCreateWithoutAdGroupInput = {
    userAdGroupId?: number
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsCreateOrConnectWithoutAdGroupInput = {
    where: UsersAdGroupsWhereUniqueInput
    create: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput>
  }

  export type UsersAdGroupsCreateManyAdGroupInputEnvelope = {
    data: UsersAdGroupsCreateManyAdGroupInput | UsersAdGroupsCreateManyAdGroupInput[]
    skipDuplicates?: boolean
  }

  export type UsersAdGroupsUpsertWithWhereUniqueWithoutAdGroupInput = {
    where: UsersAdGroupsWhereUniqueInput
    update: XOR<UsersAdGroupsUpdateWithoutAdGroupInput, UsersAdGroupsUncheckedUpdateWithoutAdGroupInput>
    create: XOR<UsersAdGroupsCreateWithoutAdGroupInput, UsersAdGroupsUncheckedCreateWithoutAdGroupInput>
  }

  export type UsersAdGroupsUpdateWithWhereUniqueWithoutAdGroupInput = {
    where: UsersAdGroupsWhereUniqueInput
    data: XOR<UsersAdGroupsUpdateWithoutAdGroupInput, UsersAdGroupsUncheckedUpdateWithoutAdGroupInput>
  }

  export type UsersAdGroupsUpdateManyWithWhereWithoutAdGroupInput = {
    where: UsersAdGroupsScalarWhereInput
    data: XOR<UsersAdGroupsUpdateManyMutationInput, UsersAdGroupsUncheckedUpdateManyWithoutAdGroupInput>
  }

  export type AdGroupsCreateWithoutUsersInput = {
    adGroupName: string
    comment: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupsUncheckedCreateWithoutUsersInput = {
    adGroupId?: number
    adGroupName: string
    comment: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupsCreateOrConnectWithoutUsersInput = {
    where: AdGroupsWhereUniqueInput
    create: XOR<AdGroupsCreateWithoutUsersInput, AdGroupsUncheckedCreateWithoutUsersInput>
  }

  export type UsersCreateWithoutAdGroupsInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
    contacts?: UsersContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAdGroupsInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    userLanguageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
    contacts?: UsersContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAdGroupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAdGroupsInput, UsersUncheckedCreateWithoutAdGroupsInput>
  }

  export type AdGroupsUpsertWithoutUsersInput = {
    update: XOR<AdGroupsUpdateWithoutUsersInput, AdGroupsUncheckedUpdateWithoutUsersInput>
    create: XOR<AdGroupsCreateWithoutUsersInput, AdGroupsUncheckedCreateWithoutUsersInput>
    where?: AdGroupsWhereInput
  }

  export type AdGroupsUpdateToOneWithWhereWithoutUsersInput = {
    where?: AdGroupsWhereInput
    data: XOR<AdGroupsUpdateWithoutUsersInput, AdGroupsUncheckedUpdateWithoutUsersInput>
  }

  export type AdGroupsUpdateWithoutUsersInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type AdGroupsUncheckedUpdateWithoutUsersInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutAdGroupsInput = {
    update: XOR<UsersUpdateWithoutAdGroupsInput, UsersUncheckedUpdateWithoutAdGroupsInput>
    create: XOR<UsersCreateWithoutAdGroupsInput, UsersUncheckedCreateWithoutAdGroupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAdGroupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAdGroupsInput, UsersUncheckedUpdateWithoutAdGroupsInput>
  }

  export type UsersUpdateWithoutAdGroupsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAdGroupsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    userLanguageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutLanguageInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
    contacts?: UsersContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLanguageInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
    contacts?: UsersContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutLanguageInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput>
  }

  export type UsersCreateManyLanguageInputEnvelope = {
    data: UsersCreateManyLanguageInput | UsersCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutLanguageInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutLanguageInput, UsersUncheckedUpdateWithoutLanguageInput>
    create: XOR<UsersCreateWithoutLanguageInput, UsersUncheckedCreateWithoutLanguageInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutLanguageInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutLanguageInput, UsersUncheckedUpdateWithoutLanguageInput>
  }

  export type UsersUpdateManyWithWhereWithoutLanguageInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutLanguageInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    userId?: IntFilter<"Users"> | number
    userName?: StringFilter<"Users"> | string
    userSurname?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    isActive?: BoolFilter<"Users"> | boolean
    userLanguageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
  }

  export type UsersAdGroupsCreateManyUserInput = {
    userAdGroupId?: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersContactsCreateManyUserInput = {
    userContactId?: number
    userContactType: $Enums.ContactsTypes
    userContactScope: $Enums.ContactsScopes
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroup?: AdGroupsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersAdGroupsUncheckedUpdateWithoutUserInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsUncheckedUpdateManyWithoutUserInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsUpdateWithoutUserInput = {
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsUncheckedUpdateWithoutUserInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersContactsUncheckedUpdateManyWithoutUserInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactsTypesFieldUpdateOperationsInput | $Enums.ContactsTypes
    userContactScope?: EnumContactsScopesFieldUpdateOperationsInput | $Enums.ContactsScopes
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsCreateManyAdGroupInput = {
    userAdGroupId?: number
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsUpdateWithoutAdGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type UsersAdGroupsUncheckedUpdateWithoutAdGroupInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsUncheckedUpdateManyWithoutAdGroupInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersCreateManyLanguageInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersUpdateWithoutLanguageInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLanguageInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
    contacts?: UsersContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutLanguageInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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