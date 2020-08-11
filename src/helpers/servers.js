/*
import _ from 'lodash';
import jwt from 'jsonwebtoken';

export const isTokenExpired = accessToken => {
  const decodedToken = jwt.decode(accessToken);
  return decodedToken.exp < Date.now() / 1000;
};

export const mergeRoleScopes = roles => {
  const result = {
    roles: [],
    authorizations: [],
  };

  roles.forEach(role => {
    const { authorizations, ...roleProps } = role;
    result.roles.push({ ...roleProps });

    // Merge authorization scopes.
    authorizations.forEach(item => {
      result.authorizations = _.concat(result.authorizations, item.scope.keys);
    });
  });

  return result;
};
*/
