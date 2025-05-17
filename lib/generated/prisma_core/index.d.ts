
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserContact
 * 
 */
export type UserContact = $Result.DefaultSelection<Prisma.$UserContactPayload>
/**
 * Model UserAuth
 * 
 */
export type UserAuth = $Result.DefaultSelection<Prisma.$UserAuthPayload>
/**
 * Model AdGroup
 * 
 */
export type AdGroup = $Result.DefaultSelection<Prisma.$AdGroupPayload>
/**
 * Model UserAdGroup
 * 
 */
export type UserAdGroup = $Result.DefaultSelection<Prisma.$UserAdGroupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContactType: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  SOCIAL: 'SOCIAL'
};

export type ContactType = (typeof ContactType)[keyof typeof ContactType]


export const ContactScope: {
  PERSONAL: 'PERSONAL',
  PROFESSIONAL: 'PROFESSIONAL',
  OTHER: 'OTHER'
};

export type ContactScope = (typeof ContactScope)[keyof typeof ContactScope]

}

export type ContactType = $Enums.ContactType

export const ContactType: typeof $Enums.ContactType

export type ContactScope = $Enums.ContactScope

export const ContactScope: typeof $Enums.ContactScope

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userContact`: Exposes CRUD operations for the **UserContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserContacts
    * const userContacts = await prisma.userContact.findMany()
    * ```
    */
  get userContact(): Prisma.UserContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAuth`: Exposes CRUD operations for the **UserAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAuths
    * const userAuths = await prisma.userAuth.findMany()
    * ```
    */
  get userAuth(): Prisma.UserAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adGroup`: Exposes CRUD operations for the **AdGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdGroups
    * const adGroups = await prisma.adGroup.findMany()
    * ```
    */
  get adGroup(): Prisma.AdGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAdGroup`: Exposes CRUD operations for the **UserAdGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAdGroups
    * const userAdGroups = await prisma.userAdGroup.findMany()
    * ```
    */
  get userAdGroup(): Prisma.UserAdGroupDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    UserContact: 'UserContact',
    UserAuth: 'UserAuth',
    AdGroup: 'AdGroup',
    UserAdGroup: 'UserAdGroup'
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
      modelProps: "user" | "userContact" | "userAuth" | "adGroup" | "userAdGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserContact: {
        payload: Prisma.$UserContactPayload<ExtArgs>
        fields: Prisma.UserContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findFirst: {
            args: Prisma.UserContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          findMany: {
            args: Prisma.UserContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>[]
          }
          create: {
            args: Prisma.UserContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          createMany: {
            args: Prisma.UserContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          update: {
            args: Prisma.UserContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          deleteMany: {
            args: Prisma.UserContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserContactPayload>
          }
          aggregate: {
            args: Prisma.UserContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserContact>
          }
          groupBy: {
            args: Prisma.UserContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserContactCountArgs<ExtArgs>
            result: $Utils.Optional<UserContactCountAggregateOutputType> | number
          }
        }
      }
      UserAuth: {
        payload: Prisma.$UserAuthPayload<ExtArgs>
        fields: Prisma.UserAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findFirst: {
            args: Prisma.UserAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          findMany: {
            args: Prisma.UserAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>[]
          }
          create: {
            args: Prisma.UserAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          createMany: {
            args: Prisma.UserAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          update: {
            args: Prisma.UserAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          deleteMany: {
            args: Prisma.UserAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAuthPayload>
          }
          aggregate: {
            args: Prisma.UserAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAuth>
          }
          groupBy: {
            args: Prisma.UserAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAuthCountArgs<ExtArgs>
            result: $Utils.Optional<UserAuthCountAggregateOutputType> | number
          }
        }
      }
      AdGroup: {
        payload: Prisma.$AdGroupPayload<ExtArgs>
        fields: Prisma.AdGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          findFirst: {
            args: Prisma.AdGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          findMany: {
            args: Prisma.AdGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>[]
          }
          create: {
            args: Prisma.AdGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          createMany: {
            args: Prisma.AdGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          update: {
            args: Prisma.AdGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          deleteMany: {
            args: Prisma.AdGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdGroupPayload>
          }
          aggregate: {
            args: Prisma.AdGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdGroup>
          }
          groupBy: {
            args: Prisma.AdGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdGroupCountArgs<ExtArgs>
            result: $Utils.Optional<AdGroupCountAggregateOutputType> | number
          }
        }
      }
      UserAdGroup: {
        payload: Prisma.$UserAdGroupPayload<ExtArgs>
        fields: Prisma.UserAdGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAdGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAdGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          findFirst: {
            args: Prisma.UserAdGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAdGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          findMany: {
            args: Prisma.UserAdGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>[]
          }
          create: {
            args: Prisma.UserAdGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          createMany: {
            args: Prisma.UserAdGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserAdGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          update: {
            args: Prisma.UserAdGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserAdGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAdGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAdGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAdGroupPayload>
          }
          aggregate: {
            args: Prisma.UserAdGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAdGroup>
          }
          groupBy: {
            args: Prisma.UserAdGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAdGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAdGroupCountArgs<ExtArgs>
            result: $Utils.Optional<UserAdGroupCountAggregateOutputType> | number
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
    user?: UserOmit
    userContact?: UserContactOmit
    userAuth?: UserAuthOmit
    adGroup?: AdGroupOmit
    userAdGroup?: UserAdGroupOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    adGroups: number
    contacts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroups?: boolean | UserCountOutputTypeCountAdGroupsArgs
    contacts?: boolean | UserCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAdGroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
  }


  /**
   * Count Type AdGroupCountOutputType
   */

  export type AdGroupCountOutputType = {
    users: number
  }

  export type AdGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AdGroupCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AdGroupCountOutputType without action
   */
  export type AdGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroupCountOutputType
     */
    select?: AdGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdGroupCountOutputType without action
   */
  export type AdGroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAdGroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    userName: string | null
    userSurname: string | null
    userCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    userName: string | null
    userSurname: string | null
    userCode: string | null
    isActive: boolean | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    userName: number
    userSurname: number
    userCode: number
    isActive: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    userName?: true
    userSurname?: true
    userCode?: true
    isActive?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    userName: string
    userSurname: string
    userCode: string
    isActive: boolean
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    userName?: boolean
    userSurname?: boolean
    userCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    adGroups?: boolean | User$adGroupsArgs<ExtArgs>
    auth?: boolean | User$authArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    userId?: boolean
    userName?: boolean
    userSurname?: boolean
    userCode?: boolean
    isActive?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userName" | "userSurname" | "userCode" | "isActive" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroups?: boolean | User$adGroupsArgs<ExtArgs>
    auth?: boolean | User$authArgs<ExtArgs>
    contacts?: boolean | User$contactsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      adGroups: Prisma.$UserAdGroupPayload<ExtArgs>[]
      auth: Prisma.$UserAuthPayload<ExtArgs> | null
      contacts: Prisma.$UserContactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userName: string
      userSurname: string
      userCode: string
      isActive: boolean
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adGroups<T extends User$adGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$adGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth<T extends User$authArgs<ExtArgs> = {}>(args?: Subset<T, User$authArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contacts<T extends User$contactsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly userSurname: FieldRef<"User", 'String'>
    readonly userCode: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.adGroups
   */
  export type User$adGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    where?: UserAdGroupWhereInput
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    cursor?: UserAdGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAdGroupScalarFieldEnum | UserAdGroupScalarFieldEnum[]
  }

  /**
   * User.auth
   */
  export type User$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    where?: UserAuthWhereInput
  }

  /**
   * User.contacts
   */
  export type User$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    cursor?: UserContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserContact
   */

  export type AggregateUserContact = {
    _count: UserContactCountAggregateOutputType | null
    _avg: UserContactAvgAggregateOutputType | null
    _sum: UserContactSumAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  export type UserContactAvgAggregateOutputType = {
    userContactId: number | null
    userId: number | null
  }

  export type UserContactSumAggregateOutputType = {
    userContactId: number | null
    userId: number | null
  }

  export type UserContactMinAggregateOutputType = {
    userContactId: number | null
    userContactType: $Enums.ContactType | null
    userContactScope: $Enums.ContactScope | null
    userContactValue: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UserContactMaxAggregateOutputType = {
    userContactId: number | null
    userContactType: $Enums.ContactType | null
    userContactScope: $Enums.ContactScope | null
    userContactValue: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UserContactCountAggregateOutputType = {
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


  export type UserContactAvgAggregateInputType = {
    userContactId?: true
    userId?: true
  }

  export type UserContactSumAggregateInputType = {
    userContactId?: true
    userId?: true
  }

  export type UserContactMinAggregateInputType = {
    userContactId?: true
    userContactType?: true
    userContactScope?: true
    userContactValue?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UserContactMaxAggregateInputType = {
    userContactId?: true
    userContactType?: true
    userContactScope?: true
    userContactValue?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UserContactCountAggregateInputType = {
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

  export type UserContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContact to aggregate.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserContacts
    **/
    _count?: true | UserContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserContactMaxAggregateInputType
  }

  export type GetUserContactAggregateType<T extends UserContactAggregateArgs> = {
        [P in keyof T & keyof AggregateUserContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserContact[P]>
      : GetScalarType<T[P], AggregateUserContact[P]>
  }




  export type UserContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserContactWhereInput
    orderBy?: UserContactOrderByWithAggregationInput | UserContactOrderByWithAggregationInput[]
    by: UserContactScalarFieldEnum[] | UserContactScalarFieldEnum
    having?: UserContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserContactCountAggregateInputType | true
    _avg?: UserContactAvgAggregateInputType
    _sum?: UserContactSumAggregateInputType
    _min?: UserContactMinAggregateInputType
    _max?: UserContactMaxAggregateInputType
  }

  export type UserContactGroupByOutputType = {
    userContactId: number
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    userId: number
    _count: UserContactCountAggregateOutputType | null
    _avg: UserContactAvgAggregateOutputType | null
    _sum: UserContactSumAggregateOutputType | null
    _min: UserContactMinAggregateOutputType | null
    _max: UserContactMaxAggregateOutputType | null
  }

  type GetUserContactGroupByPayload<T extends UserContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserContactGroupByOutputType[P]>
            : GetScalarType<T[P], UserContactGroupByOutputType[P]>
        }
      >
    >


  export type UserContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userContactId?: boolean
    userContactType?: boolean
    userContactScope?: boolean
    userContactValue?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userContact"]>



  export type UserContactSelectScalar = {
    userContactId?: boolean
    userContactType?: boolean
    userContactScope?: boolean
    userContactValue?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
  }

  export type UserContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userContactId" | "userContactType" | "userContactScope" | "userContactValue" | "createdAt" | "createdBy" | "isDeleted" | "userId", ExtArgs["result"]["userContact"]>
  export type UserContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserContact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userContactId: number
      userContactType: $Enums.ContactType
      userContactScope: $Enums.ContactScope
      userContactValue: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
      userId: number
    }, ExtArgs["result"]["userContact"]>
    composites: {}
  }

  type UserContactGetPayload<S extends boolean | null | undefined | UserContactDefaultArgs> = $Result.GetResult<Prisma.$UserContactPayload, S>

  type UserContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserContactCountAggregateInputType | true
    }

  export interface UserContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserContact'], meta: { name: 'UserContact' } }
    /**
     * Find zero or one UserContact that matches the filter.
     * @param {UserContactFindUniqueArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserContactFindUniqueArgs>(args: SelectSubset<T, UserContactFindUniqueArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserContactFindUniqueOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserContactFindUniqueOrThrowArgs>(args: SelectSubset<T, UserContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserContactFindFirstArgs>(args?: SelectSubset<T, UserContactFindFirstArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindFirstOrThrowArgs} args - Arguments to find a UserContact
     * @example
     * // Get one UserContact
     * const userContact = await prisma.userContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserContactFindFirstOrThrowArgs>(args?: SelectSubset<T, UserContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserContacts
     * const userContacts = await prisma.userContact.findMany()
     * 
     * // Get first 10 UserContacts
     * const userContacts = await prisma.userContact.findMany({ take: 10 })
     * 
     * // Only select the `userContactId`
     * const userContactWithUserContactIdOnly = await prisma.userContact.findMany({ select: { userContactId: true } })
     * 
     */
    findMany<T extends UserContactFindManyArgs>(args?: SelectSubset<T, UserContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserContact.
     * @param {UserContactCreateArgs} args - Arguments to create a UserContact.
     * @example
     * // Create one UserContact
     * const UserContact = await prisma.userContact.create({
     *   data: {
     *     // ... data to create a UserContact
     *   }
     * })
     * 
     */
    create<T extends UserContactCreateArgs>(args: SelectSubset<T, UserContactCreateArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserContacts.
     * @param {UserContactCreateManyArgs} args - Arguments to create many UserContacts.
     * @example
     * // Create many UserContacts
     * const userContact = await prisma.userContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserContactCreateManyArgs>(args?: SelectSubset<T, UserContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserContact.
     * @param {UserContactDeleteArgs} args - Arguments to delete one UserContact.
     * @example
     * // Delete one UserContact
     * const UserContact = await prisma.userContact.delete({
     *   where: {
     *     // ... filter to delete one UserContact
     *   }
     * })
     * 
     */
    delete<T extends UserContactDeleteArgs>(args: SelectSubset<T, UserContactDeleteArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserContact.
     * @param {UserContactUpdateArgs} args - Arguments to update one UserContact.
     * @example
     * // Update one UserContact
     * const userContact = await prisma.userContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserContactUpdateArgs>(args: SelectSubset<T, UserContactUpdateArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserContacts.
     * @param {UserContactDeleteManyArgs} args - Arguments to filter UserContacts to delete.
     * @example
     * // Delete a few UserContacts
     * const { count } = await prisma.userContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserContactDeleteManyArgs>(args?: SelectSubset<T, UserContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserContacts
     * const userContact = await prisma.userContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserContactUpdateManyArgs>(args: SelectSubset<T, UserContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserContact.
     * @param {UserContactUpsertArgs} args - Arguments to update or create a UserContact.
     * @example
     * // Update or create a UserContact
     * const userContact = await prisma.userContact.upsert({
     *   create: {
     *     // ... data to create a UserContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserContact we want to update
     *   }
     * })
     */
    upsert<T extends UserContactUpsertArgs>(args: SelectSubset<T, UserContactUpsertArgs<ExtArgs>>): Prisma__UserContactClient<$Result.GetResult<Prisma.$UserContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactCountArgs} args - Arguments to filter UserContacts to count.
     * @example
     * // Count the number of UserContacts
     * const count = await prisma.userContact.count({
     *   where: {
     *     // ... the filter for the UserContacts we want to count
     *   }
     * })
    **/
    count<T extends UserContactCountArgs>(
      args?: Subset<T, UserContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserContactAggregateArgs>(args: Subset<T, UserContactAggregateArgs>): Prisma.PrismaPromise<GetUserContactAggregateType<T>>

    /**
     * Group by UserContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserContactGroupByArgs} args - Group by arguments.
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
      T extends UserContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserContactGroupByArgs['orderBy'] }
        : { orderBy?: UserContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserContact model
   */
  readonly fields: UserContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserContact model
   */
  interface UserContactFieldRefs {
    readonly userContactId: FieldRef<"UserContact", 'Int'>
    readonly userContactType: FieldRef<"UserContact", 'ContactType'>
    readonly userContactScope: FieldRef<"UserContact", 'ContactScope'>
    readonly userContactValue: FieldRef<"UserContact", 'String'>
    readonly createdAt: FieldRef<"UserContact", 'DateTime'>
    readonly createdBy: FieldRef<"UserContact", 'String'>
    readonly isDeleted: FieldRef<"UserContact", 'Boolean'>
    readonly userId: FieldRef<"UserContact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserContact findUnique
   */
  export type UserContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact findUniqueOrThrow
   */
  export type UserContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact findFirst
   */
  export type UserContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact findFirstOrThrow
   */
  export type UserContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContact to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserContacts.
     */
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact findMany
   */
  export type UserContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter, which UserContacts to fetch.
     */
    where?: UserContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserContacts to fetch.
     */
    orderBy?: UserContactOrderByWithRelationInput | UserContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserContacts.
     */
    cursor?: UserContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserContacts.
     */
    skip?: number
    distinct?: UserContactScalarFieldEnum | UserContactScalarFieldEnum[]
  }

  /**
   * UserContact create
   */
  export type UserContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to create a UserContact.
     */
    data: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
  }

  /**
   * UserContact createMany
   */
  export type UserContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserContacts.
     */
    data: UserContactCreateManyInput | UserContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserContact update
   */
  export type UserContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The data needed to update a UserContact.
     */
    data: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
    /**
     * Choose, which UserContact to update.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact updateMany
   */
  export type UserContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserContacts.
     */
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyInput>
    /**
     * Filter which UserContacts to update
     */
    where?: UserContactWhereInput
    /**
     * Limit how many UserContacts to update.
     */
    limit?: number
  }

  /**
   * UserContact upsert
   */
  export type UserContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * The filter to search for the UserContact to update in case it exists.
     */
    where: UserContactWhereUniqueInput
    /**
     * In case the UserContact found by the `where` argument doesn't exist, create a new UserContact with this data.
     */
    create: XOR<UserContactCreateInput, UserContactUncheckedCreateInput>
    /**
     * In case the UserContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserContactUpdateInput, UserContactUncheckedUpdateInput>
  }

  /**
   * UserContact delete
   */
  export type UserContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
    /**
     * Filter which UserContact to delete.
     */
    where: UserContactWhereUniqueInput
  }

  /**
   * UserContact deleteMany
   */
  export type UserContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserContacts to delete
     */
    where?: UserContactWhereInput
    /**
     * Limit how many UserContacts to delete.
     */
    limit?: number
  }

  /**
   * UserContact without action
   */
  export type UserContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserContact
     */
    select?: UserContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserContact
     */
    omit?: UserContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserContactInclude<ExtArgs> | null
  }


  /**
   * Model UserAuth
   */

  export type AggregateUserAuth = {
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  export type UserAuthAvgAggregateOutputType = {
    authId: number | null
    userId: number | null
  }

  export type UserAuthSumAggregateOutputType = {
    authId: number | null
    userId: number | null
  }

  export type UserAuthMinAggregateOutputType = {
    authId: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UserAuthMaxAggregateOutputType = {
    authId: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
    userId: number | null
  }

  export type UserAuthCountAggregateOutputType = {
    authId: number
    email: number
    password: number
    createdAt: number
    createdBy: number
    isDeleted: number
    userId: number
    _all: number
  }


  export type UserAuthAvgAggregateInputType = {
    authId?: true
    userId?: true
  }

  export type UserAuthSumAggregateInputType = {
    authId?: true
    userId?: true
  }

  export type UserAuthMinAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UserAuthMaxAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
  }

  export type UserAuthCountAggregateInputType = {
    authId?: true
    email?: true
    password?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    userId?: true
    _all?: true
  }

  export type UserAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuth to aggregate.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAuths
    **/
    _count?: true | UserAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAuthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAuthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAuthMaxAggregateInputType
  }

  export type GetUserAuthAggregateType<T extends UserAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAuth[P]>
      : GetScalarType<T[P], AggregateUserAuth[P]>
  }




  export type UserAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAuthWhereInput
    orderBy?: UserAuthOrderByWithAggregationInput | UserAuthOrderByWithAggregationInput[]
    by: UserAuthScalarFieldEnum[] | UserAuthScalarFieldEnum
    having?: UserAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAuthCountAggregateInputType | true
    _avg?: UserAuthAvgAggregateInputType
    _sum?: UserAuthSumAggregateInputType
    _min?: UserAuthMinAggregateInputType
    _max?: UserAuthMaxAggregateInputType
  }

  export type UserAuthGroupByOutputType = {
    authId: number
    email: string
    password: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    userId: number
    _count: UserAuthCountAggregateOutputType | null
    _avg: UserAuthAvgAggregateOutputType | null
    _sum: UserAuthSumAggregateOutputType | null
    _min: UserAuthMinAggregateOutputType | null
    _max: UserAuthMaxAggregateOutputType | null
  }

  type GetUserAuthGroupByPayload<T extends UserAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
            : GetScalarType<T[P], UserAuthGroupByOutputType[P]>
        }
      >
    >


  export type UserAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authId?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAuth"]>



  export type UserAuthSelectScalar = {
    authId?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userId?: boolean
  }

  export type UserAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"authId" | "email" | "password" | "createdAt" | "createdBy" | "isDeleted" | "userId", ExtArgs["result"]["userAuth"]>
  export type UserAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAuth"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      authId: number
      email: string
      password: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
      userId: number
    }, ExtArgs["result"]["userAuth"]>
    composites: {}
  }

  type UserAuthGetPayload<S extends boolean | null | undefined | UserAuthDefaultArgs> = $Result.GetResult<Prisma.$UserAuthPayload, S>

  type UserAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAuthCountAggregateInputType | true
    }

  export interface UserAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAuth'], meta: { name: 'UserAuth' } }
    /**
     * Find zero or one UserAuth that matches the filter.
     * @param {UserAuthFindUniqueArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAuthFindUniqueArgs>(args: SelectSubset<T, UserAuthFindUniqueArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAuthFindUniqueOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAuthFindFirstArgs>(args?: SelectSubset<T, UserAuthFindFirstArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindFirstOrThrowArgs} args - Arguments to find a UserAuth
     * @example
     * // Get one UserAuth
     * const userAuth = await prisma.userAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAuths
     * const userAuths = await prisma.userAuth.findMany()
     * 
     * // Get first 10 UserAuths
     * const userAuths = await prisma.userAuth.findMany({ take: 10 })
     * 
     * // Only select the `authId`
     * const userAuthWithAuthIdOnly = await prisma.userAuth.findMany({ select: { authId: true } })
     * 
     */
    findMany<T extends UserAuthFindManyArgs>(args?: SelectSubset<T, UserAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAuth.
     * @param {UserAuthCreateArgs} args - Arguments to create a UserAuth.
     * @example
     * // Create one UserAuth
     * const UserAuth = await prisma.userAuth.create({
     *   data: {
     *     // ... data to create a UserAuth
     *   }
     * })
     * 
     */
    create<T extends UserAuthCreateArgs>(args: SelectSubset<T, UserAuthCreateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAuths.
     * @param {UserAuthCreateManyArgs} args - Arguments to create many UserAuths.
     * @example
     * // Create many UserAuths
     * const userAuth = await prisma.userAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAuthCreateManyArgs>(args?: SelectSubset<T, UserAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAuth.
     * @param {UserAuthDeleteArgs} args - Arguments to delete one UserAuth.
     * @example
     * // Delete one UserAuth
     * const UserAuth = await prisma.userAuth.delete({
     *   where: {
     *     // ... filter to delete one UserAuth
     *   }
     * })
     * 
     */
    delete<T extends UserAuthDeleteArgs>(args: SelectSubset<T, UserAuthDeleteArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAuth.
     * @param {UserAuthUpdateArgs} args - Arguments to update one UserAuth.
     * @example
     * // Update one UserAuth
     * const userAuth = await prisma.userAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAuthUpdateArgs>(args: SelectSubset<T, UserAuthUpdateArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAuths.
     * @param {UserAuthDeleteManyArgs} args - Arguments to filter UserAuths to delete.
     * @example
     * // Delete a few UserAuths
     * const { count } = await prisma.userAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAuthDeleteManyArgs>(args?: SelectSubset<T, UserAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAuths
     * const userAuth = await prisma.userAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAuthUpdateManyArgs>(args: SelectSubset<T, UserAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAuth.
     * @param {UserAuthUpsertArgs} args - Arguments to update or create a UserAuth.
     * @example
     * // Update or create a UserAuth
     * const userAuth = await prisma.userAuth.upsert({
     *   create: {
     *     // ... data to create a UserAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAuth we want to update
     *   }
     * })
     */
    upsert<T extends UserAuthUpsertArgs>(args: SelectSubset<T, UserAuthUpsertArgs<ExtArgs>>): Prisma__UserAuthClient<$Result.GetResult<Prisma.$UserAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthCountArgs} args - Arguments to filter UserAuths to count.
     * @example
     * // Count the number of UserAuths
     * const count = await prisma.userAuth.count({
     *   where: {
     *     // ... the filter for the UserAuths we want to count
     *   }
     * })
    **/
    count<T extends UserAuthCountArgs>(
      args?: Subset<T, UserAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAuthAggregateArgs>(args: Subset<T, UserAuthAggregateArgs>): Prisma.PrismaPromise<GetUserAuthAggregateType<T>>

    /**
     * Group by UserAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAuthGroupByArgs} args - Group by arguments.
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
      T extends UserAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAuthGroupByArgs['orderBy'] }
        : { orderBy?: UserAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAuth model
   */
  readonly fields: UserAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAuth model
   */
  interface UserAuthFieldRefs {
    readonly authId: FieldRef<"UserAuth", 'Int'>
    readonly email: FieldRef<"UserAuth", 'String'>
    readonly password: FieldRef<"UserAuth", 'String'>
    readonly createdAt: FieldRef<"UserAuth", 'DateTime'>
    readonly createdBy: FieldRef<"UserAuth", 'String'>
    readonly isDeleted: FieldRef<"UserAuth", 'Boolean'>
    readonly userId: FieldRef<"UserAuth", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAuth findUnique
   */
  export type UserAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findUniqueOrThrow
   */
  export type UserAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth findFirst
   */
  export type UserAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findFirstOrThrow
   */
  export type UserAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuth to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAuths.
     */
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth findMany
   */
  export type UserAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter, which UserAuths to fetch.
     */
    where?: UserAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAuths to fetch.
     */
    orderBy?: UserAuthOrderByWithRelationInput | UserAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAuths.
     */
    cursor?: UserAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAuths.
     */
    skip?: number
    distinct?: UserAuthScalarFieldEnum | UserAuthScalarFieldEnum[]
  }

  /**
   * UserAuth create
   */
  export type UserAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAuth.
     */
    data: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
  }

  /**
   * UserAuth createMany
   */
  export type UserAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAuths.
     */
    data: UserAuthCreateManyInput | UserAuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAuth update
   */
  export type UserAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAuth.
     */
    data: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
    /**
     * Choose, which UserAuth to update.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth updateMany
   */
  export type UserAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAuths.
     */
    data: XOR<UserAuthUpdateManyMutationInput, UserAuthUncheckedUpdateManyInput>
    /**
     * Filter which UserAuths to update
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to update.
     */
    limit?: number
  }

  /**
   * UserAuth upsert
   */
  export type UserAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAuth to update in case it exists.
     */
    where: UserAuthWhereUniqueInput
    /**
     * In case the UserAuth found by the `where` argument doesn't exist, create a new UserAuth with this data.
     */
    create: XOR<UserAuthCreateInput, UserAuthUncheckedCreateInput>
    /**
     * In case the UserAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAuthUpdateInput, UserAuthUncheckedUpdateInput>
  }

  /**
   * UserAuth delete
   */
  export type UserAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
    /**
     * Filter which UserAuth to delete.
     */
    where: UserAuthWhereUniqueInput
  }

  /**
   * UserAuth deleteMany
   */
  export type UserAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAuths to delete
     */
    where?: UserAuthWhereInput
    /**
     * Limit how many UserAuths to delete.
     */
    limit?: number
  }

  /**
   * UserAuth without action
   */
  export type UserAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAuth
     */
    select?: UserAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAuth
     */
    omit?: UserAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAuthInclude<ExtArgs> | null
  }


  /**
   * Model AdGroup
   */

  export type AggregateAdGroup = {
    _count: AdGroupCountAggregateOutputType | null
    _avg: AdGroupAvgAggregateOutputType | null
    _sum: AdGroupSumAggregateOutputType | null
    _min: AdGroupMinAggregateOutputType | null
    _max: AdGroupMaxAggregateOutputType | null
  }

  export type AdGroupAvgAggregateOutputType = {
    adGroupId: number | null
  }

  export type AdGroupSumAggregateOutputType = {
    adGroupId: number | null
  }

  export type AdGroupMinAggregateOutputType = {
    adGroupId: number | null
    adGroupName: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type AdGroupMaxAggregateOutputType = {
    adGroupId: number | null
    adGroupName: string | null
    createdAt: Date | null
    createdBy: string | null
  }

  export type AdGroupCountAggregateOutputType = {
    adGroupId: number
    adGroupName: number
    createdAt: number
    createdBy: number
    _all: number
  }


  export type AdGroupAvgAggregateInputType = {
    adGroupId?: true
  }

  export type AdGroupSumAggregateInputType = {
    adGroupId?: true
  }

  export type AdGroupMinAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    createdAt?: true
    createdBy?: true
  }

  export type AdGroupMaxAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    createdAt?: true
    createdBy?: true
  }

  export type AdGroupCountAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    createdAt?: true
    createdBy?: true
    _all?: true
  }

  export type AdGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroup to aggregate.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdGroupWhereUniqueInput
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
    _count?: true | AdGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdGroupMaxAggregateInputType
  }

  export type GetAdGroupAggregateType<T extends AdGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateAdGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdGroup[P]>
      : GetScalarType<T[P], AggregateAdGroup[P]>
  }




  export type AdGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdGroupWhereInput
    orderBy?: AdGroupOrderByWithAggregationInput | AdGroupOrderByWithAggregationInput[]
    by: AdGroupScalarFieldEnum[] | AdGroupScalarFieldEnum
    having?: AdGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdGroupCountAggregateInputType | true
    _avg?: AdGroupAvgAggregateInputType
    _sum?: AdGroupSumAggregateInputType
    _min?: AdGroupMinAggregateInputType
    _max?: AdGroupMaxAggregateInputType
  }

  export type AdGroupGroupByOutputType = {
    adGroupId: number
    adGroupName: string
    createdAt: Date
    createdBy: string
    _count: AdGroupCountAggregateOutputType | null
    _avg: AdGroupAvgAggregateOutputType | null
    _sum: AdGroupSumAggregateOutputType | null
    _min: AdGroupMinAggregateOutputType | null
    _max: AdGroupMaxAggregateOutputType | null
  }

  type GetAdGroupGroupByPayload<T extends AdGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdGroupGroupByOutputType[P]>
            : GetScalarType<T[P], AdGroupGroupByOutputType[P]>
        }
      >
    >


  export type AdGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adGroupId?: boolean
    adGroupName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    users?: boolean | AdGroup$usersArgs<ExtArgs>
    _count?: boolean | AdGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroup"]>



  export type AdGroupSelectScalar = {
    adGroupId?: boolean
    adGroupName?: boolean
    createdAt?: boolean
    createdBy?: boolean
  }

  export type AdGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adGroupId" | "adGroupName" | "createdAt" | "createdBy", ExtArgs["result"]["adGroup"]>
  export type AdGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AdGroup$usersArgs<ExtArgs>
    _count?: boolean | AdGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdGroup"
    objects: {
      users: Prisma.$UserAdGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      adGroupId: number
      adGroupName: string
      createdAt: Date
      createdBy: string
    }, ExtArgs["result"]["adGroup"]>
    composites: {}
  }

  type AdGroupGetPayload<S extends boolean | null | undefined | AdGroupDefaultArgs> = $Result.GetResult<Prisma.$AdGroupPayload, S>

  type AdGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdGroupCountAggregateInputType | true
    }

  export interface AdGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdGroup'], meta: { name: 'AdGroup' } }
    /**
     * Find zero or one AdGroup that matches the filter.
     * @param {AdGroupFindUniqueArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdGroupFindUniqueArgs>(args: SelectSubset<T, AdGroupFindUniqueArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdGroupFindUniqueOrThrowArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, AdGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindFirstArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdGroupFindFirstArgs>(args?: SelectSubset<T, AdGroupFindFirstArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindFirstOrThrowArgs} args - Arguments to find a AdGroup
     * @example
     * // Get one AdGroup
     * const adGroup = await prisma.adGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, AdGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdGroups
     * const adGroups = await prisma.adGroup.findMany()
     * 
     * // Get first 10 AdGroups
     * const adGroups = await prisma.adGroup.findMany({ take: 10 })
     * 
     * // Only select the `adGroupId`
     * const adGroupWithAdGroupIdOnly = await prisma.adGroup.findMany({ select: { adGroupId: true } })
     * 
     */
    findMany<T extends AdGroupFindManyArgs>(args?: SelectSubset<T, AdGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdGroup.
     * @param {AdGroupCreateArgs} args - Arguments to create a AdGroup.
     * @example
     * // Create one AdGroup
     * const AdGroup = await prisma.adGroup.create({
     *   data: {
     *     // ... data to create a AdGroup
     *   }
     * })
     * 
     */
    create<T extends AdGroupCreateArgs>(args: SelectSubset<T, AdGroupCreateArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdGroups.
     * @param {AdGroupCreateManyArgs} args - Arguments to create many AdGroups.
     * @example
     * // Create many AdGroups
     * const adGroup = await prisma.adGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdGroupCreateManyArgs>(args?: SelectSubset<T, AdGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdGroup.
     * @param {AdGroupDeleteArgs} args - Arguments to delete one AdGroup.
     * @example
     * // Delete one AdGroup
     * const AdGroup = await prisma.adGroup.delete({
     *   where: {
     *     // ... filter to delete one AdGroup
     *   }
     * })
     * 
     */
    delete<T extends AdGroupDeleteArgs>(args: SelectSubset<T, AdGroupDeleteArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdGroup.
     * @param {AdGroupUpdateArgs} args - Arguments to update one AdGroup.
     * @example
     * // Update one AdGroup
     * const adGroup = await prisma.adGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdGroupUpdateArgs>(args: SelectSubset<T, AdGroupUpdateArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdGroups.
     * @param {AdGroupDeleteManyArgs} args - Arguments to filter AdGroups to delete.
     * @example
     * // Delete a few AdGroups
     * const { count } = await prisma.adGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdGroupDeleteManyArgs>(args?: SelectSubset<T, AdGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdGroups
     * const adGroup = await prisma.adGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdGroupUpdateManyArgs>(args: SelectSubset<T, AdGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdGroup.
     * @param {AdGroupUpsertArgs} args - Arguments to update or create a AdGroup.
     * @example
     * // Update or create a AdGroup
     * const adGroup = await prisma.adGroup.upsert({
     *   create: {
     *     // ... data to create a AdGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdGroup we want to update
     *   }
     * })
     */
    upsert<T extends AdGroupUpsertArgs>(args: SelectSubset<T, AdGroupUpsertArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupCountArgs} args - Arguments to filter AdGroups to count.
     * @example
     * // Count the number of AdGroups
     * const count = await prisma.adGroup.count({
     *   where: {
     *     // ... the filter for the AdGroups we want to count
     *   }
     * })
    **/
    count<T extends AdGroupCountArgs>(
      args?: Subset<T, AdGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdGroupAggregateArgs>(args: Subset<T, AdGroupAggregateArgs>): Prisma.PrismaPromise<GetAdGroupAggregateType<T>>

    /**
     * Group by AdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupGroupByArgs} args - Group by arguments.
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
      T extends AdGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupGroupByArgs['orderBy'] }
        : { orderBy?: AdGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdGroup model
   */
  readonly fields: AdGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends AdGroup$usersArgs<ExtArgs> = {}>(args?: Subset<T, AdGroup$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdGroup model
   */
  interface AdGroupFieldRefs {
    readonly adGroupId: FieldRef<"AdGroup", 'Int'>
    readonly adGroupName: FieldRef<"AdGroup", 'String'>
    readonly createdAt: FieldRef<"AdGroup", 'DateTime'>
    readonly createdBy: FieldRef<"AdGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdGroup findUnique
   */
  export type AdGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup findUniqueOrThrow
   */
  export type AdGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup findFirst
   */
  export type AdGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
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
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup findFirstOrThrow
   */
  export type AdGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroup to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
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
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup findMany
   */
  export type AdGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter, which AdGroups to fetch.
     */
    where?: AdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdGroups to fetch.
     */
    orderBy?: AdGroupOrderByWithRelationInput | AdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdGroups.
     */
    cursor?: AdGroupWhereUniqueInput
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
    distinct?: AdGroupScalarFieldEnum | AdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup create
   */
  export type AdGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a AdGroup.
     */
    data: XOR<AdGroupCreateInput, AdGroupUncheckedCreateInput>
  }

  /**
   * AdGroup createMany
   */
  export type AdGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdGroups.
     */
    data: AdGroupCreateManyInput | AdGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdGroup update
   */
  export type AdGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a AdGroup.
     */
    data: XOR<AdGroupUpdateInput, AdGroupUncheckedUpdateInput>
    /**
     * Choose, which AdGroup to update.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup updateMany
   */
  export type AdGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdGroups.
     */
    data: XOR<AdGroupUpdateManyMutationInput, AdGroupUncheckedUpdateManyInput>
    /**
     * Filter which AdGroups to update
     */
    where?: AdGroupWhereInput
    /**
     * Limit how many AdGroups to update.
     */
    limit?: number
  }

  /**
   * AdGroup upsert
   */
  export type AdGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the AdGroup to update in case it exists.
     */
    where: AdGroupWhereUniqueInput
    /**
     * In case the AdGroup found by the `where` argument doesn't exist, create a new AdGroup with this data.
     */
    create: XOR<AdGroupCreateInput, AdGroupUncheckedCreateInput>
    /**
     * In case the AdGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdGroupUpdateInput, AdGroupUncheckedUpdateInput>
  }

  /**
   * AdGroup delete
   */
  export type AdGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
    /**
     * Filter which AdGroup to delete.
     */
    where: AdGroupWhereUniqueInput
  }

  /**
   * AdGroup deleteMany
   */
  export type AdGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdGroups to delete
     */
    where?: AdGroupWhereInput
    /**
     * Limit how many AdGroups to delete.
     */
    limit?: number
  }

  /**
   * AdGroup.users
   */
  export type AdGroup$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    where?: UserAdGroupWhereInput
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    cursor?: UserAdGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAdGroupScalarFieldEnum | UserAdGroupScalarFieldEnum[]
  }

  /**
   * AdGroup without action
   */
  export type AdGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdGroup
     */
    select?: AdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdGroup
     */
    omit?: AdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdGroupInclude<ExtArgs> | null
  }


  /**
   * Model UserAdGroup
   */

  export type AggregateUserAdGroup = {
    _count: UserAdGroupCountAggregateOutputType | null
    _avg: UserAdGroupAvgAggregateOutputType | null
    _sum: UserAdGroupSumAggregateOutputType | null
    _min: UserAdGroupMinAggregateOutputType | null
    _max: UserAdGroupMaxAggregateOutputType | null
  }

  export type UserAdGroupAvgAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
  }

  export type UserAdGroupSumAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
  }

  export type UserAdGroupMinAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UserAdGroupMaxAggregateOutputType = {
    userAdGroupId: number | null
    userId: number | null
    adGroupId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UserAdGroupCountAggregateOutputType = {
    userAdGroupId: number
    userId: number
    adGroupId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UserAdGroupAvgAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
  }

  export type UserAdGroupSumAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
  }

  export type UserAdGroupMinAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UserAdGroupMaxAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UserAdGroupCountAggregateInputType = {
    userAdGroupId?: true
    userId?: true
    adGroupId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type UserAdGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAdGroup to aggregate.
     */
    where?: UserAdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdGroups to fetch.
     */
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAdGroups
    **/
    _count?: true | UserAdGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAdGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAdGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAdGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAdGroupMaxAggregateInputType
  }

  export type GetUserAdGroupAggregateType<T extends UserAdGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAdGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAdGroup[P]>
      : GetScalarType<T[P], AggregateUserAdGroup[P]>
  }




  export type UserAdGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAdGroupWhereInput
    orderBy?: UserAdGroupOrderByWithAggregationInput | UserAdGroupOrderByWithAggregationInput[]
    by: UserAdGroupScalarFieldEnum[] | UserAdGroupScalarFieldEnum
    having?: UserAdGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAdGroupCountAggregateInputType | true
    _avg?: UserAdGroupAvgAggregateInputType
    _sum?: UserAdGroupSumAggregateInputType
    _min?: UserAdGroupMinAggregateInputType
    _max?: UserAdGroupMaxAggregateInputType
  }

  export type UserAdGroupGroupByOutputType = {
    userAdGroupId: number
    userId: number
    adGroupId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: UserAdGroupCountAggregateOutputType | null
    _avg: UserAdGroupAvgAggregateOutputType | null
    _sum: UserAdGroupSumAggregateOutputType | null
    _min: UserAdGroupMinAggregateOutputType | null
    _max: UserAdGroupMaxAggregateOutputType | null
  }

  type GetUserAdGroupGroupByPayload<T extends UserAdGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAdGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAdGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAdGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserAdGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserAdGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userAdGroupId?: boolean
    userId?: boolean
    adGroupId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAdGroup"]>



  export type UserAdGroupSelectScalar = {
    userAdGroupId?: boolean
    userId?: boolean
    adGroupId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UserAdGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userAdGroupId" | "userId" | "adGroupId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["userAdGroup"]>
  export type UserAdGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adGroup?: boolean | AdGroupDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAdGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAdGroup"
    objects: {
      adGroup: Prisma.$AdGroupPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userAdGroupId: number
      userId: number
      adGroupId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["userAdGroup"]>
    composites: {}
  }

  type UserAdGroupGetPayload<S extends boolean | null | undefined | UserAdGroupDefaultArgs> = $Result.GetResult<Prisma.$UserAdGroupPayload, S>

  type UserAdGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAdGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAdGroupCountAggregateInputType | true
    }

  export interface UserAdGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAdGroup'], meta: { name: 'UserAdGroup' } }
    /**
     * Find zero or one UserAdGroup that matches the filter.
     * @param {UserAdGroupFindUniqueArgs} args - Arguments to find a UserAdGroup
     * @example
     * // Get one UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAdGroupFindUniqueArgs>(args: SelectSubset<T, UserAdGroupFindUniqueArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAdGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAdGroupFindUniqueOrThrowArgs} args - Arguments to find a UserAdGroup
     * @example
     * // Get one UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAdGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAdGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupFindFirstArgs} args - Arguments to find a UserAdGroup
     * @example
     * // Get one UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAdGroupFindFirstArgs>(args?: SelectSubset<T, UserAdGroupFindFirstArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAdGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupFindFirstOrThrowArgs} args - Arguments to find a UserAdGroup
     * @example
     * // Get one UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAdGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAdGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAdGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAdGroups
     * const userAdGroups = await prisma.userAdGroup.findMany()
     * 
     * // Get first 10 UserAdGroups
     * const userAdGroups = await prisma.userAdGroup.findMany({ take: 10 })
     * 
     * // Only select the `userAdGroupId`
     * const userAdGroupWithUserAdGroupIdOnly = await prisma.userAdGroup.findMany({ select: { userAdGroupId: true } })
     * 
     */
    findMany<T extends UserAdGroupFindManyArgs>(args?: SelectSubset<T, UserAdGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAdGroup.
     * @param {UserAdGroupCreateArgs} args - Arguments to create a UserAdGroup.
     * @example
     * // Create one UserAdGroup
     * const UserAdGroup = await prisma.userAdGroup.create({
     *   data: {
     *     // ... data to create a UserAdGroup
     *   }
     * })
     * 
     */
    create<T extends UserAdGroupCreateArgs>(args: SelectSubset<T, UserAdGroupCreateArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAdGroups.
     * @param {UserAdGroupCreateManyArgs} args - Arguments to create many UserAdGroups.
     * @example
     * // Create many UserAdGroups
     * const userAdGroup = await prisma.userAdGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAdGroupCreateManyArgs>(args?: SelectSubset<T, UserAdGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserAdGroup.
     * @param {UserAdGroupDeleteArgs} args - Arguments to delete one UserAdGroup.
     * @example
     * // Delete one UserAdGroup
     * const UserAdGroup = await prisma.userAdGroup.delete({
     *   where: {
     *     // ... filter to delete one UserAdGroup
     *   }
     * })
     * 
     */
    delete<T extends UserAdGroupDeleteArgs>(args: SelectSubset<T, UserAdGroupDeleteArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAdGroup.
     * @param {UserAdGroupUpdateArgs} args - Arguments to update one UserAdGroup.
     * @example
     * // Update one UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAdGroupUpdateArgs>(args: SelectSubset<T, UserAdGroupUpdateArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAdGroups.
     * @param {UserAdGroupDeleteManyArgs} args - Arguments to filter UserAdGroups to delete.
     * @example
     * // Delete a few UserAdGroups
     * const { count } = await prisma.userAdGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAdGroupDeleteManyArgs>(args?: SelectSubset<T, UserAdGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAdGroups
     * const userAdGroup = await prisma.userAdGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAdGroupUpdateManyArgs>(args: SelectSubset<T, UserAdGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAdGroup.
     * @param {UserAdGroupUpsertArgs} args - Arguments to update or create a UserAdGroup.
     * @example
     * // Update or create a UserAdGroup
     * const userAdGroup = await prisma.userAdGroup.upsert({
     *   create: {
     *     // ... data to create a UserAdGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAdGroup we want to update
     *   }
     * })
     */
    upsert<T extends UserAdGroupUpsertArgs>(args: SelectSubset<T, UserAdGroupUpsertArgs<ExtArgs>>): Prisma__UserAdGroupClient<$Result.GetResult<Prisma.$UserAdGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAdGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupCountArgs} args - Arguments to filter UserAdGroups to count.
     * @example
     * // Count the number of UserAdGroups
     * const count = await prisma.userAdGroup.count({
     *   where: {
     *     // ... the filter for the UserAdGroups we want to count
     *   }
     * })
    **/
    count<T extends UserAdGroupCountArgs>(
      args?: Subset<T, UserAdGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAdGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAdGroupAggregateArgs>(args: Subset<T, UserAdGroupAggregateArgs>): Prisma.PrismaPromise<GetUserAdGroupAggregateType<T>>

    /**
     * Group by UserAdGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAdGroupGroupByArgs} args - Group by arguments.
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
      T extends UserAdGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAdGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserAdGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAdGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAdGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAdGroup model
   */
  readonly fields: UserAdGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAdGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAdGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adGroup<T extends AdGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdGroupDefaultArgs<ExtArgs>>): Prisma__AdGroupClient<$Result.GetResult<Prisma.$AdGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAdGroup model
   */
  interface UserAdGroupFieldRefs {
    readonly userAdGroupId: FieldRef<"UserAdGroup", 'Int'>
    readonly userId: FieldRef<"UserAdGroup", 'Int'>
    readonly adGroupId: FieldRef<"UserAdGroup", 'Int'>
    readonly createdAt: FieldRef<"UserAdGroup", 'DateTime'>
    readonly createdBy: FieldRef<"UserAdGroup", 'String'>
    readonly isDeleted: FieldRef<"UserAdGroup", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserAdGroup findUnique
   */
  export type UserAdGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserAdGroup to fetch.
     */
    where: UserAdGroupWhereUniqueInput
  }

  /**
   * UserAdGroup findUniqueOrThrow
   */
  export type UserAdGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserAdGroup to fetch.
     */
    where: UserAdGroupWhereUniqueInput
  }

  /**
   * UserAdGroup findFirst
   */
  export type UserAdGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserAdGroup to fetch.
     */
    where?: UserAdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdGroups to fetch.
     */
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAdGroups.
     */
    cursor?: UserAdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAdGroups.
     */
    distinct?: UserAdGroupScalarFieldEnum | UserAdGroupScalarFieldEnum[]
  }

  /**
   * UserAdGroup findFirstOrThrow
   */
  export type UserAdGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserAdGroup to fetch.
     */
    where?: UserAdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdGroups to fetch.
     */
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAdGroups.
     */
    cursor?: UserAdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAdGroups.
     */
    distinct?: UserAdGroupScalarFieldEnum | UserAdGroupScalarFieldEnum[]
  }

  /**
   * UserAdGroup findMany
   */
  export type UserAdGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserAdGroups to fetch.
     */
    where?: UserAdGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAdGroups to fetch.
     */
    orderBy?: UserAdGroupOrderByWithRelationInput | UserAdGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAdGroups.
     */
    cursor?: UserAdGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAdGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAdGroups.
     */
    skip?: number
    distinct?: UserAdGroupScalarFieldEnum | UserAdGroupScalarFieldEnum[]
  }

  /**
   * UserAdGroup create
   */
  export type UserAdGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAdGroup.
     */
    data: XOR<UserAdGroupCreateInput, UserAdGroupUncheckedCreateInput>
  }

  /**
   * UserAdGroup createMany
   */
  export type UserAdGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAdGroups.
     */
    data: UserAdGroupCreateManyInput | UserAdGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAdGroup update
   */
  export type UserAdGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAdGroup.
     */
    data: XOR<UserAdGroupUpdateInput, UserAdGroupUncheckedUpdateInput>
    /**
     * Choose, which UserAdGroup to update.
     */
    where: UserAdGroupWhereUniqueInput
  }

  /**
   * UserAdGroup updateMany
   */
  export type UserAdGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAdGroups.
     */
    data: XOR<UserAdGroupUpdateManyMutationInput, UserAdGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserAdGroups to update
     */
    where?: UserAdGroupWhereInput
    /**
     * Limit how many UserAdGroups to update.
     */
    limit?: number
  }

  /**
   * UserAdGroup upsert
   */
  export type UserAdGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAdGroup to update in case it exists.
     */
    where: UserAdGroupWhereUniqueInput
    /**
     * In case the UserAdGroup found by the `where` argument doesn't exist, create a new UserAdGroup with this data.
     */
    create: XOR<UserAdGroupCreateInput, UserAdGroupUncheckedCreateInput>
    /**
     * In case the UserAdGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAdGroupUpdateInput, UserAdGroupUncheckedUpdateInput>
  }

  /**
   * UserAdGroup delete
   */
  export type UserAdGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
    /**
     * Filter which UserAdGroup to delete.
     */
    where: UserAdGroupWhereUniqueInput
  }

  /**
   * UserAdGroup deleteMany
   */
  export type UserAdGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAdGroups to delete
     */
    where?: UserAdGroupWhereInput
    /**
     * Limit how many UserAdGroups to delete.
     */
    limit?: number
  }

  /**
   * UserAdGroup without action
   */
  export type UserAdGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAdGroup
     */
    select?: UserAdGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAdGroup
     */
    omit?: UserAdGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAdGroupInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    userName: 'userName',
    userSurname: 'userSurname',
    userCode: 'userCode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserContactScalarFieldEnum: {
    userContactId: 'userContactId',
    userContactType: 'userContactType',
    userContactScope: 'userContactScope',
    userContactValue: 'userContactValue',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    userId: 'userId'
  };

  export type UserContactScalarFieldEnum = (typeof UserContactScalarFieldEnum)[keyof typeof UserContactScalarFieldEnum]


  export const UserAuthScalarFieldEnum: {
    authId: 'authId',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted',
    userId: 'userId'
  };

  export type UserAuthScalarFieldEnum = (typeof UserAuthScalarFieldEnum)[keyof typeof UserAuthScalarFieldEnum]


  export const AdGroupScalarFieldEnum: {
    adGroupId: 'adGroupId',
    adGroupName: 'adGroupName',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
  };

  export type AdGroupScalarFieldEnum = (typeof AdGroupScalarFieldEnum)[keyof typeof AdGroupScalarFieldEnum]


  export const UserAdGroupScalarFieldEnum: {
    userAdGroupId: 'userAdGroupId',
    userId: 'userId',
    adGroupId: 'adGroupId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UserAdGroupScalarFieldEnum = (typeof UserAdGroupScalarFieldEnum)[keyof typeof UserAdGroupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userName: 'userName',
    userSurname: 'userSurname',
    userCode: 'userCode',
    createdBy: 'createdBy'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserContactOrderByRelevanceFieldEnum: {
    userContactValue: 'userContactValue',
    createdBy: 'createdBy'
  };

  export type UserContactOrderByRelevanceFieldEnum = (typeof UserContactOrderByRelevanceFieldEnum)[keyof typeof UserContactOrderByRelevanceFieldEnum]


  export const UserAuthOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    createdBy: 'createdBy'
  };

  export type UserAuthOrderByRelevanceFieldEnum = (typeof UserAuthOrderByRelevanceFieldEnum)[keyof typeof UserAuthOrderByRelevanceFieldEnum]


  export const AdGroupOrderByRelevanceFieldEnum: {
    adGroupName: 'adGroupName',
    createdBy: 'createdBy'
  };

  export type AdGroupOrderByRelevanceFieldEnum = (typeof AdGroupOrderByRelevanceFieldEnum)[keyof typeof AdGroupOrderByRelevanceFieldEnum]


  export const UserAdGroupOrderByRelevanceFieldEnum: {
    createdBy: 'createdBy'
  };

  export type UserAdGroupOrderByRelevanceFieldEnum = (typeof UserAdGroupOrderByRelevanceFieldEnum)[keyof typeof UserAdGroupOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'ContactType'
   */
  export type EnumContactTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactType'>
    


  /**
   * Reference to a field of type 'ContactScope'
   */
  export type EnumContactScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactScope'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    userSurname?: StringFilter<"User"> | string
    userCode?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    adGroups?: UserAdGroupListRelationFilter
    auth?: XOR<UserAuthNullableScalarRelationFilter, UserAuthWhereInput> | null
    contacts?: UserContactListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    adGroups?: UserAdGroupOrderByRelationAggregateInput
    auth?: UserAuthOrderByWithRelationInput
    contacts?: UserContactOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    userSurname?: StringFilter<"User"> | string
    userCode?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    createdBy?: StringFilter<"User"> | string
    isDeleted?: BoolFilter<"User"> | boolean
    adGroups?: UserAdGroupListRelationFilter
    auth?: XOR<UserAuthNullableScalarRelationFilter, UserAuthWhereInput> | null
    contacts?: UserContactListRelationFilter
  }, "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    userSurname?: StringWithAggregatesFilter<"User"> | string
    userCode?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdBy?: StringWithAggregatesFilter<"User"> | string
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type UserContactWhereInput = {
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    userContactId?: IntFilter<"UserContact"> | number
    userContactType?: EnumContactTypeFilter<"UserContact"> | $Enums.ContactType
    userContactScope?: EnumContactScopeFilter<"UserContact"> | $Enums.ContactScope
    userContactValue?: StringFilter<"UserContact"> | string
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    createdBy?: StringFilter<"UserContact"> | string
    isDeleted?: BoolFilter<"UserContact"> | boolean
    userId?: IntFilter<"UserContact"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserContactOrderByWithRelationInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserContactOrderByRelevanceInput
  }

  export type UserContactWhereUniqueInput = Prisma.AtLeast<{
    userContactId?: number
    AND?: UserContactWhereInput | UserContactWhereInput[]
    OR?: UserContactWhereInput[]
    NOT?: UserContactWhereInput | UserContactWhereInput[]
    userContactType?: EnumContactTypeFilter<"UserContact"> | $Enums.ContactType
    userContactScope?: EnumContactScopeFilter<"UserContact"> | $Enums.ContactScope
    userContactValue?: StringFilter<"UserContact"> | string
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    createdBy?: StringFilter<"UserContact"> | string
    isDeleted?: BoolFilter<"UserContact"> | boolean
    userId?: IntFilter<"UserContact"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userContactId">

  export type UserContactOrderByWithAggregationInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    _count?: UserContactCountOrderByAggregateInput
    _avg?: UserContactAvgOrderByAggregateInput
    _max?: UserContactMaxOrderByAggregateInput
    _min?: UserContactMinOrderByAggregateInput
    _sum?: UserContactSumOrderByAggregateInput
  }

  export type UserContactScalarWhereWithAggregatesInput = {
    AND?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    OR?: UserContactScalarWhereWithAggregatesInput[]
    NOT?: UserContactScalarWhereWithAggregatesInput | UserContactScalarWhereWithAggregatesInput[]
    userContactId?: IntWithAggregatesFilter<"UserContact"> | number
    userContactType?: EnumContactTypeWithAggregatesFilter<"UserContact"> | $Enums.ContactType
    userContactScope?: EnumContactScopeWithAggregatesFilter<"UserContact"> | $Enums.ContactScope
    userContactValue?: StringWithAggregatesFilter<"UserContact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserContact"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UserContact"> | string
    isDeleted?: BoolWithAggregatesFilter<"UserContact"> | boolean
    userId?: IntWithAggregatesFilter<"UserContact"> | number
  }

  export type UserAuthWhereInput = {
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    authId?: IntFilter<"UserAuth"> | number
    email?: StringFilter<"UserAuth"> | string
    password?: StringFilter<"UserAuth"> | string
    createdAt?: DateTimeFilter<"UserAuth"> | Date | string
    createdBy?: StringFilter<"UserAuth"> | string
    isDeleted?: BoolFilter<"UserAuth"> | boolean
    userId?: IntFilter<"UserAuth"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAuthOrderByWithRelationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserAuthOrderByRelevanceInput
  }

  export type UserAuthWhereUniqueInput = Prisma.AtLeast<{
    authId?: number
    email?: string
    userId?: number
    AND?: UserAuthWhereInput | UserAuthWhereInput[]
    OR?: UserAuthWhereInput[]
    NOT?: UserAuthWhereInput | UserAuthWhereInput[]
    password?: StringFilter<"UserAuth"> | string
    createdAt?: DateTimeFilter<"UserAuth"> | Date | string
    createdBy?: StringFilter<"UserAuth"> | string
    isDeleted?: BoolFilter<"UserAuth"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "authId" | "email" | "userId">

  export type UserAuthOrderByWithAggregationInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
    _count?: UserAuthCountOrderByAggregateInput
    _avg?: UserAuthAvgOrderByAggregateInput
    _max?: UserAuthMaxOrderByAggregateInput
    _min?: UserAuthMinOrderByAggregateInput
    _sum?: UserAuthSumOrderByAggregateInput
  }

  export type UserAuthScalarWhereWithAggregatesInput = {
    AND?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    OR?: UserAuthScalarWhereWithAggregatesInput[]
    NOT?: UserAuthScalarWhereWithAggregatesInput | UserAuthScalarWhereWithAggregatesInput[]
    authId?: IntWithAggregatesFilter<"UserAuth"> | number
    email?: StringWithAggregatesFilter<"UserAuth"> | string
    password?: StringWithAggregatesFilter<"UserAuth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAuth"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UserAuth"> | string
    isDeleted?: BoolWithAggregatesFilter<"UserAuth"> | boolean
    userId?: IntWithAggregatesFilter<"UserAuth"> | number
  }

  export type AdGroupWhereInput = {
    AND?: AdGroupWhereInput | AdGroupWhereInput[]
    OR?: AdGroupWhereInput[]
    NOT?: AdGroupWhereInput | AdGroupWhereInput[]
    adGroupId?: IntFilter<"AdGroup"> | number
    adGroupName?: StringFilter<"AdGroup"> | string
    createdAt?: DateTimeFilter<"AdGroup"> | Date | string
    createdBy?: StringFilter<"AdGroup"> | string
    users?: UserAdGroupListRelationFilter
  }

  export type AdGroupOrderByWithRelationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    users?: UserAdGroupOrderByRelationAggregateInput
    _relevance?: AdGroupOrderByRelevanceInput
  }

  export type AdGroupWhereUniqueInput = Prisma.AtLeast<{
    adGroupId?: number
    AND?: AdGroupWhereInput | AdGroupWhereInput[]
    OR?: AdGroupWhereInput[]
    NOT?: AdGroupWhereInput | AdGroupWhereInput[]
    adGroupName?: StringFilter<"AdGroup"> | string
    createdAt?: DateTimeFilter<"AdGroup"> | Date | string
    createdBy?: StringFilter<"AdGroup"> | string
    users?: UserAdGroupListRelationFilter
  }, "adGroupId">

  export type AdGroupOrderByWithAggregationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    _count?: AdGroupCountOrderByAggregateInput
    _avg?: AdGroupAvgOrderByAggregateInput
    _max?: AdGroupMaxOrderByAggregateInput
    _min?: AdGroupMinOrderByAggregateInput
    _sum?: AdGroupSumOrderByAggregateInput
  }

  export type AdGroupScalarWhereWithAggregatesInput = {
    AND?: AdGroupScalarWhereWithAggregatesInput | AdGroupScalarWhereWithAggregatesInput[]
    OR?: AdGroupScalarWhereWithAggregatesInput[]
    NOT?: AdGroupScalarWhereWithAggregatesInput | AdGroupScalarWhereWithAggregatesInput[]
    adGroupId?: IntWithAggregatesFilter<"AdGroup"> | number
    adGroupName?: StringWithAggregatesFilter<"AdGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdGroup"> | Date | string
    createdBy?: StringWithAggregatesFilter<"AdGroup"> | string
  }

  export type UserAdGroupWhereInput = {
    AND?: UserAdGroupWhereInput | UserAdGroupWhereInput[]
    OR?: UserAdGroupWhereInput[]
    NOT?: UserAdGroupWhereInput | UserAdGroupWhereInput[]
    userAdGroupId?: IntFilter<"UserAdGroup"> | number
    userId?: IntFilter<"UserAdGroup"> | number
    adGroupId?: IntFilter<"UserAdGroup"> | number
    createdAt?: DateTimeFilter<"UserAdGroup"> | Date | string
    createdBy?: StringFilter<"UserAdGroup"> | string
    isDeleted?: BoolFilter<"UserAdGroup"> | boolean
    adGroup?: XOR<AdGroupScalarRelationFilter, AdGroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAdGroupOrderByWithRelationInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    adGroup?: AdGroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: UserAdGroupOrderByRelevanceInput
  }

  export type UserAdGroupWhereUniqueInput = Prisma.AtLeast<{
    userAdGroupId?: number
    AND?: UserAdGroupWhereInput | UserAdGroupWhereInput[]
    OR?: UserAdGroupWhereInput[]
    NOT?: UserAdGroupWhereInput | UserAdGroupWhereInput[]
    userId?: IntFilter<"UserAdGroup"> | number
    adGroupId?: IntFilter<"UserAdGroup"> | number
    createdAt?: DateTimeFilter<"UserAdGroup"> | Date | string
    createdBy?: StringFilter<"UserAdGroup"> | string
    isDeleted?: BoolFilter<"UserAdGroup"> | boolean
    adGroup?: XOR<AdGroupScalarRelationFilter, AdGroupWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userAdGroupId">

  export type UserAdGroupOrderByWithAggregationInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: UserAdGroupCountOrderByAggregateInput
    _avg?: UserAdGroupAvgOrderByAggregateInput
    _max?: UserAdGroupMaxOrderByAggregateInput
    _min?: UserAdGroupMinOrderByAggregateInput
    _sum?: UserAdGroupSumOrderByAggregateInput
  }

  export type UserAdGroupScalarWhereWithAggregatesInput = {
    AND?: UserAdGroupScalarWhereWithAggregatesInput | UserAdGroupScalarWhereWithAggregatesInput[]
    OR?: UserAdGroupScalarWhereWithAggregatesInput[]
    NOT?: UserAdGroupScalarWhereWithAggregatesInput | UserAdGroupScalarWhereWithAggregatesInput[]
    userAdGroupId?: IntWithAggregatesFilter<"UserAdGroup"> | number
    userId?: IntWithAggregatesFilter<"UserAdGroup"> | number
    adGroupId?: IntWithAggregatesFilter<"UserAdGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserAdGroup"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UserAdGroup"> | string
    isDeleted?: BoolWithAggregatesFilter<"UserAdGroup"> | boolean
  }

  export type UserCreateInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupCreateNestedManyWithoutUserInput
    auth?: UserAuthCreateNestedOneWithoutUserInput
    contacts?: UserContactCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupUncheckedCreateNestedManyWithoutUserInput
    auth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUpdateManyWithoutUserNestedInput
    auth?: UserAuthUpdateOneWithoutUserNestedInput
    contacts?: UserContactUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUncheckedUpdateManyWithoutUserNestedInput
    auth?: UserAuthUncheckedUpdateOneWithoutUserNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactCreateInput = {
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutContactsInput
  }

  export type UserContactUncheckedCreateInput = {
    userContactId?: number
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UserContactUpdateInput = {
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutContactsNestedInput
  }

  export type UserContactUncheckedUpdateInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserContactCreateManyInput = {
    userContactId?: number
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UserContactUpdateManyMutationInput = {
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactUncheckedUpdateManyInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAuthCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutAuthInput
  }

  export type UserAuthUncheckedCreateInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UserAuthUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAuthNestedInput
  }

  export type UserAuthUncheckedUpdateInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAuthCreateManyInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userId: number
  }

  export type UserAuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthUncheckedUpdateManyInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AdGroupCreateInput = {
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    users?: UserAdGroupCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupUncheckedCreateInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    users?: UserAdGroupUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupUpdateInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    users?: UserAdGroupUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupUncheckedUpdateInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    users?: UserAdGroupUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupCreateManyInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupUpdateManyMutationInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type AdGroupUncheckedUpdateManyInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserAdGroupCreateInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroup: AdGroupCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutAdGroupsInput
  }

  export type UserAdGroupUncheckedCreateInput = {
    userAdGroupId?: number
    userId: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroup?: AdGroupUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type UserAdGroupUncheckedUpdateInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAdGroupCreateManyInput = {
    userAdGroupId?: number
    userId: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAdGroupUncheckedUpdateManyInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
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

  export type UserAdGroupListRelationFilter = {
    every?: UserAdGroupWhereInput
    some?: UserAdGroupWhereInput
    none?: UserAdGroupWhereInput
  }

  export type UserAuthNullableScalarRelationFilter = {
    is?: UserAuthWhereInput | null
    isNot?: UserAuthWhereInput | null
  }

  export type UserContactListRelationFilter = {
    every?: UserContactWhereInput
    some?: UserContactWhereInput
    none?: UserContactWhereInput
  }

  export type UserAdGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    userName?: SortOrder
    userSurname?: SortOrder
    userCode?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type EnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[]
    notIn?: $Enums.ContactType[]
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type EnumContactScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactScope | EnumContactScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactScope[]
    notIn?: $Enums.ContactScope[]
    not?: NestedEnumContactScopeFilter<$PrismaModel> | $Enums.ContactScope
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserContactOrderByRelevanceInput = {
    fields: UserContactOrderByRelevanceFieldEnum | UserContactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserContactCountOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserContactAvgOrderByAggregateInput = {
    userContactId?: SortOrder
    userId?: SortOrder
  }

  export type UserContactMaxOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserContactMinOrderByAggregateInput = {
    userContactId?: SortOrder
    userContactType?: SortOrder
    userContactScope?: SortOrder
    userContactValue?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserContactSumOrderByAggregateInput = {
    userContactId?: SortOrder
    userId?: SortOrder
  }

  export type EnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[]
    notIn?: $Enums.ContactType[]
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type EnumContactScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactScope | EnumContactScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactScope[]
    notIn?: $Enums.ContactScope[]
    not?: NestedEnumContactScopeWithAggregatesFilter<$PrismaModel> | $Enums.ContactScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactScopeFilter<$PrismaModel>
    _max?: NestedEnumContactScopeFilter<$PrismaModel>
  }

  export type UserAuthOrderByRelevanceInput = {
    fields: UserAuthOrderByRelevanceFieldEnum | UserAuthOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserAuthCountOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserAuthAvgOrderByAggregateInput = {
    authId?: SortOrder
    userId?: SortOrder
  }

  export type UserAuthMaxOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserAuthMinOrderByAggregateInput = {
    authId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userId?: SortOrder
  }

  export type UserAuthSumOrderByAggregateInput = {
    authId?: SortOrder
    userId?: SortOrder
  }

  export type AdGroupOrderByRelevanceInput = {
    fields: AdGroupOrderByRelevanceFieldEnum | AdGroupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdGroupCountOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupAvgOrderByAggregateInput = {
    adGroupId?: SortOrder
  }

  export type AdGroupMaxOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupMinOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
  }

  export type AdGroupSumOrderByAggregateInput = {
    adGroupId?: SortOrder
  }

  export type AdGroupScalarRelationFilter = {
    is?: AdGroupWhereInput
    isNot?: AdGroupWhereInput
  }

  export type UserAdGroupOrderByRelevanceInput = {
    fields: UserAdGroupOrderByRelevanceFieldEnum | UserAdGroupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserAdGroupCountOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserAdGroupAvgOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
  }

  export type UserAdGroupMaxOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserAdGroupMinOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UserAdGroupSumOrderByAggregateInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
  }

  export type UserAdGroupCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput> | UserAdGroupCreateWithoutUserInput[] | UserAdGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutUserInput | UserAdGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserAdGroupCreateManyUserInputEnvelope
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
  }

  export type UserAuthCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type UserContactCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput> | UserContactCreateWithoutUserInput[] | UserContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput | UserContactCreateOrConnectWithoutUserInput[]
    createMany?: UserContactCreateManyUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
  }

  export type UserAdGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput> | UserAdGroupCreateWithoutUserInput[] | UserAdGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutUserInput | UserAdGroupCreateOrConnectWithoutUserInput[]
    createMany?: UserAdGroupCreateManyUserInputEnvelope
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
  }

  export type UserAuthUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    connect?: UserAuthWhereUniqueInput
  }

  export type UserContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput> | UserContactCreateWithoutUserInput[] | UserContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput | UserContactCreateOrConnectWithoutUserInput[]
    createMany?: UserContactCreateManyUserInputEnvelope
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
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

  export type UserAdGroupUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput> | UserAdGroupCreateWithoutUserInput[] | UserAdGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutUserInput | UserAdGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserAdGroupUpsertWithWhereUniqueWithoutUserInput | UserAdGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAdGroupCreateManyUserInputEnvelope
    set?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    disconnect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    delete?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    update?: UserAdGroupUpdateWithWhereUniqueWithoutUserInput | UserAdGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAdGroupUpdateManyWithWhereWithoutUserInput | UserAdGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
  }

  export type UserAuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: UserAuthWhereInput | boolean
    delete?: UserAuthWhereInput | boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutUserInput, UserAuthUpdateWithoutUserInput>, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput> | UserContactCreateWithoutUserInput[] | UserContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput | UserContactCreateOrConnectWithoutUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutUserInput | UserContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContactCreateManyUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutUserInput | UserContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutUserInput | UserContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAdGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput> | UserAdGroupCreateWithoutUserInput[] | UserAdGroupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutUserInput | UserAdGroupCreateOrConnectWithoutUserInput[]
    upsert?: UserAdGroupUpsertWithWhereUniqueWithoutUserInput | UserAdGroupUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAdGroupCreateManyUserInputEnvelope
    set?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    disconnect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    delete?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    update?: UserAdGroupUpdateWithWhereUniqueWithoutUserInput | UserAdGroupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAdGroupUpdateManyWithWhereWithoutUserInput | UserAdGroupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
  }

  export type UserAuthUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserAuthCreateOrConnectWithoutUserInput
    upsert?: UserAuthUpsertWithoutUserInput
    disconnect?: UserAuthWhereInput | boolean
    delete?: UserAuthWhereInput | boolean
    connect?: UserAuthWhereUniqueInput
    update?: XOR<XOR<UserAuthUpdateToOneWithWhereWithoutUserInput, UserAuthUpdateWithoutUserInput>, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput> | UserContactCreateWithoutUserInput[] | UserContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserContactCreateOrConnectWithoutUserInput | UserContactCreateOrConnectWithoutUserInput[]
    upsert?: UserContactUpsertWithWhereUniqueWithoutUserInput | UserContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserContactCreateManyUserInputEnvelope
    set?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    disconnect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    delete?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    connect?: UserContactWhereUniqueInput | UserContactWhereUniqueInput[]
    update?: UserContactUpdateWithWhereUniqueWithoutUserInput | UserContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserContactUpdateManyWithWhereWithoutUserInput | UserContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContactsInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumContactTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContactType
  }

  export type EnumContactScopeFieldUpdateOperationsInput = {
    set?: $Enums.ContactScope
  }

  export type UserUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactsInput
    upsert?: UserUpsertWithoutContactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactsInput, UserUpdateWithoutContactsInput>, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthNestedInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    upsert?: UserUpsertWithoutAuthInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthInput, UserUpdateWithoutAuthInput>, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserAdGroupCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput> | UserAdGroupCreateWithoutAdGroupInput[] | UserAdGroupUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutAdGroupInput | UserAdGroupCreateOrConnectWithoutAdGroupInput[]
    createMany?: UserAdGroupCreateManyAdGroupInputEnvelope
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
  }

  export type UserAdGroupUncheckedCreateNestedManyWithoutAdGroupInput = {
    create?: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput> | UserAdGroupCreateWithoutAdGroupInput[] | UserAdGroupUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutAdGroupInput | UserAdGroupCreateOrConnectWithoutAdGroupInput[]
    createMany?: UserAdGroupCreateManyAdGroupInputEnvelope
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
  }

  export type UserAdGroupUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput> | UserAdGroupCreateWithoutAdGroupInput[] | UserAdGroupUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutAdGroupInput | UserAdGroupCreateOrConnectWithoutAdGroupInput[]
    upsert?: UserAdGroupUpsertWithWhereUniqueWithoutAdGroupInput | UserAdGroupUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: UserAdGroupCreateManyAdGroupInputEnvelope
    set?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    disconnect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    delete?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    update?: UserAdGroupUpdateWithWhereUniqueWithoutAdGroupInput | UserAdGroupUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: UserAdGroupUpdateManyWithWhereWithoutAdGroupInput | UserAdGroupUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
  }

  export type UserAdGroupUncheckedUpdateManyWithoutAdGroupNestedInput = {
    create?: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput> | UserAdGroupCreateWithoutAdGroupInput[] | UserAdGroupUncheckedCreateWithoutAdGroupInput[]
    connectOrCreate?: UserAdGroupCreateOrConnectWithoutAdGroupInput | UserAdGroupCreateOrConnectWithoutAdGroupInput[]
    upsert?: UserAdGroupUpsertWithWhereUniqueWithoutAdGroupInput | UserAdGroupUpsertWithWhereUniqueWithoutAdGroupInput[]
    createMany?: UserAdGroupCreateManyAdGroupInputEnvelope
    set?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    disconnect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    delete?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    connect?: UserAdGroupWhereUniqueInput | UserAdGroupWhereUniqueInput[]
    update?: UserAdGroupUpdateWithWhereUniqueWithoutAdGroupInput | UserAdGroupUpdateWithWhereUniqueWithoutAdGroupInput[]
    updateMany?: UserAdGroupUpdateManyWithWhereWithoutAdGroupInput | UserAdGroupUpdateManyWithWhereWithoutAdGroupInput[]
    deleteMany?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
  }

  export type AdGroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<AdGroupCreateWithoutUsersInput, AdGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdGroupCreateOrConnectWithoutUsersInput
    connect?: AdGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdGroupsInput = {
    create?: XOR<UserCreateWithoutAdGroupsInput, UserUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type AdGroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AdGroupCreateWithoutUsersInput, AdGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AdGroupCreateOrConnectWithoutUsersInput
    upsert?: AdGroupUpsertWithoutUsersInput
    connect?: AdGroupWhereUniqueInput
    update?: XOR<XOR<AdGroupUpdateToOneWithWhereWithoutUsersInput, AdGroupUpdateWithoutUsersInput>, AdGroupUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutAdGroupsNestedInput = {
    create?: XOR<UserCreateWithoutAdGroupsInput, UserUncheckedCreateWithoutAdGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdGroupsInput
    upsert?: UserUpsertWithoutAdGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdGroupsInput, UserUpdateWithoutAdGroupsInput>, UserUncheckedUpdateWithoutAdGroupsInput>
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

  export type NestedEnumContactTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[]
    notIn?: $Enums.ContactType[]
    not?: NestedEnumContactTypeFilter<$PrismaModel> | $Enums.ContactType
  }

  export type NestedEnumContactScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactScope | EnumContactScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactScope[]
    notIn?: $Enums.ContactScope[]
    not?: NestedEnumContactScopeFilter<$PrismaModel> | $Enums.ContactScope
  }

  export type NestedEnumContactTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactType | EnumContactTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactType[]
    notIn?: $Enums.ContactType[]
    not?: NestedEnumContactTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContactType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactTypeFilter<$PrismaModel>
    _max?: NestedEnumContactTypeFilter<$PrismaModel>
  }

  export type NestedEnumContactScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactScope | EnumContactScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ContactScope[]
    notIn?: $Enums.ContactScope[]
    not?: NestedEnumContactScopeWithAggregatesFilter<$PrismaModel> | $Enums.ContactScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContactScopeFilter<$PrismaModel>
    _max?: NestedEnumContactScopeFilter<$PrismaModel>
  }

  export type UserAdGroupCreateWithoutUserInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroup: AdGroupCreateNestedOneWithoutUsersInput
  }

  export type UserAdGroupUncheckedCreateWithoutUserInput = {
    userAdGroupId?: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupCreateOrConnectWithoutUserInput = {
    where: UserAdGroupWhereUniqueInput
    create: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput>
  }

  export type UserAdGroupCreateManyUserInputEnvelope = {
    data: UserAdGroupCreateManyUserInput | UserAdGroupCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAuthCreateWithoutUserInput = {
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAuthUncheckedCreateWithoutUserInput = {
    authId?: number
    email: string
    password: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAuthCreateOrConnectWithoutUserInput = {
    where: UserAuthWhereUniqueInput
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
  }

  export type UserContactCreateWithoutUserInput = {
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserContactUncheckedCreateWithoutUserInput = {
    userContactId?: number
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserContactCreateOrConnectWithoutUserInput = {
    where: UserContactWhereUniqueInput
    create: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
  }

  export type UserContactCreateManyUserInputEnvelope = {
    data: UserContactCreateManyUserInput | UserContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAdGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAdGroupWhereUniqueInput
    update: XOR<UserAdGroupUpdateWithoutUserInput, UserAdGroupUncheckedUpdateWithoutUserInput>
    create: XOR<UserAdGroupCreateWithoutUserInput, UserAdGroupUncheckedCreateWithoutUserInput>
  }

  export type UserAdGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAdGroupWhereUniqueInput
    data: XOR<UserAdGroupUpdateWithoutUserInput, UserAdGroupUncheckedUpdateWithoutUserInput>
  }

  export type UserAdGroupUpdateManyWithWhereWithoutUserInput = {
    where: UserAdGroupScalarWhereInput
    data: XOR<UserAdGroupUpdateManyMutationInput, UserAdGroupUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAdGroupScalarWhereInput = {
    AND?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
    OR?: UserAdGroupScalarWhereInput[]
    NOT?: UserAdGroupScalarWhereInput | UserAdGroupScalarWhereInput[]
    userAdGroupId?: IntFilter<"UserAdGroup"> | number
    userId?: IntFilter<"UserAdGroup"> | number
    adGroupId?: IntFilter<"UserAdGroup"> | number
    createdAt?: DateTimeFilter<"UserAdGroup"> | Date | string
    createdBy?: StringFilter<"UserAdGroup"> | string
    isDeleted?: BoolFilter<"UserAdGroup"> | boolean
  }

  export type UserAuthUpsertWithoutUserInput = {
    update: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
    create: XOR<UserAuthCreateWithoutUserInput, UserAuthUncheckedCreateWithoutUserInput>
    where?: UserAuthWhereInput
  }

  export type UserAuthUpdateToOneWithWhereWithoutUserInput = {
    where?: UserAuthWhereInput
    data: XOR<UserAuthUpdateWithoutUserInput, UserAuthUncheckedUpdateWithoutUserInput>
  }

  export type UserAuthUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAuthUncheckedUpdateWithoutUserInput = {
    authId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactUpsertWithWhereUniqueWithoutUserInput = {
    where: UserContactWhereUniqueInput
    update: XOR<UserContactUpdateWithoutUserInput, UserContactUncheckedUpdateWithoutUserInput>
    create: XOR<UserContactCreateWithoutUserInput, UserContactUncheckedCreateWithoutUserInput>
  }

  export type UserContactUpdateWithWhereUniqueWithoutUserInput = {
    where: UserContactWhereUniqueInput
    data: XOR<UserContactUpdateWithoutUserInput, UserContactUncheckedUpdateWithoutUserInput>
  }

  export type UserContactUpdateManyWithWhereWithoutUserInput = {
    where: UserContactScalarWhereInput
    data: XOR<UserContactUpdateManyMutationInput, UserContactUncheckedUpdateManyWithoutUserInput>
  }

  export type UserContactScalarWhereInput = {
    AND?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
    OR?: UserContactScalarWhereInput[]
    NOT?: UserContactScalarWhereInput | UserContactScalarWhereInput[]
    userContactId?: IntFilter<"UserContact"> | number
    userContactType?: EnumContactTypeFilter<"UserContact"> | $Enums.ContactType
    userContactScope?: EnumContactScopeFilter<"UserContact"> | $Enums.ContactScope
    userContactValue?: StringFilter<"UserContact"> | string
    createdAt?: DateTimeFilter<"UserContact"> | Date | string
    createdBy?: StringFilter<"UserContact"> | string
    isDeleted?: BoolFilter<"UserContact"> | boolean
    userId?: IntFilter<"UserContact"> | number
  }

  export type UserCreateWithoutContactsInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupCreateNestedManyWithoutUserInput
    auth?: UserAuthCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactsInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupUncheckedCreateNestedManyWithoutUserInput
    auth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
  }

  export type UserUpsertWithoutContactsInput = {
    update: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
    create: XOR<UserCreateWithoutContactsInput, UserUncheckedCreateWithoutContactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactsInput, UserUncheckedUpdateWithoutContactsInput>
  }

  export type UserUpdateWithoutContactsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUpdateManyWithoutUserNestedInput
    auth?: UserAuthUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUncheckedUpdateManyWithoutUserNestedInput
    auth?: UserAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupCreateNestedManyWithoutUserInput
    contacts?: UserContactCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    adGroups?: UserAdGroupUncheckedCreateNestedManyWithoutUserInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
  }

  export type UserUpsertWithoutAuthInput = {
    update: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserUpdateWithoutAuthInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUpdateManyWithoutUserNestedInput
    contacts?: UserContactUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroups?: UserAdGroupUncheckedUpdateManyWithoutUserNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAdGroupCreateWithoutAdGroupInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutAdGroupsInput
  }

  export type UserAdGroupUncheckedCreateWithoutAdGroupInput = {
    userAdGroupId?: number
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupCreateOrConnectWithoutAdGroupInput = {
    where: UserAdGroupWhereUniqueInput
    create: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput>
  }

  export type UserAdGroupCreateManyAdGroupInputEnvelope = {
    data: UserAdGroupCreateManyAdGroupInput | UserAdGroupCreateManyAdGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserAdGroupUpsertWithWhereUniqueWithoutAdGroupInput = {
    where: UserAdGroupWhereUniqueInput
    update: XOR<UserAdGroupUpdateWithoutAdGroupInput, UserAdGroupUncheckedUpdateWithoutAdGroupInput>
    create: XOR<UserAdGroupCreateWithoutAdGroupInput, UserAdGroupUncheckedCreateWithoutAdGroupInput>
  }

  export type UserAdGroupUpdateWithWhereUniqueWithoutAdGroupInput = {
    where: UserAdGroupWhereUniqueInput
    data: XOR<UserAdGroupUpdateWithoutAdGroupInput, UserAdGroupUncheckedUpdateWithoutAdGroupInput>
  }

  export type UserAdGroupUpdateManyWithWhereWithoutAdGroupInput = {
    where: UserAdGroupScalarWhereInput
    data: XOR<UserAdGroupUpdateManyMutationInput, UserAdGroupUncheckedUpdateManyWithoutAdGroupInput>
  }

  export type AdGroupCreateWithoutUsersInput = {
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupUncheckedCreateWithoutUsersInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
  }

  export type AdGroupCreateOrConnectWithoutUsersInput = {
    where: AdGroupWhereUniqueInput
    create: XOR<AdGroupCreateWithoutUsersInput, AdGroupUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutAdGroupsInput = {
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    auth?: UserAuthCreateNestedOneWithoutUserInput
    contacts?: UserContactCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdGroupsInput = {
    userId?: number
    userName: string
    userSurname: string
    userCode: string
    isActive?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    auth?: UserAuthUncheckedCreateNestedOneWithoutUserInput
    contacts?: UserContactUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdGroupsInput, UserUncheckedCreateWithoutAdGroupsInput>
  }

  export type AdGroupUpsertWithoutUsersInput = {
    update: XOR<AdGroupUpdateWithoutUsersInput, AdGroupUncheckedUpdateWithoutUsersInput>
    create: XOR<AdGroupCreateWithoutUsersInput, AdGroupUncheckedCreateWithoutUsersInput>
    where?: AdGroupWhereInput
  }

  export type AdGroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: AdGroupWhereInput
    data: XOR<AdGroupUpdateWithoutUsersInput, AdGroupUncheckedUpdateWithoutUsersInput>
  }

  export type AdGroupUpdateWithoutUsersInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type AdGroupUncheckedUpdateWithoutUsersInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutAdGroupsInput = {
    update: XOR<UserUpdateWithoutAdGroupsInput, UserUncheckedUpdateWithoutAdGroupsInput>
    create: XOR<UserCreateWithoutAdGroupsInput, UserUncheckedCreateWithoutAdGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdGroupsInput, UserUncheckedUpdateWithoutAdGroupsInput>
  }

  export type UserUpdateWithoutAdGroupsInput = {
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    auth?: UserAuthUpdateOneWithoutUserNestedInput
    contacts?: UserContactUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdGroupsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userSurname?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    auth?: UserAuthUncheckedUpdateOneWithoutUserNestedInput
    contacts?: UserContactUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAdGroupCreateManyUserInput = {
    userAdGroupId?: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserContactCreateManyUserInput = {
    userContactId?: number
    userContactType: $Enums.ContactType
    userContactScope: $Enums.ContactScope
    userContactValue: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroup?: AdGroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserAdGroupUncheckedUpdateWithoutUserInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAdGroupUncheckedUpdateManyWithoutUserInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    adGroupId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactUpdateWithoutUserInput = {
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactUncheckedUpdateWithoutUserInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserContactUncheckedUpdateManyWithoutUserInput = {
    userContactId?: IntFieldUpdateOperationsInput | number
    userContactType?: EnumContactTypeFieldUpdateOperationsInput | $Enums.ContactType
    userContactScope?: EnumContactScopeFieldUpdateOperationsInput | $Enums.ContactScope
    userContactValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAdGroupCreateManyAdGroupInput = {
    userAdGroupId?: number
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UserAdGroupUpdateWithoutAdGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutAdGroupsNestedInput
  }

  export type UserAdGroupUncheckedUpdateWithoutAdGroupInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserAdGroupUncheckedUpdateManyWithoutAdGroupInput = {
    userAdGroupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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