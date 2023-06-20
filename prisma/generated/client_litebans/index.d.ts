
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model litebans_allow
 * 
 */
export type litebans_allow = {
  id: bigint
  uuid: Buffer
  type: number
}

/**
 * Model litebans_bans
 * 
 */
export type litebans_bans = {
  id: bigint
  uuid: string | null
  ip: string | null
  reason: string | null
  banned_by_uuid: string
  banned_by_name: string | null
  removed_by_uuid: string | null
  removed_by_name: string | null
  removed_by_reason: string | null
  removed_by_date: Date | null
  time: bigint
  until: bigint
  template: number
  server_scope: string | null
  server_origin: string | null
  silent: boolean
  ipban: boolean
  ipban_wildcard: boolean
  active: boolean
}

/**
 * Model litebans_config
 * 
 */
export type litebans_config = {
  id: bigint
  version: string
  build: string
  timezone: string
}

/**
 * Model litebans_history
 * 
 */
export type litebans_history = {
  id: bigint
  date: Date | null
  name: string | null
  uuid: string | null
  ip: string | null
}

/**
 * Model litebans_kicks
 * 
 */
export type litebans_kicks = {
  id: bigint
  uuid: string | null
  ip: string | null
  reason: string | null
  banned_by_uuid: string
  banned_by_name: string | null
  time: bigint
  until: bigint
  template: number
  server_scope: string | null
  server_origin: string | null
  silent: boolean
  ipban: boolean
  ipban_wildcard: boolean
  active: boolean
}

/**
 * Model litebans_mutes
 * 
 */
export type litebans_mutes = {
  id: bigint
  uuid: string | null
  ip: string | null
  reason: string | null
  banned_by_uuid: string
  banned_by_name: string | null
  removed_by_uuid: string | null
  removed_by_name: string | null
  removed_by_reason: string | null
  removed_by_date: Date | null
  time: bigint
  until: bigint
  template: number
  server_scope: string | null
  server_origin: string | null
  silent: boolean
  ipban: boolean
  ipban_wildcard: boolean
  active: boolean
}

/**
 * Model litebans_servers
 * 
 */
export type litebans_servers = {
  id: bigint
  name: string
  uuid: string
  date: Date | null
}

/**
 * Model litebans_sync
 * 
 */
export type litebans_sync = {
  id: bigint
  info: number
  msg: string
  time: Date | null
}

/**
 * Model litebans_warnings
 * 
 */
