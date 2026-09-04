import app from "./app";
import { env } from "./config/env";

app.listen(env.PORT, () => {
  console.log(
    `ARC API running on http://localhost:${env.PORT}`,
  );
});