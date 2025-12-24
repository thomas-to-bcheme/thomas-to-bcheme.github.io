// src/app/actions.ts
'use server' // 👈 This marks functions here as secure server-side code

import { docClient } from "@/lib/db";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { revalidatePath } from "next/cache";

export async function addComment(formData: FormData) {
  // 1. Extract data from the HTML Form
  const comment = formData.get("comment")?.toString();

  if (!comment) return;

  // 2. Send to DynamoDB
  await docClient.send(new PutCommand({
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: {
      // DynamoDB needs a Primary Key (Partition Key). 
      // We generate a random ID here.
      id: crypto.randomUUID(), 
      content: comment,
      created_at: new Date().toISOString(),
    }
  }));

  // 3. Refresh the page so the new comment appears instantly
  revalidatePath("/");
}