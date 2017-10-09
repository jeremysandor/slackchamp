# slackchamp
Fantasy sports for the lazy

## Running slackchamp

Install the dependencies.

```bash
npm install
```

Rename `.env.example` to `.env` and replace the values for `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN`, and `AUTH0_CLIENT_SECRET` with your Auth0 credentials.

```bash
# copy configuration and replace with your own
cp .env.example .env
```

Run the app.

```bash
npm start
```

The app will be served at `localhost:3000`.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