export type litebans_warnings = {
  id: bigint
  uuid: string | null
  ip: string | null
  reason: string | null
  banned_by_uuid: string
  banned_by_name: string | null
  removed_by_uuid: string | null
  removed_by_name: string | null
  removed_by_reason: string | null
  removed_by_date: Date | null
  time: bigint
  until: bigint
  template: number
  server_scope: string | null
  server_origin: string | null
  silent: boolean
  ipban: boolean
  ipban_wildcard: boolean
  active: boolean
  warned: boolean
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Litebans_allows
 * const litebans_allows = await prisma.litebans_allow.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Litebans_allows
   * const litebans_allows = await prisma.litebans_allow.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.litebans_allow`: Exposes CRUD operations for the **litebans_allow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_allows
    * const litebans_allows = await prisma.litebans_allow.findMany()
    * ```
    */
  get litebans_allow(): Prisma.litebans_allowDelegate<GlobalReject>;

  /**
   * `prisma.litebans_bans`: Exposes CRUD operations for the **litebans_bans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_bans
    * const litebans_bans = await prisma.litebans_bans.findMany()
    * ```
    */
  get litebans_bans(): Prisma.litebans_bansDelegate<GlobalReject>;

  /**
   * `prisma.litebans_config`: Exposes CRUD operations for the **litebans_config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_configs
    * const litebans_configs = await prisma.litebans_config.findMany()
    * ```
    */
  get litebans_config(): Prisma.litebans_configDelegate<GlobalReject>;

  /**
   * `prisma.litebans_history`: Exposes CRUD operations for the **litebans_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_histories
    * const litebans_histories = await prisma.litebans_history.findMany()
    * ```
    */
  get litebans_history(): Prisma.litebans_historyDelegate<GlobalReject>;

  /**
   * `prisma.litebans_kicks`: Exposes CRUD operations for the **litebans_kicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_kicks
    * const litebans_kicks = await prisma.litebans_kicks.findMany()
    * ```
    */
  get litebans_kicks(): Prisma.litebans_kicksDelegate<GlobalReject>;

  /**
   * `prisma.litebans_mutes`: Exposes CRUD operations for the **litebans_mutes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_mutes
    * const litebans_mutes = await prisma.litebans_mutes.findMany()
    * ```
    */
  get litebans_mutes(): Prisma.litebans_mutesDelegate<GlobalReject>;

  /**
   * `prisma.litebans_servers`: Exposes CRUD operations for the **litebans_servers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_servers
    * const litebans_servers = await prisma.litebans_servers.findMany()
    * ```
    */
  get litebans_servers(): Prisma.litebans_serversDelegate<GlobalReject>;

  /**
   * `prisma.litebans_sync`: Exposes CRUD operations for the **litebans_sync** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_syncs
    * const litebans_syncs = await prisma.litebans_sync.findMany()
    * ```
    */
  get litebans_sync(): Prisma.litebans_syncDelegate<GlobalReject>;

  /**
   * `prisma.litebans_warnings`: Exposes CRUD operations for the **litebans_warnings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litebans_warnings
    * const litebans_warnings = await prisma.litebans_warnings.findMany()
    * ```
    */
  get litebans_warnings(): Prisma.litebans_warningsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    litebans_allow: 'litebans_allow',
    litebans_bans: 'litebans_bans',
    litebans_config: 'litebans_config',
    litebans_history: 'litebans_history',
    litebans_kicks: 'litebans_kicks',
    litebans_mutes: 'litebans_mutes',
    litebans_servers: 'litebans_servers',
    litebans_sync: 'litebans_sync',
    litebans_warnings: 'litebans_warnings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model litebans_allow
   */


  export type AggregateLitebans_allow = {
    _count: Litebans_allowCountAggregateOutputType | null
    _avg: Litebans_allowAvgAggregateOutputType | null
    _sum: Litebans_allowSumAggregateOutputType | null
    _min: Litebans_allowMinAggregateOutputType | null
    _max: Litebans_allowMaxAggregateOutputType | null
  }

  export type Litebans_allowAvgAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type Litebans_allowSumAggregateOutputType = {
    id: bigint | null
    type: number | null
  }

  export type Litebans_allowMinAggregateOutputType = {
    id: bigint | null
    uuid: Buffer | null
    type: number | null
  }

  export type Litebans_allowMaxAggregateOutputType = {
    id: bigint | null
    uuid: Buffer | null
    type: number | null
  }

  export type Litebans_allowCountAggregateOutputType = {
    id: number
    uuid: number
    type: number
    _all: number
  }


  export type Litebans_allowAvgAggregateInputType = {
    id?: true
    type?: true
  }

  export type Litebans_allowSumAggregateInputType = {
    id?: true
    type?: true
  }

  export type Litebans_allowMinAggregateInputType = {
    id?: true
    uuid?: true
    type?: true
  }

  export type Litebans_allowMaxAggregateInputType = {
    id?: true
    uuid?: true
    type?: true
  }

  export type Litebans_allowCountAggregateInputType = {
    id?: true
    uuid?: true
    type?: true
    _all?: true
  }

  export type Litebans_allowAggregateArgs = {
    /**
     * Filter which litebans_allow to aggregate.
     */
    where?: litebans_allowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_allows to fetch.
     */
    orderBy?: Enumerable<litebans_allowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_allowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_allows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_allows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_allows
    **/
    _count?: true | Litebans_allowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_allowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_allowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_allowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_allowMaxAggregateInputType
  }

  export type GetLitebans_allowAggregateType<T extends Litebans_allowAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_allow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_allow[P]>
      : GetScalarType<T[P], AggregateLitebans_allow[P]>
  }




  export type Litebans_allowGroupByArgs = {
    where?: litebans_allowWhereInput
    orderBy?: Enumerable<litebans_allowOrderByWithAggregationInput>
    by: Litebans_allowScalarFieldEnum[]
    having?: litebans_allowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_allowCountAggregateInputType | true
    _avg?: Litebans_allowAvgAggregateInputType
    _sum?: Litebans_allowSumAggregateInputType
    _min?: Litebans_allowMinAggregateInputType
    _max?: Litebans_allowMaxAggregateInputType
  }


  export type Litebans_allowGroupByOutputType = {
    id: bigint
    uuid: Buffer
    type: number
    _count: Litebans_allowCountAggregateOutputType | null
    _avg: Litebans_allowAvgAggregateOutputType | null
    _sum: Litebans_allowSumAggregateOutputType | null
    _min: Litebans_allowMinAggregateOutputType | null
    _max: Litebans_allowMaxAggregateOutputType | null
  }

  type GetLitebans_allowGroupByPayload<T extends Litebans_allowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_allowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_allowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_allowGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_allowGroupByOutputType[P]>
        }
      >
    >


  export type litebans_allowSelect = {
    id?: boolean
    uuid?: boolean
    type?: boolean
  }


  export type litebans_allowGetPayload<S extends boolean | null | undefined | litebans_allowArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_allow :
    S extends undefined ? never :
    S extends { include: any } & (litebans_allowArgs | litebans_allowFindManyArgs)
    ? litebans_allow 
    : S extends { select: any } & (litebans_allowArgs | litebans_allowFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_allow ? litebans_allow[P] : never
  } 
      : litebans_allow


  type litebans_allowCountArgs = 
    Omit<litebans_allowFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_allowCountAggregateInputType | true
    }

  export interface litebans_allowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_allow that matches the filter.
     * @param {litebans_allowFindUniqueArgs} args - Arguments to find a Litebans_allow
     * @example
     * // Get one Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_allowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_allowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_allow'> extends True ? Prisma__litebans_allowClient<litebans_allowGetPayload<T>> : Prisma__litebans_allowClient<litebans_allowGetPayload<T> | null, null>

    /**
     * Find one Litebans_allow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_allowFindUniqueOrThrowArgs} args - Arguments to find a Litebans_allow
     * @example
     * // Get one Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_allowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_allowFindUniqueOrThrowArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Find the first Litebans_allow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_allowFindFirstArgs} args - Arguments to find a Litebans_allow
     * @example
     * // Get one Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_allowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_allowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_allow'> extends True ? Prisma__litebans_allowClient<litebans_allowGetPayload<T>> : Prisma__litebans_allowClient<litebans_allowGetPayload<T> | null, null>

    /**
     * Find the first Litebans_allow that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_allowFindFirstOrThrowArgs} args - Arguments to find a Litebans_allow
     * @example
     * // Get one Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_allowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_allowFindFirstOrThrowArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Find zero or more Litebans_allows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_allowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_allows
     * const litebans_allows = await prisma.litebans_allow.findMany()
     * 
     * // Get first 10 Litebans_allows
     * const litebans_allows = await prisma.litebans_allow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_allowWithIdOnly = await prisma.litebans_allow.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_allowFindManyArgs>(
      args?: SelectSubset<T, litebans_allowFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_allowGetPayload<T>>>

    /**
     * Create a Litebans_allow.
     * @param {litebans_allowCreateArgs} args - Arguments to create a Litebans_allow.
     * @example
     * // Create one Litebans_allow
     * const Litebans_allow = await prisma.litebans_allow.create({
     *   data: {
     *     // ... data to create a Litebans_allow
     *   }
     * })
     * 
    **/
    create<T extends litebans_allowCreateArgs>(
      args: SelectSubset<T, litebans_allowCreateArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Create many Litebans_allows.
     *     @param {litebans_allowCreateManyArgs} args - Arguments to create many Litebans_allows.
     *     @example
     *     // Create many Litebans_allows
     *     const litebans_allow = await prisma.litebans_allow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_allowCreateManyArgs>(
      args?: SelectSubset<T, litebans_allowCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_allow.
     * @param {litebans_allowDeleteArgs} args - Arguments to delete one Litebans_allow.
     * @example
     * // Delete one Litebans_allow
     * const Litebans_allow = await prisma.litebans_allow.delete({
     *   where: {
     *     // ... filter to delete one Litebans_allow
     *   }
     * })
     * 
    **/
    delete<T extends litebans_allowDeleteArgs>(
      args: SelectSubset<T, litebans_allowDeleteArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Update one Litebans_allow.
     * @param {litebans_allowUpdateArgs} args - Arguments to update one Litebans_allow.
     * @example
     * // Update one Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_allowUpdateArgs>(
      args: SelectSubset<T, litebans_allowUpdateArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Delete zero or more Litebans_allows.
     * @param {litebans_allowDeleteManyArgs} args - Arguments to filter Litebans_allows to delete.
     * @example
     * // Delete a few Litebans_allows
     * const { count } = await prisma.litebans_allow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_allowDeleteManyArgs>(
      args?: SelectSubset<T, litebans_allowDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_allows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_allowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_allows
     * const litebans_allow = await prisma.litebans_allow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_allowUpdateManyArgs>(
      args: SelectSubset<T, litebans_allowUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_allow.
     * @param {litebans_allowUpsertArgs} args - Arguments to update or create a Litebans_allow.
     * @example
     * // Update or create a Litebans_allow
     * const litebans_allow = await prisma.litebans_allow.upsert({
     *   create: {
     *     // ... data to create a Litebans_allow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_allow we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_allowUpsertArgs>(
      args: SelectSubset<T, litebans_allowUpsertArgs>
    ): Prisma__litebans_allowClient<litebans_allowGetPayload<T>>

    /**
     * Count the number of Litebans_allows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_allowCountArgs} args - Arguments to filter Litebans_allows to count.
     * @example
     * // Count the number of Litebans_allows
     * const count = await prisma.litebans_allow.count({
     *   where: {
     *     // ... the filter for the Litebans_allows we want to count
     *   }
     * })
    **/
    count<T extends litebans_allowCountArgs>(
      args?: Subset<T, litebans_allowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_allowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_allow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_allowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_allowAggregateArgs>(args: Subset<T, Litebans_allowAggregateArgs>): Prisma.PrismaPromise<GetLitebans_allowAggregateType<T>>

    /**
     * Group by Litebans_allow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_allowGroupByArgs} args - Group by arguments.
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
      T extends Litebans_allowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_allowGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_allowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_allowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_allowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_allow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_allowClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_allow base type for findUnique actions
   */
  export type litebans_allowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter, which litebans_allow to fetch.
     */
    where: litebans_allowWhereUniqueInput
  }

  /**
   * litebans_allow findUnique
   */
  export interface litebans_allowFindUniqueArgs extends litebans_allowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_allow findUniqueOrThrow
   */
  export type litebans_allowFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter, which litebans_allow to fetch.
     */
    where: litebans_allowWhereUniqueInput
  }


  /**
   * litebans_allow base type for findFirst actions
   */
  export type litebans_allowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter, which litebans_allow to fetch.
     */
    where?: litebans_allowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_allows to fetch.
     */
    orderBy?: Enumerable<litebans_allowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_allows.
     */
    cursor?: litebans_allowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_allows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_allows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_allows.
     */
    distinct?: Enumerable<Litebans_allowScalarFieldEnum>
  }

  /**
   * litebans_allow findFirst
   */
  export interface litebans_allowFindFirstArgs extends litebans_allowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_allow findFirstOrThrow
   */
  export type litebans_allowFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter, which litebans_allow to fetch.
     */
    where?: litebans_allowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_allows to fetch.
     */
    orderBy?: Enumerable<litebans_allowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_allows.
     */
    cursor?: litebans_allowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_allows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_allows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_allows.
     */
    distinct?: Enumerable<Litebans_allowScalarFieldEnum>
  }


  /**
   * litebans_allow findMany
   */
  export type litebans_allowFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter, which litebans_allows to fetch.
     */
    where?: litebans_allowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_allows to fetch.
     */
    orderBy?: Enumerable<litebans_allowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_allows.
     */
    cursor?: litebans_allowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_allows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_allows.
     */
    skip?: number
    distinct?: Enumerable<Litebans_allowScalarFieldEnum>
  }


  /**
   * litebans_allow create
   */
  export type litebans_allowCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * The data needed to create a litebans_allow.
     */
    data: XOR<litebans_allowCreateInput, litebans_allowUncheckedCreateInput>
  }


  /**
   * litebans_allow createMany
   */
  export type litebans_allowCreateManyArgs = {
    /**
     * The data used to create many litebans_allows.
     */
    data: Enumerable<litebans_allowCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_allow update
   */
  export type litebans_allowUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * The data needed to update a litebans_allow.
     */
    data: XOR<litebans_allowUpdateInput, litebans_allowUncheckedUpdateInput>
    /**
     * Choose, which litebans_allow to update.
     */
    where: litebans_allowWhereUniqueInput
  }


  /**
   * litebans_allow updateMany
   */
  export type litebans_allowUpdateManyArgs = {
    /**
     * The data used to update litebans_allows.
     */
    data: XOR<litebans_allowUpdateManyMutationInput, litebans_allowUncheckedUpdateManyInput>
    /**
     * Filter which litebans_allows to update
     */
    where?: litebans_allowWhereInput
  }


  /**
   * litebans_allow upsert
   */
  export type litebans_allowUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * The filter to search for the litebans_allow to update in case it exists.
     */
    where: litebans_allowWhereUniqueInput
    /**
     * In case the litebans_allow found by the `where` argument doesn't exist, create a new litebans_allow with this data.
     */
    create: XOR<litebans_allowCreateInput, litebans_allowUncheckedCreateInput>
    /**
     * In case the litebans_allow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_allowUpdateInput, litebans_allowUncheckedUpdateInput>
  }


  /**
   * litebans_allow delete
   */
  export type litebans_allowDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
    /**
     * Filter which litebans_allow to delete.
     */
    where: litebans_allowWhereUniqueInput
  }


  /**
   * litebans_allow deleteMany
   */
  export type litebans_allowDeleteManyArgs = {
    /**
     * Filter which litebans_allows to delete
     */
    where?: litebans_allowWhereInput
  }


  /**
   * litebans_allow without action
   */
  export type litebans_allowArgs = {
    /**
     * Select specific fields to fetch from the litebans_allow
     */
    select?: litebans_allowSelect | null
  }



  /**
   * Model litebans_bans
   */


  export type AggregateLitebans_bans = {
    _count: Litebans_bansCountAggregateOutputType | null
    _avg: Litebans_bansAvgAggregateOutputType | null
    _sum: Litebans_bansSumAggregateOutputType | null
    _min: Litebans_bansMinAggregateOutputType | null
    _max: Litebans_bansMaxAggregateOutputType | null
  }

  export type Litebans_bansAvgAggregateOutputType = {
    id: number | null
    time: number | null
    until: number | null
    template: number | null
  }

  export type Litebans_bansSumAggregateOutputType = {
    id: bigint | null
    time: bigint | null
    until: bigint | null
    template: number | null
  }

  export type Litebans_bansMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_bansMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_bansCountAggregateOutputType = {
    id: number
    uuid: number
    ip: number
    reason: number
    banned_by_uuid: number
    banned_by_name: number
    removed_by_uuid: number
    removed_by_name: number
    removed_by_reason: number
    removed_by_date: number
    time: number
    until: number
    template: number
    server_scope: number
    server_origin: number
    silent: number
    ipban: number
    ipban_wildcard: number
    active: number
    _all: number
  }


  export type Litebans_bansAvgAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_bansSumAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_bansMinAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_bansMaxAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_bansCountAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    _all?: true
  }

  export type Litebans_bansAggregateArgs = {
    /**
     * Filter which litebans_bans to aggregate.
     */
    where?: litebans_bansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_bans to fetch.
     */
    orderBy?: Enumerable<litebans_bansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_bansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_bans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_bans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_bans
    **/
    _count?: true | Litebans_bansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_bansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_bansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_bansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_bansMaxAggregateInputType
  }

  export type GetLitebans_bansAggregateType<T extends Litebans_bansAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_bans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_bans[P]>
      : GetScalarType<T[P], AggregateLitebans_bans[P]>
  }




  export type Litebans_bansGroupByArgs = {
    where?: litebans_bansWhereInput
    orderBy?: Enumerable<litebans_bansOrderByWithAggregationInput>
    by: Litebans_bansScalarFieldEnum[]
    having?: litebans_bansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_bansCountAggregateInputType | true
    _avg?: Litebans_bansAvgAggregateInputType
    _sum?: Litebans_bansSumAggregateInputType
    _min?: Litebans_bansMinAggregateInputType
    _max?: Litebans_bansMaxAggregateInputType
  }


  export type Litebans_bansGroupByOutputType = {
    id: bigint
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint
    until: bigint
    template: number
    server_scope: string | null
    server_origin: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard: boolean
    active: boolean
    _count: Litebans_bansCountAggregateOutputType | null
    _avg: Litebans_bansAvgAggregateOutputType | null
    _sum: Litebans_bansSumAggregateOutputType | null
    _min: Litebans_bansMinAggregateOutputType | null
    _max: Litebans_bansMaxAggregateOutputType | null
  }

  type GetLitebans_bansGroupByPayload<T extends Litebans_bansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_bansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_bansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_bansGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_bansGroupByOutputType[P]>
        }
      >
    >


  export type litebans_bansSelect = {
    id?: boolean
    uuid?: boolean
    ip?: boolean
    reason?: boolean
    banned_by_uuid?: boolean
    banned_by_name?: boolean
    removed_by_uuid?: boolean
    removed_by_name?: boolean
    removed_by_reason?: boolean
    removed_by_date?: boolean
    time?: boolean
    until?: boolean
    template?: boolean
    server_scope?: boolean
    server_origin?: boolean
    silent?: boolean
    ipban?: boolean
    ipban_wildcard?: boolean
    active?: boolean
  }


  export type litebans_bansGetPayload<S extends boolean | null | undefined | litebans_bansArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_bans :
    S extends undefined ? never :
    S extends { include: any } & (litebans_bansArgs | litebans_bansFindManyArgs)
    ? litebans_bans 
    : S extends { select: any } & (litebans_bansArgs | litebans_bansFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_bans ? litebans_bans[P] : never
  } 
      : litebans_bans


  type litebans_bansCountArgs = 
    Omit<litebans_bansFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_bansCountAggregateInputType | true
    }

  export interface litebans_bansDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_bans that matches the filter.
     * @param {litebans_bansFindUniqueArgs} args - Arguments to find a Litebans_bans
     * @example
     * // Get one Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_bansFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_bansFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_bans'> extends True ? Prisma__litebans_bansClient<litebans_bansGetPayload<T>> : Prisma__litebans_bansClient<litebans_bansGetPayload<T> | null, null>

    /**
     * Find one Litebans_bans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_bansFindUniqueOrThrowArgs} args - Arguments to find a Litebans_bans
     * @example
     * // Get one Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_bansFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_bansFindUniqueOrThrowArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Find the first Litebans_bans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_bansFindFirstArgs} args - Arguments to find a Litebans_bans
     * @example
     * // Get one Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_bansFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_bansFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_bans'> extends True ? Prisma__litebans_bansClient<litebans_bansGetPayload<T>> : Prisma__litebans_bansClient<litebans_bansGetPayload<T> | null, null>

    /**
     * Find the first Litebans_bans that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_bansFindFirstOrThrowArgs} args - Arguments to find a Litebans_bans
     * @example
     * // Get one Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_bansFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_bansFindFirstOrThrowArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Find zero or more Litebans_bans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_bansFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findMany()
     * 
     * // Get first 10 Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_bansWithIdOnly = await prisma.litebans_bans.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_bansFindManyArgs>(
      args?: SelectSubset<T, litebans_bansFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_bansGetPayload<T>>>

    /**
     * Create a Litebans_bans.
     * @param {litebans_bansCreateArgs} args - Arguments to create a Litebans_bans.
     * @example
     * // Create one Litebans_bans
     * const Litebans_bans = await prisma.litebans_bans.create({
     *   data: {
     *     // ... data to create a Litebans_bans
     *   }
     * })
     * 
    **/
    create<T extends litebans_bansCreateArgs>(
      args: SelectSubset<T, litebans_bansCreateArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Create many Litebans_bans.
     *     @param {litebans_bansCreateManyArgs} args - Arguments to create many Litebans_bans.
     *     @example
     *     // Create many Litebans_bans
     *     const litebans_bans = await prisma.litebans_bans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_bansCreateManyArgs>(
      args?: SelectSubset<T, litebans_bansCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_bans.
     * @param {litebans_bansDeleteArgs} args - Arguments to delete one Litebans_bans.
     * @example
     * // Delete one Litebans_bans
     * const Litebans_bans = await prisma.litebans_bans.delete({
     *   where: {
     *     // ... filter to delete one Litebans_bans
     *   }
     * })
     * 
    **/
    delete<T extends litebans_bansDeleteArgs>(
      args: SelectSubset<T, litebans_bansDeleteArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Update one Litebans_bans.
     * @param {litebans_bansUpdateArgs} args - Arguments to update one Litebans_bans.
     * @example
     * // Update one Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_bansUpdateArgs>(
      args: SelectSubset<T, litebans_bansUpdateArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Delete zero or more Litebans_bans.
     * @param {litebans_bansDeleteManyArgs} args - Arguments to filter Litebans_bans to delete.
     * @example
     * // Delete a few Litebans_bans
     * const { count } = await prisma.litebans_bans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_bansDeleteManyArgs>(
      args?: SelectSubset<T, litebans_bansDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_bans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_bansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_bansUpdateManyArgs>(
      args: SelectSubset<T, litebans_bansUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_bans.
     * @param {litebans_bansUpsertArgs} args - Arguments to update or create a Litebans_bans.
     * @example
     * // Update or create a Litebans_bans
     * const litebans_bans = await prisma.litebans_bans.upsert({
     *   create: {
     *     // ... data to create a Litebans_bans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_bans we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_bansUpsertArgs>(
      args: SelectSubset<T, litebans_bansUpsertArgs>
    ): Prisma__litebans_bansClient<litebans_bansGetPayload<T>>

    /**
     * Count the number of Litebans_bans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_bansCountArgs} args - Arguments to filter Litebans_bans to count.
     * @example
     * // Count the number of Litebans_bans
     * const count = await prisma.litebans_bans.count({
     *   where: {
     *     // ... the filter for the Litebans_bans we want to count
     *   }
     * })
    **/
    count<T extends litebans_bansCountArgs>(
      args?: Subset<T, litebans_bansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_bansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_bans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_bansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_bansAggregateArgs>(args: Subset<T, Litebans_bansAggregateArgs>): Prisma.PrismaPromise<GetLitebans_bansAggregateType<T>>

    /**
     * Group by Litebans_bans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_bansGroupByArgs} args - Group by arguments.
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
      T extends Litebans_bansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_bansGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_bansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_bansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_bansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_bans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_bansClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_bans base type for findUnique actions
   */
  export type litebans_bansFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter, which litebans_bans to fetch.
     */
    where: litebans_bansWhereUniqueInput
  }

  /**
   * litebans_bans findUnique
   */
  export interface litebans_bansFindUniqueArgs extends litebans_bansFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_bans findUniqueOrThrow
   */
  export type litebans_bansFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter, which litebans_bans to fetch.
     */
    where: litebans_bansWhereUniqueInput
  }


  /**
   * litebans_bans base type for findFirst actions
   */
  export type litebans_bansFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter, which litebans_bans to fetch.
     */
    where?: litebans_bansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_bans to fetch.
     */
    orderBy?: Enumerable<litebans_bansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_bans.
     */
    cursor?: litebans_bansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_bans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_bans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_bans.
     */
    distinct?: Enumerable<Litebans_bansScalarFieldEnum>
  }

  /**
   * litebans_bans findFirst
   */
  export interface litebans_bansFindFirstArgs extends litebans_bansFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_bans findFirstOrThrow
   */
  export type litebans_bansFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter, which litebans_bans to fetch.
     */
    where?: litebans_bansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_bans to fetch.
     */
    orderBy?: Enumerable<litebans_bansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_bans.
     */
    cursor?: litebans_bansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_bans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_bans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_bans.
     */
    distinct?: Enumerable<Litebans_bansScalarFieldEnum>
  }


  /**
   * litebans_bans findMany
   */
  export type litebans_bansFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter, which litebans_bans to fetch.
     */
    where?: litebans_bansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_bans to fetch.
     */
    orderBy?: Enumerable<litebans_bansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_bans.
     */
    cursor?: litebans_bansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_bans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_bans.
     */
    skip?: number
    distinct?: Enumerable<Litebans_bansScalarFieldEnum>
  }


  /**
   * litebans_bans create
   */
  export type litebans_bansCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * The data needed to create a litebans_bans.
     */
    data: XOR<litebans_bansCreateInput, litebans_bansUncheckedCreateInput>
  }


  /**
   * litebans_bans createMany
   */
  export type litebans_bansCreateManyArgs = {
    /**
     * The data used to create many litebans_bans.
     */
    data: Enumerable<litebans_bansCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_bans update
   */
  export type litebans_bansUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * The data needed to update a litebans_bans.
     */
    data: XOR<litebans_bansUpdateInput, litebans_bansUncheckedUpdateInput>
    /**
     * Choose, which litebans_bans to update.
     */
    where: litebans_bansWhereUniqueInput
  }


  /**
   * litebans_bans updateMany
   */
  export type litebans_bansUpdateManyArgs = {
    /**
     * The data used to update litebans_bans.
     */
    data: XOR<litebans_bansUpdateManyMutationInput, litebans_bansUncheckedUpdateManyInput>
    /**
     * Filter which litebans_bans to update
     */
    where?: litebans_bansWhereInput
  }


  /**
   * litebans_bans upsert
   */
  export type litebans_bansUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * The filter to search for the litebans_bans to update in case it exists.
     */
    where: litebans_bansWhereUniqueInput
    /**
     * In case the litebans_bans found by the `where` argument doesn't exist, create a new litebans_bans with this data.
     */
    create: XOR<litebans_bansCreateInput, litebans_bansUncheckedCreateInput>
    /**
     * In case the litebans_bans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_bansUpdateInput, litebans_bansUncheckedUpdateInput>
  }


  /**
   * litebans_bans delete
   */
  export type litebans_bansDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
    /**
     * Filter which litebans_bans to delete.
     */
    where: litebans_bansWhereUniqueInput
  }


  /**
   * litebans_bans deleteMany
   */
  export type litebans_bansDeleteManyArgs = {
    /**
     * Filter which litebans_bans to delete
     */
    where?: litebans_bansWhereInput
  }


  /**
   * litebans_bans without action
   */
  export type litebans_bansArgs = {
    /**
     * Select specific fields to fetch from the litebans_bans
     */
    select?: litebans_bansSelect | null
  }



  /**
   * Model litebans_config
   */


  export type AggregateLitebans_config = {
    _count: Litebans_configCountAggregateOutputType | null
    _avg: Litebans_configAvgAggregateOutputType | null
    _sum: Litebans_configSumAggregateOutputType | null
    _min: Litebans_configMinAggregateOutputType | null
    _max: Litebans_configMaxAggregateOutputType | null
  }

  export type Litebans_configAvgAggregateOutputType = {
    id: number | null
  }

  export type Litebans_configSumAggregateOutputType = {
    id: bigint | null
  }

  export type Litebans_configMinAggregateOutputType = {
    id: bigint | null
    version: string | null
    build: string | null
    timezone: string | null
  }

  export type Litebans_configMaxAggregateOutputType = {
    id: bigint | null
    version: string | null
    build: string | null
    timezone: string | null
  }

  export type Litebans_configCountAggregateOutputType = {
    id: number
    version: number
    build: number
    timezone: number
    _all: number
  }


  export type Litebans_configAvgAggregateInputType = {
    id?: true
  }

  export type Litebans_configSumAggregateInputType = {
    id?: true
  }

  export type Litebans_configMinAggregateInputType = {
    id?: true
    version?: true
    build?: true
    timezone?: true
  }

  export type Litebans_configMaxAggregateInputType = {
    id?: true
    version?: true
    build?: true
    timezone?: true
  }

  export type Litebans_configCountAggregateInputType = {
    id?: true
    version?: true
    build?: true
    timezone?: true
    _all?: true
  }

  export type Litebans_configAggregateArgs = {
    /**
     * Filter which litebans_config to aggregate.
     */
    where?: litebans_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_configs to fetch.
     */
    orderBy?: Enumerable<litebans_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_configs
    **/
    _count?: true | Litebans_configCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_configAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_configSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_configMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_configMaxAggregateInputType
  }

  export type GetLitebans_configAggregateType<T extends Litebans_configAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_config]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_config[P]>
      : GetScalarType<T[P], AggregateLitebans_config[P]>
  }




  export type Litebans_configGroupByArgs = {
    where?: litebans_configWhereInput
    orderBy?: Enumerable<litebans_configOrderByWithAggregationInput>
    by: Litebans_configScalarFieldEnum[]
    having?: litebans_configScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_configCountAggregateInputType | true
    _avg?: Litebans_configAvgAggregateInputType
    _sum?: Litebans_configSumAggregateInputType
    _min?: Litebans_configMinAggregateInputType
    _max?: Litebans_configMaxAggregateInputType
  }


  export type Litebans_configGroupByOutputType = {
    id: bigint
    version: string
    build: string
    timezone: string
    _count: Litebans_configCountAggregateOutputType | null
    _avg: Litebans_configAvgAggregateOutputType | null
    _sum: Litebans_configSumAggregateOutputType | null
    _min: Litebans_configMinAggregateOutputType | null
    _max: Litebans_configMaxAggregateOutputType | null
  }

  type GetLitebans_configGroupByPayload<T extends Litebans_configGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_configGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_configGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_configGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_configGroupByOutputType[P]>
        }
      >
    >


  export type litebans_configSelect = {
    id?: boolean
    version?: boolean
    build?: boolean
    timezone?: boolean
  }


  export type litebans_configGetPayload<S extends boolean | null | undefined | litebans_configArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_config :
    S extends undefined ? never :
    S extends { include: any } & (litebans_configArgs | litebans_configFindManyArgs)
    ? litebans_config 
    : S extends { select: any } & (litebans_configArgs | litebans_configFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_config ? litebans_config[P] : never
  } 
      : litebans_config


  type litebans_configCountArgs = 
    Omit<litebans_configFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_configCountAggregateInputType | true
    }

  export interface litebans_configDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_config that matches the filter.
     * @param {litebans_configFindUniqueArgs} args - Arguments to find a Litebans_config
     * @example
     * // Get one Litebans_config
     * const litebans_config = await prisma.litebans_config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_configFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_configFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_config'> extends True ? Prisma__litebans_configClient<litebans_configGetPayload<T>> : Prisma__litebans_configClient<litebans_configGetPayload<T> | null, null>

    /**
     * Find one Litebans_config that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_configFindUniqueOrThrowArgs} args - Arguments to find a Litebans_config
     * @example
     * // Get one Litebans_config
     * const litebans_config = await prisma.litebans_config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_configFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_configFindUniqueOrThrowArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Find the first Litebans_config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_configFindFirstArgs} args - Arguments to find a Litebans_config
     * @example
     * // Get one Litebans_config
     * const litebans_config = await prisma.litebans_config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_configFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_configFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_config'> extends True ? Prisma__litebans_configClient<litebans_configGetPayload<T>> : Prisma__litebans_configClient<litebans_configGetPayload<T> | null, null>

    /**
     * Find the first Litebans_config that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_configFindFirstOrThrowArgs} args - Arguments to find a Litebans_config
     * @example
     * // Get one Litebans_config
     * const litebans_config = await prisma.litebans_config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_configFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_configFindFirstOrThrowArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Find zero or more Litebans_configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_configFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_configs
     * const litebans_configs = await prisma.litebans_config.findMany()
     * 
     * // Get first 10 Litebans_configs
     * const litebans_configs = await prisma.litebans_config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_configWithIdOnly = await prisma.litebans_config.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_configFindManyArgs>(
      args?: SelectSubset<T, litebans_configFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_configGetPayload<T>>>

    /**
     * Create a Litebans_config.
     * @param {litebans_configCreateArgs} args - Arguments to create a Litebans_config.
     * @example
     * // Create one Litebans_config
     * const Litebans_config = await prisma.litebans_config.create({
     *   data: {
     *     // ... data to create a Litebans_config
     *   }
     * })
     * 
    **/
    create<T extends litebans_configCreateArgs>(
      args: SelectSubset<T, litebans_configCreateArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Create many Litebans_configs.
     *     @param {litebans_configCreateManyArgs} args - Arguments to create many Litebans_configs.
     *     @example
     *     // Create many Litebans_configs
     *     const litebans_config = await prisma.litebans_config.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_configCreateManyArgs>(
      args?: SelectSubset<T, litebans_configCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_config.
     * @param {litebans_configDeleteArgs} args - Arguments to delete one Litebans_config.
     * @example
     * // Delete one Litebans_config
     * const Litebans_config = await prisma.litebans_config.delete({
     *   where: {
     *     // ... filter to delete one Litebans_config
     *   }
     * })
     * 
    **/
    delete<T extends litebans_configDeleteArgs>(
      args: SelectSubset<T, litebans_configDeleteArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Update one Litebans_config.
     * @param {litebans_configUpdateArgs} args - Arguments to update one Litebans_config.
     * @example
     * // Update one Litebans_config
     * const litebans_config = await prisma.litebans_config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_configUpdateArgs>(
      args: SelectSubset<T, litebans_configUpdateArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Delete zero or more Litebans_configs.
     * @param {litebans_configDeleteManyArgs} args - Arguments to filter Litebans_configs to delete.
     * @example
     * // Delete a few Litebans_configs
     * const { count } = await prisma.litebans_config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_configDeleteManyArgs>(
      args?: SelectSubset<T, litebans_configDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_configUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_configs
     * const litebans_config = await prisma.litebans_config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_configUpdateManyArgs>(
      args: SelectSubset<T, litebans_configUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_config.
     * @param {litebans_configUpsertArgs} args - Arguments to update or create a Litebans_config.
     * @example
     * // Update or create a Litebans_config
     * const litebans_config = await prisma.litebans_config.upsert({
     *   create: {
     *     // ... data to create a Litebans_config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_config we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_configUpsertArgs>(
      args: SelectSubset<T, litebans_configUpsertArgs>
    ): Prisma__litebans_configClient<litebans_configGetPayload<T>>

    /**
     * Count the number of Litebans_configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_configCountArgs} args - Arguments to filter Litebans_configs to count.
     * @example
     * // Count the number of Litebans_configs
     * const count = await prisma.litebans_config.count({
     *   where: {
     *     // ... the filter for the Litebans_configs we want to count
     *   }
     * })
    **/
    count<T extends litebans_configCountArgs>(
      args?: Subset<T, litebans_configCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_configCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_configAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_configAggregateArgs>(args: Subset<T, Litebans_configAggregateArgs>): Prisma.PrismaPromise<GetLitebans_configAggregateType<T>>

    /**
     * Group by Litebans_config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_configGroupByArgs} args - Group by arguments.
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
      T extends Litebans_configGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_configGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_configGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_configGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_configGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_configClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_config base type for findUnique actions
   */
  export type litebans_configFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter, which litebans_config to fetch.
     */
    where: litebans_configWhereUniqueInput
  }

  /**
   * litebans_config findUnique
   */
  export interface litebans_configFindUniqueArgs extends litebans_configFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_config findUniqueOrThrow
   */
  export type litebans_configFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter, which litebans_config to fetch.
     */
    where: litebans_configWhereUniqueInput
  }


  /**
   * litebans_config base type for findFirst actions
   */
  export type litebans_configFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter, which litebans_config to fetch.
     */
    where?: litebans_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_configs to fetch.
     */
    orderBy?: Enumerable<litebans_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_configs.
     */
    cursor?: litebans_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_configs.
     */
    distinct?: Enumerable<Litebans_configScalarFieldEnum>
  }

  /**
   * litebans_config findFirst
   */
  export interface litebans_configFindFirstArgs extends litebans_configFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_config findFirstOrThrow
   */
  export type litebans_configFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter, which litebans_config to fetch.
     */
    where?: litebans_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_configs to fetch.
     */
    orderBy?: Enumerable<litebans_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_configs.
     */
    cursor?: litebans_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_configs.
     */
    distinct?: Enumerable<Litebans_configScalarFieldEnum>
  }


  /**
   * litebans_config findMany
   */
  export type litebans_configFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter, which litebans_configs to fetch.
     */
    where?: litebans_configWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_configs to fetch.
     */
    orderBy?: Enumerable<litebans_configOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_configs.
     */
    cursor?: litebans_configWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_configs.
     */
    skip?: number
    distinct?: Enumerable<Litebans_configScalarFieldEnum>
  }


  /**
   * litebans_config create
   */
  export type litebans_configCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * The data needed to create a litebans_config.
     */
    data: XOR<litebans_configCreateInput, litebans_configUncheckedCreateInput>
  }


  /**
   * litebans_config createMany
   */
  export type litebans_configCreateManyArgs = {
    /**
     * The data used to create many litebans_configs.
     */
    data: Enumerable<litebans_configCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_config update
   */
  export type litebans_configUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * The data needed to update a litebans_config.
     */
    data: XOR<litebans_configUpdateInput, litebans_configUncheckedUpdateInput>
    /**
     * Choose, which litebans_config to update.
     */
    where: litebans_configWhereUniqueInput
  }


  /**
   * litebans_config updateMany
   */
  export type litebans_configUpdateManyArgs = {
    /**
     * The data used to update litebans_configs.
     */
    data: XOR<litebans_configUpdateManyMutationInput, litebans_configUncheckedUpdateManyInput>
    /**
     * Filter which litebans_configs to update
     */
    where?: litebans_configWhereInput
  }


  /**
   * litebans_config upsert
   */
  export type litebans_configUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * The filter to search for the litebans_config to update in case it exists.
     */
    where: litebans_configWhereUniqueInput
    /**
     * In case the litebans_config found by the `where` argument doesn't exist, create a new litebans_config with this data.
     */
    create: XOR<litebans_configCreateInput, litebans_configUncheckedCreateInput>
    /**
     * In case the litebans_config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_configUpdateInput, litebans_configUncheckedUpdateInput>
  }


  /**
   * litebans_config delete
   */
  export type litebans_configDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
    /**
     * Filter which litebans_config to delete.
     */
    where: litebans_configWhereUniqueInput
  }


  /**
   * litebans_config deleteMany
   */
  export type litebans_configDeleteManyArgs = {
    /**
     * Filter which litebans_configs to delete
     */
    where?: litebans_configWhereInput
  }


  /**
   * litebans_config without action
   */
  export type litebans_configArgs = {
    /**
     * Select specific fields to fetch from the litebans_config
     */
    select?: litebans_configSelect | null
  }



  /**
   * Model litebans_history
   */


  export type AggregateLitebans_history = {
    _count: Litebans_historyCountAggregateOutputType | null
    _avg: Litebans_historyAvgAggregateOutputType | null
    _sum: Litebans_historySumAggregateOutputType | null
    _min: Litebans_historyMinAggregateOutputType | null
    _max: Litebans_historyMaxAggregateOutputType | null
  }

  export type Litebans_historyAvgAggregateOutputType = {
    id: number | null
  }

  export type Litebans_historySumAggregateOutputType = {
    id: bigint | null
  }

  export type Litebans_historyMinAggregateOutputType = {
    id: bigint | null
    date: Date | null
    name: string | null
    uuid: string | null
    ip: string | null
  }

  export type Litebans_historyMaxAggregateOutputType = {
    id: bigint | null
    date: Date | null
    name: string | null
    uuid: string | null
    ip: string | null
  }

  export type Litebans_historyCountAggregateOutputType = {
    id: number
    date: number
    name: number
    uuid: number
    ip: number
    _all: number
  }


  export type Litebans_historyAvgAggregateInputType = {
    id?: true
  }

  export type Litebans_historySumAggregateInputType = {
    id?: true
  }

  export type Litebans_historyMinAggregateInputType = {
    id?: true
    date?: true
    name?: true
    uuid?: true
    ip?: true
  }

  export type Litebans_historyMaxAggregateInputType = {
    id?: true
    date?: true
    name?: true
    uuid?: true
    ip?: true
  }

  export type Litebans_historyCountAggregateInputType = {
    id?: true
    date?: true
    name?: true
    uuid?: true
    ip?: true
    _all?: true
  }

  export type Litebans_historyAggregateArgs = {
    /**
     * Filter which litebans_history to aggregate.
     */
    where?: litebans_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_histories to fetch.
     */
    orderBy?: Enumerable<litebans_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_histories
    **/
    _count?: true | Litebans_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_historyMaxAggregateInputType
  }

  export type GetLitebans_historyAggregateType<T extends Litebans_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_history[P]>
      : GetScalarType<T[P], AggregateLitebans_history[P]>
  }




  export type Litebans_historyGroupByArgs = {
    where?: litebans_historyWhereInput
    orderBy?: Enumerable<litebans_historyOrderByWithAggregationInput>
    by: Litebans_historyScalarFieldEnum[]
    having?: litebans_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_historyCountAggregateInputType | true
    _avg?: Litebans_historyAvgAggregateInputType
    _sum?: Litebans_historySumAggregateInputType
    _min?: Litebans_historyMinAggregateInputType
    _max?: Litebans_historyMaxAggregateInputType
  }


  export type Litebans_historyGroupByOutputType = {
    id: bigint
    date: Date | null
    name: string | null
    uuid: string | null
    ip: string | null
    _count: Litebans_historyCountAggregateOutputType | null
    _avg: Litebans_historyAvgAggregateOutputType | null
    _sum: Litebans_historySumAggregateOutputType | null
    _min: Litebans_historyMinAggregateOutputType | null
    _max: Litebans_historyMaxAggregateOutputType | null
  }

  type GetLitebans_historyGroupByPayload<T extends Litebans_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_historyGroupByOutputType[P]>
        }
      >
    >


  export type litebans_historySelect = {
    id?: boolean
    date?: boolean
    name?: boolean
    uuid?: boolean
    ip?: boolean
  }


  export type litebans_historyGetPayload<S extends boolean | null | undefined | litebans_historyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_history :
    S extends undefined ? never :
    S extends { include: any } & (litebans_historyArgs | litebans_historyFindManyArgs)
    ? litebans_history 
    : S extends { select: any } & (litebans_historyArgs | litebans_historyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_history ? litebans_history[P] : never
  } 
      : litebans_history


  type litebans_historyCountArgs = 
    Omit<litebans_historyFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_historyCountAggregateInputType | true
    }

  export interface litebans_historyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_history that matches the filter.
     * @param {litebans_historyFindUniqueArgs} args - Arguments to find a Litebans_history
     * @example
     * // Get one Litebans_history
     * const litebans_history = await prisma.litebans_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_historyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_historyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_history'> extends True ? Prisma__litebans_historyClient<litebans_historyGetPayload<T>> : Prisma__litebans_historyClient<litebans_historyGetPayload<T> | null, null>

    /**
     * Find one Litebans_history that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_historyFindUniqueOrThrowArgs} args - Arguments to find a Litebans_history
     * @example
     * // Get one Litebans_history
     * const litebans_history = await prisma.litebans_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_historyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_historyFindUniqueOrThrowArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Find the first Litebans_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_historyFindFirstArgs} args - Arguments to find a Litebans_history
     * @example
     * // Get one Litebans_history
     * const litebans_history = await prisma.litebans_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_historyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_historyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_history'> extends True ? Prisma__litebans_historyClient<litebans_historyGetPayload<T>> : Prisma__litebans_historyClient<litebans_historyGetPayload<T> | null, null>

    /**
     * Find the first Litebans_history that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_historyFindFirstOrThrowArgs} args - Arguments to find a Litebans_history
     * @example
     * // Get one Litebans_history
     * const litebans_history = await prisma.litebans_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_historyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_historyFindFirstOrThrowArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Find zero or more Litebans_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_histories
     * const litebans_histories = await prisma.litebans_history.findMany()
     * 
     * // Get first 10 Litebans_histories
     * const litebans_histories = await prisma.litebans_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_historyWithIdOnly = await prisma.litebans_history.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_historyFindManyArgs>(
      args?: SelectSubset<T, litebans_historyFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_historyGetPayload<T>>>

    /**
     * Create a Litebans_history.
     * @param {litebans_historyCreateArgs} args - Arguments to create a Litebans_history.
     * @example
     * // Create one Litebans_history
     * const Litebans_history = await prisma.litebans_history.create({
     *   data: {
     *     // ... data to create a Litebans_history
     *   }
     * })
     * 
    **/
    create<T extends litebans_historyCreateArgs>(
      args: SelectSubset<T, litebans_historyCreateArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Create many Litebans_histories.
     *     @param {litebans_historyCreateManyArgs} args - Arguments to create many Litebans_histories.
     *     @example
     *     // Create many Litebans_histories
     *     const litebans_history = await prisma.litebans_history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_historyCreateManyArgs>(
      args?: SelectSubset<T, litebans_historyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_history.
     * @param {litebans_historyDeleteArgs} args - Arguments to delete one Litebans_history.
     * @example
     * // Delete one Litebans_history
     * const Litebans_history = await prisma.litebans_history.delete({
     *   where: {
     *     // ... filter to delete one Litebans_history
     *   }
     * })
     * 
    **/
    delete<T extends litebans_historyDeleteArgs>(
      args: SelectSubset<T, litebans_historyDeleteArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Update one Litebans_history.
     * @param {litebans_historyUpdateArgs} args - Arguments to update one Litebans_history.
     * @example
     * // Update one Litebans_history
     * const litebans_history = await prisma.litebans_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_historyUpdateArgs>(
      args: SelectSubset<T, litebans_historyUpdateArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Delete zero or more Litebans_histories.
     * @param {litebans_historyDeleteManyArgs} args - Arguments to filter Litebans_histories to delete.
     * @example
     * // Delete a few Litebans_histories
     * const { count } = await prisma.litebans_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_historyDeleteManyArgs>(
      args?: SelectSubset<T, litebans_historyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_histories
     * const litebans_history = await prisma.litebans_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_historyUpdateManyArgs>(
      args: SelectSubset<T, litebans_historyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_history.
     * @param {litebans_historyUpsertArgs} args - Arguments to update or create a Litebans_history.
     * @example
     * // Update or create a Litebans_history
     * const litebans_history = await prisma.litebans_history.upsert({
     *   create: {
     *     // ... data to create a Litebans_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_history we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_historyUpsertArgs>(
      args: SelectSubset<T, litebans_historyUpsertArgs>
    ): Prisma__litebans_historyClient<litebans_historyGetPayload<T>>

    /**
     * Count the number of Litebans_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_historyCountArgs} args - Arguments to filter Litebans_histories to count.
     * @example
     * // Count the number of Litebans_histories
     * const count = await prisma.litebans_history.count({
     *   where: {
     *     // ... the filter for the Litebans_histories we want to count
     *   }
     * })
    **/
    count<T extends litebans_historyCountArgs>(
      args?: Subset<T, litebans_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_historyAggregateArgs>(args: Subset<T, Litebans_historyAggregateArgs>): Prisma.PrismaPromise<GetLitebans_historyAggregateType<T>>

    /**
     * Group by Litebans_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_historyGroupByArgs} args - Group by arguments.
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
      T extends Litebans_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_historyGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_historyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_history base type for findUnique actions
   */
  export type litebans_historyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter, which litebans_history to fetch.
     */
    where: litebans_historyWhereUniqueInput
  }

  /**
   * litebans_history findUnique
   */
  export interface litebans_historyFindUniqueArgs extends litebans_historyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_history findUniqueOrThrow
   */
  export type litebans_historyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter, which litebans_history to fetch.
     */
    where: litebans_historyWhereUniqueInput
  }


  /**
   * litebans_history base type for findFirst actions
   */
  export type litebans_historyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter, which litebans_history to fetch.
     */
    where?: litebans_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_histories to fetch.
     */
    orderBy?: Enumerable<litebans_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_histories.
     */
    cursor?: litebans_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_histories.
     */
    distinct?: Enumerable<Litebans_historyScalarFieldEnum>
  }

  /**
   * litebans_history findFirst
   */
  export interface litebans_historyFindFirstArgs extends litebans_historyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_history findFirstOrThrow
   */
  export type litebans_historyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter, which litebans_history to fetch.
     */
    where?: litebans_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_histories to fetch.
     */
    orderBy?: Enumerable<litebans_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_histories.
     */
    cursor?: litebans_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_histories.
     */
    distinct?: Enumerable<Litebans_historyScalarFieldEnum>
  }


  /**
   * litebans_history findMany
   */
  export type litebans_historyFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter, which litebans_histories to fetch.
     */
    where?: litebans_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_histories to fetch.
     */
    orderBy?: Enumerable<litebans_historyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_histories.
     */
    cursor?: litebans_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_histories.
     */
    skip?: number
    distinct?: Enumerable<Litebans_historyScalarFieldEnum>
  }


  /**
   * litebans_history create
   */
  export type litebans_historyCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * The data needed to create a litebans_history.
     */
    data: XOR<litebans_historyCreateInput, litebans_historyUncheckedCreateInput>
  }


  /**
   * litebans_history createMany
   */
  export type litebans_historyCreateManyArgs = {
    /**
     * The data used to create many litebans_histories.
     */
    data: Enumerable<litebans_historyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_history update
   */
  export type litebans_historyUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * The data needed to update a litebans_history.
     */
    data: XOR<litebans_historyUpdateInput, litebans_historyUncheckedUpdateInput>
    /**
     * Choose, which litebans_history to update.
     */
    where: litebans_historyWhereUniqueInput
  }


  /**
   * litebans_history updateMany
   */
  export type litebans_historyUpdateManyArgs = {
    /**
     * The data used to update litebans_histories.
     */
    data: XOR<litebans_historyUpdateManyMutationInput, litebans_historyUncheckedUpdateManyInput>
    /**
     * Filter which litebans_histories to update
     */
    where?: litebans_historyWhereInput
  }


  /**
   * litebans_history upsert
   */
  export type litebans_historyUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * The filter to search for the litebans_history to update in case it exists.
     */
    where: litebans_historyWhereUniqueInput
    /**
     * In case the litebans_history found by the `where` argument doesn't exist, create a new litebans_history with this data.
     */
    create: XOR<litebans_historyCreateInput, litebans_historyUncheckedCreateInput>
    /**
     * In case the litebans_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_historyUpdateInput, litebans_historyUncheckedUpdateInput>
  }


  /**
   * litebans_history delete
   */
  export type litebans_historyDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
    /**
     * Filter which litebans_history to delete.
     */
    where: litebans_historyWhereUniqueInput
  }


  /**
   * litebans_history deleteMany
   */
  export type litebans_historyDeleteManyArgs = {
    /**
     * Filter which litebans_histories to delete
     */
    where?: litebans_historyWhereInput
  }


  /**
   * litebans_history without action
   */
  export type litebans_historyArgs = {
    /**
     * Select specific fields to fetch from the litebans_history
     */
    select?: litebans_historySelect | null
  }



  /**
   * Model litebans_kicks
   */


  export type AggregateLitebans_kicks = {
    _count: Litebans_kicksCountAggregateOutputType | null
    _avg: Litebans_kicksAvgAggregateOutputType | null
    _sum: Litebans_kicksSumAggregateOutputType | null
    _min: Litebans_kicksMinAggregateOutputType | null
    _max: Litebans_kicksMaxAggregateOutputType | null
  }

  export type Litebans_kicksAvgAggregateOutputType = {
    id: number | null
    time: number | null
    until: number | null
    template: number | null
  }

  export type Litebans_kicksSumAggregateOutputType = {
    id: bigint | null
    time: bigint | null
    until: bigint | null
    template: number | null
  }

  export type Litebans_kicksMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_kicksMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_kicksCountAggregateOutputType = {
    id: number
    uuid: number
    ip: number
    reason: number
    banned_by_uuid: number
    banned_by_name: number
    time: number
    until: number
    template: number
    server_scope: number
    server_origin: number
    silent: number
    ipban: number
    ipban_wildcard: number
    active: number
    _all: number
  }


  export type Litebans_kicksAvgAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_kicksSumAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_kicksMinAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_kicksMaxAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_kicksCountAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    _all?: true
  }

  export type Litebans_kicksAggregateArgs = {
    /**
     * Filter which litebans_kicks to aggregate.
     */
    where?: litebans_kicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_kicks to fetch.
     */
    orderBy?: Enumerable<litebans_kicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_kicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_kicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_kicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_kicks
    **/
    _count?: true | Litebans_kicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_kicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_kicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_kicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_kicksMaxAggregateInputType
  }

  export type GetLitebans_kicksAggregateType<T extends Litebans_kicksAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_kicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_kicks[P]>
      : GetScalarType<T[P], AggregateLitebans_kicks[P]>
  }




  export type Litebans_kicksGroupByArgs = {
    where?: litebans_kicksWhereInput
    orderBy?: Enumerable<litebans_kicksOrderByWithAggregationInput>
    by: Litebans_kicksScalarFieldEnum[]
    having?: litebans_kicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_kicksCountAggregateInputType | true
    _avg?: Litebans_kicksAvgAggregateInputType
    _sum?: Litebans_kicksSumAggregateInputType
    _min?: Litebans_kicksMinAggregateInputType
    _max?: Litebans_kicksMaxAggregateInputType
  }


  export type Litebans_kicksGroupByOutputType = {
    id: bigint
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string
    banned_by_name: string | null
    time: bigint
    until: bigint
    template: number
    server_scope: string | null
    server_origin: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard: boolean
    active: boolean
    _count: Litebans_kicksCountAggregateOutputType | null
    _avg: Litebans_kicksAvgAggregateOutputType | null
    _sum: Litebans_kicksSumAggregateOutputType | null
    _min: Litebans_kicksMinAggregateOutputType | null
    _max: Litebans_kicksMaxAggregateOutputType | null
  }

  type GetLitebans_kicksGroupByPayload<T extends Litebans_kicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_kicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_kicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_kicksGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_kicksGroupByOutputType[P]>
        }
      >
    >


  export type litebans_kicksSelect = {
    id?: boolean
    uuid?: boolean
    ip?: boolean
    reason?: boolean
    banned_by_uuid?: boolean
    banned_by_name?: boolean
    time?: boolean
    until?: boolean
    template?: boolean
    server_scope?: boolean
    server_origin?: boolean
    silent?: boolean
    ipban?: boolean
    ipban_wildcard?: boolean
    active?: boolean
  }


  export type litebans_kicksGetPayload<S extends boolean | null | undefined | litebans_kicksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_kicks :
    S extends undefined ? never :
    S extends { include: any } & (litebans_kicksArgs | litebans_kicksFindManyArgs)
    ? litebans_kicks 
    : S extends { select: any } & (litebans_kicksArgs | litebans_kicksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_kicks ? litebans_kicks[P] : never
  } 
      : litebans_kicks


  type litebans_kicksCountArgs = 
    Omit<litebans_kicksFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_kicksCountAggregateInputType | true
    }

  export interface litebans_kicksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_kicks that matches the filter.
     * @param {litebans_kicksFindUniqueArgs} args - Arguments to find a Litebans_kicks
     * @example
     * // Get one Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_kicksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_kicksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_kicks'> extends True ? Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>> : Prisma__litebans_kicksClient<litebans_kicksGetPayload<T> | null, null>

    /**
     * Find one Litebans_kicks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_kicksFindUniqueOrThrowArgs} args - Arguments to find a Litebans_kicks
     * @example
     * // Get one Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_kicksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_kicksFindUniqueOrThrowArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Find the first Litebans_kicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_kicksFindFirstArgs} args - Arguments to find a Litebans_kicks
     * @example
     * // Get one Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_kicksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_kicksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_kicks'> extends True ? Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>> : Prisma__litebans_kicksClient<litebans_kicksGetPayload<T> | null, null>

    /**
     * Find the first Litebans_kicks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_kicksFindFirstOrThrowArgs} args - Arguments to find a Litebans_kicks
     * @example
     * // Get one Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_kicksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_kicksFindFirstOrThrowArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Find zero or more Litebans_kicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_kicksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findMany()
     * 
     * // Get first 10 Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_kicksWithIdOnly = await prisma.litebans_kicks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_kicksFindManyArgs>(
      args?: SelectSubset<T, litebans_kicksFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_kicksGetPayload<T>>>

    /**
     * Create a Litebans_kicks.
     * @param {litebans_kicksCreateArgs} args - Arguments to create a Litebans_kicks.
     * @example
     * // Create one Litebans_kicks
     * const Litebans_kicks = await prisma.litebans_kicks.create({
     *   data: {
     *     // ... data to create a Litebans_kicks
     *   }
     * })
     * 
    **/
    create<T extends litebans_kicksCreateArgs>(
      args: SelectSubset<T, litebans_kicksCreateArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Create many Litebans_kicks.
     *     @param {litebans_kicksCreateManyArgs} args - Arguments to create many Litebans_kicks.
     *     @example
     *     // Create many Litebans_kicks
     *     const litebans_kicks = await prisma.litebans_kicks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_kicksCreateManyArgs>(
      args?: SelectSubset<T, litebans_kicksCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_kicks.
     * @param {litebans_kicksDeleteArgs} args - Arguments to delete one Litebans_kicks.
     * @example
     * // Delete one Litebans_kicks
     * const Litebans_kicks = await prisma.litebans_kicks.delete({
     *   where: {
     *     // ... filter to delete one Litebans_kicks
     *   }
     * })
     * 
    **/
    delete<T extends litebans_kicksDeleteArgs>(
      args: SelectSubset<T, litebans_kicksDeleteArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Update one Litebans_kicks.
     * @param {litebans_kicksUpdateArgs} args - Arguments to update one Litebans_kicks.
     * @example
     * // Update one Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_kicksUpdateArgs>(
      args: SelectSubset<T, litebans_kicksUpdateArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Delete zero or more Litebans_kicks.
     * @param {litebans_kicksDeleteManyArgs} args - Arguments to filter Litebans_kicks to delete.
     * @example
     * // Delete a few Litebans_kicks
     * const { count } = await prisma.litebans_kicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_kicksDeleteManyArgs>(
      args?: SelectSubset<T, litebans_kicksDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_kicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_kicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_kicksUpdateManyArgs>(
      args: SelectSubset<T, litebans_kicksUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_kicks.
     * @param {litebans_kicksUpsertArgs} args - Arguments to update or create a Litebans_kicks.
     * @example
     * // Update or create a Litebans_kicks
     * const litebans_kicks = await prisma.litebans_kicks.upsert({
     *   create: {
     *     // ... data to create a Litebans_kicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_kicks we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_kicksUpsertArgs>(
      args: SelectSubset<T, litebans_kicksUpsertArgs>
    ): Prisma__litebans_kicksClient<litebans_kicksGetPayload<T>>

    /**
     * Count the number of Litebans_kicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_kicksCountArgs} args - Arguments to filter Litebans_kicks to count.
     * @example
     * // Count the number of Litebans_kicks
     * const count = await prisma.litebans_kicks.count({
     *   where: {
     *     // ... the filter for the Litebans_kicks we want to count
     *   }
     * })
    **/
    count<T extends litebans_kicksCountArgs>(
      args?: Subset<T, litebans_kicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_kicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_kicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_kicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_kicksAggregateArgs>(args: Subset<T, Litebans_kicksAggregateArgs>): Prisma.PrismaPromise<GetLitebans_kicksAggregateType<T>>

    /**
     * Group by Litebans_kicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_kicksGroupByArgs} args - Group by arguments.
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
      T extends Litebans_kicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_kicksGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_kicksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_kicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_kicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_kicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_kicksClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_kicks base type for findUnique actions
   */
  export type litebans_kicksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter, which litebans_kicks to fetch.
     */
    where: litebans_kicksWhereUniqueInput
  }

  /**
   * litebans_kicks findUnique
   */
  export interface litebans_kicksFindUniqueArgs extends litebans_kicksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_kicks findUniqueOrThrow
   */
  export type litebans_kicksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter, which litebans_kicks to fetch.
     */
    where: litebans_kicksWhereUniqueInput
  }


  /**
   * litebans_kicks base type for findFirst actions
   */
  export type litebans_kicksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter, which litebans_kicks to fetch.
     */
    where?: litebans_kicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_kicks to fetch.
     */
    orderBy?: Enumerable<litebans_kicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_kicks.
     */
    cursor?: litebans_kicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_kicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_kicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_kicks.
     */
    distinct?: Enumerable<Litebans_kicksScalarFieldEnum>
  }

  /**
   * litebans_kicks findFirst
   */
  export interface litebans_kicksFindFirstArgs extends litebans_kicksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_kicks findFirstOrThrow
   */
  export type litebans_kicksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter, which litebans_kicks to fetch.
     */
    where?: litebans_kicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_kicks to fetch.
     */
    orderBy?: Enumerable<litebans_kicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_kicks.
     */
    cursor?: litebans_kicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_kicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_kicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_kicks.
     */
    distinct?: Enumerable<Litebans_kicksScalarFieldEnum>
  }


  /**
   * litebans_kicks findMany
   */
  export type litebans_kicksFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter, which litebans_kicks to fetch.
     */
    where?: litebans_kicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_kicks to fetch.
     */
    orderBy?: Enumerable<litebans_kicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_kicks.
     */
    cursor?: litebans_kicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_kicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_kicks.
     */
    skip?: number
    distinct?: Enumerable<Litebans_kicksScalarFieldEnum>
  }


  /**
   * litebans_kicks create
   */
  export type litebans_kicksCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * The data needed to create a litebans_kicks.
     */
    data: XOR<litebans_kicksCreateInput, litebans_kicksUncheckedCreateInput>
  }


  /**
   * litebans_kicks createMany
   */
  export type litebans_kicksCreateManyArgs = {
    /**
     * The data used to create many litebans_kicks.
     */
    data: Enumerable<litebans_kicksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_kicks update
   */
  export type litebans_kicksUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * The data needed to update a litebans_kicks.
     */
    data: XOR<litebans_kicksUpdateInput, litebans_kicksUncheckedUpdateInput>
    /**
     * Choose, which litebans_kicks to update.
     */
    where: litebans_kicksWhereUniqueInput
  }


  /**
   * litebans_kicks updateMany
   */
  export type litebans_kicksUpdateManyArgs = {
    /**
     * The data used to update litebans_kicks.
     */
    data: XOR<litebans_kicksUpdateManyMutationInput, litebans_kicksUncheckedUpdateManyInput>
    /**
     * Filter which litebans_kicks to update
     */
    where?: litebans_kicksWhereInput
  }


  /**
   * litebans_kicks upsert
   */
  export type litebans_kicksUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * The filter to search for the litebans_kicks to update in case it exists.
     */
    where: litebans_kicksWhereUniqueInput
    /**
     * In case the litebans_kicks found by the `where` argument doesn't exist, create a new litebans_kicks with this data.
     */
    create: XOR<litebans_kicksCreateInput, litebans_kicksUncheckedCreateInput>
    /**
     * In case the litebans_kicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_kicksUpdateInput, litebans_kicksUncheckedUpdateInput>
  }


  /**
   * litebans_kicks delete
   */
  export type litebans_kicksDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
    /**
     * Filter which litebans_kicks to delete.
     */
    where: litebans_kicksWhereUniqueInput
  }


  /**
   * litebans_kicks deleteMany
   */
  export type litebans_kicksDeleteManyArgs = {
    /**
     * Filter which litebans_kicks to delete
     */
    where?: litebans_kicksWhereInput
  }


  /**
   * litebans_kicks without action
   */
  export type litebans_kicksArgs = {
    /**
     * Select specific fields to fetch from the litebans_kicks
     */
    select?: litebans_kicksSelect | null
  }



  /**
   * Model litebans_mutes
   */


  export type AggregateLitebans_mutes = {
    _count: Litebans_mutesCountAggregateOutputType | null
    _avg: Litebans_mutesAvgAggregateOutputType | null
    _sum: Litebans_mutesSumAggregateOutputType | null
    _min: Litebans_mutesMinAggregateOutputType | null
    _max: Litebans_mutesMaxAggregateOutputType | null
  }

  export type Litebans_mutesAvgAggregateOutputType = {
    id: number | null
    time: number | null
    until: number | null
    template: number | null
  }

  export type Litebans_mutesSumAggregateOutputType = {
    id: bigint | null
    time: bigint | null
    until: bigint | null
    template: number | null
  }

  export type Litebans_mutesMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_mutesMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
  }

  export type Litebans_mutesCountAggregateOutputType = {
    id: number
    uuid: number
    ip: number
    reason: number
    banned_by_uuid: number
    banned_by_name: number
    removed_by_uuid: number
    removed_by_name: number
    removed_by_reason: number
    removed_by_date: number
    time: number
    until: number
    template: number
    server_scope: number
    server_origin: number
    silent: number
    ipban: number
    ipban_wildcard: number
    active: number
    _all: number
  }


  export type Litebans_mutesAvgAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_mutesSumAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_mutesMinAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_mutesMaxAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
  }

  export type Litebans_mutesCountAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    _all?: true
  }

  export type Litebans_mutesAggregateArgs = {
    /**
     * Filter which litebans_mutes to aggregate.
     */
    where?: litebans_mutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_mutes to fetch.
     */
    orderBy?: Enumerable<litebans_mutesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_mutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_mutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_mutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_mutes
    **/
    _count?: true | Litebans_mutesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_mutesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_mutesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_mutesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_mutesMaxAggregateInputType
  }

  export type GetLitebans_mutesAggregateType<T extends Litebans_mutesAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_mutes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_mutes[P]>
      : GetScalarType<T[P], AggregateLitebans_mutes[P]>
  }




  export type Litebans_mutesGroupByArgs = {
    where?: litebans_mutesWhereInput
    orderBy?: Enumerable<litebans_mutesOrderByWithAggregationInput>
    by: Litebans_mutesScalarFieldEnum[]
    having?: litebans_mutesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_mutesCountAggregateInputType | true
    _avg?: Litebans_mutesAvgAggregateInputType
    _sum?: Litebans_mutesSumAggregateInputType
    _min?: Litebans_mutesMinAggregateInputType
    _max?: Litebans_mutesMaxAggregateInputType
  }


  export type Litebans_mutesGroupByOutputType = {
    id: bigint
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint
    until: bigint
    template: number
    server_scope: string | null
    server_origin: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard: boolean
    active: boolean
    _count: Litebans_mutesCountAggregateOutputType | null
    _avg: Litebans_mutesAvgAggregateOutputType | null
    _sum: Litebans_mutesSumAggregateOutputType | null
    _min: Litebans_mutesMinAggregateOutputType | null
    _max: Litebans_mutesMaxAggregateOutputType | null
  }

  type GetLitebans_mutesGroupByPayload<T extends Litebans_mutesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_mutesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_mutesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_mutesGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_mutesGroupByOutputType[P]>
        }
      >
    >


  export type litebans_mutesSelect = {
    id?: boolean
    uuid?: boolean
    ip?: boolean
    reason?: boolean
    banned_by_uuid?: boolean
    banned_by_name?: boolean
    removed_by_uuid?: boolean
    removed_by_name?: boolean
    removed_by_reason?: boolean
    removed_by_date?: boolean
    time?: boolean
    until?: boolean
    template?: boolean
    server_scope?: boolean
    server_origin?: boolean
    silent?: boolean
    ipban?: boolean
    ipban_wildcard?: boolean
    active?: boolean
  }


  export type litebans_mutesGetPayload<S extends boolean | null | undefined | litebans_mutesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_mutes :
    S extends undefined ? never :
    S extends { include: any } & (litebans_mutesArgs | litebans_mutesFindManyArgs)
    ? litebans_mutes 
    : S extends { select: any } & (litebans_mutesArgs | litebans_mutesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_mutes ? litebans_mutes[P] : never
  } 
      : litebans_mutes


  type litebans_mutesCountArgs = 
    Omit<litebans_mutesFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_mutesCountAggregateInputType | true
    }

  export interface litebans_mutesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_mutes that matches the filter.
     * @param {litebans_mutesFindUniqueArgs} args - Arguments to find a Litebans_mutes
     * @example
     * // Get one Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_mutesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_mutesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_mutes'> extends True ? Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>> : Prisma__litebans_mutesClient<litebans_mutesGetPayload<T> | null, null>

    /**
     * Find one Litebans_mutes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_mutesFindUniqueOrThrowArgs} args - Arguments to find a Litebans_mutes
     * @example
     * // Get one Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_mutesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_mutesFindUniqueOrThrowArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Find the first Litebans_mutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_mutesFindFirstArgs} args - Arguments to find a Litebans_mutes
     * @example
     * // Get one Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_mutesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_mutesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_mutes'> extends True ? Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>> : Prisma__litebans_mutesClient<litebans_mutesGetPayload<T> | null, null>

    /**
     * Find the first Litebans_mutes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_mutesFindFirstOrThrowArgs} args - Arguments to find a Litebans_mutes
     * @example
     * // Get one Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_mutesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_mutesFindFirstOrThrowArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Find zero or more Litebans_mutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_mutesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findMany()
     * 
     * // Get first 10 Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_mutesWithIdOnly = await prisma.litebans_mutes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_mutesFindManyArgs>(
      args?: SelectSubset<T, litebans_mutesFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_mutesGetPayload<T>>>

    /**
     * Create a Litebans_mutes.
     * @param {litebans_mutesCreateArgs} args - Arguments to create a Litebans_mutes.
     * @example
     * // Create one Litebans_mutes
     * const Litebans_mutes = await prisma.litebans_mutes.create({
     *   data: {
     *     // ... data to create a Litebans_mutes
     *   }
     * })
     * 
    **/
    create<T extends litebans_mutesCreateArgs>(
      args: SelectSubset<T, litebans_mutesCreateArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Create many Litebans_mutes.
     *     @param {litebans_mutesCreateManyArgs} args - Arguments to create many Litebans_mutes.
     *     @example
     *     // Create many Litebans_mutes
     *     const litebans_mutes = await prisma.litebans_mutes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_mutesCreateManyArgs>(
      args?: SelectSubset<T, litebans_mutesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_mutes.
     * @param {litebans_mutesDeleteArgs} args - Arguments to delete one Litebans_mutes.
     * @example
     * // Delete one Litebans_mutes
     * const Litebans_mutes = await prisma.litebans_mutes.delete({
     *   where: {
     *     // ... filter to delete one Litebans_mutes
     *   }
     * })
     * 
    **/
    delete<T extends litebans_mutesDeleteArgs>(
      args: SelectSubset<T, litebans_mutesDeleteArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Update one Litebans_mutes.
     * @param {litebans_mutesUpdateArgs} args - Arguments to update one Litebans_mutes.
     * @example
     * // Update one Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_mutesUpdateArgs>(
      args: SelectSubset<T, litebans_mutesUpdateArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Delete zero or more Litebans_mutes.
     * @param {litebans_mutesDeleteManyArgs} args - Arguments to filter Litebans_mutes to delete.
     * @example
     * // Delete a few Litebans_mutes
     * const { count } = await prisma.litebans_mutes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_mutesDeleteManyArgs>(
      args?: SelectSubset<T, litebans_mutesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_mutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_mutesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_mutesUpdateManyArgs>(
      args: SelectSubset<T, litebans_mutesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_mutes.
     * @param {litebans_mutesUpsertArgs} args - Arguments to update or create a Litebans_mutes.
     * @example
     * // Update or create a Litebans_mutes
     * const litebans_mutes = await prisma.litebans_mutes.upsert({
     *   create: {
     *     // ... data to create a Litebans_mutes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_mutes we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_mutesUpsertArgs>(
      args: SelectSubset<T, litebans_mutesUpsertArgs>
    ): Prisma__litebans_mutesClient<litebans_mutesGetPayload<T>>

    /**
     * Count the number of Litebans_mutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_mutesCountArgs} args - Arguments to filter Litebans_mutes to count.
     * @example
     * // Count the number of Litebans_mutes
     * const count = await prisma.litebans_mutes.count({
     *   where: {
     *     // ... the filter for the Litebans_mutes we want to count
     *   }
     * })
    **/
    count<T extends litebans_mutesCountArgs>(
      args?: Subset<T, litebans_mutesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_mutesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_mutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_mutesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_mutesAggregateArgs>(args: Subset<T, Litebans_mutesAggregateArgs>): Prisma.PrismaPromise<GetLitebans_mutesAggregateType<T>>

    /**
     * Group by Litebans_mutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_mutesGroupByArgs} args - Group by arguments.
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
      T extends Litebans_mutesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_mutesGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_mutesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_mutesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_mutesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_mutes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_mutesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_mutes base type for findUnique actions
   */
  export type litebans_mutesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter, which litebans_mutes to fetch.
     */
    where: litebans_mutesWhereUniqueInput
  }

  /**
   * litebans_mutes findUnique
   */
  export interface litebans_mutesFindUniqueArgs extends litebans_mutesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_mutes findUniqueOrThrow
   */
  export type litebans_mutesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter, which litebans_mutes to fetch.
     */
    where: litebans_mutesWhereUniqueInput
  }


  /**
   * litebans_mutes base type for findFirst actions
   */
  export type litebans_mutesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter, which litebans_mutes to fetch.
     */
    where?: litebans_mutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_mutes to fetch.
     */
    orderBy?: Enumerable<litebans_mutesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_mutes.
     */
    cursor?: litebans_mutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_mutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_mutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_mutes.
     */
    distinct?: Enumerable<Litebans_mutesScalarFieldEnum>
  }

  /**
   * litebans_mutes findFirst
   */
  export interface litebans_mutesFindFirstArgs extends litebans_mutesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_mutes findFirstOrThrow
   */
  export type litebans_mutesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter, which litebans_mutes to fetch.
     */
    where?: litebans_mutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_mutes to fetch.
     */
    orderBy?: Enumerable<litebans_mutesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_mutes.
     */
    cursor?: litebans_mutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_mutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_mutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_mutes.
     */
    distinct?: Enumerable<Litebans_mutesScalarFieldEnum>
  }


  /**
   * litebans_mutes findMany
   */
  export type litebans_mutesFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter, which litebans_mutes to fetch.
     */
    where?: litebans_mutesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_mutes to fetch.
     */
    orderBy?: Enumerable<litebans_mutesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_mutes.
     */
    cursor?: litebans_mutesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_mutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_mutes.
     */
    skip?: number
    distinct?: Enumerable<Litebans_mutesScalarFieldEnum>
  }


  /**
   * litebans_mutes create
   */
  export type litebans_mutesCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * The data needed to create a litebans_mutes.
     */
    data: XOR<litebans_mutesCreateInput, litebans_mutesUncheckedCreateInput>
  }


  /**
   * litebans_mutes createMany
   */
  export type litebans_mutesCreateManyArgs = {
    /**
     * The data used to create many litebans_mutes.
     */
    data: Enumerable<litebans_mutesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_mutes update
   */
  export type litebans_mutesUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * The data needed to update a litebans_mutes.
     */
    data: XOR<litebans_mutesUpdateInput, litebans_mutesUncheckedUpdateInput>
    /**
     * Choose, which litebans_mutes to update.
     */
    where: litebans_mutesWhereUniqueInput
  }


  /**
   * litebans_mutes updateMany
   */
  export type litebans_mutesUpdateManyArgs = {
    /**
     * The data used to update litebans_mutes.
     */
    data: XOR<litebans_mutesUpdateManyMutationInput, litebans_mutesUncheckedUpdateManyInput>
    /**
     * Filter which litebans_mutes to update
     */
    where?: litebans_mutesWhereInput
  }


  /**
   * litebans_mutes upsert
   */
  export type litebans_mutesUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * The filter to search for the litebans_mutes to update in case it exists.
     */
    where: litebans_mutesWhereUniqueInput
    /**
     * In case the litebans_mutes found by the `where` argument doesn't exist, create a new litebans_mutes with this data.
     */
    create: XOR<litebans_mutesCreateInput, litebans_mutesUncheckedCreateInput>
    /**
     * In case the litebans_mutes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_mutesUpdateInput, litebans_mutesUncheckedUpdateInput>
  }


  /**
   * litebans_mutes delete
   */
  export type litebans_mutesDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
    /**
     * Filter which litebans_mutes to delete.
     */
    where: litebans_mutesWhereUniqueInput
  }


  /**
   * litebans_mutes deleteMany
   */
  export type litebans_mutesDeleteManyArgs = {
    /**
     * Filter which litebans_mutes to delete
     */
    where?: litebans_mutesWhereInput
  }


  /**
   * litebans_mutes without action
   */
  export type litebans_mutesArgs = {
    /**
     * Select specific fields to fetch from the litebans_mutes
     */
    select?: litebans_mutesSelect | null
  }



  /**
   * Model litebans_servers
   */


  export type AggregateLitebans_servers = {
    _count: Litebans_serversCountAggregateOutputType | null
    _avg: Litebans_serversAvgAggregateOutputType | null
    _sum: Litebans_serversSumAggregateOutputType | null
    _min: Litebans_serversMinAggregateOutputType | null
    _max: Litebans_serversMaxAggregateOutputType | null
  }

  export type Litebans_serversAvgAggregateOutputType = {
    id: number | null
  }

  export type Litebans_serversSumAggregateOutputType = {
    id: bigint | null
  }

  export type Litebans_serversMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    uuid: string | null
    date: Date | null
  }

  export type Litebans_serversMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    uuid: string | null
    date: Date | null
  }

  export type Litebans_serversCountAggregateOutputType = {
    id: number
    name: number
    uuid: number
    date: number
    _all: number
  }


  export type Litebans_serversAvgAggregateInputType = {
    id?: true
  }

  export type Litebans_serversSumAggregateInputType = {
    id?: true
  }

  export type Litebans_serversMinAggregateInputType = {
    id?: true
    name?: true
    uuid?: true
    date?: true
  }

  export type Litebans_serversMaxAggregateInputType = {
    id?: true
    name?: true
    uuid?: true
    date?: true
  }

  export type Litebans_serversCountAggregateInputType = {
    id?: true
    name?: true
    uuid?: true
    date?: true
    _all?: true
  }

  export type Litebans_serversAggregateArgs = {
    /**
     * Filter which litebans_servers to aggregate.
     */
    where?: litebans_serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_servers to fetch.
     */
    orderBy?: Enumerable<litebans_serversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_servers
    **/
    _count?: true | Litebans_serversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_serversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_serversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_serversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_serversMaxAggregateInputType
  }

  export type GetLitebans_serversAggregateType<T extends Litebans_serversAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_servers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_servers[P]>
      : GetScalarType<T[P], AggregateLitebans_servers[P]>
  }




  export type Litebans_serversGroupByArgs = {
    where?: litebans_serversWhereInput
    orderBy?: Enumerable<litebans_serversOrderByWithAggregationInput>
    by: Litebans_serversScalarFieldEnum[]
    having?: litebans_serversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_serversCountAggregateInputType | true
    _avg?: Litebans_serversAvgAggregateInputType
    _sum?: Litebans_serversSumAggregateInputType
    _min?: Litebans_serversMinAggregateInputType
    _max?: Litebans_serversMaxAggregateInputType
  }


  export type Litebans_serversGroupByOutputType = {
    id: bigint
    name: string
    uuid: string
    date: Date | null
    _count: Litebans_serversCountAggregateOutputType | null
    _avg: Litebans_serversAvgAggregateOutputType | null
    _sum: Litebans_serversSumAggregateOutputType | null
    _min: Litebans_serversMinAggregateOutputType | null
    _max: Litebans_serversMaxAggregateOutputType | null
  }

  type GetLitebans_serversGroupByPayload<T extends Litebans_serversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_serversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_serversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_serversGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_serversGroupByOutputType[P]>
        }
      >
    >


  export type litebans_serversSelect = {
    id?: boolean
    name?: boolean
    uuid?: boolean
    date?: boolean
  }


  export type litebans_serversGetPayload<S extends boolean | null | undefined | litebans_serversArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_servers :
    S extends undefined ? never :
    S extends { include: any } & (litebans_serversArgs | litebans_serversFindManyArgs)
    ? litebans_servers 
    : S extends { select: any } & (litebans_serversArgs | litebans_serversFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_servers ? litebans_servers[P] : never
  } 
      : litebans_servers


  type litebans_serversCountArgs = 
    Omit<litebans_serversFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_serversCountAggregateInputType | true
    }

  export interface litebans_serversDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_servers that matches the filter.
     * @param {litebans_serversFindUniqueArgs} args - Arguments to find a Litebans_servers
     * @example
     * // Get one Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_serversFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_serversFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_servers'> extends True ? Prisma__litebans_serversClient<litebans_serversGetPayload<T>> : Prisma__litebans_serversClient<litebans_serversGetPayload<T> | null, null>

    /**
     * Find one Litebans_servers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_serversFindUniqueOrThrowArgs} args - Arguments to find a Litebans_servers
     * @example
     * // Get one Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_serversFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_serversFindUniqueOrThrowArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Find the first Litebans_servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_serversFindFirstArgs} args - Arguments to find a Litebans_servers
     * @example
     * // Get one Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_serversFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_serversFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_servers'> extends True ? Prisma__litebans_serversClient<litebans_serversGetPayload<T>> : Prisma__litebans_serversClient<litebans_serversGetPayload<T> | null, null>

    /**
     * Find the first Litebans_servers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_serversFindFirstOrThrowArgs} args - Arguments to find a Litebans_servers
     * @example
     * // Get one Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_serversFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_serversFindFirstOrThrowArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Find zero or more Litebans_servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_serversFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findMany()
     * 
     * // Get first 10 Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_serversWithIdOnly = await prisma.litebans_servers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_serversFindManyArgs>(
      args?: SelectSubset<T, litebans_serversFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_serversGetPayload<T>>>

    /**
     * Create a Litebans_servers.
     * @param {litebans_serversCreateArgs} args - Arguments to create a Litebans_servers.
     * @example
     * // Create one Litebans_servers
     * const Litebans_servers = await prisma.litebans_servers.create({
     *   data: {
     *     // ... data to create a Litebans_servers
     *   }
     * })
     * 
    **/
    create<T extends litebans_serversCreateArgs>(
      args: SelectSubset<T, litebans_serversCreateArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Create many Litebans_servers.
     *     @param {litebans_serversCreateManyArgs} args - Arguments to create many Litebans_servers.
     *     @example
     *     // Create many Litebans_servers
     *     const litebans_servers = await prisma.litebans_servers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_serversCreateManyArgs>(
      args?: SelectSubset<T, litebans_serversCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_servers.
     * @param {litebans_serversDeleteArgs} args - Arguments to delete one Litebans_servers.
     * @example
     * // Delete one Litebans_servers
     * const Litebans_servers = await prisma.litebans_servers.delete({
     *   where: {
     *     // ... filter to delete one Litebans_servers
     *   }
     * })
     * 
    **/
    delete<T extends litebans_serversDeleteArgs>(
      args: SelectSubset<T, litebans_serversDeleteArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Update one Litebans_servers.
     * @param {litebans_serversUpdateArgs} args - Arguments to update one Litebans_servers.
     * @example
     * // Update one Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_serversUpdateArgs>(
      args: SelectSubset<T, litebans_serversUpdateArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Delete zero or more Litebans_servers.
     * @param {litebans_serversDeleteManyArgs} args - Arguments to filter Litebans_servers to delete.
     * @example
     * // Delete a few Litebans_servers
     * const { count } = await prisma.litebans_servers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_serversDeleteManyArgs>(
      args?: SelectSubset<T, litebans_serversDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_serversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_serversUpdateManyArgs>(
      args: SelectSubset<T, litebans_serversUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_servers.
     * @param {litebans_serversUpsertArgs} args - Arguments to update or create a Litebans_servers.
     * @example
     * // Update or create a Litebans_servers
     * const litebans_servers = await prisma.litebans_servers.upsert({
     *   create: {
     *     // ... data to create a Litebans_servers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_servers we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_serversUpsertArgs>(
      args: SelectSubset<T, litebans_serversUpsertArgs>
    ): Prisma__litebans_serversClient<litebans_serversGetPayload<T>>

    /**
     * Count the number of Litebans_servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_serversCountArgs} args - Arguments to filter Litebans_servers to count.
     * @example
     * // Count the number of Litebans_servers
     * const count = await prisma.litebans_servers.count({
     *   where: {
     *     // ... the filter for the Litebans_servers we want to count
     *   }
     * })
    **/
    count<T extends litebans_serversCountArgs>(
      args?: Subset<T, litebans_serversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_serversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_serversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_serversAggregateArgs>(args: Subset<T, Litebans_serversAggregateArgs>): Prisma.PrismaPromise<GetLitebans_serversAggregateType<T>>

    /**
     * Group by Litebans_servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_serversGroupByArgs} args - Group by arguments.
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
      T extends Litebans_serversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_serversGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_serversGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_serversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_serversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_servers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_serversClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_servers base type for findUnique actions
   */
  export type litebans_serversFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter, which litebans_servers to fetch.
     */
    where: litebans_serversWhereUniqueInput
  }

  /**
   * litebans_servers findUnique
   */
  export interface litebans_serversFindUniqueArgs extends litebans_serversFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_servers findUniqueOrThrow
   */
  export type litebans_serversFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter, which litebans_servers to fetch.
     */
    where: litebans_serversWhereUniqueInput
  }


  /**
   * litebans_servers base type for findFirst actions
   */
  export type litebans_serversFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter, which litebans_servers to fetch.
     */
    where?: litebans_serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_servers to fetch.
     */
    orderBy?: Enumerable<litebans_serversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_servers.
     */
    cursor?: litebans_serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_servers.
     */
    distinct?: Enumerable<Litebans_serversScalarFieldEnum>
  }

  /**
   * litebans_servers findFirst
   */
  export interface litebans_serversFindFirstArgs extends litebans_serversFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_servers findFirstOrThrow
   */
  export type litebans_serversFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter, which litebans_servers to fetch.
     */
    where?: litebans_serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_servers to fetch.
     */
    orderBy?: Enumerable<litebans_serversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_servers.
     */
    cursor?: litebans_serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_servers.
     */
    distinct?: Enumerable<Litebans_serversScalarFieldEnum>
  }


  /**
   * litebans_servers findMany
   */
  export type litebans_serversFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter, which litebans_servers to fetch.
     */
    where?: litebans_serversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_servers to fetch.
     */
    orderBy?: Enumerable<litebans_serversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_servers.
     */
    cursor?: litebans_serversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_servers.
     */
    skip?: number
    distinct?: Enumerable<Litebans_serversScalarFieldEnum>
  }


  /**
   * litebans_servers create
   */
  export type litebans_serversCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * The data needed to create a litebans_servers.
     */
    data: XOR<litebans_serversCreateInput, litebans_serversUncheckedCreateInput>
  }


  /**
   * litebans_servers createMany
   */
  export type litebans_serversCreateManyArgs = {
    /**
     * The data used to create many litebans_servers.
     */
    data: Enumerable<litebans_serversCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_servers update
   */
  export type litebans_serversUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * The data needed to update a litebans_servers.
     */
    data: XOR<litebans_serversUpdateInput, litebans_serversUncheckedUpdateInput>
    /**
     * Choose, which litebans_servers to update.
     */
    where: litebans_serversWhereUniqueInput
  }


  /**
   * litebans_servers updateMany
   */
  export type litebans_serversUpdateManyArgs = {
    /**
     * The data used to update litebans_servers.
     */
    data: XOR<litebans_serversUpdateManyMutationInput, litebans_serversUncheckedUpdateManyInput>
    /**
     * Filter which litebans_servers to update
     */
    where?: litebans_serversWhereInput
  }


  /**
   * litebans_servers upsert
   */
  export type litebans_serversUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * The filter to search for the litebans_servers to update in case it exists.
     */
    where: litebans_serversWhereUniqueInput
    /**
     * In case the litebans_servers found by the `where` argument doesn't exist, create a new litebans_servers with this data.
     */
    create: XOR<litebans_serversCreateInput, litebans_serversUncheckedCreateInput>
    /**
     * In case the litebans_servers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_serversUpdateInput, litebans_serversUncheckedUpdateInput>
  }


  /**
   * litebans_servers delete
   */
  export type litebans_serversDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
    /**
     * Filter which litebans_servers to delete.
     */
    where: litebans_serversWhereUniqueInput
  }


  /**
   * litebans_servers deleteMany
   */
  export type litebans_serversDeleteManyArgs = {
    /**
     * Filter which litebans_servers to delete
     */
    where?: litebans_serversWhereInput
  }


  /**
   * litebans_servers without action
   */
  export type litebans_serversArgs = {
    /**
     * Select specific fields to fetch from the litebans_servers
     */
    select?: litebans_serversSelect | null
  }



  /**
   * Model litebans_sync
   */


  export type AggregateLitebans_sync = {
    _count: Litebans_syncCountAggregateOutputType | null
    _avg: Litebans_syncAvgAggregateOutputType | null
    _sum: Litebans_syncSumAggregateOutputType | null
    _min: Litebans_syncMinAggregateOutputType | null
    _max: Litebans_syncMaxAggregateOutputType | null
  }

  export type Litebans_syncAvgAggregateOutputType = {
    id: number | null
    info: number | null
  }

  export type Litebans_syncSumAggregateOutputType = {
    id: bigint | null
    info: number | null
  }

  export type Litebans_syncMinAggregateOutputType = {
    id: bigint | null
    info: number | null
    msg: string | null
    time: Date | null
  }

  export type Litebans_syncMaxAggregateOutputType = {
    id: bigint | null
    info: number | null
    msg: string | null
    time: Date | null
  }

  export type Litebans_syncCountAggregateOutputType = {
    id: number
    info: number
    msg: number
    time: number
    _all: number
  }


  export type Litebans_syncAvgAggregateInputType = {
    id?: true
    info?: true
  }

  export type Litebans_syncSumAggregateInputType = {
    id?: true
    info?: true
  }

  export type Litebans_syncMinAggregateInputType = {
    id?: true
    info?: true
    msg?: true
    time?: true
  }

  export type Litebans_syncMaxAggregateInputType = {
    id?: true
    info?: true
    msg?: true
    time?: true
  }

  export type Litebans_syncCountAggregateInputType = {
    id?: true
    info?: true
    msg?: true
    time?: true
    _all?: true
  }

  export type Litebans_syncAggregateArgs = {
    /**
     * Filter which litebans_sync to aggregate.
     */
    where?: litebans_syncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_syncs to fetch.
     */
    orderBy?: Enumerable<litebans_syncOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_syncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_syncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_syncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_syncs
    **/
    _count?: true | Litebans_syncCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_syncAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_syncSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_syncMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_syncMaxAggregateInputType
  }

  export type GetLitebans_syncAggregateType<T extends Litebans_syncAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_sync]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_sync[P]>
      : GetScalarType<T[P], AggregateLitebans_sync[P]>
  }




  export type Litebans_syncGroupByArgs = {
    where?: litebans_syncWhereInput
    orderBy?: Enumerable<litebans_syncOrderByWithAggregationInput>
    by: Litebans_syncScalarFieldEnum[]
    having?: litebans_syncScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_syncCountAggregateInputType | true
    _avg?: Litebans_syncAvgAggregateInputType
    _sum?: Litebans_syncSumAggregateInputType
    _min?: Litebans_syncMinAggregateInputType
    _max?: Litebans_syncMaxAggregateInputType
  }


  export type Litebans_syncGroupByOutputType = {
    id: bigint
    info: number
    msg: string
    time: Date | null
    _count: Litebans_syncCountAggregateOutputType | null
    _avg: Litebans_syncAvgAggregateOutputType | null
    _sum: Litebans_syncSumAggregateOutputType | null
    _min: Litebans_syncMinAggregateOutputType | null
    _max: Litebans_syncMaxAggregateOutputType | null
  }

  type GetLitebans_syncGroupByPayload<T extends Litebans_syncGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_syncGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_syncGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_syncGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_syncGroupByOutputType[P]>
        }
      >
    >


  export type litebans_syncSelect = {
    id?: boolean
    info?: boolean
    msg?: boolean
    time?: boolean
  }


  export type litebans_syncGetPayload<S extends boolean | null | undefined | litebans_syncArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_sync :
    S extends undefined ? never :
    S extends { include: any } & (litebans_syncArgs | litebans_syncFindManyArgs)
    ? litebans_sync 
    : S extends { select: any } & (litebans_syncArgs | litebans_syncFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_sync ? litebans_sync[P] : never
  } 
      : litebans_sync


  type litebans_syncCountArgs = 
    Omit<litebans_syncFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_syncCountAggregateInputType | true
    }

  export interface litebans_syncDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_sync that matches the filter.
     * @param {litebans_syncFindUniqueArgs} args - Arguments to find a Litebans_sync
     * @example
     * // Get one Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_syncFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_syncFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_sync'> extends True ? Prisma__litebans_syncClient<litebans_syncGetPayload<T>> : Prisma__litebans_syncClient<litebans_syncGetPayload<T> | null, null>

    /**
     * Find one Litebans_sync that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_syncFindUniqueOrThrowArgs} args - Arguments to find a Litebans_sync
     * @example
     * // Get one Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_syncFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_syncFindUniqueOrThrowArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Find the first Litebans_sync that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_syncFindFirstArgs} args - Arguments to find a Litebans_sync
     * @example
     * // Get one Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_syncFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_syncFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_sync'> extends True ? Prisma__litebans_syncClient<litebans_syncGetPayload<T>> : Prisma__litebans_syncClient<litebans_syncGetPayload<T> | null, null>

    /**
     * Find the first Litebans_sync that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_syncFindFirstOrThrowArgs} args - Arguments to find a Litebans_sync
     * @example
     * // Get one Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_syncFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_syncFindFirstOrThrowArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Find zero or more Litebans_syncs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_syncFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_syncs
     * const litebans_syncs = await prisma.litebans_sync.findMany()
     * 
     * // Get first 10 Litebans_syncs
     * const litebans_syncs = await prisma.litebans_sync.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_syncWithIdOnly = await prisma.litebans_sync.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_syncFindManyArgs>(
      args?: SelectSubset<T, litebans_syncFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_syncGetPayload<T>>>

    /**
     * Create a Litebans_sync.
     * @param {litebans_syncCreateArgs} args - Arguments to create a Litebans_sync.
     * @example
     * // Create one Litebans_sync
     * const Litebans_sync = await prisma.litebans_sync.create({
     *   data: {
     *     // ... data to create a Litebans_sync
     *   }
     * })
     * 
    **/
    create<T extends litebans_syncCreateArgs>(
      args: SelectSubset<T, litebans_syncCreateArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Create many Litebans_syncs.
     *     @param {litebans_syncCreateManyArgs} args - Arguments to create many Litebans_syncs.
     *     @example
     *     // Create many Litebans_syncs
     *     const litebans_sync = await prisma.litebans_sync.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_syncCreateManyArgs>(
      args?: SelectSubset<T, litebans_syncCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_sync.
     * @param {litebans_syncDeleteArgs} args - Arguments to delete one Litebans_sync.
     * @example
     * // Delete one Litebans_sync
     * const Litebans_sync = await prisma.litebans_sync.delete({
     *   where: {
     *     // ... filter to delete one Litebans_sync
     *   }
     * })
     * 
    **/
    delete<T extends litebans_syncDeleteArgs>(
      args: SelectSubset<T, litebans_syncDeleteArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Update one Litebans_sync.
     * @param {litebans_syncUpdateArgs} args - Arguments to update one Litebans_sync.
     * @example
     * // Update one Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_syncUpdateArgs>(
      args: SelectSubset<T, litebans_syncUpdateArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Delete zero or more Litebans_syncs.
     * @param {litebans_syncDeleteManyArgs} args - Arguments to filter Litebans_syncs to delete.
     * @example
     * // Delete a few Litebans_syncs
     * const { count } = await prisma.litebans_sync.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_syncDeleteManyArgs>(
      args?: SelectSubset<T, litebans_syncDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_syncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_syncUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_syncs
     * const litebans_sync = await prisma.litebans_sync.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_syncUpdateManyArgs>(
      args: SelectSubset<T, litebans_syncUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_sync.
     * @param {litebans_syncUpsertArgs} args - Arguments to update or create a Litebans_sync.
     * @example
     * // Update or create a Litebans_sync
     * const litebans_sync = await prisma.litebans_sync.upsert({
     *   create: {
     *     // ... data to create a Litebans_sync
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_sync we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_syncUpsertArgs>(
      args: SelectSubset<T, litebans_syncUpsertArgs>
    ): Prisma__litebans_syncClient<litebans_syncGetPayload<T>>

    /**
     * Count the number of Litebans_syncs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_syncCountArgs} args - Arguments to filter Litebans_syncs to count.
     * @example
     * // Count the number of Litebans_syncs
     * const count = await prisma.litebans_sync.count({
     *   where: {
     *     // ... the filter for the Litebans_syncs we want to count
     *   }
     * })
    **/
    count<T extends litebans_syncCountArgs>(
      args?: Subset<T, litebans_syncCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_syncCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_sync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_syncAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_syncAggregateArgs>(args: Subset<T, Litebans_syncAggregateArgs>): Prisma.PrismaPromise<GetLitebans_syncAggregateType<T>>

    /**
     * Group by Litebans_sync.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_syncGroupByArgs} args - Group by arguments.
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
      T extends Litebans_syncGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_syncGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_syncGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_syncGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_syncGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_sync.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_syncClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_sync base type for findUnique actions
   */
  export type litebans_syncFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter, which litebans_sync to fetch.
     */
    where: litebans_syncWhereUniqueInput
  }

  /**
   * litebans_sync findUnique
   */
  export interface litebans_syncFindUniqueArgs extends litebans_syncFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_sync findUniqueOrThrow
   */
  export type litebans_syncFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter, which litebans_sync to fetch.
     */
    where: litebans_syncWhereUniqueInput
  }


  /**
   * litebans_sync base type for findFirst actions
   */
  export type litebans_syncFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter, which litebans_sync to fetch.
     */
    where?: litebans_syncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_syncs to fetch.
     */
    orderBy?: Enumerable<litebans_syncOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_syncs.
     */
    cursor?: litebans_syncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_syncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_syncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_syncs.
     */
    distinct?: Enumerable<Litebans_syncScalarFieldEnum>
  }

  /**
   * litebans_sync findFirst
   */
  export interface litebans_syncFindFirstArgs extends litebans_syncFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_sync findFirstOrThrow
   */
  export type litebans_syncFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter, which litebans_sync to fetch.
     */
    where?: litebans_syncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_syncs to fetch.
     */
    orderBy?: Enumerable<litebans_syncOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_syncs.
     */
    cursor?: litebans_syncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_syncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_syncs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_syncs.
     */
    distinct?: Enumerable<Litebans_syncScalarFieldEnum>
  }


  /**
   * litebans_sync findMany
   */
  export type litebans_syncFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter, which litebans_syncs to fetch.
     */
    where?: litebans_syncWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_syncs to fetch.
     */
    orderBy?: Enumerable<litebans_syncOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_syncs.
     */
    cursor?: litebans_syncWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_syncs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_syncs.
     */
    skip?: number
    distinct?: Enumerable<Litebans_syncScalarFieldEnum>
  }


  /**
   * litebans_sync create
   */
  export type litebans_syncCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * The data needed to create a litebans_sync.
     */
    data: XOR<litebans_syncCreateInput, litebans_syncUncheckedCreateInput>
  }


  /**
   * litebans_sync createMany
   */
  export type litebans_syncCreateManyArgs = {
    /**
     * The data used to create many litebans_syncs.
     */
    data: Enumerable<litebans_syncCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_sync update
   */
  export type litebans_syncUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * The data needed to update a litebans_sync.
     */
    data: XOR<litebans_syncUpdateInput, litebans_syncUncheckedUpdateInput>
    /**
     * Choose, which litebans_sync to update.
     */
    where: litebans_syncWhereUniqueInput
  }


  /**
   * litebans_sync updateMany
   */
  export type litebans_syncUpdateManyArgs = {
    /**
     * The data used to update litebans_syncs.
     */
    data: XOR<litebans_syncUpdateManyMutationInput, litebans_syncUncheckedUpdateManyInput>
    /**
     * Filter which litebans_syncs to update
     */
    where?: litebans_syncWhereInput
  }


  /**
   * litebans_sync upsert
   */
  export type litebans_syncUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * The filter to search for the litebans_sync to update in case it exists.
     */
    where: litebans_syncWhereUniqueInput
    /**
     * In case the litebans_sync found by the `where` argument doesn't exist, create a new litebans_sync with this data.
     */
    create: XOR<litebans_syncCreateInput, litebans_syncUncheckedCreateInput>
    /**
     * In case the litebans_sync was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_syncUpdateInput, litebans_syncUncheckedUpdateInput>
  }


  /**
   * litebans_sync delete
   */
  export type litebans_syncDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
    /**
     * Filter which litebans_sync to delete.
     */
    where: litebans_syncWhereUniqueInput
  }


  /**
   * litebans_sync deleteMany
   */
  export type litebans_syncDeleteManyArgs = {
    /**
     * Filter which litebans_syncs to delete
     */
    where?: litebans_syncWhereInput
  }


  /**
   * litebans_sync without action
   */
  export type litebans_syncArgs = {
    /**
     * Select specific fields to fetch from the litebans_sync
     */
    select?: litebans_syncSelect | null
  }



  /**
   * Model litebans_warnings
   */


  export type AggregateLitebans_warnings = {
    _count: Litebans_warningsCountAggregateOutputType | null
    _avg: Litebans_warningsAvgAggregateOutputType | null
    _sum: Litebans_warningsSumAggregateOutputType | null
    _min: Litebans_warningsMinAggregateOutputType | null
    _max: Litebans_warningsMaxAggregateOutputType | null
  }

  export type Litebans_warningsAvgAggregateOutputType = {
    id: number | null
    time: number | null
    until: number | null
    template: number | null
  }

  export type Litebans_warningsSumAggregateOutputType = {
    id: bigint | null
    time: bigint | null
    until: bigint | null
    template: number | null
  }

  export type Litebans_warningsMinAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
    warned: boolean | null
  }

  export type Litebans_warningsMaxAggregateOutputType = {
    id: bigint | null
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string | null
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint | null
    until: bigint | null
    template: number | null
    server_scope: string | null
    server_origin: string | null
    silent: boolean | null
    ipban: boolean | null
    ipban_wildcard: boolean | null
    active: boolean | null
    warned: boolean | null
  }

  export type Litebans_warningsCountAggregateOutputType = {
    id: number
    uuid: number
    ip: number
    reason: number
    banned_by_uuid: number
    banned_by_name: number
    removed_by_uuid: number
    removed_by_name: number
    removed_by_reason: number
    removed_by_date: number
    time: number
    until: number
    template: number
    server_scope: number
    server_origin: number
    silent: number
    ipban: number
    ipban_wildcard: number
    active: number
    warned: number
    _all: number
  }


  export type Litebans_warningsAvgAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_warningsSumAggregateInputType = {
    id?: true
    time?: true
    until?: true
    template?: true
  }

  export type Litebans_warningsMinAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    warned?: true
  }

  export type Litebans_warningsMaxAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    warned?: true
  }

  export type Litebans_warningsCountAggregateInputType = {
    id?: true
    uuid?: true
    ip?: true
    reason?: true
    banned_by_uuid?: true
    banned_by_name?: true
    removed_by_uuid?: true
    removed_by_name?: true
    removed_by_reason?: true
    removed_by_date?: true
    time?: true
    until?: true
    template?: true
    server_scope?: true
    server_origin?: true
    silent?: true
    ipban?: true
    ipban_wildcard?: true
    active?: true
    warned?: true
    _all?: true
  }

  export type Litebans_warningsAggregateArgs = {
    /**
     * Filter which litebans_warnings to aggregate.
     */
    where?: litebans_warningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_warnings to fetch.
     */
    orderBy?: Enumerable<litebans_warningsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: litebans_warningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned litebans_warnings
    **/
    _count?: true | Litebans_warningsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Litebans_warningsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Litebans_warningsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Litebans_warningsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Litebans_warningsMaxAggregateInputType
  }

  export type GetLitebans_warningsAggregateType<T extends Litebans_warningsAggregateArgs> = {
        [P in keyof T & keyof AggregateLitebans_warnings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitebans_warnings[P]>
      : GetScalarType<T[P], AggregateLitebans_warnings[P]>
  }




  export type Litebans_warningsGroupByArgs = {
    where?: litebans_warningsWhereInput
    orderBy?: Enumerable<litebans_warningsOrderByWithAggregationInput>
    by: Litebans_warningsScalarFieldEnum[]
    having?: litebans_warningsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Litebans_warningsCountAggregateInputType | true
    _avg?: Litebans_warningsAvgAggregateInputType
    _sum?: Litebans_warningsSumAggregateInputType
    _min?: Litebans_warningsMinAggregateInputType
    _max?: Litebans_warningsMaxAggregateInputType
  }


  export type Litebans_warningsGroupByOutputType = {
    id: bigint
    uuid: string | null
    ip: string | null
    reason: string | null
    banned_by_uuid: string
    banned_by_name: string | null
    removed_by_uuid: string | null
    removed_by_name: string | null
    removed_by_reason: string | null
    removed_by_date: Date | null
    time: bigint
    until: bigint
    template: number
    server_scope: string | null
    server_origin: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard: boolean
    active: boolean
    warned: boolean
    _count: Litebans_warningsCountAggregateOutputType | null
    _avg: Litebans_warningsAvgAggregateOutputType | null
    _sum: Litebans_warningsSumAggregateOutputType | null
    _min: Litebans_warningsMinAggregateOutputType | null
    _max: Litebans_warningsMaxAggregateOutputType | null
  }

  type GetLitebans_warningsGroupByPayload<T extends Litebans_warningsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Litebans_warningsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Litebans_warningsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Litebans_warningsGroupByOutputType[P]>
            : GetScalarType<T[P], Litebans_warningsGroupByOutputType[P]>
        }
      >
    >


  export type litebans_warningsSelect = {
    id?: boolean
    uuid?: boolean
    ip?: boolean
    reason?: boolean
    banned_by_uuid?: boolean
    banned_by_name?: boolean
    removed_by_uuid?: boolean
    removed_by_name?: boolean
    removed_by_reason?: boolean
    removed_by_date?: boolean
    time?: boolean
    until?: boolean
    template?: boolean
    server_scope?: boolean
    server_origin?: boolean
    silent?: boolean
    ipban?: boolean
    ipban_wildcard?: boolean
    active?: boolean
    warned?: boolean
  }


  export type litebans_warningsGetPayload<S extends boolean | null | undefined | litebans_warningsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? litebans_warnings :
    S extends undefined ? never :
    S extends { include: any } & (litebans_warningsArgs | litebans_warningsFindManyArgs)
    ? litebans_warnings 
    : S extends { select: any } & (litebans_warningsArgs | litebans_warningsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof litebans_warnings ? litebans_warnings[P] : never
  } 
      : litebans_warnings


  type litebans_warningsCountArgs = 
    Omit<litebans_warningsFindManyArgs, 'select' | 'include'> & {
      select?: Litebans_warningsCountAggregateInputType | true
    }

  export interface litebans_warningsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Litebans_warnings that matches the filter.
     * @param {litebans_warningsFindUniqueArgs} args - Arguments to find a Litebans_warnings
     * @example
     * // Get one Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends litebans_warningsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, litebans_warningsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'litebans_warnings'> extends True ? Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>> : Prisma__litebans_warningsClient<litebans_warningsGetPayload<T> | null, null>

    /**
     * Find one Litebans_warnings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {litebans_warningsFindUniqueOrThrowArgs} args - Arguments to find a Litebans_warnings
     * @example
     * // Get one Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends litebans_warningsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, litebans_warningsFindUniqueOrThrowArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Find the first Litebans_warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_warningsFindFirstArgs} args - Arguments to find a Litebans_warnings
     * @example
     * // Get one Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends litebans_warningsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, litebans_warningsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'litebans_warnings'> extends True ? Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>> : Prisma__litebans_warningsClient<litebans_warningsGetPayload<T> | null, null>

    /**
     * Find the first Litebans_warnings that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_warningsFindFirstOrThrowArgs} args - Arguments to find a Litebans_warnings
     * @example
     * // Get one Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends litebans_warningsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, litebans_warningsFindFirstOrThrowArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Find zero or more Litebans_warnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_warningsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findMany()
     * 
     * // Get first 10 Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litebans_warningsWithIdOnly = await prisma.litebans_warnings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends litebans_warningsFindManyArgs>(
      args?: SelectSubset<T, litebans_warningsFindManyArgs>
    ): Prisma.PrismaPromise<Array<litebans_warningsGetPayload<T>>>

    /**
     * Create a Litebans_warnings.
     * @param {litebans_warningsCreateArgs} args - Arguments to create a Litebans_warnings.
     * @example
     * // Create one Litebans_warnings
     * const Litebans_warnings = await prisma.litebans_warnings.create({
     *   data: {
     *     // ... data to create a Litebans_warnings
     *   }
     * })
     * 
    **/
    create<T extends litebans_warningsCreateArgs>(
      args: SelectSubset<T, litebans_warningsCreateArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Create many Litebans_warnings.
     *     @param {litebans_warningsCreateManyArgs} args - Arguments to create many Litebans_warnings.
     *     @example
     *     // Create many Litebans_warnings
     *     const litebans_warnings = await prisma.litebans_warnings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends litebans_warningsCreateManyArgs>(
      args?: SelectSubset<T, litebans_warningsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Litebans_warnings.
     * @param {litebans_warningsDeleteArgs} args - Arguments to delete one Litebans_warnings.
     * @example
     * // Delete one Litebans_warnings
     * const Litebans_warnings = await prisma.litebans_warnings.delete({
     *   where: {
     *     // ... filter to delete one Litebans_warnings
     *   }
     * })
     * 
    **/
    delete<T extends litebans_warningsDeleteArgs>(
      args: SelectSubset<T, litebans_warningsDeleteArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Update one Litebans_warnings.
     * @param {litebans_warningsUpdateArgs} args - Arguments to update one Litebans_warnings.
     * @example
     * // Update one Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends litebans_warningsUpdateArgs>(
      args: SelectSubset<T, litebans_warningsUpdateArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Delete zero or more Litebans_warnings.
     * @param {litebans_warningsDeleteManyArgs} args - Arguments to filter Litebans_warnings to delete.
     * @example
     * // Delete a few Litebans_warnings
     * const { count } = await prisma.litebans_warnings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends litebans_warningsDeleteManyArgs>(
      args?: SelectSubset<T, litebans_warningsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litebans_warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_warningsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends litebans_warningsUpdateManyArgs>(
      args: SelectSubset<T, litebans_warningsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litebans_warnings.
     * @param {litebans_warningsUpsertArgs} args - Arguments to update or create a Litebans_warnings.
     * @example
     * // Update or create a Litebans_warnings
     * const litebans_warnings = await prisma.litebans_warnings.upsert({
     *   create: {
     *     // ... data to create a Litebans_warnings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litebans_warnings we want to update
     *   }
     * })
    **/
    upsert<T extends litebans_warningsUpsertArgs>(
      args: SelectSubset<T, litebans_warningsUpsertArgs>
    ): Prisma__litebans_warningsClient<litebans_warningsGetPayload<T>>

    /**
     * Count the number of Litebans_warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {litebans_warningsCountArgs} args - Arguments to filter Litebans_warnings to count.
     * @example
     * // Count the number of Litebans_warnings
     * const count = await prisma.litebans_warnings.count({
     *   where: {
     *     // ... the filter for the Litebans_warnings we want to count
     *   }
     * })
    **/
    count<T extends litebans_warningsCountArgs>(
      args?: Subset<T, litebans_warningsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Litebans_warningsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litebans_warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_warningsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Litebans_warningsAggregateArgs>(args: Subset<T, Litebans_warningsAggregateArgs>): Prisma.PrismaPromise<GetLitebans_warningsAggregateType<T>>

    /**
     * Group by Litebans_warnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Litebans_warningsGroupByArgs} args - Group by arguments.
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
      T extends Litebans_warningsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Litebans_warningsGroupByArgs['orderBy'] }
        : { orderBy?: Litebans_warningsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Litebans_warningsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitebans_warningsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for litebans_warnings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__litebans_warningsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * litebans_warnings base type for findUnique actions
   */
  export type litebans_warningsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter, which litebans_warnings to fetch.
     */
    where: litebans_warningsWhereUniqueInput
  }

  /**
   * litebans_warnings findUnique
   */
  export interface litebans_warningsFindUniqueArgs extends litebans_warningsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_warnings findUniqueOrThrow
   */
  export type litebans_warningsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter, which litebans_warnings to fetch.
     */
    where: litebans_warningsWhereUniqueInput
  }


  /**
   * litebans_warnings base type for findFirst actions
   */
  export type litebans_warningsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter, which litebans_warnings to fetch.
     */
    where?: litebans_warningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_warnings to fetch.
     */
    orderBy?: Enumerable<litebans_warningsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_warnings.
     */
    cursor?: litebans_warningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_warnings.
     */
    distinct?: Enumerable<Litebans_warningsScalarFieldEnum>
  }

  /**
   * litebans_warnings findFirst
   */
  export interface litebans_warningsFindFirstArgs extends litebans_warningsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * litebans_warnings findFirstOrThrow
   */
  export type litebans_warningsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter, which litebans_warnings to fetch.
     */
    where?: litebans_warningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_warnings to fetch.
     */
    orderBy?: Enumerable<litebans_warningsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for litebans_warnings.
     */
    cursor?: litebans_warningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_warnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of litebans_warnings.
     */
    distinct?: Enumerable<Litebans_warningsScalarFieldEnum>
  }


  /**
   * litebans_warnings findMany
   */
  export type litebans_warningsFindManyArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter, which litebans_warnings to fetch.
     */
    where?: litebans_warningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of litebans_warnings to fetch.
     */
    orderBy?: Enumerable<litebans_warningsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing litebans_warnings.
     */
    cursor?: litebans_warningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` litebans_warnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` litebans_warnings.
     */
    skip?: number
    distinct?: Enumerable<Litebans_warningsScalarFieldEnum>
  }


  /**
   * litebans_warnings create
   */
  export type litebans_warningsCreateArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * The data needed to create a litebans_warnings.
     */
    data: XOR<litebans_warningsCreateInput, litebans_warningsUncheckedCreateInput>
  }


  /**
   * litebans_warnings createMany
   */
  export type litebans_warningsCreateManyArgs = {
    /**
     * The data used to create many litebans_warnings.
     */
    data: Enumerable<litebans_warningsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * litebans_warnings update
   */
  export type litebans_warningsUpdateArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * The data needed to update a litebans_warnings.
     */
    data: XOR<litebans_warningsUpdateInput, litebans_warningsUncheckedUpdateInput>
    /**
     * Choose, which litebans_warnings to update.
     */
    where: litebans_warningsWhereUniqueInput
  }


  /**
   * litebans_warnings updateMany
   */
  export type litebans_warningsUpdateManyArgs = {
    /**
     * The data used to update litebans_warnings.
     */
    data: XOR<litebans_warningsUpdateManyMutationInput, litebans_warningsUncheckedUpdateManyInput>
    /**
     * Filter which litebans_warnings to update
     */
    where?: litebans_warningsWhereInput
  }


  /**
   * litebans_warnings upsert
   */
  export type litebans_warningsUpsertArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * The filter to search for the litebans_warnings to update in case it exists.
     */
    where: litebans_warningsWhereUniqueInput
    /**
     * In case the litebans_warnings found by the `where` argument doesn't exist, create a new litebans_warnings with this data.
     */
    create: XOR<litebans_warningsCreateInput, litebans_warningsUncheckedCreateInput>
    /**
     * In case the litebans_warnings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<litebans_warningsUpdateInput, litebans_warningsUncheckedUpdateInput>
  }


  /**
   * litebans_warnings delete
   */
  export type litebans_warningsDeleteArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
    /**
     * Filter which litebans_warnings to delete.
     */
    where: litebans_warningsWhereUniqueInput
  }


  /**
   * litebans_warnings deleteMany
   */
  export type litebans_warningsDeleteManyArgs = {
    /**
     * Filter which litebans_warnings to delete
     */
    where?: litebans_warningsWhereInput
  }


  /**
   * litebans_warnings without action
   */
  export type litebans_warningsArgs = {
    /**
     * Select specific fields to fetch from the litebans_warnings
     */
    select?: litebans_warningsSelect | null
  }



  /**
   * Enums
   */

  export const Litebans_allowScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    type: 'type'
  };

  export type Litebans_allowScalarFieldEnum = (typeof Litebans_allowScalarFieldEnum)[keyof typeof Litebans_allowScalarFieldEnum]


  export const Litebans_bansScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    ip: 'ip',
    reason: 'reason',
    banned_by_uuid: 'banned_by_uuid',
    banned_by_name: 'banned_by_name',
    removed_by_uuid: 'removed_by_uuid',
    removed_by_name: 'removed_by_name',
    removed_by_reason: 'removed_by_reason',
    removed_by_date: 'removed_by_date',
    time: 'time',
    until: 'until',
    template: 'template',
    server_scope: 'server_scope',
    server_origin: 'server_origin',
    silent: 'silent',
    ipban: 'ipban',
    ipban_wildcard: 'ipban_wildcard',
    active: 'active'
  };

  export type Litebans_bansScalarFieldEnum = (typeof Litebans_bansScalarFieldEnum)[keyof typeof Litebans_bansScalarFieldEnum]


  export const Litebans_configScalarFieldEnum: {
    id: 'id',
    version: 'version',
    build: 'build',
    timezone: 'timezone'
  };

  export type Litebans_configScalarFieldEnum = (typeof Litebans_configScalarFieldEnum)[keyof typeof Litebans_configScalarFieldEnum]


  export const Litebans_historyScalarFieldEnum: {
    id: 'id',
    date: 'date',
    name: 'name',
    uuid: 'uuid',
    ip: 'ip'
  };

  export type Litebans_historyScalarFieldEnum = (typeof Litebans_historyScalarFieldEnum)[keyof typeof Litebans_historyScalarFieldEnum]


  export const Litebans_kicksScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    ip: 'ip',
    reason: 'reason',
    banned_by_uuid: 'banned_by_uuid',
    banned_by_name: 'banned_by_name',
    time: 'time',
    until: 'until',
    template: 'template',
    server_scope: 'server_scope',
    server_origin: 'server_origin',
    silent: 'silent',
    ipban: 'ipban',
    ipban_wildcard: 'ipban_wildcard',
    active: 'active'
  };

  export type Litebans_kicksScalarFieldEnum = (typeof Litebans_kicksScalarFieldEnum)[keyof typeof Litebans_kicksScalarFieldEnum]


  export const Litebans_mutesScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    ip: 'ip',
    reason: 'reason',
    banned_by_uuid: 'banned_by_uuid',
    banned_by_name: 'banned_by_name',
    removed_by_uuid: 'removed_by_uuid',
    removed_by_name: 'removed_by_name',
    removed_by_reason: 'removed_by_reason',
    removed_by_date: 'removed_by_date',
    time: 'time',
    until: 'until',
    template: 'template',
    server_scope: 'server_scope',
    server_origin: 'server_origin',
    silent: 'silent',
    ipban: 'ipban',
    ipban_wildcard: 'ipban_wildcard',
    active: 'active'
  };

  export type Litebans_mutesScalarFieldEnum = (typeof Litebans_mutesScalarFieldEnum)[keyof typeof Litebans_mutesScalarFieldEnum]


  export const Litebans_serversScalarFieldEnum: {
    id: 'id',
    name: 'name',
    uuid: 'uuid',
    date: 'date'
  };

  export type Litebans_serversScalarFieldEnum = (typeof Litebans_serversScalarFieldEnum)[keyof typeof Litebans_serversScalarFieldEnum]


  export const Litebans_syncScalarFieldEnum: {
    id: 'id',
    info: 'info',
    msg: 'msg',
    time: 'time'
  };

  export type Litebans_syncScalarFieldEnum = (typeof Litebans_syncScalarFieldEnum)[keyof typeof Litebans_syncScalarFieldEnum]


  export const Litebans_warningsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    ip: 'ip',
    reason: 'reason',
    banned_by_uuid: 'banned_by_uuid',
    banned_by_name: 'banned_by_name',
    removed_by_uuid: 'removed_by_uuid',
    removed_by_name: 'removed_by_name',
    removed_by_reason: 'removed_by_reason',
    removed_by_date: 'removed_by_date',
    time: 'time',
    until: 'until',
    template: 'template',
    server_scope: 'server_scope',
    server_origin: 'server_origin',
    silent: 'silent',
    ipban: 'ipban',
    ipban_wildcard: 'ipban_wildcard',
    active: 'active',
    warned: 'warned'
  };

  export type Litebans_warningsScalarFieldEnum = (typeof Litebans_warningsScalarFieldEnum)[keyof typeof Litebans_warningsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type litebans_allowWhereInput = {
    AND?: Enumerable<litebans_allowWhereInput>
    OR?: Enumerable<litebans_allowWhereInput>
    NOT?: Enumerable<litebans_allowWhereInput>
    id?: BigIntFilter | bigint | number
    uuid?: BytesFilter | Buffer
    type?: IntFilter | number
  }

  export type litebans_allowOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    type?: SortOrder
  }

  export type litebans_allowWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_allowOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    type?: SortOrder
    _count?: litebans_allowCountOrderByAggregateInput
    _avg?: litebans_allowAvgOrderByAggregateInput
    _max?: litebans_allowMaxOrderByAggregateInput
    _min?: litebans_allowMinOrderByAggregateInput
    _sum?: litebans_allowSumOrderByAggregateInput
  }

  export type litebans_allowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_allowScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_allowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_allowScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    uuid?: BytesWithAggregatesFilter | Buffer
    type?: IntWithAggregatesFilter | number
  }

  export type litebans_bansWhereInput = {
    AND?: Enumerable<litebans_bansWhereInput>
    OR?: Enumerable<litebans_bansWhereInput>
    NOT?: Enumerable<litebans_bansWhereInput>
    id?: BigIntFilter | bigint | number
    uuid?: StringNullableFilter | string | null
    ip?: StringNullableFilter | string | null
    reason?: StringNullableFilter | string | null
    banned_by_uuid?: StringFilter | string
    banned_by_name?: StringNullableFilter | string | null
    removed_by_uuid?: StringNullableFilter | string | null
    removed_by_name?: StringNullableFilter | string | null
    removed_by_reason?: StringNullableFilter | string | null
    removed_by_date?: DateTimeNullableFilter | Date | string | null
    time?: BigIntFilter | bigint | number
    until?: BigIntFilter | bigint | number
    template?: IntFilter | number
    server_scope?: StringNullableFilter | string | null
    server_origin?: StringNullableFilter | string | null
    silent?: BoolFilter | boolean
    ipban?: BoolFilter | boolean
    ipban_wildcard?: BoolFilter | boolean
    active?: BoolFilter | boolean
  }

  export type litebans_bansOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_bansWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_bansOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    _count?: litebans_bansCountOrderByAggregateInput
    _avg?: litebans_bansAvgOrderByAggregateInput
    _max?: litebans_bansMaxOrderByAggregateInput
    _min?: litebans_bansMinOrderByAggregateInput
    _sum?: litebans_bansSumOrderByAggregateInput
  }

  export type litebans_bansScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_bansScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_bansScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_bansScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    uuid?: StringNullableWithAggregatesFilter | string | null
    ip?: StringNullableWithAggregatesFilter | string | null
    reason?: StringNullableWithAggregatesFilter | string | null
    banned_by_uuid?: StringWithAggregatesFilter | string
    banned_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_uuid?: StringNullableWithAggregatesFilter | string | null
    removed_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_reason?: StringNullableWithAggregatesFilter | string | null
    removed_by_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    time?: BigIntWithAggregatesFilter | bigint | number
    until?: BigIntWithAggregatesFilter | bigint | number
    template?: IntWithAggregatesFilter | number
    server_scope?: StringNullableWithAggregatesFilter | string | null
    server_origin?: StringNullableWithAggregatesFilter | string | null
    silent?: BoolWithAggregatesFilter | boolean
    ipban?: BoolWithAggregatesFilter | boolean
    ipban_wildcard?: BoolWithAggregatesFilter | boolean
    active?: BoolWithAggregatesFilter | boolean
  }

  export type litebans_configWhereInput = {
    AND?: Enumerable<litebans_configWhereInput>
    OR?: Enumerable<litebans_configWhereInput>
    NOT?: Enumerable<litebans_configWhereInput>
    id?: BigIntFilter | bigint | number
    version?: StringFilter | string
    build?: StringFilter | string
    timezone?: StringFilter | string
  }

  export type litebans_configOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    build?: SortOrder
    timezone?: SortOrder
  }

  export type litebans_configWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_configOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    build?: SortOrder
    timezone?: SortOrder
    _count?: litebans_configCountOrderByAggregateInput
    _avg?: litebans_configAvgOrderByAggregateInput
    _max?: litebans_configMaxOrderByAggregateInput
    _min?: litebans_configMinOrderByAggregateInput
    _sum?: litebans_configSumOrderByAggregateInput
  }

  export type litebans_configScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_configScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_configScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_configScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    version?: StringWithAggregatesFilter | string
    build?: StringWithAggregatesFilter | string
    timezone?: StringWithAggregatesFilter | string
  }

  export type litebans_historyWhereInput = {
    AND?: Enumerable<litebans_historyWhereInput>
    OR?: Enumerable<litebans_historyWhereInput>
    NOT?: Enumerable<litebans_historyWhereInput>
    id?: BigIntFilter | bigint | number
    date?: DateTimeNullableFilter | Date | string | null
    name?: StringNullableFilter | string | null
    uuid?: StringNullableFilter | string | null
    ip?: StringNullableFilter | string | null
  }

  export type litebans_historyOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
  }

  export type litebans_historyWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_historyOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    _count?: litebans_historyCountOrderByAggregateInput
    _avg?: litebans_historyAvgOrderByAggregateInput
    _max?: litebans_historyMaxOrderByAggregateInput
    _min?: litebans_historyMinOrderByAggregateInput
    _sum?: litebans_historySumOrderByAggregateInput
  }

  export type litebans_historyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_historyScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_historyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_historyScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    uuid?: StringNullableWithAggregatesFilter | string | null
    ip?: StringNullableWithAggregatesFilter | string | null
  }

  export type litebans_kicksWhereInput = {
    AND?: Enumerable<litebans_kicksWhereInput>
    OR?: Enumerable<litebans_kicksWhereInput>
    NOT?: Enumerable<litebans_kicksWhereInput>
    id?: BigIntFilter | bigint | number
    uuid?: StringNullableFilter | string | null
    ip?: StringNullableFilter | string | null
    reason?: StringNullableFilter | string | null
    banned_by_uuid?: StringFilter | string
    banned_by_name?: StringNullableFilter | string | null
    time?: BigIntFilter | bigint | number
    until?: BigIntFilter | bigint | number
    template?: IntFilter | number
    server_scope?: StringNullableFilter | string | null
    server_origin?: StringNullableFilter | string | null
    silent?: BoolFilter | boolean
    ipban?: BoolFilter | boolean
    ipban_wildcard?: BoolFilter | boolean
    active?: BoolFilter | boolean
  }

  export type litebans_kicksOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_kicksWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_kicksOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    _count?: litebans_kicksCountOrderByAggregateInput
    _avg?: litebans_kicksAvgOrderByAggregateInput
    _max?: litebans_kicksMaxOrderByAggregateInput
    _min?: litebans_kicksMinOrderByAggregateInput
    _sum?: litebans_kicksSumOrderByAggregateInput
  }

  export type litebans_kicksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_kicksScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_kicksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_kicksScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    uuid?: StringNullableWithAggregatesFilter | string | null
    ip?: StringNullableWithAggregatesFilter | string | null
    reason?: StringNullableWithAggregatesFilter | string | null
    banned_by_uuid?: StringWithAggregatesFilter | string
    banned_by_name?: StringNullableWithAggregatesFilter | string | null
    time?: BigIntWithAggregatesFilter | bigint | number
    until?: BigIntWithAggregatesFilter | bigint | number
    template?: IntWithAggregatesFilter | number
    server_scope?: StringNullableWithAggregatesFilter | string | null
    server_origin?: StringNullableWithAggregatesFilter | string | null
    silent?: BoolWithAggregatesFilter | boolean
    ipban?: BoolWithAggregatesFilter | boolean
    ipban_wildcard?: BoolWithAggregatesFilter | boolean
    active?: BoolWithAggregatesFilter | boolean
  }

  export type litebans_mutesWhereInput = {
    AND?: Enumerable<litebans_mutesWhereInput>
    OR?: Enumerable<litebans_mutesWhereInput>
    NOT?: Enumerable<litebans_mutesWhereInput>
    id?: BigIntFilter | bigint | number
    uuid?: StringNullableFilter | string | null
    ip?: StringNullableFilter | string | null
    reason?: StringNullableFilter | string | null
    banned_by_uuid?: StringFilter | string
    banned_by_name?: StringNullableFilter | string | null
    removed_by_uuid?: StringNullableFilter | string | null
    removed_by_name?: StringNullableFilter | string | null
    removed_by_reason?: StringNullableFilter | string | null
    removed_by_date?: DateTimeNullableFilter | Date | string | null
    time?: BigIntFilter | bigint | number
    until?: BigIntFilter | bigint | number
    template?: IntFilter | number
    server_scope?: StringNullableFilter | string | null
    server_origin?: StringNullableFilter | string | null
    silent?: BoolFilter | boolean
    ipban?: BoolFilter | boolean
    ipban_wildcard?: BoolFilter | boolean
    active?: BoolFilter | boolean
  }

  export type litebans_mutesOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_mutesWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_mutesOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    _count?: litebans_mutesCountOrderByAggregateInput
    _avg?: litebans_mutesAvgOrderByAggregateInput
    _max?: litebans_mutesMaxOrderByAggregateInput
    _min?: litebans_mutesMinOrderByAggregateInput
    _sum?: litebans_mutesSumOrderByAggregateInput
  }

  export type litebans_mutesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_mutesScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_mutesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_mutesScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    uuid?: StringNullableWithAggregatesFilter | string | null
    ip?: StringNullableWithAggregatesFilter | string | null
    reason?: StringNullableWithAggregatesFilter | string | null
    banned_by_uuid?: StringWithAggregatesFilter | string
    banned_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_uuid?: StringNullableWithAggregatesFilter | string | null
    removed_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_reason?: StringNullableWithAggregatesFilter | string | null
    removed_by_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    time?: BigIntWithAggregatesFilter | bigint | number
    until?: BigIntWithAggregatesFilter | bigint | number
    template?: IntWithAggregatesFilter | number
    server_scope?: StringNullableWithAggregatesFilter | string | null
    server_origin?: StringNullableWithAggregatesFilter | string | null
    silent?: BoolWithAggregatesFilter | boolean
    ipban?: BoolWithAggregatesFilter | boolean
    ipban_wildcard?: BoolWithAggregatesFilter | boolean
    active?: BoolWithAggregatesFilter | boolean
  }

  export type litebans_serversWhereInput = {
    AND?: Enumerable<litebans_serversWhereInput>
    OR?: Enumerable<litebans_serversWhereInput>
    NOT?: Enumerable<litebans_serversWhereInput>
    id?: BigIntFilter | bigint | number
    name?: StringFilter | string
    uuid?: StringFilter | string
    date?: DateTimeNullableFilter | Date | string | null
  }

  export type litebans_serversOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    date?: SortOrder
  }

  export type litebans_serversWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_serversOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    date?: SortOrder
    _count?: litebans_serversCountOrderByAggregateInput
    _avg?: litebans_serversAvgOrderByAggregateInput
    _max?: litebans_serversMaxOrderByAggregateInput
    _min?: litebans_serversMinOrderByAggregateInput
    _sum?: litebans_serversSumOrderByAggregateInput
  }

  export type litebans_serversScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_serversScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_serversScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_serversScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    name?: StringWithAggregatesFilter | string
    uuid?: StringWithAggregatesFilter | string
    date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type litebans_syncWhereInput = {
    AND?: Enumerable<litebans_syncWhereInput>
    OR?: Enumerable<litebans_syncWhereInput>
    NOT?: Enumerable<litebans_syncWhereInput>
    id?: BigIntFilter | bigint | number
    info?: IntFilter | number
    msg?: StringFilter | string
    time?: DateTimeNullableFilter | Date | string | null
  }

  export type litebans_syncOrderByWithRelationInput = {
    id?: SortOrder
    info?: SortOrder
    msg?: SortOrder
    time?: SortOrder
  }

  export type litebans_syncWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_syncOrderByWithAggregationInput = {
    id?: SortOrder
    info?: SortOrder
    msg?: SortOrder
    time?: SortOrder
    _count?: litebans_syncCountOrderByAggregateInput
    _avg?: litebans_syncAvgOrderByAggregateInput
    _max?: litebans_syncMaxOrderByAggregateInput
    _min?: litebans_syncMinOrderByAggregateInput
    _sum?: litebans_syncSumOrderByAggregateInput
  }

  export type litebans_syncScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_syncScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_syncScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_syncScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    info?: IntWithAggregatesFilter | number
    msg?: StringWithAggregatesFilter | string
    time?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type litebans_warningsWhereInput = {
    AND?: Enumerable<litebans_warningsWhereInput>
    OR?: Enumerable<litebans_warningsWhereInput>
    NOT?: Enumerable<litebans_warningsWhereInput>
    id?: BigIntFilter | bigint | number
    uuid?: StringNullableFilter | string | null
    ip?: StringNullableFilter | string | null
    reason?: StringNullableFilter | string | null
    banned_by_uuid?: StringFilter | string
    banned_by_name?: StringNullableFilter | string | null
    removed_by_uuid?: StringNullableFilter | string | null
    removed_by_name?: StringNullableFilter | string | null
    removed_by_reason?: StringNullableFilter | string | null
    removed_by_date?: DateTimeNullableFilter | Date | string | null
    time?: BigIntFilter | bigint | number
    until?: BigIntFilter | bigint | number
    template?: IntFilter | number
    server_scope?: StringNullableFilter | string | null
    server_origin?: StringNullableFilter | string | null
    silent?: BoolFilter | boolean
    ipban?: BoolFilter | boolean
    ipban_wildcard?: BoolFilter | boolean
    active?: BoolFilter | boolean
    warned?: BoolFilter | boolean
  }

  export type litebans_warningsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    warned?: SortOrder
  }

  export type litebans_warningsWhereUniqueInput = {
    id?: bigint | number
  }

  export type litebans_warningsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    warned?: SortOrder
    _count?: litebans_warningsCountOrderByAggregateInput
    _avg?: litebans_warningsAvgOrderByAggregateInput
    _max?: litebans_warningsMaxOrderByAggregateInput
    _min?: litebans_warningsMinOrderByAggregateInput
    _sum?: litebans_warningsSumOrderByAggregateInput
  }

  export type litebans_warningsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<litebans_warningsScalarWhereWithAggregatesInput>
    OR?: Enumerable<litebans_warningsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<litebans_warningsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    uuid?: StringNullableWithAggregatesFilter | string | null
    ip?: StringNullableWithAggregatesFilter | string | null
    reason?: StringNullableWithAggregatesFilter | string | null
    banned_by_uuid?: StringWithAggregatesFilter | string
    banned_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_uuid?: StringNullableWithAggregatesFilter | string | null
    removed_by_name?: StringNullableWithAggregatesFilter | string | null
    removed_by_reason?: StringNullableWithAggregatesFilter | string | null
    removed_by_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    time?: BigIntWithAggregatesFilter | bigint | number
    until?: BigIntWithAggregatesFilter | bigint | number
    template?: IntWithAggregatesFilter | number
    server_scope?: StringNullableWithAggregatesFilter | string | null
    server_origin?: StringNullableWithAggregatesFilter | string | null
    silent?: BoolWithAggregatesFilter | boolean
    ipban?: BoolWithAggregatesFilter | boolean
    ipban_wildcard?: BoolWithAggregatesFilter | boolean
    active?: BoolWithAggregatesFilter | boolean
    warned?: BoolWithAggregatesFilter | boolean
  }

  export type litebans_allowCreateInput = {
    id?: bigint | number
    uuid: Buffer
    type: number
  }

  export type litebans_allowUncheckedCreateInput = {
    id?: bigint | number
    uuid: Buffer
    type: number
  }

  export type litebans_allowUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: BytesFieldUpdateOperationsInput | Buffer
    type?: IntFieldUpdateOperationsInput | number
  }

  export type litebans_allowUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: BytesFieldUpdateOperationsInput | Buffer
    type?: IntFieldUpdateOperationsInput | number
  }

  export type litebans_allowCreateManyInput = {
    id?: bigint | number
    uuid: Buffer
    type: number
  }

  export type litebans_allowUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: BytesFieldUpdateOperationsInput | Buffer
    type?: IntFieldUpdateOperationsInput | number
  }

  export type litebans_allowUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: BytesFieldUpdateOperationsInput | Buffer
    type?: IntFieldUpdateOperationsInput | number
  }

  export type litebans_bansCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_bansUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_bansUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_bansUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_bansCreateManyInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_bansUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_bansUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_configCreateInput = {
    id?: bigint | number
    version: string
    build: string
    timezone?: string
  }

  export type litebans_configUncheckedCreateInput = {
    id?: bigint | number
    version: string
    build: string
    timezone?: string
  }

  export type litebans_configUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    build?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type litebans_configUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    build?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type litebans_configCreateManyInput = {
    id?: bigint | number
    version: string
    build: string
    timezone?: string
  }

  export type litebans_configUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    build?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type litebans_configUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    version?: StringFieldUpdateOperationsInput | string
    build?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type litebans_historyCreateInput = {
    id?: bigint | number
    date?: Date | string | null
    name?: string | null
    uuid?: string | null
    ip?: string | null
  }

  export type litebans_historyUncheckedCreateInput = {
    id?: bigint | number
    date?: Date | string | null
    name?: string | null
    uuid?: string | null
    ip?: string | null
  }

  export type litebans_historyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type litebans_historyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type litebans_historyCreateManyInput = {
    id?: bigint | number
    date?: Date | string | null
    name?: string | null
    uuid?: string | null
    ip?: string | null
  }

  export type litebans_historyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type litebans_historyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type litebans_kicksCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_kicksUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_kicksUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_kicksUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_kicksCreateManyInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_kicksUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_kicksUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_mutesCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_mutesUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_mutesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_mutesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_mutesCreateManyInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
  }

  export type litebans_mutesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_mutesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_serversCreateInput = {
    id?: bigint | number
    name: string
    uuid: string
    date?: Date | string | null
  }

  export type litebans_serversUncheckedCreateInput = {
    id?: bigint | number
    name: string
    uuid: string
    date?: Date | string | null
  }

  export type litebans_serversUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_serversUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_serversCreateManyInput = {
    id?: bigint | number
    name: string
    uuid: string
    date?: Date | string | null
  }

  export type litebans_serversUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_serversUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    uuid?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_syncCreateInput = {
    id?: bigint | number
    info: number
    msg: string
    time?: Date | string | null
  }

  export type litebans_syncUncheckedCreateInput = {
    id?: bigint | number
    info: number
    msg: string
    time?: Date | string | null
  }

  export type litebans_syncUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    info?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_syncUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    info?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_syncCreateManyInput = {
    id?: bigint | number
    info: number
    msg: string
    time?: Date | string | null
  }

  export type litebans_syncUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    info?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_syncUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    info?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type litebans_warningsCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
    warned: boolean
  }

  export type litebans_warningsUncheckedCreateInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
    warned: boolean
  }

  export type litebans_warningsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    warned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_warningsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    warned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_warningsCreateManyInput = {
    id?: bigint | number
    uuid?: string | null
    ip?: string | null
    reason?: string | null
    banned_by_uuid: string
    banned_by_name?: string | null
    removed_by_uuid?: string | null
    removed_by_name?: string | null
    removed_by_reason?: string | null
    removed_by_date?: Date | string | null
    time: bigint | number
    until: bigint | number
    template?: number
    server_scope?: string | null
    server_origin?: string | null
    silent: boolean
    ipban: boolean
    ipban_wildcard?: boolean
    active: boolean
    warned: boolean
  }

  export type litebans_warningsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    warned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type litebans_warningsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    banned_by_uuid?: StringFieldUpdateOperationsInput | string
    banned_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_uuid?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_name?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_reason?: NullableStringFieldUpdateOperationsInput | string | null
    removed_by_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    until?: BigIntFieldUpdateOperationsInput | bigint | number
    template?: IntFieldUpdateOperationsInput | number
    server_scope?: NullableStringFieldUpdateOperationsInput | string | null
    server_origin?: NullableStringFieldUpdateOperationsInput | string | null
    silent?: BoolFieldUpdateOperationsInput | boolean
    ipban?: BoolFieldUpdateOperationsInput | boolean
    ipban_wildcard?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    warned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer> | Buffer
    notIn?: Enumerable<Buffer> | Buffer
    not?: NestedBytesFilter | Buffer
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type litebans_allowCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    type?: SortOrder
  }

  export type litebans_allowAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type litebans_allowMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    type?: SortOrder
  }

  export type litebans_allowMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    type?: SortOrder
  }

  export type litebans_allowSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer> | Buffer
    notIn?: Enumerable<Buffer> | Buffer
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type litebans_bansCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_bansAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_bansMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_bansMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_bansSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type litebans_configCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    build?: SortOrder
    timezone?: SortOrder
  }

  export type litebans_configAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_configMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    build?: SortOrder
    timezone?: SortOrder
  }

  export type litebans_configMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    build?: SortOrder
    timezone?: SortOrder
  }

  export type litebans_configSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_historyCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
  }

  export type litebans_historyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
  }

  export type litebans_historyMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
  }

  export type litebans_historySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_kicksCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_kicksAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_kicksMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_kicksMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_kicksSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_mutesCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_mutesAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_mutesMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_mutesMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
  }

  export type litebans_mutesSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_serversCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    date?: SortOrder
  }

  export type litebans_serversAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_serversMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    date?: SortOrder
  }

  export type litebans_serversMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uuid?: SortOrder
    date?: SortOrder
  }

  export type litebans_serversSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type litebans_syncCountOrderByAggregateInput = {
    id?: SortOrder
    info?: SortOrder
    msg?: SortOrder
    time?: SortOrder
  }

  export type litebans_syncAvgOrderByAggregateInput = {
    id?: SortOrder
    info?: SortOrder
  }

  export type litebans_syncMaxOrderByAggregateInput = {
    id?: SortOrder
    info?: SortOrder
    msg?: SortOrder
    time?: SortOrder
  }

  export type litebans_syncMinOrderByAggregateInput = {
    id?: SortOrder
    info?: SortOrder
    msg?: SortOrder
    time?: SortOrder
  }

  export type litebans_syncSumOrderByAggregateInput = {
    id?: SortOrder
    info?: SortOrder
  }

  export type litebans_warningsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    warned?: SortOrder
  }

  export type litebans_warningsAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type litebans_warningsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    warned?: SortOrder
  }

  export type litebans_warningsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    ip?: SortOrder
    reason?: SortOrder
    banned_by_uuid?: SortOrder
    banned_by_name?: SortOrder
    removed_by_uuid?: SortOrder
    removed_by_name?: SortOrder
    removed_by_reason?: SortOrder
    removed_by_date?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
    server_scope?: SortOrder
    server_origin?: SortOrder
    silent?: SortOrder
    ipban?: SortOrder
    ipban_wildcard?: SortOrder
    active?: SortOrder
    warned?: SortOrder
  }

  export type litebans_warningsSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    until?: SortOrder
    template?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer> | Buffer
    notIn?: Enumerable<Buffer> | Buffer
    not?: NestedBytesFilter | Buffer
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer> | Buffer
    notIn?: Enumerable<Buffer> | Buffer
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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