
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.Luckperms_actionsScalarFieldEnum = {
  id: 'id',
  time: 'time',
  actor_uuid: 'actor_uuid',
  actor_name: 'actor_name',
  type: 'type',
  acted_uuid: 'acted_uuid',
  acted_name: 'acted_name',
  action: 'action'
};

exports.Prisma.Luckperms_group_permissionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  permission: 'permission',
  value: 'value',
  server: 'server',
  world: 'world',
  expiry: 'expiry',
  contexts: 'contexts'
};

exports.Prisma.Luckperms_groupsScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.Luckperms_messengerScalarFieldEnum = {
  id: 'id',
  time: 'time',
  msg: 'msg'
};

exports.Prisma.Luckperms_playersScalarFieldEnum = {
  uuid: 'uuid',
  username: 'username',
  primary_group: 'primary_group'
};

exports.Prisma.Luckperms_tracksScalarFieldEnum = {
  name: 'name',
  groups: 'groups'
};

exports.Prisma.Luckperms_user_permissionsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  permission: 'permission',
  value: 'value',
  server: 'server',
  world: 'world',
  expiry: 'expiry',
  contexts: 'contexts'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = {
  luckperms_actions: 'luckperms_actions',
  luckperms_group_permissions: 'luckperms_group_permissions',
  luckperms_groups: 'luckperms_groups',
  luckperms_messenger: 'luckperms_messenger',
  luckperms_players: 'luckperms_players',
  luckperms_tracks: 'luckperms_tracks',
  luckperms_user_permissions: 'luckperms_user_permissions'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
