
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [{
    "https://davida570.sg-host.com/graphql" : {
      headers : {
        'Authorization': 'Basic UmljaGFyZCBCYXJyOkgzOTIgSWpycyBRVXlhIG9pdFcgMEpyRyBCNThC'
      }
    }
  }],
  generates: {
    "src/graphql/graphql.ts": {
      plugins: ["typescript"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
