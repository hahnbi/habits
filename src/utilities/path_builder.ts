import * as routes from 'src/utilities/routes.json'

function getPath(routeName: string) {
  const route = routes[routeName];

  if (!route) {
    throw new Error(`Unknown routeName: ${routeName}`);
  }

  return route;
}

function buildPath(routeName: string, urlParams?: object, queryParams?: object) {
  return getPath(routeName);
}

export default {
  buildPath,
}
