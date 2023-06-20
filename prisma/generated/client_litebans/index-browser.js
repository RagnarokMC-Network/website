
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

exports.Prisma.Litebans_allowScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  type: 'type'
};

exports.Prisma.Litebans_bansScalarFieldEnum = {
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

exports.Prisma.Litebans_configScalarFieldEnum = {
  id: 'id',
  version: 'version',
  build: 'build',
  timezone: 'timezone'
};

exports.Prisma.Litebans_historyScalarFieldEnum = {
  id: 'id',
  date: 'date',
  name: 'name',
  uuid: 'uuid',
  ip: 'ip'
};

exports.Prisma.Litebans_kicksScalarFieldEnum = {
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

exports.Prisma.Litebans_mutesScalarFieldEnum = {
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

exports.Prisma.Litebans_serversScalarFieldEnum = {
  id: 'id',
  name: 'name',
  uuid: 'uuid',
  date: 'date'
};

exports.Prisma.Litebans_syncScalarFieldEnum = {
  id: 'id',
  info: 'info',
  msg: 'msg',
  time: 'time'
};

exports.Prisma.Litebans_warningsScalarFieldEnum = {
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
