
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
 * Model Editions
 * 
 */
export type Editions = $Result.DefaultSelection<Prisma.$EditionsPayload>
/**
 * Model EditionsStatuses
 * 
 */
export type EditionsStatuses = $Result.DefaultSelection<Prisma.$EditionsStatusesPayload>
/**
 * Model Shows
 * 
 */
export type Shows = $Result.DefaultSelection<Prisma.$ShowsPayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model ShowsStatuses
 * 
 */
export type ShowsStatuses = $Result.DefaultSelection<Prisma.$ShowsStatusesPayload>
/**
 * Model ArtistsManagementsCategories
 * 
 */
export type ArtistsManagementsCategories = $Result.DefaultSelection<Prisma.$ArtistsManagementsCategoriesPayload>
/**
 * Model ArtistsManagements
 * 
 */
export type ArtistsManagements = $Result.DefaultSelection<Prisma.$ArtistsManagementsPayload>
/**
 * Model ArtistsArtistsManagements
 * 
 */
export type ArtistsArtistsManagements = $Result.DefaultSelection<Prisma.$ArtistsArtistsManagementsPayload>
/**
 * Model Performances
 * 
 */
export type Performances = $Result.DefaultSelection<Prisma.$PerformancesPayload>
/**
 * Model Contracts
 * 
 */
export type Contracts = $Result.DefaultSelection<Prisma.$ContractsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UsersAuth
 * 
 */
export type UsersAuth = $Result.DefaultSelection<Prisma.$UsersAuthPayload>
/**
 * Model Languages
 * 
 */
