# object-schemify
Cast your ready-made JavaScript objects into readable arguments from the mongoose.Schema.

[![npm version](https://img.shields.io/npm/v/object-schemify.svg?style=flat-square)](https://www.npmjs.org/package/object-schemify)
[![npm downloads](https://img.shields.io/npm/dm/object-schemify.svg?style=flat-square)](http://npm-stat.com/charts.html?package=object-schemify)

## Table of Contents

  - [Installing](#installing)
  - [Example](#example)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  
## Installing
Using npm:

```bash
$ npm install object-schemify
```

Using yarn:

```bash
$ yarn add object-schemify
```
## Example
You can cast ready javascript objects into readable mongoose schemas. Look it!
```js
const objectSchemify = require('object-schemify');
const { Schema, model } = require('mongoose');

let obj = 
  "login": "guilherssousa",
  "id": 47110995,
  "node_id": "MDQ6VXNlcjQ3MTEwOTk1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/47110995?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/guilherssousa",
  "html_url": "https://github.com/guilherssousa",
  "followers_url": "https://api.github.com/users/guilherssousa/followers",
  "following_url": "https://api.github.com/users/guilherssousa/following{/other_user}",
  "gists_url": "https://api.github.com/users/guilherssousa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/guilherssousa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/guilherssousa/subscriptions",
  "organizations_url": "https://api.github.com/users/guilherssousa/orgs",
  "repos_url": "https://api.github.com/users/guilherssousa/repos",
  "events_url": "https://api.github.com/users/guilherssousa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/guilherssousa/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Guilherme S. Sousa",
  "company": null,
  "blog": "",
  "location": "Brazil",
  "email": null,
  "hireable": true,
  "bio": "Back-end developer :coffee:",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 8,
  "following": 21,
  "created_at": "2019-01-28T13:55:18Z",
  "updated_at": "2020-09-28T18:45:57Z"
}

const GitHubUserSchema = new Schema(objectSchemify(obj));

```

## Roadmap

- Introduce dynamic casting for **Data**
- Introducing dynamic casting for **ObjectId**

## Contributing

To contribute:

- Fork this repo
- Make a clone of the repository created from the fork: `git clone https://github.com/your-user/object-schemify.git`
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`
- Go to [Pull Requests](https://github.com/guilherssousa/object-schemify/pulls) of the original project and create a pull request with your commit

Contributors:
[u/vorticalbox](https://www.reddit.com/user/vorticalbox/) on Reddit
