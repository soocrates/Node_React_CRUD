import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import dotenv from "dotenv";

dotenv.config();

const client = new SecretsManagerClient({ region: process.env.AWS_REGION });
const secretName = process.env.AWS_SECRET_NAME;

async function getSecret() {
  try {
    const command = new GetSecretValueCommand({ SecretId: secretName });
    const data = await client.send(command);
    const secretData = JSON.parse(data.SecretString);
    return {
      username: secretData.username,
      password: secretData.password
    };
  } catch (err) {
    console.error(`Error retrieving secret: ${err}`);
  }
}

export default getSecret;
