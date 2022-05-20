# totem-simple-api
Public Web-service for obtaining the information about the user's assets (items and avatars)


## Before the start:

```bash
npm install
```

## AWS Part

### 1) Open your terminal and run this command:

```bash
aws configure
```

Insert your credentials and follow the steps.

### 2) Zip project content except aws-data folder.

### 3) Open your terminal in the directory where trust-policy.json is stored and pass it to the create-role command:

```bash
aws iam create-role --role-name {NAME_OF_ROLE} --assume-role-policy-document file://aws-data/trust-policy.json
```

### 4) The next step is to attach a policy to the role. This policy grants permissions to the lambda function to log to CloudWatch:


```bash
aws iam attach-role-policy --role-name {NAME_OF_ROLE} --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
```

### 5) Now we're ready to create the lambda function using the AWS CLI.

Since our lambda function requires an environment variables so edit a file called environment.json in aws-data folder with your mongo db credentials. And run the following script:

```bash
aws lambda create-function --function-name {FUNCTION_NAME} --runtime nodejs14.x --zip-file fileb://{NAME_OF_ARCHIVE}.zip --handler index.handler --environment file://aws-data/environment.json --role "arn:aws:iam::{YOUR_ACCOUNT_NUMBER}:role/{NAME_OF_ROLE}"
```
