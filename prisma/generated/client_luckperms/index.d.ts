
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
 * Model luckperms_actions
 * 
 */
export type luckperms_actions = {
  id: number
  time: bigint
  actor_uuid: string
  actor_name: string
  type: string
  acted_uuid: string
  acted_name: string
  action: string
}

/**
 * Model luckperms_group_permissions
 * 
 */
export type luckperms_group_permissions = {
  id: number
  name: string
  permission: string
  value: boolean
  server: string
  world: string
  expiry: bigint
  contexts: string
}

/**
 * Model luckperms_groups
 * 
 */
export type luckperms_groups = {
  name: string
}

/**
 * Model luckperms_messenger
 * 
 */
export type luckperms_messenger = {
  id: number
  time: Date
  msg: string
}

/**
 * Model luckperms_players
 * 
 */
export type luckperms_players = {
  uuid: string
  username: string
  primary_group: string
}

/**
 * Model luckperms_tracks
 * 
 */
export type luckperms_tracks = {
  name: string
  groups: string
}

/**
 * Model luckperms_user_permissions
 * 
 */
export type luckperms_user_permissions = {
  id: number
  uuid: string
  permission: string
  value: boolean
  server: string
  world: string
  expiry: bigint
  contexts: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Luckperms_actions
 * const luckperms_actions = await prisma.luckperms_actions.findMany()
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
   * // Fetch zero or more Luckperms_actions
   * const luckperms_actions = await prisma.luckperms_actions.findMany()
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
   * `prisma.luckperms_actions`: Exposes CRUD operations for the **luckperms_actions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_actions
    * const luckperms_actions = await prisma.luckperms_actions.findMany()
    * ```
    */
  get luckperms_actions(): Prisma.luckperms_actionsDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_group_permissions`: Exposes CRUD operations for the **luckperms_group_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_group_permissions
    * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findMany()
    * ```
    */
  get luckperms_group_permissions(): Prisma.luckperms_group_permissionsDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_groups`: Exposes CRUD operations for the **luckperms_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_groups
    * const luckperms_groups = await prisma.luckperms_groups.findMany()
    * ```
    */
  get luckperms_groups(): Prisma.luckperms_groupsDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_messenger`: Exposes CRUD operations for the **luckperms_messenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_messengers
    * const luckperms_messengers = await prisma.luckperms_messenger.findMany()
    * ```
    */
  get luckperms_messenger(): Prisma.luckperms_messengerDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_players`: Exposes CRUD operations for the **luckperms_players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_players
    * const luckperms_players = await prisma.luckperms_players.findMany()
    * ```
    */
  get luckperms_players(): Prisma.luckperms_playersDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_tracks`: Exposes CRUD operations for the **luckperms_tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_tracks
    * const luckperms_tracks = await prisma.luckperms_tracks.findMany()
    * ```
    */
  get luckperms_tracks(): Prisma.luckperms_tracksDelegate<GlobalReject>;

  /**
   * `prisma.luckperms_user_permissions`: Exposes CRUD operations for the **luckperms_user_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Luckperms_user_permissions
    * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findMany()
    * ```
    */
  get luckperms_user_permissions(): Prisma.luckperms_user_permissionsDelegate<GlobalReject>;
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
    luckperms_actions: 'luckperms_actions',
    luckperms_group_permissions: 'luckperms_group_permissions',
    luckperms_groups: 'luckperms_groups',
    luckperms_messenger: 'luckperms_messenger',
    luckperms_players: 'luckperms_players',
    luckperms_tracks: 'luckperms_tracks',
    luckperms_user_permissions: 'luckperms_user_permissions'
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
   * Model luckperms_actions
   */


  export type AggregateLuckperms_actions = {
    _count: Luckperms_actionsCountAggregateOutputType | null
    _avg: Luckperms_actionsAvgAggregateOutputType | null
    _sum: Luckperms_actionsSumAggregateOutputType | null
    _min: Luckperms_actionsMinAggregateOutputType | null
    _max: Luckperms_actionsMaxAggregateOutputType | null
  }

  export type Luckperms_actionsAvgAggregateOutputType = {
    id: number | null
    time: number | null
  }

  export type Luckperms_actionsSumAggregateOutputType = {
    id: number | null
    time: bigint | null
  }

  export type Luckperms_actionsMinAggregateOutputType = {
    id: number | null
    time: bigint | null
    actor_uuid: string | null
    actor_name: string | null
    type: string | null
    acted_uuid: string | null
    acted_name: string | null
    action: string | null
  }

  export type Luckperms_actionsMaxAggregateOutputType = {
    id: number | null
    time: bigint | null
    actor_uuid: string | null
    actor_name: string | null
    type: string | null
    acted_uuid: string | null
    acted_name: string | null
    action: string | null
  }

  export type Luckperms_actionsCountAggregateOutputType = {
    id: number
    time: number
    actor_uuid: number
    actor_name: number
    type: number
    acted_uuid: number
    acted_name: number
    action: number
    _all: number
  }


  export type Luckperms_actionsAvgAggregateInputType = {
    id?: true
    time?: true
  }

  export type Luckperms_actionsSumAggregateInputType = {
    id?: true
    time?: true
  }

  export type Luckperms_actionsMinAggregateInputType = {
    id?: true
    time?: true
    actor_uuid?: true
    actor_name?: true
    type?: true
    acted_uuid?: true
    acted_name?: true
    action?: true
  }

  export type Luckperms_actionsMaxAggregateInputType = {
    id?: true
    time?: true
    actor_uuid?: true
    actor_name?: true
    type?: true
    acted_uuid?: true
    acted_name?: true
    action?: true
  }

  export type Luckperms_actionsCountAggregateInputType = {
    id?: true
    time?: true
    actor_uuid?: true
    actor_name?: true
    type?: true
    acted_uuid?: true
    acted_name?: true
    action?: true
    _all?: true
  }

  export type Luckperms_actionsAggregateArgs = {
    /**
     * Filter which luckperms_actions to aggregate.
     */
    where?: luckperms_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_actions to fetch.
     */
    orderBy?: Enumerable<luckperms_actionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_actions
    **/
    _count?: true | Luckperms_actionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Luckperms_actionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Luckperms_actionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_actionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_actionsMaxAggregateInputType
  }

  export type GetLuckperms_actionsAggregateType<T extends Luckperms_actionsAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_actions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_actions[P]>
      : GetScalarType<T[P], AggregateLuckperms_actions[P]>
  }




  export type Luckperms_actionsGroupByArgs = {
    where?: luckperms_actionsWhereInput
    orderBy?: Enumerable<luckperms_actionsOrderByWithAggregationInput>
    by: Luckperms_actionsScalarFieldEnum[]
    having?: luckperms_actionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_actionsCountAggregateInputType | true
    _avg?: Luckperms_actionsAvgAggregateInputType
    _sum?: Luckperms_actionsSumAggregateInputType
    _min?: Luckperms_actionsMinAggregateInputType
    _max?: Luckperms_actionsMaxAggregateInputType
  }


  export type Luckperms_actionsGroupByOutputType = {
    id: number
    time: bigint
    actor_uuid: string
    actor_name: string
    type: string
    acted_uuid: string
    acted_name: string
    action: string
    _count: Luckperms_actionsCountAggregateOutputType | null
    _avg: Luckperms_actionsAvgAggregateOutputType | null
    _sum: Luckperms_actionsSumAggregateOutputType | null
    _min: Luckperms_actionsMinAggregateOutputType | null
    _max: Luckperms_actionsMaxAggregateOutputType | null
  }

  type GetLuckperms_actionsGroupByPayload<T extends Luckperms_actionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_actionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_actionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_actionsGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_actionsGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_actionsSelect = {
    id?: boolean
    time?: boolean
    actor_uuid?: boolean
    actor_name?: boolean
    type?: boolean
    acted_uuid?: boolean
    acted_name?: boolean
    action?: boolean
  }


  export type luckperms_actionsGetPayload<S extends boolean | null | undefined | luckperms_actionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_actions :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_actionsArgs | luckperms_actionsFindManyArgs)
    ? luckperms_actions 
    : S extends { select: any } & (luckperms_actionsArgs | luckperms_actionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_actions ? luckperms_actions[P] : never
  } 
      : luckperms_actions


  type luckperms_actionsCountArgs = 
    Omit<luckperms_actionsFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_actionsCountAggregateInputType | true
    }

  export interface luckperms_actionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_actions that matches the filter.
     * @param {luckperms_actionsFindUniqueArgs} args - Arguments to find a Luckperms_actions
     * @example
     * // Get one Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_actionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_actionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_actions'> extends True ? Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>> : Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T> | null, null>

    /**
     * Find one Luckperms_actions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_actionsFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_actions
     * @example
     * // Get one Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_actionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_actionsFindUniqueOrThrowArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Find the first Luckperms_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_actionsFindFirstArgs} args - Arguments to find a Luckperms_actions
     * @example
     * // Get one Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_actionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_actionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_actions'> extends True ? Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>> : Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_actions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_actionsFindFirstOrThrowArgs} args - Arguments to find a Luckperms_actions
     * @example
     * // Get one Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_actionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_actionsFindFirstOrThrowArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Find zero or more Luckperms_actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_actionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findMany()
     * 
     * // Get first 10 Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luckperms_actionsWithIdOnly = await prisma.luckperms_actions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends luckperms_actionsFindManyArgs>(
      args?: SelectSubset<T, luckperms_actionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_actionsGetPayload<T>>>

    /**
     * Create a Luckperms_actions.
     * @param {luckperms_actionsCreateArgs} args - Arguments to create a Luckperms_actions.
     * @example
     * // Create one Luckperms_actions
     * const Luckperms_actions = await prisma.luckperms_actions.create({
     *   data: {
     *     // ... data to create a Luckperms_actions
     *   }
     * })
     * 
    **/
    create<T extends luckperms_actionsCreateArgs>(
      args: SelectSubset<T, luckperms_actionsCreateArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Create many Luckperms_actions.
     *     @param {luckperms_actionsCreateManyArgs} args - Arguments to create many Luckperms_actions.
     *     @example
     *     // Create many Luckperms_actions
     *     const luckperms_actions = await prisma.luckperms_actions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_actionsCreateManyArgs>(
      args?: SelectSubset<T, luckperms_actionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_actions.
     * @param {luckperms_actionsDeleteArgs} args - Arguments to delete one Luckperms_actions.
     * @example
     * // Delete one Luckperms_actions
     * const Luckperms_actions = await prisma.luckperms_actions.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_actions
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_actionsDeleteArgs>(
      args: SelectSubset<T, luckperms_actionsDeleteArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Update one Luckperms_actions.
     * @param {luckperms_actionsUpdateArgs} args - Arguments to update one Luckperms_actions.
     * @example
     * // Update one Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_actionsUpdateArgs>(
      args: SelectSubset<T, luckperms_actionsUpdateArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Delete zero or more Luckperms_actions.
     * @param {luckperms_actionsDeleteManyArgs} args - Arguments to filter Luckperms_actions to delete.
     * @example
     * // Delete a few Luckperms_actions
     * const { count } = await prisma.luckperms_actions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_actionsDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_actionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_actionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_actionsUpdateManyArgs>(
      args: SelectSubset<T, luckperms_actionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_actions.
     * @param {luckperms_actionsUpsertArgs} args - Arguments to update or create a Luckperms_actions.
     * @example
     * // Update or create a Luckperms_actions
     * const luckperms_actions = await prisma.luckperms_actions.upsert({
     *   create: {
     *     // ... data to create a Luckperms_actions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_actions we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_actionsUpsertArgs>(
      args: SelectSubset<T, luckperms_actionsUpsertArgs>
    ): Prisma__luckperms_actionsClient<luckperms_actionsGetPayload<T>>

    /**
     * Count the number of Luckperms_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_actionsCountArgs} args - Arguments to filter Luckperms_actions to count.
     * @example
     * // Count the number of Luckperms_actions
     * const count = await prisma.luckperms_actions.count({
     *   where: {
     *     // ... the filter for the Luckperms_actions we want to count
     *   }
     * })
    **/
    count<T extends luckperms_actionsCountArgs>(
      args?: Subset<T, luckperms_actionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_actionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_actionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_actionsAggregateArgs>(args: Subset<T, Luckperms_actionsAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_actionsAggregateType<T>>

    /**
     * Group by Luckperms_actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_actionsGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_actionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_actionsGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_actionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_actionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_actionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_actions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_actionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_actions base type for findUnique actions
   */
  export type luckperms_actionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter, which luckperms_actions to fetch.
     */
    where: luckperms_actionsWhereUniqueInput
  }

  /**
   * luckperms_actions findUnique
   */
  export interface luckperms_actionsFindUniqueArgs extends luckperms_actionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_actions findUniqueOrThrow
   */
  export type luckperms_actionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter, which luckperms_actions to fetch.
     */
    where: luckperms_actionsWhereUniqueInput
  }


  /**
   * luckperms_actions base type for findFirst actions
   */
  export type luckperms_actionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter, which luckperms_actions to fetch.
     */
    where?: luckperms_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_actions to fetch.
     */
    orderBy?: Enumerable<luckperms_actionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_actions.
     */
    cursor?: luckperms_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_actions.
     */
    distinct?: Enumerable<Luckperms_actionsScalarFieldEnum>
  }

  /**
   * luckperms_actions findFirst
   */
  export interface luckperms_actionsFindFirstArgs extends luckperms_actionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_actions findFirstOrThrow
   */
  export type luckperms_actionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter, which luckperms_actions to fetch.
     */
    where?: luckperms_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_actions to fetch.
     */
    orderBy?: Enumerable<luckperms_actionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_actions.
     */
    cursor?: luckperms_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_actions.
     */
    distinct?: Enumerable<Luckperms_actionsScalarFieldEnum>
  }


  /**
   * luckperms_actions findMany
   */
  export type luckperms_actionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter, which luckperms_actions to fetch.
     */
    where?: luckperms_actionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_actions to fetch.
     */
    orderBy?: Enumerable<luckperms_actionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_actions.
     */
    cursor?: luckperms_actionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_actions.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_actionsScalarFieldEnum>
  }


  /**
   * luckperms_actions create
   */
  export type luckperms_actionsCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * The data needed to create a luckperms_actions.
     */
    data: XOR<luckperms_actionsCreateInput, luckperms_actionsUncheckedCreateInput>
  }


  /**
   * luckperms_actions createMany
   */
  export type luckperms_actionsCreateManyArgs = {
    /**
     * The data used to create many luckperms_actions.
     */
    data: Enumerable<luckperms_actionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_actions update
   */
  export type luckperms_actionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * The data needed to update a luckperms_actions.
     */
    data: XOR<luckperms_actionsUpdateInput, luckperms_actionsUncheckedUpdateInput>
    /**
     * Choose, which luckperms_actions to update.
     */
    where: luckperms_actionsWhereUniqueInput
  }


  /**
   * luckperms_actions updateMany
   */
  export type luckperms_actionsUpdateManyArgs = {
    /**
     * The data used to update luckperms_actions.
     */
    data: XOR<luckperms_actionsUpdateManyMutationInput, luckperms_actionsUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_actions to update
     */
    where?: luckperms_actionsWhereInput
  }


  /**
   * luckperms_actions upsert
   */
  export type luckperms_actionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * The filter to search for the luckperms_actions to update in case it exists.
     */
    where: luckperms_actionsWhereUniqueInput
    /**
     * In case the luckperms_actions found by the `where` argument doesn't exist, create a new luckperms_actions with this data.
     */
    create: XOR<luckperms_actionsCreateInput, luckperms_actionsUncheckedCreateInput>
    /**
     * In case the luckperms_actions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_actionsUpdateInput, luckperms_actionsUncheckedUpdateInput>
  }


  /**
   * luckperms_actions delete
   */
  export type luckperms_actionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
    /**
     * Filter which luckperms_actions to delete.
     */
    where: luckperms_actionsWhereUniqueInput
  }


  /**
   * luckperms_actions deleteMany
   */
  export type luckperms_actionsDeleteManyArgs = {
    /**
     * Filter which luckperms_actions to delete
     */
    where?: luckperms_actionsWhereInput
  }


  /**
   * luckperms_actions without action
   */
  export type luckperms_actionsArgs = {
    /**
     * Select specific fields to fetch from the luckperms_actions
     */
    select?: luckperms_actionsSelect | null
  }



  /**
   * Model luckperms_group_permissions
   */


  export type AggregateLuckperms_group_permissions = {
    _count: Luckperms_group_permissionsCountAggregateOutputType | null
    _avg: Luckperms_group_permissionsAvgAggregateOutputType | null
    _sum: Luckperms_group_permissionsSumAggregateOutputType | null
    _min: Luckperms_group_permissionsMinAggregateOutputType | null
    _max: Luckperms_group_permissionsMaxAggregateOutputType | null
  }

  export type Luckperms_group_permissionsAvgAggregateOutputType = {
    id: number | null
    expiry: number | null
  }

  export type Luckperms_group_permissionsSumAggregateOutputType = {
    id: number | null
    expiry: bigint | null
  }

  export type Luckperms_group_permissionsMinAggregateOutputType = {
    id: number | null
    name: string | null
    permission: string | null
    value: boolean | null
    server: string | null
    world: string | null
    expiry: bigint | null
    contexts: string | null
  }

  export type Luckperms_group_permissionsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    permission: string | null
    value: boolean | null
    server: string | null
    world: string | null
    expiry: bigint | null
    contexts: string | null
  }

  export type Luckperms_group_permissionsCountAggregateOutputType = {
    id: number
    name: number
    permission: number
    value: number
    server: number
    world: number
    expiry: number
    contexts: number
    _all: number
  }


  export type Luckperms_group_permissionsAvgAggregateInputType = {
    id?: true
    expiry?: true
  }

  export type Luckperms_group_permissionsSumAggregateInputType = {
    id?: true
    expiry?: true
  }

  export type Luckperms_group_permissionsMinAggregateInputType = {
    id?: true
    name?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
  }

  export type Luckperms_group_permissionsMaxAggregateInputType = {
    id?: true
    name?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
  }

  export type Luckperms_group_permissionsCountAggregateInputType = {
    id?: true
    name?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
    _all?: true
  }

  export type Luckperms_group_permissionsAggregateArgs = {
    /**
     * Filter which luckperms_group_permissions to aggregate.
     */
    where?: luckperms_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_group_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_group_permissions
    **/
    _count?: true | Luckperms_group_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Luckperms_group_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Luckperms_group_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_group_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_group_permissionsMaxAggregateInputType
  }

  export type GetLuckperms_group_permissionsAggregateType<T extends Luckperms_group_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_group_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_group_permissions[P]>
      : GetScalarType<T[P], AggregateLuckperms_group_permissions[P]>
  }




  export type Luckperms_group_permissionsGroupByArgs = {
    where?: luckperms_group_permissionsWhereInput
    orderBy?: Enumerable<luckperms_group_permissionsOrderByWithAggregationInput>
    by: Luckperms_group_permissionsScalarFieldEnum[]
    having?: luckperms_group_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_group_permissionsCountAggregateInputType | true
    _avg?: Luckperms_group_permissionsAvgAggregateInputType
    _sum?: Luckperms_group_permissionsSumAggregateInputType
    _min?: Luckperms_group_permissionsMinAggregateInputType
    _max?: Luckperms_group_permissionsMaxAggregateInputType
  }


  export type Luckperms_group_permissionsGroupByOutputType = {
    id: number
    name: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint
    contexts: string
    _count: Luckperms_group_permissionsCountAggregateOutputType | null
    _avg: Luckperms_group_permissionsAvgAggregateOutputType | null
    _sum: Luckperms_group_permissionsSumAggregateOutputType | null
    _min: Luckperms_group_permissionsMinAggregateOutputType | null
    _max: Luckperms_group_permissionsMaxAggregateOutputType | null
  }

  type GetLuckperms_group_permissionsGroupByPayload<T extends Luckperms_group_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_group_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_group_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_group_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_group_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_group_permissionsSelect = {
    id?: boolean
    name?: boolean
    permission?: boolean
    value?: boolean
    server?: boolean
    world?: boolean
    expiry?: boolean
    contexts?: boolean
  }


  export type luckperms_group_permissionsGetPayload<S extends boolean | null | undefined | luckperms_group_permissionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_group_permissions :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_group_permissionsArgs | luckperms_group_permissionsFindManyArgs)
    ? luckperms_group_permissions 
    : S extends { select: any } & (luckperms_group_permissionsArgs | luckperms_group_permissionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_group_permissions ? luckperms_group_permissions[P] : never
  } 
      : luckperms_group_permissions


  type luckperms_group_permissionsCountArgs = 
    Omit<luckperms_group_permissionsFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_group_permissionsCountAggregateInputType | true
    }

  export interface luckperms_group_permissionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_group_permissions that matches the filter.
     * @param {luckperms_group_permissionsFindUniqueArgs} args - Arguments to find a Luckperms_group_permissions
     * @example
     * // Get one Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_group_permissionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_group_permissionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_group_permissions'> extends True ? Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>> : Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T> | null, null>

    /**
     * Find one Luckperms_group_permissions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_group_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_group_permissions
     * @example
     * // Get one Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_group_permissionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_group_permissionsFindUniqueOrThrowArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Find the first Luckperms_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_group_permissionsFindFirstArgs} args - Arguments to find a Luckperms_group_permissions
     * @example
     * // Get one Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_group_permissionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_group_permissionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_group_permissions'> extends True ? Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>> : Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_group_permissions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_group_permissionsFindFirstOrThrowArgs} args - Arguments to find a Luckperms_group_permissions
     * @example
     * // Get one Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_group_permissionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_group_permissionsFindFirstOrThrowArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Find zero or more Luckperms_group_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_group_permissionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findMany()
     * 
     * // Get first 10 Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luckperms_group_permissionsWithIdOnly = await prisma.luckperms_group_permissions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends luckperms_group_permissionsFindManyArgs>(
      args?: SelectSubset<T, luckperms_group_permissionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_group_permissionsGetPayload<T>>>

    /**
     * Create a Luckperms_group_permissions.
     * @param {luckperms_group_permissionsCreateArgs} args - Arguments to create a Luckperms_group_permissions.
     * @example
     * // Create one Luckperms_group_permissions
     * const Luckperms_group_permissions = await prisma.luckperms_group_permissions.create({
     *   data: {
     *     // ... data to create a Luckperms_group_permissions
     *   }
     * })
     * 
    **/
    create<T extends luckperms_group_permissionsCreateArgs>(
      args: SelectSubset<T, luckperms_group_permissionsCreateArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Create many Luckperms_group_permissions.
     *     @param {luckperms_group_permissionsCreateManyArgs} args - Arguments to create many Luckperms_group_permissions.
     *     @example
     *     // Create many Luckperms_group_permissions
     *     const luckperms_group_permissions = await prisma.luckperms_group_permissions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_group_permissionsCreateManyArgs>(
      args?: SelectSubset<T, luckperms_group_permissionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_group_permissions.
     * @param {luckperms_group_permissionsDeleteArgs} args - Arguments to delete one Luckperms_group_permissions.
     * @example
     * // Delete one Luckperms_group_permissions
     * const Luckperms_group_permissions = await prisma.luckperms_group_permissions.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_group_permissions
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_group_permissionsDeleteArgs>(
      args: SelectSubset<T, luckperms_group_permissionsDeleteArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Update one Luckperms_group_permissions.
     * @param {luckperms_group_permissionsUpdateArgs} args - Arguments to update one Luckperms_group_permissions.
     * @example
     * // Update one Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_group_permissionsUpdateArgs>(
      args: SelectSubset<T, luckperms_group_permissionsUpdateArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Delete zero or more Luckperms_group_permissions.
     * @param {luckperms_group_permissionsDeleteManyArgs} args - Arguments to filter Luckperms_group_permissions to delete.
     * @example
     * // Delete a few Luckperms_group_permissions
     * const { count } = await prisma.luckperms_group_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_group_permissionsDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_group_permissionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_group_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_group_permissionsUpdateManyArgs>(
      args: SelectSubset<T, luckperms_group_permissionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_group_permissions.
     * @param {luckperms_group_permissionsUpsertArgs} args - Arguments to update or create a Luckperms_group_permissions.
     * @example
     * // Update or create a Luckperms_group_permissions
     * const luckperms_group_permissions = await prisma.luckperms_group_permissions.upsert({
     *   create: {
     *     // ... data to create a Luckperms_group_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_group_permissions we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_group_permissionsUpsertArgs>(
      args: SelectSubset<T, luckperms_group_permissionsUpsertArgs>
    ): Prisma__luckperms_group_permissionsClient<luckperms_group_permissionsGetPayload<T>>

    /**
     * Count the number of Luckperms_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_group_permissionsCountArgs} args - Arguments to filter Luckperms_group_permissions to count.
     * @example
     * // Count the number of Luckperms_group_permissions
     * const count = await prisma.luckperms_group_permissions.count({
     *   where: {
     *     // ... the filter for the Luckperms_group_permissions we want to count
     *   }
     * })
    **/
    count<T extends luckperms_group_permissionsCountArgs>(
      args?: Subset<T, luckperms_group_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_group_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_group_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_group_permissionsAggregateArgs>(args: Subset<T, Luckperms_group_permissionsAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_group_permissionsAggregateType<T>>

    /**
     * Group by Luckperms_group_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_group_permissionsGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_group_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_group_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_group_permissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_group_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_group_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_group_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_group_permissionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_group_permissions base type for findUnique actions
   */
  export type luckperms_group_permissionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter, which luckperms_group_permissions to fetch.
     */
    where: luckperms_group_permissionsWhereUniqueInput
  }

  /**
   * luckperms_group_permissions findUnique
   */
  export interface luckperms_group_permissionsFindUniqueArgs extends luckperms_group_permissionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_group_permissions findUniqueOrThrow
   */
  export type luckperms_group_permissionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter, which luckperms_group_permissions to fetch.
     */
    where: luckperms_group_permissionsWhereUniqueInput
  }


  /**
   * luckperms_group_permissions base type for findFirst actions
   */
  export type luckperms_group_permissionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter, which luckperms_group_permissions to fetch.
     */
    where?: luckperms_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_group_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_group_permissions.
     */
    cursor?: luckperms_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_group_permissions.
     */
    distinct?: Enumerable<Luckperms_group_permissionsScalarFieldEnum>
  }

  /**
   * luckperms_group_permissions findFirst
   */
  export interface luckperms_group_permissionsFindFirstArgs extends luckperms_group_permissionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_group_permissions findFirstOrThrow
   */
  export type luckperms_group_permissionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter, which luckperms_group_permissions to fetch.
     */
    where?: luckperms_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_group_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_group_permissions.
     */
    cursor?: luckperms_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_group_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_group_permissions.
     */
    distinct?: Enumerable<Luckperms_group_permissionsScalarFieldEnum>
  }


  /**
   * luckperms_group_permissions findMany
   */
  export type luckperms_group_permissionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter, which luckperms_group_permissions to fetch.
     */
    where?: luckperms_group_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_group_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_group_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_group_permissions.
     */
    cursor?: luckperms_group_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_group_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_group_permissions.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_group_permissionsScalarFieldEnum>
  }


  /**
   * luckperms_group_permissions create
   */
  export type luckperms_group_permissionsCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * The data needed to create a luckperms_group_permissions.
     */
    data: XOR<luckperms_group_permissionsCreateInput, luckperms_group_permissionsUncheckedCreateInput>
  }


  /**
   * luckperms_group_permissions createMany
   */
  export type luckperms_group_permissionsCreateManyArgs = {
    /**
     * The data used to create many luckperms_group_permissions.
     */
    data: Enumerable<luckperms_group_permissionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_group_permissions update
   */
  export type luckperms_group_permissionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * The data needed to update a luckperms_group_permissions.
     */
    data: XOR<luckperms_group_permissionsUpdateInput, luckperms_group_permissionsUncheckedUpdateInput>
    /**
     * Choose, which luckperms_group_permissions to update.
     */
    where: luckperms_group_permissionsWhereUniqueInput
  }


  /**
   * luckperms_group_permissions updateMany
   */
  export type luckperms_group_permissionsUpdateManyArgs = {
    /**
     * The data used to update luckperms_group_permissions.
     */
    data: XOR<luckperms_group_permissionsUpdateManyMutationInput, luckperms_group_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_group_permissions to update
     */
    where?: luckperms_group_permissionsWhereInput
  }


  /**
   * luckperms_group_permissions upsert
   */
  export type luckperms_group_permissionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * The filter to search for the luckperms_group_permissions to update in case it exists.
     */
    where: luckperms_group_permissionsWhereUniqueInput
    /**
     * In case the luckperms_group_permissions found by the `where` argument doesn't exist, create a new luckperms_group_permissions with this data.
     */
    create: XOR<luckperms_group_permissionsCreateInput, luckperms_group_permissionsUncheckedCreateInput>
    /**
     * In case the luckperms_group_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_group_permissionsUpdateInput, luckperms_group_permissionsUncheckedUpdateInput>
  }


  /**
   * luckperms_group_permissions delete
   */
  export type luckperms_group_permissionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
    /**
     * Filter which luckperms_group_permissions to delete.
     */
    where: luckperms_group_permissionsWhereUniqueInput
  }


  /**
   * luckperms_group_permissions deleteMany
   */
  export type luckperms_group_permissionsDeleteManyArgs = {
    /**
     * Filter which luckperms_group_permissions to delete
     */
    where?: luckperms_group_permissionsWhereInput
  }


  /**
   * luckperms_group_permissions without action
   */
  export type luckperms_group_permissionsArgs = {
    /**
     * Select specific fields to fetch from the luckperms_group_permissions
     */
    select?: luckperms_group_permissionsSelect | null
  }



  /**
   * Model luckperms_groups
   */


  export type AggregateLuckperms_groups = {
    _count: Luckperms_groupsCountAggregateOutputType | null
    _min: Luckperms_groupsMinAggregateOutputType | null
    _max: Luckperms_groupsMaxAggregateOutputType | null
  }

  export type Luckperms_groupsMinAggregateOutputType = {
    name: string | null
  }

  export type Luckperms_groupsMaxAggregateOutputType = {
    name: string | null
  }

  export type Luckperms_groupsCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type Luckperms_groupsMinAggregateInputType = {
    name?: true
  }

  export type Luckperms_groupsMaxAggregateInputType = {
    name?: true
  }

  export type Luckperms_groupsCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type Luckperms_groupsAggregateArgs = {
    /**
     * Filter which luckperms_groups to aggregate.
     */
    where?: luckperms_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_groups to fetch.
     */
    orderBy?: Enumerable<luckperms_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_groups
    **/
    _count?: true | Luckperms_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_groupsMaxAggregateInputType
  }

  export type GetLuckperms_groupsAggregateType<T extends Luckperms_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_groups[P]>
      : GetScalarType<T[P], AggregateLuckperms_groups[P]>
  }




  export type Luckperms_groupsGroupByArgs = {
    where?: luckperms_groupsWhereInput
    orderBy?: Enumerable<luckperms_groupsOrderByWithAggregationInput>
    by: Luckperms_groupsScalarFieldEnum[]
    having?: luckperms_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_groupsCountAggregateInputType | true
    _min?: Luckperms_groupsMinAggregateInputType
    _max?: Luckperms_groupsMaxAggregateInputType
  }


  export type Luckperms_groupsGroupByOutputType = {
    name: string
    _count: Luckperms_groupsCountAggregateOutputType | null
    _min: Luckperms_groupsMinAggregateOutputType | null
    _max: Luckperms_groupsMaxAggregateOutputType | null
  }

  type GetLuckperms_groupsGroupByPayload<T extends Luckperms_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_groupsGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_groupsSelect = {
    name?: boolean
  }


  export type luckperms_groupsGetPayload<S extends boolean | null | undefined | luckperms_groupsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_groups :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_groupsArgs | luckperms_groupsFindManyArgs)
    ? luckperms_groups 
    : S extends { select: any } & (luckperms_groupsArgs | luckperms_groupsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_groups ? luckperms_groups[P] : never
  } 
      : luckperms_groups


  type luckperms_groupsCountArgs = 
    Omit<luckperms_groupsFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_groupsCountAggregateInputType | true
    }

  export interface luckperms_groupsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_groups that matches the filter.
     * @param {luckperms_groupsFindUniqueArgs} args - Arguments to find a Luckperms_groups
     * @example
     * // Get one Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_groupsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_groupsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_groups'> extends True ? Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>> : Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T> | null, null>

    /**
     * Find one Luckperms_groups that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_groupsFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_groups
     * @example
     * // Get one Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_groupsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_groupsFindUniqueOrThrowArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Find the first Luckperms_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_groupsFindFirstArgs} args - Arguments to find a Luckperms_groups
     * @example
     * // Get one Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_groupsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_groupsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_groups'> extends True ? Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>> : Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_groups that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_groupsFindFirstOrThrowArgs} args - Arguments to find a Luckperms_groups
     * @example
     * // Get one Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_groupsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_groupsFindFirstOrThrowArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Find zero or more Luckperms_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_groupsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findMany()
     * 
     * // Get first 10 Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const luckperms_groupsWithNameOnly = await prisma.luckperms_groups.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends luckperms_groupsFindManyArgs>(
      args?: SelectSubset<T, luckperms_groupsFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_groupsGetPayload<T>>>

    /**
     * Create a Luckperms_groups.
     * @param {luckperms_groupsCreateArgs} args - Arguments to create a Luckperms_groups.
     * @example
     * // Create one Luckperms_groups
     * const Luckperms_groups = await prisma.luckperms_groups.create({
     *   data: {
     *     // ... data to create a Luckperms_groups
     *   }
     * })
     * 
    **/
    create<T extends luckperms_groupsCreateArgs>(
      args: SelectSubset<T, luckperms_groupsCreateArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Create many Luckperms_groups.
     *     @param {luckperms_groupsCreateManyArgs} args - Arguments to create many Luckperms_groups.
     *     @example
     *     // Create many Luckperms_groups
     *     const luckperms_groups = await prisma.luckperms_groups.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_groupsCreateManyArgs>(
      args?: SelectSubset<T, luckperms_groupsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_groups.
     * @param {luckperms_groupsDeleteArgs} args - Arguments to delete one Luckperms_groups.
     * @example
     * // Delete one Luckperms_groups
     * const Luckperms_groups = await prisma.luckperms_groups.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_groups
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_groupsDeleteArgs>(
      args: SelectSubset<T, luckperms_groupsDeleteArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Update one Luckperms_groups.
     * @param {luckperms_groupsUpdateArgs} args - Arguments to update one Luckperms_groups.
     * @example
     * // Update one Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_groupsUpdateArgs>(
      args: SelectSubset<T, luckperms_groupsUpdateArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Delete zero or more Luckperms_groups.
     * @param {luckperms_groupsDeleteManyArgs} args - Arguments to filter Luckperms_groups to delete.
     * @example
     * // Delete a few Luckperms_groups
     * const { count } = await prisma.luckperms_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_groupsDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_groupsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_groupsUpdateManyArgs>(
      args: SelectSubset<T, luckperms_groupsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_groups.
     * @param {luckperms_groupsUpsertArgs} args - Arguments to update or create a Luckperms_groups.
     * @example
     * // Update or create a Luckperms_groups
     * const luckperms_groups = await prisma.luckperms_groups.upsert({
     *   create: {
     *     // ... data to create a Luckperms_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_groups we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_groupsUpsertArgs>(
      args: SelectSubset<T, luckperms_groupsUpsertArgs>
    ): Prisma__luckperms_groupsClient<luckperms_groupsGetPayload<T>>

    /**
     * Count the number of Luckperms_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_groupsCountArgs} args - Arguments to filter Luckperms_groups to count.
     * @example
     * // Count the number of Luckperms_groups
     * const count = await prisma.luckperms_groups.count({
     *   where: {
     *     // ... the filter for the Luckperms_groups we want to count
     *   }
     * })
    **/
    count<T extends luckperms_groupsCountArgs>(
      args?: Subset<T, luckperms_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_groupsAggregateArgs>(args: Subset<T, Luckperms_groupsAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_groupsAggregateType<T>>

    /**
     * Group by Luckperms_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_groupsGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_groupsGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_groupsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_groups base type for findUnique actions
   */
  export type luckperms_groupsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter, which luckperms_groups to fetch.
     */
    where: luckperms_groupsWhereUniqueInput
  }

  /**
   * luckperms_groups findUnique
   */
  export interface luckperms_groupsFindUniqueArgs extends luckperms_groupsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_groups findUniqueOrThrow
   */
  export type luckperms_groupsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter, which luckperms_groups to fetch.
     */
    where: luckperms_groupsWhereUniqueInput
  }


  /**
   * luckperms_groups base type for findFirst actions
   */
  export type luckperms_groupsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter, which luckperms_groups to fetch.
     */
    where?: luckperms_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_groups to fetch.
     */
    orderBy?: Enumerable<luckperms_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_groups.
     */
    cursor?: luckperms_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_groups.
     */
    distinct?: Enumerable<Luckperms_groupsScalarFieldEnum>
  }

  /**
   * luckperms_groups findFirst
   */
  export interface luckperms_groupsFindFirstArgs extends luckperms_groupsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_groups findFirstOrThrow
   */
  export type luckperms_groupsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter, which luckperms_groups to fetch.
     */
    where?: luckperms_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_groups to fetch.
     */
    orderBy?: Enumerable<luckperms_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_groups.
     */
    cursor?: luckperms_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_groups.
     */
    distinct?: Enumerable<Luckperms_groupsScalarFieldEnum>
  }


  /**
   * luckperms_groups findMany
   */
  export type luckperms_groupsFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter, which luckperms_groups to fetch.
     */
    where?: luckperms_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_groups to fetch.
     */
    orderBy?: Enumerable<luckperms_groupsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_groups.
     */
    cursor?: luckperms_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_groups.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_groupsScalarFieldEnum>
  }


  /**
   * luckperms_groups create
   */
  export type luckperms_groupsCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * The data needed to create a luckperms_groups.
     */
    data: XOR<luckperms_groupsCreateInput, luckperms_groupsUncheckedCreateInput>
  }


  /**
   * luckperms_groups createMany
   */
  export type luckperms_groupsCreateManyArgs = {
    /**
     * The data used to create many luckperms_groups.
     */
    data: Enumerable<luckperms_groupsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_groups update
   */
  export type luckperms_groupsUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * The data needed to update a luckperms_groups.
     */
    data: XOR<luckperms_groupsUpdateInput, luckperms_groupsUncheckedUpdateInput>
    /**
     * Choose, which luckperms_groups to update.
     */
    where: luckperms_groupsWhereUniqueInput
  }


  /**
   * luckperms_groups updateMany
   */
  export type luckperms_groupsUpdateManyArgs = {
    /**
     * The data used to update luckperms_groups.
     */
    data: XOR<luckperms_groupsUpdateManyMutationInput, luckperms_groupsUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_groups to update
     */
    where?: luckperms_groupsWhereInput
  }


  /**
   * luckperms_groups upsert
   */
  export type luckperms_groupsUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * The filter to search for the luckperms_groups to update in case it exists.
     */
    where: luckperms_groupsWhereUniqueInput
    /**
     * In case the luckperms_groups found by the `where` argument doesn't exist, create a new luckperms_groups with this data.
     */
    create: XOR<luckperms_groupsCreateInput, luckperms_groupsUncheckedCreateInput>
    /**
     * In case the luckperms_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_groupsUpdateInput, luckperms_groupsUncheckedUpdateInput>
  }


  /**
   * luckperms_groups delete
   */
  export type luckperms_groupsDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
    /**
     * Filter which luckperms_groups to delete.
     */
    where: luckperms_groupsWhereUniqueInput
  }


  /**
   * luckperms_groups deleteMany
   */
  export type luckperms_groupsDeleteManyArgs = {
    /**
     * Filter which luckperms_groups to delete
     */
    where?: luckperms_groupsWhereInput
  }


  /**
   * luckperms_groups without action
   */
  export type luckperms_groupsArgs = {
    /**
     * Select specific fields to fetch from the luckperms_groups
     */
    select?: luckperms_groupsSelect | null
  }



  /**
   * Model luckperms_messenger
   */


  export type AggregateLuckperms_messenger = {
    _count: Luckperms_messengerCountAggregateOutputType | null
    _avg: Luckperms_messengerAvgAggregateOutputType | null
    _sum: Luckperms_messengerSumAggregateOutputType | null
    _min: Luckperms_messengerMinAggregateOutputType | null
    _max: Luckperms_messengerMaxAggregateOutputType | null
  }

  export type Luckperms_messengerAvgAggregateOutputType = {
    id: number | null
  }

  export type Luckperms_messengerSumAggregateOutputType = {
    id: number | null
  }

  export type Luckperms_messengerMinAggregateOutputType = {
    id: number | null
    time: Date | null
    msg: string | null
  }

  export type Luckperms_messengerMaxAggregateOutputType = {
    id: number | null
    time: Date | null
    msg: string | null
  }

  export type Luckperms_messengerCountAggregateOutputType = {
    id: number
    time: number
    msg: number
    _all: number
  }


  export type Luckperms_messengerAvgAggregateInputType = {
    id?: true
  }

  export type Luckperms_messengerSumAggregateInputType = {
    id?: true
  }

  export type Luckperms_messengerMinAggregateInputType = {
    id?: true
    time?: true
    msg?: true
  }

  export type Luckperms_messengerMaxAggregateInputType = {
    id?: true
    time?: true
    msg?: true
  }

  export type Luckperms_messengerCountAggregateInputType = {
    id?: true
    time?: true
    msg?: true
    _all?: true
  }

  export type Luckperms_messengerAggregateArgs = {
    /**
     * Filter which luckperms_messenger to aggregate.
     */
    where?: luckperms_messengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_messengers to fetch.
     */
    orderBy?: Enumerable<luckperms_messengerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_messengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_messengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_messengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_messengers
    **/
    _count?: true | Luckperms_messengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Luckperms_messengerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Luckperms_messengerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_messengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_messengerMaxAggregateInputType
  }

  export type GetLuckperms_messengerAggregateType<T extends Luckperms_messengerAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_messenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_messenger[P]>
      : GetScalarType<T[P], AggregateLuckperms_messenger[P]>
  }




  export type Luckperms_messengerGroupByArgs = {
    where?: luckperms_messengerWhereInput
    orderBy?: Enumerable<luckperms_messengerOrderByWithAggregationInput>
    by: Luckperms_messengerScalarFieldEnum[]
    having?: luckperms_messengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_messengerCountAggregateInputType | true
    _avg?: Luckperms_messengerAvgAggregateInputType
    _sum?: Luckperms_messengerSumAggregateInputType
    _min?: Luckperms_messengerMinAggregateInputType
    _max?: Luckperms_messengerMaxAggregateInputType
  }


  export type Luckperms_messengerGroupByOutputType = {
    id: number
    time: Date
    msg: string
    _count: Luckperms_messengerCountAggregateOutputType | null
    _avg: Luckperms_messengerAvgAggregateOutputType | null
    _sum: Luckperms_messengerSumAggregateOutputType | null
    _min: Luckperms_messengerMinAggregateOutputType | null
    _max: Luckperms_messengerMaxAggregateOutputType | null
  }

  type GetLuckperms_messengerGroupByPayload<T extends Luckperms_messengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_messengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_messengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_messengerGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_messengerGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_messengerSelect = {
    id?: boolean
    time?: boolean
    msg?: boolean
  }


  export type luckperms_messengerGetPayload<S extends boolean | null | undefined | luckperms_messengerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_messenger :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_messengerArgs | luckperms_messengerFindManyArgs)
    ? luckperms_messenger 
    : S extends { select: any } & (luckperms_messengerArgs | luckperms_messengerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_messenger ? luckperms_messenger[P] : never
  } 
      : luckperms_messenger


  type luckperms_messengerCountArgs = 
    Omit<luckperms_messengerFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_messengerCountAggregateInputType | true
    }

  export interface luckperms_messengerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_messenger that matches the filter.
     * @param {luckperms_messengerFindUniqueArgs} args - Arguments to find a Luckperms_messenger
     * @example
     * // Get one Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_messengerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_messengerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_messenger'> extends True ? Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>> : Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T> | null, null>

    /**
     * Find one Luckperms_messenger that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_messengerFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_messenger
     * @example
     * // Get one Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_messengerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_messengerFindUniqueOrThrowArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Find the first Luckperms_messenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_messengerFindFirstArgs} args - Arguments to find a Luckperms_messenger
     * @example
     * // Get one Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_messengerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_messengerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_messenger'> extends True ? Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>> : Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_messenger that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_messengerFindFirstOrThrowArgs} args - Arguments to find a Luckperms_messenger
     * @example
     * // Get one Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_messengerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_messengerFindFirstOrThrowArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Find zero or more Luckperms_messengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_messengerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_messengers
     * const luckperms_messengers = await prisma.luckperms_messenger.findMany()
     * 
     * // Get first 10 Luckperms_messengers
     * const luckperms_messengers = await prisma.luckperms_messenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luckperms_messengerWithIdOnly = await prisma.luckperms_messenger.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends luckperms_messengerFindManyArgs>(
      args?: SelectSubset<T, luckperms_messengerFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_messengerGetPayload<T>>>

    /**
     * Create a Luckperms_messenger.
     * @param {luckperms_messengerCreateArgs} args - Arguments to create a Luckperms_messenger.
     * @example
     * // Create one Luckperms_messenger
     * const Luckperms_messenger = await prisma.luckperms_messenger.create({
     *   data: {
     *     // ... data to create a Luckperms_messenger
     *   }
     * })
     * 
    **/
    create<T extends luckperms_messengerCreateArgs>(
      args: SelectSubset<T, luckperms_messengerCreateArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Create many Luckperms_messengers.
     *     @param {luckperms_messengerCreateManyArgs} args - Arguments to create many Luckperms_messengers.
     *     @example
     *     // Create many Luckperms_messengers
     *     const luckperms_messenger = await prisma.luckperms_messenger.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_messengerCreateManyArgs>(
      args?: SelectSubset<T, luckperms_messengerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_messenger.
     * @param {luckperms_messengerDeleteArgs} args - Arguments to delete one Luckperms_messenger.
     * @example
     * // Delete one Luckperms_messenger
     * const Luckperms_messenger = await prisma.luckperms_messenger.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_messenger
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_messengerDeleteArgs>(
      args: SelectSubset<T, luckperms_messengerDeleteArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Update one Luckperms_messenger.
     * @param {luckperms_messengerUpdateArgs} args - Arguments to update one Luckperms_messenger.
     * @example
     * // Update one Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_messengerUpdateArgs>(
      args: SelectSubset<T, luckperms_messengerUpdateArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Delete zero or more Luckperms_messengers.
     * @param {luckperms_messengerDeleteManyArgs} args - Arguments to filter Luckperms_messengers to delete.
     * @example
     * // Delete a few Luckperms_messengers
     * const { count } = await prisma.luckperms_messenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_messengerDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_messengerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_messengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_messengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_messengers
     * const luckperms_messenger = await prisma.luckperms_messenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_messengerUpdateManyArgs>(
      args: SelectSubset<T, luckperms_messengerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_messenger.
     * @param {luckperms_messengerUpsertArgs} args - Arguments to update or create a Luckperms_messenger.
     * @example
     * // Update or create a Luckperms_messenger
     * const luckperms_messenger = await prisma.luckperms_messenger.upsert({
     *   create: {
     *     // ... data to create a Luckperms_messenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_messenger we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_messengerUpsertArgs>(
      args: SelectSubset<T, luckperms_messengerUpsertArgs>
    ): Prisma__luckperms_messengerClient<luckperms_messengerGetPayload<T>>

    /**
     * Count the number of Luckperms_messengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_messengerCountArgs} args - Arguments to filter Luckperms_messengers to count.
     * @example
     * // Count the number of Luckperms_messengers
     * const count = await prisma.luckperms_messenger.count({
     *   where: {
     *     // ... the filter for the Luckperms_messengers we want to count
     *   }
     * })
    **/
    count<T extends luckperms_messengerCountArgs>(
      args?: Subset<T, luckperms_messengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_messengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_messenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_messengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_messengerAggregateArgs>(args: Subset<T, Luckperms_messengerAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_messengerAggregateType<T>>

    /**
     * Group by Luckperms_messenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_messengerGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_messengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_messengerGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_messengerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_messengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_messengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_messenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_messengerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_messenger base type for findUnique actions
   */
  export type luckperms_messengerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter, which luckperms_messenger to fetch.
     */
    where: luckperms_messengerWhereUniqueInput
  }

  /**
   * luckperms_messenger findUnique
   */
  export interface luckperms_messengerFindUniqueArgs extends luckperms_messengerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_messenger findUniqueOrThrow
   */
  export type luckperms_messengerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter, which luckperms_messenger to fetch.
     */
    where: luckperms_messengerWhereUniqueInput
  }


  /**
   * luckperms_messenger base type for findFirst actions
   */
  export type luckperms_messengerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter, which luckperms_messenger to fetch.
     */
    where?: luckperms_messengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_messengers to fetch.
     */
    orderBy?: Enumerable<luckperms_messengerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_messengers.
     */
    cursor?: luckperms_messengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_messengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_messengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_messengers.
     */
    distinct?: Enumerable<Luckperms_messengerScalarFieldEnum>
  }

  /**
   * luckperms_messenger findFirst
   */
  export interface luckperms_messengerFindFirstArgs extends luckperms_messengerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_messenger findFirstOrThrow
   */
  export type luckperms_messengerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter, which luckperms_messenger to fetch.
     */
    where?: luckperms_messengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_messengers to fetch.
     */
    orderBy?: Enumerable<luckperms_messengerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_messengers.
     */
    cursor?: luckperms_messengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_messengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_messengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_messengers.
     */
    distinct?: Enumerable<Luckperms_messengerScalarFieldEnum>
  }


  /**
   * luckperms_messenger findMany
   */
  export type luckperms_messengerFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter, which luckperms_messengers to fetch.
     */
    where?: luckperms_messengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_messengers to fetch.
     */
    orderBy?: Enumerable<luckperms_messengerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_messengers.
     */
    cursor?: luckperms_messengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_messengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_messengers.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_messengerScalarFieldEnum>
  }


  /**
   * luckperms_messenger create
   */
  export type luckperms_messengerCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * The data needed to create a luckperms_messenger.
     */
    data: XOR<luckperms_messengerCreateInput, luckperms_messengerUncheckedCreateInput>
  }


  /**
   * luckperms_messenger createMany
   */
  export type luckperms_messengerCreateManyArgs = {
    /**
     * The data used to create many luckperms_messengers.
     */
    data: Enumerable<luckperms_messengerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_messenger update
   */
  export type luckperms_messengerUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * The data needed to update a luckperms_messenger.
     */
    data: XOR<luckperms_messengerUpdateInput, luckperms_messengerUncheckedUpdateInput>
    /**
     * Choose, which luckperms_messenger to update.
     */
    where: luckperms_messengerWhereUniqueInput
  }


  /**
   * luckperms_messenger updateMany
   */
  export type luckperms_messengerUpdateManyArgs = {
    /**
     * The data used to update luckperms_messengers.
     */
    data: XOR<luckperms_messengerUpdateManyMutationInput, luckperms_messengerUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_messengers to update
     */
    where?: luckperms_messengerWhereInput
  }


  /**
   * luckperms_messenger upsert
   */
  export type luckperms_messengerUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * The filter to search for the luckperms_messenger to update in case it exists.
     */
    where: luckperms_messengerWhereUniqueInput
    /**
     * In case the luckperms_messenger found by the `where` argument doesn't exist, create a new luckperms_messenger with this data.
     */
    create: XOR<luckperms_messengerCreateInput, luckperms_messengerUncheckedCreateInput>
    /**
     * In case the luckperms_messenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_messengerUpdateInput, luckperms_messengerUncheckedUpdateInput>
  }


  /**
   * luckperms_messenger delete
   */
  export type luckperms_messengerDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
    /**
     * Filter which luckperms_messenger to delete.
     */
    where: luckperms_messengerWhereUniqueInput
  }


  /**
   * luckperms_messenger deleteMany
   */
  export type luckperms_messengerDeleteManyArgs = {
    /**
     * Filter which luckperms_messengers to delete
     */
    where?: luckperms_messengerWhereInput
  }


  /**
   * luckperms_messenger without action
   */
  export type luckperms_messengerArgs = {
    /**
     * Select specific fields to fetch from the luckperms_messenger
     */
    select?: luckperms_messengerSelect | null
  }



  /**
   * Model luckperms_players
   */


  export type AggregateLuckperms_players = {
    _count: Luckperms_playersCountAggregateOutputType | null
    _min: Luckperms_playersMinAggregateOutputType | null
    _max: Luckperms_playersMaxAggregateOutputType | null
  }

  export type Luckperms_playersMinAggregateOutputType = {
    uuid: string | null
    username: string | null
    primary_group: string | null
  }

  export type Luckperms_playersMaxAggregateOutputType = {
    uuid: string | null
    username: string | null
    primary_group: string | null
  }

  export type Luckperms_playersCountAggregateOutputType = {
    uuid: number
    username: number
    primary_group: number
    _all: number
  }


  export type Luckperms_playersMinAggregateInputType = {
    uuid?: true
    username?: true
    primary_group?: true
  }

  export type Luckperms_playersMaxAggregateInputType = {
    uuid?: true
    username?: true
    primary_group?: true
  }

  export type Luckperms_playersCountAggregateInputType = {
    uuid?: true
    username?: true
    primary_group?: true
    _all?: true
  }

  export type Luckperms_playersAggregateArgs = {
    /**
     * Filter which luckperms_players to aggregate.
     */
    where?: luckperms_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_players to fetch.
     */
    orderBy?: Enumerable<luckperms_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_players
    **/
    _count?: true | Luckperms_playersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_playersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_playersMaxAggregateInputType
  }

  export type GetLuckperms_playersAggregateType<T extends Luckperms_playersAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_players]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_players[P]>
      : GetScalarType<T[P], AggregateLuckperms_players[P]>
  }




  export type Luckperms_playersGroupByArgs = {
    where?: luckperms_playersWhereInput
    orderBy?: Enumerable<luckperms_playersOrderByWithAggregationInput>
    by: Luckperms_playersScalarFieldEnum[]
    having?: luckperms_playersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_playersCountAggregateInputType | true
    _min?: Luckperms_playersMinAggregateInputType
    _max?: Luckperms_playersMaxAggregateInputType
  }


  export type Luckperms_playersGroupByOutputType = {
    uuid: string
    username: string
    primary_group: string
    _count: Luckperms_playersCountAggregateOutputType | null
    _min: Luckperms_playersMinAggregateOutputType | null
    _max: Luckperms_playersMaxAggregateOutputType | null
  }

  type GetLuckperms_playersGroupByPayload<T extends Luckperms_playersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_playersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_playersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_playersGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_playersGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_playersSelect = {
    uuid?: boolean
    username?: boolean
    primary_group?: boolean
  }


  export type luckperms_playersGetPayload<S extends boolean | null | undefined | luckperms_playersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_players :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_playersArgs | luckperms_playersFindManyArgs)
    ? luckperms_players 
    : S extends { select: any } & (luckperms_playersArgs | luckperms_playersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_players ? luckperms_players[P] : never
  } 
      : luckperms_players


  type luckperms_playersCountArgs = 
    Omit<luckperms_playersFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_playersCountAggregateInputType | true
    }

  export interface luckperms_playersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_players that matches the filter.
     * @param {luckperms_playersFindUniqueArgs} args - Arguments to find a Luckperms_players
     * @example
     * // Get one Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_playersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_playersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_players'> extends True ? Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>> : Prisma__luckperms_playersClient<luckperms_playersGetPayload<T> | null, null>

    /**
     * Find one Luckperms_players that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_playersFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_players
     * @example
     * // Get one Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_playersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_playersFindUniqueOrThrowArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Find the first Luckperms_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_playersFindFirstArgs} args - Arguments to find a Luckperms_players
     * @example
     * // Get one Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_playersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_playersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_players'> extends True ? Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>> : Prisma__luckperms_playersClient<luckperms_playersGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_players that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_playersFindFirstOrThrowArgs} args - Arguments to find a Luckperms_players
     * @example
     * // Get one Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_playersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_playersFindFirstOrThrowArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Find zero or more Luckperms_players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_playersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findMany()
     * 
     * // Get first 10 Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const luckperms_playersWithUuidOnly = await prisma.luckperms_players.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends luckperms_playersFindManyArgs>(
      args?: SelectSubset<T, luckperms_playersFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_playersGetPayload<T>>>

    /**
     * Create a Luckperms_players.
     * @param {luckperms_playersCreateArgs} args - Arguments to create a Luckperms_players.
     * @example
     * // Create one Luckperms_players
     * const Luckperms_players = await prisma.luckperms_players.create({
     *   data: {
     *     // ... data to create a Luckperms_players
     *   }
     * })
     * 
    **/
    create<T extends luckperms_playersCreateArgs>(
      args: SelectSubset<T, luckperms_playersCreateArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Create many Luckperms_players.
     *     @param {luckperms_playersCreateManyArgs} args - Arguments to create many Luckperms_players.
     *     @example
     *     // Create many Luckperms_players
     *     const luckperms_players = await prisma.luckperms_players.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_playersCreateManyArgs>(
      args?: SelectSubset<T, luckperms_playersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_players.
     * @param {luckperms_playersDeleteArgs} args - Arguments to delete one Luckperms_players.
     * @example
     * // Delete one Luckperms_players
     * const Luckperms_players = await prisma.luckperms_players.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_players
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_playersDeleteArgs>(
      args: SelectSubset<T, luckperms_playersDeleteArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Update one Luckperms_players.
     * @param {luckperms_playersUpdateArgs} args - Arguments to update one Luckperms_players.
     * @example
     * // Update one Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_playersUpdateArgs>(
      args: SelectSubset<T, luckperms_playersUpdateArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Delete zero or more Luckperms_players.
     * @param {luckperms_playersDeleteManyArgs} args - Arguments to filter Luckperms_players to delete.
     * @example
     * // Delete a few Luckperms_players
     * const { count } = await prisma.luckperms_players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_playersDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_playersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_playersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_playersUpdateManyArgs>(
      args: SelectSubset<T, luckperms_playersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_players.
     * @param {luckperms_playersUpsertArgs} args - Arguments to update or create a Luckperms_players.
     * @example
     * // Update or create a Luckperms_players
     * const luckperms_players = await prisma.luckperms_players.upsert({
     *   create: {
     *     // ... data to create a Luckperms_players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_players we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_playersUpsertArgs>(
      args: SelectSubset<T, luckperms_playersUpsertArgs>
    ): Prisma__luckperms_playersClient<luckperms_playersGetPayload<T>>

    /**
     * Count the number of Luckperms_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_playersCountArgs} args - Arguments to filter Luckperms_players to count.
     * @example
     * // Count the number of Luckperms_players
     * const count = await prisma.luckperms_players.count({
     *   where: {
     *     // ... the filter for the Luckperms_players we want to count
     *   }
     * })
    **/
    count<T extends luckperms_playersCountArgs>(
      args?: Subset<T, luckperms_playersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_playersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_playersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_playersAggregateArgs>(args: Subset<T, Luckperms_playersAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_playersAggregateType<T>>

    /**
     * Group by Luckperms_players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_playersGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_playersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_playersGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_playersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_playersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_playersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_playersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_players base type for findUnique actions
   */
  export type luckperms_playersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter, which luckperms_players to fetch.
     */
    where: luckperms_playersWhereUniqueInput
  }

  /**
   * luckperms_players findUnique
   */
  export interface luckperms_playersFindUniqueArgs extends luckperms_playersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_players findUniqueOrThrow
   */
  export type luckperms_playersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter, which luckperms_players to fetch.
     */
    where: luckperms_playersWhereUniqueInput
  }


  /**
   * luckperms_players base type for findFirst actions
   */
  export type luckperms_playersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter, which luckperms_players to fetch.
     */
    where?: luckperms_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_players to fetch.
     */
    orderBy?: Enumerable<luckperms_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_players.
     */
    cursor?: luckperms_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_players.
     */
    distinct?: Enumerable<Luckperms_playersScalarFieldEnum>
  }

  /**
   * luckperms_players findFirst
   */
  export interface luckperms_playersFindFirstArgs extends luckperms_playersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_players findFirstOrThrow
   */
  export type luckperms_playersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter, which luckperms_players to fetch.
     */
    where?: luckperms_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_players to fetch.
     */
    orderBy?: Enumerable<luckperms_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_players.
     */
    cursor?: luckperms_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_players.
     */
    distinct?: Enumerable<Luckperms_playersScalarFieldEnum>
  }


  /**
   * luckperms_players findMany
   */
  export type luckperms_playersFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter, which luckperms_players to fetch.
     */
    where?: luckperms_playersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_players to fetch.
     */
    orderBy?: Enumerable<luckperms_playersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_players.
     */
    cursor?: luckperms_playersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_players.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_playersScalarFieldEnum>
  }


  /**
   * luckperms_players create
   */
  export type luckperms_playersCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * The data needed to create a luckperms_players.
     */
    data: XOR<luckperms_playersCreateInput, luckperms_playersUncheckedCreateInput>
  }


  /**
   * luckperms_players createMany
   */
  export type luckperms_playersCreateManyArgs = {
    /**
     * The data used to create many luckperms_players.
     */
    data: Enumerable<luckperms_playersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_players update
   */
  export type luckperms_playersUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * The data needed to update a luckperms_players.
     */
    data: XOR<luckperms_playersUpdateInput, luckperms_playersUncheckedUpdateInput>
    /**
     * Choose, which luckperms_players to update.
     */
    where: luckperms_playersWhereUniqueInput
  }


  /**
   * luckperms_players updateMany
   */
  export type luckperms_playersUpdateManyArgs = {
    /**
     * The data used to update luckperms_players.
     */
    data: XOR<luckperms_playersUpdateManyMutationInput, luckperms_playersUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_players to update
     */
    where?: luckperms_playersWhereInput
  }


  /**
   * luckperms_players upsert
   */
  export type luckperms_playersUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * The filter to search for the luckperms_players to update in case it exists.
     */
    where: luckperms_playersWhereUniqueInput
    /**
     * In case the luckperms_players found by the `where` argument doesn't exist, create a new luckperms_players with this data.
     */
    create: XOR<luckperms_playersCreateInput, luckperms_playersUncheckedCreateInput>
    /**
     * In case the luckperms_players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_playersUpdateInput, luckperms_playersUncheckedUpdateInput>
  }


  /**
   * luckperms_players delete
   */
  export type luckperms_playersDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
    /**
     * Filter which luckperms_players to delete.
     */
    where: luckperms_playersWhereUniqueInput
  }


  /**
   * luckperms_players deleteMany
   */
  export type luckperms_playersDeleteManyArgs = {
    /**
     * Filter which luckperms_players to delete
     */
    where?: luckperms_playersWhereInput
  }


  /**
   * luckperms_players without action
   */
  export type luckperms_playersArgs = {
    /**
     * Select specific fields to fetch from the luckperms_players
     */
    select?: luckperms_playersSelect | null
  }



  /**
   * Model luckperms_tracks
   */


  export type AggregateLuckperms_tracks = {
    _count: Luckperms_tracksCountAggregateOutputType | null
    _min: Luckperms_tracksMinAggregateOutputType | null
    _max: Luckperms_tracksMaxAggregateOutputType | null
  }

  export type Luckperms_tracksMinAggregateOutputType = {
    name: string | null
    groups: string | null
  }

  export type Luckperms_tracksMaxAggregateOutputType = {
    name: string | null
    groups: string | null
  }

  export type Luckperms_tracksCountAggregateOutputType = {
    name: number
    groups: number
    _all: number
  }


  export type Luckperms_tracksMinAggregateInputType = {
    name?: true
    groups?: true
  }

  export type Luckperms_tracksMaxAggregateInputType = {
    name?: true
    groups?: true
  }

  export type Luckperms_tracksCountAggregateInputType = {
    name?: true
    groups?: true
    _all?: true
  }

  export type Luckperms_tracksAggregateArgs = {
    /**
     * Filter which luckperms_tracks to aggregate.
     */
    where?: luckperms_tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_tracks to fetch.
     */
    orderBy?: Enumerable<luckperms_tracksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_tracks
    **/
    _count?: true | Luckperms_tracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_tracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_tracksMaxAggregateInputType
  }

  export type GetLuckperms_tracksAggregateType<T extends Luckperms_tracksAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_tracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_tracks[P]>
      : GetScalarType<T[P], AggregateLuckperms_tracks[P]>
  }




  export type Luckperms_tracksGroupByArgs = {
    where?: luckperms_tracksWhereInput
    orderBy?: Enumerable<luckperms_tracksOrderByWithAggregationInput>
    by: Luckperms_tracksScalarFieldEnum[]
    having?: luckperms_tracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_tracksCountAggregateInputType | true
    _min?: Luckperms_tracksMinAggregateInputType
    _max?: Luckperms_tracksMaxAggregateInputType
  }


  export type Luckperms_tracksGroupByOutputType = {
    name: string
    groups: string
    _count: Luckperms_tracksCountAggregateOutputType | null
    _min: Luckperms_tracksMinAggregateOutputType | null
    _max: Luckperms_tracksMaxAggregateOutputType | null
  }

  type GetLuckperms_tracksGroupByPayload<T extends Luckperms_tracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_tracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_tracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_tracksGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_tracksGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_tracksSelect = {
    name?: boolean
    groups?: boolean
  }


  export type luckperms_tracksGetPayload<S extends boolean | null | undefined | luckperms_tracksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_tracks :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_tracksArgs | luckperms_tracksFindManyArgs)
    ? luckperms_tracks 
    : S extends { select: any } & (luckperms_tracksArgs | luckperms_tracksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_tracks ? luckperms_tracks[P] : never
  } 
      : luckperms_tracks


  type luckperms_tracksCountArgs = 
    Omit<luckperms_tracksFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_tracksCountAggregateInputType | true
    }

  export interface luckperms_tracksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_tracks that matches the filter.
     * @param {luckperms_tracksFindUniqueArgs} args - Arguments to find a Luckperms_tracks
     * @example
     * // Get one Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_tracksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_tracksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_tracks'> extends True ? Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>> : Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T> | null, null>

    /**
     * Find one Luckperms_tracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_tracksFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_tracks
     * @example
     * // Get one Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_tracksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_tracksFindUniqueOrThrowArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Find the first Luckperms_tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_tracksFindFirstArgs} args - Arguments to find a Luckperms_tracks
     * @example
     * // Get one Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_tracksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_tracksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_tracks'> extends True ? Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>> : Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_tracks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_tracksFindFirstOrThrowArgs} args - Arguments to find a Luckperms_tracks
     * @example
     * // Get one Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_tracksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_tracksFindFirstOrThrowArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Find zero or more Luckperms_tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_tracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findMany()
     * 
     * // Get first 10 Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const luckperms_tracksWithNameOnly = await prisma.luckperms_tracks.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends luckperms_tracksFindManyArgs>(
      args?: SelectSubset<T, luckperms_tracksFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_tracksGetPayload<T>>>

    /**
     * Create a Luckperms_tracks.
     * @param {luckperms_tracksCreateArgs} args - Arguments to create a Luckperms_tracks.
     * @example
     * // Create one Luckperms_tracks
     * const Luckperms_tracks = await prisma.luckperms_tracks.create({
     *   data: {
     *     // ... data to create a Luckperms_tracks
     *   }
     * })
     * 
    **/
    create<T extends luckperms_tracksCreateArgs>(
      args: SelectSubset<T, luckperms_tracksCreateArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Create many Luckperms_tracks.
     *     @param {luckperms_tracksCreateManyArgs} args - Arguments to create many Luckperms_tracks.
     *     @example
     *     // Create many Luckperms_tracks
     *     const luckperms_tracks = await prisma.luckperms_tracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_tracksCreateManyArgs>(
      args?: SelectSubset<T, luckperms_tracksCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_tracks.
     * @param {luckperms_tracksDeleteArgs} args - Arguments to delete one Luckperms_tracks.
     * @example
     * // Delete one Luckperms_tracks
     * const Luckperms_tracks = await prisma.luckperms_tracks.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_tracks
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_tracksDeleteArgs>(
      args: SelectSubset<T, luckperms_tracksDeleteArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Update one Luckperms_tracks.
     * @param {luckperms_tracksUpdateArgs} args - Arguments to update one Luckperms_tracks.
     * @example
     * // Update one Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_tracksUpdateArgs>(
      args: SelectSubset<T, luckperms_tracksUpdateArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Delete zero or more Luckperms_tracks.
     * @param {luckperms_tracksDeleteManyArgs} args - Arguments to filter Luckperms_tracks to delete.
     * @example
     * // Delete a few Luckperms_tracks
     * const { count } = await prisma.luckperms_tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_tracksDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_tracksDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_tracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_tracksUpdateManyArgs>(
      args: SelectSubset<T, luckperms_tracksUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_tracks.
     * @param {luckperms_tracksUpsertArgs} args - Arguments to update or create a Luckperms_tracks.
     * @example
     * // Update or create a Luckperms_tracks
     * const luckperms_tracks = await prisma.luckperms_tracks.upsert({
     *   create: {
     *     // ... data to create a Luckperms_tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_tracks we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_tracksUpsertArgs>(
      args: SelectSubset<T, luckperms_tracksUpsertArgs>
    ): Prisma__luckperms_tracksClient<luckperms_tracksGetPayload<T>>

    /**
     * Count the number of Luckperms_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_tracksCountArgs} args - Arguments to filter Luckperms_tracks to count.
     * @example
     * // Count the number of Luckperms_tracks
     * const count = await prisma.luckperms_tracks.count({
     *   where: {
     *     // ... the filter for the Luckperms_tracks we want to count
     *   }
     * })
    **/
    count<T extends luckperms_tracksCountArgs>(
      args?: Subset<T, luckperms_tracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_tracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_tracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_tracksAggregateArgs>(args: Subset<T, Luckperms_tracksAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_tracksAggregateType<T>>

    /**
     * Group by Luckperms_tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_tracksGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_tracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_tracksGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_tracksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_tracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_tracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_tracksClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_tracks base type for findUnique actions
   */
  export type luckperms_tracksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter, which luckperms_tracks to fetch.
     */
    where: luckperms_tracksWhereUniqueInput
  }

  /**
   * luckperms_tracks findUnique
   */
  export interface luckperms_tracksFindUniqueArgs extends luckperms_tracksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_tracks findUniqueOrThrow
   */
  export type luckperms_tracksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter, which luckperms_tracks to fetch.
     */
    where: luckperms_tracksWhereUniqueInput
  }


  /**
   * luckperms_tracks base type for findFirst actions
   */
  export type luckperms_tracksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter, which luckperms_tracks to fetch.
     */
    where?: luckperms_tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_tracks to fetch.
     */
    orderBy?: Enumerable<luckperms_tracksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_tracks.
     */
    cursor?: luckperms_tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_tracks.
     */
    distinct?: Enumerable<Luckperms_tracksScalarFieldEnum>
  }

  /**
   * luckperms_tracks findFirst
   */
  export interface luckperms_tracksFindFirstArgs extends luckperms_tracksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_tracks findFirstOrThrow
   */
  export type luckperms_tracksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter, which luckperms_tracks to fetch.
     */
    where?: luckperms_tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_tracks to fetch.
     */
    orderBy?: Enumerable<luckperms_tracksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_tracks.
     */
    cursor?: luckperms_tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_tracks.
     */
    distinct?: Enumerable<Luckperms_tracksScalarFieldEnum>
  }


  /**
   * luckperms_tracks findMany
   */
  export type luckperms_tracksFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter, which luckperms_tracks to fetch.
     */
    where?: luckperms_tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_tracks to fetch.
     */
    orderBy?: Enumerable<luckperms_tracksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_tracks.
     */
    cursor?: luckperms_tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_tracks.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_tracksScalarFieldEnum>
  }


  /**
   * luckperms_tracks create
   */
  export type luckperms_tracksCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * The data needed to create a luckperms_tracks.
     */
    data: XOR<luckperms_tracksCreateInput, luckperms_tracksUncheckedCreateInput>
  }


  /**
   * luckperms_tracks createMany
   */
  export type luckperms_tracksCreateManyArgs = {
    /**
     * The data used to create many luckperms_tracks.
     */
    data: Enumerable<luckperms_tracksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_tracks update
   */
  export type luckperms_tracksUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * The data needed to update a luckperms_tracks.
     */
    data: XOR<luckperms_tracksUpdateInput, luckperms_tracksUncheckedUpdateInput>
    /**
     * Choose, which luckperms_tracks to update.
     */
    where: luckperms_tracksWhereUniqueInput
  }


  /**
   * luckperms_tracks updateMany
   */
  export type luckperms_tracksUpdateManyArgs = {
    /**
     * The data used to update luckperms_tracks.
     */
    data: XOR<luckperms_tracksUpdateManyMutationInput, luckperms_tracksUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_tracks to update
     */
    where?: luckperms_tracksWhereInput
  }


  /**
   * luckperms_tracks upsert
   */
  export type luckperms_tracksUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * The filter to search for the luckperms_tracks to update in case it exists.
     */
    where: luckperms_tracksWhereUniqueInput
    /**
     * In case the luckperms_tracks found by the `where` argument doesn't exist, create a new luckperms_tracks with this data.
     */
    create: XOR<luckperms_tracksCreateInput, luckperms_tracksUncheckedCreateInput>
    /**
     * In case the luckperms_tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_tracksUpdateInput, luckperms_tracksUncheckedUpdateInput>
  }


  /**
   * luckperms_tracks delete
   */
  export type luckperms_tracksDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
    /**
     * Filter which luckperms_tracks to delete.
     */
    where: luckperms_tracksWhereUniqueInput
  }


  /**
   * luckperms_tracks deleteMany
   */
  export type luckperms_tracksDeleteManyArgs = {
    /**
     * Filter which luckperms_tracks to delete
     */
    where?: luckperms_tracksWhereInput
  }


  /**
   * luckperms_tracks without action
   */
  export type luckperms_tracksArgs = {
    /**
     * Select specific fields to fetch from the luckperms_tracks
     */
    select?: luckperms_tracksSelect | null
  }



  /**
   * Model luckperms_user_permissions
   */


  export type AggregateLuckperms_user_permissions = {
    _count: Luckperms_user_permissionsCountAggregateOutputType | null
    _avg: Luckperms_user_permissionsAvgAggregateOutputType | null
    _sum: Luckperms_user_permissionsSumAggregateOutputType | null
    _min: Luckperms_user_permissionsMinAggregateOutputType | null
    _max: Luckperms_user_permissionsMaxAggregateOutputType | null
  }

  export type Luckperms_user_permissionsAvgAggregateOutputType = {
    id: number | null
    expiry: number | null
  }

  export type Luckperms_user_permissionsSumAggregateOutputType = {
    id: number | null
    expiry: bigint | null
  }

  export type Luckperms_user_permissionsMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    permission: string | null
    value: boolean | null
    server: string | null
    world: string | null
    expiry: bigint | null
    contexts: string | null
  }

  export type Luckperms_user_permissionsMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    permission: string | null
    value: boolean | null
    server: string | null
    world: string | null
    expiry: bigint | null
    contexts: string | null
  }

  export type Luckperms_user_permissionsCountAggregateOutputType = {
    id: number
    uuid: number
    permission: number
    value: number
    server: number
    world: number
    expiry: number
    contexts: number
    _all: number
  }


  export type Luckperms_user_permissionsAvgAggregateInputType = {
    id?: true
    expiry?: true
  }

  export type Luckperms_user_permissionsSumAggregateInputType = {
    id?: true
    expiry?: true
  }

  export type Luckperms_user_permissionsMinAggregateInputType = {
    id?: true
    uuid?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
  }

  export type Luckperms_user_permissionsMaxAggregateInputType = {
    id?: true
    uuid?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
  }

  export type Luckperms_user_permissionsCountAggregateInputType = {
    id?: true
    uuid?: true
    permission?: true
    value?: true
    server?: true
    world?: true
    expiry?: true
    contexts?: true
    _all?: true
  }

  export type Luckperms_user_permissionsAggregateArgs = {
    /**
     * Filter which luckperms_user_permissions to aggregate.
     */
    where?: luckperms_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_user_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: luckperms_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned luckperms_user_permissions
    **/
    _count?: true | Luckperms_user_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Luckperms_user_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Luckperms_user_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Luckperms_user_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Luckperms_user_permissionsMaxAggregateInputType
  }

  export type GetLuckperms_user_permissionsAggregateType<T extends Luckperms_user_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckperms_user_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckperms_user_permissions[P]>
      : GetScalarType<T[P], AggregateLuckperms_user_permissions[P]>
  }




  export type Luckperms_user_permissionsGroupByArgs = {
    where?: luckperms_user_permissionsWhereInput
    orderBy?: Enumerable<luckperms_user_permissionsOrderByWithAggregationInput>
    by: Luckperms_user_permissionsScalarFieldEnum[]
    having?: luckperms_user_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Luckperms_user_permissionsCountAggregateInputType | true
    _avg?: Luckperms_user_permissionsAvgAggregateInputType
    _sum?: Luckperms_user_permissionsSumAggregateInputType
    _min?: Luckperms_user_permissionsMinAggregateInputType
    _max?: Luckperms_user_permissionsMaxAggregateInputType
  }


  export type Luckperms_user_permissionsGroupByOutputType = {
    id: number
    uuid: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint
    contexts: string
    _count: Luckperms_user_permissionsCountAggregateOutputType | null
    _avg: Luckperms_user_permissionsAvgAggregateOutputType | null
    _sum: Luckperms_user_permissionsSumAggregateOutputType | null
    _min: Luckperms_user_permissionsMinAggregateOutputType | null
    _max: Luckperms_user_permissionsMaxAggregateOutputType | null
  }

  type GetLuckperms_user_permissionsGroupByPayload<T extends Luckperms_user_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Luckperms_user_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Luckperms_user_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Luckperms_user_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Luckperms_user_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type luckperms_user_permissionsSelect = {
    id?: boolean
    uuid?: boolean
    permission?: boolean
    value?: boolean
    server?: boolean
    world?: boolean
    expiry?: boolean
    contexts?: boolean
  }


  export type luckperms_user_permissionsGetPayload<S extends boolean | null | undefined | luckperms_user_permissionsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? luckperms_user_permissions :
    S extends undefined ? never :
    S extends { include: any } & (luckperms_user_permissionsArgs | luckperms_user_permissionsFindManyArgs)
    ? luckperms_user_permissions 
    : S extends { select: any } & (luckperms_user_permissionsArgs | luckperms_user_permissionsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof luckperms_user_permissions ? luckperms_user_permissions[P] : never
  } 
      : luckperms_user_permissions


  type luckperms_user_permissionsCountArgs = 
    Omit<luckperms_user_permissionsFindManyArgs, 'select' | 'include'> & {
      select?: Luckperms_user_permissionsCountAggregateInputType | true
    }

  export interface luckperms_user_permissionsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Luckperms_user_permissions that matches the filter.
     * @param {luckperms_user_permissionsFindUniqueArgs} args - Arguments to find a Luckperms_user_permissions
     * @example
     * // Get one Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends luckperms_user_permissionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, luckperms_user_permissionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'luckperms_user_permissions'> extends True ? Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>> : Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T> | null, null>

    /**
     * Find one Luckperms_user_permissions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {luckperms_user_permissionsFindUniqueOrThrowArgs} args - Arguments to find a Luckperms_user_permissions
     * @example
     * // Get one Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends luckperms_user_permissionsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, luckperms_user_permissionsFindUniqueOrThrowArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Find the first Luckperms_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_user_permissionsFindFirstArgs} args - Arguments to find a Luckperms_user_permissions
     * @example
     * // Get one Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends luckperms_user_permissionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, luckperms_user_permissionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'luckperms_user_permissions'> extends True ? Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>> : Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T> | null, null>

    /**
     * Find the first Luckperms_user_permissions that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_user_permissionsFindFirstOrThrowArgs} args - Arguments to find a Luckperms_user_permissions
     * @example
     * // Get one Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends luckperms_user_permissionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, luckperms_user_permissionsFindFirstOrThrowArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Find zero or more Luckperms_user_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_user_permissionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findMany()
     * 
     * // Get first 10 Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luckperms_user_permissionsWithIdOnly = await prisma.luckperms_user_permissions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends luckperms_user_permissionsFindManyArgs>(
      args?: SelectSubset<T, luckperms_user_permissionsFindManyArgs>
    ): Prisma.PrismaPromise<Array<luckperms_user_permissionsGetPayload<T>>>

    /**
     * Create a Luckperms_user_permissions.
     * @param {luckperms_user_permissionsCreateArgs} args - Arguments to create a Luckperms_user_permissions.
     * @example
     * // Create one Luckperms_user_permissions
     * const Luckperms_user_permissions = await prisma.luckperms_user_permissions.create({
     *   data: {
     *     // ... data to create a Luckperms_user_permissions
     *   }
     * })
     * 
    **/
    create<T extends luckperms_user_permissionsCreateArgs>(
      args: SelectSubset<T, luckperms_user_permissionsCreateArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Create many Luckperms_user_permissions.
     *     @param {luckperms_user_permissionsCreateManyArgs} args - Arguments to create many Luckperms_user_permissions.
     *     @example
     *     // Create many Luckperms_user_permissions
     *     const luckperms_user_permissions = await prisma.luckperms_user_permissions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends luckperms_user_permissionsCreateManyArgs>(
      args?: SelectSubset<T, luckperms_user_permissionsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Luckperms_user_permissions.
     * @param {luckperms_user_permissionsDeleteArgs} args - Arguments to delete one Luckperms_user_permissions.
     * @example
     * // Delete one Luckperms_user_permissions
     * const Luckperms_user_permissions = await prisma.luckperms_user_permissions.delete({
     *   where: {
     *     // ... filter to delete one Luckperms_user_permissions
     *   }
     * })
     * 
    **/
    delete<T extends luckperms_user_permissionsDeleteArgs>(
      args: SelectSubset<T, luckperms_user_permissionsDeleteArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Update one Luckperms_user_permissions.
     * @param {luckperms_user_permissionsUpdateArgs} args - Arguments to update one Luckperms_user_permissions.
     * @example
     * // Update one Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends luckperms_user_permissionsUpdateArgs>(
      args: SelectSubset<T, luckperms_user_permissionsUpdateArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Delete zero or more Luckperms_user_permissions.
     * @param {luckperms_user_permissionsDeleteManyArgs} args - Arguments to filter Luckperms_user_permissions to delete.
     * @example
     * // Delete a few Luckperms_user_permissions
     * const { count } = await prisma.luckperms_user_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends luckperms_user_permissionsDeleteManyArgs>(
      args?: SelectSubset<T, luckperms_user_permissionsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Luckperms_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_user_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends luckperms_user_permissionsUpdateManyArgs>(
      args: SelectSubset<T, luckperms_user_permissionsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Luckperms_user_permissions.
     * @param {luckperms_user_permissionsUpsertArgs} args - Arguments to update or create a Luckperms_user_permissions.
     * @example
     * // Update or create a Luckperms_user_permissions
     * const luckperms_user_permissions = await prisma.luckperms_user_permissions.upsert({
     *   create: {
     *     // ... data to create a Luckperms_user_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Luckperms_user_permissions we want to update
     *   }
     * })
    **/
    upsert<T extends luckperms_user_permissionsUpsertArgs>(
      args: SelectSubset<T, luckperms_user_permissionsUpsertArgs>
    ): Prisma__luckperms_user_permissionsClient<luckperms_user_permissionsGetPayload<T>>

    /**
     * Count the number of Luckperms_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {luckperms_user_permissionsCountArgs} args - Arguments to filter Luckperms_user_permissions to count.
     * @example
     * // Count the number of Luckperms_user_permissions
     * const count = await prisma.luckperms_user_permissions.count({
     *   where: {
     *     // ... the filter for the Luckperms_user_permissions we want to count
     *   }
     * })
    **/
    count<T extends luckperms_user_permissionsCountArgs>(
      args?: Subset<T, luckperms_user_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Luckperms_user_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Luckperms_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_user_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Luckperms_user_permissionsAggregateArgs>(args: Subset<T, Luckperms_user_permissionsAggregateArgs>): Prisma.PrismaPromise<GetLuckperms_user_permissionsAggregateType<T>>

    /**
     * Group by Luckperms_user_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Luckperms_user_permissionsGroupByArgs} args - Group by arguments.
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
      T extends Luckperms_user_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Luckperms_user_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: Luckperms_user_permissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Luckperms_user_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckperms_user_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for luckperms_user_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__luckperms_user_permissionsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * luckperms_user_permissions base type for findUnique actions
   */
  export type luckperms_user_permissionsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter, which luckperms_user_permissions to fetch.
     */
    where: luckperms_user_permissionsWhereUniqueInput
  }

  /**
   * luckperms_user_permissions findUnique
   */
  export interface luckperms_user_permissionsFindUniqueArgs extends luckperms_user_permissionsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_user_permissions findUniqueOrThrow
   */
  export type luckperms_user_permissionsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter, which luckperms_user_permissions to fetch.
     */
    where: luckperms_user_permissionsWhereUniqueInput
  }


  /**
   * luckperms_user_permissions base type for findFirst actions
   */
  export type luckperms_user_permissionsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter, which luckperms_user_permissions to fetch.
     */
    where?: luckperms_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_user_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_user_permissions.
     */
    cursor?: luckperms_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_user_permissions.
     */
    distinct?: Enumerable<Luckperms_user_permissionsScalarFieldEnum>
  }

  /**
   * luckperms_user_permissions findFirst
   */
  export interface luckperms_user_permissionsFindFirstArgs extends luckperms_user_permissionsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * luckperms_user_permissions findFirstOrThrow
   */
  export type luckperms_user_permissionsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter, which luckperms_user_permissions to fetch.
     */
    where?: luckperms_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_user_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for luckperms_user_permissions.
     */
    cursor?: luckperms_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of luckperms_user_permissions.
     */
    distinct?: Enumerable<Luckperms_user_permissionsScalarFieldEnum>
  }


  /**
   * luckperms_user_permissions findMany
   */
  export type luckperms_user_permissionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter, which luckperms_user_permissions to fetch.
     */
    where?: luckperms_user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of luckperms_user_permissions to fetch.
     */
    orderBy?: Enumerable<luckperms_user_permissionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing luckperms_user_permissions.
     */
    cursor?: luckperms_user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` luckperms_user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` luckperms_user_permissions.
     */
    skip?: number
    distinct?: Enumerable<Luckperms_user_permissionsScalarFieldEnum>
  }


  /**
   * luckperms_user_permissions create
   */
  export type luckperms_user_permissionsCreateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * The data needed to create a luckperms_user_permissions.
     */
    data: XOR<luckperms_user_permissionsCreateInput, luckperms_user_permissionsUncheckedCreateInput>
  }


  /**
   * luckperms_user_permissions createMany
   */
  export type luckperms_user_permissionsCreateManyArgs = {
    /**
     * The data used to create many luckperms_user_permissions.
     */
    data: Enumerable<luckperms_user_permissionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * luckperms_user_permissions update
   */
  export type luckperms_user_permissionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * The data needed to update a luckperms_user_permissions.
     */
    data: XOR<luckperms_user_permissionsUpdateInput, luckperms_user_permissionsUncheckedUpdateInput>
    /**
     * Choose, which luckperms_user_permissions to update.
     */
    where: luckperms_user_permissionsWhereUniqueInput
  }


  /**
   * luckperms_user_permissions updateMany
   */
  export type luckperms_user_permissionsUpdateManyArgs = {
    /**
     * The data used to update luckperms_user_permissions.
     */
    data: XOR<luckperms_user_permissionsUpdateManyMutationInput, luckperms_user_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which luckperms_user_permissions to update
     */
    where?: luckperms_user_permissionsWhereInput
  }


  /**
   * luckperms_user_permissions upsert
   */
  export type luckperms_user_permissionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * The filter to search for the luckperms_user_permissions to update in case it exists.
     */
    where: luckperms_user_permissionsWhereUniqueInput
    /**
     * In case the luckperms_user_permissions found by the `where` argument doesn't exist, create a new luckperms_user_permissions with this data.
     */
    create: XOR<luckperms_user_permissionsCreateInput, luckperms_user_permissionsUncheckedCreateInput>
    /**
     * In case the luckperms_user_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<luckperms_user_permissionsUpdateInput, luckperms_user_permissionsUncheckedUpdateInput>
  }


  /**
   * luckperms_user_permissions delete
   */
  export type luckperms_user_permissionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
    /**
     * Filter which luckperms_user_permissions to delete.
     */
    where: luckperms_user_permissionsWhereUniqueInput
  }


  /**
   * luckperms_user_permissions deleteMany
   */
  export type luckperms_user_permissionsDeleteManyArgs = {
    /**
     * Filter which luckperms_user_permissions to delete
     */
    where?: luckperms_user_permissionsWhereInput
  }


  /**
   * luckperms_user_permissions without action
   */
  export type luckperms_user_permissionsArgs = {
    /**
     * Select specific fields to fetch from the luckperms_user_permissions
     */
    select?: luckperms_user_permissionsSelect | null
  }



  /**
   * Enums
   */

  export const Luckperms_actionsScalarFieldEnum: {
    id: 'id',
    time: 'time',
    actor_uuid: 'actor_uuid',
    actor_name: 'actor_name',
    type: 'type',
    acted_uuid: 'acted_uuid',
    acted_name: 'acted_name',
    action: 'action'
  };

  export type Luckperms_actionsScalarFieldEnum = (typeof Luckperms_actionsScalarFieldEnum)[keyof typeof Luckperms_actionsScalarFieldEnum]


  export const Luckperms_group_permissionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    permission: 'permission',
    value: 'value',
    server: 'server',
    world: 'world',
    expiry: 'expiry',
    contexts: 'contexts'
  };

  export type Luckperms_group_permissionsScalarFieldEnum = (typeof Luckperms_group_permissionsScalarFieldEnum)[keyof typeof Luckperms_group_permissionsScalarFieldEnum]


  export const Luckperms_groupsScalarFieldEnum: {
    name: 'name'
  };

  export type Luckperms_groupsScalarFieldEnum = (typeof Luckperms_groupsScalarFieldEnum)[keyof typeof Luckperms_groupsScalarFieldEnum]


  export const Luckperms_messengerScalarFieldEnum: {
    id: 'id',
    time: 'time',
    msg: 'msg'
  };

  export type Luckperms_messengerScalarFieldEnum = (typeof Luckperms_messengerScalarFieldEnum)[keyof typeof Luckperms_messengerScalarFieldEnum]


  export const Luckperms_playersScalarFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    primary_group: 'primary_group'
  };

  export type Luckperms_playersScalarFieldEnum = (typeof Luckperms_playersScalarFieldEnum)[keyof typeof Luckperms_playersScalarFieldEnum]


  export const Luckperms_tracksScalarFieldEnum: {
    name: 'name',
    groups: 'groups'
  };

  export type Luckperms_tracksScalarFieldEnum = (typeof Luckperms_tracksScalarFieldEnum)[keyof typeof Luckperms_tracksScalarFieldEnum]


  export const Luckperms_user_permissionsScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    permission: 'permission',
    value: 'value',
    server: 'server',
    world: 'world',
    expiry: 'expiry',
    contexts: 'contexts'
  };

  export type Luckperms_user_permissionsScalarFieldEnum = (typeof Luckperms_user_permissionsScalarFieldEnum)[keyof typeof Luckperms_user_permissionsScalarFieldEnum]


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


  export type luckperms_actionsWhereInput = {
    AND?: Enumerable<luckperms_actionsWhereInput>
    OR?: Enumerable<luckperms_actionsWhereInput>
    NOT?: Enumerable<luckperms_actionsWhereInput>
    id?: IntFilter | number
    time?: BigIntFilter | bigint | number
    actor_uuid?: StringFilter | string
    actor_name?: StringFilter | string
    type?: StringFilter | string
    acted_uuid?: StringFilter | string
    acted_name?: StringFilter | string
    action?: StringFilter | string
  }

  export type luckperms_actionsOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    actor_uuid?: SortOrder
    actor_name?: SortOrder
    type?: SortOrder
    acted_uuid?: SortOrder
    acted_name?: SortOrder
    action?: SortOrder
  }

  export type luckperms_actionsWhereUniqueInput = {
    id?: number
  }

  export type luckperms_actionsOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    actor_uuid?: SortOrder
    actor_name?: SortOrder
    type?: SortOrder
    acted_uuid?: SortOrder
    acted_name?: SortOrder
    action?: SortOrder
    _count?: luckperms_actionsCountOrderByAggregateInput
    _avg?: luckperms_actionsAvgOrderByAggregateInput
    _max?: luckperms_actionsMaxOrderByAggregateInput
    _min?: luckperms_actionsMinOrderByAggregateInput
    _sum?: luckperms_actionsSumOrderByAggregateInput
  }

  export type luckperms_actionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_actionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_actionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_actionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    time?: BigIntWithAggregatesFilter | bigint | number
    actor_uuid?: StringWithAggregatesFilter | string
    actor_name?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    acted_uuid?: StringWithAggregatesFilter | string
    acted_name?: StringWithAggregatesFilter | string
    action?: StringWithAggregatesFilter | string
  }

  export type luckperms_group_permissionsWhereInput = {
    AND?: Enumerable<luckperms_group_permissionsWhereInput>
    OR?: Enumerable<luckperms_group_permissionsWhereInput>
    NOT?: Enumerable<luckperms_group_permissionsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    permission?: StringFilter | string
    value?: BoolFilter | boolean
    server?: StringFilter | string
    world?: StringFilter | string
    expiry?: BigIntFilter | bigint | number
    contexts?: StringFilter | string
  }

  export type luckperms_group_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_group_permissionsWhereUniqueInput = {
    id?: number
  }

  export type luckperms_group_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
    _count?: luckperms_group_permissionsCountOrderByAggregateInput
    _avg?: luckperms_group_permissionsAvgOrderByAggregateInput
    _max?: luckperms_group_permissionsMaxOrderByAggregateInput
    _min?: luckperms_group_permissionsMinOrderByAggregateInput
    _sum?: luckperms_group_permissionsSumOrderByAggregateInput
  }

  export type luckperms_group_permissionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_group_permissionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_group_permissionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_group_permissionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    permission?: StringWithAggregatesFilter | string
    value?: BoolWithAggregatesFilter | boolean
    server?: StringWithAggregatesFilter | string
    world?: StringWithAggregatesFilter | string
    expiry?: BigIntWithAggregatesFilter | bigint | number
    contexts?: StringWithAggregatesFilter | string
  }

  export type luckperms_groupsWhereInput = {
    AND?: Enumerable<luckperms_groupsWhereInput>
    OR?: Enumerable<luckperms_groupsWhereInput>
    NOT?: Enumerable<luckperms_groupsWhereInput>
    name?: StringFilter | string
  }

  export type luckperms_groupsOrderByWithRelationInput = {
    name?: SortOrder
  }

  export type luckperms_groupsWhereUniqueInput = {
    name?: string
  }

  export type luckperms_groupsOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: luckperms_groupsCountOrderByAggregateInput
    _max?: luckperms_groupsMaxOrderByAggregateInput
    _min?: luckperms_groupsMinOrderByAggregateInput
  }

  export type luckperms_groupsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_groupsScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_groupsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_groupsScalarWhereWithAggregatesInput>
    name?: StringWithAggregatesFilter | string
  }

  export type luckperms_messengerWhereInput = {
    AND?: Enumerable<luckperms_messengerWhereInput>
    OR?: Enumerable<luckperms_messengerWhereInput>
    NOT?: Enumerable<luckperms_messengerWhereInput>
    id?: IntFilter | number
    time?: DateTimeFilter | Date | string
    msg?: StringFilter | string
  }

  export type luckperms_messengerOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    msg?: SortOrder
  }

  export type luckperms_messengerWhereUniqueInput = {
    id?: number
  }

  export type luckperms_messengerOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    msg?: SortOrder
    _count?: luckperms_messengerCountOrderByAggregateInput
    _avg?: luckperms_messengerAvgOrderByAggregateInput
    _max?: luckperms_messengerMaxOrderByAggregateInput
    _min?: luckperms_messengerMinOrderByAggregateInput
    _sum?: luckperms_messengerSumOrderByAggregateInput
  }

  export type luckperms_messengerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_messengerScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_messengerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_messengerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    time?: DateTimeWithAggregatesFilter | Date | string
    msg?: StringWithAggregatesFilter | string
  }

  export type luckperms_playersWhereInput = {
    AND?: Enumerable<luckperms_playersWhereInput>
    OR?: Enumerable<luckperms_playersWhereInput>
    NOT?: Enumerable<luckperms_playersWhereInput>
    uuid?: StringFilter | string
    username?: StringFilter | string
    primary_group?: StringFilter | string
  }

  export type luckperms_playersOrderByWithRelationInput = {
    uuid?: SortOrder
    username?: SortOrder
    primary_group?: SortOrder
  }

  export type luckperms_playersWhereUniqueInput = {
    uuid?: string
  }

  export type luckperms_playersOrderByWithAggregationInput = {
    uuid?: SortOrder
    username?: SortOrder
    primary_group?: SortOrder
    _count?: luckperms_playersCountOrderByAggregateInput
    _max?: luckperms_playersMaxOrderByAggregateInput
    _min?: luckperms_playersMinOrderByAggregateInput
  }

  export type luckperms_playersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_playersScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_playersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_playersScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    primary_group?: StringWithAggregatesFilter | string
  }

  export type luckperms_tracksWhereInput = {
    AND?: Enumerable<luckperms_tracksWhereInput>
    OR?: Enumerable<luckperms_tracksWhereInput>
    NOT?: Enumerable<luckperms_tracksWhereInput>
    name?: StringFilter | string
    groups?: StringFilter | string
  }

  export type luckperms_tracksOrderByWithRelationInput = {
    name?: SortOrder
    groups?: SortOrder
  }

  export type luckperms_tracksWhereUniqueInput = {
    name?: string
  }

  export type luckperms_tracksOrderByWithAggregationInput = {
    name?: SortOrder
    groups?: SortOrder
    _count?: luckperms_tracksCountOrderByAggregateInput
    _max?: luckperms_tracksMaxOrderByAggregateInput
    _min?: luckperms_tracksMinOrderByAggregateInput
  }

  export type luckperms_tracksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_tracksScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_tracksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_tracksScalarWhereWithAggregatesInput>
    name?: StringWithAggregatesFilter | string
    groups?: StringWithAggregatesFilter | string
  }

  export type luckperms_user_permissionsWhereInput = {
    AND?: Enumerable<luckperms_user_permissionsWhereInput>
    OR?: Enumerable<luckperms_user_permissionsWhereInput>
    NOT?: Enumerable<luckperms_user_permissionsWhereInput>
    id?: IntFilter | number
    uuid?: StringFilter | string
    permission?: StringFilter | string
    value?: BoolFilter | boolean
    server?: StringFilter | string
    world?: StringFilter | string
    expiry?: BigIntFilter | bigint | number
    contexts?: StringFilter | string
  }

  export type luckperms_user_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_user_permissionsWhereUniqueInput = {
    id?: number
  }

  export type luckperms_user_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
    _count?: luckperms_user_permissionsCountOrderByAggregateInput
    _avg?: luckperms_user_permissionsAvgOrderByAggregateInput
    _max?: luckperms_user_permissionsMaxOrderByAggregateInput
    _min?: luckperms_user_permissionsMinOrderByAggregateInput
    _sum?: luckperms_user_permissionsSumOrderByAggregateInput
  }

  export type luckperms_user_permissionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<luckperms_user_permissionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<luckperms_user_permissionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<luckperms_user_permissionsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    uuid?: StringWithAggregatesFilter | string
    permission?: StringWithAggregatesFilter | string
    value?: BoolWithAggregatesFilter | boolean
    server?: StringWithAggregatesFilter | string
    world?: StringWithAggregatesFilter | string
    expiry?: BigIntWithAggregatesFilter | bigint | number
    contexts?: StringWithAggregatesFilter | string
  }

  export type luckperms_actionsCreateInput = {
    time: bigint | number
    actor_uuid: string
    actor_name: string
    type: string
    acted_uuid: string
    acted_name: string
    action: string
  }

  export type luckperms_actionsUncheckedCreateInput = {
    id?: number
    time: bigint | number
    actor_uuid: string
    actor_name: string
    type: string
    acted_uuid: string
    acted_name: string
    action: string
  }

  export type luckperms_actionsUpdateInput = {
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    actor_uuid?: StringFieldUpdateOperationsInput | string
    actor_name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    acted_uuid?: StringFieldUpdateOperationsInput | string
    acted_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_actionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    actor_uuid?: StringFieldUpdateOperationsInput | string
    actor_name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    acted_uuid?: StringFieldUpdateOperationsInput | string
    acted_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_actionsCreateManyInput = {
    id?: number
    time: bigint | number
    actor_uuid: string
    actor_name: string
    type: string
    acted_uuid: string
    acted_name: string
    action: string
  }

  export type luckperms_actionsUpdateManyMutationInput = {
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    actor_uuid?: StringFieldUpdateOperationsInput | string
    actor_name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    acted_uuid?: StringFieldUpdateOperationsInput | string
    acted_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_actionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: BigIntFieldUpdateOperationsInput | bigint | number
    actor_uuid?: StringFieldUpdateOperationsInput | string
    actor_name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    acted_uuid?: StringFieldUpdateOperationsInput | string
    acted_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_group_permissionsCreateInput = {
    name: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_group_permissionsUncheckedCreateInput = {
    id?: number
    name: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_group_permissionsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_group_permissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_group_permissionsCreateManyInput = {
    id?: number
    name: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_group_permissionsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_group_permissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_groupsCreateInput = {
    name: string
  }

  export type luckperms_groupsUncheckedCreateInput = {
    name: string
  }

  export type luckperms_groupsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_groupsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_groupsCreateManyInput = {
    name: string
  }

  export type luckperms_groupsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_groupsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_messengerCreateInput = {
    time: Date | string
    msg: string
  }

  export type luckperms_messengerUncheckedCreateInput = {
    id?: number
    time: Date | string
    msg: string
  }

  export type luckperms_messengerUpdateInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_messengerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_messengerCreateManyInput = {
    id?: number
    time: Date | string
    msg: string
  }

  export type luckperms_messengerUpdateManyMutationInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_messengerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_playersCreateInput = {
    uuid: string
    username: string
    primary_group: string
  }

  export type luckperms_playersUncheckedCreateInput = {
    uuid: string
    username: string
    primary_group: string
  }

  export type luckperms_playersUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    primary_group?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_playersUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    primary_group?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_playersCreateManyInput = {
    uuid: string
    username: string
    primary_group: string
  }

  export type luckperms_playersUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    primary_group?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_playersUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    primary_group?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_tracksCreateInput = {
    name: string
    groups: string
  }

  export type luckperms_tracksUncheckedCreateInput = {
    name: string
    groups: string
  }

  export type luckperms_tracksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    groups?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_tracksUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    groups?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_tracksCreateManyInput = {
    name: string
    groups: string
  }

  export type luckperms_tracksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    groups?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_tracksUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    groups?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_user_permissionsCreateInput = {
    uuid: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_user_permissionsUncheckedCreateInput = {
    id?: number
    uuid: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_user_permissionsUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_user_permissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_user_permissionsCreateManyInput = {
    id?: number
    uuid: string
    permission: string
    value: boolean
    server: string
    world: string
    expiry: bigint | number
    contexts: string
  }

  export type luckperms_user_permissionsUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
  }

  export type luckperms_user_permissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    value?: BoolFieldUpdateOperationsInput | boolean
    server?: StringFieldUpdateOperationsInput | string
    world?: StringFieldUpdateOperationsInput | string
    expiry?: BigIntFieldUpdateOperationsInput | bigint | number
    contexts?: StringFieldUpdateOperationsInput | string
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

  export type luckperms_actionsCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    actor_uuid?: SortOrder
    actor_name?: SortOrder
    type?: SortOrder
    acted_uuid?: SortOrder
    acted_name?: SortOrder
    action?: SortOrder
  }

  export type luckperms_actionsAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type luckperms_actionsMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    actor_uuid?: SortOrder
    actor_name?: SortOrder
    type?: SortOrder
    acted_uuid?: SortOrder
    acted_name?: SortOrder
    action?: SortOrder
  }

  export type luckperms_actionsMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    actor_uuid?: SortOrder
    actor_name?: SortOrder
    type?: SortOrder
    acted_uuid?: SortOrder
    acted_name?: SortOrder
    action?: SortOrder
  }

  export type luckperms_actionsSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type luckperms_group_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_group_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    expiry?: SortOrder
  }

  export type luckperms_group_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_group_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_group_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    expiry?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type luckperms_groupsCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type luckperms_groupsMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type luckperms_groupsMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type luckperms_messengerCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    msg?: SortOrder
  }

  export type luckperms_messengerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type luckperms_messengerMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    msg?: SortOrder
  }

  export type luckperms_messengerMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    msg?: SortOrder
  }

  export type luckperms_messengerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type luckperms_playersCountOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    primary_group?: SortOrder
  }

  export type luckperms_playersMaxOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    primary_group?: SortOrder
  }

  export type luckperms_playersMinOrderByAggregateInput = {
    uuid?: SortOrder
    username?: SortOrder
    primary_group?: SortOrder
  }

  export type luckperms_tracksCountOrderByAggregateInput = {
    name?: SortOrder
    groups?: SortOrder
  }

  export type luckperms_tracksMaxOrderByAggregateInput = {
    name?: SortOrder
    groups?: SortOrder
  }

  export type luckperms_tracksMinOrderByAggregateInput = {
    name?: SortOrder
    groups?: SortOrder
  }

  export type luckperms_user_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_user_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    expiry?: SortOrder
  }

  export type luckperms_user_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_user_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    permission?: SortOrder
    value?: SortOrder
    server?: SortOrder
    world?: SortOrder
    expiry?: SortOrder
    contexts?: SortOrder
  }

  export type luckperms_user_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    expiry?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
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