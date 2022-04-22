const { Prisma } = require('@prisma/client');

module.exports = (error, req, res, next) => {
    res.status(500)

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
            const invalidField = error.meta.target.split('_')[1]
            
            res.send(`${invalidField} already in use`)
        }
    }
    else {
        res.send(error.message)
    }
}