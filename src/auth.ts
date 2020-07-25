import jwt from "express-jwt";
import jwks from "jwks-rsa";

const jwtSecret = jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://excellent.auth0.com/.well-known/jwks.json"
})

export const authCheck = jwt({
    secret: jwtSecret,
    audience: 'http://localhost:1337',
    issuer: "https://excellent.auth0.com/",
    algorithms: ['RS256']
});

export const authOptional = jwt({
    secret: jwtSecret,
    audience: 'http://localhost:1337',
    issuer: "https://excellent.auth0.com/",
    algorithms: ['RS256'],
    credentialsRequired: false,
});
