const { forwardTo } = require("prisma-binding");

const Query = {
  //   dogs() {
  //     global.dogs = global.dogs || [];
  //     return global.dogs;
  //   },
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   console.log('Getting Items!!');
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
};

module.exports = Query;