export type Languages = $Result.DefaultSelection<Prisma.$LanguagesPayload>
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
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Editions
 * const editions = await prisma.editions.findMany()
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
   * // Fetch zero or more Editions
   * const editions = await prisma.editions.findMany()
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
   * `prisma.editions`: Exposes CRUD operations for the **Editions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editions
    * const editions = await prisma.editions.findMany()
    * ```
    */
  get editions(): Prisma.EditionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editionsStatuses`: Exposes CRUD operations for the **EditionsStatuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EditionsStatuses
    * const editionsStatuses = await prisma.editionsStatuses.findMany()
    * ```
    */
  get editionsStatuses(): Prisma.EditionsStatusesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shows`: Exposes CRUD operations for the **Shows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.shows.findMany()
    * ```
    */
  get shows(): Prisma.ShowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showsStatuses`: Exposes CRUD operations for the **ShowsStatuses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowsStatuses
    * const showsStatuses = await prisma.showsStatuses.findMany()
    * ```
    */
  get showsStatuses(): Prisma.ShowsStatusesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistsManagementsCategories`: Exposes CRUD operations for the **ArtistsManagementsCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistsManagementsCategories
    * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findMany()
    * ```
    */
  get artistsManagementsCategories(): Prisma.ArtistsManagementsCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistsManagements`: Exposes CRUD operations for the **ArtistsManagements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistsManagements
    * const artistsManagements = await prisma.artistsManagements.findMany()
    * ```
    */
  get artistsManagements(): Prisma.ArtistsManagementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistsArtistsManagements`: Exposes CRUD operations for the **ArtistsArtistsManagements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistsArtistsManagements
    * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findMany()
    * ```
    */
  get artistsArtistsManagements(): Prisma.ArtistsArtistsManagementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performances`: Exposes CRUD operations for the **Performances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Performances
    * const performances = await prisma.performances.findMany()
    * ```
    */
  get performances(): Prisma.PerformancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contracts`: Exposes CRUD operations for the **Contracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contracts.findMany()
    * ```
    */
  get contracts(): Prisma.ContractsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.usersAuth`: Exposes CRUD operations for the **UsersAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersAuths
    * const usersAuths = await prisma.usersAuth.findMany()
    * ```
    */
  get usersAuth(): Prisma.UsersAuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.LanguagesDelegate<ExtArgs, ClientOptions>;

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
    Editions: 'Editions',
    EditionsStatuses: 'EditionsStatuses',
    Shows: 'Shows',
    Artists: 'Artists',
    ShowsStatuses: 'ShowsStatuses',
    ArtistsManagementsCategories: 'ArtistsManagementsCategories',
    ArtistsManagements: 'ArtistsManagements',
    ArtistsArtistsManagements: 'ArtistsArtistsManagements',
    Performances: 'Performances',
    Contracts: 'Contracts',
    Users: 'Users',
    UsersAuth: 'UsersAuth',
    Languages: 'Languages',
    AdGroups: 'AdGroups',
    UsersAdGroups: 'UsersAdGroups'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db_hellfest_preprod?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "editions" | "editionsStatuses" | "shows" | "artists" | "showsStatuses" | "artistsManagementsCategories" | "artistsManagements" | "artistsArtistsManagements" | "performances" | "contracts" | "users" | "usersAuth" | "languages" | "adGroups" | "usersAdGroups"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Editions: {
        payload: Prisma.$EditionsPayload<ExtArgs>
        fields: Prisma.EditionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          findFirst: {
            args: Prisma.EditionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          findMany: {
            args: Prisma.EditionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>[]
          }
          create: {
            args: Prisma.EditionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          createMany: {
            args: Prisma.EditionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EditionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          update: {
            args: Prisma.EditionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          deleteMany: {
            args: Prisma.EditionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EditionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsPayload>
          }
          aggregate: {
            args: Prisma.EditionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditions>
          }
          groupBy: {
            args: Prisma.EditionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditionsCountArgs<ExtArgs>
            result: $Utils.Optional<EditionsCountAggregateOutputType> | number
          }
        }
      }
      EditionsStatuses: {
        payload: Prisma.$EditionsStatusesPayload<ExtArgs>
        fields: Prisma.EditionsStatusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditionsStatusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditionsStatusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          findFirst: {
            args: Prisma.EditionsStatusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditionsStatusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          findMany: {
            args: Prisma.EditionsStatusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>[]
          }
          create: {
            args: Prisma.EditionsStatusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          createMany: {
            args: Prisma.EditionsStatusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EditionsStatusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          update: {
            args: Prisma.EditionsStatusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          deleteMany: {
            args: Prisma.EditionsStatusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditionsStatusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EditionsStatusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditionsStatusesPayload>
          }
          aggregate: {
            args: Prisma.EditionsStatusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditionsStatuses>
          }
          groupBy: {
            args: Prisma.EditionsStatusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditionsStatusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditionsStatusesCountArgs<ExtArgs>
            result: $Utils.Optional<EditionsStatusesCountAggregateOutputType> | number
          }
        }
      }
      Shows: {
        payload: Prisma.$ShowsPayload<ExtArgs>
        fields: Prisma.ShowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          findFirst: {
            args: Prisma.ShowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          findMany: {
            args: Prisma.ShowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>[]
          }
          create: {
            args: Prisma.ShowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          createMany: {
            args: Prisma.ShowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          update: {
            args: Prisma.ShowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          deleteMany: {
            args: Prisma.ShowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsPayload>
          }
          aggregate: {
            args: Prisma.ShowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShows>
          }
          groupBy: {
            args: Prisma.ShowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowsCountArgs<ExtArgs>
            result: $Utils.Optional<ShowsCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      ShowsStatuses: {
        payload: Prisma.$ShowsStatusesPayload<ExtArgs>
        fields: Prisma.ShowsStatusesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowsStatusesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowsStatusesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          findFirst: {
            args: Prisma.ShowsStatusesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowsStatusesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          findMany: {
            args: Prisma.ShowsStatusesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>[]
          }
          create: {
            args: Prisma.ShowsStatusesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          createMany: {
            args: Prisma.ShowsStatusesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShowsStatusesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          update: {
            args: Prisma.ShowsStatusesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          deleteMany: {
            args: Prisma.ShowsStatusesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowsStatusesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShowsStatusesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowsStatusesPayload>
          }
          aggregate: {
            args: Prisma.ShowsStatusesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowsStatuses>
          }
          groupBy: {
            args: Prisma.ShowsStatusesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowsStatusesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowsStatusesCountArgs<ExtArgs>
            result: $Utils.Optional<ShowsStatusesCountAggregateOutputType> | number
          }
        }
      }
      ArtistsManagementsCategories: {
        payload: Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>
        fields: Prisma.ArtistsManagementsCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsManagementsCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsManagementsCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          findFirst: {
            args: Prisma.ArtistsManagementsCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsManagementsCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          findMany: {
            args: Prisma.ArtistsManagementsCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>[]
          }
          create: {
            args: Prisma.ArtistsManagementsCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          createMany: {
            args: Prisma.ArtistsManagementsCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistsManagementsCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          update: {
            args: Prisma.ArtistsManagementsCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsManagementsCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsManagementsCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsManagementsCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsCategoriesPayload>
          }
          aggregate: {
            args: Prisma.ArtistsManagementsCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistsManagementsCategories>
          }
          groupBy: {
            args: Prisma.ArtistsManagementsCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsManagementsCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsManagementsCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsManagementsCategoriesCountAggregateOutputType> | number
          }
        }
      }
      ArtistsManagements: {
        payload: Prisma.$ArtistsManagementsPayload<ExtArgs>
        fields: Prisma.ArtistsManagementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsManagementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsManagementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsManagementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsManagementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          findMany: {
            args: Prisma.ArtistsManagementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>[]
          }
          create: {
            args: Prisma.ArtistsManagementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          createMany: {
            args: Prisma.ArtistsManagementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistsManagementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          update: {
            args: Prisma.ArtistsManagementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsManagementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsManagementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsManagementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsManagementsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsManagementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistsManagements>
          }
          groupBy: {
            args: Prisma.ArtistsManagementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsManagementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsManagementsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsManagementsCountAggregateOutputType> | number
          }
        }
      }
      ArtistsArtistsManagements: {
        payload: Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>
        fields: Prisma.ArtistsArtistsManagementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsArtistsManagementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsArtistsManagementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsArtistsManagementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsArtistsManagementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          findMany: {
            args: Prisma.ArtistsArtistsManagementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>[]
          }
          create: {
            args: Prisma.ArtistsArtistsManagementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          createMany: {
            args: Prisma.ArtistsArtistsManagementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArtistsArtistsManagementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          update: {
            args: Prisma.ArtistsArtistsManagementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsArtistsManagementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsArtistsManagementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsArtistsManagementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsArtistsManagementsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsArtistsManagementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistsArtistsManagements>
          }
          groupBy: {
            args: Prisma.ArtistsArtistsManagementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsArtistsManagementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsArtistsManagementsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsArtistsManagementsCountAggregateOutputType> | number
          }
        }
      }
      Performances: {
        payload: Prisma.$PerformancesPayload<ExtArgs>
        fields: Prisma.PerformancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          findFirst: {
            args: Prisma.PerformancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          findMany: {
            args: Prisma.PerformancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>[]
          }
          create: {
            args: Prisma.PerformancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          createMany: {
            args: Prisma.PerformancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PerformancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          update: {
            args: Prisma.PerformancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          deleteMany: {
            args: Prisma.PerformancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerformancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformancesPayload>
          }
          aggregate: {
            args: Prisma.PerformancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformances>
          }
          groupBy: {
            args: Prisma.PerformancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformancesCountArgs<ExtArgs>
            result: $Utils.Optional<PerformancesCountAggregateOutputType> | number
          }
        }
      }
      Contracts: {
        payload: Prisma.$ContractsPayload<ExtArgs>
        fields: Prisma.ContractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findFirst: {
            args: Prisma.ContractsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findMany: {
            args: Prisma.ContractsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>[]
          }
          create: {
            args: Prisma.ContractsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          createMany: {
            args: Prisma.ContractsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContractsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          update: {
            args: Prisma.ContractsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          deleteMany: {
            args: Prisma.ContractsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContractsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          aggregate: {
            args: Prisma.ContractsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContracts>
          }
          groupBy: {
            args: Prisma.ContractsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractsCountArgs<ExtArgs>
            result: $Utils.Optional<ContractsCountAggregateOutputType> | number
          }
        }
      }
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
    editions?: EditionsOmit
    editionsStatuses?: EditionsStatusesOmit
    shows?: ShowsOmit
    artists?: ArtistsOmit
    showsStatuses?: ShowsStatusesOmit
    artistsManagementsCategories?: ArtistsManagementsCategoriesOmit
    artistsManagements?: ArtistsManagementsOmit
    artistsArtistsManagements?: ArtistsArtistsManagementsOmit
    performances?: PerformancesOmit
    contracts?: ContractsOmit
    users?: UsersOmit
    usersAuth?: UsersAuthOmit
    languages?: LanguagesOmit
    adGroups?: AdGroupsOmit
    usersAdGroups?: UsersAdGroupsOmit
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
   * Count Type EditionsCountOutputType
   */

  export type EditionsCountOutputType = {
    shows: number
    performances: number
  }

  export type EditionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | EditionsCountOutputTypeCountShowsArgs
    performances?: boolean | EditionsCountOutputTypeCountPerformancesArgs
  }

  // Custom InputTypes
  /**
   * EditionsCountOutputType without action
   */
  export type EditionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsCountOutputType
     */
    select?: EditionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditionsCountOutputType without action
   */
  export type EditionsCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowsWhereInput
  }

  /**
   * EditionsCountOutputType without action
   */
  export type EditionsCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformancesWhereInput
  }


  /**
   * Count Type EditionsStatusesCountOutputType
   */

  export type EditionsStatusesCountOutputType = {
    editions: number
  }

  export type EditionsStatusesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editions?: boolean | EditionsStatusesCountOutputTypeCountEditionsArgs
  }

  // Custom InputTypes
  /**
   * EditionsStatusesCountOutputType without action
   */
  export type EditionsStatusesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatusesCountOutputType
     */
    select?: EditionsStatusesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditionsStatusesCountOutputType without action
   */
  export type EditionsStatusesCountOutputTypeCountEditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditionsWhereInput
  }


  /**
   * Count Type ShowsCountOutputType
   */

  export type ShowsCountOutputType = {
    performances: number
  }

  export type ShowsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | ShowsCountOutputTypeCountPerformancesArgs
  }

  // Custom InputTypes
  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsCountOutputType
     */
    select?: ShowsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowsCountOutputType without action
   */
  export type ShowsCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformancesWhereInput
  }


  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    artistsManagements: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistsManagements?: boolean | ArtistsCountOutputTypeCountArtistsManagementsArgs
  }

  // Custom InputTypes
  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountArtistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsArtistsManagementsWhereInput
  }


  /**
   * Count Type ShowsStatusesCountOutputType
   */

  export type ShowsStatusesCountOutputType = {
    shows: number
  }

  export type ShowsStatusesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ShowsStatusesCountOutputTypeCountShowsArgs
  }

  // Custom InputTypes
  /**
   * ShowsStatusesCountOutputType without action
   */
  export type ShowsStatusesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatusesCountOutputType
     */
    select?: ShowsStatusesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowsStatusesCountOutputType without action
   */
  export type ShowsStatusesCountOutputTypeCountShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowsWhereInput
  }


  /**
   * Count Type ArtistsManagementsCategoriesCountOutputType
   */

  export type ArtistsManagementsCategoriesCountOutputType = {
    artistsManagements: number
  }

  export type ArtistsManagementsCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistsManagements?: boolean | ArtistsManagementsCategoriesCountOutputTypeCountArtistsManagementsArgs
  }

  // Custom InputTypes
  /**
   * ArtistsManagementsCategoriesCountOutputType without action
   */
  export type ArtistsManagementsCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategoriesCountOutputType
     */
    select?: ArtistsManagementsCategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsManagementsCategoriesCountOutputType without action
   */
  export type ArtistsManagementsCategoriesCountOutputTypeCountArtistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsManagementsWhereInput
  }


  /**
   * Count Type ArtistsManagementsCountOutputType
   */

  export type ArtistsManagementsCountOutputType = {
    artistsArtistsManagements: number
  }

  export type ArtistsManagementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistsArtistsManagements?: boolean | ArtistsManagementsCountOutputTypeCountArtistsArtistsManagementsArgs
  }

  // Custom InputTypes
  /**
   * ArtistsManagementsCountOutputType without action
   */
  export type ArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCountOutputType
     */
    select?: ArtistsManagementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsManagementsCountOutputType without action
   */
  export type ArtistsManagementsCountOutputTypeCountArtistsArtistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsArtistsManagementsWhereInput
  }


  /**
   * Count Type ArtistsArtistsManagementsCountOutputType
   */

  export type ArtistsArtistsManagementsCountOutputType = {
    performances: number
  }

  export type ArtistsArtistsManagementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performances?: boolean | ArtistsArtistsManagementsCountOutputTypeCountPerformancesArgs
  }

  // Custom InputTypes
  /**
   * ArtistsArtistsManagementsCountOutputType without action
   */
  export type ArtistsArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagementsCountOutputType
     */
    select?: ArtistsArtistsManagementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsArtistsManagementsCountOutputType without action
   */
  export type ArtistsArtistsManagementsCountOutputTypeCountPerformancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformancesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    userGroups: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | UsersCountOutputTypeCountUserGroupsArgs
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
  export type UsersCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Count Type AdGroupsCountOutputType
   */

  export type AdGroupsCountOutputType = {
    userGroups: number
  }

  export type AdGroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | AdGroupsCountOutputTypeCountUserGroupsArgs
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
  export type AdGroupsCountOutputTypeCountUserGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersAdGroupsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Editions
   */

  export type AggregateEditions = {
    _count: EditionsCountAggregateOutputType | null
    _avg: EditionsAvgAggregateOutputType | null
    _sum: EditionsSumAggregateOutputType | null
    _min: EditionsMinAggregateOutputType | null
    _max: EditionsMaxAggregateOutputType | null
  }

  export type EditionsAvgAggregateOutputType = {
    editionId: number | null
    editionYear: number | null
    editionStatusId: number | null
  }

  export type EditionsSumAggregateOutputType = {
    editionId: number | null
    editionYear: number | null
    editionStatusId: number | null
  }

  export type EditionsMinAggregateOutputType = {
    editionId: number | null
    editionName: string | null
    editionYear: number | null
    isCurrentedition: boolean | null
    editionStatusId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type EditionsMaxAggregateOutputType = {
    editionId: number | null
    editionName: string | null
    editionYear: number | null
    isCurrentedition: boolean | null
    editionStatusId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type EditionsCountAggregateOutputType = {
    editionId: number
    editionName: number
    editionYear: number
    isCurrentedition: number
    editionStatusId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type EditionsAvgAggregateInputType = {
    editionId?: true
    editionYear?: true
    editionStatusId?: true
  }

  export type EditionsSumAggregateInputType = {
    editionId?: true
    editionYear?: true
    editionStatusId?: true
  }

  export type EditionsMinAggregateInputType = {
    editionId?: true
    editionName?: true
    editionYear?: true
    isCurrentedition?: true
    editionStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type EditionsMaxAggregateInputType = {
    editionId?: true
    editionName?: true
    editionYear?: true
    isCurrentedition?: true
    editionStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type EditionsCountAggregateInputType = {
    editionId?: true
    editionName?: true
    editionYear?: true
    isCurrentedition?: true
    editionStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type EditionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editions to aggregate.
     */
    where?: EditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionsOrderByWithRelationInput | EditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Editions
    **/
    _count?: true | EditionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditionsMaxAggregateInputType
  }

  export type GetEditionsAggregateType<T extends EditionsAggregateArgs> = {
        [P in keyof T & keyof AggregateEditions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditions[P]>
      : GetScalarType<T[P], AggregateEditions[P]>
  }




  export type EditionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditionsWhereInput
    orderBy?: EditionsOrderByWithAggregationInput | EditionsOrderByWithAggregationInput[]
    by: EditionsScalarFieldEnum[] | EditionsScalarFieldEnum
    having?: EditionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditionsCountAggregateInputType | true
    _avg?: EditionsAvgAggregateInputType
    _sum?: EditionsSumAggregateInputType
    _min?: EditionsMinAggregateInputType
    _max?: EditionsMaxAggregateInputType
  }

  export type EditionsGroupByOutputType = {
    editionId: number
    editionName: string
    editionYear: number
    isCurrentedition: boolean
    editionStatusId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: EditionsCountAggregateOutputType | null
    _avg: EditionsAvgAggregateOutputType | null
    _sum: EditionsSumAggregateOutputType | null
    _min: EditionsMinAggregateOutputType | null
    _max: EditionsMaxAggregateOutputType | null
  }

  type GetEditionsGroupByPayload<T extends EditionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditionsGroupByOutputType[P]>
            : GetScalarType<T[P], EditionsGroupByOutputType[P]>
        }
      >
    >


  export type EditionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    editionId?: boolean
    editionName?: boolean
    editionYear?: boolean
    isCurrentedition?: boolean
    editionStatusId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    editionStatus?: boolean | EditionsStatusesDefaultArgs<ExtArgs>
    shows?: boolean | Editions$showsArgs<ExtArgs>
    performances?: boolean | Editions$performancesArgs<ExtArgs>
    _count?: boolean | EditionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editions"]>



  export type EditionsSelectScalar = {
    editionId?: boolean
    editionName?: boolean
    editionYear?: boolean
    isCurrentedition?: boolean
    editionStatusId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type EditionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"editionId" | "editionName" | "editionYear" | "isCurrentedition" | "editionStatusId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["editions"]>
  export type EditionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editionStatus?: boolean | EditionsStatusesDefaultArgs<ExtArgs>
    shows?: boolean | Editions$showsArgs<ExtArgs>
    performances?: boolean | Editions$performancesArgs<ExtArgs>
    _count?: boolean | EditionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EditionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Editions"
    objects: {
      editionStatus: Prisma.$EditionsStatusesPayload<ExtArgs>
      shows: Prisma.$ShowsPayload<ExtArgs>[]
      performances: Prisma.$PerformancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      editionId: number
      editionName: string
      editionYear: number
      isCurrentedition: boolean
      editionStatusId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["editions"]>
    composites: {}
  }

  type EditionsGetPayload<S extends boolean | null | undefined | EditionsDefaultArgs> = $Result.GetResult<Prisma.$EditionsPayload, S>

  type EditionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditionsCountAggregateInputType | true
    }

  export interface EditionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Editions'], meta: { name: 'Editions' } }
    /**
     * Find zero or one Editions that matches the filter.
     * @param {EditionsFindUniqueArgs} args - Arguments to find a Editions
     * @example
     * // Get one Editions
     * const editions = await prisma.editions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditionsFindUniqueArgs>(args: SelectSubset<T, EditionsFindUniqueArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Editions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditionsFindUniqueOrThrowArgs} args - Arguments to find a Editions
     * @example
     * // Get one Editions
     * const editions = await prisma.editions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditionsFindUniqueOrThrowArgs>(args: SelectSubset<T, EditionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsFindFirstArgs} args - Arguments to find a Editions
     * @example
     * // Get one Editions
     * const editions = await prisma.editions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditionsFindFirstArgs>(args?: SelectSubset<T, EditionsFindFirstArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsFindFirstOrThrowArgs} args - Arguments to find a Editions
     * @example
     * // Get one Editions
     * const editions = await prisma.editions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditionsFindFirstOrThrowArgs>(args?: SelectSubset<T, EditionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editions
     * const editions = await prisma.editions.findMany()
     * 
     * // Get first 10 Editions
     * const editions = await prisma.editions.findMany({ take: 10 })
     * 
     * // Only select the `editionId`
     * const editionsWithEditionIdOnly = await prisma.editions.findMany({ select: { editionId: true } })
     * 
     */
    findMany<T extends EditionsFindManyArgs>(args?: SelectSubset<T, EditionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Editions.
     * @param {EditionsCreateArgs} args - Arguments to create a Editions.
     * @example
     * // Create one Editions
     * const Editions = await prisma.editions.create({
     *   data: {
     *     // ... data to create a Editions
     *   }
     * })
     * 
     */
    create<T extends EditionsCreateArgs>(args: SelectSubset<T, EditionsCreateArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editions.
     * @param {EditionsCreateManyArgs} args - Arguments to create many Editions.
     * @example
     * // Create many Editions
     * const editions = await prisma.editions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditionsCreateManyArgs>(args?: SelectSubset<T, EditionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Editions.
     * @param {EditionsDeleteArgs} args - Arguments to delete one Editions.
     * @example
     * // Delete one Editions
     * const Editions = await prisma.editions.delete({
     *   where: {
     *     // ... filter to delete one Editions
     *   }
     * })
     * 
     */
    delete<T extends EditionsDeleteArgs>(args: SelectSubset<T, EditionsDeleteArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Editions.
     * @param {EditionsUpdateArgs} args - Arguments to update one Editions.
     * @example
     * // Update one Editions
     * const editions = await prisma.editions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditionsUpdateArgs>(args: SelectSubset<T, EditionsUpdateArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editions.
     * @param {EditionsDeleteManyArgs} args - Arguments to filter Editions to delete.
     * @example
     * // Delete a few Editions
     * const { count } = await prisma.editions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditionsDeleteManyArgs>(args?: SelectSubset<T, EditionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editions
     * const editions = await prisma.editions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditionsUpdateManyArgs>(args: SelectSubset<T, EditionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Editions.
     * @param {EditionsUpsertArgs} args - Arguments to update or create a Editions.
     * @example
     * // Update or create a Editions
     * const editions = await prisma.editions.upsert({
     *   create: {
     *     // ... data to create a Editions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Editions we want to update
     *   }
     * })
     */
    upsert<T extends EditionsUpsertArgs>(args: SelectSubset<T, EditionsUpsertArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsCountArgs} args - Arguments to filter Editions to count.
     * @example
     * // Count the number of Editions
     * const count = await prisma.editions.count({
     *   where: {
     *     // ... the filter for the Editions we want to count
     *   }
     * })
    **/
    count<T extends EditionsCountArgs>(
      args?: Subset<T, EditionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EditionsAggregateArgs>(args: Subset<T, EditionsAggregateArgs>): Prisma.PrismaPromise<GetEditionsAggregateType<T>>

    /**
     * Group by Editions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsGroupByArgs} args - Group by arguments.
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
      T extends EditionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditionsGroupByArgs['orderBy'] }
        : { orderBy?: EditionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EditionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Editions model
   */
  readonly fields: EditionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Editions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    editionStatus<T extends EditionsStatusesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditionsStatusesDefaultArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shows<T extends Editions$showsArgs<ExtArgs> = {}>(args?: Subset<T, Editions$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performances<T extends Editions$performancesArgs<ExtArgs> = {}>(args?: Subset<T, Editions$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Editions model
   */
  interface EditionsFieldRefs {
    readonly editionId: FieldRef<"Editions", 'Int'>
    readonly editionName: FieldRef<"Editions", 'String'>
    readonly editionYear: FieldRef<"Editions", 'Int'>
    readonly isCurrentedition: FieldRef<"Editions", 'Boolean'>
    readonly editionStatusId: FieldRef<"Editions", 'Int'>
    readonly createdAt: FieldRef<"Editions", 'DateTime'>
    readonly createdBy: FieldRef<"Editions", 'String'>
    readonly isDeleted: FieldRef<"Editions", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Editions findUnique
   */
  export type EditionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where: EditionsWhereUniqueInput
  }

  /**
   * Editions findUniqueOrThrow
   */
  export type EditionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where: EditionsWhereUniqueInput
  }

  /**
   * Editions findFirst
   */
  export type EditionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where?: EditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionsOrderByWithRelationInput | EditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editions.
     */
    cursor?: EditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editions.
     */
    distinct?: EditionsScalarFieldEnum | EditionsScalarFieldEnum[]
  }

  /**
   * Editions findFirstOrThrow
   */
  export type EditionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where?: EditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionsOrderByWithRelationInput | EditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Editions.
     */
    cursor?: EditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Editions.
     */
    distinct?: EditionsScalarFieldEnum | EditionsScalarFieldEnum[]
  }

  /**
   * Editions findMany
   */
  export type EditionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter, which Editions to fetch.
     */
    where?: EditionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Editions to fetch.
     */
    orderBy?: EditionsOrderByWithRelationInput | EditionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Editions.
     */
    cursor?: EditionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Editions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Editions.
     */
    skip?: number
    distinct?: EditionsScalarFieldEnum | EditionsScalarFieldEnum[]
  }

  /**
   * Editions create
   */
  export type EditionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Editions.
     */
    data: XOR<EditionsCreateInput, EditionsUncheckedCreateInput>
  }

  /**
   * Editions createMany
   */
  export type EditionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Editions.
     */
    data: EditionsCreateManyInput | EditionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Editions update
   */
  export type EditionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Editions.
     */
    data: XOR<EditionsUpdateInput, EditionsUncheckedUpdateInput>
    /**
     * Choose, which Editions to update.
     */
    where: EditionsWhereUniqueInput
  }

  /**
   * Editions updateMany
   */
  export type EditionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Editions.
     */
    data: XOR<EditionsUpdateManyMutationInput, EditionsUncheckedUpdateManyInput>
    /**
     * Filter which Editions to update
     */
    where?: EditionsWhereInput
    /**
     * Limit how many Editions to update.
     */
    limit?: number
  }

  /**
   * Editions upsert
   */
  export type EditionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Editions to update in case it exists.
     */
    where: EditionsWhereUniqueInput
    /**
     * In case the Editions found by the `where` argument doesn't exist, create a new Editions with this data.
     */
    create: XOR<EditionsCreateInput, EditionsUncheckedCreateInput>
    /**
     * In case the Editions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditionsUpdateInput, EditionsUncheckedUpdateInput>
  }

  /**
   * Editions delete
   */
  export type EditionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    /**
     * Filter which Editions to delete.
     */
    where: EditionsWhereUniqueInput
  }

  /**
   * Editions deleteMany
   */
  export type EditionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Editions to delete
     */
    where?: EditionsWhereInput
    /**
     * Limit how many Editions to delete.
     */
    limit?: number
  }

  /**
   * Editions.shows
   */
  export type Editions$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    where?: ShowsWhereInput
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    cursor?: ShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Editions.performances
   */
  export type Editions$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    where?: PerformancesWhereInput
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    cursor?: PerformancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * Editions without action
   */
  export type EditionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
  }


  /**
   * Model EditionsStatuses
   */

  export type AggregateEditionsStatuses = {
    _count: EditionsStatusesCountAggregateOutputType | null
    _avg: EditionsStatusesAvgAggregateOutputType | null
    _sum: EditionsStatusesSumAggregateOutputType | null
    _min: EditionsStatusesMinAggregateOutputType | null
    _max: EditionsStatusesMaxAggregateOutputType | null
  }

  export type EditionsStatusesAvgAggregateOutputType = {
    editionStatusId: number | null
  }

  export type EditionsStatusesSumAggregateOutputType = {
    editionStatusId: number | null
  }

  export type EditionsStatusesMinAggregateOutputType = {
    editionStatusId: number | null
    editionStatusCode: string | null
    editionStatusName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type EditionsStatusesMaxAggregateOutputType = {
    editionStatusId: number | null
    editionStatusCode: string | null
    editionStatusName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type EditionsStatusesCountAggregateOutputType = {
    editionStatusId: number
    editionStatusCode: number
    editionStatusName: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type EditionsStatusesAvgAggregateInputType = {
    editionStatusId?: true
  }

  export type EditionsStatusesSumAggregateInputType = {
    editionStatusId?: true
  }

  export type EditionsStatusesMinAggregateInputType = {
    editionStatusId?: true
    editionStatusCode?: true
    editionStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type EditionsStatusesMaxAggregateInputType = {
    editionStatusId?: true
    editionStatusCode?: true
    editionStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type EditionsStatusesCountAggregateInputType = {
    editionStatusId?: true
    editionStatusCode?: true
    editionStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type EditionsStatusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditionsStatuses to aggregate.
     */
    where?: EditionsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditionsStatuses to fetch.
     */
    orderBy?: EditionsStatusesOrderByWithRelationInput | EditionsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditionsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditionsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditionsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EditionsStatuses
    **/
    _count?: true | EditionsStatusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditionsStatusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditionsStatusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditionsStatusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditionsStatusesMaxAggregateInputType
  }

  export type GetEditionsStatusesAggregateType<T extends EditionsStatusesAggregateArgs> = {
        [P in keyof T & keyof AggregateEditionsStatuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditionsStatuses[P]>
      : GetScalarType<T[P], AggregateEditionsStatuses[P]>
  }




  export type EditionsStatusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditionsStatusesWhereInput
    orderBy?: EditionsStatusesOrderByWithAggregationInput | EditionsStatusesOrderByWithAggregationInput[]
    by: EditionsStatusesScalarFieldEnum[] | EditionsStatusesScalarFieldEnum
    having?: EditionsStatusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditionsStatusesCountAggregateInputType | true
    _avg?: EditionsStatusesAvgAggregateInputType
    _sum?: EditionsStatusesSumAggregateInputType
    _min?: EditionsStatusesMinAggregateInputType
    _max?: EditionsStatusesMaxAggregateInputType
  }

  export type EditionsStatusesGroupByOutputType = {
    editionStatusId: number
    editionStatusCode: string
    editionStatusName: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: EditionsStatusesCountAggregateOutputType | null
    _avg: EditionsStatusesAvgAggregateOutputType | null
    _sum: EditionsStatusesSumAggregateOutputType | null
    _min: EditionsStatusesMinAggregateOutputType | null
    _max: EditionsStatusesMaxAggregateOutputType | null
  }

  type GetEditionsStatusesGroupByPayload<T extends EditionsStatusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditionsStatusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditionsStatusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditionsStatusesGroupByOutputType[P]>
            : GetScalarType<T[P], EditionsStatusesGroupByOutputType[P]>
        }
      >
    >


  export type EditionsStatusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    editionStatusId?: boolean
    editionStatusCode?: boolean
    editionStatusName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    editions?: boolean | EditionsStatuses$editionsArgs<ExtArgs>
    _count?: boolean | EditionsStatusesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editionsStatuses"]>



  export type EditionsStatusesSelectScalar = {
    editionStatusId?: boolean
    editionStatusCode?: boolean
    editionStatusName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type EditionsStatusesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"editionStatusId" | "editionStatusCode" | "editionStatusName" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["editionsStatuses"]>
  export type EditionsStatusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editions?: boolean | EditionsStatuses$editionsArgs<ExtArgs>
    _count?: boolean | EditionsStatusesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EditionsStatusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EditionsStatuses"
    objects: {
      editions: Prisma.$EditionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      editionStatusId: number
      editionStatusCode: string
      editionStatusName: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["editionsStatuses"]>
    composites: {}
  }

  type EditionsStatusesGetPayload<S extends boolean | null | undefined | EditionsStatusesDefaultArgs> = $Result.GetResult<Prisma.$EditionsStatusesPayload, S>

  type EditionsStatusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditionsStatusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditionsStatusesCountAggregateInputType | true
    }

  export interface EditionsStatusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EditionsStatuses'], meta: { name: 'EditionsStatuses' } }
    /**
     * Find zero or one EditionsStatuses that matches the filter.
     * @param {EditionsStatusesFindUniqueArgs} args - Arguments to find a EditionsStatuses
     * @example
     * // Get one EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditionsStatusesFindUniqueArgs>(args: SelectSubset<T, EditionsStatusesFindUniqueArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EditionsStatuses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditionsStatusesFindUniqueOrThrowArgs} args - Arguments to find a EditionsStatuses
     * @example
     * // Get one EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditionsStatusesFindUniqueOrThrowArgs>(args: SelectSubset<T, EditionsStatusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditionsStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesFindFirstArgs} args - Arguments to find a EditionsStatuses
     * @example
     * // Get one EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditionsStatusesFindFirstArgs>(args?: SelectSubset<T, EditionsStatusesFindFirstArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditionsStatuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesFindFirstOrThrowArgs} args - Arguments to find a EditionsStatuses
     * @example
     * // Get one EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditionsStatusesFindFirstOrThrowArgs>(args?: SelectSubset<T, EditionsStatusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EditionsStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findMany()
     * 
     * // Get first 10 EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.findMany({ take: 10 })
     * 
     * // Only select the `editionStatusId`
     * const editionsStatusesWithEditionStatusIdOnly = await prisma.editionsStatuses.findMany({ select: { editionStatusId: true } })
     * 
     */
    findMany<T extends EditionsStatusesFindManyArgs>(args?: SelectSubset<T, EditionsStatusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EditionsStatuses.
     * @param {EditionsStatusesCreateArgs} args - Arguments to create a EditionsStatuses.
     * @example
     * // Create one EditionsStatuses
     * const EditionsStatuses = await prisma.editionsStatuses.create({
     *   data: {
     *     // ... data to create a EditionsStatuses
     *   }
     * })
     * 
     */
    create<T extends EditionsStatusesCreateArgs>(args: SelectSubset<T, EditionsStatusesCreateArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EditionsStatuses.
     * @param {EditionsStatusesCreateManyArgs} args - Arguments to create many EditionsStatuses.
     * @example
     * // Create many EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditionsStatusesCreateManyArgs>(args?: SelectSubset<T, EditionsStatusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EditionsStatuses.
     * @param {EditionsStatusesDeleteArgs} args - Arguments to delete one EditionsStatuses.
     * @example
     * // Delete one EditionsStatuses
     * const EditionsStatuses = await prisma.editionsStatuses.delete({
     *   where: {
     *     // ... filter to delete one EditionsStatuses
     *   }
     * })
     * 
     */
    delete<T extends EditionsStatusesDeleteArgs>(args: SelectSubset<T, EditionsStatusesDeleteArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EditionsStatuses.
     * @param {EditionsStatusesUpdateArgs} args - Arguments to update one EditionsStatuses.
     * @example
     * // Update one EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditionsStatusesUpdateArgs>(args: SelectSubset<T, EditionsStatusesUpdateArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EditionsStatuses.
     * @param {EditionsStatusesDeleteManyArgs} args - Arguments to filter EditionsStatuses to delete.
     * @example
     * // Delete a few EditionsStatuses
     * const { count } = await prisma.editionsStatuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditionsStatusesDeleteManyArgs>(args?: SelectSubset<T, EditionsStatusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditionsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditionsStatusesUpdateManyArgs>(args: SelectSubset<T, EditionsStatusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EditionsStatuses.
     * @param {EditionsStatusesUpsertArgs} args - Arguments to update or create a EditionsStatuses.
     * @example
     * // Update or create a EditionsStatuses
     * const editionsStatuses = await prisma.editionsStatuses.upsert({
     *   create: {
     *     // ... data to create a EditionsStatuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EditionsStatuses we want to update
     *   }
     * })
     */
    upsert<T extends EditionsStatusesUpsertArgs>(args: SelectSubset<T, EditionsStatusesUpsertArgs<ExtArgs>>): Prisma__EditionsStatusesClient<$Result.GetResult<Prisma.$EditionsStatusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EditionsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesCountArgs} args - Arguments to filter EditionsStatuses to count.
     * @example
     * // Count the number of EditionsStatuses
     * const count = await prisma.editionsStatuses.count({
     *   where: {
     *     // ... the filter for the EditionsStatuses we want to count
     *   }
     * })
    **/
    count<T extends EditionsStatusesCountArgs>(
      args?: Subset<T, EditionsStatusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditionsStatusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EditionsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EditionsStatusesAggregateArgs>(args: Subset<T, EditionsStatusesAggregateArgs>): Prisma.PrismaPromise<GetEditionsStatusesAggregateType<T>>

    /**
     * Group by EditionsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditionsStatusesGroupByArgs} args - Group by arguments.
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
      T extends EditionsStatusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditionsStatusesGroupByArgs['orderBy'] }
        : { orderBy?: EditionsStatusesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EditionsStatusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditionsStatusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EditionsStatuses model
   */
  readonly fields: EditionsStatusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EditionsStatuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditionsStatusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    editions<T extends EditionsStatuses$editionsArgs<ExtArgs> = {}>(args?: Subset<T, EditionsStatuses$editionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EditionsStatuses model
   */
  interface EditionsStatusesFieldRefs {
    readonly editionStatusId: FieldRef<"EditionsStatuses", 'Int'>
    readonly editionStatusCode: FieldRef<"EditionsStatuses", 'String'>
    readonly editionStatusName: FieldRef<"EditionsStatuses", 'String'>
    readonly createdAt: FieldRef<"EditionsStatuses", 'DateTime'>
    readonly createdBy: FieldRef<"EditionsStatuses", 'String'>
    readonly isDeleted: FieldRef<"EditionsStatuses", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EditionsStatuses findUnique
   */
  export type EditionsStatusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which EditionsStatuses to fetch.
     */
    where: EditionsStatusesWhereUniqueInput
  }

  /**
   * EditionsStatuses findUniqueOrThrow
   */
  export type EditionsStatusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which EditionsStatuses to fetch.
     */
    where: EditionsStatusesWhereUniqueInput
  }

  /**
   * EditionsStatuses findFirst
   */
  export type EditionsStatusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which EditionsStatuses to fetch.
     */
    where?: EditionsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditionsStatuses to fetch.
     */
    orderBy?: EditionsStatusesOrderByWithRelationInput | EditionsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditionsStatuses.
     */
    cursor?: EditionsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditionsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditionsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditionsStatuses.
     */
    distinct?: EditionsStatusesScalarFieldEnum | EditionsStatusesScalarFieldEnum[]
  }

  /**
   * EditionsStatuses findFirstOrThrow
   */
  export type EditionsStatusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which EditionsStatuses to fetch.
     */
    where?: EditionsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditionsStatuses to fetch.
     */
    orderBy?: EditionsStatusesOrderByWithRelationInput | EditionsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditionsStatuses.
     */
    cursor?: EditionsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditionsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditionsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditionsStatuses.
     */
    distinct?: EditionsStatusesScalarFieldEnum | EditionsStatusesScalarFieldEnum[]
  }

  /**
   * EditionsStatuses findMany
   */
  export type EditionsStatusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which EditionsStatuses to fetch.
     */
    where?: EditionsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditionsStatuses to fetch.
     */
    orderBy?: EditionsStatusesOrderByWithRelationInput | EditionsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EditionsStatuses.
     */
    cursor?: EditionsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditionsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditionsStatuses.
     */
    skip?: number
    distinct?: EditionsStatusesScalarFieldEnum | EditionsStatusesScalarFieldEnum[]
  }

  /**
   * EditionsStatuses create
   */
  export type EditionsStatusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * The data needed to create a EditionsStatuses.
     */
    data: XOR<EditionsStatusesCreateInput, EditionsStatusesUncheckedCreateInput>
  }

  /**
   * EditionsStatuses createMany
   */
  export type EditionsStatusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EditionsStatuses.
     */
    data: EditionsStatusesCreateManyInput | EditionsStatusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EditionsStatuses update
   */
  export type EditionsStatusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * The data needed to update a EditionsStatuses.
     */
    data: XOR<EditionsStatusesUpdateInput, EditionsStatusesUncheckedUpdateInput>
    /**
     * Choose, which EditionsStatuses to update.
     */
    where: EditionsStatusesWhereUniqueInput
  }

  /**
   * EditionsStatuses updateMany
   */
  export type EditionsStatusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EditionsStatuses.
     */
    data: XOR<EditionsStatusesUpdateManyMutationInput, EditionsStatusesUncheckedUpdateManyInput>
    /**
     * Filter which EditionsStatuses to update
     */
    where?: EditionsStatusesWhereInput
    /**
     * Limit how many EditionsStatuses to update.
     */
    limit?: number
  }

  /**
   * EditionsStatuses upsert
   */
  export type EditionsStatusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * The filter to search for the EditionsStatuses to update in case it exists.
     */
    where: EditionsStatusesWhereUniqueInput
    /**
     * In case the EditionsStatuses found by the `where` argument doesn't exist, create a new EditionsStatuses with this data.
     */
    create: XOR<EditionsStatusesCreateInput, EditionsStatusesUncheckedCreateInput>
    /**
     * In case the EditionsStatuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditionsStatusesUpdateInput, EditionsStatusesUncheckedUpdateInput>
  }

  /**
   * EditionsStatuses delete
   */
  export type EditionsStatusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
    /**
     * Filter which EditionsStatuses to delete.
     */
    where: EditionsStatusesWhereUniqueInput
  }

  /**
   * EditionsStatuses deleteMany
   */
  export type EditionsStatusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditionsStatuses to delete
     */
    where?: EditionsStatusesWhereInput
    /**
     * Limit how many EditionsStatuses to delete.
     */
    limit?: number
  }

  /**
   * EditionsStatuses.editions
   */
  export type EditionsStatuses$editionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Editions
     */
    select?: EditionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Editions
     */
    omit?: EditionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsInclude<ExtArgs> | null
    where?: EditionsWhereInput
    orderBy?: EditionsOrderByWithRelationInput | EditionsOrderByWithRelationInput[]
    cursor?: EditionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditionsScalarFieldEnum | EditionsScalarFieldEnum[]
  }

  /**
   * EditionsStatuses without action
   */
  export type EditionsStatusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditionsStatuses
     */
    select?: EditionsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditionsStatuses
     */
    omit?: EditionsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditionsStatusesInclude<ExtArgs> | null
  }


  /**
   * Model Shows
   */

  export type AggregateShows = {
    _count: ShowsCountAggregateOutputType | null
    _avg: ShowsAvgAggregateOutputType | null
    _sum: ShowsSumAggregateOutputType | null
    _min: ShowsMinAggregateOutputType | null
    _max: ShowsMaxAggregateOutputType | null
  }

  export type ShowsAvgAggregateOutputType = {
    showId: number | null
    editionId: number | null
    showStatusId: number | null
  }

  export type ShowsSumAggregateOutputType = {
    showId: number | null
    editionId: number | null
    showStatusId: number | null
  }

  export type ShowsMinAggregateOutputType = {
    showId: number | null
    showName: string | null
    editionId: number | null
    showStatusId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ShowsMaxAggregateOutputType = {
    showId: number | null
    showName: string | null
    editionId: number | null
    showStatusId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ShowsCountAggregateOutputType = {
    showId: number
    showName: number
    editionId: number
    showStatusId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ShowsAvgAggregateInputType = {
    showId?: true
    editionId?: true
    showStatusId?: true
  }

  export type ShowsSumAggregateInputType = {
    showId?: true
    editionId?: true
    showStatusId?: true
  }

  export type ShowsMinAggregateInputType = {
    showId?: true
    showName?: true
    editionId?: true
    showStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ShowsMaxAggregateInputType = {
    showId?: true
    showName?: true
    editionId?: true
    showStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ShowsCountAggregateInputType = {
    showId?: true
    showName?: true
    editionId?: true
    showStatusId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ShowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to aggregate.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowsMaxAggregateInputType
  }

  export type GetShowsAggregateType<T extends ShowsAggregateArgs> = {
        [P in keyof T & keyof AggregateShows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShows[P]>
      : GetScalarType<T[P], AggregateShows[P]>
  }




  export type ShowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowsWhereInput
    orderBy?: ShowsOrderByWithAggregationInput | ShowsOrderByWithAggregationInput[]
    by: ShowsScalarFieldEnum[] | ShowsScalarFieldEnum
    having?: ShowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowsCountAggregateInputType | true
    _avg?: ShowsAvgAggregateInputType
    _sum?: ShowsSumAggregateInputType
    _min?: ShowsMinAggregateInputType
    _max?: ShowsMaxAggregateInputType
  }

  export type ShowsGroupByOutputType = {
    showId: number
    showName: string
    editionId: number
    showStatusId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ShowsCountAggregateOutputType | null
    _avg: ShowsAvgAggregateOutputType | null
    _sum: ShowsSumAggregateOutputType | null
    _min: ShowsMinAggregateOutputType | null
    _max: ShowsMaxAggregateOutputType | null
  }

  type GetShowsGroupByPayload<T extends ShowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowsGroupByOutputType[P]>
            : GetScalarType<T[P], ShowsGroupByOutputType[P]>
        }
      >
    >


  export type ShowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    showId?: boolean
    showName?: boolean
    editionId?: boolean
    showStatusId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    edition?: boolean | EditionsDefaultArgs<ExtArgs>
    showStatus?: boolean | ShowsStatusesDefaultArgs<ExtArgs>
    performances?: boolean | Shows$performancesArgs<ExtArgs>
    _count?: boolean | ShowsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shows"]>



  export type ShowsSelectScalar = {
    showId?: boolean
    showName?: boolean
    editionId?: boolean
    showStatusId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ShowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"showId" | "showName" | "editionId" | "showStatusId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["shows"]>
  export type ShowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edition?: boolean | EditionsDefaultArgs<ExtArgs>
    showStatus?: boolean | ShowsStatusesDefaultArgs<ExtArgs>
    performances?: boolean | Shows$performancesArgs<ExtArgs>
    _count?: boolean | ShowsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shows"
    objects: {
      edition: Prisma.$EditionsPayload<ExtArgs>
      showStatus: Prisma.$ShowsStatusesPayload<ExtArgs>
      performances: Prisma.$PerformancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      showId: number
      showName: string
      editionId: number
      showStatusId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["shows"]>
    composites: {}
  }

  type ShowsGetPayload<S extends boolean | null | undefined | ShowsDefaultArgs> = $Result.GetResult<Prisma.$ShowsPayload, S>

  type ShowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowsCountAggregateInputType | true
    }

  export interface ShowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shows'], meta: { name: 'Shows' } }
    /**
     * Find zero or one Shows that matches the filter.
     * @param {ShowsFindUniqueArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowsFindUniqueArgs>(args: SelectSubset<T, ShowsFindUniqueArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowsFindUniqueOrThrowArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowsFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindFirstArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowsFindFirstArgs>(args?: SelectSubset<T, ShowsFindFirstArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindFirstOrThrowArgs} args - Arguments to find a Shows
     * @example
     * // Get one Shows
     * const shows = await prisma.shows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowsFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.shows.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.shows.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showsWithShowIdOnly = await prisma.shows.findMany({ select: { showId: true } })
     * 
     */
    findMany<T extends ShowsFindManyArgs>(args?: SelectSubset<T, ShowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shows.
     * @param {ShowsCreateArgs} args - Arguments to create a Shows.
     * @example
     * // Create one Shows
     * const Shows = await prisma.shows.create({
     *   data: {
     *     // ... data to create a Shows
     *   }
     * })
     * 
     */
    create<T extends ShowsCreateArgs>(args: SelectSubset<T, ShowsCreateArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shows.
     * @param {ShowsCreateManyArgs} args - Arguments to create many Shows.
     * @example
     * // Create many Shows
     * const shows = await prisma.shows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowsCreateManyArgs>(args?: SelectSubset<T, ShowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shows.
     * @param {ShowsDeleteArgs} args - Arguments to delete one Shows.
     * @example
     * // Delete one Shows
     * const Shows = await prisma.shows.delete({
     *   where: {
     *     // ... filter to delete one Shows
     *   }
     * })
     * 
     */
    delete<T extends ShowsDeleteArgs>(args: SelectSubset<T, ShowsDeleteArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shows.
     * @param {ShowsUpdateArgs} args - Arguments to update one Shows.
     * @example
     * // Update one Shows
     * const shows = await prisma.shows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowsUpdateArgs>(args: SelectSubset<T, ShowsUpdateArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shows.
     * @param {ShowsDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.shows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowsDeleteManyArgs>(args?: SelectSubset<T, ShowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const shows = await prisma.shows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowsUpdateManyArgs>(args: SelectSubset<T, ShowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shows.
     * @param {ShowsUpsertArgs} args - Arguments to update or create a Shows.
     * @example
     * // Update or create a Shows
     * const shows = await prisma.shows.upsert({
     *   create: {
     *     // ... data to create a Shows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shows we want to update
     *   }
     * })
     */
    upsert<T extends ShowsUpsertArgs>(args: SelectSubset<T, ShowsUpsertArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.shows.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowsCountArgs>(
      args?: Subset<T, ShowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowsAggregateArgs>(args: Subset<T, ShowsAggregateArgs>): Prisma.PrismaPromise<GetShowsAggregateType<T>>

    /**
     * Group by Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsGroupByArgs} args - Group by arguments.
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
      T extends ShowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowsGroupByArgs['orderBy'] }
        : { orderBy?: ShowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shows model
   */
  readonly fields: ShowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edition<T extends EditionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditionsDefaultArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    showStatus<T extends ShowsStatusesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsStatusesDefaultArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performances<T extends Shows$performancesArgs<ExtArgs> = {}>(args?: Subset<T, Shows$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shows model
   */
  interface ShowsFieldRefs {
    readonly showId: FieldRef<"Shows", 'Int'>
    readonly showName: FieldRef<"Shows", 'String'>
    readonly editionId: FieldRef<"Shows", 'Int'>
    readonly showStatusId: FieldRef<"Shows", 'Int'>
    readonly createdAt: FieldRef<"Shows", 'DateTime'>
    readonly createdBy: FieldRef<"Shows", 'String'>
    readonly isDeleted: FieldRef<"Shows", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Shows findUnique
   */
  export type ShowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows findUniqueOrThrow
   */
  export type ShowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows findFirst
   */
  export type ShowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows findFirstOrThrow
   */
  export type ShowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     */
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows findMany
   */
  export type ShowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter, which Shows to fetch.
     */
    where?: ShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     */
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     */
    cursor?: ShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     */
    skip?: number
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * Shows create
   */
  export type ShowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Shows.
     */
    data: XOR<ShowsCreateInput, ShowsUncheckedCreateInput>
  }

  /**
   * Shows createMany
   */
  export type ShowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shows.
     */
    data: ShowsCreateManyInput | ShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shows update
   */
  export type ShowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Shows.
     */
    data: XOR<ShowsUpdateInput, ShowsUncheckedUpdateInput>
    /**
     * Choose, which Shows to update.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows updateMany
   */
  export type ShowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shows.
     */
    data: XOR<ShowsUpdateManyMutationInput, ShowsUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     */
    where?: ShowsWhereInput
    /**
     * Limit how many Shows to update.
     */
    limit?: number
  }

  /**
   * Shows upsert
   */
  export type ShowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Shows to update in case it exists.
     */
    where: ShowsWhereUniqueInput
    /**
     * In case the Shows found by the `where` argument doesn't exist, create a new Shows with this data.
     */
    create: XOR<ShowsCreateInput, ShowsUncheckedCreateInput>
    /**
     * In case the Shows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowsUpdateInput, ShowsUncheckedUpdateInput>
  }

  /**
   * Shows delete
   */
  export type ShowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    /**
     * Filter which Shows to delete.
     */
    where: ShowsWhereUniqueInput
  }

  /**
   * Shows deleteMany
   */
  export type ShowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shows to delete
     */
    where?: ShowsWhereInput
    /**
     * Limit how many Shows to delete.
     */
    limit?: number
  }

  /**
   * Shows.performances
   */
  export type Shows$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    where?: PerformancesWhereInput
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    cursor?: PerformancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * Shows without action
   */
  export type ShowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
  }


  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsAvgAggregateOutputType = {
    artistId: number | null
  }

  export type ArtistsSumAggregateOutputType = {
    artistId: number | null
  }

  export type ArtistsMinAggregateOutputType = {
    artistId: number | null
    artistName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsMaxAggregateOutputType = {
    artistId: number | null
    artistName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsCountAggregateOutputType = {
    artistId: number
    artistName: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ArtistsAvgAggregateInputType = {
    artistId?: true
  }

  export type ArtistsSumAggregateInputType = {
    artistId?: true
  }

  export type ArtistsMinAggregateInputType = {
    artistId?: true
    artistName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsMaxAggregateInputType = {
    artistId?: true
    artistName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsCountAggregateInputType = {
    artistId?: true
    artistName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _avg?: ArtistsAvgAggregateInputType
    _sum?: ArtistsSumAggregateInputType
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    artistId: number
    artistName: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistId?: boolean
    artistName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    artistsManagements?: boolean | Artists$artistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>



  export type ArtistsSelectScalar = {
    artistId?: boolean
    artistName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ArtistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistId" | "artistName" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["artists"]>
  export type ArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistsManagements?: boolean | Artists$artistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      artistsManagements: Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      artistId: number
      artistName: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }

  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsFindUniqueArgs>(args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsFindFirstArgs>(args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `artistId`
     * const artistsWithArtistIdOnly = await prisma.artists.findMany({ select: { artistId: true } })
     * 
     */
    findMany<T extends ArtistsFindManyArgs>(args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
     */
    create<T extends ArtistsCreateArgs>(args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsCreateManyArgs>(args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
     */
    delete<T extends ArtistsDeleteArgs>(args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsUpdateArgs>(args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsDeleteManyArgs>(args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsUpdateManyArgs>(args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsUpsertArgs>(args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistsManagements<T extends Artists$artistsManagementsArgs<ExtArgs> = {}>(args?: Subset<T, Artists$artistsManagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artists model
   */
  interface ArtistsFieldRefs {
    readonly artistId: FieldRef<"Artists", 'Int'>
    readonly artistName: FieldRef<"Artists", 'String'>
    readonly createdAt: FieldRef<"Artists", 'DateTime'>
    readonly createdBy: FieldRef<"Artists", 'String'>
    readonly isDeleted: FieldRef<"Artists", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }

  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }

  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artists.artistsManagements
   */
  export type Artists$artistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    where?: ArtistsArtistsManagementsWhereInput
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsArtistsManagementsScalarFieldEnum | ArtistsArtistsManagementsScalarFieldEnum[]
  }

  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
  }


  /**
   * Model ShowsStatuses
   */

  export type AggregateShowsStatuses = {
    _count: ShowsStatusesCountAggregateOutputType | null
    _avg: ShowsStatusesAvgAggregateOutputType | null
    _sum: ShowsStatusesSumAggregateOutputType | null
    _min: ShowsStatusesMinAggregateOutputType | null
    _max: ShowsStatusesMaxAggregateOutputType | null
  }

  export type ShowsStatusesAvgAggregateOutputType = {
    showStatusId: number | null
  }

  export type ShowsStatusesSumAggregateOutputType = {
    showStatusId: number | null
  }

  export type ShowsStatusesMinAggregateOutputType = {
    showStatusId: number | null
    showStatusCode: string | null
    showStatusName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ShowsStatusesMaxAggregateOutputType = {
    showStatusId: number | null
    showStatusCode: string | null
    showStatusName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ShowsStatusesCountAggregateOutputType = {
    showStatusId: number
    showStatusCode: number
    showStatusName: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ShowsStatusesAvgAggregateInputType = {
    showStatusId?: true
  }

  export type ShowsStatusesSumAggregateInputType = {
    showStatusId?: true
  }

  export type ShowsStatusesMinAggregateInputType = {
    showStatusId?: true
    showStatusCode?: true
    showStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ShowsStatusesMaxAggregateInputType = {
    showStatusId?: true
    showStatusCode?: true
    showStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ShowsStatusesCountAggregateInputType = {
    showStatusId?: true
    showStatusCode?: true
    showStatusName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ShowsStatusesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowsStatuses to aggregate.
     */
    where?: ShowsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowsStatuses to fetch.
     */
    orderBy?: ShowsStatusesOrderByWithRelationInput | ShowsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowsStatuses
    **/
    _count?: true | ShowsStatusesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowsStatusesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowsStatusesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowsStatusesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowsStatusesMaxAggregateInputType
  }

  export type GetShowsStatusesAggregateType<T extends ShowsStatusesAggregateArgs> = {
        [P in keyof T & keyof AggregateShowsStatuses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowsStatuses[P]>
      : GetScalarType<T[P], AggregateShowsStatuses[P]>
  }




  export type ShowsStatusesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowsStatusesWhereInput
    orderBy?: ShowsStatusesOrderByWithAggregationInput | ShowsStatusesOrderByWithAggregationInput[]
    by: ShowsStatusesScalarFieldEnum[] | ShowsStatusesScalarFieldEnum
    having?: ShowsStatusesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowsStatusesCountAggregateInputType | true
    _avg?: ShowsStatusesAvgAggregateInputType
    _sum?: ShowsStatusesSumAggregateInputType
    _min?: ShowsStatusesMinAggregateInputType
    _max?: ShowsStatusesMaxAggregateInputType
  }

  export type ShowsStatusesGroupByOutputType = {
    showStatusId: number
    showStatusCode: string
    showStatusName: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ShowsStatusesCountAggregateOutputType | null
    _avg: ShowsStatusesAvgAggregateOutputType | null
    _sum: ShowsStatusesSumAggregateOutputType | null
    _min: ShowsStatusesMinAggregateOutputType | null
    _max: ShowsStatusesMaxAggregateOutputType | null
  }

  type GetShowsStatusesGroupByPayload<T extends ShowsStatusesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowsStatusesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowsStatusesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowsStatusesGroupByOutputType[P]>
            : GetScalarType<T[P], ShowsStatusesGroupByOutputType[P]>
        }
      >
    >


  export type ShowsStatusesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    showStatusId?: boolean
    showStatusCode?: boolean
    showStatusName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    shows?: boolean | ShowsStatuses$showsArgs<ExtArgs>
    _count?: boolean | ShowsStatusesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showsStatuses"]>



  export type ShowsStatusesSelectScalar = {
    showStatusId?: boolean
    showStatusCode?: boolean
    showStatusName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ShowsStatusesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"showStatusId" | "showStatusCode" | "showStatusName" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["showsStatuses"]>
  export type ShowsStatusesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shows?: boolean | ShowsStatuses$showsArgs<ExtArgs>
    _count?: boolean | ShowsStatusesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShowsStatusesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowsStatuses"
    objects: {
      shows: Prisma.$ShowsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      showStatusId: number
      showStatusCode: string
      showStatusName: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["showsStatuses"]>
    composites: {}
  }

  type ShowsStatusesGetPayload<S extends boolean | null | undefined | ShowsStatusesDefaultArgs> = $Result.GetResult<Prisma.$ShowsStatusesPayload, S>

  type ShowsStatusesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowsStatusesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowsStatusesCountAggregateInputType | true
    }

  export interface ShowsStatusesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowsStatuses'], meta: { name: 'ShowsStatuses' } }
    /**
     * Find zero or one ShowsStatuses that matches the filter.
     * @param {ShowsStatusesFindUniqueArgs} args - Arguments to find a ShowsStatuses
     * @example
     * // Get one ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowsStatusesFindUniqueArgs>(args: SelectSubset<T, ShowsStatusesFindUniqueArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowsStatuses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowsStatusesFindUniqueOrThrowArgs} args - Arguments to find a ShowsStatuses
     * @example
     * // Get one ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowsStatusesFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowsStatusesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowsStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesFindFirstArgs} args - Arguments to find a ShowsStatuses
     * @example
     * // Get one ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowsStatusesFindFirstArgs>(args?: SelectSubset<T, ShowsStatusesFindFirstArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowsStatuses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesFindFirstOrThrowArgs} args - Arguments to find a ShowsStatuses
     * @example
     * // Get one ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowsStatusesFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowsStatusesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowsStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findMany()
     * 
     * // Get first 10 ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.findMany({ take: 10 })
     * 
     * // Only select the `showStatusId`
     * const showsStatusesWithShowStatusIdOnly = await prisma.showsStatuses.findMany({ select: { showStatusId: true } })
     * 
     */
    findMany<T extends ShowsStatusesFindManyArgs>(args?: SelectSubset<T, ShowsStatusesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowsStatuses.
     * @param {ShowsStatusesCreateArgs} args - Arguments to create a ShowsStatuses.
     * @example
     * // Create one ShowsStatuses
     * const ShowsStatuses = await prisma.showsStatuses.create({
     *   data: {
     *     // ... data to create a ShowsStatuses
     *   }
     * })
     * 
     */
    create<T extends ShowsStatusesCreateArgs>(args: SelectSubset<T, ShowsStatusesCreateArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowsStatuses.
     * @param {ShowsStatusesCreateManyArgs} args - Arguments to create many ShowsStatuses.
     * @example
     * // Create many ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowsStatusesCreateManyArgs>(args?: SelectSubset<T, ShowsStatusesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShowsStatuses.
     * @param {ShowsStatusesDeleteArgs} args - Arguments to delete one ShowsStatuses.
     * @example
     * // Delete one ShowsStatuses
     * const ShowsStatuses = await prisma.showsStatuses.delete({
     *   where: {
     *     // ... filter to delete one ShowsStatuses
     *   }
     * })
     * 
     */
    delete<T extends ShowsStatusesDeleteArgs>(args: SelectSubset<T, ShowsStatusesDeleteArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowsStatuses.
     * @param {ShowsStatusesUpdateArgs} args - Arguments to update one ShowsStatuses.
     * @example
     * // Update one ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowsStatusesUpdateArgs>(args: SelectSubset<T, ShowsStatusesUpdateArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowsStatuses.
     * @param {ShowsStatusesDeleteManyArgs} args - Arguments to filter ShowsStatuses to delete.
     * @example
     * // Delete a few ShowsStatuses
     * const { count } = await prisma.showsStatuses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowsStatusesDeleteManyArgs>(args?: SelectSubset<T, ShowsStatusesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowsStatusesUpdateManyArgs>(args: SelectSubset<T, ShowsStatusesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowsStatuses.
     * @param {ShowsStatusesUpsertArgs} args - Arguments to update or create a ShowsStatuses.
     * @example
     * // Update or create a ShowsStatuses
     * const showsStatuses = await prisma.showsStatuses.upsert({
     *   create: {
     *     // ... data to create a ShowsStatuses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowsStatuses we want to update
     *   }
     * })
     */
    upsert<T extends ShowsStatusesUpsertArgs>(args: SelectSubset<T, ShowsStatusesUpsertArgs<ExtArgs>>): Prisma__ShowsStatusesClient<$Result.GetResult<Prisma.$ShowsStatusesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesCountArgs} args - Arguments to filter ShowsStatuses to count.
     * @example
     * // Count the number of ShowsStatuses
     * const count = await prisma.showsStatuses.count({
     *   where: {
     *     // ... the filter for the ShowsStatuses we want to count
     *   }
     * })
    **/
    count<T extends ShowsStatusesCountArgs>(
      args?: Subset<T, ShowsStatusesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowsStatusesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowsStatusesAggregateArgs>(args: Subset<T, ShowsStatusesAggregateArgs>): Prisma.PrismaPromise<GetShowsStatusesAggregateType<T>>

    /**
     * Group by ShowsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowsStatusesGroupByArgs} args - Group by arguments.
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
      T extends ShowsStatusesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowsStatusesGroupByArgs['orderBy'] }
        : { orderBy?: ShowsStatusesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowsStatusesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowsStatusesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowsStatuses model
   */
  readonly fields: ShowsStatusesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowsStatuses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowsStatusesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shows<T extends ShowsStatuses$showsArgs<ExtArgs> = {}>(args?: Subset<T, ShowsStatuses$showsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShowsStatuses model
   */
  interface ShowsStatusesFieldRefs {
    readonly showStatusId: FieldRef<"ShowsStatuses", 'Int'>
    readonly showStatusCode: FieldRef<"ShowsStatuses", 'String'>
    readonly showStatusName: FieldRef<"ShowsStatuses", 'String'>
    readonly createdAt: FieldRef<"ShowsStatuses", 'DateTime'>
    readonly createdBy: FieldRef<"ShowsStatuses", 'String'>
    readonly isDeleted: FieldRef<"ShowsStatuses", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShowsStatuses findUnique
   */
  export type ShowsStatusesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which ShowsStatuses to fetch.
     */
    where: ShowsStatusesWhereUniqueInput
  }

  /**
   * ShowsStatuses findUniqueOrThrow
   */
  export type ShowsStatusesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which ShowsStatuses to fetch.
     */
    where: ShowsStatusesWhereUniqueInput
  }

  /**
   * ShowsStatuses findFirst
   */
  export type ShowsStatusesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which ShowsStatuses to fetch.
     */
    where?: ShowsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowsStatuses to fetch.
     */
    orderBy?: ShowsStatusesOrderByWithRelationInput | ShowsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowsStatuses.
     */
    cursor?: ShowsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowsStatuses.
     */
    distinct?: ShowsStatusesScalarFieldEnum | ShowsStatusesScalarFieldEnum[]
  }

  /**
   * ShowsStatuses findFirstOrThrow
   */
  export type ShowsStatusesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which ShowsStatuses to fetch.
     */
    where?: ShowsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowsStatuses to fetch.
     */
    orderBy?: ShowsStatusesOrderByWithRelationInput | ShowsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowsStatuses.
     */
    cursor?: ShowsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowsStatuses.
     */
    distinct?: ShowsStatusesScalarFieldEnum | ShowsStatusesScalarFieldEnum[]
  }

  /**
   * ShowsStatuses findMany
   */
  export type ShowsStatusesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter, which ShowsStatuses to fetch.
     */
    where?: ShowsStatusesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowsStatuses to fetch.
     */
    orderBy?: ShowsStatusesOrderByWithRelationInput | ShowsStatusesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowsStatuses.
     */
    cursor?: ShowsStatusesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowsStatuses.
     */
    skip?: number
    distinct?: ShowsStatusesScalarFieldEnum | ShowsStatusesScalarFieldEnum[]
  }

  /**
   * ShowsStatuses create
   */
  export type ShowsStatusesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * The data needed to create a ShowsStatuses.
     */
    data: XOR<ShowsStatusesCreateInput, ShowsStatusesUncheckedCreateInput>
  }

  /**
   * ShowsStatuses createMany
   */
  export type ShowsStatusesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowsStatuses.
     */
    data: ShowsStatusesCreateManyInput | ShowsStatusesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowsStatuses update
   */
  export type ShowsStatusesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * The data needed to update a ShowsStatuses.
     */
    data: XOR<ShowsStatusesUpdateInput, ShowsStatusesUncheckedUpdateInput>
    /**
     * Choose, which ShowsStatuses to update.
     */
    where: ShowsStatusesWhereUniqueInput
  }

  /**
   * ShowsStatuses updateMany
   */
  export type ShowsStatusesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowsStatuses.
     */
    data: XOR<ShowsStatusesUpdateManyMutationInput, ShowsStatusesUncheckedUpdateManyInput>
    /**
     * Filter which ShowsStatuses to update
     */
    where?: ShowsStatusesWhereInput
    /**
     * Limit how many ShowsStatuses to update.
     */
    limit?: number
  }

  /**
   * ShowsStatuses upsert
   */
  export type ShowsStatusesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * The filter to search for the ShowsStatuses to update in case it exists.
     */
    where: ShowsStatusesWhereUniqueInput
    /**
     * In case the ShowsStatuses found by the `where` argument doesn't exist, create a new ShowsStatuses with this data.
     */
    create: XOR<ShowsStatusesCreateInput, ShowsStatusesUncheckedCreateInput>
    /**
     * In case the ShowsStatuses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowsStatusesUpdateInput, ShowsStatusesUncheckedUpdateInput>
  }

  /**
   * ShowsStatuses delete
   */
  export type ShowsStatusesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
    /**
     * Filter which ShowsStatuses to delete.
     */
    where: ShowsStatusesWhereUniqueInput
  }

  /**
   * ShowsStatuses deleteMany
   */
  export type ShowsStatusesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowsStatuses to delete
     */
    where?: ShowsStatusesWhereInput
    /**
     * Limit how many ShowsStatuses to delete.
     */
    limit?: number
  }

  /**
   * ShowsStatuses.shows
   */
  export type ShowsStatuses$showsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shows
     */
    select?: ShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shows
     */
    omit?: ShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsInclude<ExtArgs> | null
    where?: ShowsWhereInput
    orderBy?: ShowsOrderByWithRelationInput | ShowsOrderByWithRelationInput[]
    cursor?: ShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowsScalarFieldEnum | ShowsScalarFieldEnum[]
  }

  /**
   * ShowsStatuses without action
   */
  export type ShowsStatusesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowsStatuses
     */
    select?: ShowsStatusesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowsStatuses
     */
    omit?: ShowsStatusesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowsStatusesInclude<ExtArgs> | null
  }


  /**
   * Model ArtistsManagementsCategories
   */

  export type AggregateArtistsManagementsCategories = {
    _count: ArtistsManagementsCategoriesCountAggregateOutputType | null
    _avg: ArtistsManagementsCategoriesAvgAggregateOutputType | null
    _sum: ArtistsManagementsCategoriesSumAggregateOutputType | null
    _min: ArtistsManagementsCategoriesMinAggregateOutputType | null
    _max: ArtistsManagementsCategoriesMaxAggregateOutputType | null
  }

  export type ArtistsManagementsCategoriesAvgAggregateOutputType = {
    artistManagementCategoryId: number | null
  }

  export type ArtistsManagementsCategoriesSumAggregateOutputType = {
    artistManagementCategoryId: number | null
  }

  export type ArtistsManagementsCategoriesMinAggregateOutputType = {
    artistManagementCategoryId: number | null
    artistManagementCategoryName: string | null
    artistManagementCategoryComment: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsManagementsCategoriesMaxAggregateOutputType = {
    artistManagementCategoryId: number | null
    artistManagementCategoryName: string | null
    artistManagementCategoryComment: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsManagementsCategoriesCountAggregateOutputType = {
    artistManagementCategoryId: number
    artistManagementCategoryName: number
    artistManagementCategoryComment: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ArtistsManagementsCategoriesAvgAggregateInputType = {
    artistManagementCategoryId?: true
  }

  export type ArtistsManagementsCategoriesSumAggregateInputType = {
    artistManagementCategoryId?: true
  }

  export type ArtistsManagementsCategoriesMinAggregateInputType = {
    artistManagementCategoryId?: true
    artistManagementCategoryName?: true
    artistManagementCategoryComment?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsManagementsCategoriesMaxAggregateInputType = {
    artistManagementCategoryId?: true
    artistManagementCategoryName?: true
    artistManagementCategoryComment?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsManagementsCategoriesCountAggregateInputType = {
    artistManagementCategoryId?: true
    artistManagementCategoryName?: true
    artistManagementCategoryComment?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ArtistsManagementsCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsManagementsCategories to aggregate.
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagementsCategories to fetch.
     */
    orderBy?: ArtistsManagementsCategoriesOrderByWithRelationInput | ArtistsManagementsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsManagementsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagementsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagementsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistsManagementsCategories
    **/
    _count?: true | ArtistsManagementsCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsManagementsCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsManagementsCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsManagementsCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsManagementsCategoriesMaxAggregateInputType
  }

  export type GetArtistsManagementsCategoriesAggregateType<T extends ArtistsManagementsCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistsManagementsCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistsManagementsCategories[P]>
      : GetScalarType<T[P], AggregateArtistsManagementsCategories[P]>
  }




  export type ArtistsManagementsCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsManagementsCategoriesWhereInput
    orderBy?: ArtistsManagementsCategoriesOrderByWithAggregationInput | ArtistsManagementsCategoriesOrderByWithAggregationInput[]
    by: ArtistsManagementsCategoriesScalarFieldEnum[] | ArtistsManagementsCategoriesScalarFieldEnum
    having?: ArtistsManagementsCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsManagementsCategoriesCountAggregateInputType | true
    _avg?: ArtistsManagementsCategoriesAvgAggregateInputType
    _sum?: ArtistsManagementsCategoriesSumAggregateInputType
    _min?: ArtistsManagementsCategoriesMinAggregateInputType
    _max?: ArtistsManagementsCategoriesMaxAggregateInputType
  }

  export type ArtistsManagementsCategoriesGroupByOutputType = {
    artistManagementCategoryId: number
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ArtistsManagementsCategoriesCountAggregateOutputType | null
    _avg: ArtistsManagementsCategoriesAvgAggregateOutputType | null
    _sum: ArtistsManagementsCategoriesSumAggregateOutputType | null
    _min: ArtistsManagementsCategoriesMinAggregateOutputType | null
    _max: ArtistsManagementsCategoriesMaxAggregateOutputType | null
  }

  type GetArtistsManagementsCategoriesGroupByPayload<T extends ArtistsManagementsCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsManagementsCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsManagementsCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsManagementsCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsManagementsCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsManagementsCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistManagementCategoryId?: boolean
    artistManagementCategoryName?: boolean
    artistManagementCategoryComment?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    artistsManagements?: boolean | ArtistsManagementsCategories$artistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsManagementsCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistsManagementsCategories"]>



  export type ArtistsManagementsCategoriesSelectScalar = {
    artistManagementCategoryId?: boolean
    artistManagementCategoryName?: boolean
    artistManagementCategoryComment?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ArtistsManagementsCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistManagementCategoryId" | "artistManagementCategoryName" | "artistManagementCategoryComment" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["artistsManagementsCategories"]>
  export type ArtistsManagementsCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistsManagements?: boolean | ArtistsManagementsCategories$artistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsManagementsCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistsManagementsCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistsManagementsCategories"
    objects: {
      artistsManagements: Prisma.$ArtistsManagementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      artistManagementCategoryId: number
      artistManagementCategoryName: string
      artistManagementCategoryComment: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["artistsManagementsCategories"]>
    composites: {}
  }

  type ArtistsManagementsCategoriesGetPayload<S extends boolean | null | undefined | ArtistsManagementsCategoriesDefaultArgs> = $Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload, S>

  type ArtistsManagementsCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsManagementsCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsManagementsCategoriesCountAggregateInputType | true
    }

  export interface ArtistsManagementsCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistsManagementsCategories'], meta: { name: 'ArtistsManagementsCategories' } }
    /**
     * Find zero or one ArtistsManagementsCategories that matches the filter.
     * @param {ArtistsManagementsCategoriesFindUniqueArgs} args - Arguments to find a ArtistsManagementsCategories
     * @example
     * // Get one ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsManagementsCategoriesFindUniqueArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesFindUniqueArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistsManagementsCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsManagementsCategoriesFindUniqueOrThrowArgs} args - Arguments to find a ArtistsManagementsCategories
     * @example
     * // Get one ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsManagementsCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsManagementsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesFindFirstArgs} args - Arguments to find a ArtistsManagementsCategories
     * @example
     * // Get one ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsManagementsCategoriesFindFirstArgs>(args?: SelectSubset<T, ArtistsManagementsCategoriesFindFirstArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsManagementsCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesFindFirstOrThrowArgs} args - Arguments to find a ArtistsManagementsCategories
     * @example
     * // Get one ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsManagementsCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsManagementsCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistsManagementsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findMany()
     * 
     * // Get first 10 ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.findMany({ take: 10 })
     * 
     * // Only select the `artistManagementCategoryId`
     * const artistsManagementsCategoriesWithArtistManagementCategoryIdOnly = await prisma.artistsManagementsCategories.findMany({ select: { artistManagementCategoryId: true } })
     * 
     */
    findMany<T extends ArtistsManagementsCategoriesFindManyArgs>(args?: SelectSubset<T, ArtistsManagementsCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesCreateArgs} args - Arguments to create a ArtistsManagementsCategories.
     * @example
     * // Create one ArtistsManagementsCategories
     * const ArtistsManagementsCategories = await prisma.artistsManagementsCategories.create({
     *   data: {
     *     // ... data to create a ArtistsManagementsCategories
     *   }
     * })
     * 
     */
    create<T extends ArtistsManagementsCategoriesCreateArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesCreateArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesCreateManyArgs} args - Arguments to create many ArtistsManagementsCategories.
     * @example
     * // Create many ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsManagementsCategoriesCreateManyArgs>(args?: SelectSubset<T, ArtistsManagementsCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesDeleteArgs} args - Arguments to delete one ArtistsManagementsCategories.
     * @example
     * // Delete one ArtistsManagementsCategories
     * const ArtistsManagementsCategories = await prisma.artistsManagementsCategories.delete({
     *   where: {
     *     // ... filter to delete one ArtistsManagementsCategories
     *   }
     * })
     * 
     */
    delete<T extends ArtistsManagementsCategoriesDeleteArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesDeleteArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesUpdateArgs} args - Arguments to update one ArtistsManagementsCategories.
     * @example
     * // Update one ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsManagementsCategoriesUpdateArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesUpdateArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesDeleteManyArgs} args - Arguments to filter ArtistsManagementsCategories to delete.
     * @example
     * // Delete a few ArtistsManagementsCategories
     * const { count } = await prisma.artistsManagementsCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsManagementsCategoriesDeleteManyArgs>(args?: SelectSubset<T, ArtistsManagementsCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistsManagementsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsManagementsCategoriesUpdateManyArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistsManagementsCategories.
     * @param {ArtistsManagementsCategoriesUpsertArgs} args - Arguments to update or create a ArtistsManagementsCategories.
     * @example
     * // Update or create a ArtistsManagementsCategories
     * const artistsManagementsCategories = await prisma.artistsManagementsCategories.upsert({
     *   create: {
     *     // ... data to create a ArtistsManagementsCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistsManagementsCategories we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsManagementsCategoriesUpsertArgs>(args: SelectSubset<T, ArtistsManagementsCategoriesUpsertArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistsManagementsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesCountArgs} args - Arguments to filter ArtistsManagementsCategories to count.
     * @example
     * // Count the number of ArtistsManagementsCategories
     * const count = await prisma.artistsManagementsCategories.count({
     *   where: {
     *     // ... the filter for the ArtistsManagementsCategories we want to count
     *   }
     * })
    **/
    count<T extends ArtistsManagementsCategoriesCountArgs>(
      args?: Subset<T, ArtistsManagementsCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsManagementsCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistsManagementsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsManagementsCategoriesAggregateArgs>(args: Subset<T, ArtistsManagementsCategoriesAggregateArgs>): Prisma.PrismaPromise<GetArtistsManagementsCategoriesAggregateType<T>>

    /**
     * Group by ArtistsManagementsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCategoriesGroupByArgs} args - Group by arguments.
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
      T extends ArtistsManagementsCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsManagementsCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsManagementsCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsManagementsCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsManagementsCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistsManagementsCategories model
   */
  readonly fields: ArtistsManagementsCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistsManagementsCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsManagementsCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistsManagements<T extends ArtistsManagementsCategories$artistsManagementsArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsManagementsCategories$artistsManagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArtistsManagementsCategories model
   */
  interface ArtistsManagementsCategoriesFieldRefs {
    readonly artistManagementCategoryId: FieldRef<"ArtistsManagementsCategories", 'Int'>
    readonly artistManagementCategoryName: FieldRef<"ArtistsManagementsCategories", 'String'>
    readonly artistManagementCategoryComment: FieldRef<"ArtistsManagementsCategories", 'String'>
    readonly createdAt: FieldRef<"ArtistsManagementsCategories", 'DateTime'>
    readonly createdBy: FieldRef<"ArtistsManagementsCategories", 'String'>
    readonly isDeleted: FieldRef<"ArtistsManagementsCategories", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ArtistsManagementsCategories findUnique
   */
  export type ArtistsManagementsCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagementsCategories to fetch.
     */
    where: ArtistsManagementsCategoriesWhereUniqueInput
  }

  /**
   * ArtistsManagementsCategories findUniqueOrThrow
   */
  export type ArtistsManagementsCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagementsCategories to fetch.
     */
    where: ArtistsManagementsCategoriesWhereUniqueInput
  }

  /**
   * ArtistsManagementsCategories findFirst
   */
  export type ArtistsManagementsCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagementsCategories to fetch.
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagementsCategories to fetch.
     */
    orderBy?: ArtistsManagementsCategoriesOrderByWithRelationInput | ArtistsManagementsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsManagementsCategories.
     */
    cursor?: ArtistsManagementsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagementsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagementsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsManagementsCategories.
     */
    distinct?: ArtistsManagementsCategoriesScalarFieldEnum | ArtistsManagementsCategoriesScalarFieldEnum[]
  }

  /**
   * ArtistsManagementsCategories findFirstOrThrow
   */
  export type ArtistsManagementsCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagementsCategories to fetch.
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagementsCategories to fetch.
     */
    orderBy?: ArtistsManagementsCategoriesOrderByWithRelationInput | ArtistsManagementsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsManagementsCategories.
     */
    cursor?: ArtistsManagementsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagementsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagementsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsManagementsCategories.
     */
    distinct?: ArtistsManagementsCategoriesScalarFieldEnum | ArtistsManagementsCategoriesScalarFieldEnum[]
  }

  /**
   * ArtistsManagementsCategories findMany
   */
  export type ArtistsManagementsCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagementsCategories to fetch.
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagementsCategories to fetch.
     */
    orderBy?: ArtistsManagementsCategoriesOrderByWithRelationInput | ArtistsManagementsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistsManagementsCategories.
     */
    cursor?: ArtistsManagementsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagementsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagementsCategories.
     */
    skip?: number
    distinct?: ArtistsManagementsCategoriesScalarFieldEnum | ArtistsManagementsCategoriesScalarFieldEnum[]
  }

  /**
   * ArtistsManagementsCategories create
   */
  export type ArtistsManagementsCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistsManagementsCategories.
     */
    data: XOR<ArtistsManagementsCategoriesCreateInput, ArtistsManagementsCategoriesUncheckedCreateInput>
  }

  /**
   * ArtistsManagementsCategories createMany
   */
  export type ArtistsManagementsCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistsManagementsCategories.
     */
    data: ArtistsManagementsCategoriesCreateManyInput | ArtistsManagementsCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistsManagementsCategories update
   */
  export type ArtistsManagementsCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistsManagementsCategories.
     */
    data: XOR<ArtistsManagementsCategoriesUpdateInput, ArtistsManagementsCategoriesUncheckedUpdateInput>
    /**
     * Choose, which ArtistsManagementsCategories to update.
     */
    where: ArtistsManagementsCategoriesWhereUniqueInput
  }

  /**
   * ArtistsManagementsCategories updateMany
   */
  export type ArtistsManagementsCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistsManagementsCategories.
     */
    data: XOR<ArtistsManagementsCategoriesUpdateManyMutationInput, ArtistsManagementsCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which ArtistsManagementsCategories to update
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * Limit how many ArtistsManagementsCategories to update.
     */
    limit?: number
  }

  /**
   * ArtistsManagementsCategories upsert
   */
  export type ArtistsManagementsCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistsManagementsCategories to update in case it exists.
     */
    where: ArtistsManagementsCategoriesWhereUniqueInput
    /**
     * In case the ArtistsManagementsCategories found by the `where` argument doesn't exist, create a new ArtistsManagementsCategories with this data.
     */
    create: XOR<ArtistsManagementsCategoriesCreateInput, ArtistsManagementsCategoriesUncheckedCreateInput>
    /**
     * In case the ArtistsManagementsCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsManagementsCategoriesUpdateInput, ArtistsManagementsCategoriesUncheckedUpdateInput>
  }

  /**
   * ArtistsManagementsCategories delete
   */
  export type ArtistsManagementsCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
    /**
     * Filter which ArtistsManagementsCategories to delete.
     */
    where: ArtistsManagementsCategoriesWhereUniqueInput
  }

  /**
   * ArtistsManagementsCategories deleteMany
   */
  export type ArtistsManagementsCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsManagementsCategories to delete
     */
    where?: ArtistsManagementsCategoriesWhereInput
    /**
     * Limit how many ArtistsManagementsCategories to delete.
     */
    limit?: number
  }

  /**
   * ArtistsManagementsCategories.artistsManagements
   */
  export type ArtistsManagementsCategories$artistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    where?: ArtistsManagementsWhereInput
    orderBy?: ArtistsManagementsOrderByWithRelationInput | ArtistsManagementsOrderByWithRelationInput[]
    cursor?: ArtistsManagementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsManagementsScalarFieldEnum | ArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsManagementsCategories without action
   */
  export type ArtistsManagementsCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagementsCategories
     */
    select?: ArtistsManagementsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagementsCategories
     */
    omit?: ArtistsManagementsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model ArtistsManagements
   */

  export type AggregateArtistsManagements = {
    _count: ArtistsManagementsCountAggregateOutputType | null
    _avg: ArtistsManagementsAvgAggregateOutputType | null
    _sum: ArtistsManagementsSumAggregateOutputType | null
    _min: ArtistsManagementsMinAggregateOutputType | null
    _max: ArtistsManagementsMaxAggregateOutputType | null
  }

  export type ArtistsManagementsAvgAggregateOutputType = {
    artistManagementId: number | null
    artistManagementCategoryId: number | null
  }

  export type ArtistsManagementsSumAggregateOutputType = {
    artistManagementId: number | null
    artistManagementCategoryId: number | null
  }

  export type ArtistsManagementsMinAggregateOutputType = {
    artistManagementId: number | null
    artistManagementName: string | null
    artistManagementCategoryId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsManagementsMaxAggregateOutputType = {
    artistManagementId: number | null
    artistManagementName: string | null
    artistManagementCategoryId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsManagementsCountAggregateOutputType = {
    artistManagementId: number
    artistManagementName: number
    artistManagementCategoryId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ArtistsManagementsAvgAggregateInputType = {
    artistManagementId?: true
    artistManagementCategoryId?: true
  }

  export type ArtistsManagementsSumAggregateInputType = {
    artistManagementId?: true
    artistManagementCategoryId?: true
  }

  export type ArtistsManagementsMinAggregateInputType = {
    artistManagementId?: true
    artistManagementName?: true
    artistManagementCategoryId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsManagementsMaxAggregateInputType = {
    artistManagementId?: true
    artistManagementName?: true
    artistManagementCategoryId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsManagementsCountAggregateInputType = {
    artistManagementId?: true
    artistManagementName?: true
    artistManagementCategoryId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ArtistsManagementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsManagements to aggregate.
     */
    where?: ArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagements to fetch.
     */
    orderBy?: ArtistsManagementsOrderByWithRelationInput | ArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistsManagements
    **/
    _count?: true | ArtistsManagementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsManagementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsManagementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsManagementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsManagementsMaxAggregateInputType
  }

  export type GetArtistsManagementsAggregateType<T extends ArtistsManagementsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistsManagements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistsManagements[P]>
      : GetScalarType<T[P], AggregateArtistsManagements[P]>
  }




  export type ArtistsManagementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsManagementsWhereInput
    orderBy?: ArtistsManagementsOrderByWithAggregationInput | ArtistsManagementsOrderByWithAggregationInput[]
    by: ArtistsManagementsScalarFieldEnum[] | ArtistsManagementsScalarFieldEnum
    having?: ArtistsManagementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsManagementsCountAggregateInputType | true
    _avg?: ArtistsManagementsAvgAggregateInputType
    _sum?: ArtistsManagementsSumAggregateInputType
    _min?: ArtistsManagementsMinAggregateInputType
    _max?: ArtistsManagementsMaxAggregateInputType
  }

  export type ArtistsManagementsGroupByOutputType = {
    artistManagementId: number
    artistManagementName: string
    artistManagementCategoryId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ArtistsManagementsCountAggregateOutputType | null
    _avg: ArtistsManagementsAvgAggregateOutputType | null
    _sum: ArtistsManagementsSumAggregateOutputType | null
    _min: ArtistsManagementsMinAggregateOutputType | null
    _max: ArtistsManagementsMaxAggregateOutputType | null
  }

  type GetArtistsManagementsGroupByPayload<T extends ArtistsManagementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsManagementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsManagementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsManagementsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsManagementsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsManagementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistManagementId?: boolean
    artistManagementName?: boolean
    artistManagementCategoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    artistManagementCategory?: boolean | ArtistsManagementsCategoriesDefaultArgs<ExtArgs>
    artistsArtistsManagements?: boolean | ArtistsManagements$artistsArtistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistsManagements"]>



  export type ArtistsManagementsSelectScalar = {
    artistManagementId?: boolean
    artistManagementName?: boolean
    artistManagementCategoryId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ArtistsManagementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistManagementId" | "artistManagementName" | "artistManagementCategoryId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["artistsManagements"]>
  export type ArtistsManagementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistManagementCategory?: boolean | ArtistsManagementsCategoriesDefaultArgs<ExtArgs>
    artistsArtistsManagements?: boolean | ArtistsManagements$artistsArtistsManagementsArgs<ExtArgs>
    _count?: boolean | ArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistsManagementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistsManagements"
    objects: {
      artistManagementCategory: Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>
      artistsArtistsManagements: Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      artistManagementId: number
      artistManagementName: string
      artistManagementCategoryId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["artistsManagements"]>
    composites: {}
  }

  type ArtistsManagementsGetPayload<S extends boolean | null | undefined | ArtistsManagementsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsManagementsPayload, S>

  type ArtistsManagementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsManagementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsManagementsCountAggregateInputType | true
    }

  export interface ArtistsManagementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistsManagements'], meta: { name: 'ArtistsManagements' } }
    /**
     * Find zero or one ArtistsManagements that matches the filter.
     * @param {ArtistsManagementsFindUniqueArgs} args - Arguments to find a ArtistsManagements
     * @example
     * // Get one ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsManagementsFindUniqueArgs>(args: SelectSubset<T, ArtistsManagementsFindUniqueArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistsManagements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsManagementsFindUniqueOrThrowArgs} args - Arguments to find a ArtistsManagements
     * @example
     * // Get one ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsManagementsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsManagementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsFindFirstArgs} args - Arguments to find a ArtistsManagements
     * @example
     * // Get one ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsManagementsFindFirstArgs>(args?: SelectSubset<T, ArtistsManagementsFindFirstArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsManagements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsFindFirstOrThrowArgs} args - Arguments to find a ArtistsManagements
     * @example
     * // Get one ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsManagementsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsManagementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistsManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findMany()
     * 
     * // Get first 10 ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.findMany({ take: 10 })
     * 
     * // Only select the `artistManagementId`
     * const artistsManagementsWithArtistManagementIdOnly = await prisma.artistsManagements.findMany({ select: { artistManagementId: true } })
     * 
     */
    findMany<T extends ArtistsManagementsFindManyArgs>(args?: SelectSubset<T, ArtistsManagementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistsManagements.
     * @param {ArtistsManagementsCreateArgs} args - Arguments to create a ArtistsManagements.
     * @example
     * // Create one ArtistsManagements
     * const ArtistsManagements = await prisma.artistsManagements.create({
     *   data: {
     *     // ... data to create a ArtistsManagements
     *   }
     * })
     * 
     */
    create<T extends ArtistsManagementsCreateArgs>(args: SelectSubset<T, ArtistsManagementsCreateArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistsManagements.
     * @param {ArtistsManagementsCreateManyArgs} args - Arguments to create many ArtistsManagements.
     * @example
     * // Create many ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsManagementsCreateManyArgs>(args?: SelectSubset<T, ArtistsManagementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistsManagements.
     * @param {ArtistsManagementsDeleteArgs} args - Arguments to delete one ArtistsManagements.
     * @example
     * // Delete one ArtistsManagements
     * const ArtistsManagements = await prisma.artistsManagements.delete({
     *   where: {
     *     // ... filter to delete one ArtistsManagements
     *   }
     * })
     * 
     */
    delete<T extends ArtistsManagementsDeleteArgs>(args: SelectSubset<T, ArtistsManagementsDeleteArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistsManagements.
     * @param {ArtistsManagementsUpdateArgs} args - Arguments to update one ArtistsManagements.
     * @example
     * // Update one ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsManagementsUpdateArgs>(args: SelectSubset<T, ArtistsManagementsUpdateArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistsManagements.
     * @param {ArtistsManagementsDeleteManyArgs} args - Arguments to filter ArtistsManagements to delete.
     * @example
     * // Delete a few ArtistsManagements
     * const { count } = await prisma.artistsManagements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsManagementsDeleteManyArgs>(args?: SelectSubset<T, ArtistsManagementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsManagementsUpdateManyArgs>(args: SelectSubset<T, ArtistsManagementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistsManagements.
     * @param {ArtistsManagementsUpsertArgs} args - Arguments to update or create a ArtistsManagements.
     * @example
     * // Update or create a ArtistsManagements
     * const artistsManagements = await prisma.artistsManagements.upsert({
     *   create: {
     *     // ... data to create a ArtistsManagements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistsManagements we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsManagementsUpsertArgs>(args: SelectSubset<T, ArtistsManagementsUpsertArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsCountArgs} args - Arguments to filter ArtistsManagements to count.
     * @example
     * // Count the number of ArtistsManagements
     * const count = await prisma.artistsManagements.count({
     *   where: {
     *     // ... the filter for the ArtistsManagements we want to count
     *   }
     * })
    **/
    count<T extends ArtistsManagementsCountArgs>(
      args?: Subset<T, ArtistsManagementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsManagementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsManagementsAggregateArgs>(args: Subset<T, ArtistsManagementsAggregateArgs>): Prisma.PrismaPromise<GetArtistsManagementsAggregateType<T>>

    /**
     * Group by ArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsManagementsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsManagementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsManagementsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsManagementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsManagementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsManagementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistsManagements model
   */
  readonly fields: ArtistsManagementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistsManagements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsManagementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistManagementCategory<T extends ArtistsManagementsCategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsManagementsCategoriesDefaultArgs<ExtArgs>>): Prisma__ArtistsManagementsCategoriesClient<$Result.GetResult<Prisma.$ArtistsManagementsCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artistsArtistsManagements<T extends ArtistsManagements$artistsArtistsManagementsArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsManagements$artistsArtistsManagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArtistsManagements model
   */
  interface ArtistsManagementsFieldRefs {
    readonly artistManagementId: FieldRef<"ArtistsManagements", 'Int'>
    readonly artistManagementName: FieldRef<"ArtistsManagements", 'String'>
    readonly artistManagementCategoryId: FieldRef<"ArtistsManagements", 'Int'>
    readonly createdAt: FieldRef<"ArtistsManagements", 'DateTime'>
    readonly createdBy: FieldRef<"ArtistsManagements", 'String'>
    readonly isDeleted: FieldRef<"ArtistsManagements", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ArtistsManagements findUnique
   */
  export type ArtistsManagementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagements to fetch.
     */
    where: ArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsManagements findUniqueOrThrow
   */
  export type ArtistsManagementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagements to fetch.
     */
    where: ArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsManagements findFirst
   */
  export type ArtistsManagementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagements to fetch.
     */
    where?: ArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagements to fetch.
     */
    orderBy?: ArtistsManagementsOrderByWithRelationInput | ArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsManagements.
     */
    cursor?: ArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsManagements.
     */
    distinct?: ArtistsManagementsScalarFieldEnum | ArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsManagements findFirstOrThrow
   */
  export type ArtistsManagementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagements to fetch.
     */
    where?: ArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagements to fetch.
     */
    orderBy?: ArtistsManagementsOrderByWithRelationInput | ArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsManagements.
     */
    cursor?: ArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsManagements.
     */
    distinct?: ArtistsManagementsScalarFieldEnum | ArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsManagements findMany
   */
  export type ArtistsManagementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsManagements to fetch.
     */
    where?: ArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsManagements to fetch.
     */
    orderBy?: ArtistsManagementsOrderByWithRelationInput | ArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistsManagements.
     */
    cursor?: ArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsManagements.
     */
    skip?: number
    distinct?: ArtistsManagementsScalarFieldEnum | ArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsManagements create
   */
  export type ArtistsManagementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistsManagements.
     */
    data: XOR<ArtistsManagementsCreateInput, ArtistsManagementsUncheckedCreateInput>
  }

  /**
   * ArtistsManagements createMany
   */
  export type ArtistsManagementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistsManagements.
     */
    data: ArtistsManagementsCreateManyInput | ArtistsManagementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistsManagements update
   */
  export type ArtistsManagementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistsManagements.
     */
    data: XOR<ArtistsManagementsUpdateInput, ArtistsManagementsUncheckedUpdateInput>
    /**
     * Choose, which ArtistsManagements to update.
     */
    where: ArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsManagements updateMany
   */
  export type ArtistsManagementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistsManagements.
     */
    data: XOR<ArtistsManagementsUpdateManyMutationInput, ArtistsManagementsUncheckedUpdateManyInput>
    /**
     * Filter which ArtistsManagements to update
     */
    where?: ArtistsManagementsWhereInput
    /**
     * Limit how many ArtistsManagements to update.
     */
    limit?: number
  }

  /**
   * ArtistsManagements upsert
   */
  export type ArtistsManagementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistsManagements to update in case it exists.
     */
    where: ArtistsManagementsWhereUniqueInput
    /**
     * In case the ArtistsManagements found by the `where` argument doesn't exist, create a new ArtistsManagements with this data.
     */
    create: XOR<ArtistsManagementsCreateInput, ArtistsManagementsUncheckedCreateInput>
    /**
     * In case the ArtistsManagements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsManagementsUpdateInput, ArtistsManagementsUncheckedUpdateInput>
  }

  /**
   * ArtistsManagements delete
   */
  export type ArtistsManagementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter which ArtistsManagements to delete.
     */
    where: ArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsManagements deleteMany
   */
  export type ArtistsManagementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsManagements to delete
     */
    where?: ArtistsManagementsWhereInput
    /**
     * Limit how many ArtistsManagements to delete.
     */
    limit?: number
  }

  /**
   * ArtistsManagements.artistsArtistsManagements
   */
  export type ArtistsManagements$artistsArtistsManagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    where?: ArtistsArtistsManagementsWhereInput
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsArtistsManagementsScalarFieldEnum | ArtistsArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsManagements without action
   */
  export type ArtistsManagementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsManagements
     */
    select?: ArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsManagements
     */
    omit?: ArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsManagementsInclude<ExtArgs> | null
  }


  /**
   * Model ArtistsArtistsManagements
   */

  export type AggregateArtistsArtistsManagements = {
    _count: ArtistsArtistsManagementsCountAggregateOutputType | null
    _avg: ArtistsArtistsManagementsAvgAggregateOutputType | null
    _sum: ArtistsArtistsManagementsSumAggregateOutputType | null
    _min: ArtistsArtistsManagementsMinAggregateOutputType | null
    _max: ArtistsArtistsManagementsMaxAggregateOutputType | null
  }

  export type ArtistsArtistsManagementsAvgAggregateOutputType = {
    artistArtistManagementId: number | null
    artistId: number | null
    artistManagementId: number | null
  }

  export type ArtistsArtistsManagementsSumAggregateOutputType = {
    artistArtistManagementId: number | null
    artistId: number | null
    artistManagementId: number | null
  }

  export type ArtistsArtistsManagementsMinAggregateOutputType = {
    artistArtistManagementId: number | null
    artistId: number | null
    artistManagementId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsArtistsManagementsMaxAggregateOutputType = {
    artistArtistManagementId: number | null
    artistId: number | null
    artistManagementId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ArtistsArtistsManagementsCountAggregateOutputType = {
    artistArtistManagementId: number
    artistId: number
    artistManagementId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ArtistsArtistsManagementsAvgAggregateInputType = {
    artistArtistManagementId?: true
    artistId?: true
    artistManagementId?: true
  }

  export type ArtistsArtistsManagementsSumAggregateInputType = {
    artistArtistManagementId?: true
    artistId?: true
    artistManagementId?: true
  }

  export type ArtistsArtistsManagementsMinAggregateInputType = {
    artistArtistManagementId?: true
    artistId?: true
    artistManagementId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsArtistsManagementsMaxAggregateInputType = {
    artistArtistManagementId?: true
    artistId?: true
    artistManagementId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ArtistsArtistsManagementsCountAggregateInputType = {
    artistArtistManagementId?: true
    artistId?: true
    artistManagementId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ArtistsArtistsManagementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsArtistsManagements to aggregate.
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsArtistsManagements to fetch.
     */
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistsArtistsManagements
    **/
    _count?: true | ArtistsArtistsManagementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsArtistsManagementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsArtistsManagementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsArtistsManagementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsArtistsManagementsMaxAggregateInputType
  }

  export type GetArtistsArtistsManagementsAggregateType<T extends ArtistsArtistsManagementsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistsArtistsManagements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistsArtistsManagements[P]>
      : GetScalarType<T[P], AggregateArtistsArtistsManagements[P]>
  }




  export type ArtistsArtistsManagementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsArtistsManagementsWhereInput
    orderBy?: ArtistsArtistsManagementsOrderByWithAggregationInput | ArtistsArtistsManagementsOrderByWithAggregationInput[]
    by: ArtistsArtistsManagementsScalarFieldEnum[] | ArtistsArtistsManagementsScalarFieldEnum
    having?: ArtistsArtistsManagementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsArtistsManagementsCountAggregateInputType | true
    _avg?: ArtistsArtistsManagementsAvgAggregateInputType
    _sum?: ArtistsArtistsManagementsSumAggregateInputType
    _min?: ArtistsArtistsManagementsMinAggregateInputType
    _max?: ArtistsArtistsManagementsMaxAggregateInputType
  }

  export type ArtistsArtistsManagementsGroupByOutputType = {
    artistArtistManagementId: number
    artistId: number
    artistManagementId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ArtistsArtistsManagementsCountAggregateOutputType | null
    _avg: ArtistsArtistsManagementsAvgAggregateOutputType | null
    _sum: ArtistsArtistsManagementsSumAggregateOutputType | null
    _min: ArtistsArtistsManagementsMinAggregateOutputType | null
    _max: ArtistsArtistsManagementsMaxAggregateOutputType | null
  }

  type GetArtistsArtistsManagementsGroupByPayload<T extends ArtistsArtistsManagementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsArtistsManagementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsArtistsManagementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsArtistsManagementsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsArtistsManagementsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsArtistsManagementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artistArtistManagementId?: boolean
    artistId?: boolean
    artistManagementId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    artistManagement?: boolean | ArtistsManagementsDefaultArgs<ExtArgs>
    performances?: boolean | ArtistsArtistsManagements$performancesArgs<ExtArgs>
    _count?: boolean | ArtistsArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistsArtistsManagements"]>



  export type ArtistsArtistsManagementsSelectScalar = {
    artistArtistManagementId?: boolean
    artistId?: boolean
    artistManagementId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ArtistsArtistsManagementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artistArtistManagementId" | "artistId" | "artistManagementId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["artistsArtistsManagements"]>
  export type ArtistsArtistsManagementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    artistManagement?: boolean | ArtistsManagementsDefaultArgs<ExtArgs>
    performances?: boolean | ArtistsArtistsManagements$performancesArgs<ExtArgs>
    _count?: boolean | ArtistsArtistsManagementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ArtistsArtistsManagementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistsArtistsManagements"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      artistManagement: Prisma.$ArtistsManagementsPayload<ExtArgs>
      performances: Prisma.$PerformancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      artistArtistManagementId: number
      artistId: number
      artistManagementId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["artistsArtistsManagements"]>
    composites: {}
  }

  type ArtistsArtistsManagementsGetPayload<S extends boolean | null | undefined | ArtistsArtistsManagementsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload, S>

  type ArtistsArtistsManagementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsArtistsManagementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsArtistsManagementsCountAggregateInputType | true
    }

  export interface ArtistsArtistsManagementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistsArtistsManagements'], meta: { name: 'ArtistsArtistsManagements' } }
    /**
     * Find zero or one ArtistsArtistsManagements that matches the filter.
     * @param {ArtistsArtistsManagementsFindUniqueArgs} args - Arguments to find a ArtistsArtistsManagements
     * @example
     * // Get one ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsArtistsManagementsFindUniqueArgs>(args: SelectSubset<T, ArtistsArtistsManagementsFindUniqueArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistsArtistsManagements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsArtistsManagementsFindUniqueOrThrowArgs} args - Arguments to find a ArtistsArtistsManagements
     * @example
     * // Get one ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsArtistsManagementsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsArtistsManagementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsArtistsManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsFindFirstArgs} args - Arguments to find a ArtistsArtistsManagements
     * @example
     * // Get one ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsArtistsManagementsFindFirstArgs>(args?: SelectSubset<T, ArtistsArtistsManagementsFindFirstArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistsArtistsManagements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsFindFirstOrThrowArgs} args - Arguments to find a ArtistsArtistsManagements
     * @example
     * // Get one ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsArtistsManagementsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsArtistsManagementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistsArtistsManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findMany()
     * 
     * // Get first 10 ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.findMany({ take: 10 })
     * 
     * // Only select the `artistArtistManagementId`
     * const artistsArtistsManagementsWithArtistArtistManagementIdOnly = await prisma.artistsArtistsManagements.findMany({ select: { artistArtistManagementId: true } })
     * 
     */
    findMany<T extends ArtistsArtistsManagementsFindManyArgs>(args?: SelectSubset<T, ArtistsArtistsManagementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsCreateArgs} args - Arguments to create a ArtistsArtistsManagements.
     * @example
     * // Create one ArtistsArtistsManagements
     * const ArtistsArtistsManagements = await prisma.artistsArtistsManagements.create({
     *   data: {
     *     // ... data to create a ArtistsArtistsManagements
     *   }
     * })
     * 
     */
    create<T extends ArtistsArtistsManagementsCreateArgs>(args: SelectSubset<T, ArtistsArtistsManagementsCreateArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsCreateManyArgs} args - Arguments to create many ArtistsArtistsManagements.
     * @example
     * // Create many ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsArtistsManagementsCreateManyArgs>(args?: SelectSubset<T, ArtistsArtistsManagementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsDeleteArgs} args - Arguments to delete one ArtistsArtistsManagements.
     * @example
     * // Delete one ArtistsArtistsManagements
     * const ArtistsArtistsManagements = await prisma.artistsArtistsManagements.delete({
     *   where: {
     *     // ... filter to delete one ArtistsArtistsManagements
     *   }
     * })
     * 
     */
    delete<T extends ArtistsArtistsManagementsDeleteArgs>(args: SelectSubset<T, ArtistsArtistsManagementsDeleteArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsUpdateArgs} args - Arguments to update one ArtistsArtistsManagements.
     * @example
     * // Update one ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsArtistsManagementsUpdateArgs>(args: SelectSubset<T, ArtistsArtistsManagementsUpdateArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsDeleteManyArgs} args - Arguments to filter ArtistsArtistsManagements to delete.
     * @example
     * // Delete a few ArtistsArtistsManagements
     * const { count } = await prisma.artistsArtistsManagements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsArtistsManagementsDeleteManyArgs>(args?: SelectSubset<T, ArtistsArtistsManagementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistsArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsArtistsManagementsUpdateManyArgs>(args: SelectSubset<T, ArtistsArtistsManagementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistsArtistsManagements.
     * @param {ArtistsArtistsManagementsUpsertArgs} args - Arguments to update or create a ArtistsArtistsManagements.
     * @example
     * // Update or create a ArtistsArtistsManagements
     * const artistsArtistsManagements = await prisma.artistsArtistsManagements.upsert({
     *   create: {
     *     // ... data to create a ArtistsArtistsManagements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistsArtistsManagements we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsArtistsManagementsUpsertArgs>(args: SelectSubset<T, ArtistsArtistsManagementsUpsertArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistsArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsCountArgs} args - Arguments to filter ArtistsArtistsManagements to count.
     * @example
     * // Count the number of ArtistsArtistsManagements
     * const count = await prisma.artistsArtistsManagements.count({
     *   where: {
     *     // ... the filter for the ArtistsArtistsManagements we want to count
     *   }
     * })
    **/
    count<T extends ArtistsArtistsManagementsCountArgs>(
      args?: Subset<T, ArtistsArtistsManagementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsArtistsManagementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistsArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsArtistsManagementsAggregateArgs>(args: Subset<T, ArtistsArtistsManagementsAggregateArgs>): Prisma.PrismaPromise<GetArtistsArtistsManagementsAggregateType<T>>

    /**
     * Group by ArtistsArtistsManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsArtistsManagementsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsArtistsManagementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsArtistsManagementsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsArtistsManagementsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsArtistsManagementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsArtistsManagementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistsArtistsManagements model
   */
  readonly fields: ArtistsArtistsManagementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistsArtistsManagements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsArtistsManagementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artistManagement<T extends ArtistsManagementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsManagementsDefaultArgs<ExtArgs>>): Prisma__ArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsManagementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    performances<T extends ArtistsArtistsManagements$performancesArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsArtistsManagements$performancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ArtistsArtistsManagements model
   */
  interface ArtistsArtistsManagementsFieldRefs {
    readonly artistArtistManagementId: FieldRef<"ArtistsArtistsManagements", 'Int'>
    readonly artistId: FieldRef<"ArtistsArtistsManagements", 'Int'>
    readonly artistManagementId: FieldRef<"ArtistsArtistsManagements", 'Int'>
    readonly createdAt: FieldRef<"ArtistsArtistsManagements", 'DateTime'>
    readonly createdBy: FieldRef<"ArtistsArtistsManagements", 'String'>
    readonly isDeleted: FieldRef<"ArtistsArtistsManagements", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ArtistsArtistsManagements findUnique
   */
  export type ArtistsArtistsManagementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsArtistsManagements to fetch.
     */
    where: ArtistsArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsArtistsManagements findUniqueOrThrow
   */
  export type ArtistsArtistsManagementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsArtistsManagements to fetch.
     */
    where: ArtistsArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsArtistsManagements findFirst
   */
  export type ArtistsArtistsManagementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsArtistsManagements to fetch.
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsArtistsManagements to fetch.
     */
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsArtistsManagements.
     */
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsArtistsManagements.
     */
    distinct?: ArtistsArtistsManagementsScalarFieldEnum | ArtistsArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsArtistsManagements findFirstOrThrow
   */
  export type ArtistsArtistsManagementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsArtistsManagements to fetch.
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsArtistsManagements to fetch.
     */
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsArtistsManagements.
     */
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsArtistsManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsArtistsManagements.
     */
    distinct?: ArtistsArtistsManagementsScalarFieldEnum | ArtistsArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsArtistsManagements findMany
   */
  export type ArtistsArtistsManagementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsArtistsManagements to fetch.
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsArtistsManagements to fetch.
     */
    orderBy?: ArtistsArtistsManagementsOrderByWithRelationInput | ArtistsArtistsManagementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistsArtistsManagements.
     */
    cursor?: ArtistsArtistsManagementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsArtistsManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsArtistsManagements.
     */
    skip?: number
    distinct?: ArtistsArtistsManagementsScalarFieldEnum | ArtistsArtistsManagementsScalarFieldEnum[]
  }

  /**
   * ArtistsArtistsManagements create
   */
  export type ArtistsArtistsManagementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistsArtistsManagements.
     */
    data: XOR<ArtistsArtistsManagementsCreateInput, ArtistsArtistsManagementsUncheckedCreateInput>
  }

  /**
   * ArtistsArtistsManagements createMany
   */
  export type ArtistsArtistsManagementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistsArtistsManagements.
     */
    data: ArtistsArtistsManagementsCreateManyInput | ArtistsArtistsManagementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistsArtistsManagements update
   */
  export type ArtistsArtistsManagementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistsArtistsManagements.
     */
    data: XOR<ArtistsArtistsManagementsUpdateInput, ArtistsArtistsManagementsUncheckedUpdateInput>
    /**
     * Choose, which ArtistsArtistsManagements to update.
     */
    where: ArtistsArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsArtistsManagements updateMany
   */
  export type ArtistsArtistsManagementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistsArtistsManagements.
     */
    data: XOR<ArtistsArtistsManagementsUpdateManyMutationInput, ArtistsArtistsManagementsUncheckedUpdateManyInput>
    /**
     * Filter which ArtistsArtistsManagements to update
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * Limit how many ArtistsArtistsManagements to update.
     */
    limit?: number
  }

  /**
   * ArtistsArtistsManagements upsert
   */
  export type ArtistsArtistsManagementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistsArtistsManagements to update in case it exists.
     */
    where: ArtistsArtistsManagementsWhereUniqueInput
    /**
     * In case the ArtistsArtistsManagements found by the `where` argument doesn't exist, create a new ArtistsArtistsManagements with this data.
     */
    create: XOR<ArtistsArtistsManagementsCreateInput, ArtistsArtistsManagementsUncheckedCreateInput>
    /**
     * In case the ArtistsArtistsManagements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsArtistsManagementsUpdateInput, ArtistsArtistsManagementsUncheckedUpdateInput>
  }

  /**
   * ArtistsArtistsManagements delete
   */
  export type ArtistsArtistsManagementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
    /**
     * Filter which ArtistsArtistsManagements to delete.
     */
    where: ArtistsArtistsManagementsWhereUniqueInput
  }

  /**
   * ArtistsArtistsManagements deleteMany
   */
  export type ArtistsArtistsManagementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsArtistsManagements to delete
     */
    where?: ArtistsArtistsManagementsWhereInput
    /**
     * Limit how many ArtistsArtistsManagements to delete.
     */
    limit?: number
  }

  /**
   * ArtistsArtistsManagements.performances
   */
  export type ArtistsArtistsManagements$performancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    where?: PerformancesWhereInput
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    cursor?: PerformancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * ArtistsArtistsManagements without action
   */
  export type ArtistsArtistsManagementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsArtistsManagements
     */
    select?: ArtistsArtistsManagementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistsArtistsManagements
     */
    omit?: ArtistsArtistsManagementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsArtistsManagementsInclude<ExtArgs> | null
  }


  /**
   * Model Performances
   */

  export type AggregatePerformances = {
    _count: PerformancesCountAggregateOutputType | null
    _avg: PerformancesAvgAggregateOutputType | null
    _sum: PerformancesSumAggregateOutputType | null
    _min: PerformancesMinAggregateOutputType | null
    _max: PerformancesMaxAggregateOutputType | null
  }

  export type PerformancesAvgAggregateOutputType = {
    performanceId: number | null
    performanceArtistArtistManagementId: number | null
    performanceShowId: number | null
    editionId: number | null
  }

  export type PerformancesSumAggregateOutputType = {
    performanceId: number | null
    performanceArtistArtistManagementId: number | null
    performanceShowId: number | null
    editionId: number | null
  }

  export type PerformancesMinAggregateOutputType = {
    performanceId: number | null
    performanceName: string | null
    performanceArtistArtistManagementId: number | null
    performanceShowId: number | null
    editionId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type PerformancesMaxAggregateOutputType = {
    performanceId: number | null
    performanceName: string | null
    performanceArtistArtistManagementId: number | null
    performanceShowId: number | null
    editionId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type PerformancesCountAggregateOutputType = {
    performanceId: number
    performanceName: number
    performanceArtistArtistManagementId: number
    performanceShowId: number
    editionId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type PerformancesAvgAggregateInputType = {
    performanceId?: true
    performanceArtistArtistManagementId?: true
    performanceShowId?: true
    editionId?: true
  }

  export type PerformancesSumAggregateInputType = {
    performanceId?: true
    performanceArtistArtistManagementId?: true
    performanceShowId?: true
    editionId?: true
  }

  export type PerformancesMinAggregateInputType = {
    performanceId?: true
    performanceName?: true
    performanceArtistArtistManagementId?: true
    performanceShowId?: true
    editionId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type PerformancesMaxAggregateInputType = {
    performanceId?: true
    performanceName?: true
    performanceArtistArtistManagementId?: true
    performanceShowId?: true
    editionId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type PerformancesCountAggregateInputType = {
    performanceId?: true
    performanceName?: true
    performanceArtistArtistManagementId?: true
    performanceShowId?: true
    editionId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type PerformancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Performances to aggregate.
     */
    where?: PerformancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Performances
    **/
    _count?: true | PerformancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformancesMaxAggregateInputType
  }

  export type GetPerformancesAggregateType<T extends PerformancesAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformances[P]>
      : GetScalarType<T[P], AggregatePerformances[P]>
  }




  export type PerformancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformancesWhereInput
    orderBy?: PerformancesOrderByWithAggregationInput | PerformancesOrderByWithAggregationInput[]
    by: PerformancesScalarFieldEnum[] | PerformancesScalarFieldEnum
    having?: PerformancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformancesCountAggregateInputType | true
    _avg?: PerformancesAvgAggregateInputType
    _sum?: PerformancesSumAggregateInputType
    _min?: PerformancesMinAggregateInputType
    _max?: PerformancesMaxAggregateInputType
  }

  export type PerformancesGroupByOutputType = {
    performanceId: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    editionId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: PerformancesCountAggregateOutputType | null
    _avg: PerformancesAvgAggregateOutputType | null
    _sum: PerformancesSumAggregateOutputType | null
    _min: PerformancesMinAggregateOutputType | null
    _max: PerformancesMaxAggregateOutputType | null
  }

  type GetPerformancesGroupByPayload<T extends PerformancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformancesGroupByOutputType[P]>
            : GetScalarType<T[P], PerformancesGroupByOutputType[P]>
        }
      >
    >


  export type PerformancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    performanceId?: boolean
    performanceName?: boolean
    performanceArtistArtistManagementId?: boolean
    performanceShowId?: boolean
    editionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    artistManagementLink?: boolean | ArtistsArtistsManagementsDefaultArgs<ExtArgs>
    show?: boolean | ShowsDefaultArgs<ExtArgs>
    edition?: boolean | EditionsDefaultArgs<ExtArgs>
    contract?: boolean | Performances$contractArgs<ExtArgs>
  }, ExtArgs["result"]["performances"]>



  export type PerformancesSelectScalar = {
    performanceId?: boolean
    performanceName?: boolean
    performanceArtistArtistManagementId?: boolean
    performanceShowId?: boolean
    editionId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type PerformancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"performanceId" | "performanceName" | "performanceArtistArtistManagementId" | "performanceShowId" | "editionId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["performances"]>
  export type PerformancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artistManagementLink?: boolean | ArtistsArtistsManagementsDefaultArgs<ExtArgs>
    show?: boolean | ShowsDefaultArgs<ExtArgs>
    edition?: boolean | EditionsDefaultArgs<ExtArgs>
    contract?: boolean | Performances$contractArgs<ExtArgs>
  }

  export type $PerformancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Performances"
    objects: {
      artistManagementLink: Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>
      show: Prisma.$ShowsPayload<ExtArgs>
      edition: Prisma.$EditionsPayload<ExtArgs>
      contract: Prisma.$ContractsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      performanceId: number
      performanceName: string
      performanceArtistArtistManagementId: number
      performanceShowId: number
      editionId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["performances"]>
    composites: {}
  }

  type PerformancesGetPayload<S extends boolean | null | undefined | PerformancesDefaultArgs> = $Result.GetResult<Prisma.$PerformancesPayload, S>

  type PerformancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerformancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerformancesCountAggregateInputType | true
    }

  export interface PerformancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Performances'], meta: { name: 'Performances' } }
    /**
     * Find zero or one Performances that matches the filter.
     * @param {PerformancesFindUniqueArgs} args - Arguments to find a Performances
     * @example
     * // Get one Performances
     * const performances = await prisma.performances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformancesFindUniqueArgs>(args: SelectSubset<T, PerformancesFindUniqueArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Performances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformancesFindUniqueOrThrowArgs} args - Arguments to find a Performances
     * @example
     * // Get one Performances
     * const performances = await prisma.performances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformancesFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Performances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesFindFirstArgs} args - Arguments to find a Performances
     * @example
     * // Get one Performances
     * const performances = await prisma.performances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformancesFindFirstArgs>(args?: SelectSubset<T, PerformancesFindFirstArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Performances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesFindFirstOrThrowArgs} args - Arguments to find a Performances
     * @example
     * // Get one Performances
     * const performances = await prisma.performances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformancesFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Performances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performances
     * const performances = await prisma.performances.findMany()
     * 
     * // Get first 10 Performances
     * const performances = await prisma.performances.findMany({ take: 10 })
     * 
     * // Only select the `performanceId`
     * const performancesWithPerformanceIdOnly = await prisma.performances.findMany({ select: { performanceId: true } })
     * 
     */
    findMany<T extends PerformancesFindManyArgs>(args?: SelectSubset<T, PerformancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Performances.
     * @param {PerformancesCreateArgs} args - Arguments to create a Performances.
     * @example
     * // Create one Performances
     * const Performances = await prisma.performances.create({
     *   data: {
     *     // ... data to create a Performances
     *   }
     * })
     * 
     */
    create<T extends PerformancesCreateArgs>(args: SelectSubset<T, PerformancesCreateArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Performances.
     * @param {PerformancesCreateManyArgs} args - Arguments to create many Performances.
     * @example
     * // Create many Performances
     * const performances = await prisma.performances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformancesCreateManyArgs>(args?: SelectSubset<T, PerformancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Performances.
     * @param {PerformancesDeleteArgs} args - Arguments to delete one Performances.
     * @example
     * // Delete one Performances
     * const Performances = await prisma.performances.delete({
     *   where: {
     *     // ... filter to delete one Performances
     *   }
     * })
     * 
     */
    delete<T extends PerformancesDeleteArgs>(args: SelectSubset<T, PerformancesDeleteArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Performances.
     * @param {PerformancesUpdateArgs} args - Arguments to update one Performances.
     * @example
     * // Update one Performances
     * const performances = await prisma.performances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformancesUpdateArgs>(args: SelectSubset<T, PerformancesUpdateArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Performances.
     * @param {PerformancesDeleteManyArgs} args - Arguments to filter Performances to delete.
     * @example
     * // Delete a few Performances
     * const { count } = await prisma.performances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformancesDeleteManyArgs>(args?: SelectSubset<T, PerformancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performances
     * const performances = await prisma.performances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformancesUpdateManyArgs>(args: SelectSubset<T, PerformancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Performances.
     * @param {PerformancesUpsertArgs} args - Arguments to update or create a Performances.
     * @example
     * // Update or create a Performances
     * const performances = await prisma.performances.upsert({
     *   create: {
     *     // ... data to create a Performances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performances we want to update
     *   }
     * })
     */
    upsert<T extends PerformancesUpsertArgs>(args: SelectSubset<T, PerformancesUpsertArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesCountArgs} args - Arguments to filter Performances to count.
     * @example
     * // Count the number of Performances
     * const count = await prisma.performances.count({
     *   where: {
     *     // ... the filter for the Performances we want to count
     *   }
     * })
    **/
    count<T extends PerformancesCountArgs>(
      args?: Subset<T, PerformancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerformancesAggregateArgs>(args: Subset<T, PerformancesAggregateArgs>): Prisma.PrismaPromise<GetPerformancesAggregateType<T>>

    /**
     * Group by Performances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformancesGroupByArgs} args - Group by arguments.
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
      T extends PerformancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformancesGroupByArgs['orderBy'] }
        : { orderBy?: PerformancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerformancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Performances model
   */
  readonly fields: PerformancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Performances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artistManagementLink<T extends ArtistsArtistsManagementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsArtistsManagementsDefaultArgs<ExtArgs>>): Prisma__ArtistsArtistsManagementsClient<$Result.GetResult<Prisma.$ArtistsArtistsManagementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    show<T extends ShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShowsDefaultArgs<ExtArgs>>): Prisma__ShowsClient<$Result.GetResult<Prisma.$ShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    edition<T extends EditionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EditionsDefaultArgs<ExtArgs>>): Prisma__EditionsClient<$Result.GetResult<Prisma.$EditionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Performances$contractArgs<ExtArgs> = {}>(args?: Subset<T, Performances$contractArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Performances model
   */
  interface PerformancesFieldRefs {
    readonly performanceId: FieldRef<"Performances", 'Int'>
    readonly performanceName: FieldRef<"Performances", 'String'>
    readonly performanceArtistArtistManagementId: FieldRef<"Performances", 'Int'>
    readonly performanceShowId: FieldRef<"Performances", 'Int'>
    readonly editionId: FieldRef<"Performances", 'Int'>
    readonly createdAt: FieldRef<"Performances", 'DateTime'>
    readonly createdBy: FieldRef<"Performances", 'String'>
    readonly isDeleted: FieldRef<"Performances", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Performances findUnique
   */
  export type PerformancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where: PerformancesWhereUniqueInput
  }

  /**
   * Performances findUniqueOrThrow
   */
  export type PerformancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where: PerformancesWhereUniqueInput
  }

  /**
   * Performances findFirst
   */
  export type PerformancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where?: PerformancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performances.
     */
    cursor?: PerformancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * Performances findFirstOrThrow
   */
  export type PerformancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where?: PerformancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Performances.
     */
    cursor?: PerformancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Performances.
     */
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * Performances findMany
   */
  export type PerformancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter, which Performances to fetch.
     */
    where?: PerformancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Performances to fetch.
     */
    orderBy?: PerformancesOrderByWithRelationInput | PerformancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Performances.
     */
    cursor?: PerformancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Performances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Performances.
     */
    skip?: number
    distinct?: PerformancesScalarFieldEnum | PerformancesScalarFieldEnum[]
  }

  /**
   * Performances create
   */
  export type PerformancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * The data needed to create a Performances.
     */
    data: XOR<PerformancesCreateInput, PerformancesUncheckedCreateInput>
  }

  /**
   * Performances createMany
   */
  export type PerformancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Performances.
     */
    data: PerformancesCreateManyInput | PerformancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Performances update
   */
  export type PerformancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * The data needed to update a Performances.
     */
    data: XOR<PerformancesUpdateInput, PerformancesUncheckedUpdateInput>
    /**
     * Choose, which Performances to update.
     */
    where: PerformancesWhereUniqueInput
  }

  /**
   * Performances updateMany
   */
  export type PerformancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Performances.
     */
    data: XOR<PerformancesUpdateManyMutationInput, PerformancesUncheckedUpdateManyInput>
    /**
     * Filter which Performances to update
     */
    where?: PerformancesWhereInput
    /**
     * Limit how many Performances to update.
     */
    limit?: number
  }

  /**
   * Performances upsert
   */
  export type PerformancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * The filter to search for the Performances to update in case it exists.
     */
    where: PerformancesWhereUniqueInput
    /**
     * In case the Performances found by the `where` argument doesn't exist, create a new Performances with this data.
     */
    create: XOR<PerformancesCreateInput, PerformancesUncheckedCreateInput>
    /**
     * In case the Performances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformancesUpdateInput, PerformancesUncheckedUpdateInput>
  }

  /**
   * Performances delete
   */
  export type PerformancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
    /**
     * Filter which Performances to delete.
     */
    where: PerformancesWhereUniqueInput
  }

  /**
   * Performances deleteMany
   */
  export type PerformancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Performances to delete
     */
    where?: PerformancesWhereInput
    /**
     * Limit how many Performances to delete.
     */
    limit?: number
  }

  /**
   * Performances.contract
   */
  export type Performances$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    where?: ContractsWhereInput
  }

  /**
   * Performances without action
   */
  export type PerformancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Performances
     */
    select?: PerformancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Performances
     */
    omit?: PerformancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformancesInclude<ExtArgs> | null
  }


  /**
   * Model Contracts
   */

  export type AggregateContracts = {
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  export type ContractsAvgAggregateOutputType = {
    contractId: number | null
    performanceId: number | null
  }

  export type ContractsSumAggregateOutputType = {
    contractId: number | null
    performanceId: number | null
  }

  export type ContractsMinAggregateOutputType = {
    contractId: number | null
    contractName: string | null
    performanceId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ContractsMaxAggregateOutputType = {
    contractId: number | null
    contractName: string | null
    performanceId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type ContractsCountAggregateOutputType = {
    contractId: number
    contractName: number
    performanceId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type ContractsAvgAggregateInputType = {
    contractId?: true
    performanceId?: true
  }

  export type ContractsSumAggregateInputType = {
    contractId?: true
    performanceId?: true
  }

  export type ContractsMinAggregateInputType = {
    contractId?: true
    contractName?: true
    performanceId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ContractsMaxAggregateInputType = {
    contractId?: true
    contractName?: true
    performanceId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type ContractsCountAggregateInputType = {
    contractId?: true
    contractName?: true
    performanceId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
    _all?: true
  }

  export type ContractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to aggregate.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractsMaxAggregateInputType
  }

  export type GetContractsAggregateType<T extends ContractsAggregateArgs> = {
        [P in keyof T & keyof AggregateContracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContracts[P]>
      : GetScalarType<T[P], AggregateContracts[P]>
  }




  export type ContractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractsWhereInput
    orderBy?: ContractsOrderByWithAggregationInput | ContractsOrderByWithAggregationInput[]
    by: ContractsScalarFieldEnum[] | ContractsScalarFieldEnum
    having?: ContractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractsCountAggregateInputType | true
    _avg?: ContractsAvgAggregateInputType
    _sum?: ContractsSumAggregateInputType
    _min?: ContractsMinAggregateInputType
    _max?: ContractsMaxAggregateInputType
  }

  export type ContractsGroupByOutputType = {
    contractId: number
    contractName: string
    performanceId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  type GetContractsGroupByPayload<T extends ContractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractsGroupByOutputType[P]>
            : GetScalarType<T[P], ContractsGroupByOutputType[P]>
        }
      >
    >


  export type ContractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    contractId?: boolean
    contractName?: boolean
    performanceId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    performance?: boolean | PerformancesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contracts"]>



  export type ContractsSelectScalar = {
    contractId?: boolean
    contractName?: boolean
    performanceId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type ContractsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"contractId" | "contractName" | "performanceId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["contracts"]>
  export type ContractsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    performance?: boolean | PerformancesDefaultArgs<ExtArgs>
  }

  export type $ContractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contracts"
    objects: {
      performance: Prisma.$PerformancesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      contractId: number
      contractName: string
      performanceId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
    }, ExtArgs["result"]["contracts"]>
    composites: {}
  }

  type ContractsGetPayload<S extends boolean | null | undefined | ContractsDefaultArgs> = $Result.GetResult<Prisma.$ContractsPayload, S>

  type ContractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractsCountAggregateInputType | true
    }

  export interface ContractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contracts'], meta: { name: 'Contracts' } }
    /**
     * Find zero or one Contracts that matches the filter.
     * @param {ContractsFindUniqueArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractsFindUniqueArgs>(args: SelectSubset<T, ContractsFindUniqueArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contracts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractsFindUniqueOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractsFindFirstArgs>(args?: SelectSubset<T, ContractsFindFirstArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contracts.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contracts.findMany({ take: 10 })
     * 
     * // Only select the `contractId`
     * const contractsWithContractIdOnly = await prisma.contracts.findMany({ select: { contractId: true } })
     * 
     */
    findMany<T extends ContractsFindManyArgs>(args?: SelectSubset<T, ContractsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contracts.
     * @param {ContractsCreateArgs} args - Arguments to create a Contracts.
     * @example
     * // Create one Contracts
     * const Contracts = await prisma.contracts.create({
     *   data: {
     *     // ... data to create a Contracts
     *   }
     * })
     * 
     */
    create<T extends ContractsCreateArgs>(args: SelectSubset<T, ContractsCreateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractsCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractsCreateManyArgs>(args?: SelectSubset<T, ContractsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contracts.
     * @param {ContractsDeleteArgs} args - Arguments to delete one Contracts.
     * @example
     * // Delete one Contracts
     * const Contracts = await prisma.contracts.delete({
     *   where: {
     *     // ... filter to delete one Contracts
     *   }
     * })
     * 
     */
    delete<T extends ContractsDeleteArgs>(args: SelectSubset<T, ContractsDeleteArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contracts.
     * @param {ContractsUpdateArgs} args - Arguments to update one Contracts.
     * @example
     * // Update one Contracts
     * const contracts = await prisma.contracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractsUpdateArgs>(args: SelectSubset<T, ContractsUpdateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractsDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractsDeleteManyArgs>(args?: SelectSubset<T, ContractsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractsUpdateManyArgs>(args: SelectSubset<T, ContractsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contracts.
     * @param {ContractsUpsertArgs} args - Arguments to update or create a Contracts.
     * @example
     * // Update or create a Contracts
     * const contracts = await prisma.contracts.upsert({
     *   create: {
     *     // ... data to create a Contracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contracts we want to update
     *   }
     * })
     */
    upsert<T extends ContractsUpsertArgs>(args: SelectSubset<T, ContractsUpsertArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contracts.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractsCountArgs>(
      args?: Subset<T, ContractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContractsAggregateArgs>(args: Subset<T, ContractsAggregateArgs>): Prisma.PrismaPromise<GetContractsAggregateType<T>>

    /**
     * Group by Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsGroupByArgs} args - Group by arguments.
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
      T extends ContractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractsGroupByArgs['orderBy'] }
        : { orderBy?: ContractsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contracts model
   */
  readonly fields: ContractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    performance<T extends PerformancesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerformancesDefaultArgs<ExtArgs>>): Prisma__PerformancesClient<$Result.GetResult<Prisma.$PerformancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contracts model
   */
  interface ContractsFieldRefs {
    readonly contractId: FieldRef<"Contracts", 'Int'>
    readonly contractName: FieldRef<"Contracts", 'String'>
    readonly performanceId: FieldRef<"Contracts", 'Int'>
    readonly createdAt: FieldRef<"Contracts", 'DateTime'>
    readonly createdBy: FieldRef<"Contracts", 'String'>
    readonly isDeleted: FieldRef<"Contracts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Contracts findUnique
   */
  export type ContractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findUniqueOrThrow
   */
  export type ContractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findFirst
   */
  export type ContractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findFirstOrThrow
   */
  export type ContractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findMany
   */
  export type ContractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts create
   */
  export type ContractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contracts.
     */
    data: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
  }

  /**
   * Contracts createMany
   */
  export type ContractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractsCreateManyInput | ContractsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contracts update
   */
  export type ContractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contracts.
     */
    data: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
    /**
     * Choose, which Contracts to update.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts updateMany
   */
  export type ContractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contracts upsert
   */
  export type ContractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contracts to update in case it exists.
     */
    where: ContractsWhereUniqueInput
    /**
     * In case the Contracts found by the `where` argument doesn't exist, create a new Contracts with this data.
     */
    create: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
    /**
     * In case the Contracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
  }

  /**
   * Contracts delete
   */
  export type ContractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter which Contracts to delete.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts deleteMany
   */
  export type ContractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contracts without action
   */
  export type ContractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
  }


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
    languageId: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    languageId: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    userFirstName: string | null
    userLastName: string | null
    userCode: string | null
    languageId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    userFirstName: string | null
    userLastName: string | null
    userCode: string | null
    languageId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    userFirstName: number
    userLastName: number
    userCode: number
    languageId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    languageId?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    languageId?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    userFirstName?: true
    userLastName?: true
    userCode?: true
    languageId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    userFirstName?: true
    userLastName?: true
    userCode?: true
    languageId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    userFirstName?: true
    userLastName?: true
    userCode?: true
    languageId?: true
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
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
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
    userFirstName?: boolean
    userLastName?: boolean
    userCode?: boolean
    languageId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    language?: boolean | LanguagesDefaultArgs<ExtArgs>
    userGroups?: boolean | Users$userGroupsArgs<ExtArgs>
    auth?: boolean | Users$authArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    userId?: boolean
    userFirstName?: boolean
    userLastName?: boolean
    userCode?: boolean
    languageId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "userFirstName" | "userLastName" | "userCode" | "languageId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | LanguagesDefaultArgs<ExtArgs>
    userGroups?: boolean | Users$userGroupsArgs<ExtArgs>
    auth?: boolean | Users$authArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      language: Prisma.$LanguagesPayload<ExtArgs>
      userGroups: Prisma.$UsersAdGroupsPayload<ExtArgs>[]
      auth: Prisma.$UsersAuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      userFirstName: string
      userLastName: string
      userCode: string
      languageId: number
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
    userGroups<T extends Users$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auth<T extends Users$authArgs<ExtArgs> = {}>(args?: Subset<T, Users$authArgs<ExtArgs>>): Prisma__UsersAuthClient<$Result.GetResult<Prisma.$UsersAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userFirstName: FieldRef<"Users", 'String'>
    readonly userLastName: FieldRef<"Users", 'String'>
    readonly userCode: FieldRef<"Users", 'String'>
    readonly languageId: FieldRef<"Users", 'Int'>
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
   * Users.userGroups
   */
  export type Users$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    userAuthId: number | null
    userId: number | null
  }

  export type UsersAuthSumAggregateOutputType = {
    userAuthId: number | null
    userId: number | null
  }

  export type UsersAuthMinAggregateOutputType = {
    userAuthId: number | null
    email: string | null
    password: string | null
    userId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersAuthMaxAggregateOutputType = {
    userAuthId: number | null
    email: string | null
    password: string | null
    userId: number | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type UsersAuthCountAggregateOutputType = {
    userAuthId: number
    email: number
    password: number
    userId: number
    createdAt: number
    createdBy: number
    isDeleted: number
    _all: number
  }


  export type UsersAuthAvgAggregateInputType = {
    userAuthId?: true
    userId?: true
  }

  export type UsersAuthSumAggregateInputType = {
    userAuthId?: true
    userId?: true
  }

  export type UsersAuthMinAggregateInputType = {
    userAuthId?: true
    email?: true
    password?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersAuthMaxAggregateInputType = {
    userAuthId?: true
    email?: true
    password?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type UsersAuthCountAggregateInputType = {
    userAuthId?: true
    email?: true
    password?: true
    userId?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
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
    userAuthId: number
    email: string
    password: string
    userId: number
    createdAt: Date
    createdBy: string
    isDeleted: boolean
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
    userAuthId?: boolean
    email?: boolean
    password?: boolean
    userId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersAuth"]>



  export type UsersAuthSelectScalar = {
    userAuthId?: boolean
    email?: boolean
    password?: boolean
    userId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type UsersAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userAuthId" | "email" | "password" | "userId" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["usersAuth"]>
  export type UsersAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $UsersAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersAuth"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userAuthId: number
      email: string
      password: string
      userId: number
      createdAt: Date
      createdBy: string
      isDeleted: boolean
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
     * // Only select the `userAuthId`
     * const usersAuthWithUserAuthIdOnly = await prisma.usersAuth.findMany({ select: { userAuthId: true } })
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
    readonly userAuthId: FieldRef<"UsersAuth", 'Int'>
    readonly email: FieldRef<"UsersAuth", 'String'>
    readonly password: FieldRef<"UsersAuth", 'String'>
    readonly userId: FieldRef<"UsersAuth", 'Int'>
    readonly createdAt: FieldRef<"UsersAuth", 'DateTime'>
    readonly createdBy: FieldRef<"UsersAuth", 'String'>
    readonly isDeleted: FieldRef<"UsersAuth", 'Boolean'>
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
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type AdGroupsMaxAggregateOutputType = {
    adGroupId: number | null
    adGroupName: string | null
    createdAt: Date | null
    createdBy: string | null
    isDeleted: boolean | null
  }

  export type AdGroupsCountAggregateOutputType = {
    adGroupId: number
    adGroupName: number
    createdAt: number
    createdBy: number
    isDeleted: number
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
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type AdGroupsMaxAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
  }

  export type AdGroupsCountAggregateInputType = {
    adGroupId?: true
    adGroupName?: true
    createdAt?: true
    createdBy?: true
    isDeleted?: true
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
    createdAt: Date
    createdBy: string
    isDeleted: boolean
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
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
    userGroups?: boolean | AdGroups$userGroupsArgs<ExtArgs>
    _count?: boolean | AdGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adGroups"]>



  export type AdGroupsSelectScalar = {
    adGroupId?: boolean
    adGroupName?: boolean
    createdAt?: boolean
    createdBy?: boolean
    isDeleted?: boolean
  }

  export type AdGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adGroupId" | "adGroupName" | "createdAt" | "createdBy" | "isDeleted", ExtArgs["result"]["adGroups"]>
  export type AdGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userGroups?: boolean | AdGroups$userGroupsArgs<ExtArgs>
    _count?: boolean | AdGroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdGroups"
    objects: {
      userGroups: Prisma.$UsersAdGroupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      adGroupId: number
      adGroupName: string
      createdAt: Date
      createdBy: string
      isDeleted: boolean
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
    userGroups<T extends AdGroups$userGroupsArgs<ExtArgs> = {}>(args?: Subset<T, AdGroups$userGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersAdGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"AdGroups", 'DateTime'>
    readonly createdBy: FieldRef<"AdGroups", 'String'>
    readonly isDeleted: FieldRef<"AdGroups", 'Boolean'>
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
   * AdGroups.userGroups
   */
  export type AdGroups$userGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    user?: boolean | UsersDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupsDefaultArgs<ExtArgs>
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
    user?: boolean | UsersDefaultArgs<ExtArgs>
    adGroup?: boolean | AdGroupsDefaultArgs<ExtArgs>
  }

  export type $UsersAdGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersAdGroups"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      adGroup: Prisma.$AdGroupsPayload<ExtArgs>
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
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adGroup<T extends AdGroupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdGroupsDefaultArgs<ExtArgs>>): Prisma__AdGroupsClient<$Result.GetResult<Prisma.$AdGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EditionsScalarFieldEnum: {
    editionId: 'editionId',
    editionName: 'editionName',
    editionYear: 'editionYear',
    isCurrentedition: 'isCurrentedition',
    editionStatusId: 'editionStatusId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type EditionsScalarFieldEnum = (typeof EditionsScalarFieldEnum)[keyof typeof EditionsScalarFieldEnum]


  export const EditionsStatusesScalarFieldEnum: {
    editionStatusId: 'editionStatusId',
    editionStatusCode: 'editionStatusCode',
    editionStatusName: 'editionStatusName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type EditionsStatusesScalarFieldEnum = (typeof EditionsStatusesScalarFieldEnum)[keyof typeof EditionsStatusesScalarFieldEnum]


  export const ShowsScalarFieldEnum: {
    showId: 'showId',
    showName: 'showName',
    editionId: 'editionId',
    showStatusId: 'showStatusId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ShowsScalarFieldEnum = (typeof ShowsScalarFieldEnum)[keyof typeof ShowsScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    artistId: 'artistId',
    artistName: 'artistName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const ShowsStatusesScalarFieldEnum: {
    showStatusId: 'showStatusId',
    showStatusCode: 'showStatusCode',
    showStatusName: 'showStatusName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ShowsStatusesScalarFieldEnum = (typeof ShowsStatusesScalarFieldEnum)[keyof typeof ShowsStatusesScalarFieldEnum]


  export const ArtistsManagementsCategoriesScalarFieldEnum: {
    artistManagementCategoryId: 'artistManagementCategoryId',
    artistManagementCategoryName: 'artistManagementCategoryName',
    artistManagementCategoryComment: 'artistManagementCategoryComment',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ArtistsManagementsCategoriesScalarFieldEnum = (typeof ArtistsManagementsCategoriesScalarFieldEnum)[keyof typeof ArtistsManagementsCategoriesScalarFieldEnum]


  export const ArtistsManagementsScalarFieldEnum: {
    artistManagementId: 'artistManagementId',
    artistManagementName: 'artistManagementName',
    artistManagementCategoryId: 'artistManagementCategoryId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ArtistsManagementsScalarFieldEnum = (typeof ArtistsManagementsScalarFieldEnum)[keyof typeof ArtistsManagementsScalarFieldEnum]


  export const ArtistsArtistsManagementsScalarFieldEnum: {
    artistArtistManagementId: 'artistArtistManagementId',
    artistId: 'artistId',
    artistManagementId: 'artistManagementId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ArtistsArtistsManagementsScalarFieldEnum = (typeof ArtistsArtistsManagementsScalarFieldEnum)[keyof typeof ArtistsArtistsManagementsScalarFieldEnum]


  export const PerformancesScalarFieldEnum: {
    performanceId: 'performanceId',
    performanceName: 'performanceName',
    performanceArtistArtistManagementId: 'performanceArtistArtistManagementId',
    performanceShowId: 'performanceShowId',
    editionId: 'editionId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type PerformancesScalarFieldEnum = (typeof PerformancesScalarFieldEnum)[keyof typeof PerformancesScalarFieldEnum]


  export const ContractsScalarFieldEnum: {
    contractId: 'contractId',
    contractName: 'contractName',
    performanceId: 'performanceId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type ContractsScalarFieldEnum = (typeof ContractsScalarFieldEnum)[keyof typeof ContractsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    userFirstName: 'userFirstName',
    userLastName: 'userLastName',
    userCode: 'userCode',
    languageId: 'languageId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UsersAuthScalarFieldEnum: {
    userAuthId: 'userAuthId',
    email: 'email',
    password: 'password',
    userId: 'userId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type UsersAuthScalarFieldEnum = (typeof UsersAuthScalarFieldEnum)[keyof typeof UsersAuthScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    languageId: 'languageId',
    languageName: 'languageName',
    languageCode: 'languageCode',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const AdGroupsScalarFieldEnum: {
    adGroupId: 'adGroupId',
    adGroupName: 'adGroupName',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    isDeleted: 'isDeleted'
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const EditionsOrderByRelevanceFieldEnum: {
    editionName: 'editionName',
    createdBy: 'createdBy'
  };

  export type EditionsOrderByRelevanceFieldEnum = (typeof EditionsOrderByRelevanceFieldEnum)[keyof typeof EditionsOrderByRelevanceFieldEnum]


  export const EditionsStatusesOrderByRelevanceFieldEnum: {
    editionStatusCode: 'editionStatusCode',
    editionStatusName: 'editionStatusName',
    createdBy: 'createdBy'
  };

  export type EditionsStatusesOrderByRelevanceFieldEnum = (typeof EditionsStatusesOrderByRelevanceFieldEnum)[keyof typeof EditionsStatusesOrderByRelevanceFieldEnum]


  export const ShowsOrderByRelevanceFieldEnum: {
    showName: 'showName',
    createdBy: 'createdBy'
  };

  export type ShowsOrderByRelevanceFieldEnum = (typeof ShowsOrderByRelevanceFieldEnum)[keyof typeof ShowsOrderByRelevanceFieldEnum]


  export const ArtistsOrderByRelevanceFieldEnum: {
    artistName: 'artistName',
    createdBy: 'createdBy'
  };

  export type ArtistsOrderByRelevanceFieldEnum = (typeof ArtistsOrderByRelevanceFieldEnum)[keyof typeof ArtistsOrderByRelevanceFieldEnum]


  export const ShowsStatusesOrderByRelevanceFieldEnum: {
    showStatusCode: 'showStatusCode',
    showStatusName: 'showStatusName',
    createdBy: 'createdBy'
  };

  export type ShowsStatusesOrderByRelevanceFieldEnum = (typeof ShowsStatusesOrderByRelevanceFieldEnum)[keyof typeof ShowsStatusesOrderByRelevanceFieldEnum]


  export const ArtistsManagementsCategoriesOrderByRelevanceFieldEnum: {
    artistManagementCategoryName: 'artistManagementCategoryName',
    artistManagementCategoryComment: 'artistManagementCategoryComment',
    createdBy: 'createdBy'
  };

  export type ArtistsManagementsCategoriesOrderByRelevanceFieldEnum = (typeof ArtistsManagementsCategoriesOrderByRelevanceFieldEnum)[keyof typeof ArtistsManagementsCategoriesOrderByRelevanceFieldEnum]


  export const ArtistsManagementsOrderByRelevanceFieldEnum: {
    artistManagementName: 'artistManagementName',
    createdBy: 'createdBy'
  };

  export type ArtistsManagementsOrderByRelevanceFieldEnum = (typeof ArtistsManagementsOrderByRelevanceFieldEnum)[keyof typeof ArtistsManagementsOrderByRelevanceFieldEnum]


  export const ArtistsArtistsManagementsOrderByRelevanceFieldEnum: {
    createdBy: 'createdBy'
  };

  export type ArtistsArtistsManagementsOrderByRelevanceFieldEnum = (typeof ArtistsArtistsManagementsOrderByRelevanceFieldEnum)[keyof typeof ArtistsArtistsManagementsOrderByRelevanceFieldEnum]


  export const PerformancesOrderByRelevanceFieldEnum: {
    performanceName: 'performanceName',
    createdBy: 'createdBy'
  };

  export type PerformancesOrderByRelevanceFieldEnum = (typeof PerformancesOrderByRelevanceFieldEnum)[keyof typeof PerformancesOrderByRelevanceFieldEnum]


  export const ContractsOrderByRelevanceFieldEnum: {
    contractName: 'contractName',
    createdBy: 'createdBy'
  };

  export type ContractsOrderByRelevanceFieldEnum = (typeof ContractsOrderByRelevanceFieldEnum)[keyof typeof ContractsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    userFirstName: 'userFirstName',
    userLastName: 'userLastName',
    userCode: 'userCode',
    createdBy: 'createdBy'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const UsersAuthOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    createdBy: 'createdBy'
  };

  export type UsersAuthOrderByRelevanceFieldEnum = (typeof UsersAuthOrderByRelevanceFieldEnum)[keyof typeof UsersAuthOrderByRelevanceFieldEnum]


  export const LanguagesOrderByRelevanceFieldEnum: {
    languageName: 'languageName',
    languageCode: 'languageCode',
    createdBy: 'createdBy'
  };

  export type LanguagesOrderByRelevanceFieldEnum = (typeof LanguagesOrderByRelevanceFieldEnum)[keyof typeof LanguagesOrderByRelevanceFieldEnum]


  export const AdGroupsOrderByRelevanceFieldEnum: {
    adGroupName: 'adGroupName',
    createdBy: 'createdBy'
  };

  export type AdGroupsOrderByRelevanceFieldEnum = (typeof AdGroupsOrderByRelevanceFieldEnum)[keyof typeof AdGroupsOrderByRelevanceFieldEnum]


  export const UsersAdGroupsOrderByRelevanceFieldEnum: {
    createdBy: 'createdBy'
  };

  export type UsersAdGroupsOrderByRelevanceFieldEnum = (typeof UsersAdGroupsOrderByRelevanceFieldEnum)[keyof typeof UsersAdGroupsOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EditionsWhereInput = {
    AND?: EditionsWhereInput | EditionsWhereInput[]
    OR?: EditionsWhereInput[]
    NOT?: EditionsWhereInput | EditionsWhereInput[]
    editionId?: IntFilter<"Editions"> | number
    editionName?: StringFilter<"Editions"> | string
    editionYear?: IntFilter<"Editions"> | number
    isCurrentedition?: BoolFilter<"Editions"> | boolean
    editionStatusId?: IntFilter<"Editions"> | number
    createdAt?: DateTimeFilter<"Editions"> | Date | string
    createdBy?: StringFilter<"Editions"> | string
    isDeleted?: BoolFilter<"Editions"> | boolean
    editionStatus?: XOR<EditionsStatusesScalarRelationFilter, EditionsStatusesWhereInput>
    shows?: ShowsListRelationFilter
    performances?: PerformancesListRelationFilter
  }

  export type EditionsOrderByWithRelationInput = {
    editionId?: SortOrder
    editionName?: SortOrder
    editionYear?: SortOrder
    isCurrentedition?: SortOrder
    editionStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    editionStatus?: EditionsStatusesOrderByWithRelationInput
    shows?: ShowsOrderByRelationAggregateInput
    performances?: PerformancesOrderByRelationAggregateInput
    _relevance?: EditionsOrderByRelevanceInput
  }

  export type EditionsWhereUniqueInput = Prisma.AtLeast<{
    editionId?: number
    editionYear?: number
    AND?: EditionsWhereInput | EditionsWhereInput[]
    OR?: EditionsWhereInput[]
    NOT?: EditionsWhereInput | EditionsWhereInput[]
    editionName?: StringFilter<"Editions"> | string
    isCurrentedition?: BoolFilter<"Editions"> | boolean
    editionStatusId?: IntFilter<"Editions"> | number
    createdAt?: DateTimeFilter<"Editions"> | Date | string
    createdBy?: StringFilter<"Editions"> | string
    isDeleted?: BoolFilter<"Editions"> | boolean
    editionStatus?: XOR<EditionsStatusesScalarRelationFilter, EditionsStatusesWhereInput>
    shows?: ShowsListRelationFilter
    performances?: PerformancesListRelationFilter
  }, "editionId" | "editionYear">

  export type EditionsOrderByWithAggregationInput = {
    editionId?: SortOrder
    editionName?: SortOrder
    editionYear?: SortOrder
    isCurrentedition?: SortOrder
    editionStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: EditionsCountOrderByAggregateInput
    _avg?: EditionsAvgOrderByAggregateInput
    _max?: EditionsMaxOrderByAggregateInput
    _min?: EditionsMinOrderByAggregateInput
    _sum?: EditionsSumOrderByAggregateInput
  }

  export type EditionsScalarWhereWithAggregatesInput = {
    AND?: EditionsScalarWhereWithAggregatesInput | EditionsScalarWhereWithAggregatesInput[]
    OR?: EditionsScalarWhereWithAggregatesInput[]
    NOT?: EditionsScalarWhereWithAggregatesInput | EditionsScalarWhereWithAggregatesInput[]
    editionId?: IntWithAggregatesFilter<"Editions"> | number
    editionName?: StringWithAggregatesFilter<"Editions"> | string
    editionYear?: IntWithAggregatesFilter<"Editions"> | number
    isCurrentedition?: BoolWithAggregatesFilter<"Editions"> | boolean
    editionStatusId?: IntWithAggregatesFilter<"Editions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Editions"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Editions"> | string
    isDeleted?: BoolWithAggregatesFilter<"Editions"> | boolean
  }

  export type EditionsStatusesWhereInput = {
    AND?: EditionsStatusesWhereInput | EditionsStatusesWhereInput[]
    OR?: EditionsStatusesWhereInput[]
    NOT?: EditionsStatusesWhereInput | EditionsStatusesWhereInput[]
    editionStatusId?: IntFilter<"EditionsStatuses"> | number
    editionStatusCode?: StringFilter<"EditionsStatuses"> | string
    editionStatusName?: StringFilter<"EditionsStatuses"> | string
    createdAt?: DateTimeFilter<"EditionsStatuses"> | Date | string
    createdBy?: StringFilter<"EditionsStatuses"> | string
    isDeleted?: BoolFilter<"EditionsStatuses"> | boolean
    editions?: EditionsListRelationFilter
  }

  export type EditionsStatusesOrderByWithRelationInput = {
    editionStatusId?: SortOrder
    editionStatusCode?: SortOrder
    editionStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    editions?: EditionsOrderByRelationAggregateInput
    _relevance?: EditionsStatusesOrderByRelevanceInput
  }

  export type EditionsStatusesWhereUniqueInput = Prisma.AtLeast<{
    editionStatusId?: number
    AND?: EditionsStatusesWhereInput | EditionsStatusesWhereInput[]
    OR?: EditionsStatusesWhereInput[]
    NOT?: EditionsStatusesWhereInput | EditionsStatusesWhereInput[]
    editionStatusCode?: StringFilter<"EditionsStatuses"> | string
    editionStatusName?: StringFilter<"EditionsStatuses"> | string
    createdAt?: DateTimeFilter<"EditionsStatuses"> | Date | string
    createdBy?: StringFilter<"EditionsStatuses"> | string
    isDeleted?: BoolFilter<"EditionsStatuses"> | boolean
    editions?: EditionsListRelationFilter
  }, "editionStatusId">

  export type EditionsStatusesOrderByWithAggregationInput = {
    editionStatusId?: SortOrder
    editionStatusCode?: SortOrder
    editionStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: EditionsStatusesCountOrderByAggregateInput
    _avg?: EditionsStatusesAvgOrderByAggregateInput
    _max?: EditionsStatusesMaxOrderByAggregateInput
    _min?: EditionsStatusesMinOrderByAggregateInput
    _sum?: EditionsStatusesSumOrderByAggregateInput
  }

  export type EditionsStatusesScalarWhereWithAggregatesInput = {
    AND?: EditionsStatusesScalarWhereWithAggregatesInput | EditionsStatusesScalarWhereWithAggregatesInput[]
    OR?: EditionsStatusesScalarWhereWithAggregatesInput[]
    NOT?: EditionsStatusesScalarWhereWithAggregatesInput | EditionsStatusesScalarWhereWithAggregatesInput[]
    editionStatusId?: IntWithAggregatesFilter<"EditionsStatuses"> | number
    editionStatusCode?: StringWithAggregatesFilter<"EditionsStatuses"> | string
    editionStatusName?: StringWithAggregatesFilter<"EditionsStatuses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EditionsStatuses"> | Date | string
    createdBy?: StringWithAggregatesFilter<"EditionsStatuses"> | string
    isDeleted?: BoolWithAggregatesFilter<"EditionsStatuses"> | boolean
  }

  export type ShowsWhereInput = {
    AND?: ShowsWhereInput | ShowsWhereInput[]
    OR?: ShowsWhereInput[]
    NOT?: ShowsWhereInput | ShowsWhereInput[]
    showId?: IntFilter<"Shows"> | number
    showName?: StringFilter<"Shows"> | string
    editionId?: IntFilter<"Shows"> | number
    showStatusId?: IntFilter<"Shows"> | number
    createdAt?: DateTimeFilter<"Shows"> | Date | string
    createdBy?: StringFilter<"Shows"> | string
    isDeleted?: BoolFilter<"Shows"> | boolean
    edition?: XOR<EditionsScalarRelationFilter, EditionsWhereInput>
    showStatus?: XOR<ShowsStatusesScalarRelationFilter, ShowsStatusesWhereInput>
    performances?: PerformancesListRelationFilter
  }

  export type ShowsOrderByWithRelationInput = {
    showId?: SortOrder
    showName?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    edition?: EditionsOrderByWithRelationInput
    showStatus?: ShowsStatusesOrderByWithRelationInput
    performances?: PerformancesOrderByRelationAggregateInput
    _relevance?: ShowsOrderByRelevanceInput
  }

  export type ShowsWhereUniqueInput = Prisma.AtLeast<{
    showId?: number
    showName?: string
    AND?: ShowsWhereInput | ShowsWhereInput[]
    OR?: ShowsWhereInput[]
    NOT?: ShowsWhereInput | ShowsWhereInput[]
    editionId?: IntFilter<"Shows"> | number
    showStatusId?: IntFilter<"Shows"> | number
    createdAt?: DateTimeFilter<"Shows"> | Date | string
    createdBy?: StringFilter<"Shows"> | string
    isDeleted?: BoolFilter<"Shows"> | boolean
    edition?: XOR<EditionsScalarRelationFilter, EditionsWhereInput>
    showStatus?: XOR<ShowsStatusesScalarRelationFilter, ShowsStatusesWhereInput>
    performances?: PerformancesListRelationFilter
  }, "showId" | "showName">

  export type ShowsOrderByWithAggregationInput = {
    showId?: SortOrder
    showName?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ShowsCountOrderByAggregateInput
    _avg?: ShowsAvgOrderByAggregateInput
    _max?: ShowsMaxOrderByAggregateInput
    _min?: ShowsMinOrderByAggregateInput
    _sum?: ShowsSumOrderByAggregateInput
  }

  export type ShowsScalarWhereWithAggregatesInput = {
    AND?: ShowsScalarWhereWithAggregatesInput | ShowsScalarWhereWithAggregatesInput[]
    OR?: ShowsScalarWhereWithAggregatesInput[]
    NOT?: ShowsScalarWhereWithAggregatesInput | ShowsScalarWhereWithAggregatesInput[]
    showId?: IntWithAggregatesFilter<"Shows"> | number
    showName?: StringWithAggregatesFilter<"Shows"> | string
    editionId?: IntWithAggregatesFilter<"Shows"> | number
    showStatusId?: IntWithAggregatesFilter<"Shows"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Shows"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Shows"> | string
    isDeleted?: BoolWithAggregatesFilter<"Shows"> | boolean
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    artistId?: IntFilter<"Artists"> | number
    artistName?: StringFilter<"Artists"> | string
    createdAt?: DateTimeFilter<"Artists"> | Date | string
    createdBy?: StringFilter<"Artists"> | string
    isDeleted?: BoolFilter<"Artists"> | boolean
    artistsManagements?: ArtistsArtistsManagementsListRelationFilter
  }

  export type ArtistsOrderByWithRelationInput = {
    artistId?: SortOrder
    artistName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    artistsManagements?: ArtistsArtistsManagementsOrderByRelationAggregateInput
    _relevance?: ArtistsOrderByRelevanceInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    artistId?: number
    artistName?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    createdAt?: DateTimeFilter<"Artists"> | Date | string
    createdBy?: StringFilter<"Artists"> | string
    isDeleted?: BoolFilter<"Artists"> | boolean
    artistsManagements?: ArtistsArtistsManagementsListRelationFilter
  }, "artistId" | "artistName">

  export type ArtistsOrderByWithAggregationInput = {
    artistId?: SortOrder
    artistName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _avg?: ArtistsAvgOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
    _sum?: ArtistsSumOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    artistId?: IntWithAggregatesFilter<"Artists"> | number
    artistName?: StringWithAggregatesFilter<"Artists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artists"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Artists"> | string
    isDeleted?: BoolWithAggregatesFilter<"Artists"> | boolean
  }

  export type ShowsStatusesWhereInput = {
    AND?: ShowsStatusesWhereInput | ShowsStatusesWhereInput[]
    OR?: ShowsStatusesWhereInput[]
    NOT?: ShowsStatusesWhereInput | ShowsStatusesWhereInput[]
    showStatusId?: IntFilter<"ShowsStatuses"> | number
    showStatusCode?: StringFilter<"ShowsStatuses"> | string
    showStatusName?: StringFilter<"ShowsStatuses"> | string
    createdAt?: DateTimeFilter<"ShowsStatuses"> | Date | string
    createdBy?: StringFilter<"ShowsStatuses"> | string
    isDeleted?: BoolFilter<"ShowsStatuses"> | boolean
    shows?: ShowsListRelationFilter
  }

  export type ShowsStatusesOrderByWithRelationInput = {
    showStatusId?: SortOrder
    showStatusCode?: SortOrder
    showStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    shows?: ShowsOrderByRelationAggregateInput
    _relevance?: ShowsStatusesOrderByRelevanceInput
  }

  export type ShowsStatusesWhereUniqueInput = Prisma.AtLeast<{
    showStatusId?: number
    showStatusCode?: string
    AND?: ShowsStatusesWhereInput | ShowsStatusesWhereInput[]
    OR?: ShowsStatusesWhereInput[]
    NOT?: ShowsStatusesWhereInput | ShowsStatusesWhereInput[]
    showStatusName?: StringFilter<"ShowsStatuses"> | string
    createdAt?: DateTimeFilter<"ShowsStatuses"> | Date | string
    createdBy?: StringFilter<"ShowsStatuses"> | string
    isDeleted?: BoolFilter<"ShowsStatuses"> | boolean
    shows?: ShowsListRelationFilter
  }, "showStatusId" | "showStatusCode">

  export type ShowsStatusesOrderByWithAggregationInput = {
    showStatusId?: SortOrder
    showStatusCode?: SortOrder
    showStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ShowsStatusesCountOrderByAggregateInput
    _avg?: ShowsStatusesAvgOrderByAggregateInput
    _max?: ShowsStatusesMaxOrderByAggregateInput
    _min?: ShowsStatusesMinOrderByAggregateInput
    _sum?: ShowsStatusesSumOrderByAggregateInput
  }

  export type ShowsStatusesScalarWhereWithAggregatesInput = {
    AND?: ShowsStatusesScalarWhereWithAggregatesInput | ShowsStatusesScalarWhereWithAggregatesInput[]
    OR?: ShowsStatusesScalarWhereWithAggregatesInput[]
    NOT?: ShowsStatusesScalarWhereWithAggregatesInput | ShowsStatusesScalarWhereWithAggregatesInput[]
    showStatusId?: IntWithAggregatesFilter<"ShowsStatuses"> | number
    showStatusCode?: StringWithAggregatesFilter<"ShowsStatuses"> | string
    showStatusName?: StringWithAggregatesFilter<"ShowsStatuses"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShowsStatuses"> | Date | string
    createdBy?: StringWithAggregatesFilter<"ShowsStatuses"> | string
    isDeleted?: BoolWithAggregatesFilter<"ShowsStatuses"> | boolean
  }

  export type ArtistsManagementsCategoriesWhereInput = {
    AND?: ArtistsManagementsCategoriesWhereInput | ArtistsManagementsCategoriesWhereInput[]
    OR?: ArtistsManagementsCategoriesWhereInput[]
    NOT?: ArtistsManagementsCategoriesWhereInput | ArtistsManagementsCategoriesWhereInput[]
    artistManagementCategoryId?: IntFilter<"ArtistsManagementsCategories"> | number
    artistManagementCategoryName?: StringFilter<"ArtistsManagementsCategories"> | string
    artistManagementCategoryComment?: StringFilter<"ArtistsManagementsCategories"> | string
    createdAt?: DateTimeFilter<"ArtistsManagementsCategories"> | Date | string
    createdBy?: StringFilter<"ArtistsManagementsCategories"> | string
    isDeleted?: BoolFilter<"ArtistsManagementsCategories"> | boolean
    artistsManagements?: ArtistsManagementsListRelationFilter
  }

  export type ArtistsManagementsCategoriesOrderByWithRelationInput = {
    artistManagementCategoryId?: SortOrder
    artistManagementCategoryName?: SortOrder
    artistManagementCategoryComment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    artistsManagements?: ArtistsManagementsOrderByRelationAggregateInput
    _relevance?: ArtistsManagementsCategoriesOrderByRelevanceInput
  }

  export type ArtistsManagementsCategoriesWhereUniqueInput = Prisma.AtLeast<{
    artistManagementCategoryId?: number
    AND?: ArtistsManagementsCategoriesWhereInput | ArtistsManagementsCategoriesWhereInput[]
    OR?: ArtistsManagementsCategoriesWhereInput[]
    NOT?: ArtistsManagementsCategoriesWhereInput | ArtistsManagementsCategoriesWhereInput[]
    artistManagementCategoryName?: StringFilter<"ArtistsManagementsCategories"> | string
    artistManagementCategoryComment?: StringFilter<"ArtistsManagementsCategories"> | string
    createdAt?: DateTimeFilter<"ArtistsManagementsCategories"> | Date | string
    createdBy?: StringFilter<"ArtistsManagementsCategories"> | string
    isDeleted?: BoolFilter<"ArtistsManagementsCategories"> | boolean
    artistsManagements?: ArtistsManagementsListRelationFilter
  }, "artistManagementCategoryId">

  export type ArtistsManagementsCategoriesOrderByWithAggregationInput = {
    artistManagementCategoryId?: SortOrder
    artistManagementCategoryName?: SortOrder
    artistManagementCategoryComment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ArtistsManagementsCategoriesCountOrderByAggregateInput
    _avg?: ArtistsManagementsCategoriesAvgOrderByAggregateInput
    _max?: ArtistsManagementsCategoriesMaxOrderByAggregateInput
    _min?: ArtistsManagementsCategoriesMinOrderByAggregateInput
    _sum?: ArtistsManagementsCategoriesSumOrderByAggregateInput
  }

  export type ArtistsManagementsCategoriesScalarWhereWithAggregatesInput = {
    AND?: ArtistsManagementsCategoriesScalarWhereWithAggregatesInput | ArtistsManagementsCategoriesScalarWhereWithAggregatesInput[]
    OR?: ArtistsManagementsCategoriesScalarWhereWithAggregatesInput[]
    NOT?: ArtistsManagementsCategoriesScalarWhereWithAggregatesInput | ArtistsManagementsCategoriesScalarWhereWithAggregatesInput[]
    artistManagementCategoryId?: IntWithAggregatesFilter<"ArtistsManagementsCategories"> | number
    artistManagementCategoryName?: StringWithAggregatesFilter<"ArtistsManagementsCategories"> | string
    artistManagementCategoryComment?: StringWithAggregatesFilter<"ArtistsManagementsCategories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArtistsManagementsCategories"> | Date | string
    createdBy?: StringWithAggregatesFilter<"ArtistsManagementsCategories"> | string
    isDeleted?: BoolWithAggregatesFilter<"ArtistsManagementsCategories"> | boolean
  }

  export type ArtistsManagementsWhereInput = {
    AND?: ArtistsManagementsWhereInput | ArtistsManagementsWhereInput[]
    OR?: ArtistsManagementsWhereInput[]
    NOT?: ArtistsManagementsWhereInput | ArtistsManagementsWhereInput[]
    artistManagementId?: IntFilter<"ArtistsManagements"> | number
    artistManagementName?: StringFilter<"ArtistsManagements"> | string
    artistManagementCategoryId?: IntFilter<"ArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsManagements"> | boolean
    artistManagementCategory?: XOR<ArtistsManagementsCategoriesScalarRelationFilter, ArtistsManagementsCategoriesWhereInput>
    artistsArtistsManagements?: ArtistsArtistsManagementsListRelationFilter
  }

  export type ArtistsManagementsOrderByWithRelationInput = {
    artistManagementId?: SortOrder
    artistManagementName?: SortOrder
    artistManagementCategoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    artistManagementCategory?: ArtistsManagementsCategoriesOrderByWithRelationInput
    artistsArtistsManagements?: ArtistsArtistsManagementsOrderByRelationAggregateInput
    _relevance?: ArtistsManagementsOrderByRelevanceInput
  }

  export type ArtistsManagementsWhereUniqueInput = Prisma.AtLeast<{
    artistManagementId?: number
    AND?: ArtistsManagementsWhereInput | ArtistsManagementsWhereInput[]
    OR?: ArtistsManagementsWhereInput[]
    NOT?: ArtistsManagementsWhereInput | ArtistsManagementsWhereInput[]
    artistManagementName?: StringFilter<"ArtistsManagements"> | string
    artistManagementCategoryId?: IntFilter<"ArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsManagements"> | boolean
    artistManagementCategory?: XOR<ArtistsManagementsCategoriesScalarRelationFilter, ArtistsManagementsCategoriesWhereInput>
    artistsArtistsManagements?: ArtistsArtistsManagementsListRelationFilter
  }, "artistManagementId">

  export type ArtistsManagementsOrderByWithAggregationInput = {
    artistManagementId?: SortOrder
    artistManagementName?: SortOrder
    artistManagementCategoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ArtistsManagementsCountOrderByAggregateInput
    _avg?: ArtistsManagementsAvgOrderByAggregateInput
    _max?: ArtistsManagementsMaxOrderByAggregateInput
    _min?: ArtistsManagementsMinOrderByAggregateInput
    _sum?: ArtistsManagementsSumOrderByAggregateInput
  }

  export type ArtistsManagementsScalarWhereWithAggregatesInput = {
    AND?: ArtistsManagementsScalarWhereWithAggregatesInput | ArtistsManagementsScalarWhereWithAggregatesInput[]
    OR?: ArtistsManagementsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsManagementsScalarWhereWithAggregatesInput | ArtistsManagementsScalarWhereWithAggregatesInput[]
    artistManagementId?: IntWithAggregatesFilter<"ArtistsManagements"> | number
    artistManagementName?: StringWithAggregatesFilter<"ArtistsManagements"> | string
    artistManagementCategoryId?: IntWithAggregatesFilter<"ArtistsManagements"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ArtistsManagements"> | Date | string
    createdBy?: StringWithAggregatesFilter<"ArtistsManagements"> | string
    isDeleted?: BoolWithAggregatesFilter<"ArtistsManagements"> | boolean
  }

  export type ArtistsArtistsManagementsWhereInput = {
    AND?: ArtistsArtistsManagementsWhereInput | ArtistsArtistsManagementsWhereInput[]
    OR?: ArtistsArtistsManagementsWhereInput[]
    NOT?: ArtistsArtistsManagementsWhereInput | ArtistsArtistsManagementsWhereInput[]
    artistArtistManagementId?: IntFilter<"ArtistsArtistsManagements"> | number
    artistId?: IntFilter<"ArtistsArtistsManagements"> | number
    artistManagementId?: IntFilter<"ArtistsArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsArtistsManagements"> | boolean
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    artistManagement?: XOR<ArtistsManagementsScalarRelationFilter, ArtistsManagementsWhereInput>
    performances?: PerformancesListRelationFilter
  }

  export type ArtistsArtistsManagementsOrderByWithRelationInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    artistManagement?: ArtistsManagementsOrderByWithRelationInput
    performances?: PerformancesOrderByRelationAggregateInput
    _relevance?: ArtistsArtistsManagementsOrderByRelevanceInput
  }

  export type ArtistsArtistsManagementsWhereUniqueInput = Prisma.AtLeast<{
    artistArtistManagementId?: number
    AND?: ArtistsArtistsManagementsWhereInput | ArtistsArtistsManagementsWhereInput[]
    OR?: ArtistsArtistsManagementsWhereInput[]
    NOT?: ArtistsArtistsManagementsWhereInput | ArtistsArtistsManagementsWhereInput[]
    artistId?: IntFilter<"ArtistsArtistsManagements"> | number
    artistManagementId?: IntFilter<"ArtistsArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsArtistsManagements"> | boolean
    artist?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    artistManagement?: XOR<ArtistsManagementsScalarRelationFilter, ArtistsManagementsWhereInput>
    performances?: PerformancesListRelationFilter
  }, "artistArtistManagementId">

  export type ArtistsArtistsManagementsOrderByWithAggregationInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ArtistsArtistsManagementsCountOrderByAggregateInput
    _avg?: ArtistsArtistsManagementsAvgOrderByAggregateInput
    _max?: ArtistsArtistsManagementsMaxOrderByAggregateInput
    _min?: ArtistsArtistsManagementsMinOrderByAggregateInput
    _sum?: ArtistsArtistsManagementsSumOrderByAggregateInput
  }

  export type ArtistsArtistsManagementsScalarWhereWithAggregatesInput = {
    AND?: ArtistsArtistsManagementsScalarWhereWithAggregatesInput | ArtistsArtistsManagementsScalarWhereWithAggregatesInput[]
    OR?: ArtistsArtistsManagementsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsArtistsManagementsScalarWhereWithAggregatesInput | ArtistsArtistsManagementsScalarWhereWithAggregatesInput[]
    artistArtistManagementId?: IntWithAggregatesFilter<"ArtistsArtistsManagements"> | number
    artistId?: IntWithAggregatesFilter<"ArtistsArtistsManagements"> | number
    artistManagementId?: IntWithAggregatesFilter<"ArtistsArtistsManagements"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ArtistsArtistsManagements"> | Date | string
    createdBy?: StringWithAggregatesFilter<"ArtistsArtistsManagements"> | string
    isDeleted?: BoolWithAggregatesFilter<"ArtistsArtistsManagements"> | boolean
  }

  export type PerformancesWhereInput = {
    AND?: PerformancesWhereInput | PerformancesWhereInput[]
    OR?: PerformancesWhereInput[]
    NOT?: PerformancesWhereInput | PerformancesWhereInput[]
    performanceId?: IntFilter<"Performances"> | number
    performanceName?: StringFilter<"Performances"> | string
    performanceArtistArtistManagementId?: IntFilter<"Performances"> | number
    performanceShowId?: IntFilter<"Performances"> | number
    editionId?: IntFilter<"Performances"> | number
    createdAt?: DateTimeFilter<"Performances"> | Date | string
    createdBy?: StringFilter<"Performances"> | string
    isDeleted?: BoolFilter<"Performances"> | boolean
    artistManagementLink?: XOR<ArtistsArtistsManagementsScalarRelationFilter, ArtistsArtistsManagementsWhereInput>
    show?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    edition?: XOR<EditionsScalarRelationFilter, EditionsWhereInput>
    contract?: XOR<ContractsNullableScalarRelationFilter, ContractsWhereInput> | null
  }

  export type PerformancesOrderByWithRelationInput = {
    performanceId?: SortOrder
    performanceName?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    artistManagementLink?: ArtistsArtistsManagementsOrderByWithRelationInput
    show?: ShowsOrderByWithRelationInput
    edition?: EditionsOrderByWithRelationInput
    contract?: ContractsOrderByWithRelationInput
    _relevance?: PerformancesOrderByRelevanceInput
  }

  export type PerformancesWhereUniqueInput = Prisma.AtLeast<{
    performanceId?: number
    AND?: PerformancesWhereInput | PerformancesWhereInput[]
    OR?: PerformancesWhereInput[]
    NOT?: PerformancesWhereInput | PerformancesWhereInput[]
    performanceName?: StringFilter<"Performances"> | string
    performanceArtistArtistManagementId?: IntFilter<"Performances"> | number
    performanceShowId?: IntFilter<"Performances"> | number
    editionId?: IntFilter<"Performances"> | number
    createdAt?: DateTimeFilter<"Performances"> | Date | string
    createdBy?: StringFilter<"Performances"> | string
    isDeleted?: BoolFilter<"Performances"> | boolean
    artistManagementLink?: XOR<ArtistsArtistsManagementsScalarRelationFilter, ArtistsArtistsManagementsWhereInput>
    show?: XOR<ShowsScalarRelationFilter, ShowsWhereInput>
    edition?: XOR<EditionsScalarRelationFilter, EditionsWhereInput>
    contract?: XOR<ContractsNullableScalarRelationFilter, ContractsWhereInput> | null
  }, "performanceId">

  export type PerformancesOrderByWithAggregationInput = {
    performanceId?: SortOrder
    performanceName?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: PerformancesCountOrderByAggregateInput
    _avg?: PerformancesAvgOrderByAggregateInput
    _max?: PerformancesMaxOrderByAggregateInput
    _min?: PerformancesMinOrderByAggregateInput
    _sum?: PerformancesSumOrderByAggregateInput
  }

  export type PerformancesScalarWhereWithAggregatesInput = {
    AND?: PerformancesScalarWhereWithAggregatesInput | PerformancesScalarWhereWithAggregatesInput[]
    OR?: PerformancesScalarWhereWithAggregatesInput[]
    NOT?: PerformancesScalarWhereWithAggregatesInput | PerformancesScalarWhereWithAggregatesInput[]
    performanceId?: IntWithAggregatesFilter<"Performances"> | number
    performanceName?: StringWithAggregatesFilter<"Performances"> | string
    performanceArtistArtistManagementId?: IntWithAggregatesFilter<"Performances"> | number
    performanceShowId?: IntWithAggregatesFilter<"Performances"> | number
    editionId?: IntWithAggregatesFilter<"Performances"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Performances"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Performances"> | string
    isDeleted?: BoolWithAggregatesFilter<"Performances"> | boolean
  }

  export type ContractsWhereInput = {
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    contractId?: IntFilter<"Contracts"> | number
    contractName?: StringFilter<"Contracts"> | string
    performanceId?: IntFilter<"Contracts"> | number
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    createdBy?: StringFilter<"Contracts"> | string
    isDeleted?: BoolFilter<"Contracts"> | boolean
    performance?: XOR<PerformancesScalarRelationFilter, PerformancesWhereInput>
  }

  export type ContractsOrderByWithRelationInput = {
    contractId?: SortOrder
    contractName?: SortOrder
    performanceId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    performance?: PerformancesOrderByWithRelationInput
    _relevance?: ContractsOrderByRelevanceInput
  }

  export type ContractsWhereUniqueInput = Prisma.AtLeast<{
    contractId?: number
    performanceId?: number
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    contractName?: StringFilter<"Contracts"> | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    createdBy?: StringFilter<"Contracts"> | string
    isDeleted?: BoolFilter<"Contracts"> | boolean
    performance?: XOR<PerformancesScalarRelationFilter, PerformancesWhereInput>
  }, "contractId" | "performanceId">

  export type ContractsOrderByWithAggregationInput = {
    contractId?: SortOrder
    contractName?: SortOrder
    performanceId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    _count?: ContractsCountOrderByAggregateInput
    _avg?: ContractsAvgOrderByAggregateInput
    _max?: ContractsMaxOrderByAggregateInput
    _min?: ContractsMinOrderByAggregateInput
    _sum?: ContractsSumOrderByAggregateInput
  }

  export type ContractsScalarWhereWithAggregatesInput = {
    AND?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    OR?: ContractsScalarWhereWithAggregatesInput[]
    NOT?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    contractId?: IntWithAggregatesFilter<"Contracts"> | number
    contractName?: StringWithAggregatesFilter<"Contracts"> | string
    performanceId?: IntWithAggregatesFilter<"Contracts"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Contracts"> | string
    isDeleted?: BoolWithAggregatesFilter<"Contracts"> | boolean
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: IntFilter<"Users"> | number
    userFirstName?: StringFilter<"Users"> | string
    userLastName?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    languageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
    language?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    userGroups?: UsersAdGroupsListRelationFilter
    auth?: XOR<UsersAuthNullableScalarRelationFilter, UsersAuthWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userCode?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    language?: LanguagesOrderByWithRelationInput
    userGroups?: UsersAdGroupsOrderByRelationAggregateInput
    auth?: UsersAuthOrderByWithRelationInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userFirstName?: StringFilter<"Users"> | string
    userLastName?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    languageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
    language?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    userGroups?: UsersAdGroupsListRelationFilter
    auth?: XOR<UsersAuthNullableScalarRelationFilter, UsersAuthWhereInput> | null
  }, "userId">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userCode?: SortOrder
    languageId?: SortOrder
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
    userFirstName?: StringWithAggregatesFilter<"Users"> | string
    userLastName?: StringWithAggregatesFilter<"Users"> | string
    userCode?: StringWithAggregatesFilter<"Users"> | string
    languageId?: IntWithAggregatesFilter<"Users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Users"> | string
    isDeleted?: BoolWithAggregatesFilter<"Users"> | boolean
  }

  export type UsersAuthWhereInput = {
    AND?: UsersAuthWhereInput | UsersAuthWhereInput[]
    OR?: UsersAuthWhereInput[]
    NOT?: UsersAuthWhereInput | UsersAuthWhereInput[]
    userAuthId?: IntFilter<"UsersAuth"> | number
    email?: StringFilter<"UsersAuth"> | string
    password?: StringFilter<"UsersAuth"> | string
    userId?: IntFilter<"UsersAuth"> | number
    createdAt?: DateTimeFilter<"UsersAuth"> | Date | string
    createdBy?: StringFilter<"UsersAuth"> | string
    isDeleted?: BoolFilter<"UsersAuth"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type UsersAuthOrderByWithRelationInput = {
    userAuthId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: UsersAuthOrderByRelevanceInput
  }

  export type UsersAuthWhereUniqueInput = Prisma.AtLeast<{
    userAuthId?: number
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
  }, "userAuthId" | "email" | "userId">

  export type UsersAuthOrderByWithAggregationInput = {
    userAuthId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
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
    userAuthId?: IntWithAggregatesFilter<"UsersAuth"> | number
    email?: StringWithAggregatesFilter<"UsersAuth"> | string
    password?: StringWithAggregatesFilter<"UsersAuth"> | string
    userId?: IntWithAggregatesFilter<"UsersAuth"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UsersAuth"> | Date | string
    createdBy?: StringWithAggregatesFilter<"UsersAuth"> | string
    isDeleted?: BoolWithAggregatesFilter<"UsersAuth"> | boolean
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

  export type AdGroupsWhereInput = {
    AND?: AdGroupsWhereInput | AdGroupsWhereInput[]
    OR?: AdGroupsWhereInput[]
    NOT?: AdGroupsWhereInput | AdGroupsWhereInput[]
    adGroupId?: IntFilter<"AdGroups"> | number
    adGroupName?: StringFilter<"AdGroups"> | string
    createdAt?: DateTimeFilter<"AdGroups"> | Date | string
    createdBy?: StringFilter<"AdGroups"> | string
    isDeleted?: BoolFilter<"AdGroups"> | boolean
    userGroups?: UsersAdGroupsListRelationFilter
  }

  export type AdGroupsOrderByWithRelationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    userGroups?: UsersAdGroupsOrderByRelationAggregateInput
    _relevance?: AdGroupsOrderByRelevanceInput
  }

  export type AdGroupsWhereUniqueInput = Prisma.AtLeast<{
    adGroupId?: number
    AND?: AdGroupsWhereInput | AdGroupsWhereInput[]
    OR?: AdGroupsWhereInput[]
    NOT?: AdGroupsWhereInput | AdGroupsWhereInput[]
    adGroupName?: StringFilter<"AdGroups"> | string
    createdAt?: DateTimeFilter<"AdGroups"> | Date | string
    createdBy?: StringFilter<"AdGroups"> | string
    isDeleted?: BoolFilter<"AdGroups"> | boolean
    userGroups?: UsersAdGroupsListRelationFilter
  }, "adGroupId">

  export type AdGroupsOrderByWithAggregationInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"AdGroups"> | Date | string
    createdBy?: StringWithAggregatesFilter<"AdGroups"> | string
    isDeleted?: BoolWithAggregatesFilter<"AdGroups"> | boolean
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
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    adGroup?: XOR<AdGroupsScalarRelationFilter, AdGroupsWhereInput>
  }

  export type UsersAdGroupsOrderByWithRelationInput = {
    userAdGroupId?: SortOrder
    userId?: SortOrder
    adGroupId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
    user?: UsersOrderByWithRelationInput
    adGroup?: AdGroupsOrderByWithRelationInput
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
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    adGroup?: XOR<AdGroupsScalarRelationFilter, AdGroupsWhereInput>
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

  export type EditionsCreateInput = {
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    editionStatus: EditionsStatusesCreateNestedOneWithoutEditionsInput
    shows?: ShowsCreateNestedManyWithoutEditionInput
    performances?: PerformancesCreateNestedManyWithoutEditionInput
  }

  export type EditionsUncheckedCreateInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    editionStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsUncheckedCreateNestedManyWithoutEditionInput
    performances?: PerformancesUncheckedCreateNestedManyWithoutEditionInput
  }

  export type EditionsUpdateInput = {
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    editionStatus?: EditionsStatusesUpdateOneRequiredWithoutEditionsNestedInput
    shows?: ShowsUpdateManyWithoutEditionNestedInput
    performances?: PerformancesUpdateManyWithoutEditionNestedInput
  }

  export type EditionsUncheckedUpdateInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    editionStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUncheckedUpdateManyWithoutEditionNestedInput
    performances?: PerformancesUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type EditionsCreateManyInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    editionStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type EditionsUpdateManyMutationInput = {
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsUncheckedUpdateManyInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    editionStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsStatusesCreateInput = {
    editionStatusCode: string
    editionStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    editions?: EditionsCreateNestedManyWithoutEditionStatusInput
  }

  export type EditionsStatusesUncheckedCreateInput = {
    editionStatusId?: number
    editionStatusCode: string
    editionStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    editions?: EditionsUncheckedCreateNestedManyWithoutEditionStatusInput
  }

  export type EditionsStatusesUpdateInput = {
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    editions?: EditionsUpdateManyWithoutEditionStatusNestedInput
  }

  export type EditionsStatusesUncheckedUpdateInput = {
    editionStatusId?: IntFieldUpdateOperationsInput | number
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    editions?: EditionsUncheckedUpdateManyWithoutEditionStatusNestedInput
  }

  export type EditionsStatusesCreateManyInput = {
    editionStatusId?: number
    editionStatusCode: string
    editionStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type EditionsStatusesUpdateManyMutationInput = {
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsStatusesUncheckedUpdateManyInput = {
    editionStatusId?: IntFieldUpdateOperationsInput | number
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsCreateInput = {
    showName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    edition: EditionsCreateNestedOneWithoutShowsInput
    showStatus: ShowsStatusesCreateNestedOneWithoutShowsInput
    performances?: PerformancesCreateNestedManyWithoutShowInput
  }

  export type ShowsUncheckedCreateInput = {
    showId?: number
    showName: string
    editionId: number
    showStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowsUpdateInput = {
    showName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    edition?: EditionsUpdateOneRequiredWithoutShowsNestedInput
    showStatus?: ShowsStatusesUpdateOneRequiredWithoutShowsNestedInput
    performances?: PerformancesUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    showStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowsCreateManyInput = {
    showId?: number
    showName: string
    editionId: number
    showStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsUpdateManyMutationInput = {
    showName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    showStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsCreateInput = {
    artistName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsManagements?: ArtistsArtistsManagementsCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateInput = {
    artistId?: number
    artistName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsManagements?: ArtistsArtistsManagementsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUpdateInput = {
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsManagements?: ArtistsArtistsManagementsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsManagements?: ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsCreateManyInput = {
    artistId?: number
    artistName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsUpdateManyMutationInput = {
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsUncheckedUpdateManyInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsStatusesCreateInput = {
    showStatusCode: string
    showStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsCreateNestedManyWithoutShowStatusInput
  }

  export type ShowsStatusesUncheckedCreateInput = {
    showStatusId?: number
    showStatusCode: string
    showStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsUncheckedCreateNestedManyWithoutShowStatusInput
  }

  export type ShowsStatusesUpdateInput = {
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUpdateManyWithoutShowStatusNestedInput
  }

  export type ShowsStatusesUncheckedUpdateInput = {
    showStatusId?: IntFieldUpdateOperationsInput | number
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUncheckedUpdateManyWithoutShowStatusNestedInput
  }

  export type ShowsStatusesCreateManyInput = {
    showStatusId?: number
    showStatusCode: string
    showStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsStatusesUpdateManyMutationInput = {
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsStatusesUncheckedUpdateManyInput = {
    showStatusId?: IntFieldUpdateOperationsInput | number
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsCategoriesCreateInput = {
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsManagements?: ArtistsManagementsCreateNestedManyWithoutArtistManagementCategoryInput
  }

  export type ArtistsManagementsCategoriesUncheckedCreateInput = {
    artistManagementCategoryId?: number
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsManagements?: ArtistsManagementsUncheckedCreateNestedManyWithoutArtistManagementCategoryInput
  }

  export type ArtistsManagementsCategoriesUpdateInput = {
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsManagements?: ArtistsManagementsUpdateManyWithoutArtistManagementCategoryNestedInput
  }

  export type ArtistsManagementsCategoriesUncheckedUpdateInput = {
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsManagements?: ArtistsManagementsUncheckedUpdateManyWithoutArtistManagementCategoryNestedInput
  }

  export type ArtistsManagementsCategoriesCreateManyInput = {
    artistManagementCategoryId?: number
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsCategoriesUpdateManyMutationInput = {
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsCategoriesUncheckedUpdateManyInput = {
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsCreateInput = {
    artistManagementName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementCategory: ArtistsManagementsCategoriesCreateNestedOneWithoutArtistsManagementsInput
    artistsArtistsManagements?: ArtistsArtistsManagementsCreateNestedManyWithoutArtistManagementInput
  }

  export type ArtistsManagementsUncheckedCreateInput = {
    artistManagementId?: number
    artistManagementName: string
    artistManagementCategoryId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsUncheckedCreateNestedManyWithoutArtistManagementInput
  }

  export type ArtistsManagementsUpdateInput = {
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementCategory?: ArtistsManagementsCategoriesUpdateOneRequiredWithoutArtistsManagementsNestedInput
    artistsArtistsManagements?: ArtistsArtistsManagementsUpdateManyWithoutArtistManagementNestedInput
  }

  export type ArtistsManagementsUncheckedUpdateInput = {
    artistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistManagementNestedInput
  }

  export type ArtistsManagementsCreateManyInput = {
    artistManagementId?: number
    artistManagementName: string
    artistManagementCategoryId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsUpdateManyMutationInput = {
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsUncheckedUpdateManyInput = {
    artistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsArtistsManagementsCreateInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artist: ArtistsCreateNestedOneWithoutArtistsManagementsInput
    artistManagement: ArtistsManagementsCreateNestedOneWithoutArtistsArtistsManagementsInput
    performances?: PerformancesCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsUncheckedCreateInput = {
    artistArtistManagementId?: number
    artistId: number
    artistManagementId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artist?: ArtistsUpdateOneRequiredWithoutArtistsManagementsNestedInput
    artistManagement?: ArtistsManagementsUpdateOneRequiredWithoutArtistsArtistsManagementsNestedInput
    performances?: PerformancesUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    artistManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsCreateManyInput = {
    artistArtistManagementId?: number
    artistId: number
    artistManagementId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsArtistsManagementsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsArtistsManagementsUncheckedUpdateManyInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    artistManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesCreateInput = {
    performanceName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementLink: ArtistsArtistsManagementsCreateNestedOneWithoutPerformancesInput
    show: ShowsCreateNestedOneWithoutPerformancesInput
    edition: EditionsCreateNestedOneWithoutPerformancesInput
    contract?: ContractsCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesUncheckedCreateInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    contract?: ContractsUncheckedCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesUpdateInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementLink?: ArtistsArtistsManagementsUpdateOneRequiredWithoutPerformancesNestedInput
    show?: ShowsUpdateOneRequiredWithoutPerformancesNestedInput
    edition?: EditionsUpdateOneRequiredWithoutPerformancesNestedInput
    contract?: ContractsUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    performanceShowId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    contract?: ContractsUncheckedUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesCreateManyInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type PerformancesUpdateManyMutationInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesUncheckedUpdateManyInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    performanceShowId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractsCreateInput = {
    contractName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performance: PerformancesCreateNestedOneWithoutContractInput
  }

  export type ContractsUncheckedCreateInput = {
    contractId?: number
    contractName: string
    performanceId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ContractsUpdateInput = {
    contractName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performance?: PerformancesUpdateOneRequiredWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    contractName?: StringFieldUpdateOperationsInput | string
    performanceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractsCreateManyInput = {
    contractId?: number
    contractName: string
    performanceId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ContractsUpdateManyMutationInput = {
    contractName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractsUncheckedUpdateManyInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    contractName?: StringFieldUpdateOperationsInput | string
    performanceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersCreateInput = {
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    userGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    userGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersUpdateManyMutationInput = {
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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
    userAuthId?: number
    email: string
    password: string
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
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
    userAuthId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAuthCreateManyInput = {
    userAuthId?: number
    email: string
    password: string
    userId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAuthUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAuthUncheckedUpdateManyInput = {
    userAuthId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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

  export type AdGroupsCreateInput = {
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupsUncheckedCreateInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutAdGroupInput
  }

  export type AdGroupsUpdateInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupsUncheckedUpdateInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUncheckedUpdateManyWithoutAdGroupNestedInput
  }

  export type AdGroupsCreateManyInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type AdGroupsUpdateManyMutationInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdGroupsUncheckedUpdateManyInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsCreateInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UsersCreateNestedOneWithoutUserGroupsInput
    adGroup: AdGroupsCreateNestedOneWithoutUserGroupsInput
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
    user?: UsersUpdateOneRequiredWithoutUserGroupsNestedInput
    adGroup?: AdGroupsUpdateOneRequiredWithoutUserGroupsNestedInput
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

  export type EditionsStatusesScalarRelationFilter = {
    is?: EditionsStatusesWhereInput
    isNot?: EditionsStatusesWhereInput
  }

  export type ShowsListRelationFilter = {
    every?: ShowsWhereInput
    some?: ShowsWhereInput
    none?: ShowsWhereInput
  }

  export type PerformancesListRelationFilter = {
    every?: PerformancesWhereInput
    some?: PerformancesWhereInput
    none?: PerformancesWhereInput
  }

  export type ShowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerformancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditionsOrderByRelevanceInput = {
    fields: EditionsOrderByRelevanceFieldEnum | EditionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EditionsCountOrderByAggregateInput = {
    editionId?: SortOrder
    editionName?: SortOrder
    editionYear?: SortOrder
    isCurrentedition?: SortOrder
    editionStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsAvgOrderByAggregateInput = {
    editionId?: SortOrder
    editionYear?: SortOrder
    editionStatusId?: SortOrder
  }

  export type EditionsMaxOrderByAggregateInput = {
    editionId?: SortOrder
    editionName?: SortOrder
    editionYear?: SortOrder
    isCurrentedition?: SortOrder
    editionStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsMinOrderByAggregateInput = {
    editionId?: SortOrder
    editionName?: SortOrder
    editionYear?: SortOrder
    isCurrentedition?: SortOrder
    editionStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsSumOrderByAggregateInput = {
    editionId?: SortOrder
    editionYear?: SortOrder
    editionStatusId?: SortOrder
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

  export type EditionsListRelationFilter = {
    every?: EditionsWhereInput
    some?: EditionsWhereInput
    none?: EditionsWhereInput
  }

  export type EditionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditionsStatusesOrderByRelevanceInput = {
    fields: EditionsStatusesOrderByRelevanceFieldEnum | EditionsStatusesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EditionsStatusesCountOrderByAggregateInput = {
    editionStatusId?: SortOrder
    editionStatusCode?: SortOrder
    editionStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsStatusesAvgOrderByAggregateInput = {
    editionStatusId?: SortOrder
  }

  export type EditionsStatusesMaxOrderByAggregateInput = {
    editionStatusId?: SortOrder
    editionStatusCode?: SortOrder
    editionStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsStatusesMinOrderByAggregateInput = {
    editionStatusId?: SortOrder
    editionStatusCode?: SortOrder
    editionStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type EditionsStatusesSumOrderByAggregateInput = {
    editionStatusId?: SortOrder
  }

  export type EditionsScalarRelationFilter = {
    is?: EditionsWhereInput
    isNot?: EditionsWhereInput
  }

  export type ShowsStatusesScalarRelationFilter = {
    is?: ShowsStatusesWhereInput
    isNot?: ShowsStatusesWhereInput
  }

  export type ShowsOrderByRelevanceInput = {
    fields: ShowsOrderByRelevanceFieldEnum | ShowsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowsCountOrderByAggregateInput = {
    showId?: SortOrder
    showName?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsAvgOrderByAggregateInput = {
    showId?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
  }

  export type ShowsMaxOrderByAggregateInput = {
    showId?: SortOrder
    showName?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsMinOrderByAggregateInput = {
    showId?: SortOrder
    showName?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsSumOrderByAggregateInput = {
    showId?: SortOrder
    editionId?: SortOrder
    showStatusId?: SortOrder
  }

  export type ArtistsArtistsManagementsListRelationFilter = {
    every?: ArtistsArtistsManagementsWhereInput
    some?: ArtistsArtistsManagementsWhereInput
    none?: ArtistsArtistsManagementsWhereInput
  }

  export type ArtistsArtistsManagementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsOrderByRelevanceInput = {
    fields: ArtistsOrderByRelevanceFieldEnum | ArtistsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtistsCountOrderByAggregateInput = {
    artistId?: SortOrder
    artistName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsAvgOrderByAggregateInput = {
    artistId?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    artistId?: SortOrder
    artistName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    artistId?: SortOrder
    artistName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsSumOrderByAggregateInput = {
    artistId?: SortOrder
  }

  export type ShowsStatusesOrderByRelevanceInput = {
    fields: ShowsStatusesOrderByRelevanceFieldEnum | ShowsStatusesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShowsStatusesCountOrderByAggregateInput = {
    showStatusId?: SortOrder
    showStatusCode?: SortOrder
    showStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsStatusesAvgOrderByAggregateInput = {
    showStatusId?: SortOrder
  }

  export type ShowsStatusesMaxOrderByAggregateInput = {
    showStatusId?: SortOrder
    showStatusCode?: SortOrder
    showStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsStatusesMinOrderByAggregateInput = {
    showStatusId?: SortOrder
    showStatusCode?: SortOrder
    showStatusName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ShowsStatusesSumOrderByAggregateInput = {
    showStatusId?: SortOrder
  }

  export type ArtistsManagementsListRelationFilter = {
    every?: ArtistsManagementsWhereInput
    some?: ArtistsManagementsWhereInput
    none?: ArtistsManagementsWhereInput
  }

  export type ArtistsManagementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsManagementsCategoriesOrderByRelevanceInput = {
    fields: ArtistsManagementsCategoriesOrderByRelevanceFieldEnum | ArtistsManagementsCategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtistsManagementsCategoriesCountOrderByAggregateInput = {
    artistManagementCategoryId?: SortOrder
    artistManagementCategoryName?: SortOrder
    artistManagementCategoryComment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsCategoriesAvgOrderByAggregateInput = {
    artistManagementCategoryId?: SortOrder
  }

  export type ArtistsManagementsCategoriesMaxOrderByAggregateInput = {
    artistManagementCategoryId?: SortOrder
    artistManagementCategoryName?: SortOrder
    artistManagementCategoryComment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsCategoriesMinOrderByAggregateInput = {
    artistManagementCategoryId?: SortOrder
    artistManagementCategoryName?: SortOrder
    artistManagementCategoryComment?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsCategoriesSumOrderByAggregateInput = {
    artistManagementCategoryId?: SortOrder
  }

  export type ArtistsManagementsCategoriesScalarRelationFilter = {
    is?: ArtistsManagementsCategoriesWhereInput
    isNot?: ArtistsManagementsCategoriesWhereInput
  }

  export type ArtistsManagementsOrderByRelevanceInput = {
    fields: ArtistsManagementsOrderByRelevanceFieldEnum | ArtistsManagementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtistsManagementsCountOrderByAggregateInput = {
    artistManagementId?: SortOrder
    artistManagementName?: SortOrder
    artistManagementCategoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsAvgOrderByAggregateInput = {
    artistManagementId?: SortOrder
    artistManagementCategoryId?: SortOrder
  }

  export type ArtistsManagementsMaxOrderByAggregateInput = {
    artistManagementId?: SortOrder
    artistManagementName?: SortOrder
    artistManagementCategoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsMinOrderByAggregateInput = {
    artistManagementId?: SortOrder
    artistManagementName?: SortOrder
    artistManagementCategoryId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsManagementsSumOrderByAggregateInput = {
    artistManagementId?: SortOrder
    artistManagementCategoryId?: SortOrder
  }

  export type ArtistsScalarRelationFilter = {
    is?: ArtistsWhereInput
    isNot?: ArtistsWhereInput
  }

  export type ArtistsManagementsScalarRelationFilter = {
    is?: ArtistsManagementsWhereInput
    isNot?: ArtistsManagementsWhereInput
  }

  export type ArtistsArtistsManagementsOrderByRelevanceInput = {
    fields: ArtistsArtistsManagementsOrderByRelevanceFieldEnum | ArtistsArtistsManagementsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArtistsArtistsManagementsCountOrderByAggregateInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsArtistsManagementsAvgOrderByAggregateInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
  }

  export type ArtistsArtistsManagementsMaxOrderByAggregateInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsArtistsManagementsMinOrderByAggregateInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ArtistsArtistsManagementsSumOrderByAggregateInput = {
    artistArtistManagementId?: SortOrder
    artistId?: SortOrder
    artistManagementId?: SortOrder
  }

  export type ArtistsArtistsManagementsScalarRelationFilter = {
    is?: ArtistsArtistsManagementsWhereInput
    isNot?: ArtistsArtistsManagementsWhereInput
  }

  export type ShowsScalarRelationFilter = {
    is?: ShowsWhereInput
    isNot?: ShowsWhereInput
  }

  export type ContractsNullableScalarRelationFilter = {
    is?: ContractsWhereInput | null
    isNot?: ContractsWhereInput | null
  }

  export type PerformancesOrderByRelevanceInput = {
    fields: PerformancesOrderByRelevanceFieldEnum | PerformancesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PerformancesCountOrderByAggregateInput = {
    performanceId?: SortOrder
    performanceName?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type PerformancesAvgOrderByAggregateInput = {
    performanceId?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
  }

  export type PerformancesMaxOrderByAggregateInput = {
    performanceId?: SortOrder
    performanceName?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type PerformancesMinOrderByAggregateInput = {
    performanceId?: SortOrder
    performanceName?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type PerformancesSumOrderByAggregateInput = {
    performanceId?: SortOrder
    performanceArtistArtistManagementId?: SortOrder
    performanceShowId?: SortOrder
    editionId?: SortOrder
  }

  export type PerformancesScalarRelationFilter = {
    is?: PerformancesWhereInput
    isNot?: PerformancesWhereInput
  }

  export type ContractsOrderByRelevanceInput = {
    fields: ContractsOrderByRelevanceFieldEnum | ContractsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContractsCountOrderByAggregateInput = {
    contractId?: SortOrder
    contractName?: SortOrder
    performanceId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ContractsAvgOrderByAggregateInput = {
    contractId?: SortOrder
    performanceId?: SortOrder
  }

  export type ContractsMaxOrderByAggregateInput = {
    contractId?: SortOrder
    contractName?: SortOrder
    performanceId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ContractsMinOrderByAggregateInput = {
    contractId?: SortOrder
    contractName?: SortOrder
    performanceId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type ContractsSumOrderByAggregateInput = {
    contractId?: SortOrder
    performanceId?: SortOrder
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

  export type UsersAdGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userCode?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userId?: SortOrder
    languageId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userCode?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    userFirstName?: SortOrder
    userLastName?: SortOrder
    userCode?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userId?: SortOrder
    languageId?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UsersAuthOrderByRelevanceInput = {
    fields: UsersAuthOrderByRelevanceFieldEnum | UsersAuthOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersAuthCountOrderByAggregateInput = {
    userAuthId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAuthAvgOrderByAggregateInput = {
    userAuthId?: SortOrder
    userId?: SortOrder
  }

  export type UsersAuthMaxOrderByAggregateInput = {
    userAuthId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAuthMinOrderByAggregateInput = {
    userAuthId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type UsersAuthSumOrderByAggregateInput = {
    userAuthId?: SortOrder
    userId?: SortOrder
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

  export type AdGroupsOrderByRelevanceInput = {
    fields: AdGroupsOrderByRelevanceFieldEnum | AdGroupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdGroupsCountOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type AdGroupsAvgOrderByAggregateInput = {
    adGroupId?: SortOrder
  }

  export type AdGroupsMaxOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
  }

  export type AdGroupsMinOrderByAggregateInput = {
    adGroupId?: SortOrder
    adGroupName?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    isDeleted?: SortOrder
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

  export type EditionsStatusesCreateNestedOneWithoutEditionsInput = {
    create?: XOR<EditionsStatusesCreateWithoutEditionsInput, EditionsStatusesUncheckedCreateWithoutEditionsInput>
    connectOrCreate?: EditionsStatusesCreateOrConnectWithoutEditionsInput
    connect?: EditionsStatusesWhereUniqueInput
  }

  export type ShowsCreateNestedManyWithoutEditionInput = {
    create?: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput> | ShowsCreateWithoutEditionInput[] | ShowsUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutEditionInput | ShowsCreateOrConnectWithoutEditionInput[]
    createMany?: ShowsCreateManyEditionInputEnvelope
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
  }

  export type PerformancesCreateNestedManyWithoutEditionInput = {
    create?: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput> | PerformancesCreateWithoutEditionInput[] | PerformancesUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutEditionInput | PerformancesCreateOrConnectWithoutEditionInput[]
    createMany?: PerformancesCreateManyEditionInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type ShowsUncheckedCreateNestedManyWithoutEditionInput = {
    create?: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput> | ShowsCreateWithoutEditionInput[] | ShowsUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutEditionInput | ShowsCreateOrConnectWithoutEditionInput[]
    createMany?: ShowsCreateManyEditionInputEnvelope
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
  }

  export type PerformancesUncheckedCreateNestedManyWithoutEditionInput = {
    create?: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput> | PerformancesCreateWithoutEditionInput[] | PerformancesUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutEditionInput | PerformancesCreateOrConnectWithoutEditionInput[]
    createMany?: PerformancesCreateManyEditionInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EditionsStatusesUpdateOneRequiredWithoutEditionsNestedInput = {
    create?: XOR<EditionsStatusesCreateWithoutEditionsInput, EditionsStatusesUncheckedCreateWithoutEditionsInput>
    connectOrCreate?: EditionsStatusesCreateOrConnectWithoutEditionsInput
    upsert?: EditionsStatusesUpsertWithoutEditionsInput
    connect?: EditionsStatusesWhereUniqueInput
    update?: XOR<XOR<EditionsStatusesUpdateToOneWithWhereWithoutEditionsInput, EditionsStatusesUpdateWithoutEditionsInput>, EditionsStatusesUncheckedUpdateWithoutEditionsInput>
  }

  export type ShowsUpdateManyWithoutEditionNestedInput = {
    create?: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput> | ShowsCreateWithoutEditionInput[] | ShowsUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutEditionInput | ShowsCreateOrConnectWithoutEditionInput[]
    upsert?: ShowsUpsertWithWhereUniqueWithoutEditionInput | ShowsUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: ShowsCreateManyEditionInputEnvelope
    set?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    disconnect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    delete?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    update?: ShowsUpdateWithWhereUniqueWithoutEditionInput | ShowsUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: ShowsUpdateManyWithWhereWithoutEditionInput | ShowsUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
  }

  export type PerformancesUpdateManyWithoutEditionNestedInput = {
    create?: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput> | PerformancesCreateWithoutEditionInput[] | PerformancesUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutEditionInput | PerformancesCreateOrConnectWithoutEditionInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutEditionInput | PerformancesUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: PerformancesCreateManyEditionInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutEditionInput | PerformancesUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutEditionInput | PerformancesUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type ShowsUncheckedUpdateManyWithoutEditionNestedInput = {
    create?: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput> | ShowsCreateWithoutEditionInput[] | ShowsUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutEditionInput | ShowsCreateOrConnectWithoutEditionInput[]
    upsert?: ShowsUpsertWithWhereUniqueWithoutEditionInput | ShowsUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: ShowsCreateManyEditionInputEnvelope
    set?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    disconnect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    delete?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    update?: ShowsUpdateWithWhereUniqueWithoutEditionInput | ShowsUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: ShowsUpdateManyWithWhereWithoutEditionInput | ShowsUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
  }

  export type PerformancesUncheckedUpdateManyWithoutEditionNestedInput = {
    create?: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput> | PerformancesCreateWithoutEditionInput[] | PerformancesUncheckedCreateWithoutEditionInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutEditionInput | PerformancesCreateOrConnectWithoutEditionInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutEditionInput | PerformancesUpsertWithWhereUniqueWithoutEditionInput[]
    createMany?: PerformancesCreateManyEditionInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutEditionInput | PerformancesUpdateWithWhereUniqueWithoutEditionInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutEditionInput | PerformancesUpdateManyWithWhereWithoutEditionInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type EditionsCreateNestedManyWithoutEditionStatusInput = {
    create?: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput> | EditionsCreateWithoutEditionStatusInput[] | EditionsUncheckedCreateWithoutEditionStatusInput[]
    connectOrCreate?: EditionsCreateOrConnectWithoutEditionStatusInput | EditionsCreateOrConnectWithoutEditionStatusInput[]
    createMany?: EditionsCreateManyEditionStatusInputEnvelope
    connect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
  }

  export type EditionsUncheckedCreateNestedManyWithoutEditionStatusInput = {
    create?: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput> | EditionsCreateWithoutEditionStatusInput[] | EditionsUncheckedCreateWithoutEditionStatusInput[]
    connectOrCreate?: EditionsCreateOrConnectWithoutEditionStatusInput | EditionsCreateOrConnectWithoutEditionStatusInput[]
    createMany?: EditionsCreateManyEditionStatusInputEnvelope
    connect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
  }

  export type EditionsUpdateManyWithoutEditionStatusNestedInput = {
    create?: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput> | EditionsCreateWithoutEditionStatusInput[] | EditionsUncheckedCreateWithoutEditionStatusInput[]
    connectOrCreate?: EditionsCreateOrConnectWithoutEditionStatusInput | EditionsCreateOrConnectWithoutEditionStatusInput[]
    upsert?: EditionsUpsertWithWhereUniqueWithoutEditionStatusInput | EditionsUpsertWithWhereUniqueWithoutEditionStatusInput[]
    createMany?: EditionsCreateManyEditionStatusInputEnvelope
    set?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    disconnect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    delete?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    connect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    update?: EditionsUpdateWithWhereUniqueWithoutEditionStatusInput | EditionsUpdateWithWhereUniqueWithoutEditionStatusInput[]
    updateMany?: EditionsUpdateManyWithWhereWithoutEditionStatusInput | EditionsUpdateManyWithWhereWithoutEditionStatusInput[]
    deleteMany?: EditionsScalarWhereInput | EditionsScalarWhereInput[]
  }

  export type EditionsUncheckedUpdateManyWithoutEditionStatusNestedInput = {
    create?: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput> | EditionsCreateWithoutEditionStatusInput[] | EditionsUncheckedCreateWithoutEditionStatusInput[]
    connectOrCreate?: EditionsCreateOrConnectWithoutEditionStatusInput | EditionsCreateOrConnectWithoutEditionStatusInput[]
    upsert?: EditionsUpsertWithWhereUniqueWithoutEditionStatusInput | EditionsUpsertWithWhereUniqueWithoutEditionStatusInput[]
    createMany?: EditionsCreateManyEditionStatusInputEnvelope
    set?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    disconnect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    delete?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    connect?: EditionsWhereUniqueInput | EditionsWhereUniqueInput[]
    update?: EditionsUpdateWithWhereUniqueWithoutEditionStatusInput | EditionsUpdateWithWhereUniqueWithoutEditionStatusInput[]
    updateMany?: EditionsUpdateManyWithWhereWithoutEditionStatusInput | EditionsUpdateManyWithWhereWithoutEditionStatusInput[]
    deleteMany?: EditionsScalarWhereInput | EditionsScalarWhereInput[]
  }

  export type EditionsCreateNestedOneWithoutShowsInput = {
    create?: XOR<EditionsCreateWithoutShowsInput, EditionsUncheckedCreateWithoutShowsInput>
    connectOrCreate?: EditionsCreateOrConnectWithoutShowsInput
    connect?: EditionsWhereUniqueInput
  }

  export type ShowsStatusesCreateNestedOneWithoutShowsInput = {
    create?: XOR<ShowsStatusesCreateWithoutShowsInput, ShowsStatusesUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ShowsStatusesCreateOrConnectWithoutShowsInput
    connect?: ShowsStatusesWhereUniqueInput
  }

  export type PerformancesCreateNestedManyWithoutShowInput = {
    create?: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput> | PerformancesCreateWithoutShowInput[] | PerformancesUncheckedCreateWithoutShowInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutShowInput | PerformancesCreateOrConnectWithoutShowInput[]
    createMany?: PerformancesCreateManyShowInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type PerformancesUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput> | PerformancesCreateWithoutShowInput[] | PerformancesUncheckedCreateWithoutShowInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutShowInput | PerformancesCreateOrConnectWithoutShowInput[]
    createMany?: PerformancesCreateManyShowInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type EditionsUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<EditionsCreateWithoutShowsInput, EditionsUncheckedCreateWithoutShowsInput>
    connectOrCreate?: EditionsCreateOrConnectWithoutShowsInput
    upsert?: EditionsUpsertWithoutShowsInput
    connect?: EditionsWhereUniqueInput
    update?: XOR<XOR<EditionsUpdateToOneWithWhereWithoutShowsInput, EditionsUpdateWithoutShowsInput>, EditionsUncheckedUpdateWithoutShowsInput>
  }

  export type ShowsStatusesUpdateOneRequiredWithoutShowsNestedInput = {
    create?: XOR<ShowsStatusesCreateWithoutShowsInput, ShowsStatusesUncheckedCreateWithoutShowsInput>
    connectOrCreate?: ShowsStatusesCreateOrConnectWithoutShowsInput
    upsert?: ShowsStatusesUpsertWithoutShowsInput
    connect?: ShowsStatusesWhereUniqueInput
    update?: XOR<XOR<ShowsStatusesUpdateToOneWithWhereWithoutShowsInput, ShowsStatusesUpdateWithoutShowsInput>, ShowsStatusesUncheckedUpdateWithoutShowsInput>
  }

  export type PerformancesUpdateManyWithoutShowNestedInput = {
    create?: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput> | PerformancesCreateWithoutShowInput[] | PerformancesUncheckedCreateWithoutShowInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutShowInput | PerformancesCreateOrConnectWithoutShowInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutShowInput | PerformancesUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: PerformancesCreateManyShowInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutShowInput | PerformancesUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutShowInput | PerformancesUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type PerformancesUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput> | PerformancesCreateWithoutShowInput[] | PerformancesUncheckedCreateWithoutShowInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutShowInput | PerformancesCreateOrConnectWithoutShowInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutShowInput | PerformancesUpsertWithWhereUniqueWithoutShowInput[]
    createMany?: PerformancesCreateManyShowInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutShowInput | PerformancesUpdateWithWhereUniqueWithoutShowInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutShowInput | PerformancesUpdateManyWithWhereWithoutShowInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type ArtistsArtistsManagementsCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput> | ArtistsArtistsManagementsCreateWithoutArtistInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistInputEnvelope
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsArtistsManagementsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput> | ArtistsArtistsManagementsCreateWithoutArtistInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistInputEnvelope
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsArtistsManagementsUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput> | ArtistsArtistsManagementsCreateWithoutArtistInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistInput | ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistInputEnvelope
    set?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    update?: ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistInput | ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistInput | ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
  }

  export type ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput> | ArtistsArtistsManagementsCreateWithoutArtistInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistInput | ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistInputEnvelope
    set?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    update?: ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistInput | ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistInput | ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
  }

  export type ShowsCreateNestedManyWithoutShowStatusInput = {
    create?: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput> | ShowsCreateWithoutShowStatusInput[] | ShowsUncheckedCreateWithoutShowStatusInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutShowStatusInput | ShowsCreateOrConnectWithoutShowStatusInput[]
    createMany?: ShowsCreateManyShowStatusInputEnvelope
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
  }

  export type ShowsUncheckedCreateNestedManyWithoutShowStatusInput = {
    create?: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput> | ShowsCreateWithoutShowStatusInput[] | ShowsUncheckedCreateWithoutShowStatusInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutShowStatusInput | ShowsCreateOrConnectWithoutShowStatusInput[]
    createMany?: ShowsCreateManyShowStatusInputEnvelope
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
  }

  export type ShowsUpdateManyWithoutShowStatusNestedInput = {
    create?: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput> | ShowsCreateWithoutShowStatusInput[] | ShowsUncheckedCreateWithoutShowStatusInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutShowStatusInput | ShowsCreateOrConnectWithoutShowStatusInput[]
    upsert?: ShowsUpsertWithWhereUniqueWithoutShowStatusInput | ShowsUpsertWithWhereUniqueWithoutShowStatusInput[]
    createMany?: ShowsCreateManyShowStatusInputEnvelope
    set?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    disconnect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    delete?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    update?: ShowsUpdateWithWhereUniqueWithoutShowStatusInput | ShowsUpdateWithWhereUniqueWithoutShowStatusInput[]
    updateMany?: ShowsUpdateManyWithWhereWithoutShowStatusInput | ShowsUpdateManyWithWhereWithoutShowStatusInput[]
    deleteMany?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
  }

  export type ShowsUncheckedUpdateManyWithoutShowStatusNestedInput = {
    create?: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput> | ShowsCreateWithoutShowStatusInput[] | ShowsUncheckedCreateWithoutShowStatusInput[]
    connectOrCreate?: ShowsCreateOrConnectWithoutShowStatusInput | ShowsCreateOrConnectWithoutShowStatusInput[]
    upsert?: ShowsUpsertWithWhereUniqueWithoutShowStatusInput | ShowsUpsertWithWhereUniqueWithoutShowStatusInput[]
    createMany?: ShowsCreateManyShowStatusInputEnvelope
    set?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    disconnect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    delete?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    connect?: ShowsWhereUniqueInput | ShowsWhereUniqueInput[]
    update?: ShowsUpdateWithWhereUniqueWithoutShowStatusInput | ShowsUpdateWithWhereUniqueWithoutShowStatusInput[]
    updateMany?: ShowsUpdateManyWithWhereWithoutShowStatusInput | ShowsUpdateManyWithWhereWithoutShowStatusInput[]
    deleteMany?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
  }

  export type ArtistsManagementsCreateNestedManyWithoutArtistManagementCategoryInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput> | ArtistsManagementsCreateWithoutArtistManagementCategoryInput[] | ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput[]
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput | ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput[]
    createMany?: ArtistsManagementsCreateManyArtistManagementCategoryInputEnvelope
    connect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsManagementsUncheckedCreateNestedManyWithoutArtistManagementCategoryInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput> | ArtistsManagementsCreateWithoutArtistManagementCategoryInput[] | ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput[]
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput | ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput[]
    createMany?: ArtistsManagementsCreateManyArtistManagementCategoryInputEnvelope
    connect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsManagementsUpdateManyWithoutArtistManagementCategoryNestedInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput> | ArtistsManagementsCreateWithoutArtistManagementCategoryInput[] | ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput[]
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput | ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput[]
    upsert?: ArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementCategoryInput | ArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementCategoryInput[]
    createMany?: ArtistsManagementsCreateManyArtistManagementCategoryInputEnvelope
    set?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    update?: ArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementCategoryInput | ArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementCategoryInput[]
    updateMany?: ArtistsManagementsUpdateManyWithWhereWithoutArtistManagementCategoryInput | ArtistsManagementsUpdateManyWithWhereWithoutArtistManagementCategoryInput[]
    deleteMany?: ArtistsManagementsScalarWhereInput | ArtistsManagementsScalarWhereInput[]
  }

  export type ArtistsManagementsUncheckedUpdateManyWithoutArtistManagementCategoryNestedInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput> | ArtistsManagementsCreateWithoutArtistManagementCategoryInput[] | ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput[]
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput | ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput[]
    upsert?: ArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementCategoryInput | ArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementCategoryInput[]
    createMany?: ArtistsManagementsCreateManyArtistManagementCategoryInputEnvelope
    set?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsManagementsWhereUniqueInput | ArtistsManagementsWhereUniqueInput[]
    update?: ArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementCategoryInput | ArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementCategoryInput[]
    updateMany?: ArtistsManagementsUpdateManyWithWhereWithoutArtistManagementCategoryInput | ArtistsManagementsUpdateManyWithWhereWithoutArtistManagementCategoryInput[]
    deleteMany?: ArtistsManagementsScalarWhereInput | ArtistsManagementsScalarWhereInput[]
  }

  export type ArtistsManagementsCategoriesCreateNestedOneWithoutArtistsManagementsInput = {
    create?: XOR<ArtistsManagementsCategoriesCreateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedCreateWithoutArtistsManagementsInput>
    connectOrCreate?: ArtistsManagementsCategoriesCreateOrConnectWithoutArtistsManagementsInput
    connect?: ArtistsManagementsCategoriesWhereUniqueInput
  }

  export type ArtistsArtistsManagementsCreateNestedManyWithoutArtistManagementInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput> | ArtistsArtistsManagementsCreateWithoutArtistManagementInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistManagementInputEnvelope
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsArtistsManagementsUncheckedCreateNestedManyWithoutArtistManagementInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput> | ArtistsArtistsManagementsCreateWithoutArtistManagementInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistManagementInputEnvelope
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
  }

  export type ArtistsManagementsCategoriesUpdateOneRequiredWithoutArtistsManagementsNestedInput = {
    create?: XOR<ArtistsManagementsCategoriesCreateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedCreateWithoutArtistsManagementsInput>
    connectOrCreate?: ArtistsManagementsCategoriesCreateOrConnectWithoutArtistsManagementsInput
    upsert?: ArtistsManagementsCategoriesUpsertWithoutArtistsManagementsInput
    connect?: ArtistsManagementsCategoriesWhereUniqueInput
    update?: XOR<XOR<ArtistsManagementsCategoriesUpdateToOneWithWhereWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUpdateWithoutArtistsManagementsInput>, ArtistsManagementsCategoriesUncheckedUpdateWithoutArtistsManagementsInput>
  }

  export type ArtistsArtistsManagementsUpdateManyWithoutArtistManagementNestedInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput> | ArtistsArtistsManagementsCreateWithoutArtistManagementInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput[]
    upsert?: ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementInput | ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistManagementInputEnvelope
    set?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    update?: ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementInput | ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementInput[]
    updateMany?: ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistManagementInput | ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistManagementInput[]
    deleteMany?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
  }

  export type ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistManagementNestedInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput> | ArtistsArtistsManagementsCreateWithoutArtistManagementInput[] | ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput[]
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput | ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput[]
    upsert?: ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementInput | ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementInput[]
    createMany?: ArtistsArtistsManagementsCreateManyArtistManagementInputEnvelope
    set?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    disconnect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    delete?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    connect?: ArtistsArtistsManagementsWhereUniqueInput | ArtistsArtistsManagementsWhereUniqueInput[]
    update?: ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementInput | ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementInput[]
    updateMany?: ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistManagementInput | ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistManagementInput[]
    deleteMany?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutArtistsManagementsInput = {
    create?: XOR<ArtistsCreateWithoutArtistsManagementsInput, ArtistsUncheckedCreateWithoutArtistsManagementsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutArtistsManagementsInput
    connect?: ArtistsWhereUniqueInput
  }

  export type ArtistsManagementsCreateNestedOneWithoutArtistsArtistsManagementsInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedCreateWithoutArtistsArtistsManagementsInput>
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistsArtistsManagementsInput
    connect?: ArtistsManagementsWhereUniqueInput
  }

  export type PerformancesCreateNestedManyWithoutArtistManagementLinkInput = {
    create?: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput> | PerformancesCreateWithoutArtistManagementLinkInput[] | PerformancesUncheckedCreateWithoutArtistManagementLinkInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutArtistManagementLinkInput | PerformancesCreateOrConnectWithoutArtistManagementLinkInput[]
    createMany?: PerformancesCreateManyArtistManagementLinkInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type PerformancesUncheckedCreateNestedManyWithoutArtistManagementLinkInput = {
    create?: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput> | PerformancesCreateWithoutArtistManagementLinkInput[] | PerformancesUncheckedCreateWithoutArtistManagementLinkInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutArtistManagementLinkInput | PerformancesCreateOrConnectWithoutArtistManagementLinkInput[]
    createMany?: PerformancesCreateManyArtistManagementLinkInputEnvelope
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
  }

  export type ArtistsUpdateOneRequiredWithoutArtistsManagementsNestedInput = {
    create?: XOR<ArtistsCreateWithoutArtistsManagementsInput, ArtistsUncheckedCreateWithoutArtistsManagementsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutArtistsManagementsInput
    upsert?: ArtistsUpsertWithoutArtistsManagementsInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutArtistsManagementsInput, ArtistsUpdateWithoutArtistsManagementsInput>, ArtistsUncheckedUpdateWithoutArtistsManagementsInput>
  }

  export type ArtistsManagementsUpdateOneRequiredWithoutArtistsArtistsManagementsNestedInput = {
    create?: XOR<ArtistsManagementsCreateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedCreateWithoutArtistsArtistsManagementsInput>
    connectOrCreate?: ArtistsManagementsCreateOrConnectWithoutArtistsArtistsManagementsInput
    upsert?: ArtistsManagementsUpsertWithoutArtistsArtistsManagementsInput
    connect?: ArtistsManagementsWhereUniqueInput
    update?: XOR<XOR<ArtistsManagementsUpdateToOneWithWhereWithoutArtistsArtistsManagementsInput, ArtistsManagementsUpdateWithoutArtistsArtistsManagementsInput>, ArtistsManagementsUncheckedUpdateWithoutArtistsArtistsManagementsInput>
  }

  export type PerformancesUpdateManyWithoutArtistManagementLinkNestedInput = {
    create?: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput> | PerformancesCreateWithoutArtistManagementLinkInput[] | PerformancesUncheckedCreateWithoutArtistManagementLinkInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutArtistManagementLinkInput | PerformancesCreateOrConnectWithoutArtistManagementLinkInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutArtistManagementLinkInput | PerformancesUpsertWithWhereUniqueWithoutArtistManagementLinkInput[]
    createMany?: PerformancesCreateManyArtistManagementLinkInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutArtistManagementLinkInput | PerformancesUpdateWithWhereUniqueWithoutArtistManagementLinkInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutArtistManagementLinkInput | PerformancesUpdateManyWithWhereWithoutArtistManagementLinkInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type PerformancesUncheckedUpdateManyWithoutArtistManagementLinkNestedInput = {
    create?: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput> | PerformancesCreateWithoutArtistManagementLinkInput[] | PerformancesUncheckedCreateWithoutArtistManagementLinkInput[]
    connectOrCreate?: PerformancesCreateOrConnectWithoutArtistManagementLinkInput | PerformancesCreateOrConnectWithoutArtistManagementLinkInput[]
    upsert?: PerformancesUpsertWithWhereUniqueWithoutArtistManagementLinkInput | PerformancesUpsertWithWhereUniqueWithoutArtistManagementLinkInput[]
    createMany?: PerformancesCreateManyArtistManagementLinkInputEnvelope
    set?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    disconnect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    delete?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    connect?: PerformancesWhereUniqueInput | PerformancesWhereUniqueInput[]
    update?: PerformancesUpdateWithWhereUniqueWithoutArtistManagementLinkInput | PerformancesUpdateWithWhereUniqueWithoutArtistManagementLinkInput[]
    updateMany?: PerformancesUpdateManyWithWhereWithoutArtistManagementLinkInput | PerformancesUpdateManyWithWhereWithoutArtistManagementLinkInput[]
    deleteMany?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
  }

  export type ArtistsArtistsManagementsCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutPerformancesInput
    connect?: ArtistsArtistsManagementsWhereUniqueInput
  }

  export type ShowsCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<ShowsCreateWithoutPerformancesInput, ShowsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutPerformancesInput
    connect?: ShowsWhereUniqueInput
  }

  export type EditionsCreateNestedOneWithoutPerformancesInput = {
    create?: XOR<EditionsCreateWithoutPerformancesInput, EditionsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: EditionsCreateOrConnectWithoutPerformancesInput
    connect?: EditionsWhereUniqueInput
  }

  export type ContractsCreateNestedOneWithoutPerformanceInput = {
    create?: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutPerformanceInput
    connect?: ContractsWhereUniqueInput
  }

  export type ContractsUncheckedCreateNestedOneWithoutPerformanceInput = {
    create?: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutPerformanceInput
    connect?: ContractsWhereUniqueInput
  }

  export type ArtistsArtistsManagementsUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<ArtistsArtistsManagementsCreateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ArtistsArtistsManagementsCreateOrConnectWithoutPerformancesInput
    upsert?: ArtistsArtistsManagementsUpsertWithoutPerformancesInput
    connect?: ArtistsArtistsManagementsWhereUniqueInput
    update?: XOR<XOR<ArtistsArtistsManagementsUpdateToOneWithWhereWithoutPerformancesInput, ArtistsArtistsManagementsUpdateWithoutPerformancesInput>, ArtistsArtistsManagementsUncheckedUpdateWithoutPerformancesInput>
  }

  export type ShowsUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<ShowsCreateWithoutPerformancesInput, ShowsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: ShowsCreateOrConnectWithoutPerformancesInput
    upsert?: ShowsUpsertWithoutPerformancesInput
    connect?: ShowsWhereUniqueInput
    update?: XOR<XOR<ShowsUpdateToOneWithWhereWithoutPerformancesInput, ShowsUpdateWithoutPerformancesInput>, ShowsUncheckedUpdateWithoutPerformancesInput>
  }

  export type EditionsUpdateOneRequiredWithoutPerformancesNestedInput = {
    create?: XOR<EditionsCreateWithoutPerformancesInput, EditionsUncheckedCreateWithoutPerformancesInput>
    connectOrCreate?: EditionsCreateOrConnectWithoutPerformancesInput
    upsert?: EditionsUpsertWithoutPerformancesInput
    connect?: EditionsWhereUniqueInput
    update?: XOR<XOR<EditionsUpdateToOneWithWhereWithoutPerformancesInput, EditionsUpdateWithoutPerformancesInput>, EditionsUncheckedUpdateWithoutPerformancesInput>
  }

  export type ContractsUpdateOneWithoutPerformanceNestedInput = {
    create?: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutPerformanceInput
    upsert?: ContractsUpsertWithoutPerformanceInput
    disconnect?: ContractsWhereInput | boolean
    delete?: ContractsWhereInput | boolean
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutPerformanceInput, ContractsUpdateWithoutPerformanceInput>, ContractsUncheckedUpdateWithoutPerformanceInput>
  }

  export type ContractsUncheckedUpdateOneWithoutPerformanceNestedInput = {
    create?: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutPerformanceInput
    upsert?: ContractsUpsertWithoutPerformanceInput
    disconnect?: ContractsWhereInput | boolean
    delete?: ContractsWhereInput | boolean
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutPerformanceInput, ContractsUpdateWithoutPerformanceInput>, ContractsUncheckedUpdateWithoutPerformanceInput>
  }

  export type PerformancesCreateNestedOneWithoutContractInput = {
    create?: XOR<PerformancesCreateWithoutContractInput, PerformancesUncheckedCreateWithoutContractInput>
    connectOrCreate?: PerformancesCreateOrConnectWithoutContractInput
    connect?: PerformancesWhereUniqueInput
  }

  export type PerformancesUpdateOneRequiredWithoutContractNestedInput = {
    create?: XOR<PerformancesCreateWithoutContractInput, PerformancesUncheckedCreateWithoutContractInput>
    connectOrCreate?: PerformancesCreateOrConnectWithoutContractInput
    upsert?: PerformancesUpsertWithoutContractInput
    connect?: PerformancesWhereUniqueInput
    update?: XOR<XOR<PerformancesUpdateToOneWithWhereWithoutContractInput, PerformancesUpdateWithoutContractInput>, PerformancesUncheckedUpdateWithoutContractInput>
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

  export type UsersCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<UsersCreateWithoutUserGroupsInput, UsersUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserGroupsInput
    connect?: UsersWhereUniqueInput
  }

  export type AdGroupsCreateNestedOneWithoutUserGroupsInput = {
    create?: XOR<AdGroupsCreateWithoutUserGroupsInput, AdGroupsUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: AdGroupsCreateOrConnectWithoutUserGroupsInput
    connect?: AdGroupsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<UsersCreateWithoutUserGroupsInput, UsersUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserGroupsInput
    upsert?: UsersUpsertWithoutUserGroupsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserGroupsInput, UsersUpdateWithoutUserGroupsInput>, UsersUncheckedUpdateWithoutUserGroupsInput>
  }

  export type AdGroupsUpdateOneRequiredWithoutUserGroupsNestedInput = {
    create?: XOR<AdGroupsCreateWithoutUserGroupsInput, AdGroupsUncheckedCreateWithoutUserGroupsInput>
    connectOrCreate?: AdGroupsCreateOrConnectWithoutUserGroupsInput
    upsert?: AdGroupsUpsertWithoutUserGroupsInput
    connect?: AdGroupsWhereUniqueInput
    update?: XOR<XOR<AdGroupsUpdateToOneWithWhereWithoutUserGroupsInput, AdGroupsUpdateWithoutUserGroupsInput>, AdGroupsUncheckedUpdateWithoutUserGroupsInput>
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

  export type EditionsStatusesCreateWithoutEditionsInput = {
    editionStatusCode: string
    editionStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type EditionsStatusesUncheckedCreateWithoutEditionsInput = {
    editionStatusId?: number
    editionStatusCode: string
    editionStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type EditionsStatusesCreateOrConnectWithoutEditionsInput = {
    where: EditionsStatusesWhereUniqueInput
    create: XOR<EditionsStatusesCreateWithoutEditionsInput, EditionsStatusesUncheckedCreateWithoutEditionsInput>
  }

  export type ShowsCreateWithoutEditionInput = {
    showName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    showStatus: ShowsStatusesCreateNestedOneWithoutShowsInput
    performances?: PerformancesCreateNestedManyWithoutShowInput
  }

  export type ShowsUncheckedCreateWithoutEditionInput = {
    showId?: number
    showName: string
    showStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowsCreateOrConnectWithoutEditionInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput>
  }

  export type ShowsCreateManyEditionInputEnvelope = {
    data: ShowsCreateManyEditionInput | ShowsCreateManyEditionInput[]
    skipDuplicates?: boolean
  }

  export type PerformancesCreateWithoutEditionInput = {
    performanceName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementLink: ArtistsArtistsManagementsCreateNestedOneWithoutPerformancesInput
    show: ShowsCreateNestedOneWithoutPerformancesInput
    contract?: ContractsCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesUncheckedCreateWithoutEditionInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    contract?: ContractsUncheckedCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesCreateOrConnectWithoutEditionInput = {
    where: PerformancesWhereUniqueInput
    create: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput>
  }

  export type PerformancesCreateManyEditionInputEnvelope = {
    data: PerformancesCreateManyEditionInput | PerformancesCreateManyEditionInput[]
    skipDuplicates?: boolean
  }

  export type EditionsStatusesUpsertWithoutEditionsInput = {
    update: XOR<EditionsStatusesUpdateWithoutEditionsInput, EditionsStatusesUncheckedUpdateWithoutEditionsInput>
    create: XOR<EditionsStatusesCreateWithoutEditionsInput, EditionsStatusesUncheckedCreateWithoutEditionsInput>
    where?: EditionsStatusesWhereInput
  }

  export type EditionsStatusesUpdateToOneWithWhereWithoutEditionsInput = {
    where?: EditionsStatusesWhereInput
    data: XOR<EditionsStatusesUpdateWithoutEditionsInput, EditionsStatusesUncheckedUpdateWithoutEditionsInput>
  }

  export type EditionsStatusesUpdateWithoutEditionsInput = {
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsStatusesUncheckedUpdateWithoutEditionsInput = {
    editionStatusId?: IntFieldUpdateOperationsInput | number
    editionStatusCode?: StringFieldUpdateOperationsInput | string
    editionStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsUpsertWithWhereUniqueWithoutEditionInput = {
    where: ShowsWhereUniqueInput
    update: XOR<ShowsUpdateWithoutEditionInput, ShowsUncheckedUpdateWithoutEditionInput>
    create: XOR<ShowsCreateWithoutEditionInput, ShowsUncheckedCreateWithoutEditionInput>
  }

  export type ShowsUpdateWithWhereUniqueWithoutEditionInput = {
    where: ShowsWhereUniqueInput
    data: XOR<ShowsUpdateWithoutEditionInput, ShowsUncheckedUpdateWithoutEditionInput>
  }

  export type ShowsUpdateManyWithWhereWithoutEditionInput = {
    where: ShowsScalarWhereInput
    data: XOR<ShowsUpdateManyMutationInput, ShowsUncheckedUpdateManyWithoutEditionInput>
  }

  export type ShowsScalarWhereInput = {
    AND?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
    OR?: ShowsScalarWhereInput[]
    NOT?: ShowsScalarWhereInput | ShowsScalarWhereInput[]
    showId?: IntFilter<"Shows"> | number
    showName?: StringFilter<"Shows"> | string
    editionId?: IntFilter<"Shows"> | number
    showStatusId?: IntFilter<"Shows"> | number
    createdAt?: DateTimeFilter<"Shows"> | Date | string
    createdBy?: StringFilter<"Shows"> | string
    isDeleted?: BoolFilter<"Shows"> | boolean
  }

  export type PerformancesUpsertWithWhereUniqueWithoutEditionInput = {
    where: PerformancesWhereUniqueInput
    update: XOR<PerformancesUpdateWithoutEditionInput, PerformancesUncheckedUpdateWithoutEditionInput>
    create: XOR<PerformancesCreateWithoutEditionInput, PerformancesUncheckedCreateWithoutEditionInput>
  }

  export type PerformancesUpdateWithWhereUniqueWithoutEditionInput = {
    where: PerformancesWhereUniqueInput
    data: XOR<PerformancesUpdateWithoutEditionInput, PerformancesUncheckedUpdateWithoutEditionInput>
  }

  export type PerformancesUpdateManyWithWhereWithoutEditionInput = {
    where: PerformancesScalarWhereInput
    data: XOR<PerformancesUpdateManyMutationInput, PerformancesUncheckedUpdateManyWithoutEditionInput>
  }

  export type PerformancesScalarWhereInput = {
    AND?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
    OR?: PerformancesScalarWhereInput[]
    NOT?: PerformancesScalarWhereInput | PerformancesScalarWhereInput[]
    performanceId?: IntFilter<"Performances"> | number
    performanceName?: StringFilter<"Performances"> | string
    performanceArtistArtistManagementId?: IntFilter<"Performances"> | number
    performanceShowId?: IntFilter<"Performances"> | number
    editionId?: IntFilter<"Performances"> | number
    createdAt?: DateTimeFilter<"Performances"> | Date | string
    createdBy?: StringFilter<"Performances"> | string
    isDeleted?: BoolFilter<"Performances"> | boolean
  }

  export type EditionsCreateWithoutEditionStatusInput = {
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsCreateNestedManyWithoutEditionInput
    performances?: PerformancesCreateNestedManyWithoutEditionInput
  }

  export type EditionsUncheckedCreateWithoutEditionStatusInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsUncheckedCreateNestedManyWithoutEditionInput
    performances?: PerformancesUncheckedCreateNestedManyWithoutEditionInput
  }

  export type EditionsCreateOrConnectWithoutEditionStatusInput = {
    where: EditionsWhereUniqueInput
    create: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput>
  }

  export type EditionsCreateManyEditionStatusInputEnvelope = {
    data: EditionsCreateManyEditionStatusInput | EditionsCreateManyEditionStatusInput[]
    skipDuplicates?: boolean
  }

  export type EditionsUpsertWithWhereUniqueWithoutEditionStatusInput = {
    where: EditionsWhereUniqueInput
    update: XOR<EditionsUpdateWithoutEditionStatusInput, EditionsUncheckedUpdateWithoutEditionStatusInput>
    create: XOR<EditionsCreateWithoutEditionStatusInput, EditionsUncheckedCreateWithoutEditionStatusInput>
  }

  export type EditionsUpdateWithWhereUniqueWithoutEditionStatusInput = {
    where: EditionsWhereUniqueInput
    data: XOR<EditionsUpdateWithoutEditionStatusInput, EditionsUncheckedUpdateWithoutEditionStatusInput>
  }

  export type EditionsUpdateManyWithWhereWithoutEditionStatusInput = {
    where: EditionsScalarWhereInput
    data: XOR<EditionsUpdateManyMutationInput, EditionsUncheckedUpdateManyWithoutEditionStatusInput>
  }

  export type EditionsScalarWhereInput = {
    AND?: EditionsScalarWhereInput | EditionsScalarWhereInput[]
    OR?: EditionsScalarWhereInput[]
    NOT?: EditionsScalarWhereInput | EditionsScalarWhereInput[]
    editionId?: IntFilter<"Editions"> | number
    editionName?: StringFilter<"Editions"> | string
    editionYear?: IntFilter<"Editions"> | number
    isCurrentedition?: BoolFilter<"Editions"> | boolean
    editionStatusId?: IntFilter<"Editions"> | number
    createdAt?: DateTimeFilter<"Editions"> | Date | string
    createdBy?: StringFilter<"Editions"> | string
    isDeleted?: BoolFilter<"Editions"> | boolean
  }

  export type EditionsCreateWithoutShowsInput = {
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    editionStatus: EditionsStatusesCreateNestedOneWithoutEditionsInput
    performances?: PerformancesCreateNestedManyWithoutEditionInput
  }

  export type EditionsUncheckedCreateWithoutShowsInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    editionStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutEditionInput
  }

  export type EditionsCreateOrConnectWithoutShowsInput = {
    where: EditionsWhereUniqueInput
    create: XOR<EditionsCreateWithoutShowsInput, EditionsUncheckedCreateWithoutShowsInput>
  }

  export type ShowsStatusesCreateWithoutShowsInput = {
    showStatusCode: string
    showStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsStatusesUncheckedCreateWithoutShowsInput = {
    showStatusId?: number
    showStatusCode: string
    showStatusName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsStatusesCreateOrConnectWithoutShowsInput = {
    where: ShowsStatusesWhereUniqueInput
    create: XOR<ShowsStatusesCreateWithoutShowsInput, ShowsStatusesUncheckedCreateWithoutShowsInput>
  }

  export type PerformancesCreateWithoutShowInput = {
    performanceName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementLink: ArtistsArtistsManagementsCreateNestedOneWithoutPerformancesInput
    edition: EditionsCreateNestedOneWithoutPerformancesInput
    contract?: ContractsCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesUncheckedCreateWithoutShowInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    contract?: ContractsUncheckedCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesCreateOrConnectWithoutShowInput = {
    where: PerformancesWhereUniqueInput
    create: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput>
  }

  export type PerformancesCreateManyShowInputEnvelope = {
    data: PerformancesCreateManyShowInput | PerformancesCreateManyShowInput[]
    skipDuplicates?: boolean
  }

  export type EditionsUpsertWithoutShowsInput = {
    update: XOR<EditionsUpdateWithoutShowsInput, EditionsUncheckedUpdateWithoutShowsInput>
    create: XOR<EditionsCreateWithoutShowsInput, EditionsUncheckedCreateWithoutShowsInput>
    where?: EditionsWhereInput
  }

  export type EditionsUpdateToOneWithWhereWithoutShowsInput = {
    where?: EditionsWhereInput
    data: XOR<EditionsUpdateWithoutShowsInput, EditionsUncheckedUpdateWithoutShowsInput>
  }

  export type EditionsUpdateWithoutShowsInput = {
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    editionStatus?: EditionsStatusesUpdateOneRequiredWithoutEditionsNestedInput
    performances?: PerformancesUpdateManyWithoutEditionNestedInput
  }

  export type EditionsUncheckedUpdateWithoutShowsInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    editionStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type ShowsStatusesUpsertWithoutShowsInput = {
    update: XOR<ShowsStatusesUpdateWithoutShowsInput, ShowsStatusesUncheckedUpdateWithoutShowsInput>
    create: XOR<ShowsStatusesCreateWithoutShowsInput, ShowsStatusesUncheckedCreateWithoutShowsInput>
    where?: ShowsStatusesWhereInput
  }

  export type ShowsStatusesUpdateToOneWithWhereWithoutShowsInput = {
    where?: ShowsStatusesWhereInput
    data: XOR<ShowsStatusesUpdateWithoutShowsInput, ShowsStatusesUncheckedUpdateWithoutShowsInput>
  }

  export type ShowsStatusesUpdateWithoutShowsInput = {
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsStatusesUncheckedUpdateWithoutShowsInput = {
    showStatusId?: IntFieldUpdateOperationsInput | number
    showStatusCode?: StringFieldUpdateOperationsInput | string
    showStatusName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesUpsertWithWhereUniqueWithoutShowInput = {
    where: PerformancesWhereUniqueInput
    update: XOR<PerformancesUpdateWithoutShowInput, PerformancesUncheckedUpdateWithoutShowInput>
    create: XOR<PerformancesCreateWithoutShowInput, PerformancesUncheckedCreateWithoutShowInput>
  }

  export type PerformancesUpdateWithWhereUniqueWithoutShowInput = {
    where: PerformancesWhereUniqueInput
    data: XOR<PerformancesUpdateWithoutShowInput, PerformancesUncheckedUpdateWithoutShowInput>
  }

  export type PerformancesUpdateManyWithWhereWithoutShowInput = {
    where: PerformancesScalarWhereInput
    data: XOR<PerformancesUpdateManyMutationInput, PerformancesUncheckedUpdateManyWithoutShowInput>
  }

  export type ArtistsArtistsManagementsCreateWithoutArtistInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagement: ArtistsManagementsCreateNestedOneWithoutArtistsArtistsManagementsInput
    performances?: PerformancesCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput = {
    artistArtistManagementId?: number
    artistManagementId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsCreateOrConnectWithoutArtistInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    create: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput>
  }

  export type ArtistsArtistsManagementsCreateManyArtistInputEnvelope = {
    data: ArtistsArtistsManagementsCreateManyArtistInput | ArtistsArtistsManagementsCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    update: XOR<ArtistsArtistsManagementsUpdateWithoutArtistInput, ArtistsArtistsManagementsUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistsArtistsManagementsCreateWithoutArtistInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistInput>
  }

  export type ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    data: XOR<ArtistsArtistsManagementsUpdateWithoutArtistInput, ArtistsArtistsManagementsUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistsArtistsManagementsScalarWhereInput
    data: XOR<ArtistsArtistsManagementsUpdateManyMutationInput, ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistInput>
  }

  export type ArtistsArtistsManagementsScalarWhereInput = {
    AND?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
    OR?: ArtistsArtistsManagementsScalarWhereInput[]
    NOT?: ArtistsArtistsManagementsScalarWhereInput | ArtistsArtistsManagementsScalarWhereInput[]
    artistArtistManagementId?: IntFilter<"ArtistsArtistsManagements"> | number
    artistId?: IntFilter<"ArtistsArtistsManagements"> | number
    artistManagementId?: IntFilter<"ArtistsArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsArtistsManagements"> | boolean
  }

  export type ShowsCreateWithoutShowStatusInput = {
    showName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    edition: EditionsCreateNestedOneWithoutShowsInput
    performances?: PerformancesCreateNestedManyWithoutShowInput
  }

  export type ShowsUncheckedCreateWithoutShowStatusInput = {
    showId?: number
    showName: string
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowsCreateOrConnectWithoutShowStatusInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput>
  }

  export type ShowsCreateManyShowStatusInputEnvelope = {
    data: ShowsCreateManyShowStatusInput | ShowsCreateManyShowStatusInput[]
    skipDuplicates?: boolean
  }

  export type ShowsUpsertWithWhereUniqueWithoutShowStatusInput = {
    where: ShowsWhereUniqueInput
    update: XOR<ShowsUpdateWithoutShowStatusInput, ShowsUncheckedUpdateWithoutShowStatusInput>
    create: XOR<ShowsCreateWithoutShowStatusInput, ShowsUncheckedCreateWithoutShowStatusInput>
  }

  export type ShowsUpdateWithWhereUniqueWithoutShowStatusInput = {
    where: ShowsWhereUniqueInput
    data: XOR<ShowsUpdateWithoutShowStatusInput, ShowsUncheckedUpdateWithoutShowStatusInput>
  }

  export type ShowsUpdateManyWithWhereWithoutShowStatusInput = {
    where: ShowsScalarWhereInput
    data: XOR<ShowsUpdateManyMutationInput, ShowsUncheckedUpdateManyWithoutShowStatusInput>
  }

  export type ArtistsManagementsCreateWithoutArtistManagementCategoryInput = {
    artistManagementName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsCreateNestedManyWithoutArtistManagementInput
  }

  export type ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput = {
    artistManagementId?: number
    artistManagementName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsUncheckedCreateNestedManyWithoutArtistManagementInput
  }

  export type ArtistsManagementsCreateOrConnectWithoutArtistManagementCategoryInput = {
    where: ArtistsManagementsWhereUniqueInput
    create: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput>
  }

  export type ArtistsManagementsCreateManyArtistManagementCategoryInputEnvelope = {
    data: ArtistsManagementsCreateManyArtistManagementCategoryInput | ArtistsManagementsCreateManyArtistManagementCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementCategoryInput = {
    where: ArtistsManagementsWhereUniqueInput
    update: XOR<ArtistsManagementsUpdateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedUpdateWithoutArtistManagementCategoryInput>
    create: XOR<ArtistsManagementsCreateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedCreateWithoutArtistManagementCategoryInput>
  }

  export type ArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementCategoryInput = {
    where: ArtistsManagementsWhereUniqueInput
    data: XOR<ArtistsManagementsUpdateWithoutArtistManagementCategoryInput, ArtistsManagementsUncheckedUpdateWithoutArtistManagementCategoryInput>
  }

  export type ArtistsManagementsUpdateManyWithWhereWithoutArtistManagementCategoryInput = {
    where: ArtistsManagementsScalarWhereInput
    data: XOR<ArtistsManagementsUpdateManyMutationInput, ArtistsManagementsUncheckedUpdateManyWithoutArtistManagementCategoryInput>
  }

  export type ArtistsManagementsScalarWhereInput = {
    AND?: ArtistsManagementsScalarWhereInput | ArtistsManagementsScalarWhereInput[]
    OR?: ArtistsManagementsScalarWhereInput[]
    NOT?: ArtistsManagementsScalarWhereInput | ArtistsManagementsScalarWhereInput[]
    artistManagementId?: IntFilter<"ArtistsManagements"> | number
    artistManagementName?: StringFilter<"ArtistsManagements"> | string
    artistManagementCategoryId?: IntFilter<"ArtistsManagements"> | number
    createdAt?: DateTimeFilter<"ArtistsManagements"> | Date | string
    createdBy?: StringFilter<"ArtistsManagements"> | string
    isDeleted?: BoolFilter<"ArtistsManagements"> | boolean
  }

  export type ArtistsManagementsCategoriesCreateWithoutArtistsManagementsInput = {
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsCategoriesUncheckedCreateWithoutArtistsManagementsInput = {
    artistManagementCategoryId?: number
    artistManagementCategoryName: string
    artistManagementCategoryComment: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsCategoriesCreateOrConnectWithoutArtistsManagementsInput = {
    where: ArtistsManagementsCategoriesWhereUniqueInput
    create: XOR<ArtistsManagementsCategoriesCreateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedCreateWithoutArtistsManagementsInput>
  }

  export type ArtistsArtistsManagementsCreateWithoutArtistManagementInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artist: ArtistsCreateNestedOneWithoutArtistsManagementsInput
    performances?: PerformancesCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput = {
    artistArtistManagementId?: number
    artistId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    performances?: PerformancesUncheckedCreateNestedManyWithoutArtistManagementLinkInput
  }

  export type ArtistsArtistsManagementsCreateOrConnectWithoutArtistManagementInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    create: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput>
  }

  export type ArtistsArtistsManagementsCreateManyArtistManagementInputEnvelope = {
    data: ArtistsArtistsManagementsCreateManyArtistManagementInput | ArtistsArtistsManagementsCreateManyArtistManagementInput[]
    skipDuplicates?: boolean
  }

  export type ArtistsManagementsCategoriesUpsertWithoutArtistsManagementsInput = {
    update: XOR<ArtistsManagementsCategoriesUpdateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedUpdateWithoutArtistsManagementsInput>
    create: XOR<ArtistsManagementsCategoriesCreateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedCreateWithoutArtistsManagementsInput>
    where?: ArtistsManagementsCategoriesWhereInput
  }

  export type ArtistsManagementsCategoriesUpdateToOneWithWhereWithoutArtistsManagementsInput = {
    where?: ArtistsManagementsCategoriesWhereInput
    data: XOR<ArtistsManagementsCategoriesUpdateWithoutArtistsManagementsInput, ArtistsManagementsCategoriesUncheckedUpdateWithoutArtistsManagementsInput>
  }

  export type ArtistsManagementsCategoriesUpdateWithoutArtistsManagementsInput = {
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsCategoriesUncheckedUpdateWithoutArtistsManagementsInput = {
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    artistManagementCategoryName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryComment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsArtistsManagementsUpsertWithWhereUniqueWithoutArtistManagementInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    update: XOR<ArtistsArtistsManagementsUpdateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedUpdateWithoutArtistManagementInput>
    create: XOR<ArtistsArtistsManagementsCreateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedCreateWithoutArtistManagementInput>
  }

  export type ArtistsArtistsManagementsUpdateWithWhereUniqueWithoutArtistManagementInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    data: XOR<ArtistsArtistsManagementsUpdateWithoutArtistManagementInput, ArtistsArtistsManagementsUncheckedUpdateWithoutArtistManagementInput>
  }

  export type ArtistsArtistsManagementsUpdateManyWithWhereWithoutArtistManagementInput = {
    where: ArtistsArtistsManagementsScalarWhereInput
    data: XOR<ArtistsArtistsManagementsUpdateManyMutationInput, ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistManagementInput>
  }

  export type ArtistsCreateWithoutArtistsManagementsInput = {
    artistName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsUncheckedCreateWithoutArtistsManagementsInput = {
    artistId?: number
    artistName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsCreateOrConnectWithoutArtistsManagementsInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutArtistsManagementsInput, ArtistsUncheckedCreateWithoutArtistsManagementsInput>
  }

  export type ArtistsManagementsCreateWithoutArtistsArtistsManagementsInput = {
    artistManagementName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementCategory: ArtistsManagementsCategoriesCreateNestedOneWithoutArtistsManagementsInput
  }

  export type ArtistsManagementsUncheckedCreateWithoutArtistsArtistsManagementsInput = {
    artistManagementId?: number
    artistManagementName: string
    artistManagementCategoryId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsCreateOrConnectWithoutArtistsArtistsManagementsInput = {
    where: ArtistsManagementsWhereUniqueInput
    create: XOR<ArtistsManagementsCreateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedCreateWithoutArtistsArtistsManagementsInput>
  }

  export type PerformancesCreateWithoutArtistManagementLinkInput = {
    performanceName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    show: ShowsCreateNestedOneWithoutPerformancesInput
    edition: EditionsCreateNestedOneWithoutPerformancesInput
    contract?: ContractsCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesUncheckedCreateWithoutArtistManagementLinkInput = {
    performanceId?: number
    performanceName: string
    performanceShowId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    contract?: ContractsUncheckedCreateNestedOneWithoutPerformanceInput
  }

  export type PerformancesCreateOrConnectWithoutArtistManagementLinkInput = {
    where: PerformancesWhereUniqueInput
    create: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput>
  }

  export type PerformancesCreateManyArtistManagementLinkInputEnvelope = {
    data: PerformancesCreateManyArtistManagementLinkInput | PerformancesCreateManyArtistManagementLinkInput[]
    skipDuplicates?: boolean
  }

  export type ArtistsUpsertWithoutArtistsManagementsInput = {
    update: XOR<ArtistsUpdateWithoutArtistsManagementsInput, ArtistsUncheckedUpdateWithoutArtistsManagementsInput>
    create: XOR<ArtistsCreateWithoutArtistsManagementsInput, ArtistsUncheckedCreateWithoutArtistsManagementsInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutArtistsManagementsInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutArtistsManagementsInput, ArtistsUncheckedUpdateWithoutArtistsManagementsInput>
  }

  export type ArtistsUpdateWithoutArtistsManagementsInput = {
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsUncheckedUpdateWithoutArtistsManagementsInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    artistName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsUpsertWithoutArtistsArtistsManagementsInput = {
    update: XOR<ArtistsManagementsUpdateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedUpdateWithoutArtistsArtistsManagementsInput>
    create: XOR<ArtistsManagementsCreateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedCreateWithoutArtistsArtistsManagementsInput>
    where?: ArtistsManagementsWhereInput
  }

  export type ArtistsManagementsUpdateToOneWithWhereWithoutArtistsArtistsManagementsInput = {
    where?: ArtistsManagementsWhereInput
    data: XOR<ArtistsManagementsUpdateWithoutArtistsArtistsManagementsInput, ArtistsManagementsUncheckedUpdateWithoutArtistsArtistsManagementsInput>
  }

  export type ArtistsManagementsUpdateWithoutArtistsArtistsManagementsInput = {
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementCategory?: ArtistsManagementsCategoriesUpdateOneRequiredWithoutArtistsManagementsNestedInput
  }

  export type ArtistsManagementsUncheckedUpdateWithoutArtistsArtistsManagementsInput = {
    artistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementName?: StringFieldUpdateOperationsInput | string
    artistManagementCategoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesUpsertWithWhereUniqueWithoutArtistManagementLinkInput = {
    where: PerformancesWhereUniqueInput
    update: XOR<PerformancesUpdateWithoutArtistManagementLinkInput, PerformancesUncheckedUpdateWithoutArtistManagementLinkInput>
    create: XOR<PerformancesCreateWithoutArtistManagementLinkInput, PerformancesUncheckedCreateWithoutArtistManagementLinkInput>
  }

  export type PerformancesUpdateWithWhereUniqueWithoutArtistManagementLinkInput = {
    where: PerformancesWhereUniqueInput
    data: XOR<PerformancesUpdateWithoutArtistManagementLinkInput, PerformancesUncheckedUpdateWithoutArtistManagementLinkInput>
  }

  export type PerformancesUpdateManyWithWhereWithoutArtistManagementLinkInput = {
    where: PerformancesScalarWhereInput
    data: XOR<PerformancesUpdateManyMutationInput, PerformancesUncheckedUpdateManyWithoutArtistManagementLinkInput>
  }

  export type ArtistsArtistsManagementsCreateWithoutPerformancesInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artist: ArtistsCreateNestedOneWithoutArtistsManagementsInput
    artistManagement: ArtistsManagementsCreateNestedOneWithoutArtistsArtistsManagementsInput
  }

  export type ArtistsArtistsManagementsUncheckedCreateWithoutPerformancesInput = {
    artistArtistManagementId?: number
    artistId: number
    artistManagementId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsArtistsManagementsCreateOrConnectWithoutPerformancesInput = {
    where: ArtistsArtistsManagementsWhereUniqueInput
    create: XOR<ArtistsArtistsManagementsCreateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedCreateWithoutPerformancesInput>
  }

  export type ShowsCreateWithoutPerformancesInput = {
    showName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    edition: EditionsCreateNestedOneWithoutShowsInput
    showStatus: ShowsStatusesCreateNestedOneWithoutShowsInput
  }

  export type ShowsUncheckedCreateWithoutPerformancesInput = {
    showId?: number
    showName: string
    editionId: number
    showStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsCreateOrConnectWithoutPerformancesInput = {
    where: ShowsWhereUniqueInput
    create: XOR<ShowsCreateWithoutPerformancesInput, ShowsUncheckedCreateWithoutPerformancesInput>
  }

  export type EditionsCreateWithoutPerformancesInput = {
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    editionStatus: EditionsStatusesCreateNestedOneWithoutEditionsInput
    shows?: ShowsCreateNestedManyWithoutEditionInput
  }

  export type EditionsUncheckedCreateWithoutPerformancesInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    editionStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    shows?: ShowsUncheckedCreateNestedManyWithoutEditionInput
  }

  export type EditionsCreateOrConnectWithoutPerformancesInput = {
    where: EditionsWhereUniqueInput
    create: XOR<EditionsCreateWithoutPerformancesInput, EditionsUncheckedCreateWithoutPerformancesInput>
  }

  export type ContractsCreateWithoutPerformanceInput = {
    contractName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ContractsUncheckedCreateWithoutPerformanceInput = {
    contractId?: number
    contractName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ContractsCreateOrConnectWithoutPerformanceInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
  }

  export type ArtistsArtistsManagementsUpsertWithoutPerformancesInput = {
    update: XOR<ArtistsArtistsManagementsUpdateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedUpdateWithoutPerformancesInput>
    create: XOR<ArtistsArtistsManagementsCreateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedCreateWithoutPerformancesInput>
    where?: ArtistsArtistsManagementsWhereInput
  }

  export type ArtistsArtistsManagementsUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: ArtistsArtistsManagementsWhereInput
    data: XOR<ArtistsArtistsManagementsUpdateWithoutPerformancesInput, ArtistsArtistsManagementsUncheckedUpdateWithoutPerformancesInput>
  }

  export type ArtistsArtistsManagementsUpdateWithoutPerformancesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artist?: ArtistsUpdateOneRequiredWithoutArtistsManagementsNestedInput
    artistManagement?: ArtistsManagementsUpdateOneRequiredWithoutArtistsArtistsManagementsNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateWithoutPerformancesInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    artistManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsUpsertWithoutPerformancesInput = {
    update: XOR<ShowsUpdateWithoutPerformancesInput, ShowsUncheckedUpdateWithoutPerformancesInput>
    create: XOR<ShowsCreateWithoutPerformancesInput, ShowsUncheckedCreateWithoutPerformancesInput>
    where?: ShowsWhereInput
  }

  export type ShowsUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: ShowsWhereInput
    data: XOR<ShowsUpdateWithoutPerformancesInput, ShowsUncheckedUpdateWithoutPerformancesInput>
  }

  export type ShowsUpdateWithoutPerformancesInput = {
    showName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    edition?: EditionsUpdateOneRequiredWithoutShowsNestedInput
    showStatus?: ShowsStatusesUpdateOneRequiredWithoutShowsNestedInput
  }

  export type ShowsUncheckedUpdateWithoutPerformancesInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    showStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsUpsertWithoutPerformancesInput = {
    update: XOR<EditionsUpdateWithoutPerformancesInput, EditionsUncheckedUpdateWithoutPerformancesInput>
    create: XOR<EditionsCreateWithoutPerformancesInput, EditionsUncheckedCreateWithoutPerformancesInput>
    where?: EditionsWhereInput
  }

  export type EditionsUpdateToOneWithWhereWithoutPerformancesInput = {
    where?: EditionsWhereInput
    data: XOR<EditionsUpdateWithoutPerformancesInput, EditionsUncheckedUpdateWithoutPerformancesInput>
  }

  export type EditionsUpdateWithoutPerformancesInput = {
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    editionStatus?: EditionsStatusesUpdateOneRequiredWithoutEditionsNestedInput
    shows?: ShowsUpdateManyWithoutEditionNestedInput
  }

  export type EditionsUncheckedUpdateWithoutPerformancesInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    editionStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type ContractsUpsertWithoutPerformanceInput = {
    update: XOR<ContractsUpdateWithoutPerformanceInput, ContractsUncheckedUpdateWithoutPerformanceInput>
    create: XOR<ContractsCreateWithoutPerformanceInput, ContractsUncheckedCreateWithoutPerformanceInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutPerformanceInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutPerformanceInput, ContractsUncheckedUpdateWithoutPerformanceInput>
  }

  export type ContractsUpdateWithoutPerformanceInput = {
    contractName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContractsUncheckedUpdateWithoutPerformanceInput = {
    contractId?: IntFieldUpdateOperationsInput | number
    contractName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesCreateWithoutContractInput = {
    performanceName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    artistManagementLink: ArtistsArtistsManagementsCreateNestedOneWithoutPerformancesInput
    show: ShowsCreateNestedOneWithoutPerformancesInput
    edition: EditionsCreateNestedOneWithoutPerformancesInput
  }

  export type PerformancesUncheckedCreateWithoutContractInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type PerformancesCreateOrConnectWithoutContractInput = {
    where: PerformancesWhereUniqueInput
    create: XOR<PerformancesCreateWithoutContractInput, PerformancesUncheckedCreateWithoutContractInput>
  }

  export type PerformancesUpsertWithoutContractInput = {
    update: XOR<PerformancesUpdateWithoutContractInput, PerformancesUncheckedUpdateWithoutContractInput>
    create: XOR<PerformancesCreateWithoutContractInput, PerformancesUncheckedCreateWithoutContractInput>
    where?: PerformancesWhereInput
  }

  export type PerformancesUpdateToOneWithWhereWithoutContractInput = {
    where?: PerformancesWhereInput
    data: XOR<PerformancesUpdateWithoutContractInput, PerformancesUncheckedUpdateWithoutContractInput>
  }

  export type PerformancesUpdateWithoutContractInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementLink?: ArtistsArtistsManagementsUpdateOneRequiredWithoutPerformancesNestedInput
    show?: ShowsUpdateOneRequiredWithoutPerformancesNestedInput
    edition?: EditionsUpdateOneRequiredWithoutPerformancesNestedInput
  }

  export type PerformancesUncheckedUpdateWithoutContractInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    performanceShowId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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
    adGroup: AdGroupsCreateNestedOneWithoutUserGroupsInput
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
    userAuthId?: number
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
    userAuthId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersCreateWithoutAuthInput = {
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    userGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAuthInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
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
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    userGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAuthInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutLanguageInput = {
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsCreateNestedManyWithoutUserInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutLanguageInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    userGroups?: UsersAdGroupsUncheckedCreateNestedManyWithoutUserInput
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
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
    userFirstName?: StringFilter<"Users"> | string
    userLastName?: StringFilter<"Users"> | string
    userCode?: StringFilter<"Users"> | string
    languageId?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    createdBy?: StringFilter<"Users"> | string
    isDeleted?: BoolFilter<"Users"> | boolean
  }

  export type UsersAdGroupsCreateWithoutAdGroupInput = {
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    user: UsersCreateNestedOneWithoutUserGroupsInput
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

  export type UsersCreateWithoutUserGroupsInput = {
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    language: LanguagesCreateNestedOneWithoutUsersInput
    auth?: UsersAuthCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserGroupsInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    languageId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
    auth?: UsersAuthUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserGroupsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserGroupsInput, UsersUncheckedCreateWithoutUserGroupsInput>
  }

  export type AdGroupsCreateWithoutUserGroupsInput = {
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type AdGroupsUncheckedCreateWithoutUserGroupsInput = {
    adGroupId?: number
    adGroupName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type AdGroupsCreateOrConnectWithoutUserGroupsInput = {
    where: AdGroupsWhereUniqueInput
    create: XOR<AdGroupsCreateWithoutUserGroupsInput, AdGroupsUncheckedCreateWithoutUserGroupsInput>
  }

  export type UsersUpsertWithoutUserGroupsInput = {
    update: XOR<UsersUpdateWithoutUserGroupsInput, UsersUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<UsersCreateWithoutUserGroupsInput, UsersUncheckedCreateWithoutUserGroupsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserGroupsInput, UsersUncheckedUpdateWithoutUserGroupsInput>
  }

  export type UsersUpdateWithoutUserGroupsInput = {
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    language?: LanguagesUpdateOneRequiredWithoutUsersNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserGroupsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AdGroupsUpsertWithoutUserGroupsInput = {
    update: XOR<AdGroupsUpdateWithoutUserGroupsInput, AdGroupsUncheckedUpdateWithoutUserGroupsInput>
    create: XOR<AdGroupsCreateWithoutUserGroupsInput, AdGroupsUncheckedCreateWithoutUserGroupsInput>
    where?: AdGroupsWhereInput
  }

  export type AdGroupsUpdateToOneWithWhereWithoutUserGroupsInput = {
    where?: AdGroupsWhereInput
    data: XOR<AdGroupsUpdateWithoutUserGroupsInput, AdGroupsUncheckedUpdateWithoutUserGroupsInput>
  }

  export type AdGroupsUpdateWithoutUserGroupsInput = {
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdGroupsUncheckedUpdateWithoutUserGroupsInput = {
    adGroupId?: IntFieldUpdateOperationsInput | number
    adGroupName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsCreateManyEditionInput = {
    showId?: number
    showName: string
    showStatusId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type PerformancesCreateManyEditionInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    performanceShowId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsUpdateWithoutEditionInput = {
    showName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    showStatus?: ShowsStatusesUpdateOneRequiredWithoutShowsNestedInput
    performances?: PerformancesUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateWithoutEditionInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    showStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateManyWithoutEditionInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    showStatusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesUpdateWithoutEditionInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementLink?: ArtistsArtistsManagementsUpdateOneRequiredWithoutPerformancesNestedInput
    show?: ShowsUpdateOneRequiredWithoutPerformancesNestedInput
    contract?: ContractsUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateWithoutEditionInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    performanceShowId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    contract?: ContractsUncheckedUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateManyWithoutEditionInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    performanceShowId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EditionsCreateManyEditionStatusInput = {
    editionId?: number
    editionName: string
    editionYear: number
    isCurrentedition?: boolean
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type EditionsUpdateWithoutEditionStatusInput = {
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUpdateManyWithoutEditionNestedInput
    performances?: PerformancesUpdateManyWithoutEditionNestedInput
  }

  export type EditionsUncheckedUpdateWithoutEditionStatusInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    shows?: ShowsUncheckedUpdateManyWithoutEditionNestedInput
    performances?: PerformancesUncheckedUpdateManyWithoutEditionNestedInput
  }

  export type EditionsUncheckedUpdateManyWithoutEditionStatusInput = {
    editionId?: IntFieldUpdateOperationsInput | number
    editionName?: StringFieldUpdateOperationsInput | string
    editionYear?: IntFieldUpdateOperationsInput | number
    isCurrentedition?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesCreateManyShowInput = {
    performanceId?: number
    performanceName: string
    performanceArtistArtistManagementId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type PerformancesUpdateWithoutShowInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagementLink?: ArtistsArtistsManagementsUpdateOneRequiredWithoutPerformancesNestedInput
    edition?: EditionsUpdateOneRequiredWithoutPerformancesNestedInput
    contract?: ContractsUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateWithoutShowInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    contract?: ContractsUncheckedUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateManyWithoutShowInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceArtistArtistManagementId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsArtistsManagementsCreateManyArtistInput = {
    artistArtistManagementId?: number
    artistManagementId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsArtistsManagementsUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistManagement?: ArtistsManagementsUpdateOneRequiredWithoutArtistsArtistsManagementsNestedInput
    performances?: PerformancesUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateWithoutArtistInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShowsCreateManyShowStatusInput = {
    showId?: number
    showName: string
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ShowsUpdateWithoutShowStatusInput = {
    showName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    edition?: EditionsUpdateOneRequiredWithoutShowsNestedInput
    performances?: PerformancesUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateWithoutShowStatusInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowsUncheckedUpdateManyWithoutShowStatusInput = {
    showId?: IntFieldUpdateOperationsInput | number
    showName?: StringFieldUpdateOperationsInput | string
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsManagementsCreateManyArtistManagementCategoryInput = {
    artistManagementId?: number
    artistManagementName: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsManagementsUpdateWithoutArtistManagementCategoryInput = {
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsUpdateManyWithoutArtistManagementNestedInput
  }

  export type ArtistsManagementsUncheckedUpdateWithoutArtistManagementCategoryInput = {
    artistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artistsArtistsManagements?: ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistManagementNestedInput
  }

  export type ArtistsManagementsUncheckedUpdateManyWithoutArtistManagementCategoryInput = {
    artistManagementId?: IntFieldUpdateOperationsInput | number
    artistManagementName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtistsArtistsManagementsCreateManyArtistManagementInput = {
    artistArtistManagementId?: number
    artistId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type ArtistsArtistsManagementsUpdateWithoutArtistManagementInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    artist?: ArtistsUpdateOneRequiredWithoutArtistsManagementsNestedInput
    performances?: PerformancesUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateWithoutArtistManagementInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    performances?: PerformancesUncheckedUpdateManyWithoutArtistManagementLinkNestedInput
  }

  export type ArtistsArtistsManagementsUncheckedUpdateManyWithoutArtistManagementInput = {
    artistArtistManagementId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PerformancesCreateManyArtistManagementLinkInput = {
    performanceId?: number
    performanceName: string
    performanceShowId: number
    editionId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type PerformancesUpdateWithoutArtistManagementLinkInput = {
    performanceName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    show?: ShowsUpdateOneRequiredWithoutPerformancesNestedInput
    edition?: EditionsUpdateOneRequiredWithoutPerformancesNestedInput
    contract?: ContractsUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateWithoutArtistManagementLinkInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceShowId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    contract?: ContractsUncheckedUpdateOneWithoutPerformanceNestedInput
  }

  export type PerformancesUncheckedUpdateManyWithoutArtistManagementLinkInput = {
    performanceId?: IntFieldUpdateOperationsInput | number
    performanceName?: StringFieldUpdateOperationsInput | string
    performanceShowId?: IntFieldUpdateOperationsInput | number
    editionId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersAdGroupsCreateManyUserInput = {
    userAdGroupId?: number
    adGroupId: number
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersAdGroupsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    adGroup?: AdGroupsUpdateOneRequiredWithoutUserGroupsNestedInput
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

  export type UsersCreateManyLanguageInput = {
    userId?: number
    userFirstName: string
    userLastName: string
    userCode: string
    createdAt?: Date | string
    createdBy?: string
    isDeleted?: boolean
  }

  export type UsersUpdateWithoutLanguageInput = {
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutLanguageInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    userGroups?: UsersAdGroupsUncheckedUpdateManyWithoutUserNestedInput
    auth?: UsersAuthUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutLanguageInput = {
    userId?: IntFieldUpdateOperationsInput | number
    userFirstName?: StringFieldUpdateOperationsInput | string
    userLastName?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
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
    user?: UsersUpdateOneRequiredWithoutUserGroupsNestedInput
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