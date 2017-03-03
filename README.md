# save-telegram-history

THIS IS PROGRAM IS CURRENTLY IN DEVELOPMENT, AND NOT YET FUNCTIONAL.

A script that saves your conversation history from [Telegram](https://telegram.org/).

## To run:

Create a `./.private/config.json` file, and add:


```
{
  "api": {
    "id": "< api id >",
    "hash": "< api hash >"
  }
}
```

For information on obtaining your keys, see https://core.telegram.org/api/obtaining_api_id.

Ensure that you have the latest version of [node](https://nodejs.org/en/download/current/) installed.

Then:

```
npm run start
```
