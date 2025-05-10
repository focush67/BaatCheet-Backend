
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
 * Model Checkup
 * 
 */
export type Checkup = $Result.DefaultSelection<Prisma.$CheckupPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model CollectionOwner
 * 
 */
export type CollectionOwner = $Result.DefaultSelection<Prisma.$CollectionOwnerPayload>
/**
 * Model CollectionPost
 * 
 */
export type CollectionPost = $Result.DefaultSelection<Prisma.$CollectionPostPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Highlight
 * 
 */
export type Highlight = $Result.DefaultSelection<Prisma.$HighlightPayload>
/**
 * Model HighlightOwner
 * 
 */
export type HighlightOwner = $Result.DefaultSelection<Prisma.$HighlightOwnerPayload>
/**
 * Model HighlightStory
 * 
 */
export type HighlightStory = $Result.DefaultSelection<Prisma.$HighlightStoryPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Checkups
 * const checkups = await prisma.checkup.findMany()
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
   * // Fetch zero or more Checkups
   * const checkups = await prisma.checkup.findMany()
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
   * `prisma.checkup`: Exposes CRUD operations for the **Checkup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkups
    * const checkups = await prisma.checkup.findMany()
    * ```
    */
  get checkup(): Prisma.CheckupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionOwner`: Exposes CRUD operations for the **CollectionOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionOwners
    * const collectionOwners = await prisma.collectionOwner.findMany()
    * ```
    */
  get collectionOwner(): Prisma.CollectionOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collectionPost`: Exposes CRUD operations for the **CollectionPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CollectionPosts
    * const collectionPosts = await prisma.collectionPost.findMany()
    * ```
    */
  get collectionPost(): Prisma.CollectionPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlight`: Exposes CRUD operations for the **Highlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Highlights
    * const highlights = await prisma.highlight.findMany()
    * ```
    */
  get highlight(): Prisma.HighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlightOwner`: Exposes CRUD operations for the **HighlightOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HighlightOwners
    * const highlightOwners = await prisma.highlightOwner.findMany()
    * ```
    */
  get highlightOwner(): Prisma.HighlightOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.highlightStory`: Exposes CRUD operations for the **HighlightStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HighlightStories
    * const highlightStories = await prisma.highlightStory.findMany()
    * ```
    */
  get highlightStory(): Prisma.HighlightStoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Checkup: 'Checkup',
    Like: 'Like',
    Comment: 'Comment',
    Collection: 'Collection',
    CollectionOwner: 'CollectionOwner',
    CollectionPost: 'CollectionPost',
    Tag: 'Tag',
    Highlight: 'Highlight',
    HighlightOwner: 'HighlightOwner',
    HighlightStory: 'HighlightStory',
    Story: 'Story',
    Post: 'Post',
    User: 'User',
    Follow: 'Follow'
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
      modelProps: "checkup" | "like" | "comment" | "collection" | "collectionOwner" | "collectionPost" | "tag" | "highlight" | "highlightOwner" | "highlightStory" | "story" | "post" | "user" | "follow"
      txIsolationLevel: never
    }
    model: {
      Checkup: {
        payload: Prisma.$CheckupPayload<ExtArgs>
        fields: Prisma.CheckupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          findFirst: {
            args: Prisma.CheckupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          findMany: {
            args: Prisma.CheckupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>[]
          }
          create: {
            args: Prisma.CheckupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          createMany: {
            args: Prisma.CheckupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CheckupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          update: {
            args: Prisma.CheckupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          deleteMany: {
            args: Prisma.CheckupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckupPayload>
          }
          aggregate: {
            args: Prisma.CheckupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckup>
          }
          groupBy: {
            args: Prisma.CheckupGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CheckupFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CheckupAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CheckupCountArgs<ExtArgs>
            result: $Utils.Optional<CheckupCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LikeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LikeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CollectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CollectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      CollectionOwner: {
        payload: Prisma.$CollectionOwnerPayload<ExtArgs>
        fields: Prisma.CollectionOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          findFirst: {
            args: Prisma.CollectionOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          findMany: {
            args: Prisma.CollectionOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>[]
          }
          create: {
            args: Prisma.CollectionOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          createMany: {
            args: Prisma.CollectionOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          update: {
            args: Prisma.CollectionOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          deleteMany: {
            args: Prisma.CollectionOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionOwnerPayload>
          }
          aggregate: {
            args: Prisma.CollectionOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionOwner>
          }
          groupBy: {
            args: Prisma.CollectionOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionOwnerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CollectionOwnerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CollectionOwnerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CollectionOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionOwnerCountAggregateOutputType> | number
          }
        }
      }
      CollectionPost: {
        payload: Prisma.$CollectionPostPayload<ExtArgs>
        fields: Prisma.CollectionPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          findFirst: {
            args: Prisma.CollectionPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          findMany: {
            args: Prisma.CollectionPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>[]
          }
          create: {
            args: Prisma.CollectionPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          createMany: {
            args: Prisma.CollectionPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          update: {
            args: Prisma.CollectionPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          deleteMany: {
            args: Prisma.CollectionPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPostPayload>
          }
          aggregate: {
            args: Prisma.CollectionPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectionPost>
          }
          groupBy: {
            args: Prisma.CollectionPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CollectionPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CollectionPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CollectionPostCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionPostCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TagFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TagAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Highlight: {
        payload: Prisma.$HighlightPayload<ExtArgs>
        fields: Prisma.HighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findFirst: {
            args: Prisma.HighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          findMany: {
            args: Prisma.HighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>[]
          }
          create: {
            args: Prisma.HighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          createMany: {
            args: Prisma.HighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          update: {
            args: Prisma.HighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          deleteMany: {
            args: Prisma.HighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightPayload>
          }
          aggregate: {
            args: Prisma.HighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlight>
          }
          groupBy: {
            args: Prisma.HighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HighlightFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HighlightAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HighlightCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightCountAggregateOutputType> | number
          }
        }
      }
      HighlightOwner: {
        payload: Prisma.$HighlightOwnerPayload<ExtArgs>
        fields: Prisma.HighlightOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          findFirst: {
            args: Prisma.HighlightOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          findMany: {
            args: Prisma.HighlightOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>[]
          }
          create: {
            args: Prisma.HighlightOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          createMany: {
            args: Prisma.HighlightOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HighlightOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          update: {
            args: Prisma.HighlightOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          deleteMany: {
            args: Prisma.HighlightOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HighlightOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightOwnerPayload>
          }
          aggregate: {
            args: Prisma.HighlightOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlightOwner>
          }
          groupBy: {
            args: Prisma.HighlightOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightOwnerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HighlightOwnerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HighlightOwnerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HighlightOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightOwnerCountAggregateOutputType> | number
          }
        }
      }
      HighlightStory: {
        payload: Prisma.$HighlightStoryPayload<ExtArgs>
        fields: Prisma.HighlightStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HighlightStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          findFirst: {
            args: Prisma.HighlightStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          findMany: {
            args: Prisma.HighlightStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>[]
          }
          create: {
            args: Prisma.HighlightStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          createMany: {
            args: Prisma.HighlightStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HighlightStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          update: {
            args: Prisma.HighlightStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          deleteMany: {
            args: Prisma.HighlightStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HighlightStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HighlightStoryPayload>
          }
          aggregate: {
            args: Prisma.HighlightStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHighlightStory>
          }
          groupBy: {
            args: Prisma.HighlightStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HighlightStoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HighlightStoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HighlightStoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HighlightStoryCountArgs<ExtArgs>
            result: $Utils.Optional<HighlightStoryCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
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
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
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
    checkup?: CheckupOmit
    like?: LikeOmit
    comment?: CommentOmit
    collection?: CollectionOmit
    collectionOwner?: CollectionOwnerOmit
    collectionPost?: CollectionPostOmit
    tag?: TagOmit
    highlight?: HighlightOmit
    highlightOwner?: HighlightOwnerOmit
    highlightStory?: HighlightStoryOmit
    story?: StoryOmit
    post?: PostOmit
    user?: UserOmit
    follow?: FollowOmit
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
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    likes: number
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | CommentCountOutputTypeCountLikesArgs
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    owners: number
    posts: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | CollectionCountOutputTypeCountOwnersArgs
    posts?: boolean | CollectionCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionOwnerWhereInput
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPostWhereInput
  }


  /**
   * Count Type HighlightCountOutputType
   */

  export type HighlightCountOutputType = {
    owners: number
    stories: number
  }

  export type HighlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | HighlightCountOutputTypeCountOwnersArgs
    stories?: boolean | HighlightCountOutputTypeCountStoriesArgs
  }

  // Custom InputTypes
  /**
   * HighlightCountOutputType without action
   */
  export type HighlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightCountOutputType
     */
    select?: HighlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HighlightCountOutputType without action
   */
  export type HighlightCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightOwnerWhereInput
  }

  /**
   * HighlightCountOutputType without action
   */
  export type HighlightCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightStoryWhereInput
  }


  /**
   * Count Type StoryCountOutputType
   */

  export type StoryCountOutputType = {
    highlights: number
    likes: number
    comments: number
  }

  export type StoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlights?: boolean | StoryCountOutputTypeCountHighlightsArgs
    likes?: boolean | StoryCountOutputTypeCountLikesArgs
    comments?: boolean | StoryCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryCountOutputType
     */
    select?: StoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightStoryWhereInput
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * StoryCountOutputType without action
   */
  export type StoryCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    likes: number
    comments: number
    tags: number
    collections: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    collections?: boolean | PostCountOutputTypeCountCollectionsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPostWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    followers: number
    following: number
    likes: number
    comments: number
    collections: number
    highlights: number
    stories: number
    posts: number
    tags: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs
    highlights?: boolean | UserCountOutputTypeCountHighlightsArgs
    stories?: boolean | UserCountOutputTypeCountStoriesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
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
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionOwnerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHighlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightOwnerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Checkup
   */

  export type AggregateCheckup = {
    _count: CheckupCountAggregateOutputType | null
    _min: CheckupMinAggregateOutputType | null
    _max: CheckupMaxAggregateOutputType | null
  }

  export type CheckupMinAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type CheckupMaxAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type CheckupCountAggregateOutputType = {
    id: number
    content: number
    _all: number
  }


  export type CheckupMinAggregateInputType = {
    id?: true
    content?: true
  }

  export type CheckupMaxAggregateInputType = {
    id?: true
    content?: true
  }

  export type CheckupCountAggregateInputType = {
    id?: true
    content?: true
    _all?: true
  }

  export type CheckupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkup to aggregate.
     */
    where?: CheckupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkups to fetch.
     */
    orderBy?: CheckupOrderByWithRelationInput | CheckupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkups
    **/
    _count?: true | CheckupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckupMaxAggregateInputType
  }

  export type GetCheckupAggregateType<T extends CheckupAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckup[P]>
      : GetScalarType<T[P], AggregateCheckup[P]>
  }




  export type CheckupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckupWhereInput
    orderBy?: CheckupOrderByWithAggregationInput | CheckupOrderByWithAggregationInput[]
    by: CheckupScalarFieldEnum[] | CheckupScalarFieldEnum
    having?: CheckupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckupCountAggregateInputType | true
    _min?: CheckupMinAggregateInputType
    _max?: CheckupMaxAggregateInputType
  }

  export type CheckupGroupByOutputType = {
    id: string
    content: string | null
    _count: CheckupCountAggregateOutputType | null
    _min: CheckupMinAggregateOutputType | null
    _max: CheckupMaxAggregateOutputType | null
  }

  type GetCheckupGroupByPayload<T extends CheckupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckupGroupByOutputType[P]>
            : GetScalarType<T[P], CheckupGroupByOutputType[P]>
        }
      >
    >


  export type CheckupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
  }, ExtArgs["result"]["checkup"]>



  export type CheckupSelectScalar = {
    id?: boolean
    content?: boolean
  }

  export type CheckupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content", ExtArgs["result"]["checkup"]>

  export type $CheckupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
    }, ExtArgs["result"]["checkup"]>
    composites: {}
  }

  type CheckupGetPayload<S extends boolean | null | undefined | CheckupDefaultArgs> = $Result.GetResult<Prisma.$CheckupPayload, S>

  type CheckupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckupCountAggregateInputType | true
    }

  export interface CheckupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkup'], meta: { name: 'Checkup' } }
    /**
     * Find zero or one Checkup that matches the filter.
     * @param {CheckupFindUniqueArgs} args - Arguments to find a Checkup
     * @example
     * // Get one Checkup
     * const checkup = await prisma.checkup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckupFindUniqueArgs>(args: SelectSubset<T, CheckupFindUniqueArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckupFindUniqueOrThrowArgs} args - Arguments to find a Checkup
     * @example
     * // Get one Checkup
     * const checkup = await prisma.checkup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckupFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupFindFirstArgs} args - Arguments to find a Checkup
     * @example
     * // Get one Checkup
     * const checkup = await prisma.checkup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckupFindFirstArgs>(args?: SelectSubset<T, CheckupFindFirstArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupFindFirstOrThrowArgs} args - Arguments to find a Checkup
     * @example
     * // Get one Checkup
     * const checkup = await prisma.checkup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckupFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckupFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkups
     * const checkups = await prisma.checkup.findMany()
     * 
     * // Get first 10 Checkups
     * const checkups = await prisma.checkup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkupWithIdOnly = await prisma.checkup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckupFindManyArgs>(args?: SelectSubset<T, CheckupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkup.
     * @param {CheckupCreateArgs} args - Arguments to create a Checkup.
     * @example
     * // Create one Checkup
     * const Checkup = await prisma.checkup.create({
     *   data: {
     *     // ... data to create a Checkup
     *   }
     * })
     * 
     */
    create<T extends CheckupCreateArgs>(args: SelectSubset<T, CheckupCreateArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkups.
     * @param {CheckupCreateManyArgs} args - Arguments to create many Checkups.
     * @example
     * // Create many Checkups
     * const checkup = await prisma.checkup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckupCreateManyArgs>(args?: SelectSubset<T, CheckupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checkup.
     * @param {CheckupDeleteArgs} args - Arguments to delete one Checkup.
     * @example
     * // Delete one Checkup
     * const Checkup = await prisma.checkup.delete({
     *   where: {
     *     // ... filter to delete one Checkup
     *   }
     * })
     * 
     */
    delete<T extends CheckupDeleteArgs>(args: SelectSubset<T, CheckupDeleteArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkup.
     * @param {CheckupUpdateArgs} args - Arguments to update one Checkup.
     * @example
     * // Update one Checkup
     * const checkup = await prisma.checkup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckupUpdateArgs>(args: SelectSubset<T, CheckupUpdateArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkups.
     * @param {CheckupDeleteManyArgs} args - Arguments to filter Checkups to delete.
     * @example
     * // Delete a few Checkups
     * const { count } = await prisma.checkup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckupDeleteManyArgs>(args?: SelectSubset<T, CheckupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkups
     * const checkup = await prisma.checkup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckupUpdateManyArgs>(args: SelectSubset<T, CheckupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checkup.
     * @param {CheckupUpsertArgs} args - Arguments to update or create a Checkup.
     * @example
     * // Update or create a Checkup
     * const checkup = await prisma.checkup.upsert({
     *   create: {
     *     // ... data to create a Checkup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkup we want to update
     *   }
     * })
     */
    upsert<T extends CheckupUpsertArgs>(args: SelectSubset<T, CheckupUpsertArgs<ExtArgs>>): Prisma__CheckupClient<$Result.GetResult<Prisma.$CheckupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkups that matches the filter.
     * @param {CheckupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const checkup = await prisma.checkup.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CheckupFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Checkup.
     * @param {CheckupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const checkup = await prisma.checkup.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CheckupAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Checkups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupCountArgs} args - Arguments to filter Checkups to count.
     * @example
     * // Count the number of Checkups
     * const count = await prisma.checkup.count({
     *   where: {
     *     // ... the filter for the Checkups we want to count
     *   }
     * })
    **/
    count<T extends CheckupCountArgs>(
      args?: Subset<T, CheckupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckupAggregateArgs>(args: Subset<T, CheckupAggregateArgs>): Prisma.PrismaPromise<GetCheckupAggregateType<T>>

    /**
     * Group by Checkup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckupGroupByArgs} args - Group by arguments.
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
      T extends CheckupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckupGroupByArgs['orderBy'] }
        : { orderBy?: CheckupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkup model
   */
  readonly fields: CheckupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Checkup model
   */
  interface CheckupFieldRefs {
    readonly id: FieldRef<"Checkup", 'String'>
    readonly content: FieldRef<"Checkup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Checkup findUnique
   */
  export type CheckupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter, which Checkup to fetch.
     */
    where: CheckupWhereUniqueInput
  }

  /**
   * Checkup findUniqueOrThrow
   */
  export type CheckupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter, which Checkup to fetch.
     */
    where: CheckupWhereUniqueInput
  }

  /**
   * Checkup findFirst
   */
  export type CheckupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter, which Checkup to fetch.
     */
    where?: CheckupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkups to fetch.
     */
    orderBy?: CheckupOrderByWithRelationInput | CheckupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkups.
     */
    cursor?: CheckupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkups.
     */
    distinct?: CheckupScalarFieldEnum | CheckupScalarFieldEnum[]
  }

  /**
   * Checkup findFirstOrThrow
   */
  export type CheckupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter, which Checkup to fetch.
     */
    where?: CheckupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkups to fetch.
     */
    orderBy?: CheckupOrderByWithRelationInput | CheckupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkups.
     */
    cursor?: CheckupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkups.
     */
    distinct?: CheckupScalarFieldEnum | CheckupScalarFieldEnum[]
  }

  /**
   * Checkup findMany
   */
  export type CheckupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter, which Checkups to fetch.
     */
    where?: CheckupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkups to fetch.
     */
    orderBy?: CheckupOrderByWithRelationInput | CheckupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkups.
     */
    cursor?: CheckupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkups.
     */
    skip?: number
    distinct?: CheckupScalarFieldEnum | CheckupScalarFieldEnum[]
  }

  /**
   * Checkup create
   */
  export type CheckupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * The data needed to create a Checkup.
     */
    data?: XOR<CheckupCreateInput, CheckupUncheckedCreateInput>
  }

  /**
   * Checkup createMany
   */
  export type CheckupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkups.
     */
    data: CheckupCreateManyInput | CheckupCreateManyInput[]
  }

  /**
   * Checkup update
   */
  export type CheckupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * The data needed to update a Checkup.
     */
    data: XOR<CheckupUpdateInput, CheckupUncheckedUpdateInput>
    /**
     * Choose, which Checkup to update.
     */
    where: CheckupWhereUniqueInput
  }

  /**
   * Checkup updateMany
   */
  export type CheckupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkups.
     */
    data: XOR<CheckupUpdateManyMutationInput, CheckupUncheckedUpdateManyInput>
    /**
     * Filter which Checkups to update
     */
    where?: CheckupWhereInput
    /**
     * Limit how many Checkups to update.
     */
    limit?: number
  }

  /**
   * Checkup upsert
   */
  export type CheckupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * The filter to search for the Checkup to update in case it exists.
     */
    where: CheckupWhereUniqueInput
    /**
     * In case the Checkup found by the `where` argument doesn't exist, create a new Checkup with this data.
     */
    create: XOR<CheckupCreateInput, CheckupUncheckedCreateInput>
    /**
     * In case the Checkup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckupUpdateInput, CheckupUncheckedUpdateInput>
  }

  /**
   * Checkup delete
   */
  export type CheckupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
    /**
     * Filter which Checkup to delete.
     */
    where: CheckupWhereUniqueInput
  }

  /**
   * Checkup deleteMany
   */
  export type CheckupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkups to delete
     */
    where?: CheckupWhereInput
    /**
     * Limit how many Checkups to delete.
     */
    limit?: number
  }

  /**
   * Checkup findRaw
   */
  export type CheckupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Checkup aggregateRaw
   */
  export type CheckupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Checkup without action
   */
  export type CheckupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkup
     */
    select?: CheckupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkup
     */
    omit?: CheckupOmit<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    postId: string | null
    storyId: string | null
    ownerId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    storyId: string | null
    ownerId: string | null
    commentId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    postId: number
    storyId: number
    ownerId: number
    commentId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    ownerId?: true
    commentId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    ownerId?: true
    commentId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    ownerId?: true
    commentId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    postId: string | null
    storyId: string | null
    ownerId: string
    commentId: string | null
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    storyId?: boolean
    ownerId?: boolean
    commentId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    story?: boolean | Like$storyArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>



  export type LikeSelectScalar = {
    id?: boolean
    postId?: boolean
    storyId?: boolean
    ownerId?: boolean
    commentId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "storyId" | "ownerId" | "commentId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Like$postArgs<ExtArgs>
    story?: boolean | Like$storyArgs<ExtArgs>
    comment?: boolean | Like$commentArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
      story: Prisma.$StoryPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string | null
      storyId: string | null
      ownerId: string
      commentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * @param {LikeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const like = await prisma.like.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LikeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Like.
     * @param {LikeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const like = await prisma.like.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LikeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Like$postArgs<ExtArgs> = {}>(args?: Subset<T, Like$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    story<T extends Like$storyArgs<ExtArgs> = {}>(args?: Subset<T, Like$storyArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Like$commentArgs<ExtArgs> = {}>(args?: Subset<T, Like$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly postId: FieldRef<"Like", 'String'>
    readonly storyId: FieldRef<"Like", 'String'>
    readonly ownerId: FieldRef<"Like", 'String'>
    readonly commentId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like findRaw
   */
  export type LikeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Like aggregateRaw
   */
  export type LikeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Like.post
   */
  export type Like$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Like.story
   */
  export type Like$storyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
  }

  /**
   * Like.comment
   */
  export type Like$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    storyId: string | null
    content: string | null
    ownerId: string | null
    isReply: boolean | null
    replyToId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    storyId: string | null
    content: string | null
    ownerId: string | null
    isReply: boolean | null
    replyToId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    storyId: number
    content: number
    ownerId: number
    isReply: number
    replyToId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    content?: true
    ownerId?: true
    isReply?: true
    replyToId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    content?: true
    ownerId?: true
    isReply?: true
    replyToId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    storyId?: true
    content?: true
    ownerId?: true
    isReply?: true
    replyToId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string | null
    storyId: string | null
    content: string
    ownerId: string
    isReply: boolean
    replyToId: string | null
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    storyId?: boolean
    content?: boolean
    ownerId?: boolean
    isReply?: boolean
    replyToId?: boolean
    createdAt?: boolean
    post?: boolean | Comment$postArgs<ExtArgs>
    story?: boolean | Comment$storyArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Comment$replyToArgs<ExtArgs>
    likes?: boolean | Comment$likesArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    storyId?: boolean
    content?: boolean
    ownerId?: boolean
    isReply?: boolean
    replyToId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "storyId" | "content" | "ownerId" | "isReply" | "replyToId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | Comment$postArgs<ExtArgs>
    story?: boolean | Comment$storyArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    replyTo?: boolean | Comment$replyToArgs<ExtArgs>
    likes?: boolean | Comment$likesArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs> | null
      story: Prisma.$StoryPayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs>
      replyTo: Prisma.$CommentPayload<ExtArgs> | null
      likes: Prisma.$LikePayload<ExtArgs>[]
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string | null
      storyId: string | null
      content: string
      ownerId: string
      isReply: boolean
      replyToId: string | null
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends Comment$postArgs<ExtArgs> = {}>(args?: Subset<T, Comment$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    story<T extends Comment$storyArgs<ExtArgs> = {}>(args?: Subset<T, Comment$storyArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replyTo<T extends Comment$replyToArgs<ExtArgs> = {}>(args?: Subset<T, Comment$replyToArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    likes<T extends Comment$likesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly storyId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly ownerId: FieldRef<"Comment", 'String'>
    readonly isReply: FieldRef<"Comment", 'Boolean'>
    readonly replyToId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Comment.post
   */
  export type Comment$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Comment.story
   */
  export type Comment$storyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
  }

  /**
   * Comment.replyTo
   */
  export type Comment$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.likes
   */
  export type Comment$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    _all: number
  }


  export type CollectionMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    _count: CollectionCountAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    owners?: boolean | Collection$ownersArgs<ExtArgs>
    posts?: boolean | Collection$postsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>



  export type CollectionSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt", ExtArgs["result"]["collection"]>
  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | Collection$ownersArgs<ExtArgs>
    posts?: boolean | Collection$postsArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      owners: Prisma.$CollectionOwnerPayload<ExtArgs>[]
      posts: Prisma.$CollectionPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * @param {CollectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const collection = await prisma.collection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CollectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Collection.
     * @param {CollectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const collection = await prisma.collection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CollectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends Collection$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Collection$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Collection$postsArgs<ExtArgs> = {}>(args?: Subset<T, Collection$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly title: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection findRaw
   */
  export type CollectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Collection aggregateRaw
   */
  export type CollectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Collection.owners
   */
  export type Collection$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    where?: CollectionOwnerWhereInput
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    cursor?: CollectionOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionOwnerScalarFieldEnum | CollectionOwnerScalarFieldEnum[]
  }

  /**
   * Collection.posts
   */
  export type Collection$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    where?: CollectionPostWhereInput
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    cursor?: CollectionPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionPostScalarFieldEnum | CollectionPostScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model CollectionOwner
   */

  export type AggregateCollectionOwner = {
    _count: CollectionOwnerCountAggregateOutputType | null
    _min: CollectionOwnerMinAggregateOutputType | null
    _max: CollectionOwnerMaxAggregateOutputType | null
  }

  export type CollectionOwnerMinAggregateOutputType = {
    id: string | null
    collectionId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CollectionOwnerMaxAggregateOutputType = {
    id: string | null
    collectionId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type CollectionOwnerCountAggregateOutputType = {
    id: number
    collectionId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type CollectionOwnerMinAggregateInputType = {
    id?: true
    collectionId?: true
    userId?: true
    createdAt?: true
  }

  export type CollectionOwnerMaxAggregateInputType = {
    id?: true
    collectionId?: true
    userId?: true
    createdAt?: true
  }

  export type CollectionOwnerCountAggregateInputType = {
    id?: true
    collectionId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionOwner to aggregate.
     */
    where?: CollectionOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionOwners to fetch.
     */
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionOwners
    **/
    _count?: true | CollectionOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionOwnerMaxAggregateInputType
  }

  export type GetCollectionOwnerAggregateType<T extends CollectionOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionOwner[P]>
      : GetScalarType<T[P], AggregateCollectionOwner[P]>
  }




  export type CollectionOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionOwnerWhereInput
    orderBy?: CollectionOwnerOrderByWithAggregationInput | CollectionOwnerOrderByWithAggregationInput[]
    by: CollectionOwnerScalarFieldEnum[] | CollectionOwnerScalarFieldEnum
    having?: CollectionOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionOwnerCountAggregateInputType | true
    _min?: CollectionOwnerMinAggregateInputType
    _max?: CollectionOwnerMaxAggregateInputType
  }

  export type CollectionOwnerGroupByOutputType = {
    id: string
    collectionId: string
    userId: string
    createdAt: Date
    _count: CollectionOwnerCountAggregateOutputType | null
    _min: CollectionOwnerMinAggregateOutputType | null
    _max: CollectionOwnerMaxAggregateOutputType | null
  }

  type GetCollectionOwnerGroupByPayload<T extends CollectionOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionOwnerGroupByOutputType[P]>
        }
      >
    >


  export type CollectionOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    userId?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionOwner"]>



  export type CollectionOwnerSelectScalar = {
    id?: boolean
    collectionId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type CollectionOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collectionId" | "userId" | "createdAt", ExtArgs["result"]["collectionOwner"]>
  export type CollectionOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CollectionOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionOwner"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collectionId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["collectionOwner"]>
    composites: {}
  }

  type CollectionOwnerGetPayload<S extends boolean | null | undefined | CollectionOwnerDefaultArgs> = $Result.GetResult<Prisma.$CollectionOwnerPayload, S>

  type CollectionOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionOwnerCountAggregateInputType | true
    }

  export interface CollectionOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionOwner'], meta: { name: 'CollectionOwner' } }
    /**
     * Find zero or one CollectionOwner that matches the filter.
     * @param {CollectionOwnerFindUniqueArgs} args - Arguments to find a CollectionOwner
     * @example
     * // Get one CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionOwnerFindUniqueArgs>(args: SelectSubset<T, CollectionOwnerFindUniqueArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionOwnerFindUniqueOrThrowArgs} args - Arguments to find a CollectionOwner
     * @example
     * // Get one CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerFindFirstArgs} args - Arguments to find a CollectionOwner
     * @example
     * // Get one CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionOwnerFindFirstArgs>(args?: SelectSubset<T, CollectionOwnerFindFirstArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerFindFirstOrThrowArgs} args - Arguments to find a CollectionOwner
     * @example
     * // Get one CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionOwners
     * const collectionOwners = await prisma.collectionOwner.findMany()
     * 
     * // Get first 10 CollectionOwners
     * const collectionOwners = await prisma.collectionOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionOwnerWithIdOnly = await prisma.collectionOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionOwnerFindManyArgs>(args?: SelectSubset<T, CollectionOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionOwner.
     * @param {CollectionOwnerCreateArgs} args - Arguments to create a CollectionOwner.
     * @example
     * // Create one CollectionOwner
     * const CollectionOwner = await prisma.collectionOwner.create({
     *   data: {
     *     // ... data to create a CollectionOwner
     *   }
     * })
     * 
     */
    create<T extends CollectionOwnerCreateArgs>(args: SelectSubset<T, CollectionOwnerCreateArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionOwners.
     * @param {CollectionOwnerCreateManyArgs} args - Arguments to create many CollectionOwners.
     * @example
     * // Create many CollectionOwners
     * const collectionOwner = await prisma.collectionOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionOwnerCreateManyArgs>(args?: SelectSubset<T, CollectionOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CollectionOwner.
     * @param {CollectionOwnerDeleteArgs} args - Arguments to delete one CollectionOwner.
     * @example
     * // Delete one CollectionOwner
     * const CollectionOwner = await prisma.collectionOwner.delete({
     *   where: {
     *     // ... filter to delete one CollectionOwner
     *   }
     * })
     * 
     */
    delete<T extends CollectionOwnerDeleteArgs>(args: SelectSubset<T, CollectionOwnerDeleteArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionOwner.
     * @param {CollectionOwnerUpdateArgs} args - Arguments to update one CollectionOwner.
     * @example
     * // Update one CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionOwnerUpdateArgs>(args: SelectSubset<T, CollectionOwnerUpdateArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionOwners.
     * @param {CollectionOwnerDeleteManyArgs} args - Arguments to filter CollectionOwners to delete.
     * @example
     * // Delete a few CollectionOwners
     * const { count } = await prisma.collectionOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionOwnerDeleteManyArgs>(args?: SelectSubset<T, CollectionOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionOwners
     * const collectionOwner = await prisma.collectionOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionOwnerUpdateManyArgs>(args: SelectSubset<T, CollectionOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CollectionOwner.
     * @param {CollectionOwnerUpsertArgs} args - Arguments to update or create a CollectionOwner.
     * @example
     * // Update or create a CollectionOwner
     * const collectionOwner = await prisma.collectionOwner.upsert({
     *   create: {
     *     // ... data to create a CollectionOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionOwner we want to update
     *   }
     * })
     */
    upsert<T extends CollectionOwnerUpsertArgs>(args: SelectSubset<T, CollectionOwnerUpsertArgs<ExtArgs>>): Prisma__CollectionOwnerClient<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionOwners that matches the filter.
     * @param {CollectionOwnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const collectionOwner = await prisma.collectionOwner.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CollectionOwnerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CollectionOwner.
     * @param {CollectionOwnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const collectionOwner = await prisma.collectionOwner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CollectionOwnerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CollectionOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerCountArgs} args - Arguments to filter CollectionOwners to count.
     * @example
     * // Count the number of CollectionOwners
     * const count = await prisma.collectionOwner.count({
     *   where: {
     *     // ... the filter for the CollectionOwners we want to count
     *   }
     * })
    **/
    count<T extends CollectionOwnerCountArgs>(
      args?: Subset<T, CollectionOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionOwnerAggregateArgs>(args: Subset<T, CollectionOwnerAggregateArgs>): Prisma.PrismaPromise<GetCollectionOwnerAggregateType<T>>

    /**
     * Group by CollectionOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionOwnerGroupByArgs} args - Group by arguments.
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
      T extends CollectionOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionOwnerGroupByArgs['orderBy'] }
        : { orderBy?: CollectionOwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionOwner model
   */
  readonly fields: CollectionOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollectionOwner model
   */
  interface CollectionOwnerFieldRefs {
    readonly id: FieldRef<"CollectionOwner", 'String'>
    readonly collectionId: FieldRef<"CollectionOwner", 'String'>
    readonly userId: FieldRef<"CollectionOwner", 'String'>
    readonly createdAt: FieldRef<"CollectionOwner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionOwner findUnique
   */
  export type CollectionOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter, which CollectionOwner to fetch.
     */
    where: CollectionOwnerWhereUniqueInput
  }

  /**
   * CollectionOwner findUniqueOrThrow
   */
  export type CollectionOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter, which CollectionOwner to fetch.
     */
    where: CollectionOwnerWhereUniqueInput
  }

  /**
   * CollectionOwner findFirst
   */
  export type CollectionOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter, which CollectionOwner to fetch.
     */
    where?: CollectionOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionOwners to fetch.
     */
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionOwners.
     */
    cursor?: CollectionOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionOwners.
     */
    distinct?: CollectionOwnerScalarFieldEnum | CollectionOwnerScalarFieldEnum[]
  }

  /**
   * CollectionOwner findFirstOrThrow
   */
  export type CollectionOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter, which CollectionOwner to fetch.
     */
    where?: CollectionOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionOwners to fetch.
     */
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionOwners.
     */
    cursor?: CollectionOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionOwners.
     */
    distinct?: CollectionOwnerScalarFieldEnum | CollectionOwnerScalarFieldEnum[]
  }

  /**
   * CollectionOwner findMany
   */
  export type CollectionOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter, which CollectionOwners to fetch.
     */
    where?: CollectionOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionOwners to fetch.
     */
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionOwners.
     */
    cursor?: CollectionOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionOwners.
     */
    skip?: number
    distinct?: CollectionOwnerScalarFieldEnum | CollectionOwnerScalarFieldEnum[]
  }

  /**
   * CollectionOwner create
   */
  export type CollectionOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionOwner.
     */
    data: XOR<CollectionOwnerCreateInput, CollectionOwnerUncheckedCreateInput>
  }

  /**
   * CollectionOwner createMany
   */
  export type CollectionOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionOwners.
     */
    data: CollectionOwnerCreateManyInput | CollectionOwnerCreateManyInput[]
  }

  /**
   * CollectionOwner update
   */
  export type CollectionOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionOwner.
     */
    data: XOR<CollectionOwnerUpdateInput, CollectionOwnerUncheckedUpdateInput>
    /**
     * Choose, which CollectionOwner to update.
     */
    where: CollectionOwnerWhereUniqueInput
  }

  /**
   * CollectionOwner updateMany
   */
  export type CollectionOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionOwners.
     */
    data: XOR<CollectionOwnerUpdateManyMutationInput, CollectionOwnerUncheckedUpdateManyInput>
    /**
     * Filter which CollectionOwners to update
     */
    where?: CollectionOwnerWhereInput
    /**
     * Limit how many CollectionOwners to update.
     */
    limit?: number
  }

  /**
   * CollectionOwner upsert
   */
  export type CollectionOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionOwner to update in case it exists.
     */
    where: CollectionOwnerWhereUniqueInput
    /**
     * In case the CollectionOwner found by the `where` argument doesn't exist, create a new CollectionOwner with this data.
     */
    create: XOR<CollectionOwnerCreateInput, CollectionOwnerUncheckedCreateInput>
    /**
     * In case the CollectionOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionOwnerUpdateInput, CollectionOwnerUncheckedUpdateInput>
  }

  /**
   * CollectionOwner delete
   */
  export type CollectionOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    /**
     * Filter which CollectionOwner to delete.
     */
    where: CollectionOwnerWhereUniqueInput
  }

  /**
   * CollectionOwner deleteMany
   */
  export type CollectionOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionOwners to delete
     */
    where?: CollectionOwnerWhereInput
    /**
     * Limit how many CollectionOwners to delete.
     */
    limit?: number
  }

  /**
   * CollectionOwner findRaw
   */
  export type CollectionOwnerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CollectionOwner aggregateRaw
   */
  export type CollectionOwnerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CollectionOwner without action
   */
  export type CollectionOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
  }


  /**
   * Model CollectionPost
   */

  export type AggregateCollectionPost = {
    _count: CollectionPostCountAggregateOutputType | null
    _min: CollectionPostMinAggregateOutputType | null
    _max: CollectionPostMaxAggregateOutputType | null
  }

  export type CollectionPostMinAggregateOutputType = {
    id: string | null
    collectionId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type CollectionPostMaxAggregateOutputType = {
    id: string | null
    collectionId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type CollectionPostCountAggregateOutputType = {
    id: number
    collectionId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type CollectionPostMinAggregateInputType = {
    id?: true
    collectionId?: true
    postId?: true
    createdAt?: true
  }

  export type CollectionPostMaxAggregateInputType = {
    id?: true
    collectionId?: true
    postId?: true
    createdAt?: true
  }

  export type CollectionPostCountAggregateInputType = {
    id?: true
    collectionId?: true
    postId?: true
    createdAt?: true
    _all?: true
  }

  export type CollectionPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPost to aggregate.
     */
    where?: CollectionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPosts to fetch.
     */
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CollectionPosts
    **/
    _count?: true | CollectionPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionPostMaxAggregateInputType
  }

  export type GetCollectionPostAggregateType<T extends CollectionPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectionPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectionPost[P]>
      : GetScalarType<T[P], AggregateCollectionPost[P]>
  }




  export type CollectionPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionPostWhereInput
    orderBy?: CollectionPostOrderByWithAggregationInput | CollectionPostOrderByWithAggregationInput[]
    by: CollectionPostScalarFieldEnum[] | CollectionPostScalarFieldEnum
    having?: CollectionPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionPostCountAggregateInputType | true
    _min?: CollectionPostMinAggregateInputType
    _max?: CollectionPostMaxAggregateInputType
  }

  export type CollectionPostGroupByOutputType = {
    id: string
    collectionId: string
    postId: string
    createdAt: Date
    _count: CollectionPostCountAggregateOutputType | null
    _min: CollectionPostMinAggregateOutputType | null
    _max: CollectionPostMaxAggregateOutputType | null
  }

  type GetCollectionPostGroupByPayload<T extends CollectionPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionPostGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionPostGroupByOutputType[P]>
        }
      >
    >


  export type CollectionPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    collectionId?: boolean
    postId?: boolean
    createdAt?: boolean
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collectionPost"]>



  export type CollectionPostSelectScalar = {
    id?: boolean
    collectionId?: boolean
    postId?: boolean
    createdAt?: boolean
  }

  export type CollectionPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "collectionId" | "postId" | "createdAt", ExtArgs["result"]["collectionPost"]>
  export type CollectionPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CollectionPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CollectionPost"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      collectionId: string
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["collectionPost"]>
    composites: {}
  }

  type CollectionPostGetPayload<S extends boolean | null | undefined | CollectionPostDefaultArgs> = $Result.GetResult<Prisma.$CollectionPostPayload, S>

  type CollectionPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionPostCountAggregateInputType | true
    }

  export interface CollectionPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CollectionPost'], meta: { name: 'CollectionPost' } }
    /**
     * Find zero or one CollectionPost that matches the filter.
     * @param {CollectionPostFindUniqueArgs} args - Arguments to find a CollectionPost
     * @example
     * // Get one CollectionPost
     * const collectionPost = await prisma.collectionPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionPostFindUniqueArgs>(args: SelectSubset<T, CollectionPostFindUniqueArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CollectionPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionPostFindUniqueOrThrowArgs} args - Arguments to find a CollectionPost
     * @example
     * // Get one CollectionPost
     * const collectionPost = await prisma.collectionPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostFindFirstArgs} args - Arguments to find a CollectionPost
     * @example
     * // Get one CollectionPost
     * const collectionPost = await prisma.collectionPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionPostFindFirstArgs>(args?: SelectSubset<T, CollectionPostFindFirstArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CollectionPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostFindFirstOrThrowArgs} args - Arguments to find a CollectionPost
     * @example
     * // Get one CollectionPost
     * const collectionPost = await prisma.collectionPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CollectionPosts
     * const collectionPosts = await prisma.collectionPost.findMany()
     * 
     * // Get first 10 CollectionPosts
     * const collectionPosts = await prisma.collectionPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionPostWithIdOnly = await prisma.collectionPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionPostFindManyArgs>(args?: SelectSubset<T, CollectionPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CollectionPost.
     * @param {CollectionPostCreateArgs} args - Arguments to create a CollectionPost.
     * @example
     * // Create one CollectionPost
     * const CollectionPost = await prisma.collectionPost.create({
     *   data: {
     *     // ... data to create a CollectionPost
     *   }
     * })
     * 
     */
    create<T extends CollectionPostCreateArgs>(args: SelectSubset<T, CollectionPostCreateArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CollectionPosts.
     * @param {CollectionPostCreateManyArgs} args - Arguments to create many CollectionPosts.
     * @example
     * // Create many CollectionPosts
     * const collectionPost = await prisma.collectionPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionPostCreateManyArgs>(args?: SelectSubset<T, CollectionPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CollectionPost.
     * @param {CollectionPostDeleteArgs} args - Arguments to delete one CollectionPost.
     * @example
     * // Delete one CollectionPost
     * const CollectionPost = await prisma.collectionPost.delete({
     *   where: {
     *     // ... filter to delete one CollectionPost
     *   }
     * })
     * 
     */
    delete<T extends CollectionPostDeleteArgs>(args: SelectSubset<T, CollectionPostDeleteArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CollectionPost.
     * @param {CollectionPostUpdateArgs} args - Arguments to update one CollectionPost.
     * @example
     * // Update one CollectionPost
     * const collectionPost = await prisma.collectionPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionPostUpdateArgs>(args: SelectSubset<T, CollectionPostUpdateArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CollectionPosts.
     * @param {CollectionPostDeleteManyArgs} args - Arguments to filter CollectionPosts to delete.
     * @example
     * // Delete a few CollectionPosts
     * const { count } = await prisma.collectionPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionPostDeleteManyArgs>(args?: SelectSubset<T, CollectionPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CollectionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CollectionPosts
     * const collectionPost = await prisma.collectionPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionPostUpdateManyArgs>(args: SelectSubset<T, CollectionPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CollectionPost.
     * @param {CollectionPostUpsertArgs} args - Arguments to update or create a CollectionPost.
     * @example
     * // Update or create a CollectionPost
     * const collectionPost = await prisma.collectionPost.upsert({
     *   create: {
     *     // ... data to create a CollectionPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionPost we want to update
     *   }
     * })
     */
    upsert<T extends CollectionPostUpsertArgs>(args: SelectSubset<T, CollectionPostUpsertArgs<ExtArgs>>): Prisma__CollectionPostClient<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CollectionPosts that matches the filter.
     * @param {CollectionPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const collectionPost = await prisma.collectionPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CollectionPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CollectionPost.
     * @param {CollectionPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const collectionPost = await prisma.collectionPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CollectionPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CollectionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostCountArgs} args - Arguments to filter CollectionPosts to count.
     * @example
     * // Count the number of CollectionPosts
     * const count = await prisma.collectionPost.count({
     *   where: {
     *     // ... the filter for the CollectionPosts we want to count
     *   }
     * })
    **/
    count<T extends CollectionPostCountArgs>(
      args?: Subset<T, CollectionPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CollectionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionPostAggregateArgs>(args: Subset<T, CollectionPostAggregateArgs>): Prisma.PrismaPromise<GetCollectionPostAggregateType<T>>

    /**
     * Group by CollectionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionPostGroupByArgs} args - Group by arguments.
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
      T extends CollectionPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionPostGroupByArgs['orderBy'] }
        : { orderBy?: CollectionPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollectionPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CollectionPost model
   */
  readonly fields: CollectionPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CollectionPost model
   */
  interface CollectionPostFieldRefs {
    readonly id: FieldRef<"CollectionPost", 'String'>
    readonly collectionId: FieldRef<"CollectionPost", 'String'>
    readonly postId: FieldRef<"CollectionPost", 'String'>
    readonly createdAt: FieldRef<"CollectionPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CollectionPost findUnique
   */
  export type CollectionPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPost to fetch.
     */
    where: CollectionPostWhereUniqueInput
  }

  /**
   * CollectionPost findUniqueOrThrow
   */
  export type CollectionPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPost to fetch.
     */
    where: CollectionPostWhereUniqueInput
  }

  /**
   * CollectionPost findFirst
   */
  export type CollectionPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPost to fetch.
     */
    where?: CollectionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPosts to fetch.
     */
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPosts.
     */
    cursor?: CollectionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPosts.
     */
    distinct?: CollectionPostScalarFieldEnum | CollectionPostScalarFieldEnum[]
  }

  /**
   * CollectionPost findFirstOrThrow
   */
  export type CollectionPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPost to fetch.
     */
    where?: CollectionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPosts to fetch.
     */
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CollectionPosts.
     */
    cursor?: CollectionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CollectionPosts.
     */
    distinct?: CollectionPostScalarFieldEnum | CollectionPostScalarFieldEnum[]
  }

  /**
   * CollectionPost findMany
   */
  export type CollectionPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter, which CollectionPosts to fetch.
     */
    where?: CollectionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CollectionPosts to fetch.
     */
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CollectionPosts.
     */
    cursor?: CollectionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CollectionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CollectionPosts.
     */
    skip?: number
    distinct?: CollectionPostScalarFieldEnum | CollectionPostScalarFieldEnum[]
  }

  /**
   * CollectionPost create
   */
  export type CollectionPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CollectionPost.
     */
    data: XOR<CollectionPostCreateInput, CollectionPostUncheckedCreateInput>
  }

  /**
   * CollectionPost createMany
   */
  export type CollectionPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CollectionPosts.
     */
    data: CollectionPostCreateManyInput | CollectionPostCreateManyInput[]
  }

  /**
   * CollectionPost update
   */
  export type CollectionPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CollectionPost.
     */
    data: XOR<CollectionPostUpdateInput, CollectionPostUncheckedUpdateInput>
    /**
     * Choose, which CollectionPost to update.
     */
    where: CollectionPostWhereUniqueInput
  }

  /**
   * CollectionPost updateMany
   */
  export type CollectionPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CollectionPosts.
     */
    data: XOR<CollectionPostUpdateManyMutationInput, CollectionPostUncheckedUpdateManyInput>
    /**
     * Filter which CollectionPosts to update
     */
    where?: CollectionPostWhereInput
    /**
     * Limit how many CollectionPosts to update.
     */
    limit?: number
  }

  /**
   * CollectionPost upsert
   */
  export type CollectionPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CollectionPost to update in case it exists.
     */
    where: CollectionPostWhereUniqueInput
    /**
     * In case the CollectionPost found by the `where` argument doesn't exist, create a new CollectionPost with this data.
     */
    create: XOR<CollectionPostCreateInput, CollectionPostUncheckedCreateInput>
    /**
     * In case the CollectionPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionPostUpdateInput, CollectionPostUncheckedUpdateInput>
  }

  /**
   * CollectionPost delete
   */
  export type CollectionPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    /**
     * Filter which CollectionPost to delete.
     */
    where: CollectionPostWhereUniqueInput
  }

  /**
   * CollectionPost deleteMany
   */
  export type CollectionPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CollectionPosts to delete
     */
    where?: CollectionPostWhereInput
    /**
     * Limit how many CollectionPosts to delete.
     */
    limit?: number
  }

  /**
   * CollectionPost findRaw
   */
  export type CollectionPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CollectionPost aggregateRaw
   */
  export type CollectionPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CollectionPost without action
   */
  export type CollectionPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    referenceUserId: string | null
    createdAt: Date | null
    postId: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    referenceUserId: string | null
    createdAt: Date | null
    postId: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    referenceUserId: number
    createdAt: number
    postId: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    referenceUserId?: true
    createdAt?: true
    postId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    referenceUserId?: true
    createdAt?: true
    postId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    referenceUserId?: true
    createdAt?: true
    postId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    referenceUserId: string
    createdAt: Date
    postId: string | null
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    postId?: boolean
    referenceUser?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Tag$postArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    referenceUserId?: boolean
    createdAt?: boolean
    postId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceUserId" | "createdAt" | "postId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referenceUser?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Tag$postArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      referenceUser: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceUserId: string
      createdAt: Date
      postId: string | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * @param {TagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tag = await prisma.tag.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TagFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tag.
     * @param {TagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tag = await prisma.tag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TagAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referenceUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Tag$postArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly referenceUserId: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly postId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag findRaw
   */
  export type TagFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Tag aggregateRaw
   */
  export type TagAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Tag.post
   */
  export type Tag$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Highlight
   */

  export type AggregateHighlight = {
    _count: HighlightCountAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  export type HighlightMinAggregateOutputType = {
    id: string | null
    coverPhoto: string | null
    title: string | null
    createdAt: Date | null
  }

  export type HighlightMaxAggregateOutputType = {
    id: string | null
    coverPhoto: string | null
    title: string | null
    createdAt: Date | null
  }

  export type HighlightCountAggregateOutputType = {
    id: number
    coverPhoto: number
    title: number
    createdAt: number
    _all: number
  }


  export type HighlightMinAggregateInputType = {
    id?: true
    coverPhoto?: true
    title?: true
    createdAt?: true
  }

  export type HighlightMaxAggregateInputType = {
    id?: true
    coverPhoto?: true
    title?: true
    createdAt?: true
  }

  export type HighlightCountAggregateInputType = {
    id?: true
    coverPhoto?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type HighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlight to aggregate.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Highlights
    **/
    _count?: true | HighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightMaxAggregateInputType
  }

  export type GetHighlightAggregateType<T extends HighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlight[P]>
      : GetScalarType<T[P], AggregateHighlight[P]>
  }




  export type HighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightWhereInput
    orderBy?: HighlightOrderByWithAggregationInput | HighlightOrderByWithAggregationInput[]
    by: HighlightScalarFieldEnum[] | HighlightScalarFieldEnum
    having?: HighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightCountAggregateInputType | true
    _min?: HighlightMinAggregateInputType
    _max?: HighlightMaxAggregateInputType
  }

  export type HighlightGroupByOutputType = {
    id: string
    coverPhoto: string | null
    title: string
    createdAt: Date
    _count: HighlightCountAggregateOutputType | null
    _min: HighlightMinAggregateOutputType | null
    _max: HighlightMaxAggregateOutputType | null
  }

  type GetHighlightGroupByPayload<T extends HighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coverPhoto?: boolean
    title?: boolean
    createdAt?: boolean
    owners?: boolean | Highlight$ownersArgs<ExtArgs>
    stories?: boolean | Highlight$storiesArgs<ExtArgs>
    _count?: boolean | HighlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlight"]>



  export type HighlightSelectScalar = {
    id?: boolean
    coverPhoto?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type HighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coverPhoto" | "title" | "createdAt", ExtArgs["result"]["highlight"]>
  export type HighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | Highlight$ownersArgs<ExtArgs>
    stories?: boolean | Highlight$storiesArgs<ExtArgs>
    _count?: boolean | HighlightCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Highlight"
    objects: {
      owners: Prisma.$HighlightOwnerPayload<ExtArgs>[]
      stories: Prisma.$HighlightStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coverPhoto: string | null
      title: string
      createdAt: Date
    }, ExtArgs["result"]["highlight"]>
    composites: {}
  }

  type HighlightGetPayload<S extends boolean | null | undefined | HighlightDefaultArgs> = $Result.GetResult<Prisma.$HighlightPayload, S>

  type HighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightCountAggregateInputType | true
    }

  export interface HighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Highlight'], meta: { name: 'Highlight' } }
    /**
     * Find zero or one Highlight that matches the filter.
     * @param {HighlightFindUniqueArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightFindUniqueArgs>(args: SelectSubset<T, HighlightFindUniqueArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Highlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightFindUniqueOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightFindFirstArgs>(args?: SelectSubset<T, HighlightFindFirstArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Highlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindFirstOrThrowArgs} args - Arguments to find a Highlight
     * @example
     * // Get one Highlight
     * const highlight = await prisma.highlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Highlights
     * const highlights = await prisma.highlight.findMany()
     * 
     * // Get first 10 Highlights
     * const highlights = await prisma.highlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightWithIdOnly = await prisma.highlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightFindManyArgs>(args?: SelectSubset<T, HighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Highlight.
     * @param {HighlightCreateArgs} args - Arguments to create a Highlight.
     * @example
     * // Create one Highlight
     * const Highlight = await prisma.highlight.create({
     *   data: {
     *     // ... data to create a Highlight
     *   }
     * })
     * 
     */
    create<T extends HighlightCreateArgs>(args: SelectSubset<T, HighlightCreateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Highlights.
     * @param {HighlightCreateManyArgs} args - Arguments to create many Highlights.
     * @example
     * // Create many Highlights
     * const highlight = await prisma.highlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightCreateManyArgs>(args?: SelectSubset<T, HighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Highlight.
     * @param {HighlightDeleteArgs} args - Arguments to delete one Highlight.
     * @example
     * // Delete one Highlight
     * const Highlight = await prisma.highlight.delete({
     *   where: {
     *     // ... filter to delete one Highlight
     *   }
     * })
     * 
     */
    delete<T extends HighlightDeleteArgs>(args: SelectSubset<T, HighlightDeleteArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Highlight.
     * @param {HighlightUpdateArgs} args - Arguments to update one Highlight.
     * @example
     * // Update one Highlight
     * const highlight = await prisma.highlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightUpdateArgs>(args: SelectSubset<T, HighlightUpdateArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Highlights.
     * @param {HighlightDeleteManyArgs} args - Arguments to filter Highlights to delete.
     * @example
     * // Delete a few Highlights
     * const { count } = await prisma.highlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightDeleteManyArgs>(args?: SelectSubset<T, HighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Highlights
     * const highlight = await prisma.highlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightUpdateManyArgs>(args: SelectSubset<T, HighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Highlight.
     * @param {HighlightUpsertArgs} args - Arguments to update or create a Highlight.
     * @example
     * // Update or create a Highlight
     * const highlight = await prisma.highlight.upsert({
     *   create: {
     *     // ... data to create a Highlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Highlight we want to update
     *   }
     * })
     */
    upsert<T extends HighlightUpsertArgs>(args: SelectSubset<T, HighlightUpsertArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Highlights that matches the filter.
     * @param {HighlightFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const highlight = await prisma.highlight.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HighlightFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Highlight.
     * @param {HighlightAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const highlight = await prisma.highlight.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HighlightAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Highlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightCountArgs} args - Arguments to filter Highlights to count.
     * @example
     * // Count the number of Highlights
     * const count = await prisma.highlight.count({
     *   where: {
     *     // ... the filter for the Highlights we want to count
     *   }
     * })
    **/
    count<T extends HighlightCountArgs>(
      args?: Subset<T, HighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightAggregateArgs>(args: Subset<T, HighlightAggregateArgs>): Prisma.PrismaPromise<GetHighlightAggregateType<T>>

    /**
     * Group by Highlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightGroupByArgs} args - Group by arguments.
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
      T extends HighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightGroupByArgs['orderBy'] }
        : { orderBy?: HighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Highlight model
   */
  readonly fields: HighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Highlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends Highlight$ownersArgs<ExtArgs> = {}>(args?: Subset<T, Highlight$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends Highlight$storiesArgs<ExtArgs> = {}>(args?: Subset<T, Highlight$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Highlight model
   */
  interface HighlightFieldRefs {
    readonly id: FieldRef<"Highlight", 'String'>
    readonly coverPhoto: FieldRef<"Highlight", 'String'>
    readonly title: FieldRef<"Highlight", 'String'>
    readonly createdAt: FieldRef<"Highlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Highlight findUnique
   */
  export type HighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findUniqueOrThrow
   */
  export type HighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight findFirst
   */
  export type HighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findFirstOrThrow
   */
  export type HighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlight to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Highlights.
     */
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight findMany
   */
  export type HighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter, which Highlights to fetch.
     */
    where?: HighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Highlights to fetch.
     */
    orderBy?: HighlightOrderByWithRelationInput | HighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Highlights.
     */
    cursor?: HighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Highlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Highlights.
     */
    skip?: number
    distinct?: HighlightScalarFieldEnum | HighlightScalarFieldEnum[]
  }

  /**
   * Highlight create
   */
  export type HighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Highlight.
     */
    data: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
  }

  /**
   * Highlight createMany
   */
  export type HighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Highlights.
     */
    data: HighlightCreateManyInput | HighlightCreateManyInput[]
  }

  /**
   * Highlight update
   */
  export type HighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Highlight.
     */
    data: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
    /**
     * Choose, which Highlight to update.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight updateMany
   */
  export type HighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Highlights.
     */
    data: XOR<HighlightUpdateManyMutationInput, HighlightUncheckedUpdateManyInput>
    /**
     * Filter which Highlights to update
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to update.
     */
    limit?: number
  }

  /**
   * Highlight upsert
   */
  export type HighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Highlight to update in case it exists.
     */
    where: HighlightWhereUniqueInput
    /**
     * In case the Highlight found by the `where` argument doesn't exist, create a new Highlight with this data.
     */
    create: XOR<HighlightCreateInput, HighlightUncheckedCreateInput>
    /**
     * In case the Highlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightUpdateInput, HighlightUncheckedUpdateInput>
  }

  /**
   * Highlight delete
   */
  export type HighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
    /**
     * Filter which Highlight to delete.
     */
    where: HighlightWhereUniqueInput
  }

  /**
   * Highlight deleteMany
   */
  export type HighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Highlights to delete
     */
    where?: HighlightWhereInput
    /**
     * Limit how many Highlights to delete.
     */
    limit?: number
  }

  /**
   * Highlight findRaw
   */
  export type HighlightFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Highlight aggregateRaw
   */
  export type HighlightAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Highlight.owners
   */
  export type Highlight$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    where?: HighlightOwnerWhereInput
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    cursor?: HighlightOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightOwnerScalarFieldEnum | HighlightOwnerScalarFieldEnum[]
  }

  /**
   * Highlight.stories
   */
  export type Highlight$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    where?: HighlightStoryWhereInput
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    cursor?: HighlightStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightStoryScalarFieldEnum | HighlightStoryScalarFieldEnum[]
  }

  /**
   * Highlight without action
   */
  export type HighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Highlight
     */
    select?: HighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Highlight
     */
    omit?: HighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightInclude<ExtArgs> | null
  }


  /**
   * Model HighlightOwner
   */

  export type AggregateHighlightOwner = {
    _count: HighlightOwnerCountAggregateOutputType | null
    _min: HighlightOwnerMinAggregateOutputType | null
    _max: HighlightOwnerMaxAggregateOutputType | null
  }

  export type HighlightOwnerMinAggregateOutputType = {
    id: string | null
    highlightId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type HighlightOwnerMaxAggregateOutputType = {
    id: string | null
    highlightId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type HighlightOwnerCountAggregateOutputType = {
    id: number
    highlightId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type HighlightOwnerMinAggregateInputType = {
    id?: true
    highlightId?: true
    userId?: true
    createdAt?: true
  }

  export type HighlightOwnerMaxAggregateInputType = {
    id?: true
    highlightId?: true
    userId?: true
    createdAt?: true
  }

  export type HighlightOwnerCountAggregateInputType = {
    id?: true
    highlightId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type HighlightOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightOwner to aggregate.
     */
    where?: HighlightOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightOwners to fetch.
     */
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HighlightOwners
    **/
    _count?: true | HighlightOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightOwnerMaxAggregateInputType
  }

  export type GetHighlightOwnerAggregateType<T extends HighlightOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlightOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlightOwner[P]>
      : GetScalarType<T[P], AggregateHighlightOwner[P]>
  }




  export type HighlightOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightOwnerWhereInput
    orderBy?: HighlightOwnerOrderByWithAggregationInput | HighlightOwnerOrderByWithAggregationInput[]
    by: HighlightOwnerScalarFieldEnum[] | HighlightOwnerScalarFieldEnum
    having?: HighlightOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightOwnerCountAggregateInputType | true
    _min?: HighlightOwnerMinAggregateInputType
    _max?: HighlightOwnerMaxAggregateInputType
  }

  export type HighlightOwnerGroupByOutputType = {
    id: string
    highlightId: string
    userId: string
    createdAt: Date
    _count: HighlightOwnerCountAggregateOutputType | null
    _min: HighlightOwnerMinAggregateOutputType | null
    _max: HighlightOwnerMaxAggregateOutputType | null
  }

  type GetHighlightOwnerGroupByPayload<T extends HighlightOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightOwnerGroupByOutputType[P]>
        }
      >
    >


  export type HighlightOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    highlightId?: boolean
    userId?: boolean
    createdAt?: boolean
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlightOwner"]>



  export type HighlightOwnerSelectScalar = {
    id?: boolean
    highlightId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type HighlightOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "highlightId" | "userId" | "createdAt", ExtArgs["result"]["highlightOwner"]>
  export type HighlightOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HighlightOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HighlightOwner"
    objects: {
      highlight: Prisma.$HighlightPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      highlightId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["highlightOwner"]>
    composites: {}
  }

  type HighlightOwnerGetPayload<S extends boolean | null | undefined | HighlightOwnerDefaultArgs> = $Result.GetResult<Prisma.$HighlightOwnerPayload, S>

  type HighlightOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightOwnerCountAggregateInputType | true
    }

  export interface HighlightOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HighlightOwner'], meta: { name: 'HighlightOwner' } }
    /**
     * Find zero or one HighlightOwner that matches the filter.
     * @param {HighlightOwnerFindUniqueArgs} args - Arguments to find a HighlightOwner
     * @example
     * // Get one HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightOwnerFindUniqueArgs>(args: SelectSubset<T, HighlightOwnerFindUniqueArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HighlightOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightOwnerFindUniqueOrThrowArgs} args - Arguments to find a HighlightOwner
     * @example
     * // Get one HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerFindFirstArgs} args - Arguments to find a HighlightOwner
     * @example
     * // Get one HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightOwnerFindFirstArgs>(args?: SelectSubset<T, HighlightOwnerFindFirstArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerFindFirstOrThrowArgs} args - Arguments to find a HighlightOwner
     * @example
     * // Get one HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighlightOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HighlightOwners
     * const highlightOwners = await prisma.highlightOwner.findMany()
     * 
     * // Get first 10 HighlightOwners
     * const highlightOwners = await prisma.highlightOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightOwnerWithIdOnly = await prisma.highlightOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightOwnerFindManyArgs>(args?: SelectSubset<T, HighlightOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HighlightOwner.
     * @param {HighlightOwnerCreateArgs} args - Arguments to create a HighlightOwner.
     * @example
     * // Create one HighlightOwner
     * const HighlightOwner = await prisma.highlightOwner.create({
     *   data: {
     *     // ... data to create a HighlightOwner
     *   }
     * })
     * 
     */
    create<T extends HighlightOwnerCreateArgs>(args: SelectSubset<T, HighlightOwnerCreateArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HighlightOwners.
     * @param {HighlightOwnerCreateManyArgs} args - Arguments to create many HighlightOwners.
     * @example
     * // Create many HighlightOwners
     * const highlightOwner = await prisma.highlightOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightOwnerCreateManyArgs>(args?: SelectSubset<T, HighlightOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HighlightOwner.
     * @param {HighlightOwnerDeleteArgs} args - Arguments to delete one HighlightOwner.
     * @example
     * // Delete one HighlightOwner
     * const HighlightOwner = await prisma.highlightOwner.delete({
     *   where: {
     *     // ... filter to delete one HighlightOwner
     *   }
     * })
     * 
     */
    delete<T extends HighlightOwnerDeleteArgs>(args: SelectSubset<T, HighlightOwnerDeleteArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HighlightOwner.
     * @param {HighlightOwnerUpdateArgs} args - Arguments to update one HighlightOwner.
     * @example
     * // Update one HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightOwnerUpdateArgs>(args: SelectSubset<T, HighlightOwnerUpdateArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HighlightOwners.
     * @param {HighlightOwnerDeleteManyArgs} args - Arguments to filter HighlightOwners to delete.
     * @example
     * // Delete a few HighlightOwners
     * const { count } = await prisma.highlightOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightOwnerDeleteManyArgs>(args?: SelectSubset<T, HighlightOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighlightOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HighlightOwners
     * const highlightOwner = await prisma.highlightOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightOwnerUpdateManyArgs>(args: SelectSubset<T, HighlightOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HighlightOwner.
     * @param {HighlightOwnerUpsertArgs} args - Arguments to update or create a HighlightOwner.
     * @example
     * // Update or create a HighlightOwner
     * const highlightOwner = await prisma.highlightOwner.upsert({
     *   create: {
     *     // ... data to create a HighlightOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HighlightOwner we want to update
     *   }
     * })
     */
    upsert<T extends HighlightOwnerUpsertArgs>(args: SelectSubset<T, HighlightOwnerUpsertArgs<ExtArgs>>): Prisma__HighlightOwnerClient<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighlightOwners that matches the filter.
     * @param {HighlightOwnerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const highlightOwner = await prisma.highlightOwner.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HighlightOwnerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HighlightOwner.
     * @param {HighlightOwnerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const highlightOwner = await prisma.highlightOwner.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HighlightOwnerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HighlightOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerCountArgs} args - Arguments to filter HighlightOwners to count.
     * @example
     * // Count the number of HighlightOwners
     * const count = await prisma.highlightOwner.count({
     *   where: {
     *     // ... the filter for the HighlightOwners we want to count
     *   }
     * })
    **/
    count<T extends HighlightOwnerCountArgs>(
      args?: Subset<T, HighlightOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HighlightOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightOwnerAggregateArgs>(args: Subset<T, HighlightOwnerAggregateArgs>): Prisma.PrismaPromise<GetHighlightOwnerAggregateType<T>>

    /**
     * Group by HighlightOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightOwnerGroupByArgs} args - Group by arguments.
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
      T extends HighlightOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightOwnerGroupByArgs['orderBy'] }
        : { orderBy?: HighlightOwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HighlightOwner model
   */
  readonly fields: HighlightOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HighlightOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    highlight<T extends HighlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HighlightDefaultArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HighlightOwner model
   */
  interface HighlightOwnerFieldRefs {
    readonly id: FieldRef<"HighlightOwner", 'String'>
    readonly highlightId: FieldRef<"HighlightOwner", 'String'>
    readonly userId: FieldRef<"HighlightOwner", 'String'>
    readonly createdAt: FieldRef<"HighlightOwner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HighlightOwner findUnique
   */
  export type HighlightOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter, which HighlightOwner to fetch.
     */
    where: HighlightOwnerWhereUniqueInput
  }

  /**
   * HighlightOwner findUniqueOrThrow
   */
  export type HighlightOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter, which HighlightOwner to fetch.
     */
    where: HighlightOwnerWhereUniqueInput
  }

  /**
   * HighlightOwner findFirst
   */
  export type HighlightOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter, which HighlightOwner to fetch.
     */
    where?: HighlightOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightOwners to fetch.
     */
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightOwners.
     */
    cursor?: HighlightOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightOwners.
     */
    distinct?: HighlightOwnerScalarFieldEnum | HighlightOwnerScalarFieldEnum[]
  }

  /**
   * HighlightOwner findFirstOrThrow
   */
  export type HighlightOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter, which HighlightOwner to fetch.
     */
    where?: HighlightOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightOwners to fetch.
     */
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightOwners.
     */
    cursor?: HighlightOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightOwners.
     */
    distinct?: HighlightOwnerScalarFieldEnum | HighlightOwnerScalarFieldEnum[]
  }

  /**
   * HighlightOwner findMany
   */
  export type HighlightOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter, which HighlightOwners to fetch.
     */
    where?: HighlightOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightOwners to fetch.
     */
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HighlightOwners.
     */
    cursor?: HighlightOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightOwners.
     */
    skip?: number
    distinct?: HighlightOwnerScalarFieldEnum | HighlightOwnerScalarFieldEnum[]
  }

  /**
   * HighlightOwner create
   */
  export type HighlightOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a HighlightOwner.
     */
    data: XOR<HighlightOwnerCreateInput, HighlightOwnerUncheckedCreateInput>
  }

  /**
   * HighlightOwner createMany
   */
  export type HighlightOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HighlightOwners.
     */
    data: HighlightOwnerCreateManyInput | HighlightOwnerCreateManyInput[]
  }

  /**
   * HighlightOwner update
   */
  export type HighlightOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a HighlightOwner.
     */
    data: XOR<HighlightOwnerUpdateInput, HighlightOwnerUncheckedUpdateInput>
    /**
     * Choose, which HighlightOwner to update.
     */
    where: HighlightOwnerWhereUniqueInput
  }

  /**
   * HighlightOwner updateMany
   */
  export type HighlightOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HighlightOwners.
     */
    data: XOR<HighlightOwnerUpdateManyMutationInput, HighlightOwnerUncheckedUpdateManyInput>
    /**
     * Filter which HighlightOwners to update
     */
    where?: HighlightOwnerWhereInput
    /**
     * Limit how many HighlightOwners to update.
     */
    limit?: number
  }

  /**
   * HighlightOwner upsert
   */
  export type HighlightOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the HighlightOwner to update in case it exists.
     */
    where: HighlightOwnerWhereUniqueInput
    /**
     * In case the HighlightOwner found by the `where` argument doesn't exist, create a new HighlightOwner with this data.
     */
    create: XOR<HighlightOwnerCreateInput, HighlightOwnerUncheckedCreateInput>
    /**
     * In case the HighlightOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightOwnerUpdateInput, HighlightOwnerUncheckedUpdateInput>
  }

  /**
   * HighlightOwner delete
   */
  export type HighlightOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    /**
     * Filter which HighlightOwner to delete.
     */
    where: HighlightOwnerWhereUniqueInput
  }

  /**
   * HighlightOwner deleteMany
   */
  export type HighlightOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightOwners to delete
     */
    where?: HighlightOwnerWhereInput
    /**
     * Limit how many HighlightOwners to delete.
     */
    limit?: number
  }

  /**
   * HighlightOwner findRaw
   */
  export type HighlightOwnerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HighlightOwner aggregateRaw
   */
  export type HighlightOwnerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HighlightOwner without action
   */
  export type HighlightOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
  }


  /**
   * Model HighlightStory
   */

  export type AggregateHighlightStory = {
    _count: HighlightStoryCountAggregateOutputType | null
    _min: HighlightStoryMinAggregateOutputType | null
    _max: HighlightStoryMaxAggregateOutputType | null
  }

  export type HighlightStoryMinAggregateOutputType = {
    id: string | null
    highlightId: string | null
    storyId: string | null
    createdAt: Date | null
  }

  export type HighlightStoryMaxAggregateOutputType = {
    id: string | null
    highlightId: string | null
    storyId: string | null
    createdAt: Date | null
  }

  export type HighlightStoryCountAggregateOutputType = {
    id: number
    highlightId: number
    storyId: number
    createdAt: number
    _all: number
  }


  export type HighlightStoryMinAggregateInputType = {
    id?: true
    highlightId?: true
    storyId?: true
    createdAt?: true
  }

  export type HighlightStoryMaxAggregateInputType = {
    id?: true
    highlightId?: true
    storyId?: true
    createdAt?: true
  }

  export type HighlightStoryCountAggregateInputType = {
    id?: true
    highlightId?: true
    storyId?: true
    createdAt?: true
    _all?: true
  }

  export type HighlightStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightStory to aggregate.
     */
    where?: HighlightStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightStories to fetch.
     */
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HighlightStories
    **/
    _count?: true | HighlightStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightStoryMaxAggregateInputType
  }

  export type GetHighlightStoryAggregateType<T extends HighlightStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlightStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlightStory[P]>
      : GetScalarType<T[P], AggregateHighlightStory[P]>
  }




  export type HighlightStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HighlightStoryWhereInput
    orderBy?: HighlightStoryOrderByWithAggregationInput | HighlightStoryOrderByWithAggregationInput[]
    by: HighlightStoryScalarFieldEnum[] | HighlightStoryScalarFieldEnum
    having?: HighlightStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightStoryCountAggregateInputType | true
    _min?: HighlightStoryMinAggregateInputType
    _max?: HighlightStoryMaxAggregateInputType
  }

  export type HighlightStoryGroupByOutputType = {
    id: string
    highlightId: string
    storyId: string
    createdAt: Date
    _count: HighlightStoryCountAggregateOutputType | null
    _min: HighlightStoryMinAggregateOutputType | null
    _max: HighlightStoryMaxAggregateOutputType | null
  }

  type GetHighlightStoryGroupByPayload<T extends HighlightStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HighlightStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightStoryGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightStoryGroupByOutputType[P]>
        }
      >
    >


  export type HighlightStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    highlightId?: boolean
    storyId?: boolean
    createdAt?: boolean
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["highlightStory"]>



  export type HighlightStorySelectScalar = {
    id?: boolean
    highlightId?: boolean
    storyId?: boolean
    createdAt?: boolean
  }

  export type HighlightStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "highlightId" | "storyId" | "createdAt", ExtArgs["result"]["highlightStory"]>
  export type HighlightStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    highlight?: boolean | HighlightDefaultArgs<ExtArgs>
    story?: boolean | StoryDefaultArgs<ExtArgs>
  }

  export type $HighlightStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HighlightStory"
    objects: {
      highlight: Prisma.$HighlightPayload<ExtArgs>
      story: Prisma.$StoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      highlightId: string
      storyId: string
      createdAt: Date
    }, ExtArgs["result"]["highlightStory"]>
    composites: {}
  }

  type HighlightStoryGetPayload<S extends boolean | null | undefined | HighlightStoryDefaultArgs> = $Result.GetResult<Prisma.$HighlightStoryPayload, S>

  type HighlightStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HighlightStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HighlightStoryCountAggregateInputType | true
    }

  export interface HighlightStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HighlightStory'], meta: { name: 'HighlightStory' } }
    /**
     * Find zero or one HighlightStory that matches the filter.
     * @param {HighlightStoryFindUniqueArgs} args - Arguments to find a HighlightStory
     * @example
     * // Get one HighlightStory
     * const highlightStory = await prisma.highlightStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HighlightStoryFindUniqueArgs>(args: SelectSubset<T, HighlightStoryFindUniqueArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HighlightStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HighlightStoryFindUniqueOrThrowArgs} args - Arguments to find a HighlightStory
     * @example
     * // Get one HighlightStory
     * const highlightStory = await prisma.highlightStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HighlightStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HighlightStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryFindFirstArgs} args - Arguments to find a HighlightStory
     * @example
     * // Get one HighlightStory
     * const highlightStory = await prisma.highlightStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HighlightStoryFindFirstArgs>(args?: SelectSubset<T, HighlightStoryFindFirstArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HighlightStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryFindFirstOrThrowArgs} args - Arguments to find a HighlightStory
     * @example
     * // Get one HighlightStory
     * const highlightStory = await prisma.highlightStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HighlightStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HighlightStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighlightStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HighlightStories
     * const highlightStories = await prisma.highlightStory.findMany()
     * 
     * // Get first 10 HighlightStories
     * const highlightStories = await prisma.highlightStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightStoryWithIdOnly = await prisma.highlightStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HighlightStoryFindManyArgs>(args?: SelectSubset<T, HighlightStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HighlightStory.
     * @param {HighlightStoryCreateArgs} args - Arguments to create a HighlightStory.
     * @example
     * // Create one HighlightStory
     * const HighlightStory = await prisma.highlightStory.create({
     *   data: {
     *     // ... data to create a HighlightStory
     *   }
     * })
     * 
     */
    create<T extends HighlightStoryCreateArgs>(args: SelectSubset<T, HighlightStoryCreateArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HighlightStories.
     * @param {HighlightStoryCreateManyArgs} args - Arguments to create many HighlightStories.
     * @example
     * // Create many HighlightStories
     * const highlightStory = await prisma.highlightStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HighlightStoryCreateManyArgs>(args?: SelectSubset<T, HighlightStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HighlightStory.
     * @param {HighlightStoryDeleteArgs} args - Arguments to delete one HighlightStory.
     * @example
     * // Delete one HighlightStory
     * const HighlightStory = await prisma.highlightStory.delete({
     *   where: {
     *     // ... filter to delete one HighlightStory
     *   }
     * })
     * 
     */
    delete<T extends HighlightStoryDeleteArgs>(args: SelectSubset<T, HighlightStoryDeleteArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HighlightStory.
     * @param {HighlightStoryUpdateArgs} args - Arguments to update one HighlightStory.
     * @example
     * // Update one HighlightStory
     * const highlightStory = await prisma.highlightStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HighlightStoryUpdateArgs>(args: SelectSubset<T, HighlightStoryUpdateArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HighlightStories.
     * @param {HighlightStoryDeleteManyArgs} args - Arguments to filter HighlightStories to delete.
     * @example
     * // Delete a few HighlightStories
     * const { count } = await prisma.highlightStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HighlightStoryDeleteManyArgs>(args?: SelectSubset<T, HighlightStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighlightStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HighlightStories
     * const highlightStory = await prisma.highlightStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HighlightStoryUpdateManyArgs>(args: SelectSubset<T, HighlightStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HighlightStory.
     * @param {HighlightStoryUpsertArgs} args - Arguments to update or create a HighlightStory.
     * @example
     * // Update or create a HighlightStory
     * const highlightStory = await prisma.highlightStory.upsert({
     *   create: {
     *     // ... data to create a HighlightStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HighlightStory we want to update
     *   }
     * })
     */
    upsert<T extends HighlightStoryUpsertArgs>(args: SelectSubset<T, HighlightStoryUpsertArgs<ExtArgs>>): Prisma__HighlightStoryClient<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HighlightStories that matches the filter.
     * @param {HighlightStoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const highlightStory = await prisma.highlightStory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HighlightStoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HighlightStory.
     * @param {HighlightStoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const highlightStory = await prisma.highlightStory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HighlightStoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HighlightStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryCountArgs} args - Arguments to filter HighlightStories to count.
     * @example
     * // Count the number of HighlightStories
     * const count = await prisma.highlightStory.count({
     *   where: {
     *     // ... the filter for the HighlightStories we want to count
     *   }
     * })
    **/
    count<T extends HighlightStoryCountArgs>(
      args?: Subset<T, HighlightStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HighlightStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HighlightStoryAggregateArgs>(args: Subset<T, HighlightStoryAggregateArgs>): Prisma.PrismaPromise<GetHighlightStoryAggregateType<T>>

    /**
     * Group by HighlightStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightStoryGroupByArgs} args - Group by arguments.
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
      T extends HighlightStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightStoryGroupByArgs['orderBy'] }
        : { orderBy?: HighlightStoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HighlightStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HighlightStory model
   */
  readonly fields: HighlightStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HighlightStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HighlightStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    highlight<T extends HighlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HighlightDefaultArgs<ExtArgs>>): Prisma__HighlightClient<$Result.GetResult<Prisma.$HighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    story<T extends StoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryDefaultArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HighlightStory model
   */
  interface HighlightStoryFieldRefs {
    readonly id: FieldRef<"HighlightStory", 'String'>
    readonly highlightId: FieldRef<"HighlightStory", 'String'>
    readonly storyId: FieldRef<"HighlightStory", 'String'>
    readonly createdAt: FieldRef<"HighlightStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HighlightStory findUnique
   */
  export type HighlightStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter, which HighlightStory to fetch.
     */
    where: HighlightStoryWhereUniqueInput
  }

  /**
   * HighlightStory findUniqueOrThrow
   */
  export type HighlightStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter, which HighlightStory to fetch.
     */
    where: HighlightStoryWhereUniqueInput
  }

  /**
   * HighlightStory findFirst
   */
  export type HighlightStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter, which HighlightStory to fetch.
     */
    where?: HighlightStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightStories to fetch.
     */
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightStories.
     */
    cursor?: HighlightStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightStories.
     */
    distinct?: HighlightStoryScalarFieldEnum | HighlightStoryScalarFieldEnum[]
  }

  /**
   * HighlightStory findFirstOrThrow
   */
  export type HighlightStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter, which HighlightStory to fetch.
     */
    where?: HighlightStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightStories to fetch.
     */
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightStories.
     */
    cursor?: HighlightStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightStories.
     */
    distinct?: HighlightStoryScalarFieldEnum | HighlightStoryScalarFieldEnum[]
  }

  /**
   * HighlightStory findMany
   */
  export type HighlightStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter, which HighlightStories to fetch.
     */
    where?: HighlightStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightStories to fetch.
     */
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HighlightStories.
     */
    cursor?: HighlightStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightStories.
     */
    skip?: number
    distinct?: HighlightStoryScalarFieldEnum | HighlightStoryScalarFieldEnum[]
  }

  /**
   * HighlightStory create
   */
  export type HighlightStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a HighlightStory.
     */
    data: XOR<HighlightStoryCreateInput, HighlightStoryUncheckedCreateInput>
  }

  /**
   * HighlightStory createMany
   */
  export type HighlightStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HighlightStories.
     */
    data: HighlightStoryCreateManyInput | HighlightStoryCreateManyInput[]
  }

  /**
   * HighlightStory update
   */
  export type HighlightStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a HighlightStory.
     */
    data: XOR<HighlightStoryUpdateInput, HighlightStoryUncheckedUpdateInput>
    /**
     * Choose, which HighlightStory to update.
     */
    where: HighlightStoryWhereUniqueInput
  }

  /**
   * HighlightStory updateMany
   */
  export type HighlightStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HighlightStories.
     */
    data: XOR<HighlightStoryUpdateManyMutationInput, HighlightStoryUncheckedUpdateManyInput>
    /**
     * Filter which HighlightStories to update
     */
    where?: HighlightStoryWhereInput
    /**
     * Limit how many HighlightStories to update.
     */
    limit?: number
  }

  /**
   * HighlightStory upsert
   */
  export type HighlightStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the HighlightStory to update in case it exists.
     */
    where: HighlightStoryWhereUniqueInput
    /**
     * In case the HighlightStory found by the `where` argument doesn't exist, create a new HighlightStory with this data.
     */
    create: XOR<HighlightStoryCreateInput, HighlightStoryUncheckedCreateInput>
    /**
     * In case the HighlightStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightStoryUpdateInput, HighlightStoryUncheckedUpdateInput>
  }

  /**
   * HighlightStory delete
   */
  export type HighlightStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    /**
     * Filter which HighlightStory to delete.
     */
    where: HighlightStoryWhereUniqueInput
  }

  /**
   * HighlightStory deleteMany
   */
  export type HighlightStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightStories to delete
     */
    where?: HighlightStoryWhereInput
    /**
     * Limit how many HighlightStories to delete.
     */
    limit?: number
  }

  /**
   * HighlightStory findRaw
   */
  export type HighlightStoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HighlightStory aggregateRaw
   */
  export type HighlightStoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * HighlightStory without action
   */
  export type HighlightStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryMinAggregateOutputType = {
    id: string | null
    content: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type StoryMaxAggregateOutputType = {
    id: string | null
    content: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    content: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type StoryMinAggregateInputType = {
    id?: true
    content?: true
    ownerId?: true
    createdAt?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    content?: true
    ownerId?: true
    createdAt?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    content?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: string
    content: string
    ownerId: string
    createdAt: Date
    _count: StoryCountAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    highlights?: boolean | Story$highlightsArgs<ExtArgs>
    likes?: boolean | Story$likesArgs<ExtArgs>
    comments?: boolean | Story$commentsArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>



  export type StorySelectScalar = {
    id?: boolean
    content?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "ownerId" | "createdAt", ExtArgs["result"]["story"]>
  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    highlights?: boolean | Story$highlightsArgs<ExtArgs>
    likes?: boolean | Story$likesArgs<ExtArgs>
    comments?: boolean | Story$commentsArgs<ExtArgs>
    _count?: boolean | StoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      highlights: Prisma.$HighlightStoryPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * @param {StoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const story = await prisma.story.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Story.
     * @param {StoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const story = await prisma.story.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
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
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    highlights<T extends Story$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, Story$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Story$likesArgs<ExtArgs> = {}>(args?: Subset<T, Story$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Story$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Story$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'String'>
    readonly content: FieldRef<"Story", 'String'>
    readonly ownerId: FieldRef<"Story", 'String'>
    readonly createdAt: FieldRef<"Story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story findRaw
   */
  export type StoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Story aggregateRaw
   */
  export type StoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Story.highlights
   */
  export type Story$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightStory
     */
    select?: HighlightStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightStory
     */
    omit?: HighlightStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightStoryInclude<ExtArgs> | null
    where?: HighlightStoryWhereInput
    orderBy?: HighlightStoryOrderByWithRelationInput | HighlightStoryOrderByWithRelationInput[]
    cursor?: HighlightStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightStoryScalarFieldEnum | HighlightStoryScalarFieldEnum[]
  }

  /**
   * Story.likes
   */
  export type Story$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Story.comments
   */
  export type Story$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    coverPhoto: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    coverPhoto: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    ownerId: number
    coverPhoto: number
    caption: number
    createdAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    ownerId?: true
    coverPhoto?: true
    caption?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    ownerId?: true
    coverPhoto?: true
    caption?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    ownerId?: true
    coverPhoto?: true
    caption?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    ownerId: string
    coverPhoto: string
    caption: string | null
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    coverPhoto?: boolean
    caption?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    collections?: boolean | Post$collectionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    ownerId?: boolean
    coverPhoto?: boolean
    caption?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "coverPhoto" | "caption" | "createdAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    collections?: boolean | Post$collectionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      collections: Prisma.$CollectionPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      coverPhoto: string
      caption: string | null
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends Post$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly ownerId: FieldRef<"Post", 'String'>
    readonly coverPhoto: FieldRef<"Post", 'String'>
    readonly caption: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Post.collections
   */
  export type Post$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionPost
     */
    select?: CollectionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionPost
     */
    omit?: CollectionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionPostInclude<ExtArgs> | null
    where?: CollectionPostWhereInput
    orderBy?: CollectionPostOrderByWithRelationInput | CollectionPostOrderByWithRelationInput[]
    cursor?: CollectionPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionPostScalarFieldEnum | CollectionPostScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


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
    username: string | null
    email: string | null
    name: string | null
    profilePicture: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    name: string | null
    profilePicture: string | null
    bio: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    name: number
    profilePicture: number
    bio: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    profilePicture?: true
    bio?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    profilePicture?: true
    bio?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    name?: true
    profilePicture?: true
    bio?: true
    createdAt?: true
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
    username: string
    email: string
    name: string | null
    profilePicture: string
    bio: string | null
    createdAt: Date
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
    username?: boolean
    email?: boolean
    name?: boolean
    profilePicture?: boolean
    bio?: boolean
    createdAt?: boolean
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    highlights?: boolean | User$highlightsArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    name?: boolean
    profilePicture?: boolean
    bio?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "name" | "profilePicture" | "bio" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | User$followersArgs<ExtArgs>
    following?: boolean | User$followingArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    collections?: boolean | User$collectionsArgs<ExtArgs>
    highlights?: boolean | User$highlightsArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      collections: Prisma.$CollectionOwnerPayload<ExtArgs>[]
      highlights: Prisma.$HighlightOwnerPayload<ExtArgs>[]
      stories: Prisma.$StoryPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      name: string | null
      profilePicture: string
      bio: string | null
      createdAt: Date
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
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    highlights<T extends User$highlightsArgs<ExtArgs> = {}>(args?: Subset<T, User$highlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HighlightOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends User$storiesArgs<ExtArgs> = {}>(args?: Subset<T, User$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.collections
   */
  export type User$collectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionOwner
     */
    select?: CollectionOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CollectionOwner
     */
    omit?: CollectionOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionOwnerInclude<ExtArgs> | null
    where?: CollectionOwnerWhereInput
    orderBy?: CollectionOwnerOrderByWithRelationInput | CollectionOwnerOrderByWithRelationInput[]
    cursor?: CollectionOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionOwnerScalarFieldEnum | CollectionOwnerScalarFieldEnum[]
  }

  /**
   * User.highlights
   */
  export type User$highlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightOwner
     */
    select?: HighlightOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HighlightOwner
     */
    omit?: HighlightOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HighlightOwnerInclude<ExtArgs> | null
    where?: HighlightOwnerWhereInput
    orderBy?: HighlightOwnerOrderByWithRelationInput | HighlightOwnerOrderByWithRelationInput[]
    cursor?: HighlightOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HighlightOwnerScalarFieldEnum | HighlightOwnerScalarFieldEnum[]
  }

  /**
   * User.stories
   */
  export type User$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    cursor?: StoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
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
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    sourceId: string | null
    targetId: string | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    sourceId: number
    targetId: number
    createdAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    sourceId?: true
    targetId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    sourceId: string
    targetId: string
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>



  export type FollowSelectScalar = {
    id?: boolean
    sourceId?: boolean
    targetId?: boolean
    createdAt?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceId" | "targetId" | "createdAt", ExtArgs["result"]["follow"]>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>
    following?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceId: string
      targetId: string
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * @param {FollowFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const follow = await prisma.follow.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FollowFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Follow.
     * @param {FollowAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const follow = await prisma.follow.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FollowAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly sourceId: FieldRef<"Follow", 'String'>
    readonly targetId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow findRaw
   */
  export type FollowFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Follow aggregateRaw
   */
  export type FollowAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const CheckupScalarFieldEnum: {
    id: 'id',
    content: 'content'
  };

  export type CheckupScalarFieldEnum = (typeof CheckupScalarFieldEnum)[keyof typeof CheckupScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    storyId: 'storyId',
    ownerId: 'ownerId',
    commentId: 'commentId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    storyId: 'storyId',
    content: 'content',
    ownerId: 'ownerId',
    isReply: 'isReply',
    replyToId: 'replyToId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const CollectionOwnerScalarFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type CollectionOwnerScalarFieldEnum = (typeof CollectionOwnerScalarFieldEnum)[keyof typeof CollectionOwnerScalarFieldEnum]


  export const CollectionPostScalarFieldEnum: {
    id: 'id',
    collectionId: 'collectionId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type CollectionPostScalarFieldEnum = (typeof CollectionPostScalarFieldEnum)[keyof typeof CollectionPostScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    referenceUserId: 'referenceUserId',
    createdAt: 'createdAt',
    postId: 'postId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const HighlightScalarFieldEnum: {
    id: 'id',
    coverPhoto: 'coverPhoto',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type HighlightScalarFieldEnum = (typeof HighlightScalarFieldEnum)[keyof typeof HighlightScalarFieldEnum]


  export const HighlightOwnerScalarFieldEnum: {
    id: 'id',
    highlightId: 'highlightId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type HighlightOwnerScalarFieldEnum = (typeof HighlightOwnerScalarFieldEnum)[keyof typeof HighlightOwnerScalarFieldEnum]


  export const HighlightStoryScalarFieldEnum: {
    id: 'id',
    highlightId: 'highlightId',
    storyId: 'storyId',
    createdAt: 'createdAt'
  };

  export type HighlightStoryScalarFieldEnum = (typeof HighlightStoryScalarFieldEnum)[keyof typeof HighlightStoryScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    content: 'content',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    coverPhoto: 'coverPhoto',
    caption: 'caption',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    name: 'name',
    profilePicture: 'profilePicture',
    bio: 'bio',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    sourceId: 'sourceId',
    targetId: 'targetId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CheckupWhereInput = {
    AND?: CheckupWhereInput | CheckupWhereInput[]
    OR?: CheckupWhereInput[]
    NOT?: CheckupWhereInput | CheckupWhereInput[]
    id?: StringFilter<"Checkup"> | string
    content?: StringNullableFilter<"Checkup"> | string | null
  }

  export type CheckupOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type CheckupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckupWhereInput | CheckupWhereInput[]
    OR?: CheckupWhereInput[]
    NOT?: CheckupWhereInput | CheckupWhereInput[]
    content?: StringNullableFilter<"Checkup"> | string | null
  }, "id">

  export type CheckupOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    _count?: CheckupCountOrderByAggregateInput
    _max?: CheckupMaxOrderByAggregateInput
    _min?: CheckupMinOrderByAggregateInput
  }

  export type CheckupScalarWhereWithAggregatesInput = {
    AND?: CheckupScalarWhereWithAggregatesInput | CheckupScalarWhereWithAggregatesInput[]
    OR?: CheckupScalarWhereWithAggregatesInput[]
    NOT?: CheckupScalarWhereWithAggregatesInput | CheckupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkup"> | string
    content?: StringNullableWithAggregatesFilter<"Checkup"> | string | null
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    postId?: StringNullableFilter<"Like"> | string | null
    storyId?: StringNullableFilter<"Like"> | string | null
    ownerId?: StringFilter<"Like"> | string
    commentId?: StringNullableFilter<"Like"> | string | null
    createdAt?: DateTimeFilter<"Like"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    ownerId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    story?: StoryOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ownerId_postId?: LikeOwnerIdPostIdCompoundUniqueInput
    ownerId_storyId?: LikeOwnerIdStoryIdCompoundUniqueInput
    ownerId_commentId?: LikeOwnerIdCommentIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    postId?: StringNullableFilter<"Like"> | string | null
    storyId?: StringNullableFilter<"Like"> | string | null
    ownerId?: StringFilter<"Like"> | string
    commentId?: StringNullableFilter<"Like"> | string | null
    createdAt?: DateTimeFilter<"Like"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "id" | "ownerId_postId" | "ownerId_storyId" | "ownerId_commentId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    ownerId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    postId?: StringNullableWithAggregatesFilter<"Like"> | string | null
    storyId?: StringNullableWithAggregatesFilter<"Like"> | string | null
    ownerId?: StringWithAggregatesFilter<"Like"> | string
    commentId?: StringNullableWithAggregatesFilter<"Like"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringNullableFilter<"Comment"> | string | null
    storyId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    ownerId?: StringFilter<"Comment"> | string
    isReply?: BoolFilter<"Comment"> | boolean
    replyToId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    replyTo?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    likes?: LikeListRelationFilter
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    isReply?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    story?: StoryOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    replyTo?: CommentOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: StringNullableFilter<"Comment"> | string | null
    storyId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    ownerId?: StringFilter<"Comment"> | string
    isReply?: BoolFilter<"Comment"> | boolean
    replyToId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    story?: XOR<StoryNullableScalarRelationFilter, StoryWhereInput> | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    replyTo?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    likes?: LikeListRelationFilter
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    isReply?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    storyId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    content?: StringWithAggregatesFilter<"Comment"> | string
    ownerId?: StringWithAggregatesFilter<"Comment"> | string
    isReply?: BoolWithAggregatesFilter<"Comment"> | boolean
    replyToId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    title?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    owners?: CollectionOwnerListRelationFilter
    posts?: CollectionPostListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    owners?: CollectionOwnerOrderByRelationAggregateInput
    posts?: CollectionPostOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    title?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    owners?: CollectionOwnerListRelationFilter
    posts?: CollectionPostListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    title?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
  }

  export type CollectionOwnerWhereInput = {
    AND?: CollectionOwnerWhereInput | CollectionOwnerWhereInput[]
    OR?: CollectionOwnerWhereInput[]
    NOT?: CollectionOwnerWhereInput | CollectionOwnerWhereInput[]
    id?: StringFilter<"CollectionOwner"> | string
    collectionId?: StringFilter<"CollectionOwner"> | string
    userId?: StringFilter<"CollectionOwner"> | string
    createdAt?: DateTimeFilter<"CollectionOwner"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CollectionOwnerOrderByWithRelationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CollectionOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId_userId?: CollectionOwnerCollectionIdUserIdCompoundUniqueInput
    AND?: CollectionOwnerWhereInput | CollectionOwnerWhereInput[]
    OR?: CollectionOwnerWhereInput[]
    NOT?: CollectionOwnerWhereInput | CollectionOwnerWhereInput[]
    collectionId?: StringFilter<"CollectionOwner"> | string
    userId?: StringFilter<"CollectionOwner"> | string
    createdAt?: DateTimeFilter<"CollectionOwner"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "collectionId_userId">

  export type CollectionOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionOwnerCountOrderByAggregateInput
    _max?: CollectionOwnerMaxOrderByAggregateInput
    _min?: CollectionOwnerMinOrderByAggregateInput
  }

  export type CollectionOwnerScalarWhereWithAggregatesInput = {
    AND?: CollectionOwnerScalarWhereWithAggregatesInput | CollectionOwnerScalarWhereWithAggregatesInput[]
    OR?: CollectionOwnerScalarWhereWithAggregatesInput[]
    NOT?: CollectionOwnerScalarWhereWithAggregatesInput | CollectionOwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionOwner"> | string
    collectionId?: StringWithAggregatesFilter<"CollectionOwner"> | string
    userId?: StringWithAggregatesFilter<"CollectionOwner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionOwner"> | Date | string
  }

  export type CollectionPostWhereInput = {
    AND?: CollectionPostWhereInput | CollectionPostWhereInput[]
    OR?: CollectionPostWhereInput[]
    NOT?: CollectionPostWhereInput | CollectionPostWhereInput[]
    id?: StringFilter<"CollectionPost"> | string
    collectionId?: StringFilter<"CollectionPost"> | string
    postId?: StringFilter<"CollectionPost"> | string
    createdAt?: DateTimeFilter<"CollectionPost"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CollectionPostOrderByWithRelationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    collection?: CollectionOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CollectionPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collectionId_postId?: CollectionPostCollectionIdPostIdCompoundUniqueInput
    AND?: CollectionPostWhereInput | CollectionPostWhereInput[]
    OR?: CollectionPostWhereInput[]
    NOT?: CollectionPostWhereInput | CollectionPostWhereInput[]
    collectionId?: StringFilter<"CollectionPost"> | string
    postId?: StringFilter<"CollectionPost"> | string
    createdAt?: DateTimeFilter<"CollectionPost"> | Date | string
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "collectionId_postId">

  export type CollectionPostOrderByWithAggregationInput = {
    id?: SortOrder
    collectionId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    _count?: CollectionPostCountOrderByAggregateInput
    _max?: CollectionPostMaxOrderByAggregateInput
    _min?: CollectionPostMinOrderByAggregateInput
  }

  export type CollectionPostScalarWhereWithAggregatesInput = {
    AND?: CollectionPostScalarWhereWithAggregatesInput | CollectionPostScalarWhereWithAggregatesInput[]
    OR?: CollectionPostScalarWhereWithAggregatesInput[]
    NOT?: CollectionPostScalarWhereWithAggregatesInput | CollectionPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CollectionPost"> | string
    collectionId?: StringWithAggregatesFilter<"CollectionPost"> | string
    postId?: StringWithAggregatesFilter<"CollectionPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CollectionPost"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    referenceUserId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    postId?: StringNullableFilter<"Tag"> | string | null
    referenceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    referenceUser?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    referenceUserId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    postId?: StringNullableFilter<"Tag"> | string | null
    referenceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    referenceUserId?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    postId?: StringNullableWithAggregatesFilter<"Tag"> | string | null
  }

  export type HighlightWhereInput = {
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    id?: StringFilter<"Highlight"> | string
    coverPhoto?: StringNullableFilter<"Highlight"> | string | null
    title?: StringFilter<"Highlight"> | string
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    owners?: HighlightOwnerListRelationFilter
    stories?: HighlightStoryListRelationFilter
  }

  export type HighlightOrderByWithRelationInput = {
    id?: SortOrder
    coverPhoto?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    owners?: HighlightOwnerOrderByRelationAggregateInput
    stories?: HighlightStoryOrderByRelationAggregateInput
  }

  export type HighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HighlightWhereInput | HighlightWhereInput[]
    OR?: HighlightWhereInput[]
    NOT?: HighlightWhereInput | HighlightWhereInput[]
    coverPhoto?: StringNullableFilter<"Highlight"> | string | null
    title?: StringFilter<"Highlight"> | string
    createdAt?: DateTimeFilter<"Highlight"> | Date | string
    owners?: HighlightOwnerListRelationFilter
    stories?: HighlightStoryListRelationFilter
  }, "id">

  export type HighlightOrderByWithAggregationInput = {
    id?: SortOrder
    coverPhoto?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: HighlightCountOrderByAggregateInput
    _max?: HighlightMaxOrderByAggregateInput
    _min?: HighlightMinOrderByAggregateInput
  }

  export type HighlightScalarWhereWithAggregatesInput = {
    AND?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    OR?: HighlightScalarWhereWithAggregatesInput[]
    NOT?: HighlightScalarWhereWithAggregatesInput | HighlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Highlight"> | string
    coverPhoto?: StringNullableWithAggregatesFilter<"Highlight"> | string | null
    title?: StringWithAggregatesFilter<"Highlight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Highlight"> | Date | string
  }

  export type HighlightOwnerWhereInput = {
    AND?: HighlightOwnerWhereInput | HighlightOwnerWhereInput[]
    OR?: HighlightOwnerWhereInput[]
    NOT?: HighlightOwnerWhereInput | HighlightOwnerWhereInput[]
    id?: StringFilter<"HighlightOwner"> | string
    highlightId?: StringFilter<"HighlightOwner"> | string
    userId?: StringFilter<"HighlightOwner"> | string
    createdAt?: DateTimeFilter<"HighlightOwner"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HighlightOwnerOrderByWithRelationInput = {
    id?: SortOrder
    highlightId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    highlight?: HighlightOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type HighlightOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    highlightId_userId?: HighlightOwnerHighlightIdUserIdCompoundUniqueInput
    AND?: HighlightOwnerWhereInput | HighlightOwnerWhereInput[]
    OR?: HighlightOwnerWhereInput[]
    NOT?: HighlightOwnerWhereInput | HighlightOwnerWhereInput[]
    highlightId?: StringFilter<"HighlightOwner"> | string
    userId?: StringFilter<"HighlightOwner"> | string
    createdAt?: DateTimeFilter<"HighlightOwner"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "highlightId_userId">

  export type HighlightOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    highlightId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: HighlightOwnerCountOrderByAggregateInput
    _max?: HighlightOwnerMaxOrderByAggregateInput
    _min?: HighlightOwnerMinOrderByAggregateInput
  }

  export type HighlightOwnerScalarWhereWithAggregatesInput = {
    AND?: HighlightOwnerScalarWhereWithAggregatesInput | HighlightOwnerScalarWhereWithAggregatesInput[]
    OR?: HighlightOwnerScalarWhereWithAggregatesInput[]
    NOT?: HighlightOwnerScalarWhereWithAggregatesInput | HighlightOwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HighlightOwner"> | string
    highlightId?: StringWithAggregatesFilter<"HighlightOwner"> | string
    userId?: StringWithAggregatesFilter<"HighlightOwner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HighlightOwner"> | Date | string
  }

  export type HighlightStoryWhereInput = {
    AND?: HighlightStoryWhereInput | HighlightStoryWhereInput[]
    OR?: HighlightStoryWhereInput[]
    NOT?: HighlightStoryWhereInput | HighlightStoryWhereInput[]
    id?: StringFilter<"HighlightStory"> | string
    highlightId?: StringFilter<"HighlightStory"> | string
    storyId?: StringFilter<"HighlightStory"> | string
    createdAt?: DateTimeFilter<"HighlightStory"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
    story?: XOR<StoryScalarRelationFilter, StoryWhereInput>
  }

  export type HighlightStoryOrderByWithRelationInput = {
    id?: SortOrder
    highlightId?: SortOrder
    storyId?: SortOrder
    createdAt?: SortOrder
    highlight?: HighlightOrderByWithRelationInput
    story?: StoryOrderByWithRelationInput
  }

  export type HighlightStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    highlightId_storyId?: HighlightStoryHighlightIdStoryIdCompoundUniqueInput
    AND?: HighlightStoryWhereInput | HighlightStoryWhereInput[]
    OR?: HighlightStoryWhereInput[]
    NOT?: HighlightStoryWhereInput | HighlightStoryWhereInput[]
    highlightId?: StringFilter<"HighlightStory"> | string
    storyId?: StringFilter<"HighlightStory"> | string
    createdAt?: DateTimeFilter<"HighlightStory"> | Date | string
    highlight?: XOR<HighlightScalarRelationFilter, HighlightWhereInput>
    story?: XOR<StoryScalarRelationFilter, StoryWhereInput>
  }, "id" | "highlightId_storyId">

  export type HighlightStoryOrderByWithAggregationInput = {
    id?: SortOrder
    highlightId?: SortOrder
    storyId?: SortOrder
    createdAt?: SortOrder
    _count?: HighlightStoryCountOrderByAggregateInput
    _max?: HighlightStoryMaxOrderByAggregateInput
    _min?: HighlightStoryMinOrderByAggregateInput
  }

  export type HighlightStoryScalarWhereWithAggregatesInput = {
    AND?: HighlightStoryScalarWhereWithAggregatesInput | HighlightStoryScalarWhereWithAggregatesInput[]
    OR?: HighlightStoryScalarWhereWithAggregatesInput[]
    NOT?: HighlightStoryScalarWhereWithAggregatesInput | HighlightStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HighlightStory"> | string
    highlightId?: StringWithAggregatesFilter<"HighlightStory"> | string
    storyId?: StringWithAggregatesFilter<"HighlightStory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HighlightStory"> | Date | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    ownerId?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    highlights?: HighlightStoryListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    highlights?: HighlightStoryOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    content?: StringFilter<"Story"> | string
    ownerId?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    highlights?: HighlightStoryListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Story"> | string
    content?: StringWithAggregatesFilter<"Story"> | string
    ownerId?: StringWithAggregatesFilter<"Story"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    ownerId?: StringFilter<"Post"> | string
    coverPhoto?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    tags?: TagListRelationFilter
    collections?: CollectionPostListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coverPhoto?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    collections?: CollectionPostOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    ownerId?: StringFilter<"Post"> | string
    coverPhoto?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    tags?: TagListRelationFilter
    collections?: CollectionPostListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coverPhoto?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    ownerId?: StringWithAggregatesFilter<"Post"> | string
    coverPhoto?: StringWithAggregatesFilter<"Post"> | string
    caption?: StringNullableWithAggregatesFilter<"Post"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    collections?: CollectionOwnerListRelationFilter
    highlights?: HighlightOwnerListRelationFilter
    stories?: StoryListRelationFilter
    posts?: PostListRelationFilter
    tags?: TagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    followers?: FollowOrderByRelationAggregateInput
    following?: FollowOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    collections?: CollectionOwnerOrderByRelationAggregateInput
    highlights?: HighlightOwnerOrderByRelationAggregateInput
    stories?: StoryOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    profilePicture?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
    collections?: CollectionOwnerListRelationFilter
    highlights?: HighlightOwnerListRelationFilter
    stories?: StoryListRelationFilter
    posts?: PostListRelationFilter
    tags?: TagListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicture?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: StringFilter<"Follow"> | string
    sourceId?: StringFilter<"Follow"> | string
    targetId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
    follower?: UserOrderByWithRelationInput
    following?: UserOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceId_targetId?: FollowSourceIdTargetIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    sourceId?: StringFilter<"Follow"> | string
    targetId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sourceId_targetId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follow"> | string
    sourceId?: StringWithAggregatesFilter<"Follow"> | string
    targetId?: StringWithAggregatesFilter<"Follow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type CheckupCreateInput = {
    id?: string
    content?: string | null
  }

  export type CheckupUncheckedCreateInput = {
    id?: string
    content?: string | null
  }

  export type CheckupUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckupUncheckedUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckupCreateManyInput = {
    id?: string
    content?: string | null
  }

  export type CheckupUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckupUncheckedUpdateManyInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLikesInput
    post?: PostCreateNestedOneWithoutLikesInput
    story?: StoryCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLikesNestedInput
    post?: PostUpdateOneWithoutLikesNestedInput
    story?: StoryUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    story?: StoryCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    story?: StoryUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    owners?: CollectionOwnerCreateNestedManyWithoutCollectionInput
    posts?: CollectionPostCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    owners?: CollectionOwnerUncheckedCreateNestedManyWithoutCollectionInput
    posts?: CollectionPostUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CollectionOwnerUpdateManyWithoutCollectionNestedInput
    posts?: CollectionPostUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CollectionOwnerUncheckedUpdateManyWithoutCollectionNestedInput
    posts?: CollectionPostUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
  }

  export type CollectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerCreateInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutOwnersInput
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionOwnerUncheckedCreateInput = {
    id?: string
    collectionId: string
    userId: string
    createdAt?: Date | string
  }

  export type CollectionOwnerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutOwnersNestedInput
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionOwnerUncheckedUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerCreateManyInput = {
    id?: string
    collectionId: string
    userId: string
    createdAt?: Date | string
  }

  export type CollectionOwnerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerUncheckedUpdateManyInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostCreateInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutPostsInput
    post: PostCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionPostUncheckedCreateInput = {
    id?: string
    collectionId: string
    postId: string
    createdAt?: Date | string
  }

  export type CollectionPostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutPostsNestedInput
    post?: PostUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionPostUncheckedUpdateInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostCreateManyInput = {
    id?: string
    collectionId: string
    postId: string
    createdAt?: Date | string
  }

  export type CollectionPostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostUncheckedUpdateManyInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    createdAt?: Date | string
    referenceUser: UserCreateNestedOneWithoutTagsInput
    post?: PostCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    referenceUserId: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type TagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceUser?: UserUpdateOneRequiredWithoutTagsNestedInput
    post?: PostUpdateOneWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    referenceUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateManyInput = {
    id?: string
    referenceUserId: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type TagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    referenceUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HighlightCreateInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    owners?: HighlightOwnerCreateNestedManyWithoutHighlightInput
    stories?: HighlightStoryCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUncheckedCreateInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    owners?: HighlightOwnerUncheckedCreateNestedManyWithoutHighlightInput
    stories?: HighlightStoryUncheckedCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUpdateInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: HighlightOwnerUpdateManyWithoutHighlightNestedInput
    stories?: HighlightStoryUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: HighlightOwnerUncheckedUpdateManyWithoutHighlightNestedInput
    stories?: HighlightStoryUncheckedUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightCreateManyInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
  }

  export type HighlightUpdateManyMutationInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightUncheckedUpdateManyInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerCreateInput = {
    id?: string
    createdAt?: Date | string
    highlight: HighlightCreateNestedOneWithoutOwnersInput
    user: UserCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightOwnerUncheckedCreateInput = {
    id?: string
    highlightId: string
    userId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlight?: HighlightUpdateOneRequiredWithoutOwnersNestedInput
    user?: UserUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightOwnerUncheckedUpdateInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerCreateManyInput = {
    id?: string
    highlightId: string
    userId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerUncheckedUpdateManyInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryCreateInput = {
    id?: string
    createdAt?: Date | string
    highlight: HighlightCreateNestedOneWithoutStoriesInput
    story: StoryCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightStoryUncheckedCreateInput = {
    id?: string
    highlightId: string
    storyId: string
    createdAt?: Date | string
  }

  export type HighlightStoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlight?: HighlightUpdateOneRequiredWithoutStoriesNestedInput
    story?: StoryUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightStoryUncheckedUpdateInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryCreateManyInput = {
    id?: string
    highlightId: string
    storyId: string
    createdAt?: Date | string
  }

  export type HighlightStoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryUncheckedUpdateManyInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    storyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStoriesInput
    highlights?: HighlightStoryCreateNestedManyWithoutStoryInput
    likes?: LikeCreateNestedManyWithoutStoryInput
    comments?: CommentCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateInput = {
    id?: string
    content: string
    ownerId: string
    createdAt?: Date | string
    highlights?: HighlightStoryUncheckedCreateNestedManyWithoutStoryInput
    likes?: LikeUncheckedCreateNestedManyWithoutStoryInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoriesNestedInput
    highlights?: HighlightStoryUpdateManyWithoutStoryNestedInput
    likes?: LikeUpdateManyWithoutStoryNestedInput
    comments?: CommentUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightStoryUncheckedUpdateManyWithoutStoryNestedInput
    likes?: LikeUncheckedUpdateManyWithoutStoryNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryCreateManyInput = {
    id?: string
    content: string
    ownerId: string
    createdAt?: Date | string
  }

  export type StoryUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    likes?: LikeCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: TagCreateNestedManyWithoutPostInput
    collections?: CollectionPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: TagUncheckedCreateNestedManyWithoutPostInput
    collections?: CollectionPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    tags?: TagUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    sourceId: string
    targetId: string
    createdAt?: Date | string
  }

  export type FollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    sourceId: string
    targetId: string
    createdAt?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    sourceId?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CheckupCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type CheckupMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type CheckupMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type StoryNullableScalarRelationFilter = {
    is?: StoryWhereInput | null
    isNot?: StoryWhereInput | null
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type LikeOwnerIdPostIdCompoundUniqueInput = {
    ownerId: string
    postId: string
  }

  export type LikeOwnerIdStoryIdCompoundUniqueInput = {
    ownerId: string
    storyId: string
  }

  export type LikeOwnerIdCommentIdCompoundUniqueInput = {
    ownerId: string
    commentId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    ownerId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    ownerId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    ownerId?: SortOrder
    commentId?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    isReply?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    isReply?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    storyId?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    isReply?: SortOrder
    replyToId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CollectionOwnerListRelationFilter = {
    every?: CollectionOwnerWhereInput
    some?: CollectionOwnerWhereInput
    none?: CollectionOwnerWhereInput
  }

  export type CollectionPostListRelationFilter = {
    every?: CollectionPostWhereInput
    some?: CollectionPostWhereInput
    none?: CollectionPostWhereInput
  }

  export type CollectionOwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type CollectionOwnerCollectionIdUserIdCompoundUniqueInput = {
    collectionId: string
    userId: string
  }

  export type CollectionOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CollectionPostCollectionIdPostIdCompoundUniqueInput = {
    collectionId: string
    postId: string
  }

  export type CollectionPostCountOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionPostMaxOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type CollectionPostMinOrderByAggregateInput = {
    id?: SortOrder
    collectionId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    referenceUserId?: SortOrder
    createdAt?: SortOrder
    postId?: SortOrder
  }

  export type HighlightOwnerListRelationFilter = {
    every?: HighlightOwnerWhereInput
    some?: HighlightOwnerWhereInput
    none?: HighlightOwnerWhereInput
  }

  export type HighlightStoryListRelationFilter = {
    every?: HighlightStoryWhereInput
    some?: HighlightStoryWhereInput
    none?: HighlightStoryWhereInput
  }

  export type HighlightOwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightStoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightCountOrderByAggregateInput = {
    id?: SortOrder
    coverPhoto?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    coverPhoto?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightMinOrderByAggregateInput = {
    id?: SortOrder
    coverPhoto?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightScalarRelationFilter = {
    is?: HighlightWhereInput
    isNot?: HighlightWhereInput
  }

  export type HighlightOwnerHighlightIdUserIdCompoundUniqueInput = {
    highlightId: string
    userId: string
  }

  export type HighlightOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryScalarRelationFilter = {
    is?: StoryWhereInput
    isNot?: StoryWhereInput
  }

  export type HighlightStoryHighlightIdStoryIdCompoundUniqueInput = {
    highlightId: string
    storyId: string
  }

  export type HighlightStoryCountOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    storyId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    storyId?: SortOrder
    createdAt?: SortOrder
  }

  export type HighlightStoryMinOrderByAggregateInput = {
    id?: SortOrder
    highlightId?: SortOrder
    storyId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coverPhoto?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coverPhoto?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    coverPhoto?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type StoryListRelationFilter = {
    every?: StoryWhereInput
    some?: StoryWhereInput
    none?: StoryWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowSourceIdTargetIdCompoundUniqueInput = {
    sourceId: string
    targetId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    sourceId?: SortOrder
    targetId?: SortOrder
    createdAt?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type StoryCreateNestedOneWithoutLikesInput = {
    create?: XOR<StoryCreateWithoutLikesInput, StoryUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutLikesInput
    connect?: StoryWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutLikesInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    connect?: CommentWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateOneWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    disconnect?: boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type StoryUpdateOneWithoutLikesNestedInput = {
    create?: XOR<StoryCreateWithoutLikesInput, StoryUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StoryCreateOrConnectWithoutLikesInput
    upsert?: StoryUpsertWithoutLikesInput
    disconnect?: boolean
    delete?: StoryWhereInput | boolean
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutLikesInput, StoryUpdateWithoutLikesInput>, StoryUncheckedUpdateWithoutLikesInput>
  }

  export type CommentUpdateOneWithoutLikesNestedInput = {
    create?: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutLikesInput
    upsert?: CommentUpsertWithoutLikesInput
    disconnect?: boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutLikesInput, CommentUpdateWithoutLikesInput>, CommentUncheckedUpdateWithoutLikesInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type StoryCreateNestedOneWithoutCommentsInput = {
    create?: XOR<StoryCreateWithoutCommentsInput, StoryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutCommentsInput
    connect?: StoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutReplyToInput = {
    create?: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput> | CommentCreateWithoutReplyToInput[] | CommentUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReplyToInput | CommentCreateOrConnectWithoutReplyToInput[]
    createMany?: CommentCreateManyReplyToInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput> | CommentCreateWithoutReplyToInput[] | CommentUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReplyToInput | CommentCreateOrConnectWithoutReplyToInput[]
    createMany?: CommentCreateManyReplyToInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type StoryUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<StoryCreateWithoutCommentsInput, StoryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutCommentsInput
    upsert?: StoryUpsertWithoutCommentsInput
    disconnect?: boolean
    delete?: StoryWhereInput | boolean
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutCommentsInput, StoryUpdateWithoutCommentsInput>, StoryUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type LikeUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutCommentInput | LikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutCommentInput | LikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutCommentInput | LikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput> | CommentCreateWithoutReplyToInput[] | CommentUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReplyToInput | CommentCreateOrConnectWithoutReplyToInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReplyToInput | CommentUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: CommentCreateManyReplyToInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReplyToInput | CommentUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReplyToInput | CommentUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput> | LikeCreateWithoutCommentInput[] | LikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutCommentInput | LikeCreateOrConnectWithoutCommentInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutCommentInput | LikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikeCreateManyCommentInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutCommentInput | LikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutCommentInput | LikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput> | CommentCreateWithoutReplyToInput[] | CommentUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReplyToInput | CommentCreateOrConnectWithoutReplyToInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReplyToInput | CommentUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: CommentCreateManyReplyToInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReplyToInput | CommentUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReplyToInput | CommentUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CollectionOwnerCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput> | CollectionOwnerCreateWithoutCollectionInput[] | CollectionOwnerUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutCollectionInput | CollectionOwnerCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionOwnerCreateManyCollectionInputEnvelope
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
  }

  export type CollectionPostCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput> | CollectionPostCreateWithoutCollectionInput[] | CollectionPostUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutCollectionInput | CollectionPostCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionPostCreateManyCollectionInputEnvelope
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
  }

  export type CollectionOwnerUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput> | CollectionOwnerCreateWithoutCollectionInput[] | CollectionOwnerUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutCollectionInput | CollectionOwnerCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionOwnerCreateManyCollectionInputEnvelope
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
  }

  export type CollectionPostUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput> | CollectionPostCreateWithoutCollectionInput[] | CollectionPostUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutCollectionInput | CollectionPostCreateOrConnectWithoutCollectionInput[]
    createMany?: CollectionPostCreateManyCollectionInputEnvelope
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
  }

  export type CollectionOwnerUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput> | CollectionOwnerCreateWithoutCollectionInput[] | CollectionOwnerUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutCollectionInput | CollectionOwnerCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionOwnerUpsertWithWhereUniqueWithoutCollectionInput | CollectionOwnerUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionOwnerCreateManyCollectionInputEnvelope
    set?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    disconnect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    delete?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    update?: CollectionOwnerUpdateWithWhereUniqueWithoutCollectionInput | CollectionOwnerUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionOwnerUpdateManyWithWhereWithoutCollectionInput | CollectionOwnerUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
  }

  export type CollectionPostUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput> | CollectionPostCreateWithoutCollectionInput[] | CollectionPostUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutCollectionInput | CollectionPostCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionPostUpsertWithWhereUniqueWithoutCollectionInput | CollectionPostUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionPostCreateManyCollectionInputEnvelope
    set?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    disconnect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    delete?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    update?: CollectionPostUpdateWithWhereUniqueWithoutCollectionInput | CollectionPostUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionPostUpdateManyWithWhereWithoutCollectionInput | CollectionPostUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
  }

  export type CollectionOwnerUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput> | CollectionOwnerCreateWithoutCollectionInput[] | CollectionOwnerUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutCollectionInput | CollectionOwnerCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionOwnerUpsertWithWhereUniqueWithoutCollectionInput | CollectionOwnerUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionOwnerCreateManyCollectionInputEnvelope
    set?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    disconnect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    delete?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    update?: CollectionOwnerUpdateWithWhereUniqueWithoutCollectionInput | CollectionOwnerUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionOwnerUpdateManyWithWhereWithoutCollectionInput | CollectionOwnerUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
  }

  export type CollectionPostUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput> | CollectionPostCreateWithoutCollectionInput[] | CollectionPostUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutCollectionInput | CollectionPostCreateOrConnectWithoutCollectionInput[]
    upsert?: CollectionPostUpsertWithWhereUniqueWithoutCollectionInput | CollectionPostUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: CollectionPostCreateManyCollectionInputEnvelope
    set?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    disconnect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    delete?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    update?: CollectionPostUpdateWithWhereUniqueWithoutCollectionInput | CollectionPostUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: CollectionPostUpdateManyWithWhereWithoutCollectionInput | CollectionPostUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
  }

  export type CollectionCreateNestedOneWithoutOwnersInput = {
    create?: XOR<CollectionCreateWithoutOwnersInput, CollectionUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutOwnersInput
    connect?: CollectionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    connect?: UserWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<CollectionCreateWithoutOwnersInput, CollectionUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutOwnersInput
    upsert?: CollectionUpsertWithoutOwnersInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutOwnersInput, CollectionUpdateWithoutOwnersInput>, CollectionUncheckedUpdateWithoutOwnersInput>
  }

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput
    upsert?: UserUpsertWithoutCollectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionsInput, UserUpdateWithoutCollectionsInput>, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type CollectionCreateNestedOneWithoutPostsInput = {
    create?: XOR<CollectionCreateWithoutPostsInput, CollectionUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutPostsInput
    connect?: CollectionWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<PostCreateWithoutCollectionsInput, PostUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCollectionsInput
    connect?: PostWhereUniqueInput
  }

  export type CollectionUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CollectionCreateWithoutPostsInput, CollectionUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutPostsInput
    upsert?: CollectionUpsertWithoutPostsInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutPostsInput, CollectionUpdateWithoutPostsInput>, CollectionUncheckedUpdateWithoutPostsInput>
  }

  export type PostUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<PostCreateWithoutCollectionsInput, PostUncheckedCreateWithoutCollectionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCollectionsInput
    upsert?: PostUpsertWithoutCollectionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCollectionsInput, PostUpdateWithoutCollectionsInput>, PostUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateOneWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    disconnect?: boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type HighlightOwnerCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput> | HighlightOwnerCreateWithoutHighlightInput[] | HighlightOwnerUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutHighlightInput | HighlightOwnerCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightOwnerCreateManyHighlightInputEnvelope
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
  }

  export type HighlightStoryCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput> | HighlightStoryCreateWithoutHighlightInput[] | HighlightStoryUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutHighlightInput | HighlightStoryCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightStoryCreateManyHighlightInputEnvelope
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
  }

  export type HighlightOwnerUncheckedCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput> | HighlightOwnerCreateWithoutHighlightInput[] | HighlightOwnerUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutHighlightInput | HighlightOwnerCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightOwnerCreateManyHighlightInputEnvelope
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
  }

  export type HighlightStoryUncheckedCreateNestedManyWithoutHighlightInput = {
    create?: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput> | HighlightStoryCreateWithoutHighlightInput[] | HighlightStoryUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutHighlightInput | HighlightStoryCreateOrConnectWithoutHighlightInput[]
    createMany?: HighlightStoryCreateManyHighlightInputEnvelope
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
  }

  export type HighlightOwnerUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput> | HighlightOwnerCreateWithoutHighlightInput[] | HighlightOwnerUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutHighlightInput | HighlightOwnerCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightOwnerUpsertWithWhereUniqueWithoutHighlightInput | HighlightOwnerUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightOwnerCreateManyHighlightInputEnvelope
    set?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    disconnect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    delete?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    update?: HighlightOwnerUpdateWithWhereUniqueWithoutHighlightInput | HighlightOwnerUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightOwnerUpdateManyWithWhereWithoutHighlightInput | HighlightOwnerUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
  }

  export type HighlightStoryUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput> | HighlightStoryCreateWithoutHighlightInput[] | HighlightStoryUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutHighlightInput | HighlightStoryCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightStoryUpsertWithWhereUniqueWithoutHighlightInput | HighlightStoryUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightStoryCreateManyHighlightInputEnvelope
    set?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    disconnect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    delete?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    update?: HighlightStoryUpdateWithWhereUniqueWithoutHighlightInput | HighlightStoryUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightStoryUpdateManyWithWhereWithoutHighlightInput | HighlightStoryUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
  }

  export type HighlightOwnerUncheckedUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput> | HighlightOwnerCreateWithoutHighlightInput[] | HighlightOwnerUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutHighlightInput | HighlightOwnerCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightOwnerUpsertWithWhereUniqueWithoutHighlightInput | HighlightOwnerUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightOwnerCreateManyHighlightInputEnvelope
    set?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    disconnect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    delete?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    update?: HighlightOwnerUpdateWithWhereUniqueWithoutHighlightInput | HighlightOwnerUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightOwnerUpdateManyWithWhereWithoutHighlightInput | HighlightOwnerUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
  }

  export type HighlightStoryUncheckedUpdateManyWithoutHighlightNestedInput = {
    create?: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput> | HighlightStoryCreateWithoutHighlightInput[] | HighlightStoryUncheckedCreateWithoutHighlightInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutHighlightInput | HighlightStoryCreateOrConnectWithoutHighlightInput[]
    upsert?: HighlightStoryUpsertWithWhereUniqueWithoutHighlightInput | HighlightStoryUpsertWithWhereUniqueWithoutHighlightInput[]
    createMany?: HighlightStoryCreateManyHighlightInputEnvelope
    set?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    disconnect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    delete?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    update?: HighlightStoryUpdateWithWhereUniqueWithoutHighlightInput | HighlightStoryUpdateWithWhereUniqueWithoutHighlightInput[]
    updateMany?: HighlightStoryUpdateManyWithWhereWithoutHighlightInput | HighlightStoryUpdateManyWithWhereWithoutHighlightInput[]
    deleteMany?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
  }

  export type HighlightCreateNestedOneWithoutOwnersInput = {
    create?: XOR<HighlightCreateWithoutOwnersInput, HighlightUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutOwnersInput
    connect?: HighlightWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHighlightsInput
    connect?: UserWhereUniqueInput
  }

  export type HighlightUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<HighlightCreateWithoutOwnersInput, HighlightUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutOwnersInput
    upsert?: HighlightUpsertWithoutOwnersInput
    connect?: HighlightWhereUniqueInput
    update?: XOR<XOR<HighlightUpdateToOneWithWhereWithoutOwnersInput, HighlightUpdateWithoutOwnersInput>, HighlightUncheckedUpdateWithoutOwnersInput>
  }

  export type UserUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHighlightsInput
    upsert?: UserUpsertWithoutHighlightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHighlightsInput, UserUpdateWithoutHighlightsInput>, UserUncheckedUpdateWithoutHighlightsInput>
  }

  export type HighlightCreateNestedOneWithoutStoriesInput = {
    create?: XOR<HighlightCreateWithoutStoriesInput, HighlightUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutStoriesInput
    connect?: HighlightWhereUniqueInput
  }

  export type StoryCreateNestedOneWithoutHighlightsInput = {
    create?: XOR<StoryCreateWithoutHighlightsInput, StoryUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutHighlightsInput
    connect?: StoryWhereUniqueInput
  }

  export type HighlightUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<HighlightCreateWithoutStoriesInput, HighlightUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: HighlightCreateOrConnectWithoutStoriesInput
    upsert?: HighlightUpsertWithoutStoriesInput
    connect?: HighlightWhereUniqueInput
    update?: XOR<XOR<HighlightUpdateToOneWithWhereWithoutStoriesInput, HighlightUpdateWithoutStoriesInput>, HighlightUncheckedUpdateWithoutStoriesInput>
  }

  export type StoryUpdateOneRequiredWithoutHighlightsNestedInput = {
    create?: XOR<StoryCreateWithoutHighlightsInput, StoryUncheckedCreateWithoutHighlightsInput>
    connectOrCreate?: StoryCreateOrConnectWithoutHighlightsInput
    upsert?: StoryUpsertWithoutHighlightsInput
    connect?: StoryWhereUniqueInput
    update?: XOR<XOR<StoryUpdateToOneWithWhereWithoutHighlightsInput, StoryUpdateWithoutHighlightsInput>, StoryUncheckedUpdateWithoutHighlightsInput>
  }

  export type UserCreateNestedOneWithoutStoriesInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type HighlightStoryCreateNestedManyWithoutStoryInput = {
    create?: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput> | HighlightStoryCreateWithoutStoryInput[] | HighlightStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutStoryInput | HighlightStoryCreateOrConnectWithoutStoryInput[]
    createMany?: HighlightStoryCreateManyStoryInputEnvelope
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutStoryInput = {
    create?: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput> | LikeCreateWithoutStoryInput[] | LikeUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutStoryInput | LikeCreateOrConnectWithoutStoryInput[]
    createMany?: LikeCreateManyStoryInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutStoryInput = {
    create?: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput> | CommentCreateWithoutStoryInput[] | CommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoryInput | CommentCreateOrConnectWithoutStoryInput[]
    createMany?: CommentCreateManyStoryInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type HighlightStoryUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput> | HighlightStoryCreateWithoutStoryInput[] | HighlightStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutStoryInput | HighlightStoryCreateOrConnectWithoutStoryInput[]
    createMany?: HighlightStoryCreateManyStoryInputEnvelope
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput> | LikeCreateWithoutStoryInput[] | LikeUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutStoryInput | LikeCreateOrConnectWithoutStoryInput[]
    createMany?: LikeCreateManyStoryInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutStoryInput = {
    create?: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput> | CommentCreateWithoutStoryInput[] | CommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoryInput | CommentCreateOrConnectWithoutStoryInput[]
    createMany?: CommentCreateManyStoryInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    upsert?: UserUpsertWithoutStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoriesInput, UserUpdateWithoutStoriesInput>, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type HighlightStoryUpdateManyWithoutStoryNestedInput = {
    create?: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput> | HighlightStoryCreateWithoutStoryInput[] | HighlightStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutStoryInput | HighlightStoryCreateOrConnectWithoutStoryInput[]
    upsert?: HighlightStoryUpsertWithWhereUniqueWithoutStoryInput | HighlightStoryUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: HighlightStoryCreateManyStoryInputEnvelope
    set?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    disconnect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    delete?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    update?: HighlightStoryUpdateWithWhereUniqueWithoutStoryInput | HighlightStoryUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: HighlightStoryUpdateManyWithWhereWithoutStoryInput | HighlightStoryUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutStoryNestedInput = {
    create?: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput> | LikeCreateWithoutStoryInput[] | LikeUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutStoryInput | LikeCreateOrConnectWithoutStoryInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutStoryInput | LikeUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: LikeCreateManyStoryInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutStoryInput | LikeUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutStoryInput | LikeUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutStoryNestedInput = {
    create?: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput> | CommentCreateWithoutStoryInput[] | CommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoryInput | CommentCreateOrConnectWithoutStoryInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStoryInput | CommentUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: CommentCreateManyStoryInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStoryInput | CommentUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStoryInput | CommentUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type HighlightStoryUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput> | HighlightStoryCreateWithoutStoryInput[] | HighlightStoryUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: HighlightStoryCreateOrConnectWithoutStoryInput | HighlightStoryCreateOrConnectWithoutStoryInput[]
    upsert?: HighlightStoryUpsertWithWhereUniqueWithoutStoryInput | HighlightStoryUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: HighlightStoryCreateManyStoryInputEnvelope
    set?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    disconnect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    delete?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    connect?: HighlightStoryWhereUniqueInput | HighlightStoryWhereUniqueInput[]
    update?: HighlightStoryUpdateWithWhereUniqueWithoutStoryInput | HighlightStoryUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: HighlightStoryUpdateManyWithWhereWithoutStoryInput | HighlightStoryUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput> | LikeCreateWithoutStoryInput[] | LikeUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutStoryInput | LikeCreateOrConnectWithoutStoryInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutStoryInput | LikeUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: LikeCreateManyStoryInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutStoryInput | LikeUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutStoryInput | LikeUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutStoryNestedInput = {
    create?: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput> | CommentCreateWithoutStoryInput[] | CommentUncheckedCreateWithoutStoryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoryInput | CommentCreateOrConnectWithoutStoryInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStoryInput | CommentUpsertWithWhereUniqueWithoutStoryInput[]
    createMany?: CommentCreateManyStoryInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStoryInput | CommentUpdateWithWhereUniqueWithoutStoryInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStoryInput | CommentUpdateManyWithWhereWithoutStoryInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutPostInput = {
    create?: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput> | TagCreateWithoutPostInput[] | TagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostInput | TagCreateOrConnectWithoutPostInput[]
    createMany?: TagCreateManyPostInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CollectionPostCreateNestedManyWithoutPostInput = {
    create?: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput> | CollectionPostCreateWithoutPostInput[] | CollectionPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutPostInput | CollectionPostCreateOrConnectWithoutPostInput[]
    createMany?: CollectionPostCreateManyPostInputEnvelope
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput> | TagCreateWithoutPostInput[] | TagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostInput | TagCreateOrConnectWithoutPostInput[]
    createMany?: TagCreateManyPostInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CollectionPostUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput> | CollectionPostCreateWithoutPostInput[] | CollectionPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutPostInput | CollectionPostCreateOrConnectWithoutPostInput[]
    createMany?: CollectionPostCreateManyPostInputEnvelope
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type LikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TagUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput> | TagCreateWithoutPostInput[] | TagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostInput | TagCreateOrConnectWithoutPostInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostInput | TagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagCreateManyPostInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostInput | TagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostInput | TagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CollectionPostUpdateManyWithoutPostNestedInput = {
    create?: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput> | CollectionPostCreateWithoutPostInput[] | CollectionPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutPostInput | CollectionPostCreateOrConnectWithoutPostInput[]
    upsert?: CollectionPostUpsertWithWhereUniqueWithoutPostInput | CollectionPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CollectionPostCreateManyPostInputEnvelope
    set?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    disconnect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    delete?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    update?: CollectionPostUpdateWithWhereUniqueWithoutPostInput | CollectionPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CollectionPostUpdateManyWithWhereWithoutPostInput | CollectionPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikeCreateManyPostInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput> | TagCreateWithoutPostInput[] | TagUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPostInput | TagCreateOrConnectWithoutPostInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPostInput | TagUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TagCreateManyPostInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPostInput | TagUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPostInput | TagUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CollectionPostUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput> | CollectionPostCreateWithoutPostInput[] | CollectionPostUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CollectionPostCreateOrConnectWithoutPostInput | CollectionPostCreateOrConnectWithoutPostInput[]
    upsert?: CollectionPostUpsertWithWhereUniqueWithoutPostInput | CollectionPostUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CollectionPostCreateManyPostInputEnvelope
    set?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    disconnect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    delete?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    connect?: CollectionPostWhereUniqueInput | CollectionPostWhereUniqueInput[]
    update?: CollectionPostUpdateWithWhereUniqueWithoutPostInput | CollectionPostUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CollectionPostUpdateManyWithWhereWithoutPostInput | CollectionPostUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput> | LikeCreateWithoutOwnerInput[] | LikeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutOwnerInput | LikeCreateOrConnectWithoutOwnerInput[]
    createMany?: LikeCreateManyOwnerInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput> | CommentCreateWithoutOwnerInput[] | CommentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput | CommentCreateOrConnectWithoutOwnerInput[]
    createMany?: CommentCreateManyOwnerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CollectionOwnerCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput> | CollectionOwnerCreateWithoutUserInput[] | CollectionOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutUserInput | CollectionOwnerCreateOrConnectWithoutUserInput[]
    createMany?: CollectionOwnerCreateManyUserInputEnvelope
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
  }

  export type HighlightOwnerCreateNestedManyWithoutUserInput = {
    create?: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput> | HighlightOwnerCreateWithoutUserInput[] | HighlightOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutUserInput | HighlightOwnerCreateOrConnectWithoutUserInput[]
    createMany?: HighlightOwnerCreateManyUserInputEnvelope
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
  }

  export type StoryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput> | StoryCreateWithoutOwnerInput[] | StoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutOwnerInput | StoryCreateOrConnectWithoutOwnerInput[]
    createMany?: StoryCreateManyOwnerInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput> | PostCreateWithoutOwnerInput[] | PostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOwnerInput | PostCreateOrConnectWithoutOwnerInput[]
    createMany?: PostCreateManyOwnerInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutReferenceUserInput = {
    create?: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput> | TagCreateWithoutReferenceUserInput[] | TagUncheckedCreateWithoutReferenceUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutReferenceUserInput | TagCreateOrConnectWithoutReferenceUserInput[]
    createMany?: TagCreateManyReferenceUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput> | LikeCreateWithoutOwnerInput[] | LikeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutOwnerInput | LikeCreateOrConnectWithoutOwnerInput[]
    createMany?: LikeCreateManyOwnerInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput> | CommentCreateWithoutOwnerInput[] | CommentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput | CommentCreateOrConnectWithoutOwnerInput[]
    createMany?: CommentCreateManyOwnerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CollectionOwnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput> | CollectionOwnerCreateWithoutUserInput[] | CollectionOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutUserInput | CollectionOwnerCreateOrConnectWithoutUserInput[]
    createMany?: CollectionOwnerCreateManyUserInputEnvelope
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
  }

  export type HighlightOwnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput> | HighlightOwnerCreateWithoutUserInput[] | HighlightOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutUserInput | HighlightOwnerCreateOrConnectWithoutUserInput[]
    createMany?: HighlightOwnerCreateManyUserInputEnvelope
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
  }

  export type StoryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput> | StoryCreateWithoutOwnerInput[] | StoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutOwnerInput | StoryCreateOrConnectWithoutOwnerInput[]
    createMany?: StoryCreateManyOwnerInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput> | PostCreateWithoutOwnerInput[] | PostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOwnerInput | PostCreateOrConnectWithoutOwnerInput[]
    createMany?: PostCreateManyOwnerInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutReferenceUserInput = {
    create?: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput> | TagCreateWithoutReferenceUserInput[] | TagUncheckedCreateWithoutReferenceUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutReferenceUserInput | TagCreateOrConnectWithoutReferenceUserInput[]
    createMany?: TagCreateManyReferenceUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput> | LikeCreateWithoutOwnerInput[] | LikeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutOwnerInput | LikeCreateOrConnectWithoutOwnerInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutOwnerInput | LikeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LikeCreateManyOwnerInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutOwnerInput | LikeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutOwnerInput | LikeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput> | CommentCreateWithoutOwnerInput[] | CommentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput | CommentCreateOrConnectWithoutOwnerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutOwnerInput | CommentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CommentCreateManyOwnerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutOwnerInput | CommentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutOwnerInput | CommentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CollectionOwnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput> | CollectionOwnerCreateWithoutUserInput[] | CollectionOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutUserInput | CollectionOwnerCreateOrConnectWithoutUserInput[]
    upsert?: CollectionOwnerUpsertWithWhereUniqueWithoutUserInput | CollectionOwnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionOwnerCreateManyUserInputEnvelope
    set?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    disconnect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    delete?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    update?: CollectionOwnerUpdateWithWhereUniqueWithoutUserInput | CollectionOwnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionOwnerUpdateManyWithWhereWithoutUserInput | CollectionOwnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
  }

  export type HighlightOwnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput> | HighlightOwnerCreateWithoutUserInput[] | HighlightOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutUserInput | HighlightOwnerCreateOrConnectWithoutUserInput[]
    upsert?: HighlightOwnerUpsertWithWhereUniqueWithoutUserInput | HighlightOwnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HighlightOwnerCreateManyUserInputEnvelope
    set?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    disconnect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    delete?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    update?: HighlightOwnerUpdateWithWhereUniqueWithoutUserInput | HighlightOwnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HighlightOwnerUpdateManyWithWhereWithoutUserInput | HighlightOwnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
  }

  export type StoryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput> | StoryCreateWithoutOwnerInput[] | StoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutOwnerInput | StoryCreateOrConnectWithoutOwnerInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutOwnerInput | StoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoryCreateManyOwnerInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutOwnerInput | StoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutOwnerInput | StoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type PostUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput> | PostCreateWithoutOwnerInput[] | PostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOwnerInput | PostCreateOrConnectWithoutOwnerInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutOwnerInput | PostUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PostCreateManyOwnerInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutOwnerInput | PostUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PostUpdateManyWithWhereWithoutOwnerInput | PostUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TagUpdateManyWithoutReferenceUserNestedInput = {
    create?: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput> | TagCreateWithoutReferenceUserInput[] | TagUncheckedCreateWithoutReferenceUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutReferenceUserInput | TagCreateOrConnectWithoutReferenceUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutReferenceUserInput | TagUpsertWithWhereUniqueWithoutReferenceUserInput[]
    createMany?: TagCreateManyReferenceUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutReferenceUserInput | TagUpdateWithWhereUniqueWithoutReferenceUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutReferenceUserInput | TagUpdateManyWithWhereWithoutReferenceUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput> | LikeCreateWithoutOwnerInput[] | LikeUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutOwnerInput | LikeCreateOrConnectWithoutOwnerInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutOwnerInput | LikeUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LikeCreateManyOwnerInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutOwnerInput | LikeUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutOwnerInput | LikeUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput> | CommentCreateWithoutOwnerInput[] | CommentUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutOwnerInput | CommentCreateOrConnectWithoutOwnerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutOwnerInput | CommentUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CommentCreateManyOwnerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutOwnerInput | CommentUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutOwnerInput | CommentUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput> | CollectionOwnerCreateWithoutUserInput[] | CollectionOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CollectionOwnerCreateOrConnectWithoutUserInput | CollectionOwnerCreateOrConnectWithoutUserInput[]
    upsert?: CollectionOwnerUpsertWithWhereUniqueWithoutUserInput | CollectionOwnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CollectionOwnerCreateManyUserInputEnvelope
    set?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    disconnect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    delete?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    connect?: CollectionOwnerWhereUniqueInput | CollectionOwnerWhereUniqueInput[]
    update?: CollectionOwnerUpdateWithWhereUniqueWithoutUserInput | CollectionOwnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CollectionOwnerUpdateManyWithWhereWithoutUserInput | CollectionOwnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
  }

  export type HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput> | HighlightOwnerCreateWithoutUserInput[] | HighlightOwnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HighlightOwnerCreateOrConnectWithoutUserInput | HighlightOwnerCreateOrConnectWithoutUserInput[]
    upsert?: HighlightOwnerUpsertWithWhereUniqueWithoutUserInput | HighlightOwnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HighlightOwnerCreateManyUserInputEnvelope
    set?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    disconnect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    delete?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    connect?: HighlightOwnerWhereUniqueInput | HighlightOwnerWhereUniqueInput[]
    update?: HighlightOwnerUpdateWithWhereUniqueWithoutUserInput | HighlightOwnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HighlightOwnerUpdateManyWithWhereWithoutUserInput | HighlightOwnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
  }

  export type StoryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput> | StoryCreateWithoutOwnerInput[] | StoryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutOwnerInput | StoryCreateOrConnectWithoutOwnerInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutOwnerInput | StoryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StoryCreateManyOwnerInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutOwnerInput | StoryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutOwnerInput | StoryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput> | PostCreateWithoutOwnerInput[] | PostUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PostCreateOrConnectWithoutOwnerInput | PostCreateOrConnectWithoutOwnerInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutOwnerInput | PostUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PostCreateManyOwnerInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutOwnerInput | PostUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PostUpdateManyWithWhereWithoutOwnerInput | PostUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutReferenceUserNestedInput = {
    create?: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput> | TagCreateWithoutReferenceUserInput[] | TagUncheckedCreateWithoutReferenceUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutReferenceUserInput | TagCreateOrConnectWithoutReferenceUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutReferenceUserInput | TagUpsertWithWhereUniqueWithoutReferenceUserInput[]
    createMany?: TagCreateManyReferenceUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutReferenceUserInput | TagUpdateWithWhereUniqueWithoutReferenceUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutReferenceUserInput | TagUpdateManyWithWhereWithoutReferenceUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type PostCreateWithoutLikesInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: TagCreateNestedManyWithoutPostInput
    collections?: CollectionPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: TagUncheckedCreateNestedManyWithoutPostInput
    collections?: CollectionPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type StoryCreateWithoutLikesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStoriesInput
    highlights?: HighlightStoryCreateNestedManyWithoutStoryInput
    comments?: CommentCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutLikesInput = {
    id?: string
    content: string
    ownerId: string
    createdAt?: Date | string
    highlights?: HighlightStoryUncheckedCreateNestedManyWithoutStoryInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutLikesInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutLikesInput, StoryUncheckedCreateWithoutLikesInput>
  }

  export type CommentCreateWithoutLikesInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    story?: StoryCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutLikesInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutLikesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    tags?: TagUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type StoryUpsertWithoutLikesInput = {
    update: XOR<StoryUpdateWithoutLikesInput, StoryUncheckedUpdateWithoutLikesInput>
    create: XOR<StoryCreateWithoutLikesInput, StoryUncheckedCreateWithoutLikesInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutLikesInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutLikesInput, StoryUncheckedUpdateWithoutLikesInput>
  }

  export type StoryUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoriesNestedInput
    highlights?: HighlightStoryUpdateManyWithoutStoryNestedInput
    comments?: CommentUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightStoryUncheckedUpdateManyWithoutStoryNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type CommentUpsertWithoutLikesInput = {
    update: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
    create: XOR<CommentCreateWithoutLikesInput, CommentUncheckedCreateWithoutLikesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutLikesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutLikesInput, CommentUncheckedUpdateWithoutLikesInput>
  }

  export type CommentUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    story?: StoryUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutLikesInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    likes?: LikeCreateNestedManyWithoutPostInput
    tags?: TagCreateNestedManyWithoutPostInput
    collections?: CollectionPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    tags?: TagUncheckedCreateNestedManyWithoutPostInput
    collections?: CollectionPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type StoryCreateWithoutCommentsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStoriesInput
    highlights?: HighlightStoryCreateNestedManyWithoutStoryInput
    likes?: LikeCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutCommentsInput = {
    id?: string
    content: string
    ownerId: string
    createdAt?: Date | string
    highlights?: HighlightStoryUncheckedCreateNestedManyWithoutStoryInput
    likes?: LikeUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutCommentsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutCommentsInput, StoryUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    story?: StoryCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type LikeCreateWithoutCommentInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLikesInput
    post?: PostCreateNestedOneWithoutLikesInput
    story?: StoryCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutCommentInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    ownerId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutCommentInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeCreateManyCommentInputEnvelope = {
    data: LikeCreateManyCommentInput | LikeCreateManyCommentInput[]
  }

  export type CommentCreateWithoutReplyToInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    story?: StoryCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    likes?: LikeCreateNestedManyWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutReplyToInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutReplyToInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput>
  }

  export type CommentCreateManyReplyToInputEnvelope = {
    data: CommentCreateManyReplyToInput | CommentCreateManyReplyToInput[]
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    tags?: TagUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type StoryUpsertWithoutCommentsInput = {
    update: XOR<StoryUpdateWithoutCommentsInput, StoryUncheckedUpdateWithoutCommentsInput>
    create: XOR<StoryCreateWithoutCommentsInput, StoryUncheckedCreateWithoutCommentsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutCommentsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutCommentsInput, StoryUncheckedUpdateWithoutCommentsInput>
  }

  export type StoryUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoriesNestedInput
    highlights?: HighlightStoryUpdateManyWithoutStoryNestedInput
    likes?: LikeUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutCommentsInput = {
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightStoryUncheckedUpdateManyWithoutStoryNestedInput
    likes?: LikeUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    story?: StoryUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
    create: XOR<LikeCreateWithoutCommentInput, LikeUncheckedCreateWithoutCommentInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutCommentInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutCommentInput, LikeUncheckedUpdateWithoutCommentInput>
  }

  export type LikeUpdateManyWithWhereWithoutCommentInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutCommentInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    postId?: StringNullableFilter<"Like"> | string | null
    storyId?: StringNullableFilter<"Like"> | string | null
    ownerId?: StringFilter<"Like"> | string
    commentId?: StringNullableFilter<"Like"> | string | null
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutReplyToInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReplyToInput, CommentUncheckedUpdateWithoutReplyToInput>
    create: XOR<CommentCreateWithoutReplyToInput, CommentUncheckedCreateWithoutReplyToInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReplyToInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReplyToInput, CommentUncheckedUpdateWithoutReplyToInput>
  }

  export type CommentUpdateManyWithWhereWithoutReplyToInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReplyToInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringNullableFilter<"Comment"> | string | null
    storyId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    ownerId?: StringFilter<"Comment"> | string
    isReply?: BoolFilter<"Comment"> | boolean
    replyToId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type CollectionOwnerCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionOwnerUncheckedCreateWithoutCollectionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CollectionOwnerCreateOrConnectWithoutCollectionInput = {
    where: CollectionOwnerWhereUniqueInput
    create: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionOwnerCreateManyCollectionInputEnvelope = {
    data: CollectionOwnerCreateManyCollectionInput | CollectionOwnerCreateManyCollectionInput[]
  }

  export type CollectionPostCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutCollectionsInput
  }

  export type CollectionPostUncheckedCreateWithoutCollectionInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type CollectionPostCreateOrConnectWithoutCollectionInput = {
    where: CollectionPostWhereUniqueInput
    create: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionPostCreateManyCollectionInputEnvelope = {
    data: CollectionPostCreateManyCollectionInput | CollectionPostCreateManyCollectionInput[]
  }

  export type CollectionOwnerUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionOwnerWhereUniqueInput
    update: XOR<CollectionOwnerUpdateWithoutCollectionInput, CollectionOwnerUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionOwnerCreateWithoutCollectionInput, CollectionOwnerUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionOwnerUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionOwnerWhereUniqueInput
    data: XOR<CollectionOwnerUpdateWithoutCollectionInput, CollectionOwnerUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionOwnerUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionOwnerScalarWhereInput
    data: XOR<CollectionOwnerUpdateManyMutationInput, CollectionOwnerUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionOwnerScalarWhereInput = {
    AND?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
    OR?: CollectionOwnerScalarWhereInput[]
    NOT?: CollectionOwnerScalarWhereInput | CollectionOwnerScalarWhereInput[]
    id?: StringFilter<"CollectionOwner"> | string
    collectionId?: StringFilter<"CollectionOwner"> | string
    userId?: StringFilter<"CollectionOwner"> | string
    createdAt?: DateTimeFilter<"CollectionOwner"> | Date | string
  }

  export type CollectionPostUpsertWithWhereUniqueWithoutCollectionInput = {
    where: CollectionPostWhereUniqueInput
    update: XOR<CollectionPostUpdateWithoutCollectionInput, CollectionPostUncheckedUpdateWithoutCollectionInput>
    create: XOR<CollectionPostCreateWithoutCollectionInput, CollectionPostUncheckedCreateWithoutCollectionInput>
  }

  export type CollectionPostUpdateWithWhereUniqueWithoutCollectionInput = {
    where: CollectionPostWhereUniqueInput
    data: XOR<CollectionPostUpdateWithoutCollectionInput, CollectionPostUncheckedUpdateWithoutCollectionInput>
  }

  export type CollectionPostUpdateManyWithWhereWithoutCollectionInput = {
    where: CollectionPostScalarWhereInput
    data: XOR<CollectionPostUpdateManyMutationInput, CollectionPostUncheckedUpdateManyWithoutCollectionInput>
  }

  export type CollectionPostScalarWhereInput = {
    AND?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
    OR?: CollectionPostScalarWhereInput[]
    NOT?: CollectionPostScalarWhereInput | CollectionPostScalarWhereInput[]
    id?: StringFilter<"CollectionPost"> | string
    collectionId?: StringFilter<"CollectionPost"> | string
    postId?: StringFilter<"CollectionPost"> | string
    createdAt?: DateTimeFilter<"CollectionPost"> | Date | string
  }

  export type CollectionCreateWithoutOwnersInput = {
    id?: string
    title: string
    createdAt?: Date | string
    posts?: CollectionPostCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutOwnersInput = {
    id?: string
    title: string
    createdAt?: Date | string
    posts?: CollectionPostUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutOwnersInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutOwnersInput, CollectionUncheckedCreateWithoutOwnersInput>
  }

  export type UserCreateWithoutCollectionsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionUpsertWithoutOwnersInput = {
    update: XOR<CollectionUpdateWithoutOwnersInput, CollectionUncheckedUpdateWithoutOwnersInput>
    create: XOR<CollectionCreateWithoutOwnersInput, CollectionUncheckedCreateWithoutOwnersInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutOwnersInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutOwnersInput, CollectionUncheckedUpdateWithoutOwnersInput>
  }

  export type CollectionUpdateWithoutOwnersInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: CollectionPostUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutOwnersInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: CollectionPostUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
    create: XOR<UserCreateWithoutCollectionsInput, UserUncheckedCreateWithoutCollectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionsInput, UserUncheckedUpdateWithoutCollectionsInput>
  }

  export type UserUpdateWithoutCollectionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type CollectionCreateWithoutPostsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    owners?: CollectionOwnerCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutPostsInput = {
    id?: string
    title: string
    createdAt?: Date | string
    owners?: CollectionOwnerUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutPostsInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutPostsInput, CollectionUncheckedCreateWithoutPostsInput>
  }

  export type PostCreateWithoutCollectionsInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    likes?: LikeCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: TagCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCollectionsInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: TagUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCollectionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCollectionsInput, PostUncheckedCreateWithoutCollectionsInput>
  }

  export type CollectionUpsertWithoutPostsInput = {
    update: XOR<CollectionUpdateWithoutPostsInput, CollectionUncheckedUpdateWithoutPostsInput>
    create: XOR<CollectionCreateWithoutPostsInput, CollectionUncheckedCreateWithoutPostsInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutPostsInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutPostsInput, CollectionUncheckedUpdateWithoutPostsInput>
  }

  export type CollectionUpdateWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CollectionOwnerUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutPostsInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: CollectionOwnerUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type PostUpsertWithoutCollectionsInput = {
    update: XOR<PostUpdateWithoutCollectionsInput, PostUncheckedUpdateWithoutCollectionsInput>
    create: XOR<PostCreateWithoutCollectionsInput, PostUncheckedCreateWithoutCollectionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCollectionsInput, PostUncheckedUpdateWithoutCollectionsInput>
  }

  export type PostUpdateWithoutCollectionsInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    tags?: TagUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCollectionsInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutTagsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutPostsInput
    likes?: LikeCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    collections?: CollectionPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    ownerId: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    collections?: CollectionPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutPostsNestedInput
    likes?: LikeUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    ownerId?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type HighlightOwnerCreateWithoutHighlightInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightOwnerUncheckedCreateWithoutHighlightInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerCreateOrConnectWithoutHighlightInput = {
    where: HighlightOwnerWhereUniqueInput
    create: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightOwnerCreateManyHighlightInputEnvelope = {
    data: HighlightOwnerCreateManyHighlightInput | HighlightOwnerCreateManyHighlightInput[]
  }

  export type HighlightStoryCreateWithoutHighlightInput = {
    id?: string
    createdAt?: Date | string
    story: StoryCreateNestedOneWithoutHighlightsInput
  }

  export type HighlightStoryUncheckedCreateWithoutHighlightInput = {
    id?: string
    storyId: string
    createdAt?: Date | string
  }

  export type HighlightStoryCreateOrConnectWithoutHighlightInput = {
    where: HighlightStoryWhereUniqueInput
    create: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightStoryCreateManyHighlightInputEnvelope = {
    data: HighlightStoryCreateManyHighlightInput | HighlightStoryCreateManyHighlightInput[]
  }

  export type HighlightOwnerUpsertWithWhereUniqueWithoutHighlightInput = {
    where: HighlightOwnerWhereUniqueInput
    update: XOR<HighlightOwnerUpdateWithoutHighlightInput, HighlightOwnerUncheckedUpdateWithoutHighlightInput>
    create: XOR<HighlightOwnerCreateWithoutHighlightInput, HighlightOwnerUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightOwnerUpdateWithWhereUniqueWithoutHighlightInput = {
    where: HighlightOwnerWhereUniqueInput
    data: XOR<HighlightOwnerUpdateWithoutHighlightInput, HighlightOwnerUncheckedUpdateWithoutHighlightInput>
  }

  export type HighlightOwnerUpdateManyWithWhereWithoutHighlightInput = {
    where: HighlightOwnerScalarWhereInput
    data: XOR<HighlightOwnerUpdateManyMutationInput, HighlightOwnerUncheckedUpdateManyWithoutHighlightInput>
  }

  export type HighlightOwnerScalarWhereInput = {
    AND?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
    OR?: HighlightOwnerScalarWhereInput[]
    NOT?: HighlightOwnerScalarWhereInput | HighlightOwnerScalarWhereInput[]
    id?: StringFilter<"HighlightOwner"> | string
    highlightId?: StringFilter<"HighlightOwner"> | string
    userId?: StringFilter<"HighlightOwner"> | string
    createdAt?: DateTimeFilter<"HighlightOwner"> | Date | string
  }

  export type HighlightStoryUpsertWithWhereUniqueWithoutHighlightInput = {
    where: HighlightStoryWhereUniqueInput
    update: XOR<HighlightStoryUpdateWithoutHighlightInput, HighlightStoryUncheckedUpdateWithoutHighlightInput>
    create: XOR<HighlightStoryCreateWithoutHighlightInput, HighlightStoryUncheckedCreateWithoutHighlightInput>
  }

  export type HighlightStoryUpdateWithWhereUniqueWithoutHighlightInput = {
    where: HighlightStoryWhereUniqueInput
    data: XOR<HighlightStoryUpdateWithoutHighlightInput, HighlightStoryUncheckedUpdateWithoutHighlightInput>
  }

  export type HighlightStoryUpdateManyWithWhereWithoutHighlightInput = {
    where: HighlightStoryScalarWhereInput
    data: XOR<HighlightStoryUpdateManyMutationInput, HighlightStoryUncheckedUpdateManyWithoutHighlightInput>
  }

  export type HighlightStoryScalarWhereInput = {
    AND?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
    OR?: HighlightStoryScalarWhereInput[]
    NOT?: HighlightStoryScalarWhereInput | HighlightStoryScalarWhereInput[]
    id?: StringFilter<"HighlightStory"> | string
    highlightId?: StringFilter<"HighlightStory"> | string
    storyId?: StringFilter<"HighlightStory"> | string
    createdAt?: DateTimeFilter<"HighlightStory"> | Date | string
  }

  export type HighlightCreateWithoutOwnersInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    stories?: HighlightStoryCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUncheckedCreateWithoutOwnersInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    stories?: HighlightStoryUncheckedCreateNestedManyWithoutHighlightInput
  }

  export type HighlightCreateOrConnectWithoutOwnersInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutOwnersInput, HighlightUncheckedCreateWithoutOwnersInput>
  }

  export type UserCreateWithoutHighlightsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutHighlightsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutHighlightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
  }

  export type HighlightUpsertWithoutOwnersInput = {
    update: XOR<HighlightUpdateWithoutOwnersInput, HighlightUncheckedUpdateWithoutOwnersInput>
    create: XOR<HighlightCreateWithoutOwnersInput, HighlightUncheckedCreateWithoutOwnersInput>
    where?: HighlightWhereInput
  }

  export type HighlightUpdateToOneWithWhereWithoutOwnersInput = {
    where?: HighlightWhereInput
    data: XOR<HighlightUpdateWithoutOwnersInput, HighlightUncheckedUpdateWithoutOwnersInput>
  }

  export type HighlightUpdateWithoutOwnersInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: HighlightStoryUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateWithoutOwnersInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stories?: HighlightStoryUncheckedUpdateManyWithoutHighlightNestedInput
  }

  export type UserUpsertWithoutHighlightsInput = {
    update: XOR<UserUpdateWithoutHighlightsInput, UserUncheckedUpdateWithoutHighlightsInput>
    create: XOR<UserCreateWithoutHighlightsInput, UserUncheckedCreateWithoutHighlightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHighlightsInput, UserUncheckedUpdateWithoutHighlightsInput>
  }

  export type UserUpdateWithoutHighlightsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHighlightsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type HighlightCreateWithoutStoriesInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    owners?: HighlightOwnerCreateNestedManyWithoutHighlightInput
  }

  export type HighlightUncheckedCreateWithoutStoriesInput = {
    id?: string
    coverPhoto?: string | null
    title: string
    createdAt?: Date | string
    owners?: HighlightOwnerUncheckedCreateNestedManyWithoutHighlightInput
  }

  export type HighlightCreateOrConnectWithoutStoriesInput = {
    where: HighlightWhereUniqueInput
    create: XOR<HighlightCreateWithoutStoriesInput, HighlightUncheckedCreateWithoutStoriesInput>
  }

  export type StoryCreateWithoutHighlightsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutStoriesInput
    likes?: LikeCreateNestedManyWithoutStoryInput
    comments?: CommentCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutHighlightsInput = {
    id?: string
    content: string
    ownerId: string
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutStoryInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutHighlightsInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutHighlightsInput, StoryUncheckedCreateWithoutHighlightsInput>
  }

  export type HighlightUpsertWithoutStoriesInput = {
    update: XOR<HighlightUpdateWithoutStoriesInput, HighlightUncheckedUpdateWithoutStoriesInput>
    create: XOR<HighlightCreateWithoutStoriesInput, HighlightUncheckedCreateWithoutStoriesInput>
    where?: HighlightWhereInput
  }

  export type HighlightUpdateToOneWithWhereWithoutStoriesInput = {
    where?: HighlightWhereInput
    data: XOR<HighlightUpdateWithoutStoriesInput, HighlightUncheckedUpdateWithoutStoriesInput>
  }

  export type HighlightUpdateWithoutStoriesInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: HighlightOwnerUpdateManyWithoutHighlightNestedInput
  }

  export type HighlightUncheckedUpdateWithoutStoriesInput = {
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: HighlightOwnerUncheckedUpdateManyWithoutHighlightNestedInput
  }

  export type StoryUpsertWithoutHighlightsInput = {
    update: XOR<StoryUpdateWithoutHighlightsInput, StoryUncheckedUpdateWithoutHighlightsInput>
    create: XOR<StoryCreateWithoutHighlightsInput, StoryUncheckedCreateWithoutHighlightsInput>
    where?: StoryWhereInput
  }

  export type StoryUpdateToOneWithWhereWithoutHighlightsInput = {
    where?: StoryWhereInput
    data: XOR<StoryUpdateWithoutHighlightsInput, StoryUncheckedUpdateWithoutHighlightsInput>
  }

  export type StoryUpdateWithoutHighlightsInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutStoriesNestedInput
    likes?: LikeUpdateManyWithoutStoryNestedInput
    comments?: CommentUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutHighlightsInput = {
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutStoryNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type UserCreateWithoutStoriesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutStoriesInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
  }

  export type HighlightStoryCreateWithoutStoryInput = {
    id?: string
    createdAt?: Date | string
    highlight: HighlightCreateNestedOneWithoutStoriesInput
  }

  export type HighlightStoryUncheckedCreateWithoutStoryInput = {
    id?: string
    highlightId: string
    createdAt?: Date | string
  }

  export type HighlightStoryCreateOrConnectWithoutStoryInput = {
    where: HighlightStoryWhereUniqueInput
    create: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput>
  }

  export type HighlightStoryCreateManyStoryInputEnvelope = {
    data: HighlightStoryCreateManyStoryInput | HighlightStoryCreateManyStoryInput[]
  }

  export type LikeCreateWithoutStoryInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLikesInput
    post?: PostCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutStoryInput = {
    id?: string
    postId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutStoryInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput>
  }

  export type LikeCreateManyStoryInputEnvelope = {
    data: LikeCreateManyStoryInput | LikeCreateManyStoryInput[]
  }

  export type CommentCreateWithoutStoryInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutStoryInput = {
    id?: string
    postId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutStoryInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput>
  }

  export type CommentCreateManyStoryInputEnvelope = {
    data: CommentCreateManyStoryInput | CommentCreateManyStoryInput[]
  }

  export type UserUpsertWithoutStoriesInput = {
    update: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserUpdateWithoutStoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type HighlightStoryUpsertWithWhereUniqueWithoutStoryInput = {
    where: HighlightStoryWhereUniqueInput
    update: XOR<HighlightStoryUpdateWithoutStoryInput, HighlightStoryUncheckedUpdateWithoutStoryInput>
    create: XOR<HighlightStoryCreateWithoutStoryInput, HighlightStoryUncheckedCreateWithoutStoryInput>
  }

  export type HighlightStoryUpdateWithWhereUniqueWithoutStoryInput = {
    where: HighlightStoryWhereUniqueInput
    data: XOR<HighlightStoryUpdateWithoutStoryInput, HighlightStoryUncheckedUpdateWithoutStoryInput>
  }

  export type HighlightStoryUpdateManyWithWhereWithoutStoryInput = {
    where: HighlightStoryScalarWhereInput
    data: XOR<HighlightStoryUpdateManyMutationInput, HighlightStoryUncheckedUpdateManyWithoutStoryInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutStoryInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutStoryInput, LikeUncheckedUpdateWithoutStoryInput>
    create: XOR<LikeCreateWithoutStoryInput, LikeUncheckedCreateWithoutStoryInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutStoryInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutStoryInput, LikeUncheckedUpdateWithoutStoryInput>
  }

  export type LikeUpdateManyWithWhereWithoutStoryInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutStoryInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutStoryInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutStoryInput, CommentUncheckedUpdateWithoutStoryInput>
    create: XOR<CommentCreateWithoutStoryInput, CommentUncheckedCreateWithoutStoryInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutStoryInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutStoryInput, CommentUncheckedUpdateWithoutStoryInput>
  }

  export type CommentUpdateManyWithWhereWithoutStoryInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutStoryInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type LikeCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLikesInput
    story?: StoryCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutPostInput = {
    id?: string
    storyId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutPostInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeCreateManyPostInputEnvelope = {
    data: LikeCreateManyPostInput | LikeCreateManyPostInput[]
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    story?: StoryCreateNestedOneWithoutCommentsInput
    owner: UserCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
  }

  export type TagCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    referenceUser: UserCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutPostInput = {
    id?: string
    referenceUserId: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPostInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput>
  }

  export type TagCreateManyPostInputEnvelope = {
    data: TagCreateManyPostInput | TagCreateManyPostInput[]
  }

  export type CollectionPostCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutPostsInput
  }

  export type CollectionPostUncheckedCreateWithoutPostInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type CollectionPostCreateOrConnectWithoutPostInput = {
    where: CollectionPostWhereUniqueInput
    create: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput>
  }

  export type CollectionPostCreateManyPostInputEnvelope = {
    data: CollectionPostCreateManyPostInput | CollectionPostCreateManyPostInput[]
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
  }

  export type LikeUpdateManyWithWhereWithoutPostInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type TagUpsertWithWhereUniqueWithoutPostInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPostInput, TagUncheckedUpdateWithoutPostInput>
    create: XOR<TagCreateWithoutPostInput, TagUncheckedCreateWithoutPostInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPostInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPostInput, TagUncheckedUpdateWithoutPostInput>
  }

  export type TagUpdateManyWithWhereWithoutPostInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPostInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    referenceUserId?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    postId?: StringNullableFilter<"Tag"> | string | null
  }

  export type CollectionPostUpsertWithWhereUniqueWithoutPostInput = {
    where: CollectionPostWhereUniqueInput
    update: XOR<CollectionPostUpdateWithoutPostInput, CollectionPostUncheckedUpdateWithoutPostInput>
    create: XOR<CollectionPostCreateWithoutPostInput, CollectionPostUncheckedCreateWithoutPostInput>
  }

  export type CollectionPostUpdateWithWhereUniqueWithoutPostInput = {
    where: CollectionPostWhereUniqueInput
    data: XOR<CollectionPostUpdateWithoutPostInput, CollectionPostUncheckedUpdateWithoutPostInput>
  }

  export type CollectionPostUpdateManyWithWhereWithoutPostInput = {
    where: CollectionPostScalarWhereInput
    data: XOR<CollectionPostUpdateManyMutationInput, CollectionPostUncheckedUpdateManyWithoutPostInput>
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: string
    createdAt?: Date | string
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string
    targetId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
  }

  export type FollowCreateWithoutFollowingInput = {
    id?: string
    createdAt?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowingInput = {
    id?: string
    sourceId: string
    createdAt?: Date | string
  }

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[]
  }

  export type LikeCreateWithoutOwnerInput = {
    id?: string
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutLikesInput
    story?: StoryCreateNestedOneWithoutLikesInput
    comment?: CommentCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutOwnerInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutOwnerInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput>
  }

  export type LikeCreateManyOwnerInputEnvelope = {
    data: LikeCreateManyOwnerInput | LikeCreateManyOwnerInput[]
  }

  export type CommentCreateWithoutOwnerInput = {
    id?: string
    content: string
    isReply?: boolean
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutCommentsInput
    story?: StoryCreateNestedOneWithoutCommentsInput
    replyTo?: CommentCreateNestedOneWithoutRepliesInput
    likes?: LikeCreateNestedManyWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutReplyToInput
  }

  export type CommentUncheckedCreateWithoutOwnerInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutCommentInput
    replies?: CommentUncheckedCreateNestedManyWithoutReplyToInput
  }

  export type CommentCreateOrConnectWithoutOwnerInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput>
  }

  export type CommentCreateManyOwnerInputEnvelope = {
    data: CommentCreateManyOwnerInput | CommentCreateManyOwnerInput[]
  }

  export type CollectionOwnerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    collection: CollectionCreateNestedOneWithoutOwnersInput
  }

  export type CollectionOwnerUncheckedCreateWithoutUserInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type CollectionOwnerCreateOrConnectWithoutUserInput = {
    where: CollectionOwnerWhereUniqueInput
    create: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput>
  }

  export type CollectionOwnerCreateManyUserInputEnvelope = {
    data: CollectionOwnerCreateManyUserInput | CollectionOwnerCreateManyUserInput[]
  }

  export type HighlightOwnerCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    highlight: HighlightCreateNestedOneWithoutOwnersInput
  }

  export type HighlightOwnerUncheckedCreateWithoutUserInput = {
    id?: string
    highlightId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerCreateOrConnectWithoutUserInput = {
    where: HighlightOwnerWhereUniqueInput
    create: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput>
  }

  export type HighlightOwnerCreateManyUserInputEnvelope = {
    data: HighlightOwnerCreateManyUserInput | HighlightOwnerCreateManyUserInput[]
  }

  export type StoryCreateWithoutOwnerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    highlights?: HighlightStoryCreateNestedManyWithoutStoryInput
    likes?: LikeCreateNestedManyWithoutStoryInput
    comments?: CommentCreateNestedManyWithoutStoryInput
  }

  export type StoryUncheckedCreateWithoutOwnerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    highlights?: HighlightStoryUncheckedCreateNestedManyWithoutStoryInput
    likes?: LikeUncheckedCreateNestedManyWithoutStoryInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoryInput
  }

  export type StoryCreateOrConnectWithoutOwnerInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput>
  }

  export type StoryCreateManyOwnerInputEnvelope = {
    data: StoryCreateManyOwnerInput | StoryCreateManyOwnerInput[]
  }

  export type PostCreateWithoutOwnerInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    tags?: TagCreateNestedManyWithoutPostInput
    collections?: CollectionPostCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutOwnerInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    tags?: TagUncheckedCreateNestedManyWithoutPostInput
    collections?: CollectionPostUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutOwnerInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput>
  }

  export type PostCreateManyOwnerInputEnvelope = {
    data: PostCreateManyOwnerInput | PostCreateManyOwnerInput[]
  }

  export type TagCreateWithoutReferenceUserInput = {
    id?: string
    createdAt?: Date | string
    post?: PostCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutReferenceUserInput = {
    id?: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type TagCreateOrConnectWithoutReferenceUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput>
  }

  export type TagCreateManyReferenceUserInputEnvelope = {
    data: TagCreateManyReferenceUserInput | TagCreateManyReferenceUserInput[]
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    id?: StringFilter<"Follow"> | string
    sourceId?: StringFilter<"Follow"> | string
    targetId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutOwnerInput, LikeUncheckedUpdateWithoutOwnerInput>
    create: XOR<LikeCreateWithoutOwnerInput, LikeUncheckedCreateWithoutOwnerInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutOwnerInput, LikeUncheckedUpdateWithoutOwnerInput>
  }

  export type LikeUpdateManyWithWhereWithoutOwnerInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutOwnerInput, CommentUncheckedUpdateWithoutOwnerInput>
    create: XOR<CommentCreateWithoutOwnerInput, CommentUncheckedCreateWithoutOwnerInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutOwnerInput, CommentUncheckedUpdateWithoutOwnerInput>
  }

  export type CommentUpdateManyWithWhereWithoutOwnerInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CollectionOwnerUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionOwnerWhereUniqueInput
    update: XOR<CollectionOwnerUpdateWithoutUserInput, CollectionOwnerUncheckedUpdateWithoutUserInput>
    create: XOR<CollectionOwnerCreateWithoutUserInput, CollectionOwnerUncheckedCreateWithoutUserInput>
  }

  export type CollectionOwnerUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionOwnerWhereUniqueInput
    data: XOR<CollectionOwnerUpdateWithoutUserInput, CollectionOwnerUncheckedUpdateWithoutUserInput>
  }

  export type CollectionOwnerUpdateManyWithWhereWithoutUserInput = {
    where: CollectionOwnerScalarWhereInput
    data: XOR<CollectionOwnerUpdateManyMutationInput, CollectionOwnerUncheckedUpdateManyWithoutUserInput>
  }

  export type HighlightOwnerUpsertWithWhereUniqueWithoutUserInput = {
    where: HighlightOwnerWhereUniqueInput
    update: XOR<HighlightOwnerUpdateWithoutUserInput, HighlightOwnerUncheckedUpdateWithoutUserInput>
    create: XOR<HighlightOwnerCreateWithoutUserInput, HighlightOwnerUncheckedCreateWithoutUserInput>
  }

  export type HighlightOwnerUpdateWithWhereUniqueWithoutUserInput = {
    where: HighlightOwnerWhereUniqueInput
    data: XOR<HighlightOwnerUpdateWithoutUserInput, HighlightOwnerUncheckedUpdateWithoutUserInput>
  }

  export type HighlightOwnerUpdateManyWithWhereWithoutUserInput = {
    where: HighlightOwnerScalarWhereInput
    data: XOR<HighlightOwnerUpdateManyMutationInput, HighlightOwnerUncheckedUpdateManyWithoutUserInput>
  }

  export type StoryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StoryWhereUniqueInput
    update: XOR<StoryUpdateWithoutOwnerInput, StoryUncheckedUpdateWithoutOwnerInput>
    create: XOR<StoryCreateWithoutOwnerInput, StoryUncheckedCreateWithoutOwnerInput>
  }

  export type StoryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StoryWhereUniqueInput
    data: XOR<StoryUpdateWithoutOwnerInput, StoryUncheckedUpdateWithoutOwnerInput>
  }

  export type StoryUpdateManyWithWhereWithoutOwnerInput = {
    where: StoryScalarWhereInput
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StoryScalarWhereInput = {
    AND?: StoryScalarWhereInput | StoryScalarWhereInput[]
    OR?: StoryScalarWhereInput[]
    NOT?: StoryScalarWhereInput | StoryScalarWhereInput[]
    id?: StringFilter<"Story"> | string
    content?: StringFilter<"Story"> | string
    ownerId?: StringFilter<"Story"> | string
    createdAt?: DateTimeFilter<"Story"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutOwnerInput, PostUncheckedUpdateWithoutOwnerInput>
    create: XOR<PostCreateWithoutOwnerInput, PostUncheckedCreateWithoutOwnerInput>
  }

  export type PostUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutOwnerInput, PostUncheckedUpdateWithoutOwnerInput>
  }

  export type PostUpdateManyWithWhereWithoutOwnerInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    ownerId?: StringFilter<"Post"> | string
    coverPhoto?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type TagUpsertWithWhereUniqueWithoutReferenceUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutReferenceUserInput, TagUncheckedUpdateWithoutReferenceUserInput>
    create: XOR<TagCreateWithoutReferenceUserInput, TagUncheckedCreateWithoutReferenceUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutReferenceUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutReferenceUserInput, TagUncheckedUpdateWithoutReferenceUserInput>
  }

  export type TagUpdateManyWithWhereWithoutReferenceUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutReferenceUserInput>
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    following?: FollowCreateNestedManyWithoutFollowingInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowCreateNestedManyWithoutFollowerInput
    likes?: LikeCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerCreateNestedManyWithoutUserInput
    stories?: StoryCreateNestedManyWithoutOwnerInput
    posts?: PostCreateNestedManyWithoutOwnerInput
    tags?: TagCreateNestedManyWithoutReferenceUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string
    username: string
    email: string
    name?: string | null
    profilePicture: string
    bio?: string | null
    createdAt?: Date | string
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    likes?: LikeUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutOwnerInput
    collections?: CollectionOwnerUncheckedCreateNestedManyWithoutUserInput
    highlights?: HighlightOwnerUncheckedCreateNestedManyWithoutUserInput
    stories?: StoryUncheckedCreateNestedManyWithoutOwnerInput
    posts?: PostUncheckedCreateNestedManyWithoutOwnerInput
    tags?: TagUncheckedCreateNestedManyWithoutReferenceUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowUpdateManyWithoutFollowingNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    likes?: LikeUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUpdateManyWithoutUserNestedInput
    stories?: StoryUpdateManyWithoutOwnerNestedInput
    posts?: PostUpdateManyWithoutOwnerNestedInput
    tags?: TagUpdateManyWithoutReferenceUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    likes?: LikeUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutOwnerNestedInput
    collections?: CollectionOwnerUncheckedUpdateManyWithoutUserNestedInput
    highlights?: HighlightOwnerUncheckedUpdateManyWithoutUserNestedInput
    stories?: StoryUncheckedUpdateManyWithoutOwnerNestedInput
    posts?: PostUncheckedUpdateManyWithoutOwnerNestedInput
    tags?: TagUncheckedUpdateManyWithoutReferenceUserNestedInput
  }

  export type LikeCreateManyCommentInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    ownerId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyReplyToInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    createdAt?: Date | string
  }

  export type LikeUpdateWithoutCommentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLikesNestedInput
    post?: PostUpdateOneWithoutLikesNestedInput
    story?: StoryUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutCommentInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutCommentInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutReplyToInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    story?: StoryUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutReplyToInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutReplyToInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerCreateManyCollectionInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CollectionPostCreateManyCollectionInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type CollectionOwnerUpdateWithoutCollectionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionOwnerUncheckedUpdateWithoutCollectionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerUncheckedUpdateManyWithoutCollectionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostUpdateWithoutCollectionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCollectionsNestedInput
  }

  export type CollectionPostUncheckedUpdateWithoutCollectionInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostUncheckedUpdateManyWithoutCollectionInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerCreateManyHighlightInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type HighlightStoryCreateManyHighlightInput = {
    id?: string
    storyId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerUpdateWithoutHighlightInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightOwnerUncheckedUpdateWithoutHighlightInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerUncheckedUpdateManyWithoutHighlightInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryUpdateWithoutHighlightInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneRequiredWithoutHighlightsNestedInput
  }

  export type HighlightStoryUncheckedUpdateWithoutHighlightInput = {
    storyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryUncheckedUpdateManyWithoutHighlightInput = {
    storyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryCreateManyStoryInput = {
    id?: string
    highlightId: string
    createdAt?: Date | string
  }

  export type LikeCreateManyStoryInput = {
    id?: string
    postId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyStoryInput = {
    id?: string
    postId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
  }

  export type HighlightStoryUpdateWithoutStoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlight?: HighlightUpdateOneRequiredWithoutStoriesNestedInput
  }

  export type HighlightStoryUncheckedUpdateWithoutStoryInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightStoryUncheckedUpdateManyWithoutStoryInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutStoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLikesNestedInput
    post?: PostUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutStoryInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutStoryInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutStoryInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutStoryInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutStoryInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyPostInput = {
    id?: string
    storyId?: string | null
    ownerId: string
    commentId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    storyId?: string | null
    content: string
    ownerId: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
  }

  export type TagCreateManyPostInput = {
    id?: string
    referenceUserId: string
    createdAt?: Date | string
  }

  export type CollectionPostCreateManyPostInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type LikeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLikesNestedInput
    story?: StoryUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutPostInput = {
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutPostInput = {
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    story?: StoryUpdateOneWithoutCommentsNestedInput
    owner?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referenceUser?: UserUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutPostInput = {
    referenceUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutPostInput = {
    referenceUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CollectionPostUncheckedUpdateWithoutPostInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionPostUncheckedUpdateManyWithoutPostInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyFollowerInput = {
    id?: string
    targetId: string
    createdAt?: Date | string
  }

  export type FollowCreateManyFollowingInput = {
    id?: string
    sourceId: string
    createdAt?: Date | string
  }

  export type LikeCreateManyOwnerInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    commentId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyOwnerInput = {
    id?: string
    postId?: string | null
    storyId?: string | null
    content: string
    isReply?: boolean
    replyToId?: string | null
    createdAt?: Date | string
  }

  export type CollectionOwnerCreateManyUserInput = {
    id?: string
    collectionId: string
    createdAt?: Date | string
  }

  export type HighlightOwnerCreateManyUserInput = {
    id?: string
    highlightId: string
    createdAt?: Date | string
  }

  export type StoryCreateManyOwnerInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type PostCreateManyOwnerInput = {
    id?: string
    coverPhoto: string
    caption?: string | null
    createdAt?: Date | string
  }

  export type TagCreateManyReferenceUserInput = {
    id?: string
    createdAt?: Date | string
    postId?: string | null
  }

  export type FollowUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUpdateWithoutFollowingInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutOwnerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutLikesNestedInput
    story?: StoryUpdateOneWithoutLikesNestedInput
    comment?: CommentUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutOwnerInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutOwnerInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutOwnerInput = {
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutCommentsNestedInput
    story?: StoryUpdateOneWithoutCommentsNestedInput
    replyTo?: CommentUpdateOneWithoutRepliesNestedInput
    likes?: LikeUpdateManyWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateWithoutOwnerInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutCommentNestedInput
    replies?: CommentUncheckedUpdateManyWithoutReplyToNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutOwnerInput = {
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    storyId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isReply?: BoolFieldUpdateOperationsInput | boolean
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type CollectionOwnerUncheckedUpdateWithoutUserInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollectionOwnerUncheckedUpdateManyWithoutUserInput = {
    collectionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlight?: HighlightUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type HighlightOwnerUncheckedUpdateWithoutUserInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HighlightOwnerUncheckedUpdateManyWithoutUserInput = {
    highlightId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUpdateWithoutOwnerInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightStoryUpdateManyWithoutStoryNestedInput
    likes?: LikeUpdateManyWithoutStoryNestedInput
    comments?: CommentUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateWithoutOwnerInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highlights?: HighlightStoryUncheckedUpdateManyWithoutStoryNestedInput
    likes?: LikeUncheckedUpdateManyWithoutStoryNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoryNestedInput
  }

  export type StoryUncheckedUpdateManyWithoutOwnerInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutOwnerInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    tags?: TagUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutOwnerInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    tags?: TagUncheckedUpdateManyWithoutPostNestedInput
    collections?: CollectionPostUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutOwnerInput = {
    coverPhoto?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutReferenceUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutReferenceUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyWithoutReferenceUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
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