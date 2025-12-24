// src/lib/db.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { awsCredentialsProvider } from "@vercel/oidc-aws-credentials-provider";

const client = new DynamoDBClient({
  region: "us-west-2",
  // The Switch: Check if we are in 'development' (Localhost)
  credentials: process.env.NODE_ENV === "development"
    ? {
        // 🟢 LOCALHOST: Use keys from .env.local
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        // Only include sessionToken if using temporary 'ASIA' keys
        sessionToken: process.env.AWS_SESSION_TOKEN || undefined, 
      }
    : awsCredentialsProvider({
        // 🔴 PRODUCTION: Use Vercel OIDC
        roleArn: process.env.AWS_ROLE_ARN || "",
        region: "us-west-2",
      }),
});

export const docClient = DynamoDBDocumentClient.from(client);