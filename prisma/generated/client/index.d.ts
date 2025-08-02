
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
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model University
 * 
 */
export type University = $Result.DefaultSelection<Prisma.$UniversityPayload>
/**
 * Model AvailableProgram
 * 
 */
export type AvailableProgram = $Result.DefaultSelection<Prisma.$AvailableProgramPayload>
/**
 * Model EntryRequirement
 * 
 */
export type EntryRequirement = $Result.DefaultSelection<Prisma.$EntryRequirementPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  user: 'user',
  staff: 'staff'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UniversityCountry: {
  INDIA: 'INDIA',
  USA: 'USA',
  UK: 'UK',
  AUSTRALIA: 'AUSTRALIA',
  CANADA: 'CANADA',
  FRANCE: 'FRANCE',
  GERMANY: 'GERMANY',
  JAPAN: 'JAPAN',
  CHINA: 'CHINA',
  NEWZEALAND: 'NEWZEALAND'
};

export type UniversityCountry = (typeof UniversityCountry)[keyof typeof UniversityCountry]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UniversityCountry = $Enums.UniversityCountry

export const UniversityCountry: typeof $Enums.UniversityCountry

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.university`: Exposes CRUD operations for the **University** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universities
    * const universities = await prisma.university.findMany()
    * ```
    */
  get university(): Prisma.UniversityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableProgram`: Exposes CRUD operations for the **AvailableProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailablePrograms
    * const availablePrograms = await prisma.availableProgram.findMany()
    * ```
    */
  get availableProgram(): Prisma.AvailableProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entryRequirement`: Exposes CRUD operations for the **EntryRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EntryRequirements
    * const entryRequirements = await prisma.entryRequirement.findMany()
    * ```
    */
  get entryRequirement(): Prisma.EntryRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Blog: 'Blog',
    University: 'University',
    AvailableProgram: 'AvailableProgram',
    EntryRequirement: 'EntryRequirement',
    Event: 'Event',
    Appointment: 'Appointment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "blog" | "university" | "availableProgram" | "entryRequirement" | "event" | "appointment"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      University: {
        payload: Prisma.$UniversityPayload<ExtArgs>
        fields: Prisma.UniversityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findFirst: {
            args: Prisma.UniversityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          findMany: {
            args: Prisma.UniversityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>[]
          }
          create: {
            args: Prisma.UniversityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          createMany: {
            args: Prisma.UniversityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UniversityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          update: {
            args: Prisma.UniversityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          deleteMany: {
            args: Prisma.UniversityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UniversityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityPayload>
          }
          aggregate: {
            args: Prisma.UniversityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversity>
          }
          groupBy: {
            args: Prisma.UniversityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UniversityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UniversityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UniversityCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityCountAggregateOutputType> | number
          }
        }
      }
      AvailableProgram: {
        payload: Prisma.$AvailableProgramPayload<ExtArgs>
        fields: Prisma.AvailableProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          findFirst: {
            args: Prisma.AvailableProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          findMany: {
            args: Prisma.AvailableProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>[]
          }
          create: {
            args: Prisma.AvailableProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          createMany: {
            args: Prisma.AvailableProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvailableProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          update: {
            args: Prisma.AvailableProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          deleteMany: {
            args: Prisma.AvailableProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailableProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableProgramPayload>
          }
          aggregate: {
            args: Prisma.AvailableProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableProgram>
          }
          groupBy: {
            args: Prisma.AvailableProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableProgramGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AvailableProgramFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AvailableProgramAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AvailableProgramCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableProgramCountAggregateOutputType> | number
          }
        }
      }
      EntryRequirement: {
        payload: Prisma.$EntryRequirementPayload<ExtArgs>
        fields: Prisma.EntryRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          findFirst: {
            args: Prisma.EntryRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          findMany: {
            args: Prisma.EntryRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>[]
          }
          create: {
            args: Prisma.EntryRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          createMany: {
            args: Prisma.EntryRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntryRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          update: {
            args: Prisma.EntryRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          deleteMany: {
            args: Prisma.EntryRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntryRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryRequirementPayload>
          }
          aggregate: {
            args: Prisma.EntryRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntryRequirement>
          }
          groupBy: {
            args: Prisma.EntryRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryRequirementGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EntryRequirementFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EntryRequirementAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EntryRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<EntryRequirementCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AppointmentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AppointmentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    blog?: BlogOmit
    university?: UniversityOmit
    availableProgram?: AvailableProgramOmit
    entryRequirement?: EntryRequirementOmit
    event?: EventOmit
    appointment?: AppointmentOmit
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
    blogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
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
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }


  /**
   * Count Type UniversityCountOutputType
   */

  export type UniversityCountOutputType = {
    available_programs: number
  }

  export type UniversityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available_programs?: boolean | UniversityCountOutputTypeCountAvailable_programsArgs
  }

  // Custom InputTypes
  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityCountOutputType
     */
    select?: UniversityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityCountOutputType without action
   */
  export type UniversityCountOutputTypeCountAvailable_programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableProgramWhereInput
  }


  /**
   * Count Type AvailableProgramCountOutputType
   */

  export type AvailableProgramCountOutputType = {
    entry_requirements: number
  }

  export type AvailableProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entry_requirements?: boolean | AvailableProgramCountOutputTypeCountEntry_requirementsArgs
  }

  // Custom InputTypes
  /**
   * AvailableProgramCountOutputType without action
   */
  export type AvailableProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgramCountOutputType
     */
    select?: AvailableProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableProgramCountOutputType without action
   */
  export type AvailableProgramCountOutputTypeCountEntry_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryRequirementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    blogs?: boolean | User$blogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogs?: boolean | User$blogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      blogs: Prisma.$BlogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      role: $Enums.Role
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
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
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    image: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metaTitle: string | null
    metaDescription: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    image: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    metaTitle: string | null
    metaDescription: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    image: number
    authorId: number
    createdAt: number
    updatedAt: number
    metaTitle: number
    metaDescription: number
    seoData: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    image?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    metaTitle?: true
    metaDescription?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    image?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    metaTitle?: true
    metaDescription?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    image?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    metaTitle?: true
    metaDescription?: true
    seoData?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    image: string | null
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    metaTitle: string | null
    metaDescription: string | null
    seoData: JsonValue | null
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    seoData?: boolean
    author?: boolean | Blog$authorArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>



  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    image?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    seoData?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "image" | "authorId" | "createdAt" | "updatedAt" | "metaTitle" | "metaDescription" | "seoData", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Blog$authorArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      image: string | null
      authorId: string | null
      createdAt: Date
      updatedAt: Date
      metaTitle: string | null
      metaDescription: string | null
      seoData: Prisma.JsonValue | null
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * @param {BlogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blog = await prisma.blog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BlogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Blog.
     * @param {BlogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blog = await prisma.blog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BlogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Blog$authorArgs<ExtArgs> = {}>(args?: Subset<T, Blog$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly slug: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly image: FieldRef<"Blog", 'String'>
    readonly authorId: FieldRef<"Blog", 'String'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
    readonly metaTitle: FieldRef<"Blog", 'String'>
    readonly metaDescription: FieldRef<"Blog", 'String'>
    readonly seoData: FieldRef<"Blog", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog findRaw
   */
  export type BlogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Blog aggregateRaw
   */
  export type BlogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Blog.author
   */
  export type Blog$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model University
   */

  export type AggregateUniversity = {
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  export type UniversityMinAggregateOutputType = {
    id: string | null
    university_name: string | null
    university_image: string | null
    university_about: string | null
    university_address: string | null
    university_country: $Enums.UniversityCountry | null
  }

  export type UniversityMaxAggregateOutputType = {
    id: string | null
    university_name: string | null
    university_image: string | null
    university_about: string | null
    university_address: string | null
    university_country: $Enums.UniversityCountry | null
  }

  export type UniversityCountAggregateOutputType = {
    id: number
    university_name: number
    university_image: number
    university_about: number
    university_address: number
    university_country: number
    _all: number
  }


  export type UniversityMinAggregateInputType = {
    id?: true
    university_name?: true
    university_image?: true
    university_about?: true
    university_address?: true
    university_country?: true
  }

  export type UniversityMaxAggregateInputType = {
    id?: true
    university_name?: true
    university_image?: true
    university_about?: true
    university_address?: true
    university_country?: true
  }

  export type UniversityCountAggregateInputType = {
    id?: true
    university_name?: true
    university_image?: true
    university_about?: true
    university_address?: true
    university_country?: true
    _all?: true
  }

  export type UniversityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which University to aggregate.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universities
    **/
    _count?: true | UniversityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityMaxAggregateInputType
  }

  export type GetUniversityAggregateType<T extends UniversityAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversity[P]>
      : GetScalarType<T[P], AggregateUniversity[P]>
  }




  export type UniversityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityWhereInput
    orderBy?: UniversityOrderByWithAggregationInput | UniversityOrderByWithAggregationInput[]
    by: UniversityScalarFieldEnum[] | UniversityScalarFieldEnum
    having?: UniversityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityCountAggregateInputType | true
    _min?: UniversityMinAggregateInputType
    _max?: UniversityMaxAggregateInputType
  }

  export type UniversityGroupByOutputType = {
    id: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
    _count: UniversityCountAggregateOutputType | null
    _min: UniversityMinAggregateOutputType | null
    _max: UniversityMaxAggregateOutputType | null
  }

  type GetUniversityGroupByPayload<T extends UniversityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityGroupByOutputType[P]>
        }
      >
    >


  export type UniversitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    university_name?: boolean
    university_image?: boolean
    university_about?: boolean
    university_address?: boolean
    university_country?: boolean
    available_programs?: boolean | University$available_programsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["university"]>



  export type UniversitySelectScalar = {
    id?: boolean
    university_name?: boolean
    university_image?: boolean
    university_about?: boolean
    university_address?: boolean
    university_country?: boolean
  }

  export type UniversityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "university_name" | "university_image" | "university_about" | "university_address" | "university_country", ExtArgs["result"]["university"]>
  export type UniversityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    available_programs?: boolean | University$available_programsArgs<ExtArgs>
    _count?: boolean | UniversityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UniversityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "University"
    objects: {
      available_programs: Prisma.$AvailableProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      university_name: string
      university_image: string
      university_about: string
      university_address: string
      university_country: $Enums.UniversityCountry
    }, ExtArgs["result"]["university"]>
    composites: {}
  }

  type UniversityGetPayload<S extends boolean | null | undefined | UniversityDefaultArgs> = $Result.GetResult<Prisma.$UniversityPayload, S>

  type UniversityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityCountAggregateInputType | true
    }

  export interface UniversityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['University'], meta: { name: 'University' } }
    /**
     * Find zero or one University that matches the filter.
     * @param {UniversityFindUniqueArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityFindUniqueArgs>(args: SelectSubset<T, UniversityFindUniqueArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one University that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityFindUniqueOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityFindFirstArgs>(args?: SelectSubset<T, UniversityFindFirstArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first University that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindFirstOrThrowArgs} args - Arguments to find a University
     * @example
     * // Get one University
     * const university = await prisma.university.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universities
     * const universities = await prisma.university.findMany()
     * 
     * // Get first 10 Universities
     * const universities = await prisma.university.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityWithIdOnly = await prisma.university.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityFindManyArgs>(args?: SelectSubset<T, UniversityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a University.
     * @param {UniversityCreateArgs} args - Arguments to create a University.
     * @example
     * // Create one University
     * const University = await prisma.university.create({
     *   data: {
     *     // ... data to create a University
     *   }
     * })
     * 
     */
    create<T extends UniversityCreateArgs>(args: SelectSubset<T, UniversityCreateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universities.
     * @param {UniversityCreateManyArgs} args - Arguments to create many Universities.
     * @example
     * // Create many Universities
     * const university = await prisma.university.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityCreateManyArgs>(args?: SelectSubset<T, UniversityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a University.
     * @param {UniversityDeleteArgs} args - Arguments to delete one University.
     * @example
     * // Delete one University
     * const University = await prisma.university.delete({
     *   where: {
     *     // ... filter to delete one University
     *   }
     * })
     * 
     */
    delete<T extends UniversityDeleteArgs>(args: SelectSubset<T, UniversityDeleteArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one University.
     * @param {UniversityUpdateArgs} args - Arguments to update one University.
     * @example
     * // Update one University
     * const university = await prisma.university.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityUpdateArgs>(args: SelectSubset<T, UniversityUpdateArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universities.
     * @param {UniversityDeleteManyArgs} args - Arguments to filter Universities to delete.
     * @example
     * // Delete a few Universities
     * const { count } = await prisma.university.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityDeleteManyArgs>(args?: SelectSubset<T, UniversityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universities
     * const university = await prisma.university.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityUpdateManyArgs>(args: SelectSubset<T, UniversityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one University.
     * @param {UniversityUpsertArgs} args - Arguments to update or create a University.
     * @example
     * // Update or create a University
     * const university = await prisma.university.upsert({
     *   create: {
     *     // ... data to create a University
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the University we want to update
     *   }
     * })
     */
    upsert<T extends UniversityUpsertArgs>(args: SelectSubset<T, UniversityUpsertArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universities that matches the filter.
     * @param {UniversityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const university = await prisma.university.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UniversityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a University.
     * @param {UniversityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const university = await prisma.university.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UniversityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Universities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityCountArgs} args - Arguments to filter Universities to count.
     * @example
     * // Count the number of Universities
     * const count = await prisma.university.count({
     *   where: {
     *     // ... the filter for the Universities we want to count
     *   }
     * })
    **/
    count<T extends UniversityCountArgs>(
      args?: Subset<T, UniversityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityAggregateArgs>(args: Subset<T, UniversityAggregateArgs>): Prisma.PrismaPromise<GetUniversityAggregateType<T>>

    /**
     * Group by University.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityGroupByArgs} args - Group by arguments.
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
      T extends UniversityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityGroupByArgs['orderBy'] }
        : { orderBy?: UniversityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the University model
   */
  readonly fields: UniversityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for University.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    available_programs<T extends University$available_programsArgs<ExtArgs> = {}>(args?: Subset<T, University$available_programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the University model
   */
  interface UniversityFieldRefs {
    readonly id: FieldRef<"University", 'String'>
    readonly university_name: FieldRef<"University", 'String'>
    readonly university_image: FieldRef<"University", 'String'>
    readonly university_about: FieldRef<"University", 'String'>
    readonly university_address: FieldRef<"University", 'String'>
    readonly university_country: FieldRef<"University", 'UniversityCountry'>
  }
    

  // Custom InputTypes
  /**
   * University findUnique
   */
  export type UniversityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findUniqueOrThrow
   */
  export type UniversityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University findFirst
   */
  export type UniversityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findFirstOrThrow
   */
  export type UniversityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which University to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universities.
     */
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University findMany
   */
  export type UniversityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter, which Universities to fetch.
     */
    where?: UniversityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universities to fetch.
     */
    orderBy?: UniversityOrderByWithRelationInput | UniversityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universities.
     */
    cursor?: UniversityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universities.
     */
    skip?: number
    distinct?: UniversityScalarFieldEnum | UniversityScalarFieldEnum[]
  }

  /**
   * University create
   */
  export type UniversityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to create a University.
     */
    data: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
  }

  /**
   * University createMany
   */
  export type UniversityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universities.
     */
    data: UniversityCreateManyInput | UniversityCreateManyInput[]
  }

  /**
   * University update
   */
  export type UniversityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The data needed to update a University.
     */
    data: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
    /**
     * Choose, which University to update.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University updateMany
   */
  export type UniversityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universities.
     */
    data: XOR<UniversityUpdateManyMutationInput, UniversityUncheckedUpdateManyInput>
    /**
     * Filter which Universities to update
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to update.
     */
    limit?: number
  }

  /**
   * University upsert
   */
  export type UniversityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * The filter to search for the University to update in case it exists.
     */
    where: UniversityWhereUniqueInput
    /**
     * In case the University found by the `where` argument doesn't exist, create a new University with this data.
     */
    create: XOR<UniversityCreateInput, UniversityUncheckedCreateInput>
    /**
     * In case the University was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityUpdateInput, UniversityUncheckedUpdateInput>
  }

  /**
   * University delete
   */
  export type UniversityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
    /**
     * Filter which University to delete.
     */
    where: UniversityWhereUniqueInput
  }

  /**
   * University deleteMany
   */
  export type UniversityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universities to delete
     */
    where?: UniversityWhereInput
    /**
     * Limit how many Universities to delete.
     */
    limit?: number
  }

  /**
   * University findRaw
   */
  export type UniversityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * University aggregateRaw
   */
  export type UniversityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * University.available_programs
   */
  export type University$available_programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    where?: AvailableProgramWhereInput
    orderBy?: AvailableProgramOrderByWithRelationInput | AvailableProgramOrderByWithRelationInput[]
    cursor?: AvailableProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailableProgramScalarFieldEnum | AvailableProgramScalarFieldEnum[]
  }

  /**
   * University without action
   */
  export type UniversityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the University
     */
    select?: UniversitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the University
     */
    omit?: UniversityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityInclude<ExtArgs> | null
  }


  /**
   * Model AvailableProgram
   */

  export type AggregateAvailableProgram = {
    _count: AvailableProgramCountAggregateOutputType | null
    _min: AvailableProgramMinAggregateOutputType | null
    _max: AvailableProgramMaxAggregateOutputType | null
  }

  export type AvailableProgramMinAggregateOutputType = {
    id: string | null
    program_name: string | null
    duration: string | null
    degree_type: string | null
    department: string | null
    description: string | null
    universityId: string | null
  }

  export type AvailableProgramMaxAggregateOutputType = {
    id: string | null
    program_name: string | null
    duration: string | null
    degree_type: string | null
    department: string | null
    description: string | null
    universityId: string | null
  }

  export type AvailableProgramCountAggregateOutputType = {
    id: number
    program_name: number
    duration: number
    degree_type: number
    department: number
    description: number
    universityId: number
    _all: number
  }


  export type AvailableProgramMinAggregateInputType = {
    id?: true
    program_name?: true
    duration?: true
    degree_type?: true
    department?: true
    description?: true
    universityId?: true
  }

  export type AvailableProgramMaxAggregateInputType = {
    id?: true
    program_name?: true
    duration?: true
    degree_type?: true
    department?: true
    description?: true
    universityId?: true
  }

  export type AvailableProgramCountAggregateInputType = {
    id?: true
    program_name?: true
    duration?: true
    degree_type?: true
    department?: true
    description?: true
    universityId?: true
    _all?: true
  }

  export type AvailableProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableProgram to aggregate.
     */
    where?: AvailableProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailablePrograms to fetch.
     */
    orderBy?: AvailableProgramOrderByWithRelationInput | AvailableProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailablePrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailablePrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailablePrograms
    **/
    _count?: true | AvailableProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableProgramMaxAggregateInputType
  }

  export type GetAvailableProgramAggregateType<T extends AvailableProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableProgram[P]>
      : GetScalarType<T[P], AggregateAvailableProgram[P]>
  }




  export type AvailableProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableProgramWhereInput
    orderBy?: AvailableProgramOrderByWithAggregationInput | AvailableProgramOrderByWithAggregationInput[]
    by: AvailableProgramScalarFieldEnum[] | AvailableProgramScalarFieldEnum
    having?: AvailableProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableProgramCountAggregateInputType | true
    _min?: AvailableProgramMinAggregateInputType
    _max?: AvailableProgramMaxAggregateInputType
  }

  export type AvailableProgramGroupByOutputType = {
    id: string
    program_name: string
    duration: string
    degree_type: string
    department: string | null
    description: string | null
    universityId: string
    _count: AvailableProgramCountAggregateOutputType | null
    _min: AvailableProgramMinAggregateOutputType | null
    _max: AvailableProgramMaxAggregateOutputType | null
  }

  type GetAvailableProgramGroupByPayload<T extends AvailableProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableProgramGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableProgramGroupByOutputType[P]>
        }
      >
    >


  export type AvailableProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    program_name?: boolean
    duration?: boolean
    degree_type?: boolean
    department?: boolean
    description?: boolean
    universityId?: boolean
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    entry_requirements?: boolean | AvailableProgram$entry_requirementsArgs<ExtArgs>
    _count?: boolean | AvailableProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableProgram"]>



  export type AvailableProgramSelectScalar = {
    id?: boolean
    program_name?: boolean
    duration?: boolean
    degree_type?: boolean
    department?: boolean
    description?: boolean
    universityId?: boolean
  }

  export type AvailableProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "program_name" | "duration" | "degree_type" | "department" | "description" | "universityId", ExtArgs["result"]["availableProgram"]>
  export type AvailableProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityDefaultArgs<ExtArgs>
    entry_requirements?: boolean | AvailableProgram$entry_requirementsArgs<ExtArgs>
    _count?: boolean | AvailableProgramCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AvailableProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableProgram"
    objects: {
      university: Prisma.$UniversityPayload<ExtArgs>
      entry_requirements: Prisma.$EntryRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      program_name: string
      duration: string
      degree_type: string
      department: string | null
      description: string | null
      universityId: string
    }, ExtArgs["result"]["availableProgram"]>
    composites: {}
  }

  type AvailableProgramGetPayload<S extends boolean | null | undefined | AvailableProgramDefaultArgs> = $Result.GetResult<Prisma.$AvailableProgramPayload, S>

  type AvailableProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableProgramCountAggregateInputType | true
    }

  export interface AvailableProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableProgram'], meta: { name: 'AvailableProgram' } }
    /**
     * Find zero or one AvailableProgram that matches the filter.
     * @param {AvailableProgramFindUniqueArgs} args - Arguments to find a AvailableProgram
     * @example
     * // Get one AvailableProgram
     * const availableProgram = await prisma.availableProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableProgramFindUniqueArgs>(args: SelectSubset<T, AvailableProgramFindUniqueArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableProgramFindUniqueOrThrowArgs} args - Arguments to find a AvailableProgram
     * @example
     * // Get one AvailableProgram
     * const availableProgram = await prisma.availableProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramFindFirstArgs} args - Arguments to find a AvailableProgram
     * @example
     * // Get one AvailableProgram
     * const availableProgram = await prisma.availableProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableProgramFindFirstArgs>(args?: SelectSubset<T, AvailableProgramFindFirstArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramFindFirstOrThrowArgs} args - Arguments to find a AvailableProgram
     * @example
     * // Get one AvailableProgram
     * const availableProgram = await prisma.availableProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailablePrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailablePrograms
     * const availablePrograms = await prisma.availableProgram.findMany()
     * 
     * // Get first 10 AvailablePrograms
     * const availablePrograms = await prisma.availableProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableProgramWithIdOnly = await prisma.availableProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableProgramFindManyArgs>(args?: SelectSubset<T, AvailableProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableProgram.
     * @param {AvailableProgramCreateArgs} args - Arguments to create a AvailableProgram.
     * @example
     * // Create one AvailableProgram
     * const AvailableProgram = await prisma.availableProgram.create({
     *   data: {
     *     // ... data to create a AvailableProgram
     *   }
     * })
     * 
     */
    create<T extends AvailableProgramCreateArgs>(args: SelectSubset<T, AvailableProgramCreateArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailablePrograms.
     * @param {AvailableProgramCreateManyArgs} args - Arguments to create many AvailablePrograms.
     * @example
     * // Create many AvailablePrograms
     * const availableProgram = await prisma.availableProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableProgramCreateManyArgs>(args?: SelectSubset<T, AvailableProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AvailableProgram.
     * @param {AvailableProgramDeleteArgs} args - Arguments to delete one AvailableProgram.
     * @example
     * // Delete one AvailableProgram
     * const AvailableProgram = await prisma.availableProgram.delete({
     *   where: {
     *     // ... filter to delete one AvailableProgram
     *   }
     * })
     * 
     */
    delete<T extends AvailableProgramDeleteArgs>(args: SelectSubset<T, AvailableProgramDeleteArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableProgram.
     * @param {AvailableProgramUpdateArgs} args - Arguments to update one AvailableProgram.
     * @example
     * // Update one AvailableProgram
     * const availableProgram = await prisma.availableProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableProgramUpdateArgs>(args: SelectSubset<T, AvailableProgramUpdateArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailablePrograms.
     * @param {AvailableProgramDeleteManyArgs} args - Arguments to filter AvailablePrograms to delete.
     * @example
     * // Delete a few AvailablePrograms
     * const { count } = await prisma.availableProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableProgramDeleteManyArgs>(args?: SelectSubset<T, AvailableProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailablePrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailablePrograms
     * const availableProgram = await prisma.availableProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableProgramUpdateManyArgs>(args: SelectSubset<T, AvailableProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AvailableProgram.
     * @param {AvailableProgramUpsertArgs} args - Arguments to update or create a AvailableProgram.
     * @example
     * // Update or create a AvailableProgram
     * const availableProgram = await prisma.availableProgram.upsert({
     *   create: {
     *     // ... data to create a AvailableProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableProgram we want to update
     *   }
     * })
     */
    upsert<T extends AvailableProgramUpsertArgs>(args: SelectSubset<T, AvailableProgramUpsertArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailablePrograms that matches the filter.
     * @param {AvailableProgramFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const availableProgram = await prisma.availableProgram.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AvailableProgramFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AvailableProgram.
     * @param {AvailableProgramAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const availableProgram = await prisma.availableProgram.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AvailableProgramAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AvailablePrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramCountArgs} args - Arguments to filter AvailablePrograms to count.
     * @example
     * // Count the number of AvailablePrograms
     * const count = await prisma.availableProgram.count({
     *   where: {
     *     // ... the filter for the AvailablePrograms we want to count
     *   }
     * })
    **/
    count<T extends AvailableProgramCountArgs>(
      args?: Subset<T, AvailableProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableProgramAggregateArgs>(args: Subset<T, AvailableProgramAggregateArgs>): Prisma.PrismaPromise<GetAvailableProgramAggregateType<T>>

    /**
     * Group by AvailableProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableProgramGroupByArgs} args - Group by arguments.
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
      T extends AvailableProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableProgramGroupByArgs['orderBy'] }
        : { orderBy?: AvailableProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableProgram model
   */
  readonly fields: AvailableProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityDefaultArgs<ExtArgs>>): Prisma__UniversityClient<$Result.GetResult<Prisma.$UniversityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entry_requirements<T extends AvailableProgram$entry_requirementsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableProgram$entry_requirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableProgram model
   */
  interface AvailableProgramFieldRefs {
    readonly id: FieldRef<"AvailableProgram", 'String'>
    readonly program_name: FieldRef<"AvailableProgram", 'String'>
    readonly duration: FieldRef<"AvailableProgram", 'String'>
    readonly degree_type: FieldRef<"AvailableProgram", 'String'>
    readonly department: FieldRef<"AvailableProgram", 'String'>
    readonly description: FieldRef<"AvailableProgram", 'String'>
    readonly universityId: FieldRef<"AvailableProgram", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableProgram findUnique
   */
  export type AvailableProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter, which AvailableProgram to fetch.
     */
    where: AvailableProgramWhereUniqueInput
  }

  /**
   * AvailableProgram findUniqueOrThrow
   */
  export type AvailableProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter, which AvailableProgram to fetch.
     */
    where: AvailableProgramWhereUniqueInput
  }

  /**
   * AvailableProgram findFirst
   */
  export type AvailableProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter, which AvailableProgram to fetch.
     */
    where?: AvailableProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailablePrograms to fetch.
     */
    orderBy?: AvailableProgramOrderByWithRelationInput | AvailableProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailablePrograms.
     */
    cursor?: AvailableProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailablePrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailablePrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailablePrograms.
     */
    distinct?: AvailableProgramScalarFieldEnum | AvailableProgramScalarFieldEnum[]
  }

  /**
   * AvailableProgram findFirstOrThrow
   */
  export type AvailableProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter, which AvailableProgram to fetch.
     */
    where?: AvailableProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailablePrograms to fetch.
     */
    orderBy?: AvailableProgramOrderByWithRelationInput | AvailableProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailablePrograms.
     */
    cursor?: AvailableProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailablePrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailablePrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailablePrograms.
     */
    distinct?: AvailableProgramScalarFieldEnum | AvailableProgramScalarFieldEnum[]
  }

  /**
   * AvailableProgram findMany
   */
  export type AvailableProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter, which AvailablePrograms to fetch.
     */
    where?: AvailableProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailablePrograms to fetch.
     */
    orderBy?: AvailableProgramOrderByWithRelationInput | AvailableProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailablePrograms.
     */
    cursor?: AvailableProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailablePrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailablePrograms.
     */
    skip?: number
    distinct?: AvailableProgramScalarFieldEnum | AvailableProgramScalarFieldEnum[]
  }

  /**
   * AvailableProgram create
   */
  export type AvailableProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableProgram.
     */
    data: XOR<AvailableProgramCreateInput, AvailableProgramUncheckedCreateInput>
  }

  /**
   * AvailableProgram createMany
   */
  export type AvailableProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailablePrograms.
     */
    data: AvailableProgramCreateManyInput | AvailableProgramCreateManyInput[]
  }

  /**
   * AvailableProgram update
   */
  export type AvailableProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableProgram.
     */
    data: XOR<AvailableProgramUpdateInput, AvailableProgramUncheckedUpdateInput>
    /**
     * Choose, which AvailableProgram to update.
     */
    where: AvailableProgramWhereUniqueInput
  }

  /**
   * AvailableProgram updateMany
   */
  export type AvailableProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailablePrograms.
     */
    data: XOR<AvailableProgramUpdateManyMutationInput, AvailableProgramUncheckedUpdateManyInput>
    /**
     * Filter which AvailablePrograms to update
     */
    where?: AvailableProgramWhereInput
    /**
     * Limit how many AvailablePrograms to update.
     */
    limit?: number
  }

  /**
   * AvailableProgram upsert
   */
  export type AvailableProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableProgram to update in case it exists.
     */
    where: AvailableProgramWhereUniqueInput
    /**
     * In case the AvailableProgram found by the `where` argument doesn't exist, create a new AvailableProgram with this data.
     */
    create: XOR<AvailableProgramCreateInput, AvailableProgramUncheckedCreateInput>
    /**
     * In case the AvailableProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableProgramUpdateInput, AvailableProgramUncheckedUpdateInput>
  }

  /**
   * AvailableProgram delete
   */
  export type AvailableProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
    /**
     * Filter which AvailableProgram to delete.
     */
    where: AvailableProgramWhereUniqueInput
  }

  /**
   * AvailableProgram deleteMany
   */
  export type AvailableProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailablePrograms to delete
     */
    where?: AvailableProgramWhereInput
    /**
     * Limit how many AvailablePrograms to delete.
     */
    limit?: number
  }

  /**
   * AvailableProgram findRaw
   */
  export type AvailableProgramFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AvailableProgram aggregateRaw
   */
  export type AvailableProgramAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AvailableProgram.entry_requirements
   */
  export type AvailableProgram$entry_requirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    where?: EntryRequirementWhereInput
    orderBy?: EntryRequirementOrderByWithRelationInput | EntryRequirementOrderByWithRelationInput[]
    cursor?: EntryRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryRequirementScalarFieldEnum | EntryRequirementScalarFieldEnum[]
  }

  /**
   * AvailableProgram without action
   */
  export type AvailableProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableProgram
     */
    select?: AvailableProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableProgram
     */
    omit?: AvailableProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableProgramInclude<ExtArgs> | null
  }


  /**
   * Model EntryRequirement
   */

  export type AggregateEntryRequirement = {
    _count: EntryRequirementCountAggregateOutputType | null
    _min: EntryRequirementMinAggregateOutputType | null
    _max: EntryRequirementMaxAggregateOutputType | null
  }

  export type EntryRequirementMinAggregateOutputType = {
    id: string | null
    criteria: string | null
    details: string | null
    programId: string | null
  }

  export type EntryRequirementMaxAggregateOutputType = {
    id: string | null
    criteria: string | null
    details: string | null
    programId: string | null
  }

  export type EntryRequirementCountAggregateOutputType = {
    id: number
    criteria: number
    details: number
    programId: number
    _all: number
  }


  export type EntryRequirementMinAggregateInputType = {
    id?: true
    criteria?: true
    details?: true
    programId?: true
  }

  export type EntryRequirementMaxAggregateInputType = {
    id?: true
    criteria?: true
    details?: true
    programId?: true
  }

  export type EntryRequirementCountAggregateInputType = {
    id?: true
    criteria?: true
    details?: true
    programId?: true
    _all?: true
  }

  export type EntryRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryRequirement to aggregate.
     */
    where?: EntryRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryRequirements to fetch.
     */
    orderBy?: EntryRequirementOrderByWithRelationInput | EntryRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EntryRequirements
    **/
    _count?: true | EntryRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryRequirementMaxAggregateInputType
  }

  export type GetEntryRequirementAggregateType<T extends EntryRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateEntryRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntryRequirement[P]>
      : GetScalarType<T[P], AggregateEntryRequirement[P]>
  }




  export type EntryRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryRequirementWhereInput
    orderBy?: EntryRequirementOrderByWithAggregationInput | EntryRequirementOrderByWithAggregationInput[]
    by: EntryRequirementScalarFieldEnum[] | EntryRequirementScalarFieldEnum
    having?: EntryRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryRequirementCountAggregateInputType | true
    _min?: EntryRequirementMinAggregateInputType
    _max?: EntryRequirementMaxAggregateInputType
  }

  export type EntryRequirementGroupByOutputType = {
    id: string
    criteria: string
    details: string
    programId: string
    _count: EntryRequirementCountAggregateOutputType | null
    _min: EntryRequirementMinAggregateOutputType | null
    _max: EntryRequirementMaxAggregateOutputType | null
  }

  type GetEntryRequirementGroupByPayload<T extends EntryRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], EntryRequirementGroupByOutputType[P]>
        }
      >
    >


  export type EntryRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criteria?: boolean
    details?: boolean
    programId?: boolean
    program?: boolean | AvailableProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entryRequirement"]>



  export type EntryRequirementSelectScalar = {
    id?: boolean
    criteria?: boolean
    details?: boolean
    programId?: boolean
  }

  export type EntryRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criteria" | "details" | "programId", ExtArgs["result"]["entryRequirement"]>
  export type EntryRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | AvailableProgramDefaultArgs<ExtArgs>
  }

  export type $EntryRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EntryRequirement"
    objects: {
      program: Prisma.$AvailableProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      criteria: string
      details: string
      programId: string
    }, ExtArgs["result"]["entryRequirement"]>
    composites: {}
  }

  type EntryRequirementGetPayload<S extends boolean | null | undefined | EntryRequirementDefaultArgs> = $Result.GetResult<Prisma.$EntryRequirementPayload, S>

  type EntryRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryRequirementCountAggregateInputType | true
    }

  export interface EntryRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EntryRequirement'], meta: { name: 'EntryRequirement' } }
    /**
     * Find zero or one EntryRequirement that matches the filter.
     * @param {EntryRequirementFindUniqueArgs} args - Arguments to find a EntryRequirement
     * @example
     * // Get one EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryRequirementFindUniqueArgs>(args: SelectSubset<T, EntryRequirementFindUniqueArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EntryRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryRequirementFindUniqueOrThrowArgs} args - Arguments to find a EntryRequirement
     * @example
     * // Get one EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntryRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementFindFirstArgs} args - Arguments to find a EntryRequirement
     * @example
     * // Get one EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryRequirementFindFirstArgs>(args?: SelectSubset<T, EntryRequirementFindFirstArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EntryRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementFindFirstOrThrowArgs} args - Arguments to find a EntryRequirement
     * @example
     * // Get one EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EntryRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EntryRequirements
     * const entryRequirements = await prisma.entryRequirement.findMany()
     * 
     * // Get first 10 EntryRequirements
     * const entryRequirements = await prisma.entryRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryRequirementWithIdOnly = await prisma.entryRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryRequirementFindManyArgs>(args?: SelectSubset<T, EntryRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EntryRequirement.
     * @param {EntryRequirementCreateArgs} args - Arguments to create a EntryRequirement.
     * @example
     * // Create one EntryRequirement
     * const EntryRequirement = await prisma.entryRequirement.create({
     *   data: {
     *     // ... data to create a EntryRequirement
     *   }
     * })
     * 
     */
    create<T extends EntryRequirementCreateArgs>(args: SelectSubset<T, EntryRequirementCreateArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EntryRequirements.
     * @param {EntryRequirementCreateManyArgs} args - Arguments to create many EntryRequirements.
     * @example
     * // Create many EntryRequirements
     * const entryRequirement = await prisma.entryRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryRequirementCreateManyArgs>(args?: SelectSubset<T, EntryRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EntryRequirement.
     * @param {EntryRequirementDeleteArgs} args - Arguments to delete one EntryRequirement.
     * @example
     * // Delete one EntryRequirement
     * const EntryRequirement = await prisma.entryRequirement.delete({
     *   where: {
     *     // ... filter to delete one EntryRequirement
     *   }
     * })
     * 
     */
    delete<T extends EntryRequirementDeleteArgs>(args: SelectSubset<T, EntryRequirementDeleteArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EntryRequirement.
     * @param {EntryRequirementUpdateArgs} args - Arguments to update one EntryRequirement.
     * @example
     * // Update one EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryRequirementUpdateArgs>(args: SelectSubset<T, EntryRequirementUpdateArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EntryRequirements.
     * @param {EntryRequirementDeleteManyArgs} args - Arguments to filter EntryRequirements to delete.
     * @example
     * // Delete a few EntryRequirements
     * const { count } = await prisma.entryRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryRequirementDeleteManyArgs>(args?: SelectSubset<T, EntryRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EntryRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EntryRequirements
     * const entryRequirement = await prisma.entryRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryRequirementUpdateManyArgs>(args: SelectSubset<T, EntryRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EntryRequirement.
     * @param {EntryRequirementUpsertArgs} args - Arguments to update or create a EntryRequirement.
     * @example
     * // Update or create a EntryRequirement
     * const entryRequirement = await prisma.entryRequirement.upsert({
     *   create: {
     *     // ... data to create a EntryRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EntryRequirement we want to update
     *   }
     * })
     */
    upsert<T extends EntryRequirementUpsertArgs>(args: SelectSubset<T, EntryRequirementUpsertArgs<ExtArgs>>): Prisma__EntryRequirementClient<$Result.GetResult<Prisma.$EntryRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EntryRequirements that matches the filter.
     * @param {EntryRequirementFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const entryRequirement = await prisma.entryRequirement.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EntryRequirementFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EntryRequirement.
     * @param {EntryRequirementAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const entryRequirement = await prisma.entryRequirement.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EntryRequirementAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EntryRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementCountArgs} args - Arguments to filter EntryRequirements to count.
     * @example
     * // Count the number of EntryRequirements
     * const count = await prisma.entryRequirement.count({
     *   where: {
     *     // ... the filter for the EntryRequirements we want to count
     *   }
     * })
    **/
    count<T extends EntryRequirementCountArgs>(
      args?: Subset<T, EntryRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EntryRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntryRequirementAggregateArgs>(args: Subset<T, EntryRequirementAggregateArgs>): Prisma.PrismaPromise<GetEntryRequirementAggregateType<T>>

    /**
     * Group by EntryRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryRequirementGroupByArgs} args - Group by arguments.
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
      T extends EntryRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryRequirementGroupByArgs['orderBy'] }
        : { orderBy?: EntryRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntryRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EntryRequirement model
   */
  readonly fields: EntryRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EntryRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends AvailableProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableProgramDefaultArgs<ExtArgs>>): Prisma__AvailableProgramClient<$Result.GetResult<Prisma.$AvailableProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EntryRequirement model
   */
  interface EntryRequirementFieldRefs {
    readonly id: FieldRef<"EntryRequirement", 'String'>
    readonly criteria: FieldRef<"EntryRequirement", 'String'>
    readonly details: FieldRef<"EntryRequirement", 'String'>
    readonly programId: FieldRef<"EntryRequirement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EntryRequirement findUnique
   */
  export type EntryRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter, which EntryRequirement to fetch.
     */
    where: EntryRequirementWhereUniqueInput
  }

  /**
   * EntryRequirement findUniqueOrThrow
   */
  export type EntryRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter, which EntryRequirement to fetch.
     */
    where: EntryRequirementWhereUniqueInput
  }

  /**
   * EntryRequirement findFirst
   */
  export type EntryRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter, which EntryRequirement to fetch.
     */
    where?: EntryRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryRequirements to fetch.
     */
    orderBy?: EntryRequirementOrderByWithRelationInput | EntryRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryRequirements.
     */
    cursor?: EntryRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryRequirements.
     */
    distinct?: EntryRequirementScalarFieldEnum | EntryRequirementScalarFieldEnum[]
  }

  /**
   * EntryRequirement findFirstOrThrow
   */
  export type EntryRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter, which EntryRequirement to fetch.
     */
    where?: EntryRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryRequirements to fetch.
     */
    orderBy?: EntryRequirementOrderByWithRelationInput | EntryRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EntryRequirements.
     */
    cursor?: EntryRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EntryRequirements.
     */
    distinct?: EntryRequirementScalarFieldEnum | EntryRequirementScalarFieldEnum[]
  }

  /**
   * EntryRequirement findMany
   */
  export type EntryRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter, which EntryRequirements to fetch.
     */
    where?: EntryRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EntryRequirements to fetch.
     */
    orderBy?: EntryRequirementOrderByWithRelationInput | EntryRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EntryRequirements.
     */
    cursor?: EntryRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EntryRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EntryRequirements.
     */
    skip?: number
    distinct?: EntryRequirementScalarFieldEnum | EntryRequirementScalarFieldEnum[]
  }

  /**
   * EntryRequirement create
   */
  export type EntryRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a EntryRequirement.
     */
    data: XOR<EntryRequirementCreateInput, EntryRequirementUncheckedCreateInput>
  }

  /**
   * EntryRequirement createMany
   */
  export type EntryRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EntryRequirements.
     */
    data: EntryRequirementCreateManyInput | EntryRequirementCreateManyInput[]
  }

  /**
   * EntryRequirement update
   */
  export type EntryRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a EntryRequirement.
     */
    data: XOR<EntryRequirementUpdateInput, EntryRequirementUncheckedUpdateInput>
    /**
     * Choose, which EntryRequirement to update.
     */
    where: EntryRequirementWhereUniqueInput
  }

  /**
   * EntryRequirement updateMany
   */
  export type EntryRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EntryRequirements.
     */
    data: XOR<EntryRequirementUpdateManyMutationInput, EntryRequirementUncheckedUpdateManyInput>
    /**
     * Filter which EntryRequirements to update
     */
    where?: EntryRequirementWhereInput
    /**
     * Limit how many EntryRequirements to update.
     */
    limit?: number
  }

  /**
   * EntryRequirement upsert
   */
  export type EntryRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the EntryRequirement to update in case it exists.
     */
    where: EntryRequirementWhereUniqueInput
    /**
     * In case the EntryRequirement found by the `where` argument doesn't exist, create a new EntryRequirement with this data.
     */
    create: XOR<EntryRequirementCreateInput, EntryRequirementUncheckedCreateInput>
    /**
     * In case the EntryRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryRequirementUpdateInput, EntryRequirementUncheckedUpdateInput>
  }

  /**
   * EntryRequirement delete
   */
  export type EntryRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
    /**
     * Filter which EntryRequirement to delete.
     */
    where: EntryRequirementWhereUniqueInput
  }

  /**
   * EntryRequirement deleteMany
   */
  export type EntryRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EntryRequirements to delete
     */
    where?: EntryRequirementWhereInput
    /**
     * Limit how many EntryRequirements to delete.
     */
    limit?: number
  }

  /**
   * EntryRequirement findRaw
   */
  export type EntryRequirementFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EntryRequirement aggregateRaw
   */
  export type EntryRequirementAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EntryRequirement without action
   */
  export type EntryRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryRequirement
     */
    select?: EntryRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EntryRequirement
     */
    omit?: EntryRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryRequirementInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    event_title: string | null
    event_date: Date | null
    event_time: string | null
    event_location: string | null
    event_details: string | null
    event_image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    event_title: string | null
    event_date: Date | null
    event_time: string | null
    event_location: string | null
    event_details: string | null
    event_image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    event_title: number
    event_date: number
    event_time: number
    event_location: number
    event_details: number
    event_image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    event_title?: true
    event_date?: true
    event_time?: true
    event_location?: true
    event_details?: true
    event_image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    event_title?: true
    event_date?: true
    event_time?: true
    event_location?: true
    event_details?: true
    event_image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    event_title?: true
    event_date?: true
    event_time?: true
    event_location?: true
    event_details?: true
    event_image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    event_title: string
    event_date: Date
    event_time: string
    event_location: string
    event_details: string
    event_image: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_title?: boolean
    event_date?: boolean
    event_time?: boolean
    event_location?: boolean
    event_details?: boolean
    event_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    event_title?: boolean
    event_date?: boolean
    event_time?: boolean
    event_location?: boolean
    event_details?: boolean
    event_image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_title" | "event_date" | "event_time" | "event_location" | "event_details" | "event_image" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_title: string
      event_date: Date
      event_time: string
      event_location: string
      event_details: string
      event_image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * @param {EventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const event = await prisma.event.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Event.
     * @param {EventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const event = await prisma.event.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly event_title: FieldRef<"Event", 'String'>
    readonly event_date: FieldRef<"Event", 'DateTime'>
    readonly event_time: FieldRef<"Event", 'String'>
    readonly event_location: FieldRef<"Event", 'String'>
    readonly event_details: FieldRef<"Event", 'String'>
    readonly event_image: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event findRaw
   */
  export type EventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event aggregateRaw
   */
  export type EventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    paymentAmount: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    paymentAmount: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    street: string | null
    branch: string | null
    date: string | null
    time: string | null
    stripeSessionId: string | null
    paymentAmount: number | null
    paymentStatus: string | null
    appointment_status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    street: string | null
    branch: string | null
    date: string | null
    time: string | null
    stripeSessionId: string | null
    paymentAmount: number | null
    paymentStatus: string | null
    appointment_status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    city: number
    street: number
    branch: number
    date: number
    time: number
    stripeSessionId: number
    paymentAmount: number
    paymentStatus: number
    appointment_status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    paymentAmount?: true
  }

  export type AppointmentSumAggregateInputType = {
    paymentAmount?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    street?: true
    branch?: true
    date?: true
    time?: true
    stripeSessionId?: true
    paymentAmount?: true
    paymentStatus?: true
    appointment_status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    street?: true
    branch?: true
    date?: true
    time?: true
    stripeSessionId?: true
    paymentAmount?: true
    paymentStatus?: true
    appointment_status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    street?: true
    branch?: true
    date?: true
    time?: true
    stripeSessionId?: true
    paymentAmount?: true
    paymentStatus?: true
    appointment_status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    city: string
    street: string
    branch: string
    date: string
    time: string
    stripeSessionId: string
    paymentAmount: number
    paymentStatus: string
    appointment_status: string
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    street?: boolean
    branch?: boolean
    date?: boolean
    time?: boolean
    stripeSessionId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    appointment_status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointment"]>



  export type AppointmentSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    street?: boolean
    branch?: boolean
    date?: boolean
    time?: boolean
    stripeSessionId?: boolean
    paymentAmount?: boolean
    paymentStatus?: boolean
    appointment_status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "city" | "street" | "branch" | "date" | "time" | "stripeSessionId" | "paymentAmount" | "paymentStatus" | "appointment_status" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      city: string
      street: string
      branch: string
      date: string
      time: string
      stripeSessionId: string
      paymentAmount: number
      paymentStatus: string
      appointment_status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * @param {AppointmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const appointment = await prisma.appointment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AppointmentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Appointment.
     * @param {AppointmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const appointment = await prisma.appointment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AppointmentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly name: FieldRef<"Appointment", 'String'>
    readonly email: FieldRef<"Appointment", 'String'>
    readonly phone: FieldRef<"Appointment", 'String'>
    readonly city: FieldRef<"Appointment", 'String'>
    readonly street: FieldRef<"Appointment", 'String'>
    readonly branch: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'String'>
    readonly time: FieldRef<"Appointment", 'String'>
    readonly stripeSessionId: FieldRef<"Appointment", 'String'>
    readonly paymentAmount: FieldRef<"Appointment", 'Int'>
    readonly paymentStatus: FieldRef<"Appointment", 'String'>
    readonly appointment_status: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment findRaw
   */
  export type AppointmentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointment aggregateRaw
   */
  export type AppointmentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    image: 'image',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    seoData: 'seoData'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const UniversityScalarFieldEnum: {
    id: 'id',
    university_name: 'university_name',
    university_image: 'university_image',
    university_about: 'university_about',
    university_address: 'university_address',
    university_country: 'university_country'
  };

  export type UniversityScalarFieldEnum = (typeof UniversityScalarFieldEnum)[keyof typeof UniversityScalarFieldEnum]


  export const AvailableProgramScalarFieldEnum: {
    id: 'id',
    program_name: 'program_name',
    duration: 'duration',
    degree_type: 'degree_type',
    department: 'department',
    description: 'description',
    universityId: 'universityId'
  };

  export type AvailableProgramScalarFieldEnum = (typeof AvailableProgramScalarFieldEnum)[keyof typeof AvailableProgramScalarFieldEnum]


  export const EntryRequirementScalarFieldEnum: {
    id: 'id',
    criteria: 'criteria',
    details: 'details',
    programId: 'programId'
  };

  export type EntryRequirementScalarFieldEnum = (typeof EntryRequirementScalarFieldEnum)[keyof typeof EntryRequirementScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    event_title: 'event_title',
    event_date: 'event_date',
    event_time: 'event_time',
    event_location: 'event_location',
    event_details: 'event_details',
    event_image: 'event_image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    city: 'city',
    street: 'street',
    branch: 'branch',
    date: 'date',
    time: 'time',
    stripeSessionId: 'stripeSessionId',
    paymentAmount: 'paymentAmount',
    paymentStatus: 'paymentStatus',
    appointment_status: 'appointment_status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'UniversityCountry'
   */
  export type EnumUniversityCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UniversityCountry'>
    


  /**
   * Reference to a field of type 'UniversityCountry[]'
   */
  export type ListEnumUniversityCountryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UniversityCountry[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    blogs?: BlogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    blogs?: BlogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    blogs?: BlogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    image?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    seoData?: JsonNullableFilter<"Blog">
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    seoData?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    image?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    seoData?: JsonNullableFilter<"Blog">
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "slug">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    seoData?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    slug?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    image?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    authorId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    metaTitle?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    seoData?: JsonNullableWithAggregatesFilter<"Blog">
  }

  export type UniversityWhereInput = {
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    id?: StringFilter<"University"> | string
    university_name?: StringFilter<"University"> | string
    university_image?: StringFilter<"University"> | string
    university_about?: StringFilter<"University"> | string
    university_address?: StringFilter<"University"> | string
    university_country?: EnumUniversityCountryFilter<"University"> | $Enums.UniversityCountry
    available_programs?: AvailableProgramListRelationFilter
  }

  export type UniversityOrderByWithRelationInput = {
    id?: SortOrder
    university_name?: SortOrder
    university_image?: SortOrder
    university_about?: SortOrder
    university_address?: SortOrder
    university_country?: SortOrder
    available_programs?: AvailableProgramOrderByRelationAggregateInput
  }

  export type UniversityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UniversityWhereInput | UniversityWhereInput[]
    OR?: UniversityWhereInput[]
    NOT?: UniversityWhereInput | UniversityWhereInput[]
    university_name?: StringFilter<"University"> | string
    university_image?: StringFilter<"University"> | string
    university_about?: StringFilter<"University"> | string
    university_address?: StringFilter<"University"> | string
    university_country?: EnumUniversityCountryFilter<"University"> | $Enums.UniversityCountry
    available_programs?: AvailableProgramListRelationFilter
  }, "id">

  export type UniversityOrderByWithAggregationInput = {
    id?: SortOrder
    university_name?: SortOrder
    university_image?: SortOrder
    university_about?: SortOrder
    university_address?: SortOrder
    university_country?: SortOrder
    _count?: UniversityCountOrderByAggregateInput
    _max?: UniversityMaxOrderByAggregateInput
    _min?: UniversityMinOrderByAggregateInput
  }

  export type UniversityScalarWhereWithAggregatesInput = {
    AND?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    OR?: UniversityScalarWhereWithAggregatesInput[]
    NOT?: UniversityScalarWhereWithAggregatesInput | UniversityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"University"> | string
    university_name?: StringWithAggregatesFilter<"University"> | string
    university_image?: StringWithAggregatesFilter<"University"> | string
    university_about?: StringWithAggregatesFilter<"University"> | string
    university_address?: StringWithAggregatesFilter<"University"> | string
    university_country?: EnumUniversityCountryWithAggregatesFilter<"University"> | $Enums.UniversityCountry
  }

  export type AvailableProgramWhereInput = {
    AND?: AvailableProgramWhereInput | AvailableProgramWhereInput[]
    OR?: AvailableProgramWhereInput[]
    NOT?: AvailableProgramWhereInput | AvailableProgramWhereInput[]
    id?: StringFilter<"AvailableProgram"> | string
    program_name?: StringFilter<"AvailableProgram"> | string
    duration?: StringFilter<"AvailableProgram"> | string
    degree_type?: StringFilter<"AvailableProgram"> | string
    department?: StringNullableFilter<"AvailableProgram"> | string | null
    description?: StringNullableFilter<"AvailableProgram"> | string | null
    universityId?: StringFilter<"AvailableProgram"> | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    entry_requirements?: EntryRequirementListRelationFilter
  }

  export type AvailableProgramOrderByWithRelationInput = {
    id?: SortOrder
    program_name?: SortOrder
    duration?: SortOrder
    degree_type?: SortOrder
    department?: SortOrder
    description?: SortOrder
    universityId?: SortOrder
    university?: UniversityOrderByWithRelationInput
    entry_requirements?: EntryRequirementOrderByRelationAggregateInput
  }

  export type AvailableProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableProgramWhereInput | AvailableProgramWhereInput[]
    OR?: AvailableProgramWhereInput[]
    NOT?: AvailableProgramWhereInput | AvailableProgramWhereInput[]
    program_name?: StringFilter<"AvailableProgram"> | string
    duration?: StringFilter<"AvailableProgram"> | string
    degree_type?: StringFilter<"AvailableProgram"> | string
    department?: StringNullableFilter<"AvailableProgram"> | string | null
    description?: StringNullableFilter<"AvailableProgram"> | string | null
    universityId?: StringFilter<"AvailableProgram"> | string
    university?: XOR<UniversityScalarRelationFilter, UniversityWhereInput>
    entry_requirements?: EntryRequirementListRelationFilter
  }, "id">

  export type AvailableProgramOrderByWithAggregationInput = {
    id?: SortOrder
    program_name?: SortOrder
    duration?: SortOrder
    degree_type?: SortOrder
    department?: SortOrder
    description?: SortOrder
    universityId?: SortOrder
    _count?: AvailableProgramCountOrderByAggregateInput
    _max?: AvailableProgramMaxOrderByAggregateInput
    _min?: AvailableProgramMinOrderByAggregateInput
  }

  export type AvailableProgramScalarWhereWithAggregatesInput = {
    AND?: AvailableProgramScalarWhereWithAggregatesInput | AvailableProgramScalarWhereWithAggregatesInput[]
    OR?: AvailableProgramScalarWhereWithAggregatesInput[]
    NOT?: AvailableProgramScalarWhereWithAggregatesInput | AvailableProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableProgram"> | string
    program_name?: StringWithAggregatesFilter<"AvailableProgram"> | string
    duration?: StringWithAggregatesFilter<"AvailableProgram"> | string
    degree_type?: StringWithAggregatesFilter<"AvailableProgram"> | string
    department?: StringNullableWithAggregatesFilter<"AvailableProgram"> | string | null
    description?: StringNullableWithAggregatesFilter<"AvailableProgram"> | string | null
    universityId?: StringWithAggregatesFilter<"AvailableProgram"> | string
  }

  export type EntryRequirementWhereInput = {
    AND?: EntryRequirementWhereInput | EntryRequirementWhereInput[]
    OR?: EntryRequirementWhereInput[]
    NOT?: EntryRequirementWhereInput | EntryRequirementWhereInput[]
    id?: StringFilter<"EntryRequirement"> | string
    criteria?: StringFilter<"EntryRequirement"> | string
    details?: StringFilter<"EntryRequirement"> | string
    programId?: StringFilter<"EntryRequirement"> | string
    program?: XOR<AvailableProgramScalarRelationFilter, AvailableProgramWhereInput>
  }

  export type EntryRequirementOrderByWithRelationInput = {
    id?: SortOrder
    criteria?: SortOrder
    details?: SortOrder
    programId?: SortOrder
    program?: AvailableProgramOrderByWithRelationInput
  }

  export type EntryRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntryRequirementWhereInput | EntryRequirementWhereInput[]
    OR?: EntryRequirementWhereInput[]
    NOT?: EntryRequirementWhereInput | EntryRequirementWhereInput[]
    criteria?: StringFilter<"EntryRequirement"> | string
    details?: StringFilter<"EntryRequirement"> | string
    programId?: StringFilter<"EntryRequirement"> | string
    program?: XOR<AvailableProgramScalarRelationFilter, AvailableProgramWhereInput>
  }, "id">

  export type EntryRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    criteria?: SortOrder
    details?: SortOrder
    programId?: SortOrder
    _count?: EntryRequirementCountOrderByAggregateInput
    _max?: EntryRequirementMaxOrderByAggregateInput
    _min?: EntryRequirementMinOrderByAggregateInput
  }

  export type EntryRequirementScalarWhereWithAggregatesInput = {
    AND?: EntryRequirementScalarWhereWithAggregatesInput | EntryRequirementScalarWhereWithAggregatesInput[]
    OR?: EntryRequirementScalarWhereWithAggregatesInput[]
    NOT?: EntryRequirementScalarWhereWithAggregatesInput | EntryRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EntryRequirement"> | string
    criteria?: StringWithAggregatesFilter<"EntryRequirement"> | string
    details?: StringWithAggregatesFilter<"EntryRequirement"> | string
    programId?: StringWithAggregatesFilter<"EntryRequirement"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    event_title?: StringFilter<"Event"> | string
    event_date?: DateTimeFilter<"Event"> | Date | string
    event_time?: StringFilter<"Event"> | string
    event_location?: StringFilter<"Event"> | string
    event_details?: StringFilter<"Event"> | string
    event_image?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    event_title?: SortOrder
    event_date?: SortOrder
    event_time?: SortOrder
    event_location?: SortOrder
    event_details?: SortOrder
    event_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    event_title?: StringFilter<"Event"> | string
    event_date?: DateTimeFilter<"Event"> | Date | string
    event_time?: StringFilter<"Event"> | string
    event_location?: StringFilter<"Event"> | string
    event_details?: StringFilter<"Event"> | string
    event_image?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    event_title?: SortOrder
    event_date?: SortOrder
    event_time?: SortOrder
    event_location?: SortOrder
    event_details?: SortOrder
    event_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    event_title?: StringWithAggregatesFilter<"Event"> | string
    event_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    event_time?: StringWithAggregatesFilter<"Event"> | string
    event_location?: StringWithAggregatesFilter<"Event"> | string
    event_details?: StringWithAggregatesFilter<"Event"> | string
    event_image?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    name?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    city?: StringFilter<"Appointment"> | string
    street?: StringFilter<"Appointment"> | string
    branch?: StringFilter<"Appointment"> | string
    date?: StringFilter<"Appointment"> | string
    time?: StringFilter<"Appointment"> | string
    stripeSessionId?: StringFilter<"Appointment"> | string
    paymentAmount?: IntFilter<"Appointment"> | number
    paymentStatus?: StringFilter<"Appointment"> | string
    appointment_status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    street?: SortOrder
    branch?: SortOrder
    date?: SortOrder
    time?: SortOrder
    stripeSessionId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    appointment_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    name?: StringFilter<"Appointment"> | string
    email?: StringFilter<"Appointment"> | string
    phone?: StringFilter<"Appointment"> | string
    city?: StringFilter<"Appointment"> | string
    street?: StringFilter<"Appointment"> | string
    branch?: StringFilter<"Appointment"> | string
    date?: StringFilter<"Appointment"> | string
    time?: StringFilter<"Appointment"> | string
    paymentAmount?: IntFilter<"Appointment"> | number
    paymentStatus?: StringFilter<"Appointment"> | string
    appointment_status?: StringFilter<"Appointment"> | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }, "id" | "stripeSessionId">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    street?: SortOrder
    branch?: SortOrder
    date?: SortOrder
    time?: SortOrder
    stripeSessionId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    appointment_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    name?: StringWithAggregatesFilter<"Appointment"> | string
    email?: StringWithAggregatesFilter<"Appointment"> | string
    phone?: StringWithAggregatesFilter<"Appointment"> | string
    city?: StringWithAggregatesFilter<"Appointment"> | string
    street?: StringWithAggregatesFilter<"Appointment"> | string
    branch?: StringWithAggregatesFilter<"Appointment"> | string
    date?: StringWithAggregatesFilter<"Appointment"> | string
    time?: StringWithAggregatesFilter<"Appointment"> | string
    stripeSessionId?: StringWithAggregatesFilter<"Appointment"> | string
    paymentAmount?: IntWithAggregatesFilter<"Appointment"> | number
    paymentStatus?: StringWithAggregatesFilter<"Appointment"> | string
    appointment_status?: StringWithAggregatesFilter<"Appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Role
    blogs?: BlogCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Role
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    blogs?: BlogUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    blogs?: BlogUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
    author?: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
    author?: UserUpdateOneWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type BlogUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type UniversityCreateInput = {
    id?: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
    available_programs?: AvailableProgramCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUncheckedCreateInput = {
    id?: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
    available_programs?: AvailableProgramUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityUpdateInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
    available_programs?: AvailableProgramUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityUncheckedUpdateInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
    available_programs?: AvailableProgramUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityCreateManyInput = {
    id?: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
  }

  export type UniversityUpdateManyMutationInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
  }

  export type UniversityUncheckedUpdateManyInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
  }

  export type AvailableProgramCreateInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    university: UniversityCreateNestedOneWithoutAvailable_programsInput
    entry_requirements?: EntryRequirementCreateNestedManyWithoutProgramInput
  }

  export type AvailableProgramUncheckedCreateInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    universityId: string
    entry_requirements?: EntryRequirementUncheckedCreateNestedManyWithoutProgramInput
  }

  export type AvailableProgramUpdateInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    university?: UniversityUpdateOneRequiredWithoutAvailable_programsNestedInput
    entry_requirements?: EntryRequirementUpdateManyWithoutProgramNestedInput
  }

  export type AvailableProgramUncheckedUpdateInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
    entry_requirements?: EntryRequirementUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type AvailableProgramCreateManyInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    universityId: string
  }

  export type AvailableProgramUpdateManyMutationInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailableProgramUncheckedUpdateManyInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
  }

  export type EntryRequirementCreateInput = {
    id?: string
    criteria: string
    details: string
    program: AvailableProgramCreateNestedOneWithoutEntry_requirementsInput
  }

  export type EntryRequirementUncheckedCreateInput = {
    id?: string
    criteria: string
    details: string
    programId: string
  }

  export type EntryRequirementUpdateInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    program?: AvailableProgramUpdateOneRequiredWithoutEntry_requirementsNestedInput
  }

  export type EntryRequirementUncheckedUpdateInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
  }

  export type EntryRequirementCreateManyInput = {
    id?: string
    criteria: string
    details: string
    programId: string
  }

  export type EntryRequirementUpdateManyMutationInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
  }

  export type EntryRequirementUncheckedUpdateManyInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    id?: string
    event_title: string
    event_date: Date | string
    event_time: string
    event_location: string
    event_details: string
    event_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    event_title: string
    event_date: Date | string
    event_time: string
    event_location: string
    event_details: string
    event_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    event_title?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_time?: StringFieldUpdateOperationsInput | string
    event_location?: StringFieldUpdateOperationsInput | string
    event_details?: StringFieldUpdateOperationsInput | string
    event_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    event_title?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_time?: StringFieldUpdateOperationsInput | string
    event_location?: StringFieldUpdateOperationsInput | string
    event_details?: StringFieldUpdateOperationsInput | string
    event_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    event_title: string
    event_date: Date | string
    event_time: string
    event_location: string
    event_details: string
    event_image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    event_title?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_time?: StringFieldUpdateOperationsInput | string
    event_location?: StringFieldUpdateOperationsInput | string
    event_details?: StringFieldUpdateOperationsInput | string
    event_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    event_title?: StringFieldUpdateOperationsInput | string
    event_date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_time?: StringFieldUpdateOperationsInput | string
    event_location?: StringFieldUpdateOperationsInput | string
    event_details?: StringFieldUpdateOperationsInput | string
    event_image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    street: string
    branch: string
    date: string
    time: string
    stripeSessionId: string
    paymentAmount?: number
    paymentStatus?: string
    appointment_status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    street: string
    branch: string
    date: string
    time: string
    stripeSessionId: string
    paymentAmount?: number
    paymentStatus?: string
    appointment_status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    appointment_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    appointment_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    city: string
    street: string
    branch: string
    date: string
    time: string
    stripeSessionId: string
    paymentAmount?: number
    paymentStatus?: string
    appointment_status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    appointment_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    paymentAmount?: IntFieldUpdateOperationsInput | number
    paymentStatus?: StringFieldUpdateOperationsInput | string
    appointment_status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    seoData?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    image?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumUniversityCountryFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversityCountry | EnumUniversityCountryFieldRefInput<$PrismaModel>
    in?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversityCountryFilter<$PrismaModel> | $Enums.UniversityCountry
  }

  export type AvailableProgramListRelationFilter = {
    every?: AvailableProgramWhereInput
    some?: AvailableProgramWhereInput
    none?: AvailableProgramWhereInput
  }

  export type AvailableProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityCountOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    university_image?: SortOrder
    university_about?: SortOrder
    university_address?: SortOrder
    university_country?: SortOrder
  }

  export type UniversityMaxOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    university_image?: SortOrder
    university_about?: SortOrder
    university_address?: SortOrder
    university_country?: SortOrder
  }

  export type UniversityMinOrderByAggregateInput = {
    id?: SortOrder
    university_name?: SortOrder
    university_image?: SortOrder
    university_about?: SortOrder
    university_address?: SortOrder
    university_country?: SortOrder
  }

  export type EnumUniversityCountryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversityCountry | EnumUniversityCountryFieldRefInput<$PrismaModel>
    in?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversityCountryWithAggregatesFilter<$PrismaModel> | $Enums.UniversityCountry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUniversityCountryFilter<$PrismaModel>
    _max?: NestedEnumUniversityCountryFilter<$PrismaModel>
  }

  export type UniversityScalarRelationFilter = {
    is?: UniversityWhereInput
    isNot?: UniversityWhereInput
  }

  export type EntryRequirementListRelationFilter = {
    every?: EntryRequirementWhereInput
    some?: EntryRequirementWhereInput
    none?: EntryRequirementWhereInput
  }

  export type EntryRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableProgramCountOrderByAggregateInput = {
    id?: SortOrder
    program_name?: SortOrder
    duration?: SortOrder
    degree_type?: SortOrder
    department?: SortOrder
    description?: SortOrder
    universityId?: SortOrder
  }

  export type AvailableProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    program_name?: SortOrder
    duration?: SortOrder
    degree_type?: SortOrder
    department?: SortOrder
    description?: SortOrder
    universityId?: SortOrder
  }

  export type AvailableProgramMinOrderByAggregateInput = {
    id?: SortOrder
    program_name?: SortOrder
    duration?: SortOrder
    degree_type?: SortOrder
    department?: SortOrder
    description?: SortOrder
    universityId?: SortOrder
  }

  export type AvailableProgramScalarRelationFilter = {
    is?: AvailableProgramWhereInput
    isNot?: AvailableProgramWhereInput
  }

  export type EntryRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    criteria?: SortOrder
    details?: SortOrder
    programId?: SortOrder
  }

  export type EntryRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    criteria?: SortOrder
    details?: SortOrder
    programId?: SortOrder
  }

  export type EntryRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    criteria?: SortOrder
    details?: SortOrder
    programId?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    event_title?: SortOrder
    event_date?: SortOrder
    event_time?: SortOrder
    event_location?: SortOrder
    event_details?: SortOrder
    event_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    event_title?: SortOrder
    event_date?: SortOrder
    event_time?: SortOrder
    event_location?: SortOrder
    event_details?: SortOrder
    event_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    event_title?: SortOrder
    event_date?: SortOrder
    event_time?: SortOrder
    event_location?: SortOrder
    event_details?: SortOrder
    event_image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    street?: SortOrder
    branch?: SortOrder
    date?: SortOrder
    time?: SortOrder
    stripeSessionId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    appointment_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    street?: SortOrder
    branch?: SortOrder
    date?: SortOrder
    time?: SortOrder
    stripeSessionId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    appointment_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    street?: SortOrder
    branch?: SortOrder
    date?: SortOrder
    time?: SortOrder
    stripeSessionId?: SortOrder
    paymentAmount?: SortOrder
    paymentStatus?: SortOrder
    appointment_status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    paymentAmount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BlogUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput> | BlogCreateWithoutAuthorInput[] | BlogUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAuthorInput | BlogCreateOrConnectWithoutAuthorInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAuthorInput | BlogUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BlogCreateManyAuthorInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAuthorInput | BlogUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAuthorInput | BlogUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type AvailableProgramCreateNestedManyWithoutUniversityInput = {
    create?: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput> | AvailableProgramCreateWithoutUniversityInput[] | AvailableProgramUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutUniversityInput | AvailableProgramCreateOrConnectWithoutUniversityInput[]
    createMany?: AvailableProgramCreateManyUniversityInputEnvelope
    connect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
  }

  export type AvailableProgramUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput> | AvailableProgramCreateWithoutUniversityInput[] | AvailableProgramUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutUniversityInput | AvailableProgramCreateOrConnectWithoutUniversityInput[]
    createMany?: AvailableProgramCreateManyUniversityInputEnvelope
    connect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
  }

  export type EnumUniversityCountryFieldUpdateOperationsInput = {
    set?: $Enums.UniversityCountry
  }

  export type AvailableProgramUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput> | AvailableProgramCreateWithoutUniversityInput[] | AvailableProgramUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutUniversityInput | AvailableProgramCreateOrConnectWithoutUniversityInput[]
    upsert?: AvailableProgramUpsertWithWhereUniqueWithoutUniversityInput | AvailableProgramUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: AvailableProgramCreateManyUniversityInputEnvelope
    set?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    disconnect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    delete?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    connect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    update?: AvailableProgramUpdateWithWhereUniqueWithoutUniversityInput | AvailableProgramUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: AvailableProgramUpdateManyWithWhereWithoutUniversityInput | AvailableProgramUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: AvailableProgramScalarWhereInput | AvailableProgramScalarWhereInput[]
  }

  export type AvailableProgramUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput> | AvailableProgramCreateWithoutUniversityInput[] | AvailableProgramUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutUniversityInput | AvailableProgramCreateOrConnectWithoutUniversityInput[]
    upsert?: AvailableProgramUpsertWithWhereUniqueWithoutUniversityInput | AvailableProgramUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: AvailableProgramCreateManyUniversityInputEnvelope
    set?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    disconnect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    delete?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    connect?: AvailableProgramWhereUniqueInput | AvailableProgramWhereUniqueInput[]
    update?: AvailableProgramUpdateWithWhereUniqueWithoutUniversityInput | AvailableProgramUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: AvailableProgramUpdateManyWithWhereWithoutUniversityInput | AvailableProgramUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: AvailableProgramScalarWhereInput | AvailableProgramScalarWhereInput[]
  }

  export type UniversityCreateNestedOneWithoutAvailable_programsInput = {
    create?: XOR<UniversityCreateWithoutAvailable_programsInput, UniversityUncheckedCreateWithoutAvailable_programsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutAvailable_programsInput
    connect?: UniversityWhereUniqueInput
  }

  export type EntryRequirementCreateNestedManyWithoutProgramInput = {
    create?: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput> | EntryRequirementCreateWithoutProgramInput[] | EntryRequirementUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EntryRequirementCreateOrConnectWithoutProgramInput | EntryRequirementCreateOrConnectWithoutProgramInput[]
    createMany?: EntryRequirementCreateManyProgramInputEnvelope
    connect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
  }

  export type EntryRequirementUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput> | EntryRequirementCreateWithoutProgramInput[] | EntryRequirementUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EntryRequirementCreateOrConnectWithoutProgramInput | EntryRequirementCreateOrConnectWithoutProgramInput[]
    createMany?: EntryRequirementCreateManyProgramInputEnvelope
    connect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
  }

  export type UniversityUpdateOneRequiredWithoutAvailable_programsNestedInput = {
    create?: XOR<UniversityCreateWithoutAvailable_programsInput, UniversityUncheckedCreateWithoutAvailable_programsInput>
    connectOrCreate?: UniversityCreateOrConnectWithoutAvailable_programsInput
    upsert?: UniversityUpsertWithoutAvailable_programsInput
    connect?: UniversityWhereUniqueInput
    update?: XOR<XOR<UniversityUpdateToOneWithWhereWithoutAvailable_programsInput, UniversityUpdateWithoutAvailable_programsInput>, UniversityUncheckedUpdateWithoutAvailable_programsInput>
  }

  export type EntryRequirementUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput> | EntryRequirementCreateWithoutProgramInput[] | EntryRequirementUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EntryRequirementCreateOrConnectWithoutProgramInput | EntryRequirementCreateOrConnectWithoutProgramInput[]
    upsert?: EntryRequirementUpsertWithWhereUniqueWithoutProgramInput | EntryRequirementUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EntryRequirementCreateManyProgramInputEnvelope
    set?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    disconnect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    delete?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    connect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    update?: EntryRequirementUpdateWithWhereUniqueWithoutProgramInput | EntryRequirementUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EntryRequirementUpdateManyWithWhereWithoutProgramInput | EntryRequirementUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EntryRequirementScalarWhereInput | EntryRequirementScalarWhereInput[]
  }

  export type EntryRequirementUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput> | EntryRequirementCreateWithoutProgramInput[] | EntryRequirementUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: EntryRequirementCreateOrConnectWithoutProgramInput | EntryRequirementCreateOrConnectWithoutProgramInput[]
    upsert?: EntryRequirementUpsertWithWhereUniqueWithoutProgramInput | EntryRequirementUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: EntryRequirementCreateManyProgramInputEnvelope
    set?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    disconnect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    delete?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    connect?: EntryRequirementWhereUniqueInput | EntryRequirementWhereUniqueInput[]
    update?: EntryRequirementUpdateWithWhereUniqueWithoutProgramInput | EntryRequirementUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: EntryRequirementUpdateManyWithWhereWithoutProgramInput | EntryRequirementUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: EntryRequirementScalarWhereInput | EntryRequirementScalarWhereInput[]
  }

  export type AvailableProgramCreateNestedOneWithoutEntry_requirementsInput = {
    create?: XOR<AvailableProgramCreateWithoutEntry_requirementsInput, AvailableProgramUncheckedCreateWithoutEntry_requirementsInput>
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutEntry_requirementsInput
    connect?: AvailableProgramWhereUniqueInput
  }

  export type AvailableProgramUpdateOneRequiredWithoutEntry_requirementsNestedInput = {
    create?: XOR<AvailableProgramCreateWithoutEntry_requirementsInput, AvailableProgramUncheckedCreateWithoutEntry_requirementsInput>
    connectOrCreate?: AvailableProgramCreateOrConnectWithoutEntry_requirementsInput
    upsert?: AvailableProgramUpsertWithoutEntry_requirementsInput
    connect?: AvailableProgramWhereUniqueInput
    update?: XOR<XOR<AvailableProgramUpdateToOneWithWhereWithoutEntry_requirementsInput, AvailableProgramUpdateWithoutEntry_requirementsInput>, AvailableProgramUncheckedUpdateWithoutEntry_requirementsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedEnumUniversityCountryFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversityCountry | EnumUniversityCountryFieldRefInput<$PrismaModel>
    in?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversityCountryFilter<$PrismaModel> | $Enums.UniversityCountry
  }

  export type NestedEnumUniversityCountryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UniversityCountry | EnumUniversityCountryFieldRefInput<$PrismaModel>
    in?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    notIn?: $Enums.UniversityCountry[] | ListEnumUniversityCountryFieldRefInput<$PrismaModel>
    not?: NestedEnumUniversityCountryWithAggregatesFilter<$PrismaModel> | $Enums.UniversityCountry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUniversityCountryFilter<$PrismaModel>
    _max?: NestedEnumUniversityCountryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BlogCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: BlogCreateManyAuthorInput | BlogCreateManyAuthorInput[]
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    slug?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    image?: StringNullableFilter<"Blog"> | string | null
    authorId?: StringNullableFilter<"Blog"> | string | null
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    metaTitle?: StringNullableFilter<"Blog"> | string | null
    metaDescription?: StringNullableFilter<"Blog"> | string | null
    seoData?: JsonNullableFilter<"Blog">
  }

  export type UserCreateWithoutBlogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Role
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    role?: $Enums.Role
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type AvailableProgramCreateWithoutUniversityInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    entry_requirements?: EntryRequirementCreateNestedManyWithoutProgramInput
  }

  export type AvailableProgramUncheckedCreateWithoutUniversityInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    entry_requirements?: EntryRequirementUncheckedCreateNestedManyWithoutProgramInput
  }

  export type AvailableProgramCreateOrConnectWithoutUniversityInput = {
    where: AvailableProgramWhereUniqueInput
    create: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput>
  }

  export type AvailableProgramCreateManyUniversityInputEnvelope = {
    data: AvailableProgramCreateManyUniversityInput | AvailableProgramCreateManyUniversityInput[]
  }

  export type AvailableProgramUpsertWithWhereUniqueWithoutUniversityInput = {
    where: AvailableProgramWhereUniqueInput
    update: XOR<AvailableProgramUpdateWithoutUniversityInput, AvailableProgramUncheckedUpdateWithoutUniversityInput>
    create: XOR<AvailableProgramCreateWithoutUniversityInput, AvailableProgramUncheckedCreateWithoutUniversityInput>
  }

  export type AvailableProgramUpdateWithWhereUniqueWithoutUniversityInput = {
    where: AvailableProgramWhereUniqueInput
    data: XOR<AvailableProgramUpdateWithoutUniversityInput, AvailableProgramUncheckedUpdateWithoutUniversityInput>
  }

  export type AvailableProgramUpdateManyWithWhereWithoutUniversityInput = {
    where: AvailableProgramScalarWhereInput
    data: XOR<AvailableProgramUpdateManyMutationInput, AvailableProgramUncheckedUpdateManyWithoutUniversityInput>
  }

  export type AvailableProgramScalarWhereInput = {
    AND?: AvailableProgramScalarWhereInput | AvailableProgramScalarWhereInput[]
    OR?: AvailableProgramScalarWhereInput[]
    NOT?: AvailableProgramScalarWhereInput | AvailableProgramScalarWhereInput[]
    id?: StringFilter<"AvailableProgram"> | string
    program_name?: StringFilter<"AvailableProgram"> | string
    duration?: StringFilter<"AvailableProgram"> | string
    degree_type?: StringFilter<"AvailableProgram"> | string
    department?: StringNullableFilter<"AvailableProgram"> | string | null
    description?: StringNullableFilter<"AvailableProgram"> | string | null
    universityId?: StringFilter<"AvailableProgram"> | string
  }

  export type UniversityCreateWithoutAvailable_programsInput = {
    id?: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
  }

  export type UniversityUncheckedCreateWithoutAvailable_programsInput = {
    id?: string
    university_name: string
    university_image: string
    university_about: string
    university_address: string
    university_country: $Enums.UniversityCountry
  }

  export type UniversityCreateOrConnectWithoutAvailable_programsInput = {
    where: UniversityWhereUniqueInput
    create: XOR<UniversityCreateWithoutAvailable_programsInput, UniversityUncheckedCreateWithoutAvailable_programsInput>
  }

  export type EntryRequirementCreateWithoutProgramInput = {
    id?: string
    criteria: string
    details: string
  }

  export type EntryRequirementUncheckedCreateWithoutProgramInput = {
    id?: string
    criteria: string
    details: string
  }

  export type EntryRequirementCreateOrConnectWithoutProgramInput = {
    where: EntryRequirementWhereUniqueInput
    create: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput>
  }

  export type EntryRequirementCreateManyProgramInputEnvelope = {
    data: EntryRequirementCreateManyProgramInput | EntryRequirementCreateManyProgramInput[]
  }

  export type UniversityUpsertWithoutAvailable_programsInput = {
    update: XOR<UniversityUpdateWithoutAvailable_programsInput, UniversityUncheckedUpdateWithoutAvailable_programsInput>
    create: XOR<UniversityCreateWithoutAvailable_programsInput, UniversityUncheckedCreateWithoutAvailable_programsInput>
    where?: UniversityWhereInput
  }

  export type UniversityUpdateToOneWithWhereWithoutAvailable_programsInput = {
    where?: UniversityWhereInput
    data: XOR<UniversityUpdateWithoutAvailable_programsInput, UniversityUncheckedUpdateWithoutAvailable_programsInput>
  }

  export type UniversityUpdateWithoutAvailable_programsInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
  }

  export type UniversityUncheckedUpdateWithoutAvailable_programsInput = {
    university_name?: StringFieldUpdateOperationsInput | string
    university_image?: StringFieldUpdateOperationsInput | string
    university_about?: StringFieldUpdateOperationsInput | string
    university_address?: StringFieldUpdateOperationsInput | string
    university_country?: EnumUniversityCountryFieldUpdateOperationsInput | $Enums.UniversityCountry
  }

  export type EntryRequirementUpsertWithWhereUniqueWithoutProgramInput = {
    where: EntryRequirementWhereUniqueInput
    update: XOR<EntryRequirementUpdateWithoutProgramInput, EntryRequirementUncheckedUpdateWithoutProgramInput>
    create: XOR<EntryRequirementCreateWithoutProgramInput, EntryRequirementUncheckedCreateWithoutProgramInput>
  }

  export type EntryRequirementUpdateWithWhereUniqueWithoutProgramInput = {
    where: EntryRequirementWhereUniqueInput
    data: XOR<EntryRequirementUpdateWithoutProgramInput, EntryRequirementUncheckedUpdateWithoutProgramInput>
  }

  export type EntryRequirementUpdateManyWithWhereWithoutProgramInput = {
    where: EntryRequirementScalarWhereInput
    data: XOR<EntryRequirementUpdateManyMutationInput, EntryRequirementUncheckedUpdateManyWithoutProgramInput>
  }

  export type EntryRequirementScalarWhereInput = {
    AND?: EntryRequirementScalarWhereInput | EntryRequirementScalarWhereInput[]
    OR?: EntryRequirementScalarWhereInput[]
    NOT?: EntryRequirementScalarWhereInput | EntryRequirementScalarWhereInput[]
    id?: StringFilter<"EntryRequirement"> | string
    criteria?: StringFilter<"EntryRequirement"> | string
    details?: StringFilter<"EntryRequirement"> | string
    programId?: StringFilter<"EntryRequirement"> | string
  }

  export type AvailableProgramCreateWithoutEntry_requirementsInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    university: UniversityCreateNestedOneWithoutAvailable_programsInput
  }

  export type AvailableProgramUncheckedCreateWithoutEntry_requirementsInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
    universityId: string
  }

  export type AvailableProgramCreateOrConnectWithoutEntry_requirementsInput = {
    where: AvailableProgramWhereUniqueInput
    create: XOR<AvailableProgramCreateWithoutEntry_requirementsInput, AvailableProgramUncheckedCreateWithoutEntry_requirementsInput>
  }

  export type AvailableProgramUpsertWithoutEntry_requirementsInput = {
    update: XOR<AvailableProgramUpdateWithoutEntry_requirementsInput, AvailableProgramUncheckedUpdateWithoutEntry_requirementsInput>
    create: XOR<AvailableProgramCreateWithoutEntry_requirementsInput, AvailableProgramUncheckedCreateWithoutEntry_requirementsInput>
    where?: AvailableProgramWhereInput
  }

  export type AvailableProgramUpdateToOneWithWhereWithoutEntry_requirementsInput = {
    where?: AvailableProgramWhereInput
    data: XOR<AvailableProgramUpdateWithoutEntry_requirementsInput, AvailableProgramUncheckedUpdateWithoutEntry_requirementsInput>
  }

  export type AvailableProgramUpdateWithoutEntry_requirementsInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    university?: UniversityUpdateOneRequiredWithoutAvailable_programsNestedInput
  }

  export type AvailableProgramUncheckedUpdateWithoutEntry_requirementsInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    universityId?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaTitle?: string | null
    metaDescription?: string | null
    seoData?: InputJsonValue | null
  }

  export type BlogUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    seoData?: InputJsonValue | InputJsonValue | null
  }

  export type AvailableProgramCreateManyUniversityInput = {
    id?: string
    program_name: string
    duration: string
    degree_type: string
    department?: string | null
    description?: string | null
  }

  export type AvailableProgramUpdateWithoutUniversityInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entry_requirements?: EntryRequirementUpdateManyWithoutProgramNestedInput
  }

  export type AvailableProgramUncheckedUpdateWithoutUniversityInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    entry_requirements?: EntryRequirementUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type AvailableProgramUncheckedUpdateManyWithoutUniversityInput = {
    program_name?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    degree_type?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntryRequirementCreateManyProgramInput = {
    id?: string
    criteria: string
    details: string
  }

  export type EntryRequirementUpdateWithoutProgramInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
  }

  export type EntryRequirementUncheckedUpdateWithoutProgramInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
  }

  export type EntryRequirementUncheckedUpdateManyWithoutProgramInput = {
    criteria?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
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