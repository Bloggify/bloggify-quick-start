module.exports = ctx => {
    const foo = ctx.session.foo = ctx.session.foo || 0
    ++ctx.session.foo
    ctx.end([foo.toString(), process.pid].join(":"))
}
