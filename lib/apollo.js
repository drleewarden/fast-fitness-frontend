/* /lib/apollo.js */

import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "http://localhost:1337/graphql", // Server URL (must be absolute)
    // uri: "http://159.89.229.222/"
  })
};
export default withData(config);