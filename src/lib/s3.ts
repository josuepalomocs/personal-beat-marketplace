import { S3 } from "@aws-sdk/client-s3";
import * as process from "process";

const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || "";

const s3 = new S3({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_KEY || "",
  },
});

export async function getAllFilesFromBucket() {
  let files: string[] = [];

  try {
    const { Contents: contents } = await s3.listObjects({
      Bucket: S3_BUCKET_NAME,
    });
    if (contents) {
      for (let i = 0; i < contents.length; i++) {
        const response = await getFileFromBucket(contents[i].Key || "");
        const responseToBase64String = await response?.Body?.transformToString(
          "base64"
        );
        if (responseToBase64String) {
          files.push(responseToBase64String);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return files;
}

export async function getFileFromBucket(fileName: string) {
  try {
    return await s3.getObject({
      Key: fileName,
      Bucket: S3_BUCKET_NAME,
    });
  } catch (error) {
    console.log(error);
  }
}
