/* Generato automaticamente da convert_quiz.py — non modificare a mano */
const QUIZ_BANK = [
  {
    "q": "A user is planning to migrate an application workload to the AWS Cloud.   Which control becomes the responsibility of AWS once the migration is complete?",
    "opts": [
      "A: Patching the guest operating system",
      "B: Maintaining physical and environmental controls",
      "C: Protecting communications and maintaining zone security",
      "D: Patching specific applications"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which services can be used to deploy applications on AWS? (Choose two.)",
    "opts": [
      "A: AWS Elastic Beanstalk",
      "B: AWS Config",
      "C: AWS OpsWorks",
      "D: AWS Application Discovery Service",
      "E: Amazon Kinesis"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
    "opts": [
      "A: AWS Direct Connect",
      "B: Amazon Connect",
      "C: AWS Support Center",
      "D: AWS Managed Services"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Networking"
    ]
  },
  {
    "q": "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
    "opts": [
      "A: Cost Explorer",
      "B: TCO Calculator",
      "C: AWS Budgets",
      "D: AWS Pricing Calculator"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which component must be attached to a VPC to enable inbound Internet access?",
    "opts": [
      "A: NAT gateway",
      "B: VPC endpoint",
      "C: VPN connection",
      "D: Internet gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?",
    "opts": [
      "A: Spot Instance",
      "B: On-Demand Instance",
      "C: Partial Upfront Reserved Instance",
      "D: No Upfront Reserved Instance"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage.   Which set of tasks would meet this requirement?",
    "opts": [
      "A: Add an Application Load Balancer in front of the EC2 instance",
      "B: Configure EC2 Auto Recovery to move the instance to another Availability Zone",
      "C: Migrate to Amazon RDS and enable Multi-AZ",
      "D: Enable termination protection for the EC2 instance to avoid outages"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "A company wants to ensure that AWS Management Console users are meeting password complexity requirements.   How can the company configure password complexity?",
    "opts": [
      "A: Using an AWS IAM user policy",
      "B: Using an AWS Organizations service control policy (SCP)",
      "C: Using an AWS IAM account password policy",
      "D: Using an AWS Security Hub managed insight"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "AI / ML"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following is the customer's responsibility?",
    "opts": [
      "A: Patching guest OS and applications",
      "B: Patching and fixing flaws in the infrastructure",
      "C: Physical and environmental controls",
      "D: Configuration of AWS infrastructure devices"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following tasks is required to deploy a PCI-compliant workload on AWS?",
    "opts": [
      "A: Use any AWS service and implement PCI controls at the application layer",
      "B: Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer",
      "C: Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service",
      "D: Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order.   Which AWS service should the company use?",
    "opts": [
      "A: AWS Step Functions",
      "B: Amazon Simple Notification Service (Amazon SNS)",
      "C: Amazon Kinesis Data Streams",
      "D: Amazon Simple Queue Service (Amazon SQS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "SNS",
      "SQS",
      "Analytics"
    ]
  },
  {
    "q": "AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill.    Which option allows AnyCompany to receive a single bill?",
    "opts": [
      "A: Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.",
      "B: AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.",
      "C: Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.",
      "D: Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?",
    "opts": [
      "A: Cost Explorer",
      "B: AWS Budgets",
      "C: AWS Cost and Usage Report",
      "D: AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud.   Which service should be used to deploy the application?",
    "opts": [
      "A: AWS CloudFormation",
      "B: AWS Elastic Beanstalk",
      "C: Amazon EC2",
      "D: AWS OpsWorks"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ]
  },
  {
    "q": "Which AWS Trusted Advisor check is available to all AWS users?",
    "opts": [
      "A: Core checks",
      "B: All checks",
      "C: Cost optimization checks",
      "D: Fault tolerance checks"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "A web developer is concerned that a DDoS attack could target an application.   Which AWS services or features can help protect against such an attack? (Choose two.)",
    "opts": [
      "A: AWS Shield",
      "B: AWS CloudTrail",
      "C: Amazon CloudFront",
      "D: AWS Support Center",
      "E: AWS Service Health Dashboard"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Security"
    ]
  },
  {
    "q": "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
    "opts": [
      "A: AWS Config",
      "B: Amazon GuardDuty",
      "C: AWS Trusted Advisor",
      "D: AWS Artifact"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ]
  },
  {
    "q": "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs).   Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
    "opts": [
      "A: Create an IAM user and provide AWS Management Console access only.",
      "B: Create an IAM user and provide programmatic access only.",
      "C: Create an IAM role and provide AWS Management Console access only.",
      "D: Create an IAM policy with administrator access and attach it to the IAM user.",
      "E: Create an IAM policy with Amazon RDS access and attach it to the IAM user."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources.   Which AWS service should the company use?",
    "opts": [
      "A: AWS Config",
      "B: AWS Secrets Manager",
      "C: AWS CloudTrail",
      "D: AWS Trusted Advisor"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)",
    "opts": [
      "A: Preventing a single point of failure",
      "B: Reducing the operational costs of the application",
      "C: Allowing the application to serve cross-region users with low latency",
      "D: Increasing the availability of the application",
      "E: Increasing the load of the application"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances.   What pricing model will minimize cost while ensuring that compute resources remain available?",
    "opts": [
      "A: Dedicated Hosts",
      "B: On-Demand Instances",
      "C: Spot Instances",
      "D: Reserved Instances"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which tool can be used to identify scheduled changes to the AWS infrastructure?",
    "opts": [
      "A: AWS Personal Health Dashboard",
      "B: AWS Trusted Advisor",
      "C: Billing Dashboard",
      "D: AWS Config"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following is the customer's responsibility when using Amazon RDS?",
    "opts": [
      "A: Patching the operating system of underlying hardware",
      "B: Controlling traffic to and from the database through security groups",
      "C: Running backups that enable point-in-time recovery of a DB instance",
      "D: Replacing failed DB instances"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC"
    ]
  },
  {
    "q": "What is the customer's responsibility when using AWS Lambda?",
    "opts": [
      "A: Operating system configuration",
      "B: Application management",
      "C: Platform management",
      "D: Code encryption"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Security"
    ]
  },
  {
    "q": "A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds.   Which AWS service will support these requirements?",
    "opts": [
      "A: AWS Budgets",
      "B: Cost Explorer",
      "C: AWS CloudTrail",
      "D: Amazon Macie"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security"
    ]
  },
  {
    "q": "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
    "opts": [
      "A: Amazon Aurora",
      "B: Amazon DynamoDB",
      "C: Amazon RDS",
      "D: Amazon Redshift"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",
    "opts": [
      "A: Reserved Instances",
      "B: On-Demand Instances",
      "C: Dedicated Instances",
      "D: Spot Instances"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
    "opts": [
      "A: AWS VPN",
      "B: Amazon Connect",
      "C: AWS Direct Connect",
      "D: Internet gateway"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which AWS services offer compute capabilities? (Choose two.)",
    "opts": [
      "A: Amazon EC2",
      "B: Amazon S3",
      "C: Amazon Elastic Block Store (Amazon EBS)",
      "D: Amazon Cognito",
      "E: AWS Lambda"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which AWS service can be used to privately store and manage versions of source code?",
    "opts": [
      "A: AWS CodeBuild",
      "B: AWS CodeCommit",
      "C: AWS CodePipeline",
      "D: AWS CodeStar"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?",
    "opts": [
      "A: AWS Secrets Manager",
      "B: Amazon Cognito",
      "C: Amazon Macie",
      "D: AWS Trusted Advisor"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption.   Which AWS infrastructure component should the company replicate across?",
    "opts": [
      "A: Edge locations",
      "B: Availability Zones",
      "C: Regions",
      "D: Amazon Route 53"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53"
    ]
  },
  {
    "q": "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    "opts": [
      "A: Amazon Simple Notification Service (Amazon SNS)",
      "B: Amazon Simple Email Service (Amazon SES)",
      "C: Amazon CloudWatch alerts",
      "D: Amazon Simple Queue Service (Amazon SQS)"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "SNS",
      "SQS"
    ]
  },
  {
    "q": "Which AWS Cloud design principles can help increase reliability? (Choose two.)",
    "opts": [
      "A: Using monolithic architecture",
      "B: Measuring overall efficiency",
      "C: Testing recovery procedures",
      "D: Adopting a consumption model",
      "E: Automatically recovering from failure"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base.   Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
    "opts": [
      "A: Application Load Balancer",
      "B: AWS Global Accelerator",
      "C: AWS Direct Connect",
      "D: Amazon CloudFront",
      "E: AWS Lambda"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "A company wants to connect to AWS over a private, low-latency connection from its remote office.   What is the recommended method to meet these requirements?",
    "opts": [
      "A: Create a VPN tunnel",
      "B: Connect across the public internet",
      "C: Use VPC peering to create a connection.",
      "D: Use AWS Direct Connect."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service can be used to retrieve compliance reports on demand?",
    "opts": [
      "A: AWS Secrets Manager",
      "B: AWS Artifact",
      "C: AWS Security Hub",
      "D: AWS Certificate Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting.   Which AWS service should the company use?",
    "opts": [
      "A: Amazon GuardDuty",
      "B: AWS WAF",
      "C: AWS Trusted Advisor",
      "D: Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security",
      "Storage",
      "Support"
    ]
  },
  {
    "q": "How should a web application be deployed to ensure high availability in the AWS Cloud?",
    "opts": [
      "A: Deploy multiple instances of the application in multiple Availability Zones.",
      "B: Deploy multiple instances of the application in a single Availability Zone.",
      "C: Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.",
      "D: Deploy the application in one Amazon EC2 instance in an Auto Scaling group."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs.   Which option should the company use to maximize savings over a 3-year term?",
    "opts": [
      "A: EC2 Dedicated Instances",
      "B: EC2 Spot Instances",
      "C: EC2 Reserved Instances",
      "D: EC2 On-Demand Instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys.   What it the SIMPLEST way to provide this information?",
    "opts": [
      "A: Create an IAM user account for the auditor, granting the auditor administrator permissions.",
      "B: Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.",
      "C: Download the IAM credential report, then provide the report to the auditor.",
      "D: Download the AWS Trusted Advisor report, then provide the report to the auditor."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Support"
    ]
  },
  {
    "q": "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
    "opts": [
      "A: Volume discounts",
      "B: A minimal additional fee for use",
      "C: One bill for multiple accounts",
      "D: Installment payment options",
      "E: Custom cost and usage budget creation"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility.   Which Amazon EC2 instance type should the company use to meet these requirements?",
    "opts": [
      "A: On-Demand Instances",
      "B: Spot Instances",
      "C: Reserved Instances",
      "D: Dedicated Hosts"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "A company wants to track AWS resource configuration changes for compliance reasons.   Which AWS feature can be used to meet this requirement?",
    "opts": [
      "A: AWS Cost and Usage Report",
      "B: AWS Organizations service control policies (SCPs)",
      "C: AWS Config rules",
      "D: VPC Flow Logs"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "A company is building an application that needs to deliver images and videos globally with minimal latency.   Which approach can the company use to accomplish this in a cost effective manner?",
    "opts": [
      "A: Deliver the content through Amazon CloudFront.",
      "B: Store the content on Amazon S3 and enable S3 cross-region replication.",
      "C: Implement a VPN across multiple AWS Regions.",
      "D: Deliver the content through AWS PrivateLink."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront"
    ]
  },
  {
    "q": "The AWS IAM best practice for granting least privilege is to:",
    "opts": [
      "A: apply an IAM policy to an IAM group and limit the size of the group.",
      "B: require multi-factor authentication (MFA) for all IAM users.",
      "C: require each IAM user who has different permissions to have multiple passwords.",
      "D: apply an IAM policy only to IAM users who require it."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
    "opts": [
      "A: Pay-as-you-go pricing",
      "B: High availability",
      "C: Global reach",
      "D: Economies of scale"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect.   Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
    "opts": [
      "A: VPC endpoint",
      "B: AWS Direct Connect",
      "C: AWS Transit Gateway",
      "D: VPC peering"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "How can AWS enable a company to control expenses as an application's usage changes unpredictably?",
    "opts": [
      "A: AWS will refund the cost difference if a customer moves to larger servers.",
      "B: The application can be built to scale up or down automatically as resources are needed",
      "C: Spot instances will automatically be used if the price is lower than on-demand instances.",
      "D: Amazon CloudWatch will automatically predict what resources are needed."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service or feature can be used to prevent SQL injection attacks?",
    "opts": [
      "A: Security groups",
      "B: Network ACLs",
      "C: AWS WAF",
      "D: IAM policy"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    "opts": [
      "A: AWS Well-Architected Framework documentation.",
      "B: Amazon CloudFront.",
      "C: AWS CodeCommit.",
      "D: AWS Quick Start reference deployments."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Well-Architected"
    ]
  },
  {
    "q": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "A: It simplifies relational database administration tasks.",
      "B: It provides 99.99999999999% reliability and durability.",
      "C: It automatically scales databases for loads.",
      "D: It enables users to dynamically adjust CPU and RAM resources."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    "opts": [
      "A: Amazon EC2.",
      "B: Amazon Route 53.",
      "C: Amazon ElastiCache.",
      "D: Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "DynamoDB"
    ]
  },
  {
    "q": "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    "opts": [
      "A: Launch the instances across multiple Availability Zones in a single AWS Region.",
      "B: Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "C: Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "D: Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A: A public and private key-pair.",
      "B: Amazon Inspector.",
      "C: AWS Identity and Access Management (IAM) policies.",
      "D: Security Groups."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    "opts": [
      "A: AWS VPN.",
      "B: Amazon Redshift.",
      "C: API Gateway.",
      "D: Amazon Direct Connect."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Analytics",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service or feature can be used to monitor CPU usage?",
    "opts": [
      "A: AWS CloudTrail.",
      "B: VPC Flow Logs.",
      "C: Amazon CloudWatch.",
      "D: AWS Config."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch"
    ]
  },
  {
    "q": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    "opts": [
      "A: Granting access to individuals and services.",
      "B: Encrypting data in transit.",
      "C: Updating Amazon EC2 host firmware.",
      "D: Updating operating systems."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following security-related actions are available at no cost?",
    "opts": [
      "A: Calling AWS Support.",
      "B: Contacting AWS Professional Services to request a workshop.",
      "C: Accessing forums, blogs, and whitepapers.",
      "D: Attending AWS classes at a local university."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which storage service can be used as a low-cost option for hosting static websites?",
    "opts": [
      "A: Amazon Glacier.",
      "B: Amazon DynamoDB.",
      "C: Amazon Elastic File System (Amazon EFS).",
      "D: Amazon Simple Storage Service (Amazon S3)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Storage"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    "opts": [
      "A: Application security.",
      "B: Edge location management.",
      "C: Patch management.",
      "D: Client-side data."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    "opts": [
      "A: Multiple Availability Zones.",
      "B: Performance efficiency.",
      "C: Security.",
      "D: Encryption usage.",
      "E: High availability."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ]
  },
  {
    "q": "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: Amazon Inspector.",
      "C: Amazon CloudWatch.",
      "D: AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch",
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    "opts": [
      "A: Use manual monitoring.",
      "B: Use fixed servers.",
      "C: Implement loose coupling.",
      "D: Rely on individual components.",
      "E: Design for scalability."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "When architecting cloud applications, which of the following are a key design principle?",
    "opts": [
      "A: Use the largest instance possible.",
      "B: Provision capacity for peak load.",
      "C: Use the Scrum development process.",
      "D: Implement elasticity."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    "opts": [
      "A: Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "B: Enable automate patching for the instances using the Amazon RDS console.",
      "C: In AWS Config. configure a rule for the instances and the required patch level.",
      "D: Use AWS Systems Manager to automate database patching according to a schedule."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which mechanism allows developers to access AWS services from application code?",
    "opts": [
      "A: AWS Software Development Kit.",
      "B: AWS Management Console.",
      "C: AWS CodePipeline.",
      "D: AWS Config."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    "opts": [
      "A: Shared responsibility security model.",
      "B: Single tenancy.",
      "C: Elastic computing.",
      "D: Encryption."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following is a benefit of using the AWS Cloud?",
    "opts": [
      "A: Permissive security removes the administrative burden.",
      "B: Ability to focus on revenue-generating activities.",
      "C: Control over cloud network hardware.",
      "D: Choice of specific cloud hardware vendors."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    "opts": [
      "A: Fault Tolerance.",
      "B: Instance Usage.",
      "C: Infrastructure.",
      "D: Performance.",
      "E: Storage Capacity."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "What is Amazon CloudWatch?",
    "opts": [
      "A: A code repository with customizable build and team commit features.",
      "B: A metrics repository with customizable notification thresholds and channels.",
      "C: A security configuration repository with threat analytics.",
      "D: A rule repository of a web application firewall with automated vulnerability prevention features."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
    "opts": [
      "A: Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
      "B: Encrypting data on the client-side.",
      "C: Training the data center staff.",
      "D: Configuring Network Access Control Lists (ACL).",
      "E: Maintaining environmental controls within a data center."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    "opts": [
      "A: Physical controls.",
      "B: Patch management.",
      "C: Zone security.",
      "D: Data center auditing."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    "opts": [
      "A: AWS Billing and Cost Management.",
      "B: Consolidated billing.",
      "C: Amazon CloudWatch.",
      "D: Amazon QuickSight."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "How do customers benefit from Amazon’s massive economies of scale?",
    "opts": [
      "A: Periodic price reductions as the result of Amazon’s operational efficiencies.",
      "B: New Amazon EC2 instance types providing the latest hardware.",
      "C: The ability to scale up and down when needed.",
      "D: Increased reliability in the underlying hardware of Amazon EC2 instances."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    "opts": [
      "A: Service control policies (SCPs).",
      "B: Consolidated billing.",
      "C: All Upfront Reserved Instances.",
      "D: AWS Cost Explorer."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS services provide a way to extend an on-premises architecture to the aws cloud? (Select TWO)",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon Connect.",
      "C: AWS Storage Gateway.",
      "D: Amazon CloudFront.",
      "E: AWS Direct Connect."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which of the following services will automatically scale with an expected increase in web traffic?",
    "opts": [
      "A: AWS CodePipeline.",
      "B: Elastic Load Balancing.",
      "C: Amazon EBS.",
      "D: AWS Direct Connect."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which service provides a virtually unlimited amount of online highly durable object storage?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon Elastic File System (Amazon EFS).",
      "C: Amazon Elastic Container Service (Amazon ECS).",
      "D: Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "ECS / Fargate",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS feature should a customer leverage to achieve high availability of an application?",
    "opts": [
      "A: AWS Direct Connect.",
      "B: Availability Zones.",
      "C: Data centers.",
      "D: Amazon Virtual Private Cloud (Amazon VPC)."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    "opts": [
      "A: AWS WAF.",
      "B: AWS Trusted Advisor.",
      "C: AWS Direct Connect.",
      "D: AWS Organizations.",
      "E: Network ACLs."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Security",
      "Networking",
      "Support"
    ]
  },
  {
    "q": "Which of the following is a cloud architectural design principle?",
    "opts": [
      "A: Scale up not out.",
      "B: Loosely couple components.",
      "C: Build monolithic systems.",
      "D: Use commercial database software."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    "opts": [
      "A: Amazon CloudWatch.",
      "B: AWS CloudTrail.",
      "C: AWS Config.",
      "D: AWS Health."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Where can AWS compliance and certification reports be downloaded?",
    "opts": [
      "A: AWS Artifact.",
      "B: AWS Concierge.",
      "C: AWS Certificate Manager.",
      "D: AWS Trusted Advisor."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "The financial benefits of using AWS are: (Select TWO)",
    "opts": [
      "A: Reduced Total Cost of Ownership (TCO).",
      "B: Increased capital expenditure (capex).",
      "C: Reduced operational expenditure ( opex ).",
      "D: Deferred payment plans for startups.",
      "E: Business credit lines for startups."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service can serve a static website?",
    "opts": [
      "A: Amazon S3.",
      "B: Amazon Route 53.",
      "C: Amazon QuickSight.",
      "D: AWS X-Ray."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Route 53",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world (Select TWO)",
    "opts": [
      "A: Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "B: Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "C: Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "D: Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "E: Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "AI / ML"
    ]
  },
  {
    "q": "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    "opts": [
      "A: Resource groups.",
      "B: Availability Zones.",
      "C: Security groups.",
      "D: Regions.",
      "E: Amazon Machine Images (AMIS)."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    "opts": [
      "A: Physical access controls.",
      "B: Data encryption.",
      "C: Secure disposal of storage devices.",
      "D: Environmental risk management."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    "opts": [
      "A: Use AWS Budgets on each account to pay only to budget.",
      "B: Contact AWS Support for a monthly bill.",
      "C: Create an AWS Organization from the payer account and invite the other accounts to join.",
      "D: Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    "opts": [
      "A: Project management.",
      "B: Antivirus software licensing.",
      "C: Data center security.",
      "D: Software development."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "A: They require the customer to monitor and replace failing instances.",
      "B: They have better performance than customer-managed services.",
      "C: They simplify patching and updating underlying OSs.",
      "D: They do not require the customer to optimize instance type or size selections."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    "opts": [
      "A: Amazon Route 53.",
      "B: Virtual Private Gateway.",
      "C: Classic Load Balancer.",
      "D: Auto Scaling.",
      "E: Amazon CloudWatch default metrics."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Route 53",
      "CloudWatch"
    ]
  },
  {
    "q": "Which statement best describes Elastic Load Balancing?",
    "opts": [
      "A: It translates a domain name into an IP address using DNC.",
      "B: It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "C: It collects metrics on connected Amazon EC2 instances.",
      "D: It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following is a fast and reliable NoSQL database service?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon RDS.",
      "C: Amazon DynamoDB.",
      "D: Amazon S3."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service would you use to obtain compliance reports and certificates?",
    "opts": [
      "A: AWS Artifact.",
      "B: AWS Lambda.",
      "C: Amazon Inspector.",
      "D: AWS Certificate Manager."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Security"
    ]
  },
  {
    "q": "Which AWS services are defined as global instead of regional? (Select TWO)",
    "opts": [
      "A: Amazon Route 53.",
      "B: Amazon EC2.",
      "C: Amazon S3.",
      "D: Amazon CloudFront.",
      "E: Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "CloudFront",
      "Route 53",
      "DynamoDB"
    ]
  },
  {
    "q": "How would an AWS customer easily apply common access controls to a large set of users?",
    "opts": [
      "A: Apply an IAM policy to an IAM group.",
      "B: Apply an IAM policy to an IAM role.",
      "C: Apply the same IAM policy to all IAM users with access to the same workload.",
      "D: Apply an IAM policy to an Amazon Cognito user pool."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "Which of the following is an important architectural design principle when designing cloud applications?",
    "opts": [
      "A: Use multiple Availability Zones.",
      "B: Use tightly coupled components.",
      "C: Use open source software.",
      "D: Provision extra capacity."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    "opts": [
      "A: AWS Server Migration Service.",
      "B: AWS Organizations.",
      "C: AWS Budgets.",
      "D: AWS Trusted Advisor."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
    "opts": [
      "A: AWS Config",
      "B: AWS OpsWorks",
      "C: AWS SDK",
      "D: AWS Marketplace"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS networking service enables a company to create a virtual network within AWS?",
    "opts": [
      "A: AWS Config",
      "B: Amazon Route 53",
      "C: AWS Direct Connect",
      "D: Amazon Virtual Private Cloud (Amazon VPC."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ]
  },
  {
    "q": "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
    "opts": [
      "A: Configuring third-party applications",
      "B: Maintaining physical hardware",
      "C: Securing application access and data",
      "D: Managing custom Amazon Machine Images (AMIs)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    "opts": [
      "A: AWS Regions",
      "B: AWS edge locations",
      "C: AWS Availability Zones",
      "D: Amazon Virtual Private Cloud (Amazon VPC."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ]
  },
  {
    "q": "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    "opts": [
      "A: Use AWS Cloud Directory",
      "B: Audit AWS Identity and Access Management (IAM) roles",
      "C: Enable Multi-Factor Authentication",
      "D: Enable AWS CloudTrail"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
    "opts": [
      "A: Amazon CloudWatch",
      "B: AWS CloudTrail",
      "C: AWS X-Ray",
      "D: AWS Identity and Access Management (AWS IAM)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "CloudWatch"
    ]
  },
  {
    "q": "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
    "opts": [
      "A: Amazon Simple Notification Service (Amazon SNS)",
      "B: AWS CloudTrail",
      "C: AWS Trusted Advisor",
      "D: Amazon Route 53"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "CloudWatch",
      "SNS",
      "Support"
    ]
  },
  {
    "q": "Where can a customer find information about prohibited actions on AWS infrastructure?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Identity and Access Management (IAM)",
      "C: AWS Billing Console",
      "D: AWS Acceptable Use Policy"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
    "opts": [
      "A: By replacing large variable costs with lower capital investments",
      "B: By replacing large capital investments with lower variable costs",
      "C: By allowing the provisioning of compute and storage at a fixed level to meet peak demand",
      "D: By replacing the repeated scaling of virtual servers with a simpler fixed-scale model"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)",
    "opts": [
      "A: AWS Auto Scaling for Amazon EC2 instances",
      "B: Amazon VPC subnet ACLs to check the health of a service",
      "C: Distributed resources across multiple Availability Zones",
      "D: AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region",
      "E: Distributed resources across multiple AWS points of presence"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "Which cloud design principle aligns with AWS Cloud best practices?",
    "opts": [
      "A: Create fixed dependencies among application components",
      "B: Aggregate services on a single instance",
      "C: Deploy applications in a single Availability Zone",
      "D: Distribute the compute load across multiple resources"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are recommended practices for managing IAM users? (Choose two.)",
    "opts": [
      "A: Require IAM users to change their passwords after a specified period of time",
      "B: Prevent IAM users from reusing previous passwords",
      "C: Recommend that the same password be used on AWS and other sites",
      "D: Require IAM users to store their passwords in raw text",
      "E: Disable multi-factor authentication (MFA) for IAM users"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project.   How can the company get this support? (Choose two.)",
    "opts": [
      "A: Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.",
      "B: Contact AWS Support and open a case for assistance",
      "C: Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account",
      "D: Select a partner from the AWS Partner Network (APN) to assist with the migration",
      "E: Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How does the AWS Enterprise Support Concierge team help users?",
    "opts": [
      "A: Supporting application development",
      "B: Providing architecture guidance",
      "C: Answering billing and account inquires",
      "D: Answering questions regarding technical support cases"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "An application designed to span multiple Availability Zones is described as:",
    "opts": [
      "A: being highly available",
      "B: having global reach",
      "C: using an economy of scale",
      "D: having elasticity"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area.   According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
    "opts": [
      "A: AWS Regions",
      "B: Availability Zones",
      "C: subnets",
      "D: placement groups"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Simple Monthly Calculator",
      "C: AWS Pricing Calculator",
      "D: Cost Explorer"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only.   Which action should be taken?",
    "opts": [
      "A: Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.",
      "B: Enable billing alerts in the AWS Billing and Cost Management console.",
      "C: Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.",
      "D: Enable Reserved Instance sharing in the AWS Billing and Cost Management console."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which situation should be reported to the AWS Abuse team?",
    "opts": [
      "A: In Availability Zone has a service disruption",
      "B: An intrusion attempt is made from an AWS IP address",
      "C: A user has trouble accessing an Amazon S3 bucket from an AWS IP address",
      "D: A user needs to change payment methods due to a compromise"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base.   Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
    "opts": [
      "A: Application Load Balancer",
      "B: AWS Global Accelerator",
      "C: AWS Direct Connect",
      "D: Amazon CloudFront",
      "E: AWS Lambda"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service or resource is serverless?",
    "opts": [
      "A: AWS Lambda",
      "B: Amazon EC2 instances",
      "C: Amazon Lightsail",
      "D: Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "Which of the following are components of Amazon VPC? (Choose two.)",
    "opts": [
      "A: Objects",
      "B: Subnets",
      "C: Buckets",
      "D: Internet gateways",
      "E: Access key"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "VPC"
    ]
  },
  {
    "q": "AWS Budgets can be used to:",
    "opts": [
      "A: prevent a given user from creating a resource",
      "B: send an alert when the utilization of Reserved Instances drops below a certain percentage",
      "C: set resource limits in AWS accounts to prevent overspending",
      "D: split an AWS bill across multiple forms of payment"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)",
    "opts": [
      "A: AWS Secrets Manager",
      "B: AWS Certificate Manager",
      "C: AWS Multi-Factor Authentication (AWS MFA)",
      "D: Security groups",
      "E: Password policies"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)",
    "opts": [
      "A: Information on Amazon S3 bucket permissions",
      "B: AWS service outages",
      "C: Multi-factor authentication enabled on the AWS account root user",
      "D: Available software patches",
      "E: Number of users in the account"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "IAM",
      "Support"
    ]
  },
  {
    "q": "Which functions can users perform using AWS KMS?",
    "opts": [
      "A: Create and manage AWS access keys for the AWS account root user",
      "B: Create and manage AWS access keys for an AWS account IAM user",
      "C: Create and manage keys for encryption and decryption of data",
      "D: Create and manage keys for multi-factor authentication"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)",
    "opts": [
      "A: It identifies software vulnerabilities in applications running on AWS",
      "B: It provides a list of cost optimization recommendations based on current AWS usage",
      "C: It detects potential security vulnerabilities caused by permissions settings on account resources",
      "D: It automatically corrects potential security issues caused by permissions settings on account resources",
      "E: It provides proactive alerting whenever an Amazon EC2 instance has been compromised"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    "opts": [
      "A: AWS manages the maintenance of the cloud infrastructure",
      "B: AWS manages the security of applications built on AWS",
      "C: AWS manages capacity planning for physical servers",
      "D: AWS manages the development of applications on AWS",
      "E: AWS manages cost planning for virtual servers"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user deploys an Amazon RDS DB instance in multiple Availability Zones.   This strategy involves which pillar of the AWS Well-Architected Framework?",
    "opts": [
      "A: Performance efficiency",
      "B: Reliability",
      "C: Cost optimization",
      "D: Security"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Well-Architected"
    ]
  },
  {
    "q": "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)",
    "opts": [
      "A: AWS VPN",
      "B: Amazon Connect",
      "C: Amazon Cognito",
      "D: AWS Direct Connect",
      "E: AWS Managed Services"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    "opts": [
      "A: AWS Billing and Cost Management",
      "B: Consolidated billing",
      "C: Amazon CloudWatch",
      "D: Amazon QuickSight"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
    "opts": [
      "A: AWS Regions",
      "B: Availability Zones",
      "C: Edge locations",
      "D: Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
    "opts": [
      "A: Security groups",
      "B: Elastic network interfaces",
      "C: Network ACLs",
      "D: VPC Flow Logs"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    "opts": [
      "A: Amazon AutoScaling",
      "B: Amazon Redshift",
      "C: AWS CloudTrail",
      "D: AWS Lambda"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Analytics"
    ]
  },
  {
    "q": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Support case",
      "C: Concierge team",
      "D: Amazon Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups.   Which AWS service will support this use case?",
    "opts": [
      "A: Amazon RDS",
      "B: Amazon DynamoDB",
      "C: Amazon DocumentDB",
      "D: Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB"
    ]
  },
  {
    "q": "A company wants to expand from one AWS Region into a second AWS Region.   What does the company need to do to start supporting the new Region?",
    "opts": [
      "A: Contact an AWS Account Manager to sign a new contract",
      "B: Move an Availability Zone to the new Region",
      "C: Begin deploying resources in the second Region",
      "D: Download the AWS Management Console for the new Region"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server.   Which Amazon EC2 instance pricing option will meet these requirements?",
    "opts": [
      "A: Dedicated Hosts",
      "B: Dedicated Instances",
      "C: Spot Instances",
      "D: Reserved Instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)",
    "opts": [
      "A: Amazon Macie",
      "B: AWS Certificate Manager",
      "C: AWS Key Management Service (AWS KMS)",
      "D: AWS Secrets Manager",
      "E: AWS CloudHSM"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "A company is planning to migrate from on-premises to the AWS Cloud.   Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
    "opts": [
      "A: AWS Total Cost of Ownership (TCO) Calculator",
      "B: Cost Explorer",
      "C: AWS Budgets",
      "D: AWS Migration Hub"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What can assist in evaluating an application for migration to the cloud? (Choose two.)",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Professional Services",
      "C: AWS Systems Manager",
      "D: AWS Partner Network (APN)",
      "E: AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
    "opts": [
      "A: AWS Secrets Manager",
      "B: AWS CloudHSM",
      "C: AWS Key Management Service (AWS KMS)",
      "D: AWS Directory Service"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)",
    "opts": [
      "A: Decommissioning of physical storage devices",
      "B: Security group and ACL configuration",
      "C: Patch management of an Amazon RDS instance operating system",
      "D: Controlling physical access to data centers",
      "E: Patch management of an Amazon EC2 instance operating system"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service is suitable for an event-driven workload?",
    "opts": [
      "A: Amazon EC2",
      "B: AWS Elastic Beanstalk",
      "C: AWS Lambda",
      "D: Amazon Lumberyard"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "What is a value proposition of the AWS Cloud?",
    "opts": [
      "A: AWS is responsible for security in the AWS Cloud",
      "B: No long-term contract is required",
      "C: Provision new servers in days",
      "D: AWS manages user applications in the AWS Cloud"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is a characteristic of Amazon S3 cross-region replication?",
    "opts": [
      "A: Both source and destination S3 buckets must have versioning disabled",
      "B: The source and destination S3 buckets cannot be in different AWS Regions",
      "C: S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts",
      "D: The source S3 bucket owner must have the source and destination AWS Regions disabled for their account"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "What is a user responsible for when running an application in the AWS Cloud?   - A. Managing physical hardware",
    "opts": [
      "B: Updating the underlying hypervisor",
      "C: Providing a list of users approved for data center access",
      "D: Managing application software updates"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market.   Which AWS Cloud feature can provide this?",
    "opts": [
      "A: Elasticity",
      "B: High availability",
      "C: Agility",
      "D: Reliability"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)",
    "opts": [
      "A: AWS Cost and Usage report",
      "B: AWS product pages",
      "C: AWS Simple Monthly Calculator",
      "D: Billing alerts and Amazon CloudWatch alarms",
      "E: AWS Price List API"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Amazon Route 53 enables users to:",
    "opts": [
      "A: encrypt data in transit",
      "B: register DNS domain names",
      "C: generate and manage SSL certificates",
      "D: establish a dedicated network connection to AWS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ]
  },
  {
    "q": "Where can you store files in AWS? (Choose TWO)",
    "opts": [
      "A: Amazon EFS.",
      "B: Amazon SNS.",
      "C: Amazon EBS.",
      "D: Amazon ECS.",
      "E: Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "SNS",
      "ECS / Fargate",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    "opts": [
      "A: Amazon Simple Queue Service.",
      "B: AWS Storage Gateway.",
      "C: Amazon Simple Email Service.",
      "D: Amazon Simple Storage Service."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "SQS",
      "Storage"
    ]
  },
  {
    "q": "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    "opts": [
      "A: Pay less as AWS grows.",
      "B: Pay as you go.",
      "C: Pay less by using more.",
      "D: Save when you reserve."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    "opts": [
      "A: Right-size before and after migration.",
      "B: Use a Multi-Region Active-Passive architecture.",
      "C: Combine On-demand Capacity Reservations with Saving Plans.",
      "D: Use a Multi-Region Active-Active architecture."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ]
  },
  {
    "q": "What is the primary storage service used by Amazon RDS database instances?",
    "opts": [
      "A: Amazon Glacier.",
      "B: Amazon EBS.",
      "C: Amazon EFS.",
      "D: Amazon S3."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    "opts": [
      "A: AWS CodePipeline.",
      "B: AWS X-Ray.",
      "C: Amazon Inspector.",
      "D: AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
    "opts": [
      "A: Amazon Redshift.",
      "B: AWS Snowball.",
      "C: Amazon Simple Storage Service.",
      "D: Amazon EBS.",
      "E: Amazon DynamoDB."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "DynamoDB",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    "opts": [
      "A: AWS Regions.",
      "B: Multi-AZ Deployment.",
      "C: Automatic patching.",
      "D: Read Replicas.",
      "E: Edge Locations."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "CloudFront"
    ]
  },
  {
    "q": "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    "opts": [
      "A: Replicate the current resources across multiple Availability Zones within the same region.",
      "B: Migrate the application to a hosting provider in Asia.",
      "C: Recreate the website content.",
      "D: Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    "opts": [
      "A: AWS Identity and Access Management.",
      "B: Amazon RDS.",
      "C: Network Access Control Lists.",
      "D: Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS",
      "Analytics"
    ]
  },
  {
    "q": "Using Amazon EC2 falls under which of the following cloud computing models?",
    "opts": [
      "A: Iaas & SaaS.",
      "B: IaaS.",
      "C: SaaS.",
      "D: PaaS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which of the below is a best-practice when building applications on AWS?",
    "opts": [
      "A: Strengthen physical security by applying the principle of least privilege.",
      "B: Ensure that the application runs on hardware from trusted vendors.",
      "C: Use IAM policies to maintain performance.",
      "D: Decouple the components of the application so that they run independently."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon SQS.",
      "C: Amazon Instance store.",
      "D: Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "SQS",
      "Storage"
    ]
  },
  {
    "q": "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    "opts": [
      "A: Active archives.",
      "B: Dynamic websites’ assets.",
      "C: Long-term analytic data.",
      "D: Active databases.",
      "E: Cached data."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What does Amazon Elastic Beanstalk provide?",
    "opts": [
      "A: A PaaS solution to automate application deployment.",
      "B: A compute engine for Amazon ECS.",
      "C: A scalable file storage solution for use with AWS and on-premises servers.",
      "D: A NoSQL database service."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "ECS / Fargate"
    ]
  },
  {
    "q": "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    "opts": [
      "A: Amazon Kinesis.",
      "B: Security groups.",
      "C: Amazon Inspector.",
      "D: AWS Network Access Control Lists."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Security",
      "Analytics"
    ]
  },
  {
    "q": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    "opts": [
      "A: Patch management controls.",
      "B: Database controls.",
      "C: Awareness & Training.",
      "D: Environmental controls.",
      "E: Physical controls."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    "opts": [
      "A: Reserved instances     - No Upfront.",
      "B: Reserved instances     - Partial Upfront.",
      "C: On-Demand instances.",
      "D: Spot Instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ]
  },
  {
    "q": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
    "opts": [
      "A: Elasticity.",
      "B: Global reach.",
      "C: Data durability.",
      "D: High availability."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    "opts": [
      "A: AWS Batch.",
      "B: AWS Outposts.",
      "C: Amazon Lightsail.",
      "D: Amazon EC2.",
      "E: AWS Lambda."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    "opts": [
      "A: Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      "B: Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      "C: Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      "D: Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ]
  },
  {
    "q": "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    "opts": [
      "A: You can contact AWS support to increase the service limits.",
      "B: Each IAM user has the same service limit.",
      "C: There are no service limits on AWS.",
      "D: You can use the AWS Trusted Advisor to monitor your service limits.",
      "E: The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS",
      "Support"
    ]
  },
  {
    "q": "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    "opts": [
      "A: AWS Console.",
      "B: AWS Service Catalog.",
      "C: AWS OpsWorks.",
      "D: AWS CLI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    "opts": [
      "A: AWS Artifact.",
      "B: AWS Cloud9.",
      "C: AWS Direct Connect.",
      "D: AWS CloudTrail.",
      "E: AWS VPN."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    "opts": [
      "A: AWS EC2 Auto Recovery.",
      "B: AWS Auto Scaling.",
      "C: AWS Network Load Balancer.",
      "D: AWS Application Load Balancer."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    "opts": [
      "A: Amazon Neptune.",
      "B: Amazon Aurora.",
      "C: Amazon RDS for SQL Server.",
      "D: Amazon RDS for PostgreSQL."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    "opts": [
      "A: AWS CloudHSM.",
      "B: Security Groups.",
      "C: AWS Batch.",
      "D: AWS IAM.",
      "E: Network Access Control Lists (Network ACLs)."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "VPC"
    ]
  },
  {
    "q": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon Kinesis.",
      "C: Amazon DynamoDB.",
      "D: Amazon RDS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    "opts": [
      "A: Application development.",
      "B: Market research.",
      "C: Business analysis.",
      "D: Physical hardware."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    "opts": [
      "A: EC2 instances will be billed on one second increments, with a minimum of one minute.",
      "B: EC2 instances will be billed on one hour increments, with a minimum of one day.",
      "C: EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      "D: EC2 instances will be billed on one day increments, with a minimum of one month."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    "opts": [
      "A: Instance type.",
      "B: The Availability Zone where the instance is provisioned.",
      "C: Load balancing.",
      "D: Number of buckets.",
      "E: Number of private IPs."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3"
    ]
  },
  {
    "q": "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    "opts": [
      "A: By creating an AWS Config template from the old instance and launching a new instance from it.",
      "B: By creating an EBS Snapshot of the old instance.",
      "C: By installing Aurora on EC2 and launching a new instance from it.",
      "D: By creating an AMI from the old instance and launching a new instance from it."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    "opts": [
      "A: IAM Principals.",
      "B: AWS Service Control Policies (SCPs).",
      "C: IAM policies.",
      "D: AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "ECS / Fargate"
    ]
  },
  {
    "q": "Which of the following statements describes the AWS Cloud’s agility?",
    "opts": [
      "A: AWS allows you to host your applications in multiple regions around the world.",
      "B: AWS provides customizable hardware at the lowest possible cost.",
      "C: AWS allows you to provision resources in minutes.",
      "D: AWS allows you to pay upfront to reduce costs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    "opts": [
      "A: Lower administrative burden.",
      "B: Complete control over the underlying host.",
      "C: Resizable compute capacity.",
      "D: Scales automatically to larger or smaller instance types.",
      "E: Supports the document and key-value data structure."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB"
    ]
  },
  {
    "q": "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    "opts": [
      "A: Internet Gateway.",
      "B: AWS IQ.",
      "C: AWS Direct Connect.",
      "D: AWS Site-to-Site VPN."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking",
      "Support"
    ]
  },
  {
    "q": "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    "opts": [
      "A: Enterprise Support.",
      "B: Developer Support.",
      "C: Basic Support.",
      "D: Business Support."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    "opts": [
      "A: Network Access Control Lists (NACLs).",
      "B: Key Pairs.",
      "C: Access Keys.",
      "D: IAM Policies.",
      "E: Security Groups."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ]
  },
  {
    "q": "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    "opts": [
      "A: Reserved instances.",
      "B: Spot Instances.",
      "C: On-Demand instances.",
      "D: Dedicated instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    "opts": [
      "A: AWS Service Health Dashboard.",
      "B: AWS Management Console.",
      "C: Amazon CloudWatch.",
      "D: AWS Personal Health Dashboard."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    "opts": [
      "A: AWS Software Development Kit.",
      "B: AWS Command Line Interface.",
      "C: AWS CodeDeploy.",
      "D: AWS Management Console."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS Service can be used to register a new domain name?",
    "opts": [
      "A: Amazon Personalize.",
      "B: Amazon Route 53.",
      "C: AWS KMS.",
      "D: AWS Config."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ]
  },
  {
    "q": "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    "opts": [
      "A: AWS CloudFormation.",
      "B: AWS Migration Hub.",
      "C: AWS IAM.",
      "D: AWS Elastic Beanstalk.",
      "E: Amazon Macie."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFormation",
      "Security"
    ]
  },
  {
    "q": "Which AWS service provides cost-optimization recommendations?",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: AWS Pricing Calculator.",
      "C: Amazon QuickSight.",
      "D: AWS X-Ray."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics",
      "Support"
    ]
  },
  {
    "q": "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    "opts": [
      "A: VPC Peering.",
      "B: AWS Transit Gateway.",
      "C: Amazon Connect.",
      "D: Security Groups."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    "opts": [
      "A: Instances can be shut down by AWS at any time with no notification.",
      "B: Reserved instances require at least a one-year pricing commitment.",
      "C: There is no additional charge for using dedicated instances.",
      "D: Reserved instances provide a significant discount compared to on-demand instances.",
      "E: Reserved instances are best suited for periodic workloads."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Why does every AWS Region contain multiple Availability Zones?",
    "opts": [
      "A: Multiple Availability Zones allows you to build resilient and highly available architectures.",
      "B: Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      "C: Multiple Availability Zones allows for data replication and global reach.",
      "D: Multiple Availability Zones within a region increases the storage capacity available in that region."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    "opts": [
      "A: On-Demand Instances.",
      "B: Spot Instances.",
      "C: Reserved Instances     - All Upfront.",
      "D: Reserved Instances     - No Upfront."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is a benefit of running an application in multiple Availability Zones?",
    "opts": [
      "A: Allows you to exceed AWS service limits.",
      "B: Reduces application response time between servers and global users.",
      "C: Increases available compute capacity.",
      "D: Increases the availability of your application."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    "opts": [
      "A: AWS sells the old devices to other hosting providers.",
      "B: AWS destroys the old devices in accordance with industry-standard practices.",
      "C: AWS sends the old devices for remanufacturing.",
      "D: AWS stores the old devices in a secure place."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    "opts": [
      "A: AWS CLI.",
      "B: AWS API.",
      "C: AWS SDK.",
      "D: AWS Management Console."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    "opts": [
      "A: Replacing an existing EC2 instance with a larger, more powerful one.",
      "B: Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
      "C: Adding more RAM capacity to an EC2 instance.",
      "D: Adding more EC2 instances of the same size to handle an increase in traffic."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    "opts": [
      "A: Amazon Inspector.",
      "B: AWS CloudTrail.",
      "C: AWS Trusted Advisor.",
      "D: EC2 Instance Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    "opts": [
      "A: Applying the principle of least privilege to all AWS resources.",
      "B: Automatically provisioning new resources to meet demand.",
      "C: All AWS services are considered Global Services, and this design helps customers serve their international users.",
      "D: Providing compensation to customers if issues occur.",
      "E: Ability to recover quickly from failures."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which statement is true regarding the AWS Shared Responsibility Model?",
    "opts": [
      "A: Responsibilities vary depending on the services used.",
      "B: Security of the IaaS services is the responsibility of AWS.",
      "C: Patching the guest OS is always the responsibility of AWS.",
      "D: Security of the managed services is the responsibility of the customer."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    "opts": [
      "A: The Reserved Instance discounts can only be shared with the master account.",
      "B: All accounts can receive the hourly cost benefit of the Reserved Instances.",
      "C: The purchased instances will have better performance than On-demand instances.",
      "D: There are no cost benefits from using consolidated billing; It is for informational purposes only."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    "opts": [
      "A: Deploy the application across multiple Availability Zones and Edge locations.",
      "B: Deploy the application across multiple Availability Zones and subnets.",
      "C: Deploy the application across multiple Regions and Availability Zones.",
      "D: Deploy the application across multiple VPC’s and subnets."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ]
  },
  {
    "q": "What does AWS Snowball provide? (Choose TWO)",
    "opts": [
      "A: Built-in computing capabilities that allow customers to process data locally.",
      "B: A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
      "C: A hybrid cloud storage between on-premises environments and the AWS Cloud.",
      "D: An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
      "E: Secure transfer of large amounts of data into and out of the AWS."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    "opts": [
      "A: AWS Health Dashboard.",
      "B: AWS Support Concierge.",
      "C: AWS Customer Service.",
      "D: AWS Operations Support."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    "opts": [
      "A: Applying the Amazon Connect latency-based routing policy.",
      "B: Registering a new US domain name to serve the users in the US.",
      "C: Building a new data center in the US and implementing a hybrid model.",
      "D: Deploying new Amazon EC2 instances in a Region located in the US."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    "opts": [
      "A: IAM roles.",
      "B: IAM users.",
      "C: IAM user groups.",
      "D: AWS Organizations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    "opts": [
      "A: AWS OpsWorks.",
      "B: AWS Database Migration Service.",
      "C: AWS Server Migration Service.",
      "D: AWS Application Discovery Service."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    "opts": [
      "A: Build security in every layer.",
      "B: Parallelize tasks.",
      "C: Implement elasticity.",
      "D: Adopt monolithic architecture."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    "opts": [
      "A: Increasing speed and agility.",
      "B: There is no need to worry about security.",
      "C: Gaining complete control over the physical infrastructure.",
      "D: Operating applications on behalf of customers.",
      "E: All of the physical security and most of the data/network security are taken care of for you."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the advantage of the AWS-recommended practice of \"decoupling\" applications?",
    "opts": [
      "A: Allows treating an application as a single, cohesive unit.",
      "B: Reduces inter-dependencies so that failures do not impact other components of the application.",
      "C: Allows updates of any monolithic application quickly and easily.",
      "D: Allows tracking of any API call made to any AWS service."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    "opts": [
      "A: AWS Budgets.",
      "B: AWS Pricing Calculator.",
      "C: AWS Systems Manager.",
      "D: AWS Cost & Usage Reports."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    "opts": [
      "A: AWS services’ costs will be reduced to half the original price.",
      "B: The consolidated billing feature is just for organizational purpose.",
      "C: Each AWS account gets volume discounts.",
      "D: Each AWS account gets five times the free-tier services capacity."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    "opts": [
      "A: Regularly update firmware on EBS devices.",
      "B: Create EBS snapshots.",
      "C: Ensure that EBS data is encrypted at rest.",
      "D: Store a backup daily in an external drive.",
      "E: Prevent any unauthorized access to AWS data centers."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
    "opts": [
      "A: By automatically scaling your on-premises resources based on changes in demand.",
      "B: By automatically scaling your AWS resources using an Elastic Load Balancer.",
      "C: By reducing interdependencies between application components wherever possible.",
      "D: By automatically provisioning the required AWS resources based on changes in demand."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    "opts": [
      "A: Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
      "B: Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
      "C: Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
      "D: Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
      "E: Configure the Amazon Connect Service to alert the company when the threshold is exceeded."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS",
      "Billing & Cost"
    ]
  },
  {
    "q": "What does Amazon CloudFront use to distribute content to global users with low latency?",
    "opts": [
      "A: AWS Global Accelerator.",
      "B: AWS Regions.",
      "C: AWS Edge Locations.",
      "D: AWS Availability Zones."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "What does the \"Principle of Least Privilege\" refer to?",
    "opts": [
      "A: You should grant your users only the permissions they need when they need them and nothing more.",
      "B: All IAM users should have at least the necessary permissions to access the core AWS services.",
      "C: All trusted IAM users should have access to any AWS service in the respective AWS account.",
      "D: IAM users should not be granted any permissions; to keep your account safe."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following does NOT belong to the AWS Cloud Computing models?",
    "opts": [
      "A: Platform as a Service (PaaS).",
      "B: Infrastructure as a Service (IaaS).",
      "C: Software as a Service (SaaS).",
      "D: Networking as a Service (NaaS)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    "opts": [
      "A: S3 Intelligent-Tiering.",
      "B: AWS Marketplace.",
      "C: Amazon S3 Glacier Deep Archive.",
      "D: Amazon EBS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which service provides DNS in the AWS cloud?",
    "opts": [
      "A: Route 53.",
      "B: AWS Config.",
      "C: Amazon CloudFront.",
      "D: Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53",
      "Analytics"
    ]
  },
  {
    "q": "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    "opts": [
      "A: AWS Shield.",
      "B: AWS Config.",
      "C: Amazon Cognito.",
      "D: AWS WAF.",
      "E: AWS KMS."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
    "opts": [
      "A: AWS OpsWorks.",
      "B: AWS Storage Gateway.",
      "C: Amazon EBS volume.",
      "D: Amazon ElastiCache."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    "opts": [
      "A: Reserved instances.",
      "B: Spot instances.",
      "C: Dedicated instances.",
      "D: On-demand instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    "opts": [
      "A: Reserved Instances.",
      "B: On-demand Instances.",
      "C: Dedicated Instances.",
      "D: Spot Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following can be described as a global content delivery network (CDN) service?",
    "opts": [
      "A: AWS VPN.",
      "B: AWS Direct Connect.",
      "C: AWS Regions.",
      "D: Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "Which of the following services allows customers to manage their agreements with AWS?",
    "opts": [
      "A: AWS Artifact.",
      "B: AWS Certificate Manager.",
      "C: AWS Systems Manager.",
      "D: AWS Organizations."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    "opts": [
      "A: Amazon VPC.",
      "B: Amazon DynamoDB.",
      "C: Amazon Elastic MapReduce.",
      "D: AWS IAM.",
      "E: Amazon Elastic Compute Cloud."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "VPC",
      "DynamoDB"
    ]
  },
  {
    "q": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    "opts": [
      "A: Amazon Aurora.",
      "B: Amazon DynamoDB.",
      "C: Amazon Elastic Block Store.",
      "D: Amazon Redshift."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    "opts": [
      "A: AWS Identity and Access Management (IAM) user.",
      "B: Infrastructure Event Management (IEM) engineer.",
      "C: AWS Consulting Partners.",
      "D: Technical Account Manager (TAM)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Support"
    ]
  },
  {
    "q": "How can you view the distribution of AWS spending in one of your AWS accounts?",
    "opts": [
      "A: By using Amazon VPC console.",
      "B: By contacting the AWS Support team.",
      "C: By using AWS Cost Explorer.",
      "D: By contacting the AWS Finance team."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "A: Access keys.",
      "B: Secret token.",
      "C: UserID.",
      "D: User name and password."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    "opts": [
      "A: Contact the AWS Customer Service team.",
      "B: Contact the AWS Abuse team.",
      "C: Contact the AWS Concierge team.",
      "D: Contact the AWS Security team."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Select TWO examples of the AWS shared controls.",
    "opts": [
      "A: Patch Management.",
      "B: IAM Management.",
      "C: VPC Management.",
      "D: Configuration Management.",
      "E: Data Center operations."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ]
  },
  {
    "q": "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    "opts": [
      "A: ELB.",
      "B: Auto Scaling.",
      "C: Amazon Athen.",
      "D: ECR.",
      "E: Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    "opts": [
      "A: Amazon SNS.",
      "B: Amazon Kinesis Video Streams.",
      "C: AWS CloudFormation.",
      "D: Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "SNS",
      "CloudFormation",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    "opts": [
      "A: A MySQL database installed on an EC2 instance.",
      "B: Amazon Aurora.",
      "C: Amazon DynamoDB.",
      "D: Amazon Neptune."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB"
    ]
  },
  {
    "q": "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    "opts": [
      "A: AWS CloudFormation.",
      "B: AWS Config.",
      "C: Amazon SES.",
      "D: Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Analytics"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    "opts": [
      "A: Client-side encryption.",
      "B: Configuring infrastructure devices.",
      "C: Server-side encryption.",
      "D: Filtering traffic with Security Groups."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "What does the AWS Health Dashboard provide? (Choose TWO)",
    "opts": [
      "A: Detailed troubleshooting guidance to address AWS events impacting your resources.",
      "B: Health checks for Auto Scaling instances.",
      "C: Recommendations for Cost Optimization.",
      "D: A dashboard detailing vulnerabilities in your applications.",
      "E: Personalized view of AWS service health."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Well-Architected"
    ]
  },
  {
    "q": "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    "opts": [
      "A: AWS Lambda.",
      "B: AWS Config.",
      "C: Amazon CloudWatch.",
      "D: AWS CloudTrail."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "CloudWatch"
    ]
  },
  {
    "q": "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    "opts": [
      "A: AWS Shield.",
      "B: AWS Management Console.",
      "C: AWS Secrets Manager.",
      "D: AWS Trusted Advisor."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    "opts": [
      "A: Amazon S3 provides unlimited storage for any type of data.",
      "B: Amazon S3 can run any type of application or backend system.",
      "C: Amazon S3 stores any number of objects, but with object size limits.",
      "D: Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
      "E: Amazon S3 provides 99.999999999% (11 9’s) of data durability."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    "opts": [
      "A: Disk disposal.",
      "B: Controlling physical access to compute resources.",
      "C: Patching the Network infrastructure.",
      "D: Setting password complexity rules.",
      "E: Configuring network access rules."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "AI / ML",
      "Shared Responsibility"
    ]
  },
  {
    "q": "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    "opts": [
      "A: Amazon Aurora.",
      "B: Amazon CloudWatch.",
      "C: AWS Quick Start reference deployments.",
      "D: AWS OpsWorks."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch"
    ]
  },
  {
    "q": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    "opts": [
      "A: Elastic RI.",
      "B: Premium RI.",
      "C: Standard RI.",
      "D: Convertible RI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What time-savings advantage is offered with the use of Amazon Rekognition?",
    "opts": [
      "A: Amazon Rekognition provides automatic watermarking of images.",
      "B: Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "C: Amazon Rekognition provides the ability to resize millions of images automatically.",
      "D: Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
    "opts": [
      "A: Data center security",
      "B: Business analysis",
      "C: Project management",
      "D: Operating system administration"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model, what is AWS responsible for?",
    "opts": [
      "A: Configuring Amazon VPC",
      "B: Managing application code",
      "C: Maintaining application traffic",
      "D: Managing the network infrastructure"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which service should be used to estimate the costs of running a new project on AWS?",
    "opts": [
      "A: AWS TCO Calculator",
      "B: AWS Simple Monthly Calculator",
      "C: AWS Cost Explorer API",
      "D: AWS Budgets"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
    "opts": [
      "A: AWS Organizations",
      "B: AWS Trusted Advisor",
      "C: AWS Usage Report",
      "D: Amazon EC2 dashboard"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Support"
    ]
  },
  {
    "q": "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
    "opts": [
      "A: AWS Config",
      "B: Amazon CloudWatch",
      "C: AWS X-Ray",
      "D: AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    "opts": [
      "A: Partial Upfront Reserved Instances for a 1-year term",
      "B: All Upfront Reserved Instances for a 1-year term",
      "C: All Upfront Reserved Instances for a 3-year term",
      "D: No Upfront Reserved Instances for a 3-year term"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is the responsibility of AWS?",
    "opts": [
      "A: Setting up AWS Identity and Access Management (IAM) users and groups",
      "B: Physically destroying storage media at end of life",
      "C: Patching guest operating systems",
      "D: Configuring security settings on Amazon EC2 instances"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "Which of the following is an advantage of using AWS?",
    "opts": [
      "A: AWS audits user data.",
      "B: Data is automatically secure.",
      "C: There is no guessing on capacity needs.",
      "D: AWS manages compliance needs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    "opts": [
      "A: AWS Lambda",
      "B: Amazon DynamoDB Accelerator",
      "C: Amazon Route 53",
      "D: Amazon CloudFront"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "CloudFront",
      "Route 53",
      "DynamoDB",
      "Storage"
    ]
  },
  {
    "q": "Which services manage and automate application deployments on AWS? (Choose two.)",
    "opts": [
      "A: AWS Elastic Beanstalk",
      "B: AWS CodeCommit",
      "C: AWS Data Pipeline",
      "D: AWS CloudFormation",
      "E: AWS Config"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFormation"
    ]
  },
  {
    "q": "A user wants guidance on possible savings when migrating from on-premises to AWS.   Which tool is suitable for this scenario?",
    "opts": [
      "A: AWS Budgets",
      "B: Cost Explorer",
      "C: AWS Total Cost of Ownership (TCO) Calculator",
      "D: AWS Well-Architected Tool"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Well-Architected"
    ]
  },
  {
    "q": "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Design for automated failure recovery",
      "B: Use multiple Availability Zones",
      "C: Manage changes via documented processes",
      "D: Test for moderate demand to ensure reliability",
      "E: Backup recovery to an on-premises environment"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)",
    "opts": [
      "A: Rotate passwords and access keys.",
      "B: Remove MFA tokens.",
      "C: Move resources to a different AWS Region.",
      "D: Delete AWS CloudTrail Resources.",
      "E: Contact AWS Support."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "What is an example of high availability in the AWS Cloud?",
    "opts": [
      "A: Consulting AWS technical support at any time day or night",
      "B: Ensuring an application remains accessible, even if a resource fails",
      "C: Making any AWS service available for use by paying on demand",
      "D: Deploying in any part of the world using AWS Regions"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    "opts": [
      "A: Amazon Inspector",
      "B: AWS Web Application Firewall (AWS WAF)",
      "C: Elastic Load Balancing (ELB)",
      "D: AWS Shield"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security"
    ]
  },
  {
    "q": "A company wants to monitor the CPU usage of its Amazon EC2 resources.   Which AWS service should the company use?",
    "opts": [
      "A: AWS CloudTrail",
      "B: Amazon CloudWatch",
      "C: AWS Cost and Usage report",
      "D: Amazon Simple Notification Service (Amazon SNS)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "SNS"
    ]
  },
  {
    "q": "What is an AWS Identity and Access Management (IAM) role?",
    "opts": [
      "A: A user associated with an AWS resource",
      "B: A group associated with an AWS resource",
      "C: An entity that defines a set of permissions for use with an AWS resource",
      "D: An authentication credential associated with a multi-factor authentication (MFA) token"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "What are the advantages of Reserved Instances? (Choose two.)",
    "opts": [
      "A: They provide a discount over on-demand pricing.",
      "B: They provide access to additional instance types.",
      "C: They provide additional networking capability.",
      "D: Customers can upgrade instances as new types become available.",
      "E: Customers can reserve capacity in an Availability Zone."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    "opts": [
      "A: They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "B: They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "C: They enable the application's static content to reside closer to end users.",
      "D: They are able to distribute incoming requests across a tier of web server instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "How can one AWS account use Reserved Instances from another AWS account?",
    "opts": [
      "A: By using Amazon EC2 Dedicated Instances",
      "B: By using AWS Organizations consolidated billing",
      "C: By using the AWS Cost Explorer tool",
      "D: By using AWS Budgets"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds.   For how much time will the customer be billed?",
    "opts": [
      "A: 3 hours, 5 minutes",
      "B: 3 hours, 5 minutes, and 6 seconds",
      "C: 3 hours, 6 minutes",
      "D: 4 hours"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following AWS services provide compute resources? (Choose two.)",
    "opts": [
      "A: AWS Lambda",
      "B: Amazon Elastic Container Service (Amazon ECS)",
      "C: AWS CodeDeploy",
      "D: Amazon Glacier",
      "E: AWS Organizations"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "ECS / Fargate",
      "Storage"
    ]
  },
  {
    "q": "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
    "opts": [
      "A: Amazon GameLift",
      "B: AWS CloudFormation",
      "C: AWS Data Pipeline",
      "D: AWS Glue"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Amazon EBS",
      "B: AWS Direct Connect",
      "C: Amazon CloudFront",
      "D: AWS Storage Gateway",
      "E: Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
    "opts": [
      "A: AWS CloudHSM",
      "B: AWS Direct Connect",
      "C: AWS VPN",
      "D: Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "Which services use AWS edge locations? (Choose two.)",
    "opts": [
      "A: Amazon CloudFront",
      "B: AWS Shield",
      "C: Amazon EC2",
      "D: Amazon RDS",
      "E: Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "CloudFront",
      "Security"
    ]
  },
  {
    "q": "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
    "opts": [
      "A: Amazon VPC",
      "B: AWS Direct Connect",
      "C: AWS Directory Service",
      "D: Amazon API Gateway"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
    "opts": [
      "A: AWS Cost Explorer",
      "B: AWS Budgets",
      "C: AWS Cost and Usage report",
      "D: AWS Total Cost of Ownership (TCO) Calculator"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)",
    "opts": [
      "A: Users pay for software by the hour or month depending on licensing.",
      "B: AWS Marketplace enables the user to launch applications with 1-Click.",
      "C: AWS Marketplace data encryption is managed by a third-party vendor.",
      "D: AWS Marketplace eliminates the need to upgrade to newer software versions.",
      "E: Users can deploy third-party software without testing."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Security"
    ]
  },
  {
    "q": "Which of the following is a cloud architectural design principle?",
    "opts": [
      "A: Scale up, not out.",
      "B: Loosely couple components.",
      "C: Build monolithic systems.",
      "D: Use commercial database software."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)",
    "opts": [
      "A: Firmware upgrades of network infrastructure",
      "B: Patching of operating systems",
      "C: Patching of the underlying hypervisor",
      "D: Physical security of data centers",
      "E: Configuration of the security group"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which service enables customers to audit and monitor changes in AWS resources?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: Amazon GuardDuty",
      "C: Amazon Inspector",
      "D: AWS Config"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    "opts": [
      "A: AWS CloudTrail",
      "B: AWS Trusted Advisor",
      "C: Amazon CloudWatch",
      "D: Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch",
      "Security",
      "Support"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model, who is responsible for configuration management?",
    "opts": [
      "A: It is solely the responsibility of the customer.",
      "B: It is solely the responsibility of AWS.",
      "C: It is shared between AWS and the customer.",
      "D: It is not part of the AWS shared responsibility model."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
    "opts": [
      "A: AWS CloudFormation",
      "B: AWS Direct Connect",
      "C: Amazon CloudFront",
      "D: Amazon Pinpoint"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Networking"
    ]
  },
  {
    "q": "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
    "opts": [
      "A: Security",
      "B: Reliability",
      "C: Elasticity",
      "D: High availability"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack.   Who should the user contact FIRST about this situation?",
    "opts": [
      "A: AWS Premium Support",
      "B: AWS Technical Account Manager",
      "C: AWS Solutions Architect",
      "D: AWS Abuse team"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)",
    "opts": [
      "A: There are no upfront commitments.",
      "B: AWS manages all security in the cloud.",
      "C: Users have the ability to provision resources on demand.",
      "D: Users have access to free and unlimited storage.",
      "E: Users have control over the physical infrastructure."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
    "opts": [
      "A: AWS Service Catalog",
      "B: AWS Config",
      "C: AWS Trusted Advisor",
      "D: AWS Organizations"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "What is AWS Trusted Advisor?",
    "opts": [
      "A: It is an AWS staff member who provides recommendations and best practices on how to use AWS.",
      "B: It is a network of AWS partners who provide recommendations and best practices on how to use AWS.",
      "C: It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.",
      "D: It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
    "opts": [
      "A: AWS Budgets",
      "B: AWS Cost Explorer",
      "C: AWS Organizations",
      "D: Consolidated billing"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service offers on-demand access to AWS security and compliance reports?",
    "opts": [
      "A: AWS CloudTrail",
      "B: AWS Artifact",
      "C: AWS Health",
      "D: Amazon CloudWatch"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)",
    "opts": [
      "A: Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "B: Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "C: Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "D: Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "E: Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "AI / ML"
    ]
  },
  {
    "q": "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
    "opts": [
      "A: AWS Config",
      "B: AWS Elastic Beanstalk",
      "C: Amazon Route 53",
      "D: Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53",
      "CloudWatch"
    ]
  },
  {
    "q": "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
    "opts": [
      "A: AWS IAM",
      "B: Amazon Connect",
      "C: Amazon VPC",
      "D: Amazon API Gateway"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "VPC"
    ]
  },
  {
    "q": "When a company provisions web servers in multiple AWS Regions, what is being increased?",
    "opts": [
      "A: Coupling",
      "B: Availability",
      "C: Security",
      "D: Durability"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "The pay-as-you-go pricing model for AWS services:",
    "opts": [
      "A: reduces capital expenditures.",
      "B: requires payment up front for AWS services.",
      "C: is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.",
      "D: reduces operational expenditures."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "Billing & Cost"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
    "opts": [
      "A: Lifecycle management of IAM credentials",
      "B: Physical security of global infrastructure",
      "C: Encryption of Amazon EBS volumes",
      "D: Firewall configuration"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security",
      "Storage",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service enables users to consolidate billing across multiple accounts?",
    "opts": [
      "A: Amazon QuickSight",
      "B: AWS Organizations",
      "C: AWS Budgets",
      "D: Amazon Forecast"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    "opts": [
      "A: Availability Zone",
      "B: Edge location",
      "C: Region",
      "D: Private networking"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    "opts": [
      "A: The ability to bid for a lower hourly cost.",
      "B: Paying a daily rate regardless of time used.",
      "C: Paying only for time used.",
      "D: Pre-paying for instances and paying a lower hourly rate."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: AWS Professional Services.",
      "C: AWS Systems Manager.",
      "D: AWS Partner Network (APN).",
      "E: AWS Secrets Manager."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A characteristic of edge locations is that they:",
    "opts": [
      "A: Host Amazon EC2 instances closer to users.",
      "B: Help lower latency and improve performance for users.",
      "C: Cache frequently changing data without reaching the origin server.",
      "D: Refresh data changes daily."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront"
    ]
  },
  {
    "q": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
    "opts": [
      "A: Command line interface.",
      "B: On-premises.",
      "C: Software Development Kits.",
      "D: Software-as-a-service.",
      "E: Hybrid."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is a value proposition of the AWS Cloud?",
    "opts": [
      "A: AWS is responsible for security in the AWS Cloud.",
      "B: No long-term contract is required.",
      "C: Provision new servers in days.",
      "D: AWS manages user applications in the AWS Cloud."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    "opts": [
      "A: Amazon EC2 Spot Instances.",
      "B: Amazon EC2 Dedicated Instances.",
      "C: Amazon EC2 On-Demand Instances.",
      "D: Amazon EC2 Reserved Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service is used to track record, and audit configuration changes made to AWS resources?",
    "opts": [
      "A: AWS Shield.",
      "B: AWS Config.",
      "C: AWS IAM.",
      "D: Amazon Inspector."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
    "opts": [
      "A: Fault tolerance.",
      "B: Global reach.",
      "C: Pay-as-you-go pricing.",
      "D: High availability."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "How can one AWS account use Reserved Instances from another AWS account?",
    "opts": [
      "A: By using Amazon EC2 Dedicated Instances.",
      "B: By using AWS Organizations consolidated billing.",
      "C: By using the AWS Cost Explorer tool.",
      "D: By using AWS Budgets."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
    "opts": [
      "A: AWS automatically distributes the data globally for higher durability.",
      "B: AWS will take care of operating the application.",
      "C: AWS makes it easy to architect for high availability.",
      "D: AWS can easily accommodate application demand changes.",
      "E: AWS takes care of application security patching."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    "opts": [
      "A: Amazon RDS.",
      "B: Amazon EC2.",
      "C: Amazon ElastiCache.",
      "D: AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "ECS / Fargate"
    ]
  },
  {
    "q": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
    "opts": [
      "A: Implementing Amazon Rekognition.",
      "B: Using AWS Shield-protected resources.",
      "C: Blocking access with Security Groups.",
      "D: Using Multi-Factor Authentication (MFA).",
      "E: Enforcing password strength and expiration."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "AI / ML"
    ]
  },
  {
    "q": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    "opts": [
      "A: Amazon Glacier",
      "B: AWS Snowball",
      "C: AWS Storage Gateway",
      "D: Amazon Elastic Block Storage (Amazon EBS)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    "opts": [
      "A: AWS Marketplace.",
      "B: Amazon Lumberyard.",
      "C: AWS Artifact.",
      "D: Amazon CloudSearch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is a component of the AWS Global Infrastructure?",
    "opts": [
      "A: Amazon Alexa.",
      "B: AWS Regions.",
      "C: Amazon Lightsail.",
      "D: AWS Organizations."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    "opts": [
      "A: On-Demand Instances.",
      "B: Reserved Instances.",
      "C: Spot Instances.",
      "D: Convertible Reserved Instances."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
    "opts": [
      "A: Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
      "B: Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
      "C: Use Amazon Athena to query data from the on-premises database servers",
      "D: Connect the company’s on-premises data center to AWS using AWS Direct Connect",
      "E: Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "CloudFront",
      "Analytics",
      "Networking"
    ]
  },
  {
    "q": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    "opts": [
      "A: Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "B: Run AWS Trusted Advisor and review the findings.",
      "C: Open the AWS IAM console and check the inbound rule filters for open access.",
      "D: In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "Lambda",
      "VPC",
      "Support"
    ]
  },
  {
    "q": "Which of the following security-related services does AWS offer? (Select TWO)",
    "opts": [
      "A: Multi-factor authentication physical tokens.",
      "B: AWS Trusted Advisor security checks.",
      "C: Data encryption.",
      "D: Automated penetration testing.",
      "E: Amazon S3 copyrighted content detection."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
    "opts": [
      "A: AWS WAF.",
      "B: Amazon DynamoDB.",
      "C: Amazon EC2.",
      "D: Amazon CloudFront.",
      "E: Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "DynamoDB",
      "Security"
    ]
  },
  {
    "q": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    "opts": [
      "A: Amazon Elastic Block Store (Amazon EBS).",
      "B: Amazon Machine Image.",
      "C: Amazon EC2 Systems Manager.",
      "D: Amazon AppStream 2.0."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    "opts": [
      "A: Think parallel.",
      "B: Implement elasticity.",
      "C: Decouple your components.",
      "D: Design for failure."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    "opts": [
      "A: Easy and fast deployment of applications in multiple Regions around the world.",
      "B: Security of the AWS Cloud.",
      "C: Elasticity of the AWS Cloud.",
      "D: Lower variable costs due to massive economies of scale."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What can users access from AWS Artifact?",
    "opts": [
      "A: AWS security and compliance documents.",
      "B: A download of configuration management details for all AWS resources.",
      "C: Training materials for AWS services.",
      "D: A security assessment of the applications deployed in the AWS Cloud."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Compared with costs in traditional and virtualized data centers, AWS has:",
    "opts": [
      "A: Greater variable costs and greater upfront costs.",
      "B: Fixed usage costs and lower upfront costs.",
      "C: Lower variable costs and greater upfront costs.",
      "D: Lower variable costs and lower upfront costs."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service would a customer use with a static website to achieve tower latency and high transfer speeds?",
    "opts": [
      "A: AWS Lambda.",
      "B: Amazon DynamoDB Accelerator.",
      "C: Amazon Route 53.",
      "D: Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "CloudFront",
      "Route 53",
      "DynamoDB",
      "Storage"
    ]
  },
  {
    "q": "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    "opts": [
      "A: They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "B: They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "C: They enable the application’s stalk: content to reside closer to end users.",
      "D: They are able to distribute incoming requests across a tier of web server instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A: A public and private key-pair.",
      "B: Amazon Inspector.",
      "C: AWS Identity and Access Management (IAM) policies.",
      "D: Security Groups."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "How should a customer forecast the future costs for running a new web application?",
    "opts": [
      "A: Amazon Aurora Backtrack.",
      "B: Amazon CloudWatch Billing Alarms.",
      "C: AWS Simple Monthly Calculator.",
      "D: AWS Cost and Usage report."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Where are AWS compliance documents, such as an SOC 1 report, located?",
    "opts": [
      "A: Amazon Inspector.",
      "B: AWS CloudTrail.",
      "C: AWS Artifact.",
      "D: AWS Certificate Manager."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following tasks is the responsibility of AWS?",
    "opts": [
      "A: Encrypting client-side data.",
      "B: Configuring AWS Identity and Access Management (IAM) roles.",
      "C: Securing the Amazon EC2 hypervisor.",
      "D: Setting user password policies."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
    "opts": [
      "A: Firmware upgrades of network infrastructure.",
      "B: Patching of operating systems.",
      "C: Patching of the underlying hypervisor.",
      "D: Physical security of data centers.",
      "E: Configuration of the security group."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
    "opts": [
      "A: Amazon Simple Storage Service (Amazon S3).",
      "B: Amazon DynamoDB.",
      "C: Amazon Kinesis.",
      "D: Amazon Redshift."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
    "opts": [
      "A: Amazon EBS.",
      "B: AWS Direct Connect.",
      "C: Amazon CloudFront.",
      "D: AWS Storage Gateway.",
      "E: Amazon Connect."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "What are the advantages of the AWS Cloud (Select TWO)",
    "opts": [
      "A: Fixed rate monthly cost.",
      "B: No need to guess capacity requirements.",
      "C: Increased speed to market.",
      "D: Increased upfront capital expenditure.",
      "E: Physical access to cloud data centers."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    "opts": [
      "A: Users do not have to wait for infrastructure provisioning.",
      "B: The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      "C: AWS takes over application configuration management on behalf of users.",
      "D: Users do not need to address security and compliance issues."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
    "opts": [
      "A: AWS Elastic Beanstalk.",
      "B: AWS OpsWorks.",
      "C: AWS CodeDeploy.",
      "D: AWS Batch.",
      "E: AWS X-Ray."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is an example of agility in the AWS Cloud?",
    "opts": [
      "A: Access to multiple instance types.",
      "B: Access to managed services.",
      "C: Using Consolidated Billing to produce one bill.",
      "D: Decreased acquisition time for new compute resources."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    "opts": [
      "A: Amazon Inspector.",
      "B: AWS Web Application Firewall (AWS WAF).",
      "C: Elastic Load Balancing (ELB).",
      "D: AWS Shield."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security"
    ]
  },
  {
    "q": "Which of the following are advantages of AWS consolidated billing? (Choose two)",
    "opts": [
      "A: The ability to receive one bill for multiple accounts.",
      "B: Service limits increasing by default in all accounts.",
      "C: A fixed discount on the monthly bill.",
      "D: Potential volume discounts, as usage in all accounts is combined.",
      "E: The automatic extension of the master account’s AWS support plan to all accounts."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon DynamoDB.",
      "C: Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store.",
      "D: Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "DynamoDB",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
    "opts": [
      "A: AWS Concierge.",
      "B: AWS CloudFormation.",
      "C: Amazon Simple Storage Service (Amazon S3).",
      "D: Amazon EC2 Auto Scaling.",
      "E: AWS Management Console."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "CloudFormation",
      "Support"
    ]
  },
  {
    "q": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    "opts": [
      "A: One-year, No Upfront, Standard RI pricing.",
      "B: One-year, All Upfront, Convertible RI pricing.",
      "C: Three-year, All Upfront, Standard RI pricing.",
      "D: Three-year, No Upfront, Convertible RI pricing."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
    "opts": [
      "A: Summaries by Amazon Simple Notification Service (Amazon SNS).",
      "B: Free Amazon Elasticsearch Service analytics.",
      "C: Provided at no charge.",
      "D: Real-time monitoring.",
      "E: Adjustable retention."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS"
    ]
  },
  {
    "q": "Which of the following is an AWS-managed compute service?",
    "opts": [
      "A: Amazon SWF.",
      "B: Amazon EC2.",
      "C: AWS Lambda.",
      "D: Amazon Aurora."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Lambda"
    ]
  },
  {
    "q": "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    "opts": [
      "A: Amazon Elastic Compute Cloud (Amazon EC2).",
      "B: AWS Lambda.",
      "C: Amazon DynamoDB.",
      "D: AWS CodeCommit."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "DynamoDB"
    ]
  },
  {
    "q": "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
    "opts": [
      "A: Patching underlying infrastructure",
      "B: Physical security",
      "C: Patching Amazon EC2 instances",
      "D: Patching network infrastructure"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model who is responsible for configuration management?",
    "opts": [
      "A: It is solely the responsibility of the customer.",
      "B: It is solely the responsibility of AWS.",
      "C: It is shared between AWS and the customer.",
      "D: It is not part of the AWS shared responsibility model."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    "opts": [
      "A: Amazon GuardDuty.",
      "B: Amazon Macie.",
      "C: Amazon Inspector.",
      "D: AWS Shield."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following BEST describe the AWS pricing model? (Select TWO)",
    "opts": [
      "A: Fixed-term.",
      "B: Pay-as-you-go.",
      "C: Colocation.",
      "D: Planned.",
      "E: Variable cost."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
    "opts": [
      "A: Ensuring that application data is encrypted at rest.",
      "B: Ensuring that AWS NTP servers are set to the correct time.",
      "C: Ensuring that users have received security training in the use of AWS services.",
      "D: Ensuring that access to data centers is restricted.",
      "E: Ensuring that hardware is disposed of properly."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    "opts": [
      "A: Create one global AWS account and move all AWS resources to that account.",
      "B: Sign up for three years of Reserved Instance pricing up front.",
      "C: Use the consolidated billing feature from AWS Organizations.",
      "D: Sign up for the AWS Enterprise support plan to get volume discounts."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model offers the MOST significant discount when compared to OnDemand Instances?",
    "opts": [
      "A: A Partial Upfront Reserved Instances for a 1-year term.",
      "B: All Upfront Reserved instances for a 1 year form.",
      "C: All Upfront Reserved Instances for a 3 year term.",
      "D: No Upfront Reserved Instances for a 3 year term."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
    "opts": [
      "A: Amazon Glacier.",
      "B: Amazon RDS.",
      "C: AWS Snowball.",
      "D: Amazon Redshift.",
      "E: Amazon EFS."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service allows users to identify the changes made to a resource over time?",
    "opts": [
      "A: Amazon Inspector.",
      "B: AWS Config.",
      "C: AWS Service Catalog.",
      "D: AWS IAM."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "According to best practices, how should an application be designed to run in the AWS Cloud?",
    "opts": [
      "A: Use tightly coupled components.",
      "B: Use loosely coupled components.",
      "C: Use infrequently coupled components.",
      "D: Use frequently coupled components."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which benefits are included with the AWS Business Support plan? (Select TWO)",
    "opts": [
      "A: 24/7 assistance by way of live chat or a telephone call.",
      "B: Support from a dedicated AWS Technical Account Manager.",
      "C: An unlimited number of cases and contacts.",
      "D: 15-minute response time for production system interruption cases.",
      "E: Annual operational reviews with AWS Solutions Architects."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    "opts": [
      "A: Amazon Route 53.",
      "B: Amazon Neptune.",
      "C: Amazon SageMaker.",
      "D: Amazon Lightsail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "AI / ML"
    ]
  },
  {
    "q": "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    "opts": [
      "A: Dedicated Hosts.",
      "B: Dedicated Instances.",
      "C: Spot Instances.",
      "D: Reserved Instances."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    "opts": [
      "A: Dedicated RIs.",
      "B: Scheduled RIs.",
      "C: Convertible RIs.",
      "D: Standard RIs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which service is best for storing common database query results, which helps to alleviate database access load?",
    "opts": [
      "A: Amazon Machine Learning.",
      "B: Amazon SQS.",
      "C: Amazon ElastiCache.",
      "D: Amazon EC2 Instance Store."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "SQS"
    ]
  },
  {
    "q": "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
    "opts": [
      "A: For non-production applications.",
      "B: For stateful workloads.",
      "C: For applications that cannot have interruptions.",
      "D: For fault-tolerant flexible applications.",
      "E: For sensitive database applications."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "Which AWS tools assist with estimating costs? (Select three)",
    "opts": [
      "A: Detailed billing report.",
      "B: Cost allocation tags.",
      "C: AWS Simple Monthly Calculator.",
      "D: AWS Total Cost of Ownership (TCO) Calculator.",
      "E: Cost Estimator."
    ],
    "a": 1,
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
    "opts": [
      "A: Elastic Load Balancer.",
      "B: Amazon EC2 Auto Scaling.",
      "C: Amazon Route 53.",
      "D: Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53"
    ]
  },
  {
    "q": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    "opts": [
      "A: Enterprise.",
      "B: Business.",
      "C: Developer.",
      "D: Basic."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Access keys in AWS Identity and Access Management (IM1) are used to:",
    "opts": [
      "A: Log in to the AWS Management Console.",
      "B: Make programmatic calls to AWS from AWS APIs.",
      "C: Log in to Amazon EC2 instances.",
      "D: Authenticate to AWS CodeCommit repositories."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    "opts": [
      "A: AWS Glue.",
      "B: AWS Data Pipeline.",
      "C: Amazon CloudSearch.",
      "D: Amazon Athena."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Analytics"
    ]
  },
  {
    "q": "How does AWS shorten the time to provision IT resources?",
    "opts": [
      "A: It supplies an online IT ticketing platform for resource requests.",
      "B: It supports automatic code validation services.",
      "C: It provides the ability to programmatically provision existing resources.",
      "D: It automates the resource request process from a company’s IT vendor list."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
    "opts": [
      "A: Amazon CloudFront.",
      "B: AWS Cloud9.",
      "C: AWS CloudTrail.",
      "D: AWS CloudHSM.",
      "E: Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following are characteristics of Amazon S3? (Select TWO)",
    "opts": [
      "A: A global file system.",
      "B: An object store.",
      "C: A local file store.",
      "D: A network file system.",
      "E: A durable storage system."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    "opts": [
      "A: AWS Budgets.",
      "B: Cost Explorer.",
      "C: AWS Total Cost of Ownership (TCO) Calculator.",
      "D: AWS Well-Architected Tool."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the following services is in the category of AWS serverless platform?",
    "opts": [
      "A: Amazon EMR.",
      "B: Elastic Load Balancing.",
      "C: AWS Lambda.",
      "D: AWS Mobile Hub."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "Analytics"
    ]
  },
  {
    "q": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    "opts": [
      "A: Cost allocation tags.",
      "B: Consolidated billing.",
      "C: AWS Budgets.",
      "D: AWS Marketplace."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS Trusted Advisor.",
      "C: Consolidated billing.",
      "D: Detailed billing."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    "opts": [
      "A: Cloud-native.",
      "B: Partner network.",
      "C: Hybrid architecture.",
      "D: Infrastructure as a service."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What technology enables compute capacity to adjust as loads change?",
    "opts": [
      "A: Load balancing.",
      "B: Automatic failover.",
      "C: Round robin.",
      "D: Auto Scaling."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS service is a managed NoSQL database?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon DynamoDB.",
      "C: Amazon Aurora.",
      "D: Amazon RDS for ManaDB."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    "opts": [
      "A: Data centers contain regions.",
      "B: Regions contain Availability Zones.",
      "C: Availability Zones contain edge locations.",
      "D: Edge locations contain regions."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    "opts": [
      "A: Using many instances in parallel.",
      "B: Using a single large instance during off-peak hours.",
      "C: Using dedicated hardware.",
      "D: Using a large GPU instance type."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    "opts": [
      "A: Amazon EC2.",
      "B: Amazon Relational Database Service (Amazon RDS).",
      "C: Amazon Aurora.",
      "D: Amazon Redshift.",
      "E: Amazon S3."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    "opts": [
      "A: API keys.",
      "B: Access keys.",
      "C: User names/Passwords.",
      "D: SSH keys."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "The user is fully responsible for which action when running workloads on AWS?",
    "opts": [
      "A: Patching the infrastructure components.",
      "B: Maintaining the underlying infrastructure components.",
      "C: Maintaining physical and environmental controls.",
      "D: Implementing controls to route application traffic."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS support plan includes a dedicated Technical Account Manager?",
    "opts": [
      "A: Developer.",
      "B: Enterprise.",
      "C: Business.",
      "D: Basic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "What time-savings advantage is offered with the use of Amazon Rekognition?",
    "opts": [
      "A: Amazon Rekognition provides automatic watermarking of images.",
      "B: Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "C: Amazon Recognition provides the ability to resize millions of images automatically.",
      "D: Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    "opts": [
      "A: Amazon AutoScaling.",
      "B: Amazon Redshift.",
      "C: AWS CloudTrail.",
      "D: AWS Lambda."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Analytics"
    ]
  },
  {
    "q": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    "opts": [
      "A: AWS manages the data stored in Amazon RDS tables.",
      "B: AWS manages the maintenance of the operating system.",
      "C: AWS automatically scales up instance types on demand.",
      "D: AWS manages the database type."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    "opts": [
      "A: Implementing elasticity enabling the application to scale up or scale down as demand changes.",
      "B: Enabling several EC2 instances to run in parallel to achieve better performance.",
      "C: Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
      "D: Doubling EC2 computing resources to increase system fault tolerance."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    "opts": [
      "A: AWS Partner Network Technology Partners.",
      "B: AWS Marketplace.",
      "C: AWS Partner Network Consulting Partners.",
      "D: AWS Service Catalog."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    "opts": [
      "A: Amazon Glacier.",
      "B: AWS Storage Gateway.",
      "C: Amazon S3.",
      "D: Amazon EBS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    "opts": [
      "A: Implement automation.",
      "B: Design for agility.",
      "C: Design for failure.",
      "D: Implement elasticity."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    "opts": [
      "A: AWS IAM.",
      "B: AWS Organizations.",
      "C: AWS Schema Conversion Tool.",
      "D: AWS Config."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
    "opts": [
      "A: Managing edge locations",
      "B: Physical security",
      "C: Firewall configuration",
      "D: Global infrastructure"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ]
  },
  {
    "q": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    "opts": [
      "A: AWS Senior Support Engineers",
      "B: AWS Technical Account Managers",
      "C: AWS Trusted Advisor",
      "D: AWS Discussion Forums"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    "opts": [
      "A: Multiple Availability Zones",
      "B: Performance efficiency",
      "C: Security",
      "D: Encryption usage",
      "E: High availability"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ]
  },
  {
    "q": "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    "opts": [
      "A: No upfront payment",
      "B: Hourly on-demand payment",
      "C: Partial upfront payment",
      "D: All upfront payment"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What is an advantage of deploying an application across multiple Availability Zones?",
    "opts": [
      "A: There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "B: The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "C: There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
      "D: There will be decreased application latency that will improve the user experience."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS.   What is the MOST appropriate response?",
    "opts": [
      "A: Inform the user that AWS pricing allows for on-demand pricing.",
      "B: Direct the user to the AWS Simple Monthly Calculator for an estimate.",
      "C: Use Amazon QuickSight to analyze current spending on-premises.",
      "D: Use Amazon AppStream 2.0 for real-time pricing analytics."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources.   What combination of actions will enable the company to accomplish this goal? (Choose two.)",
    "opts": [
      "A: Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
      "B: Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.",
      "C: Use Amazon Athena to query data from the on-premises database servers.",
      "D: Connect the company's on-premises data center to AWS using AWS Direct Connect.",
      "E: Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "CloudFront",
      "Analytics",
      "Networking"
    ]
  },
  {
    "q": "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses.   Which AWS service can help secure the application and block the malicious traffic?",
    "opts": [
      "A: AWS IAM",
      "B: Amazon GuardDuty",
      "C: Amazon Simple Notification Service (Amazon SNS)",
      "D: AWS WAF"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "SNS",
      "Security"
    ]
  },
  {
    "q": "Treating infrastructure as code in the AWS Cloud allows users to:",
    "opts": [
      "A: automate migration of on-premises hardware to AWS data centers.",
      "B: let a third party automate an audit of the AWS infrastructure.",
      "C: turn over application code to AWS so it can run on the AWS infrastructure.",
      "D: automate the infrastructure provisioning process."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ]
  },
  {
    "q": "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud.   Which AWS service should be used?",
    "opts": [
      "A: AWS VPN",
      "B: AWS Direct Connect",
      "C: Amazon API Gateway",
      "D: Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    "opts": [
      "A: AWS Glue",
      "B: AWS Data Pipeline",
      "C: Amazon CloudSearch",
      "D: Amazon Athena"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Analytics"
    ]
  },
  {
    "q": "AWS CloudFormation is designed to help the user:",
    "opts": [
      "A: model and provision resources.",
      "B: update application code.",
      "C: set up data lakes.",
      "D: create reports for billing."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following is an AWS database service?",
    "opts": [
      "A: Amazon Redshift",
      "B: Amazon Elastic Block Store (Amazon EBS)",
      "C: Amazon S3 Glacier",
      "D: AWS Snowball"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports.   What is the SIMPLEST way to do this?",
    "opts": [
      "A: Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "B: Run AWS Trusted Advisor and review the findings.",
      "C: Open the AWS IAM console and check the inbound rule filters for open access.",
      "D: In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "Lambda",
      "VPC",
      "Support"
    ]
  },
  {
    "q": "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)",
    "opts": [
      "A: AWS automatically distributes the data globally for higher durability.",
      "B: AWS will take care of operating the application.",
      "C: AWS makes it easy to architect for high availability.",
      "D: AWS can easily accommodate application demand changes.",
      "E: AWS takes care application security patching."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances.   Which AWS service will provide this assessment report?",
    "opts": [
      "A: EC2 security groups",
      "B: AWS Config",
      "C: Amazon Macie",
      "D: Amazon Inspector"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "How can a company isolate the costs of production and non-production workloads on AWS?",
    "opts": [
      "A: Create Identity and Access Management (IAM) roles for production and non-production workloads.",
      "B: Use different accounts for production and non-production expenses.",
      "C: Use Amazon EC2 for non-production workloads and other services for production workloads.",
      "D: Use Amazon CloudWatch to monitor the use of services."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "CloudWatch"
    ]
  },
  {
    "q": "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
    "opts": [
      "A: AWS Service Catalog",
      "B: AWS Marketplace",
      "C: AWS Quick Start",
      "D: AWS CodeDeploy"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements.   Which AWS service will meet this requirement at the LOWEST cost?",
    "opts": [
      "A: Amazon S3",
      "B: AWS Snowball",
      "C: Amazon Redshift",
      "D: Amazon S3 Glacier"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "What are the immediate benefits of using the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Increased IT staff.",
      "B: Capital expenses are replaced with variable expenses.",
      "C: User control of infrastructure.",
      "D: Increased agility.",
      "E: AWS holds responsibility for security in the cloud."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    "opts": [
      "A: Amazon GuardDuty",
      "B: Amazon Macie",
      "C: Amazon Inspector",
      "D: AWS Shield"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "What is the purpose of AWS Storage Gateway?",
    "opts": [
      "A: It ensures on-premises data storage is 99.999999999% durable.",
      "B: It transports petabytes of data to and from AWS.",
      "C: It connects to multiple Amazon EC2 instances.",
      "D: It connects on-premises data storage to the AWS Cloud."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "What should users do if they want to install an application in geographically isolated locations?",
    "opts": [
      "A: Install the application using multiple internet gateways.",
      "B: Deploy the application to an Amazon VPC.",
      "C: Deploy the application to multiple AWS Regions.",
      "D: Configure the application using multiple NAT gateways."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "A system in the AWS Cloud is designed to withstand the failure of one or more components.   What is this an example of?",
    "opts": [
      "A: Elasticity",
      "B: High Availability",
      "C: Scalability",
      "D: Agility"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system.   Which AWS service can fulfill this requirement?",
    "opts": [
      "A: AWS Direct Connect",
      "B: AWS VPN",
      "C: Amazon Connect",
      "D: AWS Data Pipeline"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "Within the AWS shared responsibility model, who is responsible for security and compliance?",
    "opts": [
      "A: The customer is responsible.",
      "B: AWS is responsible.",
      "C: AWS and the customer share responsibility.",
      "D: AWS shares responsibility with the relevant governing body."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "To use the AWS CLI, users are required to generate:",
    "opts": [
      "A: a password policy.",
      "B: an access/secret key.",
      "C: a managed policy.",
      "D: an API key."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which AWS service is used to provide encryption for Amazon EBS?",
    "opts": [
      "A: AWS Certificate Manager",
      "B: AWS Systems Manager",
      "C: AWS KMS",
      "D: AWS Config"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)",
    "opts": [
      "A: By the time it takes for the Lambda function to execute.",
      "B: By the number of versions of a specific Lambda function.",
      "C: By the number of requests made for a given Lambda function.",
      "D: By the programming language that is used for the Lambda function.",
      "E: By the total number of Lambda functions in an AWS account."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)",
    "opts": [
      "A: There are more AWS Regions than Availability Zones.",
      "B: There are more edge locations than AWS Regions.",
      "C: An edge location is an Availability Zone.",
      "D: There are more AWS Regions than edge locations.",
      "E: There are more Availability Zones than AWS Regions."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "What does AWS Shield Standard provide?",
    "opts": [
      "A: WAF rules",
      "B: DDoS protection",
      "C: Identity and Access Management (IAM) permissions and access to resources",
      "D: Data encryption"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources.   What expense can be reduced using the AWS Cloud?",
    "opts": [
      "A: The cost of writing custom-built Java or Node .js code",
      "B: Penetration testing for security",
      "C: hardware required to support new applications",
      "D: Writing specific test cases for third-party applications."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What does AWS Marketplace allow users to do? (Choose two.)",
    "opts": [
      "A: Sell unused Amazon EC2 Spot Instances.",
      "B: Sell solutions to other AWS users.",
      "C: Buy third-party software that runs on AWS.",
      "D: Purchase AWS security and compliance documents.",
      "E: Order AWS Snowball."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
    "opts": [
      "A: All resources run using on-premises infrastructure.",
      "B: Some resources run on-premises and some run in a colocation center.",
      "C: All resources run in the AWS Cloud.",
      "D: Some resources run on-premises and some run in the AWS Cloud."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service allows users to identify the changes made to a resource over time?",
    "opts": [
      "A: Amazon Inspector",
      "B: AWS Config",
      "C: AWS Service Catalog",
      "D: AWS IAM"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    "opts": [
      "A: By minimizing large capital expenditures",
      "B: By having no responsibility for third-party license costs",
      "C: By having no operational expenditures",
      "D: By having AWS manage applications"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    "opts": [
      "A: Ensuring network connectivity from AWS to the internet",
      "B: Patching and fixing flaws within the AWS Cloud infrastructure",
      "C: Ensuring the physical security of cloud data centers",
      "D: Ensuring Amazon EBS volumes are backed up"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Shared Responsibility"
    ]
  },
  {
    "q": "What are the advantages of the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Fixed rate monthly cost",
      "B: No need to guess capacity requirements",
      "C: Increased speed to market",
      "D: Increased upfront capital expenditure",
      "E: Physical access to cloud data centers"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)",
    "opts": [
      "A: The credit card processing fees for application transactions in the cloud.",
      "B: The cost of purchasing and installing server hardware in the on-premises data.",
      "C: The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.",
      "D: The costs of third-party penetration testing.",
      "E: The advertising costs associated with an ongoing enterprise-wide campaign."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    "opts": [
      "A: Service control policies (SCPs)",
      "B: Consolidated billing",
      "C: All Upfront Reserved Instances",
      "D: AWS Cost Explorer"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
    "opts": [
      "A: Virtualization infrastructure",
      "B: Network infrastructure",
      "C: Application security",
      "D: Physical security of hardware"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "What helps a company provide a lower latency experience to its users globally?",
    "opts": [
      "A: Using an AWS Region that is central to all users",
      "B: Using a second Availability Zone in the AWS Region that is using used",
      "C: Enabling caching in the AWS Region that is being used",
      "D: Using edge locations to put content closer to all users"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    "opts": [
      "A: Users do not have to wait for infrastructure provisioning.",
      "B: The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      "C: AWS takes over application configuration management on behalf of users.",
      "D: Users do not need to address security and compliance issues."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
    "opts": [
      "A: AWS QuickSight",
      "B: Amazon Lightsail",
      "C: AWS Organizations",
      "D: Amazon Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ]
  },
  {
    "q": "Which Amazon RDS feature can be used to achieve high availability?",
    "opts": [
      "A: Multiple Availability Zones",
      "B: Amazon Reserved Instances",
      "C: Provisioned IOPS storage",
      "D: Enhanced monitoring"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Where should users report that AWS resources are being used for malicious purposes?",
    "opts": [
      "A: AWS Abuse team",
      "B: AWS Shield",
      "C: AWS Support",
      "D: AWS Developer Forums"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
    "opts": [
      "A: AWS CloudTrail",
      "B: Amazon Simple Notification Service (Amazon SNS)",
      "C: VPC Flow Logs",
      "D: AWS CloudHSM"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "SNS"
    ]
  },
  {
    "q": "What is an AWS Cloud design best practice?",
    "opts": [
      "A: Tight coupling of components",
      "B: Single point of failure",
      "C: High availability",
      "D: Overprovisioning of resources"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    "opts": [
      "A: Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.",
      "B: Customers retain full administrative access to their Amazon EC2 instances.",
      "C: Amazon EC2 instances can be launched on-demand when needed.",
      "D: Customers can permanently run enough instances to handle peak workloads."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service would simplify migration of a database to AWS?",
    "opts": [
      "A: AWS Storage Gateway",
      "B: AWS Database Migration Service (AWS DMS)",
      "C: Amazon Elastic Compute Cloud (Amazon EC2)",
      "D: Amazon AppStream 2.0"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    "opts": [
      "A: By minimizing large capital expenditures.",
      "B: By having no responsibility for third-party license costs.",
      "C: By having no operational expenditures.",
      "D: By having AWS manage applications."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO)",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: AWS Online Tech Talks.",
      "C: AWS Blog.",
      "D: AWS Forums.",
      "E: AWS Classroom Training."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following will enhance the security of access to the AWS Management Console’? (Select TWO)",
    "opts": [
      "A: AWS Secrets Manager.",
      "B: AWS Certificate Manager.",
      "C: AWS Multi-Factor Authentication (AWS MFA).",
      "D: Security groups.",
      "E: Password policies."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO)",
    "opts": [
      "A: Amazon CloudFront distributions.",
      "B: Amazon Route 53.",
      "C: Security Groups.",
      "D: Subnets.",
      "E: Elastic Load Balancing."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Route 53"
    ]
  },
  {
    "q": "For which auditing process does AWS have sole responsibility?",
    "opts": [
      "A: AWS IAM policies.",
      "B: Physical security.",
      "C: Amazon S3 bucket policies.",
      "D: AWS CloudTrail Logs."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM"
    ]
  },
  {
    "q": "Which of the following are advantages of AWS consolidated billing? (Select TWO)",
    "opts": [
      "A: The ability to receive one bill for multiple accounts.",
      "B: Service limits increasing by default in all accounts.",
      "C: A fixed discount on the monthly bill.",
      "D: Potential volume discounts, as usage in all accounts is combined.",
      "E: The automatic extension of the master account’s AWS support plan to all accounts."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO)",
    "opts": [
      "A: Patching databases software.",
      "B: Testing application releases.",
      "C: Backing up databases.",
      "D: Creating database schema.",
      "E: Running penetration tests."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    "opts": [
      "A: Contact an AWS Account Manager to sign a new contract.",
      "B: Move an Availability Zone to the new Region.",
      "C: Begin deploying resources in the second Region.",
      "D: Download the AWS Management Console for the new Region."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Why is it beneficial to use Elastic Load Balancers with applications?",
    "opts": [
      "A: They allow for the conversion from Application Load.",
      "B: Balancers to Classic Load Balancers.",
      "C: They are capable of handling constant changes in network traffic patterns.",
      "D: They automatically adjust capacity. They are provided at no charge to users."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    "opts": [
      "A: Enterprise.",
      "B: Business.",
      "C: Developer",
      "D: Basic"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    "opts": [
      "A: Amazon S3.",
      "B: Amazon Glacier.",
      "C: Amazon EBS.",
      "D: Amazon EC2 Instance Store."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    "opts": [
      "A: AWS Enterprise Support.",
      "B: AWS Solutions Architects.",
      "C: AWS Professional Services.",
      "D: AWS Account Managers."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company needs 24/7 phone email and chat access with a response time of less than 1 hour if a production system has a service interruption Which AWS Support plan meets these requirements at the LOWEST cost?",
    "opts": [
      "A: Basic.",
      "B: Developer.",
      "C: Business.",
      "D: Enterprise."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    "opts": [
      "A: AWS Config.",
      "B: AWS Trusted Advisor.",
      "C: Amazon CloudWatch.",
      "D: Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Security",
      "Support"
    ]
  },
  {
    "q": "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Select TWO)",
    "opts": [
      "A: It identifies software vulnerabilities in applications running on AWS.",
      "B: It provides a list of cost optimization recommendations based on current AWS usage.",
      "C: It detects potential security vulnerabilities caused by permissions settings on account resources.",
      "D: It automatically corrects potential security issues caused by permissions settings on account resources.",
      "E: It provides proactive alerting whenever an Amazon EC2 instance has been compromised."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "Which AWS managed service is used to host databases?",
    "opts": [
      "A: AWS Batch.",
      "B: AWS Artifact.",
      "C: AWS Data Pipeline.",
      "D: Amazon RDS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "A: IAM group.",
      "B: IAM user.",
      "C: IAM role.",
      "D: IAM policy."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following is the customer responsible for?",
    "opts": [
      "A: Ensuring that disk drives are wiped after use.",
      "B: Ensuring that firmware is updated on hardware devices.",
      "C: Ensuring that data is encrypted at rest.",
      "D: Ensuring that network cables are category six or higher."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    "opts": [
      "A: Amazon S3.",
      "B: Amazon Glacier.",
      "C: Amazon EBS.",
      "D: Amazon EFS."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What credential components are required to gain programmatic access to an AWS account? (Select TWO)",
    "opts": [
      "A: An access key ID.",
      "B: A primary key.",
      "C: A secret access key.",
      "D: A user ID.",
      "E: A secondary key."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is a shared control between the customer and AWS?",
    "opts": [
      "A: Providing a key for Amazon S3 client-side encryption.",
      "B: Configuration of an Amazon EC2 instance.",
      "C: Environmental controls of physical AWS data centers.",
      "D: Awareness."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Security"
    ]
  },
  {
    "q": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped Of terminated?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon EC2 instance store.",
      "C: Amazon EFS.",
      "D: Amazon S3."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which of the following is an advantage of consolidated billing on AWS?",
    "opts": [
      "A: Volume pricing qualification.",
      "B: Shared access permissions.",
      "C: Multiple bills per account.",
      "D: Eliminates the need for tagging."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which services are parts of the AWS serverless platform?",
    "opts": [
      "A: Amazon EC2, Amazon S3, Amazon Athena.",
      "B: Amazon Kinesis, Amazon SQS, Amazon EMR.",
      "C: AWS Step Functions, Amazon DynamoDB, Amazon SNS.",
      "D: Amazon Athena, Amazon Cognito, Amazon EC2."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "DynamoDB",
      "SNS",
      "SQS",
      "Security",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    "opts": [
      "A: Spot Instances.",
      "B: Reserved Instances.",
      "C: Dedicated Hosts.",
      "D: On-Demand Instances."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following security measures protect access to an AWS account? (Select TWO)",
    "opts": [
      "A: Enable AWS CloudTrail.",
      "B: Grant least privilege access to IAM users.",
      "C: Create one IAM user and share with many developers and users.",
      "D: Enable Amazon CloudFront.",
      "E: Activate multi-factor authentication (MFA) for privileged users."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFront"
    ]
  },
  {
    "q": "Which AWS service provides the ability to manage infrastructure as code?",
    "opts": [
      "A: AWS CodePipeline.",
      "B: AWS CodeDeploy.",
      "C: AWS Direct Connect.",
      "D: AWS CloudFormation."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Networking"
    ]
  },
  {
    "q": "What is an advantage of deploying an application across multiple Availability Zones?",
    "opts": [
      "A: There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "B: The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "C: There will be better coverage as Availability Zones are geographical^ distant and can serve a wider area.",
      "D: There will be decreased application latency that will improve the user experience."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    "opts": [
      "A: Amazon Aurora.",
      "B: Amazon Redshift.",
      "C: Amazon DynamoDB.",
      "D: Amazon ElastiCache."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following is an AWS Cloud architecture design principle?",
    "opts": [
      "A: Implement single points of failure.",
      "B: Implement loose coupling.",
      "C: Implement monolithic design.",
      "D: Implement vertical scaling."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: AWS Support case.",
      "C: Concierge team.",
      "D: Amazon Connect."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    "opts": [
      "A: Moving from variable operational expense ( opex ) to upfront capital expense (capex).",
      "B: Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "C: Moving from upfront capital expense (capex) to variable operational expense ( opex ).",
      "D: Elimination of upfront capital expense (capex) and elimination of variable operational expense ( opex )."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    "opts": [
      "A: Dedicated Hosts",
      "B: Reserved Instances",
      "C: On-Demand Instances",
      "D: No Upfront Reserved Instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service should be used for long-term, low-cost storage of data backups?",
    "opts": [
      "A: Amazon RDS.",
      "B: Amazon Glacier.",
      "C: AWS Snowball.",
      "D: AWS EBS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    "opts": [
      "A: Enterprise.",
      "B: Business.",
      "C: Developer.",
      "D: Basic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    "opts": [
      "A: Reserved Instances.",
      "B: On-Demand.",
      "C: Dedicated Hosts.",
      "D: Spot Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO)",
    "opts": [
      "A: appGateway.",
      "B: Amazon S3.",
      "C: Amazon Elastic File System (EFS).",
      "D: Amazon Glacier.",
      "E: Amazom CloudFront."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "What can AWS edge locations be used for? (Select TWO)",
    "opts": [
      "A: Hosting applications.",
      "B: Delivering content closer to users.",
      "C: Running NoSQL database caching services.",
      "D: Reducing traffic on the server by caching responses.",
      "E: Sending notification messages to end users."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "DynamoDB"
    ]
  },
  {
    "q": "A company is planning to migrate from on-premises to the AWS Cloud. When AWS tool or service provides detailed reports on estimated cost savings after migration?",
    "opts": [
      "A: AWS Total Cost of Ownership (TCO) Calculator.",
      "B: Cost Explorer.",
      "C: AWS Budgets.",
      "D: AWS Migration Hub."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service provides a customized view of the health of specific AWS services that power a customer’s workloads running on AWS?",
    "opts": [
      "A: AWS Service Health Dashboard.",
      "B: AWS X-Ray.",
      "C: AWS Personal Health Dashboard.",
      "D: Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    "opts": [
      "A: It allows the business to eliminate IT bills.",
      "B: It allows the business to put a server in each customer’s data center.",
      "C: It allows the business to focus on business activities.",
      "D: It allows the business to leave servers unpatched."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    "opts": [
      "A: AWS Senior Support Engineers.",
      "B: AWS Technical Account Managers.",
      "C: AWS Trusted Advisor.",
      "D: AWS Discussion Forums."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    "opts": [
      "A: Deploy applications across multiple Availability Zones within an AWS Region.",
      "B: Use a hybrid cloud computing deployment model within the geographic area.",
      "C: Deploy applications across multiple AWS Regions.",
      "D: Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    "opts": [
      "A: Ensuring network connectivity from AWS to the internet.",
      "B: Patching and fixing flaws within the AWS Cloud infrastructure.",
      "C: Ensuring the physical security of cloud data centers.",
      "D: Ensuring Amazon EBS volumes are backed up."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Shared Responsibility"
    ]
  },
  {
    "q": "In which scenario should Amazon EC2 Spot Instances be used?",
    "opts": [
      "A: A company wants to move its main website to AWS from an on-premises web server.",
      "B: A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "C: A company’s heavily used legacy database is currently running on-premises.",
      "D: A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer’s decision? (Select TWO)",
    "opts": [
      "A: Reduced latency to users.",
      "B: The application’s presentation in the local language.",
      "C: Data sovereignty compliance.",
      "D: Cooling costs in hotter climates.",
      "E: Proximity to the customer’s office for on-site visits."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service provides alerts when an AWS event may impact a company’s AWS resources?",
    "opts": [
      "A: AWS Personal Health Dashboard.",
      "B: AWS Service Health Dashboard.",
      "C: AWS Trusted Advisor.",
      "D: AWS Infrastructure Event Management."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which disaster recovery scenario offers the lowest probability of down time?",
    "opts": [
      "A: Backup and restore.",
      "B: Pilot light.",
      "C: Warm standby.",
      "D: Multi-site active-active."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which service’s PRIMARY purpose is software version control?",
    "opts": [
      "A: Amazon CodeStar.",
      "B: AWS Command Line Interface (AWS CLI).",
      "C: Amazon Cognito.",
      "D: AWS CodeCommit."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "How can a customer increase security to AWS account logons? (Select TWO)",
    "opts": [
      "A: Configure AWS Certificate Manager",
      "B: Enable Multi-Factor Authentication (MFA)",
      "C: Use Amazon Cognito to manage access",
      "D: Configure a strong password policy",
      "E: Enable AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    "opts": [
      "A: Cost allocation tags",
      "B: Consolidated billing",
      "C: AWS Budgets",
      "D: AWS Marketplace"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    "opts": [
      "A: Amazon Glacier",
      "B: AWS Storage Gateway",
      "C: Amazon S3",
      "D: Amazon EBS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice area ?",
    "opts": [
      "A: AWS Enterprise Support",
      "B: AWS Solutions Architects",
      "C: AWS Professional Services",
      "D: AWS Account Managers"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house.  Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    "opts": [
      "A: AWS Partner Network Technology Partners",
      "B: AWS Marketplace",
      "C: AWS Partner Network Consulting Partners",
      "D: AWS Service Catalog"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    "opts": [
      "A: Implement automation.",
      "B: Design for agility.",
      "C: Design for failure.",
      "D: Implement elasticity."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    "opts": [
      "A: Amazon EC2",
      "B: Amazon Relational Database Service (Amazon RDS)",
      "C: Amazon Aurora",
      "D: Amazon Redshift",
      "E: Amazon S3"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance ?",
    "opts": [
      "A: AWS Cost Explorer",
      "B: AWS Trusted Advisor",
      "C: Consolidated billing",
      "D: Detailed billing"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software license ?",
    "opts": [
      "A: Spot Instances",
      "B: Reserved Instances",
      "C: Dedicated Hosts",
      "D: On-Demand Instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    "opts": [
      "A: High availability",
      "B: Shared security model",
      "C: Elasticity",
      "D: Pay-as-you-go pricing",
      "E: Reliability"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    "opts": [
      "A: Amazon CloudWatch",
      "B: AWS CloudTrail",
      "C: AWS Config",
      "D: AWS Health"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following are characteristics of Amazon S3? (Select TWO.)",
    "opts": [
      "A: A global file system",
      "B: An object store",
      "C: A local file store",
      "D: A network file system",
      "E: A durable storage system"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
    "opts": [
      "A: Amazon Route 53",
      "B: Virtual Private Gateway",
      "C: Classic Load Balancer",
      "D: Auto Scaling",
      "E: Amazon CloudWatch default metrics"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Route 53",
      "CloudWatch"
    ]
  },
  {
    "q": "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    "opts": [
      "A: Project management",
      "B: Antivirus software licensing",
      "C: Data center security",
      "D: Software development"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes.   Which service should the company use?",
    "opts": [
      "A: Amazon Redshift",
      "B: Amazon DynamoDB",
      "C: Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "D: Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "DynamoDB",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    "opts": [
      "A: Data centers contain regions.",
      "B: Regions contain Availability Zones.",
      "C: Availability Zones contain edge locations.",
      "D: Edge locations contain regions."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which AWS tools assist with estimating costs? (Select three.)",
    "opts": [
      "A: Detailed billing report",
      "B: Cost allocation tags",
      "C: AWS Simple Monthly Calculator",
      "D: AWS Total Cost of Ownership (TCO) Calculator",
      "E: Cost Eliminator"
    ],
    "a": 1,
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
    "opts": [
      "A: The ability to receive one bill for multiple accounts",
      "B: Service limits increasing by default in all accounts",
      "C: A fixed discount on the monthly bill",
      "D: Potential volume discounts, as usage in all accounts is combined",
      "E: The automatic extension of the master account's AWS support plan to all accounts"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    "opts": [
      "A: One-year, No Upfront, Standard RI pricing",
      "B: One-year, All Upfront, Convertible RI pricing",
      "C: Three-year, All Upfront, Standard RI pricing",
      "D: Three-year, No Upfront, Convertible RI pricing"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Compared with costs in traditional and virtualized data centers, AWS has:",
    "opts": [
      "A: greater variable costs and greater upfront costs.",
      "B: fixed usage costs and lower upfront costs.",
      "C: lower variable costs and greater upfront costs.",
      "D: lower variable costs and lower upfront costs."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A characteristic of edge locations is that they:",
    "opts": [
      "A: host Amazon EC2 instances closer to users.",
      "B: help lower latency and improve performance for users.",
      "C: cache frequently changing data without reaching the origin server.",
      "D: refresh data changes daily."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront"
    ]
  },
  {
    "q": "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A: A public and private key-pair",
      "B: Amazon Inspector",
      "C: AWS Identity and Access Management (IAM) policies",
      "D: Security Groups"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "Which of the following security-related actions are available at no cost?",
    "opts": [
      "A: Calling AWS Support",
      "B: Contacting AWS Professional Services to request a workshop",
      "C: Accessing forums, blogs, and whitepapers",
      "D: Attending AWS classes at a local university"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    "opts": [
      "A: Dedicated RIs",
      "B: Scheduled RIs",
      "C: Convertible RIs",
      "D: Standard RIs"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    "opts": [
      "A: Shared responsibility security model",
      "B: Single tenancy",
      "C: Elastic computing",
      "D: Encryption"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following services will automatically scale with an expected increase in web traffic?",
    "opts": [
      "A: AWS CodePipeline",
      "B: Elastic Load Balancing",
      "C: Amazon EBS",
      "D: AWS Direct Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Where are AWS compliance documents, such as an SOC 1 report, located?",
    "opts": [
      "A: Amazon Inspector",
      "B: AWS CloudTrail",
      "C: AWS Artifact",
      "D: AWS Certificate Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO.)",
    "opts": [
      "A: Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
      "B: Encrypting data on the client-side",
      "C: Training the data center staff",
      "D: Configuring Network Access Control Lists (ACL)",
      "E: Maintaining environmental controls within a data center"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which is a recommended pattern for designing a highly available architecture on AWS?",
    "opts": [
      "A: Ensure that components have low-latency network connectivity.",
      "B: Run enough Amazon EC2 instances to operate at peak load.",
      "C: Ensure that the application is designed to accommodate failure of any single component.",
      "D: Use a monolithic application that handles all operations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "According to best practices, how should an application be designed to run in the AWS Cloud?",
    "opts": [
      "A: Use tightly coupled components.",
      "B: Use loosely coupled components.",
      "C: Use infrequently coupled components.",
      "D: Use frequently coupled components."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
    "opts": [
      "A: Implementing Amazon Rekognition",
      "B: Using AWS Shield-protected resources",
      "C: Blocking access with Security Groups",
      "D: Using Multi-Factor Authentication (MFA)",
      "E: Enforcing password strength and expiration"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "AI / ML"
    ]
  },
  {
    "q": "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
    "opts": [
      "A: Amazon Glacier",
      "B: Amazon RDS",
      "C: AWS Snowball",
      "D: Amazon Redshift",
      "E: Amazon EFS"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "A: It simplifies relational database administration tasks.",
      "B: It provides 99.99999999999% reliability and durability.",
      "C: It automatically scales databases for loads.",
      "D: It enabled users to dynamically adjust CPU and RAM resources."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    "opts": [
      "A: Amazon Aurora",
      "B: Amazon Redshift",
      "C: Amazon DynamoDB",
      "D: Amazon ElastiCache"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    "opts": [
      "A: Availability Zone",
      "B: Edge location",
      "C: Region",
      "D: Private networking"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which of the following is a shared control between the customer and AWS?",
    "opts": [
      "A: Providing a key for Amazon S3 client-side encryption",
      "B: Configuration of an Amazon EC2 instance",
      "C: Environmental controls of physical AWS data centers",
      "D: Awareness and training"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Security"
    ]
  },
  {
    "q": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    "opts": [
      "A: A minimum of one",
      "B: A minimum of two",
      "C: A minimum of three",
      "D: A minimum of four or more"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    "opts": [
      "A: it allows the business to eliminate IT bills.",
      "B: it allows the business to put a server in each customer's data center.",
      "C: it allows the business to focus on business activities.",
      "D: it allows the business to leave servers unpatched."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    "opts": [
      "A: Amazon S3",
      "B: Amazon Glacier",
      "C: Amazon EBS",
      "D: Amazon EC2 Instance Store"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    "opts": [
      "A: API keys",
      "B: Access keys",
      "C: User names/Passwords",
      "D: SSH keys"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "Which of the following is a fast and reliable NoSQL database service?",
    "opts": [
      "A: Amazon Redshift",
      "B: Amazon RDS",
      "C: Amazon DynamoDB",
      "D: Amazon S3"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "What is an example of agility in the AWS Cloud?",
    "opts": [
      "A: Access to multiple instance types",
      "B: Access to managed services",
      "C: Using Consolidated Billing to produce one bill",
      "D: Decreased acquisition time for new compute resources"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    "opts": [
      "A: AWS IAM",
      "B: AWS Organizations",
      "C: AWS Schema Conversion Tool",
      "D: AWS Config"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    "opts": [
      "A: Using many instances in parallel",
      "B: Using a single large instance during off-peak hours",
      "C: Using dedicated hardware",
      "D: Using a large GPU instance type"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "For which auditing process does AWS have sole responsibility?",
    "opts": [
      "A: AWS IAM policies",
      "B: Physical security",
      "C: Amazon S3 bucket policies",
      "D: AWS CloudTrail Logs"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM"
    ]
  },
  {
    "q": "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
    "opts": [
      "A: Fault tolerance",
      "B: Global reach",
      "C: Pay-as-you-go pricing",
      "D: High availability"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
    "opts": [
      "A: Patching underlying infrastructure",
      "B: Physical security",
      "C: Patching Amazon EC2 instances",
      "D: Patching network infrastructure"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ]
  },
  {
    "q": "A customer is using multiple AWS accounts with separate billing.  How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    "opts": [
      "A: Create one global AWS account and move all AWS resources to that account.",
      "B: Sign up for three years of Reserved Instance pricing up front.",
      "C: Use the consolidated billing feature from AWS Organizations.",
      "D: Sign up for the AWS Enterprise support plan to get volume discounts."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
    "opts": [
      "A: Summaries by Amazon Simple Notification Service (Amazon SNS)",
      "B: Free Amazon Elasticsearch Service analytics",
      "C: Provided at no charge",
      "D: Real-time monitoring",
      "E: Adjustable retention"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS"
    ]
  },
  {
    "q": "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    "opts": [
      "A: Amazon Route 53",
      "B: Amazon Neptune",
      "C: Amazon SageMaker",
      "D: Amazon Lightsail"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "AI / ML"
    ]
  },
  {
    "q": "A customer is deploying a new application and needs to choose an AWS Region.  Which of the following factors could influence the customer's decision? (Select TWO.)",
    "opts": [
      "A: Reduced latency to users",
      "B: The application's presentation in the local language",
      "C: Data sovereignty compliance",
      "D: Cooling costs in hotter climates",
      "E: Proximity to the customer's office for on-site visits"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is true regarding the AWS availability zones and edge locations?",
    "opts": [
      "A: Edge locations are located in separate Availability Zones worldwide to serve global customers.",
      "B: An availability zone exists within an edge location to distribute content globally with low latency.",
      "C: An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
      "D: An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which features are included in the AWS Business Support Plan? (Choose TWO)",
    "opts": [
      "A: 24x7 access to customer service.",
      "B: Access to Cloud Support Engineers via email only during business hours.",
      "C: Access to the Infrastructure Event Management (IEM) feature for additional fee.",
      "D: 24x7 access to the TAM feature.",
      "E: Partial access to the core Trusted Advisor checks."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
    "opts": [
      "A: Amazon GuardDuty.",
      "B: Amazon Personalize.",
      "C: Amazon Cognito.",
      "D: AWS IAM."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
    "opts": [
      "A: AWS CloudFormation.",
      "B: AWS Config.",
      "C: AWS CloudTrail.",
      "D: AWS Auto Scaling."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ]
  },
  {
    "q": "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    "opts": [
      "A: Eliminates the need to monitor servers and applications.",
      "B: Manages all the compliance and auditing tasks.",
      "C: Provides custom hardware to meet any specification.",
      "D: Eliminates the need to guess on infrastructure capacity needs.",
      "E: Enables customers to trade their capital expenses for operational expenses."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
    "opts": [
      "A: AWS Fargate.",
      "B: Amazon Elastic Compute Cloud.",
      "C: Amazon RDS.",
      "D: AWS Database Migration service (DMS).",
      "E: AWS Lambda."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "Lambda",
      "ECS / Fargate"
    ]
  },
  {
    "q": "Which AWS Service can perform health checks on Amazon EC2 instances?",
    "opts": [
      "A: AWS CloudFormation.",
      "B: Amazon Route 53.",
      "C: Amazon Chime.",
      "D: Amazon Aurora."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Route 53",
      "CloudFormation"
    ]
  },
  {
    "q": "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
    "opts": [
      "A: Amazon Comprehend.",
      "B: AWS IAM.",
      "C: Amazon Polly.",
      "D: Amazon Rekognition."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "AI / ML"
    ]
  },
  {
    "q": "Which of the following are examples of AWS-managed databases? (Choose TWO)",
    "opts": [
      "A: Amazon Neptune.",
      "B: Amazon CloudSearch.",
      "C: Microsoft SQL Server on Amazon EC2.",
      "D: MySQL on Amazon EC2.",
      "E: Amazon RDS for MySQL."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    "opts": [
      "A: EC2 On-Demand Instances.",
      "B: EC2 Reserved Instances     - No Upfront.",
      "C: EC2 Spot Instances.",
      "D: EC2 Reserved Instances     - All Upfront."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "There is a requirement to grant a DevOps team full administrative access to all resources in an AWS account. Who can grant them these permissions?",
    "opts": [
      "A: AWS account owner.",
      "B: AWS technical account manager.",
      "C: AWS security team.",
      "D: AWS cloud support engineers."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "You need to migrate a large number of on-premises workloads to AWS. Which AWS service is the most appropriate?",
    "opts": [
      "A: AWS File Transfer Acceleration.",
      "B: AWS Server Migration Service.",
      "C: AWS Database Migration Service.",
      "D: AWS Application Discovery Service."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are some key benefits of using AWS CloudFormation? (Choose TWO)",
    "opts": [
      "A: It helps AWS customers deploy their applications without worrying about the underlying infrastructure.",
      "B: It applies advanced IAM security features automatically.",
      "C: It automates the provisioning and updating of your infrastructure in a safe and controlled manner.",
      "D: It allows you to model your entire infrastructure in just a text file.",
      "E: It compiles and builds application code in a timely manner."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFormation"
    ]
  },
  {
    "q": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources not located in the cloud?",
    "opts": [
      "A: On-premises.",
      "B: Mixed.",
      "C: Hybrid.",
      "D: Cloud."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is hosting business critical workloads in an AWS Region. To protect against data loss and ensure business continuity, a mirror image of the current AWS environment should be created in another AWS Region. Company policy requires that the standby environment must be available in minutes in case of an outage in the primary AWS Region. Which AWS service can be used to meet these requirements?",
    "opts": [
      "A: CloudEndure Disaster Recovery.",
      "B: CloudEndure Migration.",
      "C: AWS Backup.",
      "D: AWS Glue."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following S3 storage classes is most appropriate to host static assets for a popular e-commerce website with stable access patterns?",
    "opts": [
      "A: S3 Standard-IA.",
      "B: S3 Intelligent-Tiering.",
      "C: S3 Glacier Deep Archive.",
      "D: S3 Standard."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "You want to create a backup of your data in another geographical location. Where should you create this backup?",
    "opts": [
      "A: In another Edge location.",
      "B: In another Region.",
      "C: In another VPC.",
      "D: In another Availability Zone."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ]
  },
  {
    "q": "Which statement is true in relation to the security of Amazon EC2?",
    "opts": [
      "A: You should use instance store volumes to store login data.",
      "B: You should regularly patch the operating system and applications on your EC2 instances.",
      "C: You should deploy critical components of your application in the Availability Zone that you trust.",
      "D: You can track all API calls using Amazon Athena."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Analytics"
    ]
  },
  {
    "q": "What does AWS Cost Explorer provide to help manage your AWS spend?",
    "opts": [
      "A: Cost comparisons between AWS Cloud environments and on-premises environments.",
      "B: Accurate estimates of AWS service costs based on your expected usage.",
      "C: Consolidated billing.",
      "D: Highly accurate cost forecasts for up to 12 months ahead."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?",
    "opts": [
      "A: RDS Single-AZ.",
      "B: RDS Write Replica.",
      "C: RDS Snapshots.",
      "D: RDS Multi-AZ."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "You are using several on-demand EC2 Instances to run your development environment. What is the best way to reduce your charges when these instances are not in use?",
    "opts": [
      "A: Deleting all EBS volumes attached to the instances.",
      "B: You cannot minimize charges for on-demand instances.",
      "C: Terminating the instances.",
      "D: Stopping the instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "Which of the following strategies helps protect your AWS root account?",
    "opts": [
      "A: Delete root user access keys if you do not need them.",
      "B: Apply MFA for the root account and use it for all of your work.",
      "C: Access the root account only from your personal Mobile Phone.",
      "D: Only share your AWS account password or access keys with trusted persons."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are factors should be considered for Amazon EBS pricing? (Choose TWO)",
    "opts": [
      "A: The size of volumes provisioned per month.",
      "B: The compute capacity you consume.",
      "C: The amount of data you have stored in snapshots.",
      "D: The compute time you consume.",
      "E: The number of Snowball storage devices you request."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "You have just set up your AWS environment and have created six IAM user accounts for the DevOps team. What is the AWS recommendation when granting permissions to these IAM accounts?",
    "opts": [
      "A: Attach a separate IAM policy for each individual account.",
      "B: Apply the Principle of Least Privilege.",
      "C: For security purposes, you should not grant any permission to the DevOps team.",
      "D: Create six different IAM passwords."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "Which of the following has the greatest impact on cost? (Choose TWO)",
    "opts": [
      "A: Compute charges.",
      "B: The number of services used.",
      "C: Data Transfer In charges.",
      "D: Data Transfer Out charges.",
      "E: The number of IAM roles provisioned."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Who from the following will get the largest discount?",
    "opts": [
      "A: A user who chooses to buy On-demand, Convertible, Partial upfront instances.",
      "B: A user who chooses to buy Reserved, Convertible, All upfront instances.",
      "C: A user who chooses to buy Reserved, Standard, No upfront instances.",
      "D: A user who chooses to buy Reserved, Standard, All upfront instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is an available option when purchasing Amazon EC2 instances?",
    "opts": [
      "A: The ability to bid to get the lowest possible prices.",
      "B: The ability to register EC2 instances to get volume discounts on every hour the instances are running.",
      "C: The ability to buy Dedicated Instances for up to 90% discount.",
      "D: The ability to pay upfront to get lower hourly costs."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What does the term “Economies of scale” mean?",
    "opts": [
      "A: It means that you save more when you consume more.",
      "B: It means as more time passes using AWS, you pay more for its services.",
      "C: It means that AWS will continuously lower costs as it grows.",
      "D: It means that you have the ability to pay as you go."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company experiences fluctuations in traffic patterns to their e-commerce website when running flash sales. What service can help the company dynamically match the required compute capacity to handle spikes in traffic during flash sales?",
    "opts": [
      "A: AWS Auto Scaling.",
      "B: Amazon Elastic Compute Cloud.",
      "C: Amazon Elastic File System.",
      "D: Amazon ElastiCache."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "Which of the below options is true of Amazon VPC?",
    "opts": [
      "A: Amazon VPC allows customers to control user interactions with all other AWS resources.",
      "B: AWS Customers have complete control over their Amazon VPC virtual networking environment.",
      "C: AWS is responsible for all the management and configuration details of Amazon VPC.",
      "D: Amazon VPC helps customers to review their AWS architecture and adopt best practices."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "Which tool can a non-AWS customer use to compare the cost of on-premises environment resources to AWS?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS Pricing Calculator.",
      "C: AWS Budgets.",
      "D: AWS TCO Calculator."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following services provide real-time auditing for compliance and vulnerabilities? (Choose TWO)",
    "opts": [
      "A: AWS Config.",
      "B: Amazon Redshift.",
      "C: Amazon MQ.",
      "D: AWS Trusted Advisor.",
      "E: Amazon Cognito."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Security",
      "Analytics",
      "Support"
    ]
  },
  {
    "q": "Which of the following AWS services uses Puppet to automate how EC2 instances are configured?",
    "opts": [
      "A: AWS OpsWorks.",
      "B: AWS CloudFormation.",
      "C: AWS Quick Starts.",
      "D: AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ]
  },
  {
    "q": "An organization uses a hybrid cloud architecture to run their business. Which AWS service enables them to deploy their applications to any AWS or on-premises server?",
    "opts": [
      "A: Amazon Kinesis.",
      "B: Amazon QuickSight.",
      "C: AWS CodeDeploy.",
      "D: Amazon Athena."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ]
  },
  {
    "q": "Select the services that are server-based: (Choose TWO)",
    "opts": [
      "A: Amazon RDS.",
      "B: Amazon DynamoDB.",
      "C: AWS Lambda.",
      "D: AWS Fargate.",
      "E: Amazon EMR."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Lambda",
      "DynamoDB",
      "ECS / Fargate",
      "Analytics"
    ]
  },
  {
    "q": "What best describes penetration testing?",
    "opts": [
      "A: Testing your application’s response time from different locations.",
      "B: Testing your network to find security vulnerabilities that an attacker could exploit.",
      "C: Testing your instances to check for the unhealthy ones.",
      "D: Testing your software for bugs and errors."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are use cases for Amazon EMR? (Choose TWO)",
    "opts": [
      "A: Enables you to backup extremely large amounts of data at very low costs.",
      "B: Enables you to move Exabyte-scale data from on-premises datacenters into AWS.",
      "C: Enables you to analyze and process extremely large amounts of data in a timely manner.",
      "D: Enables you to easily run and scale Apache Spark, Hadoop,and other Big Data frameworks.",
      "E: Enables you to easily run and manage Docker containers."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "ECS / Fargate",
      "Analytics"
    ]
  },
  {
    "q": "Your CTO has asked you to contact AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat. What should you do?",
    "opts": [
      "A: There is no chat feature in AWS support.",
      "B: The chat feature is available for all plans for an additional fee, but you have to request it first.",
      "C: At a minimum, upgrade to Business support plan.",
      "D: Upgrade from the Basic Support plan to Developer Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Support"
    ]
  },
  {
    "q": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?",
    "opts": [
      "A: AWS Fargate.",
      "B: AWS Batch.",
      "C: Amazon Personalize.",
      "D: AWS Elastic Beanstalk."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate"
    ]
  },
  {
    "q": "Which statement best describes the AWS Pay-As-You-Go pricing model?",
    "opts": [
      "A: With AWS, you replace low upfront expenses with large variable payments.",
      "B: With AWS, you replace low upfront expenses with large fixed payments.",
      "C: With AWS, you replace large upfront expenses with low fixed payments.",
      "D: With AWS, you replace large capital expenses with low variable payments."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "For Amazon RDS databases, what does AWS perform on your behalf? (Choose TWO)",
    "opts": [
      "A: Database setup.",
      "B: Network traffic protection.",
      "C: Management of the operating system.",
      "D: Access management.",
      "E: Management of firewall rules."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which of the following strategies help analyze costs in AWS?",
    "opts": [
      "A: Using tags to group resources.",
      "B: Using AWS CloudFormation to automate the deployment of resources.",
      "C: Deploying resources of the same type in different regions.",
      "D: Configuring Amazon Inspector to automatically analyze costs and email reports."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Security"
    ]
  },
  {
    "q": "A media company has an application that requires the transfer of large data sets to and from AWS every day. This data is business critical and should be transferred over a consistent connection. Which AWS service should the company use?",
    "opts": [
      "A: AWS Direct Connect.",
      "B: Amazon Comprehend.",
      "C: AWS Snowmobile.",
      "D: AWS VPN."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage",
      "AI / ML",
      "Networking"
    ]
  },
  {
    "q": "What is the main benefit of the AWS Storage Gateway service?",
    "opts": [
      "A: It automates the process of building, maintaining, and running ETL jobs.",
      "B: It provides physical devices to migrate data from on premises to AWS.",
      "C: It allows integration of on-premises IT environments with Cloud Storage.",
      "D: It provides hardware-based key storage for regulatory compliance."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "To protect against data loss, you need to backup your database regularly. What is the most cost-effective storage option that provides immediate retrieval of your backups?",
    "opts": [
      "A: Amazon S3 Glacier Deep Archive.",
      "B: Amazon S3 Standard-Infrequent Access.",
      "C: Amazon S3 Glacier.",
      "D: Instance Store."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?",
    "opts": [
      "A: AWS Global Accelerator.",
      "B: AWS Data Pipeline.",
      "C: AWS DAX Accelerator.",
      "D: AWS Transfer Acceleration."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "Why are Serverless Architectures more economical than Server-based Architectures?",
    "opts": [
      "A: Serverless Architectures use new powerful computing devices.",
      "B: With the Server-based Architectures, compute resources continue to run all the time but with serverless architecture, compute resources are only used when code is being executed.",
      "C: When you reserve serverless capacity, you will get large discounts compared to server reservation.",
      "D: With Serverless Architectures you have the ability to scale automatically up or down as demand changes."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ]
  },
  {
    "q": "Which of the below options are use cases of the Amazon Route 53 service? (Choose TWO)",
    "opts": [
      "A: Point-to-point connectivity between an on-premises data center and AWS.",
      "B: Detects configuration changes in the AWS environment.",
      "C: DNS configuration and management.",
      "D: Manages global application traffic through a variety of routing types.",
      "E: Provides infrastructure security optimization recommendations."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Route 53"
    ]
  },
  {
    "q": "You want to transfer 200 Terabytes of data from on-premises locations to the AWS Cloud, which of the following can do the job in a cost-effective way?",
    "opts": [
      "A: AWS Snowmobile.",
      "B: AWS Import/Export.",
      "C: AWS DMS.",
      "D: AWS Snowball."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services should you use?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon Athena.",
      "C: AWS Cloud9.",
      "D: Amazon ElastiCache for Redis."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Analytics"
    ]
  },
  {
    "q": "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    "opts": [
      "A: Least Privilege.",
      "B: Pilot Light.",
      "C: Fault Tolerance.",
      "D: Multi-threading."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    "opts": [
      "A: All up-front reservation.",
      "B: All reserved instance payment options provide the same discount level.",
      "C: Partial up-front reservation.",
      "D: No up-front reservation."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    "opts": [
      "A: Access control.",
      "B: Physical MFA devices.",
      "C: Data encryption.",
      "D: Unlimited storage.",
      "E: Load balancing."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    "opts": [
      "A: 3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "B: 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "C: 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "D: 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: AWS Operations Support.",
      "C: AWS Support API.",
      "D: AWS Personal Health Dashboard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    "opts": [
      "A: AWS CLI.",
      "B: AWS Security Groups.",
      "C: AWS SDKs.",
      "D: AWS Network Access Control Lists.",
      "E: AWS CodeCommit."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC"
    ]
  },
  {
    "q": "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    "opts": [
      "A: AWS Resource Groups.",
      "B: IAM Policies.",
      "C: IAM Roles.",
      "D: IAM Users.",
      "E: AWS Organizations."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    "opts": [
      "A: Database Snapshots.",
      "B: Multi-AZ Deployments.",
      "C: Automated Backups.",
      "D: Read Replicas."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    "opts": [
      "A: Using the AWS ACM service.",
      "B: Using Security Bulletins.",
      "C: Using the AWS Management Console.",
      "D: Using Compliance Resources."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    "opts": [
      "A: IAM Users.",
      "B: Key Pair.",
      "C: IAM Roles.",
      "D: IAM Groups."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    "opts": [
      "A: AWS Global Accelerator.",
      "B: AWS Application Load Balancer (ALB).",
      "C: Amazon CloudFront.",
      "D: Transit VPC."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    "opts": [
      "A: Use Software test automation tools.",
      "B: Use AWS CodeDeploy to build and automate your AWS environment.",
      "C: Use code to provision and operate your AWS infrastructure.",
      "D: Migrate all of your applications to a dedicated host."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    "opts": [
      "A: Restrict any API call made through SDKs or CLI.",
      "B: Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      "C: Require Multi-Factor Authentication (MFA) for all IAM User access.",
      "D: Set up two login passwords."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "Which AWS Service offers volume discounts based on usage?",
    "opts": [
      "A: Amazon VPC.",
      "B: Amazon S3.",
      "C: Amazon Lightsail.",
      "D: AWS Cost Explorer."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    "opts": [
      "A: The AWS Region’s security level.",
      "B: Data sovereignty.",
      "C: Cost.",
      "D: The planned number of VPCs.",
      "E: Geographic proximity to the company's location."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    "opts": [
      "A: Amazon EFS.",
      "B: Amazon Neptune.",
      "C: Amazon ElastiCache.",
      "D: DAX."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    "opts": [
      "A: Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      "B: Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
      "C: Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      "D: Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront"
    ]
  },
  {
    "q": "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    "opts": [
      "A: AWS helps customers invest more in capital expenditures.",
      "B: AWS automates all infrastructure operations, so customers save more on human resources costs.",
      "C: AWS continues to lower the cost of cloud computing for its customers.",
      "D: AWS secures AWS resources at no additional charge."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
    "opts": [
      "A: Building a schema for an application.",
      "B: Replacing physical hardware.",
      "C: Creating a new hypervisor.",
      "D: Patch management of the underlying infrastructure.",
      "E: File system encryption."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    "opts": [
      "A: AWS CloudHSM.",
      "B: U2F Security Key.",
      "C: AWS Access Keys.",
      "D: AWS Key Pair."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    "opts": [
      "A: Amazon SNS.",
      "B: AWS Elastic Beanstalk.",
      "C: AWS Systems Manager.",
      "D: AWS Trusted Advisor."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "SNS",
      "Support"
    ]
  },
  {
    "q": "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    "opts": [
      "A: The amount of time the instances will be running.",
      "B: Number of security groups.",
      "C: Allocated Elastic IP Addresses.",
      "D: Number of Hosted Zones.",
      "E: Number of instances."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "Route 53"
    ]
  },
  {
    "q": "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    "opts": [
      "A: AWS Data Pipeline.",
      "B: AWS Storage Gateway.",
      "C: Amazon Aurora.",
      "D: Amazon EFS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    "opts": [
      "A: Amazon Simple Storage Service.",
      "B: Amazon Elastic Block Store.",
      "C: Amazon Elastic Container Service.",
      "D: AWS Storage Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "ECS / Fargate",
      "Storage"
    ]
  },
  {
    "q": "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    "opts": [
      "A: EBS and S3 are accessible only to the root account owner.",
      "B: The systems administrator must contact AWS Support first to activate his new IAM account.",
      "C: There is not enough space in S3 to store the snapshots.",
      "D: There is a non-explicit deny to all new users."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "Storage"
    ]
  },
  {
    "q": "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
    "opts": [
      "A: AWS CloudTrail.",
      "B: Amazon CloudFront.",
      "C: AWS CloudFormation.",
      "D: Amazon CloudWatch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "CloudFormation"
    ]
  },
  {
    "q": "Which of the below options is true of Amazon Cloud Directory?",
    "opts": [
      "A: Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
      "B: Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      "C: Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      "D: Amazon Cloud Directory allows for registration and management of domain names."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user has opened a \"Production System Down\" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?",
    "opts": [
      "A: 12 hours.",
      "B: 15 minutes.",
      "C: 24 hours.",
      "D: One hour."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the below options is a best practice for making your application on AWS highly available?",
    "opts": [
      "A: Deploy the application to at least two Availability Zones.",
      "B: Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      "C: Deploy the application code on at least two servers in the same Availability Zone.",
      "D: Rewrite the application code to handle all incoming requests."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    "opts": [
      "A: Labor and IT costs.",
      "B: Cooling and power consumption.",
      "C: Amazon EBS computing power.",
      "D: Software architecture.",
      "E: Software compatibility."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    "opts": [
      "A: AWS Basic Support.",
      "B: AWS Developer Support.",
      "C: AWS Business Support.",
      "D: AWS Enterprise Support."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following AWS offerings are serverless services? (Choose TWO)",
    "opts": [
      "A: Amazon EC2.",
      "B: AWS Lambda.",
      "C: Amazon DynamoDB.",
      "D: Amazon EMR.",
      "E: Amazon RDS."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "Lambda",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    "opts": [
      "A: Amazon GuardDuty.",
      "B: AWS ACM.",
      "C: Amazon Detective.",
      "D: AWS WAF."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    "opts": [
      "A: AWS Config.",
      "B: AWS OpsWorks.",
      "C: AutoScaling.",
      "D: AWS CloudFormation."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFormation"
    ]
  },
  {
    "q": "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon EFS.",
      "C: Amazon S3.",
      "D: Amazon Instance Store."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    "opts": [
      "A: AWS WAF.",
      "B: Amazon CloudWatch.",
      "C: AWS Cloud9.",
      "D: AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Security"
    ]
  },
  {
    "q": "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    "opts": [
      "A: On-demand Instances.",
      "B: Dedicated Hosts.",
      "C: Spot Instances.",
      "D: Reserved Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    "opts": [
      "A: Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      "B: Create an IAM role and attach a policy with Administrator access permissions.",
      "C: Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
      "D: Create an IAM user and attach a policy with Administrator access permissions."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "DynamoDB"
    ]
  },
  {
    "q": "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    "opts": [
      "A: Generate new IAM access keys every time you delegate permissions.",
      "B: Store the required AWS credentials directly within the application code.",
      "C: Use temporary security credentials (IAM roles) instead of long-term access keys.",
      "D: Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    "opts": [
      "A: Use servers instead of managed services.",
      "B: Use existing third-party software licenses on AWS.",
      "C: Migrate production workloads to AWS edge locations instead of AWS Regions.",
      "D: Use AWS Outposts to run all workloads in a cost-optimized environment."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    "opts": [
      "A: Amazon SQS.",
      "B: Virtual Private Gateway.",
      "C: AWS Artifact.",
      "D: Amazon CloudFront."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "SQS"
    ]
  },
  {
    "q": "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    "opts": [
      "A: Amazon Connect.",
      "B: AWS CLI.",
      "C: AWS Identity and Access Management (IAM).",
      "D: Amazon SNS.",
      "E: Amazon Virtual Private Cloud."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "SNS"
    ]
  },
  {
    "q": "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    "opts": [
      "A: Vertically scaling EC2 instances.",
      "B: Running RDS instances in parallel.",
      "C: Vertically scaling RDS instances.",
      "D: Running EC2 instances in parallel."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS Pricing Calculator.",
      "C: AWS Budgets.",
      "D: AWS Cost & Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Billing & Cost"
    ]
  },
  {
    "q": "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
    "opts": [
      "A: Stop all running services and open an investigation.",
      "B: Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.",
      "C: Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.",
      "D: Open an investigation and delete any potentially compromised IAM users.",
      "E: Change your AWS root account password and the passwords of any IAM users."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    "opts": [
      "A: Elastic coupling.",
      "B: Loosely coupling.",
      "C: Scalable coupling.",
      "D: Tightly coupling."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    "opts": [
      "A: Amazon Elastic File System.",
      "B: Amazon Simple Storage Service.",
      "C: Amazon Elastic Block Store.",
      "D: AWS Storage Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    "opts": [
      "A: Create private connection to your data center.",
      "B: Achieve global high availability.",
      "C: Automate the process of provisioning new compute resources.",
      "D: Make synchronous replication of your data possible."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    "opts": [
      "A: Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.",
      "B: Lambda natively supports a number of programming languages such as Node.js, Python, and Java.",
      "C: Lambda is AWS’ proprietary programming language for microservices.",
      "D: Lambda doesn’t support programming languages; it is a serverless compute service.",
      "E: Lambda can support any programming language using an API."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Lambda"
    ]
  },
  {
    "q": "What are the capabilities of AWS X-Ray? (Choose TWO)",
    "opts": [
      "A: Automatically decouples application components.",
      "B: Facilitates tracking of user requests to identify application issues.",
      "C: Helps improve application performance.",
      "D: Deploys applications to Amazon EC2 instances.",
      "E: Deploys applications to on-premises servers."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    "opts": [
      "A: AWS Organizations.",
      "B: AWS Trusted Advisor.",
      "C: IAM User Groups.",
      "D: AWS Config."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which service provides object-level storage in AWS?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon Instance Store.",
      "C: Amazon EFS.",
      "D: Amazon S3."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    "opts": [
      "A: AWS Elastic Load Balancer.",
      "B: AWS Budgets.",
      "C: AWS Auto Scaling.",
      "D: AWS Cost Explorer."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which S3 storage class is best for data with unpredictable access patterns?",
    "opts": [
      "A: Amazon S3 Intelligent-Tiering.",
      "B: Amazon S3 Glacier Flexible Retrieval.",
      "C: Amazon S3 Standard.",
      "D: Amazon S3 Standard-Infrequent Access."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "AI / ML"
    ]
  },
  {
    "q": "What is the AWS database service that allows you to upload data structured in key-value format?",
    "opts": [
      "A: Amazon DynamoDB.",
      "B: Amazon Aurora.",
      "C: Amazon Redshift.",
      "D: Amazon RDS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    "opts": [
      "A: You have to pay a start-up fee when launching a new instance for the first time.",
      "B: The on-demand instances follow the AWS pay-as-you-go pricing model.",
      "C: With on-demand instances, no longer-term commitments or upfront payments are needed.",
      "D: When using on-demand Linux instances, you are charged per second based on an hourly rate."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    "opts": [
      "A: AWS Trusted Advisor.",
      "B: Amazon Inspector.",
      "C: Amazon SNS.",
      "D: Amazon CloudWatch.",
      "E: Concierge Support Team."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "SNS",
      "Security",
      "Support"
    ]
  },
  {
    "q": "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    "opts": [
      "A: Encrypted keys.",
      "B: Email verification.",
      "C: AWS KMS.",
      "D: AWS MFA."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Security"
    ]
  },
  {
    "q": "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    "opts": [
      "A: AWS Knowledge Center.",
      "B: AWS Health Dashboard.",
      "C: Infrastructure Event Management.",
      "D: AWS Support Concierge Service."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    "opts": [
      "A: Amazon RDS.",
      "B: Amazon Redshift.",
      "C: Amazon DynamoDB.",
      "D: Amazon CloudWatch."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "CloudWatch",
      "Analytics"
    ]
  },
  {
    "q": "Which of the below is a best-practice when designing solutions on AWS?",
    "opts": [
      "A: Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "B: Use AWS reservations to reduce costs when testing your production environment.",
      "C: Automate wherever possible to make architectural (© ) experimentation easier.",
      "D: Provision a large compute capacity to handle any spikes in load"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    "opts": [
      "A: Penetration testing is not allowed in AWS.",
      "B: Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "C: Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "D: The AWS customers are only allowed to perform penetration testing on services managed by AWS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    "opts": [
      "A: Amazon SQS.",
      "B: Amazon SES.",
      "C: AWS Direct Connect.",
      "D: Amazon Connect."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "SQS",
      "Networking"
    ]
  },
  {
    "q": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    "opts": [
      "A: Multi-factor authentication.",
      "B: Availability Zones.",
      "C: Elastic Load Balancing.",
      "D: Penetration testing.",
      "E: Vertical Scaling."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    "opts": [
      "A: AWS VPN.",
      "B: AWS Subnets.",
      "C: AWS Dedicated Hosts.",
      "D: Amazon VPC."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    "opts": [
      "A: Managing environmental events of AWS data centers.",
      "B: Protecting the confidentiality of data in transit in Amazon S3.",
      "C: Controlling physical access to AWS Regions.",
      "D: Ensuring that the underlying EC2 host is configured properly.",
      "E: Patching applications installed on Amazon EC2."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    "opts": [
      "A: Amazon VPC.",
      "B: Amazon CloudWatch.",
      "C: Amazon S3.",
      "D: Amazon EC2.",
      "E: AWS Lambda."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "VPC",
      "CloudWatch"
    ]
  },
  {
    "q": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon SQS.",
      "C: Amazon S3.",
      "D: Amazon Instance store."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "SQS",
      "Storage"
    ]
  },
  {
    "q": "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    "opts": [
      "A: Instance Password.",
      "B: Key pairs.",
      "C: Access Keys.",
      "D: MFA."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What does Amazon ElastiCache provide?",
    "opts": [
      "A: In-memory caching for read-heavy applications.",
      "B: An Ehcache compatible in-memory data store.",
      "C: An online software store that allows Customers to launch pre-configured software with just few clicks.",
      "D: A domain name system in the cloud."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    "opts": [
      "A: AWS WAF.",
      "B: AWS Trusted Advisor.",
      "C: AWS Organizations.",
      "D: Amazon Config."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    "opts": [
      "A: Dedicated Instances.",
      "B: Dedicated Hosts.",
      "C: On-demand Instances.",
      "D: Reserved Instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    "opts": [
      "A: Free support for all enterprise customers.",
      "B: Automatic data protection.",
      "C: Reduced Capital Expenditure (CapEx).",
      "D: AWS holds responsibility for managing customer applications."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    "opts": [
      "A: Always use Global Services in your architecture rather than Regional Services.",
      "B: Always choose to pay as you go.",
      "C: Treat servers as fixed resources.",
      "D: Automate wherever possible.",
      "E: Remove single points of failure."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    "opts": [
      "A: AWS Direct Connect.",
      "B: Amazon CloudFront.",
      "C: AWS Snowball.",
      "D: Amazon Route 53."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Route 53",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    "opts": [
      "A: Internet gateways.",
      "B: Virtual Private Cloud.",
      "C: Security Groups.",
      "D: Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront"
    ]
  },
  {
    "q": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    "opts": [
      "A: Amazon Cognito.",
      "B: AWS IAM.",
      "C: Amazon Aurora.",
      "D: AWS WAF."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "RDS",
      "Security"
    ]
  },
  {
    "q": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    "opts": [
      "A: Amazon EMR.",
      "B: Amazon MQ.",
      "C: Amazon SNS.",
      "D: Amazon SQS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "SNS",
      "SQS",
      "Analytics"
    ]
  },
  {
    "q": "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    "opts": [
      "A: Monitoring network performance.",
      "B: Installing software on EC2 instances.",
      "C: Creating hypervisors.",
      "D: Configuring Access Control Lists (ACLs).",
      "E: Hardware maintenance."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudWatch",
      "Shared Responsibility"
    ]
  },
  {
    "q": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    "opts": [
      "A: Amazon Redshift.",
      "B: Amazon DynamoDB.",
      "C: Amazon EC2.",
      "D: Amazon RDS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    "opts": [
      "A: MFA.",
      "B: Security tokens.",
      "C: A user name and password.",
      "D: Access keys."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    "opts": [
      "A: IAM.",
      "B: An internet gateway.",
      "C: EBS Snapshot.",
      "D: AMI."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "Storage"
    ]
  },
  {
    "q": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    "opts": [
      "A: Reserved Compute capacity.",
      "B: Eliminating Single Points of Failure (SPOFs).",
      "C: Distributed infrastructure.",
      "D: Virtualized compute resources.",
      "E: Dedicated hosting."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    "opts": [
      "A: Encryption of EBS volumes.",
      "B: VPC security.",
      "C: Access permissions.",
      "D: Hardware patching.",
      "E: Securing global physical infrastructure."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "VPC",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    "opts": [
      "A: The ability of a system to recover gracefully from failure.",
      "B: The efficient use of computing resources to meet requirements.",
      "C: The ability to monitor systems and improve supporting processes and procedures.",
      "D: The ability to manage datacenter operations more efficiently."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    "opts": [
      "A: Edge locations are used by CloudFront to cache the most recent responses.",
      "B: Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
      "C: Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
      "D: Edge locations are used by CloudFront to distribute content to global users with low latency."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    "opts": [
      "A: AWS CloudTrail.",
      "B: Amazon Comprehend.",
      "C: AWS Transit Gateway.",
      "D: AWS X-Ray.",
      "E: AWS Config."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "AI / ML",
      "Networking"
    ]
  },
  {
    "q": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    "opts": [
      "A: Amazon ECS.",
      "B: AWS Data Pipeline.",
      "C: AWS Cloud9.",
      "D: AWS Personal Health Dashboard."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "ECS / Fargate",
      "Support"
    ]
  },
  {
    "q": "Which of the following services will help businesses ensure compliance in AWS?",
    "opts": [
      "A: CloudFront.",
      "B: CloudEndure Migration.",
      "C: CloudWatch.",
      "D: CloudTrail."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following procedures will help reduce your Amazon S3 costs?",
    "opts": [
      "A: Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      "B: Use the right combination of storage classes based on different use cases.",
      "C: Pick the right Availability Zone for your S3 bucket.",
      "D: Move all the data stored in S3 standard to EBS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    "opts": [
      "A: AWS Direct Connect.",
      "B: Amazon EC2 Auto Scaling.",
      "C: Elastic Load Balancer.",
      "D: CloudFormation.",
      "E: Network ACLs."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFormation",
      "Networking"
    ]
  },
  {
    "q": "Which of the following activities may help reduce your AWS monthly costs?",
    "opts": [
      "A: Enabling Amazon EC2 Auto Scaling for all of your workloads.",
      "B: Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      "C: Removing all of your Cost Allocation Tags.",
      "D: Deploying your AWS resources across multiple Availability Zones."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    "opts": [
      "A: S3 Transfer Acceleration.",
      "B: AWS WAF.",
      "C: AWS Snowmobile.",
      "D: AWS Snowball."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    "opts": [
      "A: AWS X-Ray.",
      "B: Network ACL.",
      "C: Security Groups.",
      "D: VPC Flow logs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    "opts": [
      "A: AWS KMS.",
      "B: AWS Global accelerator.",
      "C: AWS Direct Connect.",
      "D: AWS Glue.",
      "E: Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Security",
      "Analytics",
      "Networking"
    ]
  },
  {
    "q": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    "opts": [
      "A: Building the relational database schema.",
      "B: Performing backups.",
      "C: Managing the database settings.",
      "D: Patching the database software.",
      "E: Installing the database software."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "RDS",
      "Shared Responsibility"
    ]
  },
  {
    "q": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    "opts": [
      "A: Amazon DynamoDB.",
      "B: Amazon SNS.",
      "C: Amazon RDS.",
      "D: Amazon ElastiCache."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "SNS"
    ]
  },
  {
    "q": "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    "opts": [
      "A: APN Consulting Partners.",
      "B: AWS TAM.",
      "C: APN Technology Partners.",
      "D: AWS Professional Services."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    "opts": [
      "A: Amazon LightSail.",
      "B: AWS Lambda.",
      "C: Amazon RDS instances.",
      "D: Amazon EC2 instances."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Lambda"
    ]
  },
  {
    "q": "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    "opts": [
      "A: She has properly built an elastic system.",
      "B: She has properly built a fault tolerant system.",
      "C: She has properly built an encrypted system.",
      "D: She has properly built a scalable system."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    "opts": [
      "A: Manages user access and encryption keys.",
      "B: Controls what IP address ranges can connect to your database instance.",
      "C: Deploys SSL/TLS certificates for use with your database instance.",
      "D: Distributes incoming traffic across multiple targets."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    "opts": [
      "A: EC2 launch type.",
      "B: Fargate launch type.",
      "C: Lightsail launch type.",
      "D: Lambda launch type."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate"
    ]
  },
  {
    "q": "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    "opts": [
      "A: Try to remove unnecessary AWS accounts.",
      "B: Add the accounts to an AWS Organization and use Consolidated Billing.",
      "C: Track the AWS charges that are incurred by the member accounts.",
      "D: Enable AWS tiered-pricing before provisioning resources."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    "opts": [
      "A: Network ACLs and Traffic Manager.",
      "B: Network ACLs and Subnets.",
      "C: Security Groups and Internet Gateways.",
      "D: Security Groups and Network ACLs."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "What does the AWS \"Business\" support plan provide? (Choose TWO)",
    "opts": [
      "A: Access to the full set of Trusted Advisor checks.",
      "B: Support Concierge Service.",
      "C: Less than 15 minutes response-time support if your business critical system goes down.",
      "D: AWS Support API.",
      "E: Proactive Technical Account Management."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
    "opts": [
      "A: Amazon Simple Storage Service.",
      "B: AWS Elastic Beanstalk.",
      "C: AWS CodeCommit.",
      "D: Amazon Elastic File System."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which statement is true in relation to security in AWS?",
    "opts": [
      "A: AWS manages everything related to EC2 operating systems.",
      "B: AWS customers are responsible for patching any database software running on Amazon EC2.",
      "C: Server side encryption is the responsibility of AWS.",
      "D: AWS is responsible for the security of your application."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Security"
    ]
  },
  {
    "q": "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
    "opts": [
      "A: Improves Fault-Tolerance.",
      "B: Provides your business with a seamless remote accessibility.",
      "C: Prevents unauthorized users from getting into your network.",
      "D: Provides automatic data backups.",
      "E: Can be scaled manually in a shorter period of time."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which statement is true regarding AWS pricing? (Choose TWO)",
    "opts": [
      "A: With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.",
      "B: You have no responsibility for third-party software license costs.",
      "C: You only pay for the individual services that you need with no long-term contracts.",
      "D: For some services, you have to pay a startup fee in order to get the service running.",
      "E: There are no reservations on AWS, you only pay for what you use."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    "opts": [
      "A: AWS Control Tower.",
      "B: Amazon Macie.",
      "C: AWS Systems Manager Patch Manager.",
      "D: AWS Security Hub."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security",
      "Well-Architected"
    ]
  },
  {
    "q": "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    "opts": [
      "A: Use CloudFront to monitor the CPU usage.",
      "B: Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
      "C: Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
      "D: Use SNS to monitor the utilization of the server."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "CloudWatch",
      "SNS"
    ]
  },
  {
    "q": "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon RDS.",
      "C: You can't run a database inside an Amazon EC2 instance.",
      "D: Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Storage"
    ]
  },
  {
    "q": "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
    "opts": [
      "A: Amazon CloudWatch.",
      "B: Amazon CloudSearch.",
      "C: Amazon Elastic MapReduce.",
      "D: Amazon CloudHSM."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
    "opts": [
      "A: Storage consumed.",
      "B: Number of requests to your functions.",
      "C: Number of volumes.",
      "D: Placement groups.",
      "E: Compute time consumed."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Lambda"
    ]
  },
  {
    "q": "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
    "opts": [
      "A: An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
      "B: An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
      "C: IAM users are more cost effective than IAM roles.",
      "D: A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
      "E: An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
    "opts": [
      "A: Deleting unused buckets.",
      "B: Using reservations.",
      "C: Deleting unnecessary snapshots.",
      "D: Changing the type of the volume.",
      "E: Distributing requests to multiple volumes."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    "opts": [
      "A: Notifies AWS customers about abuse events once they are reported.",
      "B: Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
      "C: Helps AWS customers identify the root cause of potential security issues.",
      "D: Checks security groups for rules that allow unrestricted access to AWS. resources."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Security"
    ]
  },
  {
    "q": "Which database service should you use if your application and data schema require \"joins\" or complex transactions?",
    "opts": [
      "A: Amazon RDS.",
      "B: AWS Outposts.",
      "C: Amazon DocumentDB.",
      "D: Amazon DynamoDB."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "AI / ML"
    ]
  },
  {
    "q": "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    "opts": [
      "A: Amazon CloudWatch.",
      "B: AWS Service Catalog.",
      "C: AWS Directory Service.",
      "D: AWS Tagging."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "What should you consider when storing data in Amazon Glacier?",
    "opts": [
      "A: Amazon Glacier only accepts data in a compressed format.",
      "B: Glacier can only be used to store frequently accessed data and data archives.",
      "C: Amazon Glacier does not provide immediate retrieval of data.",
      "D: Attach Glacier to an EC2 Instance to be able to store data."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
    "opts": [
      "A: Amazon EC2.",
      "B: AWS Batch.",
      "C: Lambda@Edge.",
      "D: AWS Fargate."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate"
    ]
  },
  {
    "q": "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
    "opts": [
      "A: Deploy your application across multiple EC2 instances.",
      "B: Deploy your application across multiple Availability Zones.",
      "C: Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
      "D: Deploy the underlying application resources across multiple subnets."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
    "opts": [
      "A: Developer.",
      "B: Premium.",
      "C: Enterprise.",
      "D: Standard.",
      "E: Business."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
    "opts": [
      "A: IAM group.",
      "B: IAM user.",
      "C: IAM role.",
      "D: AWS account root user.",
      "E: TAM."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following is a benefit of the \"Loose Coupling\" architecture principle?",
    "opts": [
      "A: It eliminates the need for change management.",
      "B: It allows for Cross-Region Replication.",
      "C: It helps AWS customers reduce Privileged Access to AWS resources.",
      "D: It allows individual application components or services to be modified without affecting other components."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
    "opts": [
      "A: Amazon Elastic Block Store.",
      "B: AWS Storage Gateway.",
      "C: Amazon Elastic File System.",
      "D: S3."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
    "opts": [
      "A: On-premises.",
      "B: IaaS.",
      "C: PaaS.",
      "D: Cloud."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the benefits of the AWS Marketplace service? (Choose TWO)",
    "opts": [
      "A: Protects customers by performing periodic security checks on listed products.",
      "B: Per-second billing.",
      "C: Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
      "D: Provides flexible pricing options that suit most customer needs.",
      "E: Provides software solutions that run on AWS or any other Cloud vendor."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    "opts": [
      "A: Elasticity.",
      "B: Durability.",
      "C: Traceability.",
      "D: Accessibility."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    "opts": [
      "A: Savings Plans.",
      "B: Spot Instances.",
      "C: Reserved Instances.",
      "D: On-Demand Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
    "opts": [
      "A: Amazon EFS.",
      "B: AWS Secrets Manager.",
      "C: AWS Systems Manager.",
      "D: Amazon CloudFront."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which of the following services is used when encrypting EBS volumes?",
    "opts": [
      "A: AWS WAF.",
      "B: AWS KMS.",
      "C: Amazon Macie.",
      "D: Amazon GuardDuty."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
    "opts": [
      "A: Download all the attached policies in a safe place.",
      "B: Delete all IAM accounts and recreate them.",
      "C: Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
      "D: Rotate all access keys.",
      "E: Change the email address and password of the root user account and enable MFA."
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudWatch"
    ]
  },
  {
    "q": "What is the Amazon ElastiCache service used for? (Choose TWO)",
    "opts": [
      "A: Provide an in-memory data storage service.",
      "B: Reduce delivery costs using Edge Locations.",
      "C: Improve web application performance.",
      "D: Provide a Chef-compatible cache to speed up application response.",
      "E: Distribute requests to multiple instances."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
    "opts": [
      "A: Deploy your resources across multiple Availability Zones.",
      "B: Use Amazon EC2 Auto Scaling.",
      "C: Deploy your resources in another region.",
      "D: Use Elastic Load Balancing.",
      "E: Use Serverless Computing whenever possible."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
    "opts": [
      "A: They provide free capacity when testing your new applications.",
      "B: They are cheaper than all other EC2 options.",
      "C: They remove the need to buy “safety net” capacity to handle periodic traffic spikes.",
      "D: They only require 1-2 days for setup and configuration.",
      "E: You can increase or decrease your compute capacity depending on the demands of your application."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    "opts": [
      "A: It is a data center designed to be completely isolated from other data centers in the same region.",
      "B: It is a collection of data centers distributed in multiple countries.",
      "C: It is a logically isolated network of the AWS Cloud.",
      "D: It is a distinct location within a region that is insulated from « failures in other Availability Zones."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    "opts": [
      "A: Regions.",
      "B: Transportation devices.",
      "C: Support plans.",
      "D: Edge locations."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Support"
    ]
  },
  {
    "q": "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
    "opts": [
      "A: Start the migration process immediately as all AWS services are PCI compliant.",
      "B: Ensure that AWS services are configured properly to meet all PCI DSS standards.",
      "C: Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
      "D: Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
      "E: Ensure that all PCI DSS physical security requirements are met."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "IAM",
      "RDS"
    ]
  },
  {
    "q": "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    "opts": [
      "A: 100 PetaBytes.",
      "B: Virtually unlimited storage.",
      "C: 5TeraBytes.",
      "D: 10 Exabytes."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    "opts": [
      "A: Operational Excellence.",
      "B: Security.",
      "C: Performance Efficiency.",
      "D: Reliability."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
    "opts": [
      "A: Amazon Route 53.",
      "B: Amazon Connect.",
      "C: Amazon CloudFront.",
      "D: Amazon EC2."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Route 53"
    ]
  },
  {
    "q": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    "opts": [
      "A: Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "B: Request and wait for approval from the customer’s internal security team, and then conduct testing.",
      "C: Notify AWS support, and then conduct testing immediately.",
      "D: Request and wait for approval from AWS support, and then conduct testing."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS Budgets.",
      "C: AWS Cost and Usage report.",
      "D: AWS Billing dashboard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    "opts": [
      "A: AWS Regions.",
      "B: Availability Zones.",
      "C: Edge locations.",
      "D: Amazon CloudFront."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    "opts": [
      "A: A minimum of one.",
      "B: A minimum of two.",
      "C: A minimum of three.",
      "D: A minimum of four or more."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "The AWS Cloud’s multiple Regions are an example of:",
    "opts": [
      "A: Agility.",
      "B: Global infrastructure.",
      "C: Elasticity.",
      "D: Pay-as-you-go pricing."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service can be used to manually launch instances based on resource requirements?",
    "opts": [
      "A: Amazon EBS.",
      "B: Amazon S3.",
      "C: Amazon EC2.",
      "D: Amazon ECS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "ECS / Fargate",
      "Storage"
    ]
  },
  {
    "q": "Which is a recommended pattern for designing a highly available architecture on AWS?",
    "opts": [
      "A: Ensure that components have low-latency network connectivity.",
      "B: Run enough Amazon EC2 instances to operate at peak load.",
      "C: Ensure that the application is designed to accommodate failure of any single component.",
      "D: Use a monolithic application that handles all operations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    "opts": [
      "A: High availability.",
      "B: Shared security model.",
      "C: Elasticity.",
      "D: Pay-as-you-go pricing.",
      "E: Reliability."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
    "opts": [
      "A: Amazon Route 53.",
      "B: AWS ACM.",
      "C: AWS Directory Service.",
      "D: AWS Identity & Access Management.",
      "E: AWS Data Pipeline."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Route 53",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    "opts": [
      "A: Amazon EC2.",
      "B: Amazon S3.",
      "C: AWS Lambda.",
      "D: Amazon EMR.",
      "E: Amazon EBS."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    "opts": [
      "A: Application management.",
      "B: Capacity management.",
      "C: Access control.",
      "D: Operating system maintenance.",
      "E: Data management."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "How do ELBs improve the reliability of your application?",
    "opts": [
      "A: By distributing traffic across multiple S3 buckets.",
      "B: By replicating data to multiple availability zones.",
      "C: By creating database Read Replicas.",
      "D: By ensuring that only healthy targets receive traffic."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3"
    ]
  },
  {
    "q": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    "opts": [
      "A: On-demand instances.",
      "B: Spot instances.",
      "C: Dedicated instances.",
      "D: Reserved instances."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
    "opts": [
      "A: Snowball.",
      "B: S3 Transfer Acceleration.",
      "C: Snowmobile.",
      "D: Amazon VPC."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Storage"
    ]
  },
  {
    "q": "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
    "opts": [
      "A: Amazon S3 Glacier.",
      "B: Amazon EFS.",
      "C: Amazon S3 Standard.",
      "D: Amazon EBS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which AWS Service is used to manage user permissions?",
    "opts": [
      "A: Security Groups.",
      "B: Amazon ECS.",
      "C: AWS IAM.",
      "D: AWS Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "VPC",
      "ECS / Fargate"
    ]
  },
  {
    "q": "Which support plan includes AWS Support Concierge Service?",
    "opts": [
      "A: Premium Support.",
      "B: Business Support.",
      "C: Enterprise Support.",
      "D: Standard Support."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
    "opts": [
      "A: AWS Config.",
      "B: Amazon CloudWatch.",
      "C: AWS CloudTrail.",
      "D: AWS CloudFormation."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "CloudFormation"
    ]
  },
  {
    "q": "What are the benefits of using an AWS-managed service? (Choose TWO)",
    "opts": [
      "A: Provides complete control over the virtual infrastructure.",
      "B: Allows customers to deliver new solutions faster.",
      "C: Lowers operational complexity.",
      "D: Eliminates the need to encrypt data.",
      "E: Allows developers to control all patching related activities."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "Which of the following are use cases for Amazon S3? (Choose TWO)",
    "opts": [
      "A: Hosting static websites.",
      "B: Hosting websites that require sustained high CPU utilization.",
      "C: Cost-effective database and log storage.",
      "D: A media store for the CloudFront service.",
      "E: Processing data streams at any scale."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "What is the AWS’ recommendation regarding access keys?",
    "opts": [
      "A: Delete all access keys and use passwords instead.",
      "B: Only share them with trusted people.",
      "C: Rotate them regularly.",
      "D: Save them within your application code."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    "opts": [
      "A: Key Pair.",
      "B: Access Keys.",
      "C: SDK.",
      "D: MFA."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "What is the benefit of using an API to access AWS Services?",
    "opts": [
      "A: It improves the performance of AWS resources.",
      "B: It reduces the time needed to provision AWS resources.",
      "C: It reduces the number of developers necessary.",
      "D: It allows for programmatic management of AWS resources."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
    "opts": [
      "A: AWS Storage Gateway.",
      "B: Amazon S3.",
      "C: Amazon EBS.",
      "D: Amazon Glacier."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    "opts": [
      "A: Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      "B: Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      "C: Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
      "D: Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What is the AWS service that provides five times the performance of a standard MySQL database?",
    "opts": [
      "A: Amazon Aurora.",
      "B: Amazon Redshift.",
      "C: Amazon DynamoDB.",
      "D: Amazon Neptune."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "What does AWS Service Catalog provide?",
    "opts": [
      "A: It enables customers to quickly find descriptions and use cases for AWS services.",
      "B: It enables customers to explore the different catalogs of AWS services.",
      "C: It simplifies organizing and governing commonly deployed IT services.",
      "D: It allows developers to deploy infrastructure on AWS using familiar programming languages."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    "opts": [
      "A: Protecting credentials.",
      "B: Logging access activity.",
      "C: Patching the database software.",
      "D: Operating system maintenance.",
      "E: Creating access policies."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "DynamoDB"
    ]
  },
  {
    "q": "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    "opts": [
      "A: AWS Snowball Migration Service.",
      "B: AWS Application Discovery Service.",
      "C: AWS DMS.",
      "D: AWS Migration Hub."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    "opts": [
      "A: Amazon Machine Image.",
      "B: AWS Cost Explorer.",
      "C: AWS Cost & Usage Report.",
      "D: Amazon CloudWatch."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which statement best describes the concept of an AWS region?",
    "opts": [
      "A: An AWS Region is a geographical location with a collection of Edge locations.",
      "B: An AWS Region is a virtual network dedicated only to a single AWS customer.",
      "C: An AWS Region is a geographical location with a collection of Availability Zones.",
      "D: An AWS Region represents the country where the AWS infrastructure exist."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    "opts": [
      "A: SNS logs.",
      "B: SQS logs.",
      "C: CloudWatch Logs.",
      "D: CloudTrail logs."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudWatch",
      "SNS",
      "SQS"
    ]
  },
  {
    "q": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    "opts": [
      "A: Availability Zones.",
      "B: Data sovereignty.",
      "C: The number of reads and writes per second.",
      "D: The nature of the queries.",
      "E: Software bugs."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    "opts": [
      "A: Quickly identify resources that belong to a specific project.",
      "B: Quickly identify software solutions on AWS.",
      "C: Track API calls in your AWS account.",
      "D: Quickly identify deleted resources and their metadata.",
      "E: Track AWS spending across multiple resources."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are AWS shared controls?",
    "opts": [
      "A: Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      "B: Controls that a customer inherits from AWS.",
      "C: Controls that apply to both the infrastructure layer and customer layers.",
      "D: Controls that the customer and AWS collaborate together upon to secure the infrastructure."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    "opts": [
      "A: Build multi-region architectures to better serve global customers.",
      "B: Apply security at all layers.",
      "C: Implement strong Identity and Access controls.",
      "D: Use serverless architectures.",
      "E: Enable audit logging."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Lambda",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    "opts": [
      "A: Protecting sensitive data.",
      "B: Patching of the underlying infrastructure.",
      "C: Setup and operation of managed databases.",
      "D: Maintaining consistent hardware components.",
      "E: Installing and configuring third-party software."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    "opts": [
      "A: Free commercial software licenses.",
      "B: Free technical support.",
      "C: Elastic resources.",
      "D: On-site visits for auditing.",
      "E: Cost Savings."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    "opts": [
      "A: Amazon Inspector.",
      "B: AWS Virtual Private Gateway.",
      "C: AWS Batch.",
      "D: Amazon ECS.",
      "E: AWS Config."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "ECS / Fargate",
      "Security"
    ]
  },
  {
    "q": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    "opts": [
      "A: Amazon EC2 is considered a Serverless Web Service.",
      "B: Amazon EC2 eliminates the need to invest in hardware upfront.",
      "C: Amazon EC2 can launch as many or as few virtual servers as needed.",
      "D: Amazon EC2 offers scalable computing."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "What is the AWS Compute service that executes code only when triggered by events?",
    "opts": [
      "A: AWS Lambda.",
      "B: Amazon CloudWatch.",
      "C: AWS Transit Gateway.",
      "D: Amazon EC2."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "CloudWatch",
      "Networking"
    ]
  },
  {
    "q": "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
    "opts": [
      "A: Amazon EBS Snapshots.",
      "B: Amazon VPC.",
      "C: AWS Managed Servers.",
      "D: Amazon EC2 Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Storage"
    ]
  },
  {
    "q": "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    "opts": [
      "A: AWS Secrets Manager.",
      "B: AWS WAF.",
      "C: AWS CAF.",
      "D: Amazon EFS."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS TCO Calculator.",
      "C: AWS Budgets.",
      "D: AWS Pricing Calculator."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    "opts": [
      "A: Using AWS Trusted Advisor to find underutilized resources.",
      "B: Using AWS CloudTrail to record user activities.",
      "C: Using AWS CloudFormation to manage infrastructure as code.",
      "D: Deploying an application in multiple Availability Zones."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    "opts": [
      "A: AWS allows them to pay later when their business succeed.",
      "B: AWS can build complete data centers faster than any other Cloud provider.",
      "C: Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "D: AWS removes the need to invest in operational expenditure.",
      "E: Using AWS allows companies to replace large capital expenditure with low variable costs."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What are the benefits of using DynamoDB? (Choose TWO)",
    "opts": [
      "A: Automatically scales to meet required throughput capacity.",
      "B: Provides resizable instances to match the current demand.",
      "C: Supports both relational and non-relational data models.",
      "D: Offers extremely low (single-digit millisecond) latency.",
      "E: Supports the most popular NoSQL database engines such as CouchDB and MongoDB."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "DynamoDB"
    ]
  },
  {
    "q": "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    "opts": [
      "A: Versioning.",
      "B: Deduplication.",
      "C: Permissions.",
      "D: Decryption.",
      "E: Conversion."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    "opts": [
      "A: AWS Partners.",
      "B: AWS Artifact.",
      "C: AWS Professional Services.",
      "D: Amazon Athena.",
      "E: Amazon PinPoint."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Analytics"
    ]
  },
  {
    "q": "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    "opts": [
      "A: Deleting unused EBS volumes after terminating an EC2instance.",
      "B: Deleting unused AutoScaling launch configuration.",
      "C: Deleting unused Elastic Load Balancers.",
      "D: Releasing unused Elastic IPs after terminating an EC2instance."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    "opts": [
      "A: AWS Cost Explorer.",
      "B: AWS Pricing Calculator.",
      "C: AWS Budgets.",
      "D: AWS Consolidated Billing."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    "opts": [
      "A: Running penetration tests.",
      "B: Reserving capacity.",
      "C: Data center operations.",
      "D: Auditing and regulatory compliance.",
      "E: Infrastructure security."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    "opts": [
      "A: Amazon Simple Email Service (Amazon SES).",
      "B: Amazon Simple Storage Service (Amazon S3).",
      "C: Amazon Simple Notification Service (Amazon SNS).",
      "D: Amazon Simple Queue Service (Amazon SQS)."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "SNS",
      "SQS"
    ]
  },
  {
    "q": "Which of the following allows you to create new RDS instances? (Choose TWO)",
    "opts": [
      "A: AWS CodeDeploy.",
      "B: AWS Quick Starts.",
      "C: AWS CloudFormation.",
      "D: AWS DMS.",
      "E: AWS Management Console."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "RDS",
      "CloudFormation"
    ]
  },
  {
    "q": "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    "opts": [
      "A: Low monthly instance maintenance costs.",
      "B: Low-cost instance tagging.",
      "C: Per-second instance billing.",
      "D: Low instance start-up fees."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS Group assists customers in achieving their desired business outcomes?",
    "opts": [
      "A: AWS Security Team.",
      "B: AWS Professional Services.",
      "C: AWS Trusted Advisor.",
      "D: AWS Concierge Support Team."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    "opts": [
      "A: AWS KMS.",
      "B: AWS Service Control Policies (SCPs).",
      "C: Multi-Factor Authentication (MFA).",
      "D: Amazon Macie."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    "opts": [
      "A: AWS Well-Architected Tool.",
      "B: AWS Artifact.",
      "C: AWS Glue.",
      "D: Amazon Chime."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Analytics",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
    "opts": [
      "A: Delete the encryption keys once your data is encrypted.",
      "B: With AWS you do not need to worry about encryption.",
      "C: Enable S3 Encryption.",
      "D: Encrypt the data prior to uploading it.",
      "E: Delete all IAM users that have access to S3."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "S3",
      "IAM",
      "Security"
    ]
  },
  {
    "q": "Which AWS service helps developers compile and test their code?",
    "opts": [
      "A: AWS CodeDeploy.",
      "B: AWS CodeCommit.",
      "C: CloudEndure.",
      "D: AWS CodeBuild."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
    "opts": [
      "A: Using default encryption for any number of S3 buckets.",
      "B: The number of EBS volumes attached to your instances.",
      "C: The storage class used for the objects stored.",
      "D: Creating and deleting S3 buckets.",
      "E: The total size in gigabytes of all objects stored."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Storage"
    ]
  },
  {
    "q": "What does the Amazon CloudFront service provide? (Choose TWO)",
    "opts": [
      "A: Tracks user activity and APl usage.",
      "B: Increases application availability by caching at the edge.",
      "C: Enables faster disaster recovery.",
      "D: Stores archived data at very low costs.",
      "E: Delivers content to end users with low latency."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    "opts": [
      "A: Amazon Lightsail.",
      "B: Amazon Connect.",
      "C: AWS Direct Connect.",
      "D: AWS Elastic Beanstalk."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    "opts": [
      "A: Using the AWS Cost & Usage Report.",
      "B: Using the AWS Total Cost of Ownership (TCO) dashboard.",
      "C: Using the AWS CloudWatch logs dashboard.",
      "D: Using the Amazon VPC dashboard."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
    "opts": [
      "A: Convertible.",
      "B: Expedited.",
      "C: Bulk.",
      "D: Spot.",
      "E: Standard."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following services gives you access to all AWS auditor-issued reports and certifications?",
    "opts": [
      "A: AWS Artifact.",
      "B: AWS Config.",
      "C: Amazon CloudWatch.",
      "D: AWS CloudTrail."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    "opts": [
      "A: AWS Resource Groups.",
      "B: AWS Placement Groups.",
      "C: AWS Management Console.",
      "D: AWS Tag Editor."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service collects metrics from running EC2 instances?",
    "opts": [
      "A: Amazon Inspector.",
      "B: Amazon CloudWatch.",
      "C: AWS CloudFormation.",
      "D: AWS CloudTrail."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "CloudFormation",
      "Security"
    ]
  },
  {
    "q": "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
    "opts": [
      "A: Amazon Detective.",
      "B: AWS X-Ray.",
      "C: AWS Security Hub.",
      "D: AWS Shield."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following compute resources are serverless? (Choose TWO)",
    "opts": [
      "A: Amazon EC2.",
      "B: AWS Fargate.",
      "C: AWS Lambda.",
      "D: Amazon ECS.",
      "E: Amazon EMR."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Lambda",
      "ECS / Fargate",
      "Analytics"
    ]
  },
  {
    "q": "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    "opts": [
      "A: Use EC2 Dedicated Hosts.",
      "B: Use EC2 Reserved Instances.",
      "C: Use EC2 Spot Instances.",
      "D: Use EC2 On-demand Instances."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    "opts": [
      "A: Tagging Enforcement.",
      "B: Architecture Optimization.",
      "C: Budgeting Processes.",
      "D: Resource Controls."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
    "opts": [
      "A: RedShift.",
      "B: RDS.",
      "C: CloudHSM.",
      "D: DMS."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Analytics"
    ]
  },
  {
    "q": "What can you use to assign permissions directly to an IAM user?",
    "opts": [
      "A: IAM Identity.",
      "B: IAM Group.",
      "C: IAM Role.",
      "D: IAM Policy."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    "opts": [
      "A: AWS allows customers to launch powerful EC2 instances to handle spikes in load.",
      "B: AWS allows customers to pay upfront to get bigger discounts.",
      "C: AWS allows customers to launch and terminate EC2 instances based on demand.",
      "D: AWS allows customers to choose cheaper types of EC2 instances that best fit their needs."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?",
    "opts": [
      "A: PostgreSQL.",
      "B: Oracle.",
      "C: Microsoft SQL Server.",
      "D: Teradata."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which of the following AWS services would help you migrate on-premise databases to AWS?",
    "opts": [
      "A: AWS DMS.",
      "B: Amazon S3 Transfer Acceleration.",
      "C: AWS Directory Service.",
      "D: AWS Transit Gateway."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Networking"
    ]
  },
  {
    "q": "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    "opts": [
      "A: Run WordPress on an Amazon Lightsail instance.",
      "B: Install WordPress on an Amazon EC2 instance.",
      "C: Use the Amazon S3 Web hosting feature.",
      "D: Host the website directly on AWS Cloud Development Kit (AWS CDK)."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
    "opts": [
      "A: AWS KMS.",
      "B: AWS Certificate Manager.",
      "C: AWS CodeDeploy.",
      "D: AWS CodeCommit.",
      "E: CloudHSM."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following services allows you to install and run custom relational database software?",
    "opts": [
      "A: Amazon EC2.",
      "B: Amazon Cognito.",
      "C: Amazon RDS.",
      "D: Amazon Inspector."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Security"
    ]
  },
  {
    "q": "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
    "opts": [
      "A: Auto Scaling.",
      "B: ELB.",
      "C: Amazon Route53.",
      "D: Amazon Elastic Container Service."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "ECS / Fargate"
    ]
  },
  {
    "q": "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
    "opts": [
      "A: AWS IAM.",
      "B: AWS Outposts.",
      "C: AWS Federation.",
      "D: Amazon Redshift."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Analytics"
    ]
  },
  {
    "q": "What are some key design principles for designing public cloud systems? (Choose TWO)",
    "opts": [
      "A: Reserved capacity instead of on demand.",
      "B: Loose coupling over tight coupling.",
      "C: Servers instead of managed services.",
      "D: Disposable resources instead of fixed servers.",
      "E: Multi-AZ deployments instead of multi-region deployments."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    "opts": [
      "A: AWS CloudTrail Trails.",
      "B: IAM Credential Report.",
      "C: AWS Artifact reports.",
      "D: AWS Cost and Usage Report."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following services enables you to easily generate and use your own encryption keys in the AWS Cloud?",
    "opts": [
      "A: AWS Shield.",
      "B: AWS Certificate Manager.",
      "C: AWS CloudHSM.",
      "D: AWS WAF."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "You have developed a web application targeting a global audience. Which of the following will help you achieve the highest redundancy and fault tolerance from an infrastructure perspective?",
    "opts": [
      "A: There is no need to architect for these capabilities in AWS, as AWS is redundant by default.",
      "B: Deploy the application in a single Availability Zone.",
      "C: Deploy the application in multiple Availability Zones in a single AWS region.",
      "D: Deploy the application in multiple Availability Zones in multiple AWS regions."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Select TWO services that automatically replicate data across Availability Zones.",
    "opts": [
      "A: Instance Store.",
      "B: S3.",
      "C: DynamoDB.",
      "D: Amazon Route 53.",
      "E: AWS VPN."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Route 53",
      "DynamoDB"
    ]
  },
  {
    "q": "Which of the following factors affect Amazon CloudFront cost? (Choose TWO)",
    "opts": [
      "A: Number of Requests.",
      "B: Traffic Distribution.",
      "C: Number of Volumes.",
      "D: Instance type.",
      "E: Storage Class."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront"
    ]
  },
  {
    "q": "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    "opts": [
      "A: AWS Service Control Policies (SCPs).",
      "B: AWS Artifact.",
      "C: AWS Budgets.",
      "D: AWS Acceptable Use Policy."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following security resources are available to any user for free? (Choose TWO)",
    "opts": [
      "A: AWS Bulletins.",
      "B: AWS TAM.",
      "C: AWS Support APl.",
      "D: AWS Security Blog.",
      "E: AWS Classroom Training."
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How can you protect data stored on Amazon S3 from accidental deletion?",
    "opts": [
      "A: By enabling S3 Versioning.",
      "B: By configuring S3 Bucket Policies.",
      "C: By configuring S3 Lifecycle Policies.",
      "D: By disabling S3 Cross-Region Replication (CRR)."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "Which of the following is the responsibility of AWS according to the AWS Shared Responsibility Model?",
    "opts": [
      "A: Securing regions and edge locations.",
      "B: Performing auditing tasks.",
      "C: Monitoring AWS resources usage.",
      "D: Securing access to AWS resources."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?",
    "opts": [
      "A: Business & Enterprise Support.",
      "B: Basic & Developer Support.",
      "C: Developer & Enterprise Support.",
      "D: Developer & Business Support."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following is NOT a benefit of using AWS Lambda?",
    "opts": [
      "A: AWS Lambda runs code without provisioning or managing servers.",
      "B: AWS Lambda provides resizable compute capacity in the cloud.",
      "C: There is no charge when your AWS Lambda code is not running.",
      "D: AWS Lambda can be called directly from any mobile app."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ]
  },
  {
    "q": "How does AWS help customers achieve compliance in the cloud?",
    "opts": [
      "A: It's not possible to meet regulatory compliance requirements in the Cloud.",
      "B: AWS applies the most common Cloud security standards, and is responsible for complying with customers’ applicable laws and regulations.",
      "C: AWS has many common assurance certifications such as ISO 9001 and HIPAA.",
      "D: Many AWS services are assessed regularly to comply with local laws and regulations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    "opts": [
      "A: Your security team.",
      "B: Your development team.",
      "C: AWS.",
      "D: Your internal DevOps team."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "Shared Responsibility"
    ]
  },
  {
    "q": "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    "opts": [
      "A: Amazon Elastic Transcoder.",
      "B: Amazon Pinpoint.",
      "C: AmazonS3.",
      "D: Amazon Rekognition."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "What are the benefits of the AWS Organizations service? (Choose TWO)",
    "opts": [
      "A: Control access to AWS services.",
      "B: Help organizations design and maintain an accelerated path to successful cloud adoption.",
      "C: Manage your organization’s payment methods.",
      "D: Help organization achieve their desired business outcomes with AWS.",
      "E: Consolidate billing across multiple AWS accounts."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service allows you to build a data warehouse in the cloud?",
    "opts": [
      "A: AWS Shield.",
      "B: Amazon Redshift.",
      "C: Amazon RDS.",
      "D: Amazon Comprehend."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Security",
      "Analytics",
      "AI / ML"
    ]
  },
  {
    "q": "What AWS service allows you to buy third-party software solutions and services that run on AWS resources?",
    "opts": [
      "A: AWS Application Discovery service.",
      "B: Amazon DevPay.",
      "C: AWS Marketplace.",
      "D: Resource Groups."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following services is an AWS repository management system that allows for storing, versioning, and managing your application code?",
    "opts": [
      "A: AWS CodePipeline.",
      "B: AWS CodeCommit.",
      "C: AWS X-Ray.",
      "D: Amazon Inspector."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS service can be used to route end users to the nearest AWS Region to reduce latency?",
    "opts": [
      "A: Amazon Cognito.",
      "B: AWS Systems Manager.",
      "C: AWS Cloud9.",
      "D: Amazon Route 53."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Route 53",
      "Security"
    ]
  },
  {
    "q": "Which feature enables users to sign into their AWS accounts with their existing corporate credentials?",
    "opts": [
      "A: Federation.",
      "B: Access keys.",
      "C: IAM Permissions.",
      "D: WAF rules."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model, what are the controls that customers fully inherit from AWS? (Choose TWO)",
    "opts": [
      "A: Awareness and Training.",
      "B: Communications controls.",
      "C: Data center security controls.",
      "D: Environmental controls.",
      "E: Resource Configuration Management."
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "What can you access by visiting the URL: <http://status.aws.amazon.com>?",
    "opts": [
      "A: AWS Billing Dashboard.",
      "B: AWS Cost Dashboard.",
      "C: AWS Service Health Dashboard.",
      "D: AWS Security Dashboard."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following procedures can reduce latency when your end users are retrieving data? (Choose TWO)",
    "opts": [
      "A: Store media assets in the region closest to your end users.",
      "B: Store media assets on an additional EBS volume and increase the capacity of your server.",
      "C: Replicate media assets to at least two availability zones.",
      "D: Reduce the size of media assets using the Amazon Elastic Transcoder.",
      "E: Store media assets in S3 and use CloudFront to distribute these assets."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "Which of the following are part of the seven design principles for security in the cloud? (Choose TWO)",
    "opts": [
      "A: Use manual monitoring techniques to protect your AWS resources.",
      "B: Use IAM roles to grant temporary access instead of long-term credentials.",
      "C: Scale horizontally to protect from failures.",
      "D: Enable real-time traceability.",
      "E: Never store sensitive data in the cloud."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudWatch"
    ]
  },
  {
    "q": "A company is migrating production workloads to AWS, and they are concerned about cost management across different departments. Which option should the company implement to categorize and track AWS spending?",
    "opts": [
      "A: Use the AWS Pricing Calculator service to monitor the costs incurred by each department.",
      "B: Use Amazon Aurora to forecast AWS spending based on usage.",
      "C: Apply cost allocation tags to segment AWS costs by different e projects and departments.",
      "D: Configure AWS Price List API to receive billing updates for each department automatically."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Billing & Cost"
    ]
  },
  {
    "q": "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software.   Which AWS service can be used to accomplish this?",
    "opts": [
      "A: Amazon RDS",
      "B: Amazon DynamoDB",
      "C: Amazon Aurora",
      "D: Amazon Redshift"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas.  Which of the following meets these requirements?",
    "opts": [
      "A: AWS Accounts",
      "B: AWS Regions",
      "C: Availability Zones",
      "D: Edge locations"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
    "opts": [
      "A: Establishing real-time communications between members of an internal team",
      "B: Facilitating the use of NoSQL databases",
      "C: Providing automated security checks",
      "D: Implementing consolidated billing",
      "E: Enforcing the governance of AWS accounts"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "DynamoDB",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service is used to automate configuration management using Chef and Puppet?",
    "opts": [
      "A: AWS Config",
      "B: AWS OpsWorks",
      "C: AWS CloudFormation",
      "D: AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ]
  },
  {
    "q": "Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?",
    "opts": [
      "A: Detailed billing report",
      "B: Consolidated billing",
      "C: AWS Cost and Usage report",
      "D: Cost allocation report"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "The AWS Total Cost of Ownership (TCO) Calculator is used to:",
    "opts": [
      "A: receive reports that break down AWS Cloud compute costs by duration, resource, or tags",
      "B: estimate savings when comparing the AWS Cloud to an on-premises environment",
      "C: estimate a monthly bill for the AWS Cloud resources that will be used",
      "D: enable billing alerts to monitor actual AWS costs compared to estimated costs"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)",
    "opts": [
      "A: Amazon Route 53",
      "B: AWS Direct Connect",
      "C: AWS Data Pipeline",
      "D: AWS VPN",
      "E: Amazon Connect"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)",
    "opts": [
      "A: Setting up server-side encryption on an Amazon S3 bucket",
      "B: Amazon RDS instance patching",
      "C: Network and firewall configurations",
      "D: Physical security of data center facilities",
      "E: Compute capacity availability"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "RDS",
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?",
    "opts": [
      "A: Developer",
      "B: Enterprise",
      "C: Business",
      "D: Basic"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases.   What is the MOST efficient way to apply the security patches?",
    "opts": [
      "A: Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.",
      "B: Enable automatic patching for the instances using the Amazon RDS console.",
      "C: In AWS Config, configure a rule for the instances and the required patch level.",
      "D: Use AWS Systems Manager to automate database patching according to a schedule."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance.   Based on this situation, the Amazon EC2 instances should be deployed:",
    "opts": [
      "A: in a single Availability Zone in one AWS Region",
      "B: with multiple Elastic Network Interfaces belonging to different subnets",
      "C: across multiple Availability Zones in one AWS Region",
      "D: across multiple Availability Zones in two AWS Regions"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency.   What should the company do to reduce latency?",
    "opts": [
      "A: Implement AWS Direct Connect for users in Brazil",
      "B: Provision resources in the South America (São Paulo) Region in Brazil.",
      "C: Use AWS Transit Gateway to quickly route users from Brazil to the application",
      "D: Launch additional Amazon EC2 instances in Sydney to handle the demand"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Networking"
    ]
  },
  {
    "q": "An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process.   What is the most appropriate purchasing option?",
    "opts": [
      "A: Dedicated Instances",
      "B: Spot Instances",
      "C: On-Demand Instances",
      "D: Reserved Instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?",
    "opts": [
      "A: AWS Service Health Dashboard",
      "B: AWS Personal Health Dashboard",
      "C: AWS Trusted Advisor dashboard",
      "D: Amazon CloudWatch dashboard"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?",
    "opts": [
      "A: AWS Backup",
      "B: Amazon Connect",
      "C: AWS Direct Connect",
      "D: AWS Storage Gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
    "opts": [
      "A: Access keys",
      "B: Virtual private gateways",
      "C: Security groups",
      "D: Access Control Lists (ACL)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
    "opts": [
      "A: Use AWS Direct Connect",
      "B: Use AWS VPN",
      "C: Use AWS Client VPN",
      "D: Use an AWS Transit Gateway"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?",
    "opts": [
      "A: Basic",
      "B: Business",
      "C: Developer",
      "D: Enterprise"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?",
    "opts": [
      "A: Amazon Cognito",
      "B: AWS Organizations",
      "C: AWS Shield",
      "D: AWS Firewall Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "What is the best resource for a user to find compliance-related information and reports about AWS?",
    "opts": [
      "A: AWS Artifact",
      "B: AWS Marketplace",
      "C: Amazon Inspector",
      "D: AWS Support"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?",
    "opts": [
      "A: Amazon S3 Standard",
      "B: Amazon S3 Glacier Deep Archive",
      "C: Amazon S3 One Zone-Infrequent Access",
      "D: Amazon S3 Glacier"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "What is an Availability Zone in AWS?",
    "opts": [
      "A: One or more physical data centers",
      "B: A completely isolated geographic location",
      "C: One or more edge locations based around the world",
      "D: A data center location with a single source of power and networking"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which AWS services can be used as infrastructure automation tools? (Choose two.)",
    "opts": [
      "A: AWS CloudFormation",
      "B: Amazon CloudFront",
      "C: AWS Batch",
      "D: AWS OpsWorks",
      "E: Amazon QuickSight"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service enables users to create copies of resources across AWS Regions?",
    "opts": [
      "A: Amazon ElastiCache",
      "B: AWS CloudFormation",
      "C: AWS CloudTrail",
      "D: AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFormation"
    ]
  },
  {
    "q": "A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail.   Which AWS service will provide this capability?",
    "opts": [
      "A: AWS Secrets Manager",
      "B: AWS Systems Manager",
      "C: AWS Key Management Service (AWS KMS)",
      "D: AWS Certificate Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    "opts": [
      "A: Easy and fast deployment of applications in multiple Regions around the world",
      "B: Security of the AWS Cloud",
      "C: Elasticity of the AWS Cloud",
      "D: Lower variable costs due to massive economies of scale"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What credential components are required to gain programmatic access to an AWS account? (Choose two.)",
    "opts": [
      "A: An access key ID",
      "B: A primary key",
      "C: A secret access key",
      "D: A user ID",
      "E: A secondary key"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following are AWS compute services? (Select two.)",
    "opts": [
      "A: Amazon Lightsail",
      "B: AWS Systems Manager",
      "C: AWS CloudFormation",
      "D: AWS Batch",
      "E: Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFormation",
      "Security"
    ]
  },
  {
    "q": "How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?",
    "opts": [
      "A: Add department-specific tags to each resource",
      "B: Create a separate VPC for each department",
      "C: Create a separate AWS account for each department",
      "D: Use AWS Organizations"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "VPC"
    ]
  },
  {
    "q": "What is a benefit of consolidated billing for AWS accounts?",
    "opts": [
      "A: Access to AWS Personal Health Dashboard",
      "B: Combined usage volume discounts",
      "C: Improved account security",
      "D: Centralized AWS IAM"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?",
    "opts": [
      "A: AWS Organizations",
      "B: AWS Budgets",
      "C: Cost Explorer",
      "D: AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
    "opts": [
      "A: Amazon GuardDuty",
      "B: Amazon Inspector",
      "C: Amazon Macie",
      "D: AWS Shield"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which tool can be used to monitor AWS service limits?",
    "opts": [
      "A: AWS Total Cost of Ownership (TCO) Calculator",
      "B: AWS Trusted Advisor",
      "C: AWS Personal Health Dashboard",
      "D: AWS Cost and Usage report"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company has distributed its workload on both the AWS Cloud and some on-premises servers.   What type of architecture is this?",
    "opts": [
      "A: Virtual private network",
      "B: Virtual private cloud",
      "C: Hybrid cloud",
      "D: Private cloud"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "Which of the following describes a security best practice that can be implemented using AWS IAM?",
    "opts": [
      "A: Disable AWS Management Console access for all users",
      "B: Generate secret keys for every IAM user",
      "C: Grant permissions to users who are required to perform a given task only",
      "D: Store AWS credentials within Amazon EC2 instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "What can be used to automate and manage secure, well-architected, multi-account AWS environments?",
    "opts": [
      "A: AWS shared responsibility model",
      "B: AWS Control Tower",
      "C: AWS Security Hub",
      "D: AWS Well-Architected Tool"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?",
    "opts": [
      "A: VPC peering",
      "B: AWS Transit Gateway",
      "C: AWS Direct Connect",
      "D: AWS Global Accelerator"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events.   Which AWS managed service will meet these requirements?",
    "opts": [
      "A: AWS Shield Advanced",
      "B: AWS Firewall Manager",
      "C: AWS WAF",
      "D: Amazon GuardDuty"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "A company's application has flexible start and end times.   Which Amazon EC2 pricing model will be the MOST cost-effective?",
    "opts": [
      "A: On-Demand Instances",
      "B: Spot Instances",
      "C: Reserved Instances",
      "D: Dedicated Hosts"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)",
    "opts": [
      "A: Physical and environmental security",
      "B: Physical network devices including firewalls",
      "C: Storage device decommissioning",
      "D: Security of data in transit",
      "E: Data integrity authentication"
    ],
    "a": 3,
    "correct": [
      3,
      4
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?",
    "opts": [
      "A: On-Demand Instances",
      "B: Reserved Instances",
      "C: Spot Instances",
      "D: Dedicated Hosts"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?",
    "opts": [
      "A: Amazon Elastic Container Registry (Amazon ECR)",
      "B: AWS Elastic Beanstalk",
      "C: Amazon Elastic Container Service (Amazon ECS)",
      "D: Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "ECS / Fargate",
      "Storage"
    ]
  },
  {
    "q": "Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?",
    "opts": [
      "A: Amazon Cognito",
      "B: AWS Shield",
      "C: AWS IAM role",
      "D: AWS IAM user access key"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "IAM",
      "Security"
    ]
  },
  {
    "q": "A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it.   Who should the developer contact for this level of support?",
    "opts": [
      "A: AWS Support using a support case",
      "B: AWS Professional Services",
      "C: AWS technical account manager",
      "D: AWS consulting partners"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Support"
    ]
  },
  {
    "q": "What is the purpose of having an internet gateway within a VPC?",
    "opts": [
      "A: To create a VPN connection to the VPC",
      "B: To allow communication between the VPC and the Internet",
      "C: To impose bandwidth constraints on internet traffic",
      "D: To load balance traffic from the Internet across Amazon EC2 instances"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC"
    ]
  },
  {
    "q": "A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention.   How can these requirements be met?",
    "opts": [
      "A: Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.",
      "B: Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.",
      "C: Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.",
      "D: Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "CloudFront",
      "Route 53",
      "Storage"
    ]
  },
  {
    "q": "Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?",
    "opts": [
      "A: NAT gateway",
      "B: Elastic Load Balancing",
      "C: Amazon Athena",
      "D: AWS PrivateLink"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Analytics"
    ]
  },
  {
    "q": "AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)",
    "opts": [
      "A: Cost optimization",
      "B: Auditing",
      "C: Serverless architecture",
      "D: Performance",
      "E: Scalability"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Support",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)",
    "opts": [
      "A: Closing an AWS account",
      "B: Creating a new IAM policy",
      "C: Changing AWS Support plans",
      "D: Attaching a role to an Amazon EC2 instance",
      "E: Generating access keys for IAM users"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "IAM",
      "Support"
    ]
  },
  {
    "q": "Fault tolerance refers to:",
    "opts": [
      "A: the ability of an application to accommodate growth without changing design",
      "B: how well and how quickly an application's environment can have lost data restored",
      "C: how secure your application is",
      "D: the built-in redundancy of an application's components"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which storage service can be used as a low-cost option for hosting static websites?",
    "opts": [
      "A: Amazon Glacier",
      "B: Amazon DynamoDB",
      "C: Amazon Elastic File System (Amazon EFS)",
      "D: Amazon Simple Storage Service (Amazon S3)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Storage"
    ]
  },
  {
    "q": "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    "opts": [
      "A: Reserved Instances",
      "B: On-Demand",
      "C: Dedicated Hosts",
      "D: Spot Instances"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    "opts": [
      "A: Physical access controls",
      "B: Data encryption",
      "C: Secure disposal of storage devices",
      "D: Environmental risk management"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    "opts": [
      "A: Amazon EC2",
      "B: Amazon Route 53",
      "C: Amazon ElastiCache",
      "D: Amazon DynamoDB"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "DynamoDB"
    ]
  },
  {
    "q": "A company is looking for a scalable data warehouse solution.   Which of the following AWS solutions would meet the company's needs?",
    "opts": [
      "A: Amazon Simple Storage Service (Amazon S3)",
      "B: Amazon DynamoDB",
      "C: Amazon Kinesis",
      "D: Amazon Redshift"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which statement best describes Elastic Load Balancing?",
    "opts": [
      "A: It translates a domain name into an IP address using DNS.",
      "B: It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "C: It collects metrics on connected Amazon EC2 instances.",
      "D: It automatically adjusts the number of Amazon EC2 instances to support incoming traffic."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
    "opts": [
      "A: Command line interface",
      "B: On-premises",
      "C: Software Development Kits",
      "D: Software-as-a-service",
      "E: Hybrid"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "The AWS Cloud's multiple Regions are an example of:",
    "opts": [
      "A: agility.",
      "B: global infrastructure.",
      "C: elasticity.",
      "D: pay-as-you-go pricing."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
    "opts": [
      "A: AWS Storage Gateway",
      "B: Amazon S3",
      "C: Amazon Elastic File System (EFS)",
      "D: Amazon Glacier",
      "E: Amazon CloudFront"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "S3",
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "Web servers running on Amazon EC2 access a legacy application running in a corporate data center.   What term would describe this model?",
    "opts": [
      "A: Cloud-native",
      "B: Partner network",
      "C: Hybrid architecture",
      "D: Infrastructure as a service"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    "opts": [
      "A: They require the customer to monitor and replace failing instances.",
      "B: They have better performance than customer-managed services.",
      "C: They simplify patching and updating underlying OSs.",
      "D: They do not require the customer to optimize instance type or size selections."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which service provides a virtually unlimited amount of online highly durable object storage?",
    "opts": [
      "A: Amazon Redshift",
      "B: Amazon Elastic File System (Amazon EFS)",
      "C: Amazon Elastic Container Service (Amazon ECS)",
      "D: Amazon S3"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "ECS / Fargate",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    "opts": [
      "A: IAM group",
      "B: IAM user",
      "C: IAM role",
      "D: IAM policy"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following security-related services does AWS offer? (Select TWO.)",
    "opts": [
      "A: Multi-factor authentication physical tokens",
      "B: AWS Trusted Advisor security checks",
      "C: Data encryption",
      "D: Automated penetration testing",
      "E: Amazon S3 copyrighted content detection"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which AWS managed service is used to host databases?",
    "opts": [
      "A: AWS Batch",
      "B: AWS Artifact",
      "C: AWS Data Pipeline",
      "D: Amazon RDS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    "opts": [
      "A: Amazon S3",
      "B: Amazon Glacier",
      "C: Amazon EBS",
      "D: Amazon EFS"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "When architecting cloud applications, which of the following are a key design principle?",
    "opts": [
      "A: Use the largest instance possible",
      "B: Provision capacity for peak load",
      "C: Use the Scrum development process",
      "D: Implement elasticity"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service should be used for long-term, low-cost storage of data backups?",
    "opts": [
      "A: Amazon RDS",
      "B: Amazon Glacier",
      "C: AWS Snowball",
      "D: AWS EBS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "Storage"
    ]
  },
  {
    "q": "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    "opts": [
      "A: Granting access to individuals and services",
      "B: Encrypting data in transit",
      "C: Updating Amazon EC2 host firmware",
      "D: Updating operating systems"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    "opts": [
      "A: AWS Marketplace",
      "B: Amazon Lumberyard",
      "C: AWS Artifact",
      "D: Amazon CloudSearch"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is a benefit of using the AWS Cloud?",
    "opts": [
      "A: Permissive security removes the administrative burden.",
      "B: Ability to focus on revenue-generating activities.",
      "C: Control over cloud network hardware.",
      "D: Choice of specific cloud hardware vendors."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    "opts": [
      "A: Dedicated Hosts",
      "B: Reserved Instances",
      "C: On-Demand Instances",
      "D: No Upfront Reserved Instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service provides the ability to manage infrastructure as code?",
    "opts": [
      "A: AWS CodePipeline",
      "B: AWS CodeDeploy",
      "C: AWS Direct Connect",
      "D: AWS CloudFormation"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFormation",
      "Networking"
    ]
  },
  {
    "q": "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    "opts": [
      "A: AWS Config",
      "B: AWS Trusted Advisor",
      "C: Amazon CloudWatch",
      "D: Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Security",
      "Support"
    ]
  },
  {
    "q": "What is Amazon CloudWatch?",
    "opts": [
      "A: A code repository with customizable build and team commit features.",
      "B: A metrics repository with customizable notification thresholds and channels.",
      "C: A security configuration repository with threat analytics.",
      "D: A rule repository of a web application firewall with automated vulnerability prevention features."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    "opts": [
      "A: AWS Server Migration Service",
      "B: AWS Organizations",
      "C: AWS Budgets",
      "D: AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
    "opts": [
      "A: AWS Elastic Beanstalk",
      "B: AWS OpsWorks",
      "C: AWS CodeDeploy",
      "D: AWS Batch",
      "E: AWS X-Ray"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    "opts": [
      "A: On-Demand Instances",
      "B: Reserved Instances",
      "C: Spot Instances",
      "D: Convertible Reserved Instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
    "opts": [
      "A: Use manual monitoring.",
      "B: Use fixed servers.",
      "C: Implement loose coupling.",
      "D: Rely on individual components.",
      "E: Design for scalability."
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudWatch"
    ]
  },
  {
    "q": "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    "opts": [
      "A: Enterprise",
      "B: Business",
      "C: Developer",
      "D: Basic"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Where can AWS compliance and certification reports be downloaded?",
    "opts": [
      "A: AWS Artifact",
      "B: AWS Concierge",
      "C: AWS Certificate Manager",
      "D: AWS Trusted Advisor"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
    "opts": [
      "A: AWS Service Health Dashboard",
      "B: AWS X-Ray",
      "C: AWS Personal Health Dashboard",
      "D: Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "Which of the following is an advantage of consolidated billing on AWS?",
    "opts": [
      "A: Volume pricing qualification",
      "B: Shared access permissions",
      "C: Multiple bills per account",
      "D: Eliminates the need for tagging"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    "opts": [
      "A: Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "B: Request and wait for approval from the customer's internal security team, and then conduct testing.",
      "C: Notify AWS support, and then conduct testing immediately.",
      "D: Request and wait for approval from AWS support, and then conduct testing."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    "opts": [
      "A: Amazon Elastic Block Store (Amazon EBS)",
      "B: Amazon Machine Image",
      "C: Amazon EC2 Systems Manager",
      "D: Amazon AppStream 2.0"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "How would an AWS customer easily apply common access controls to a large set of users?",
    "opts": [
      "A: Apply an IAM policy to an IAM group.",
      "B: Apply an IAM policy to an IAM role.",
      "C: Apply the same IAM policy to all IAM users with access to the same workload.",
      "D: Apply an IAM policy to an Amazon Cognito user pool."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    "opts": [
      "A: AWS Cost Explorer",
      "B: AWS Budgets",
      "C: AWS Cost and Usage report",
      "D: AWS Billing dashboard"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
    "opts": [
      "A: AWS Concierge",
      "B: AWS CloudFormation",
      "C: Amazon Simple Storage Service (Amazon S3)",
      "D: Amazon EC2 Auto Scaling",
      "E: AWS Management Console"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "RDS",
      "CloudFormation",
      "Support"
    ]
  },
  {
    "q": "Which of the following is an AWS Cloud architecture design principle?",
    "opts": [
      "A: Implement single points of failure.",
      "B: Implement loose coupling.",
      "C: Implement monolithic design.",
      "D: Implement vertical scaling."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following security measures protect access to an AWS account? (Select TWO.)",
    "opts": [
      "A: Enable AWS CloudTrail.",
      "B: Grant least privilege access to IAM users.",
      "C: Create one IAM user and share with many developers and users.",
      "D: Enable Amazon CloudFront.",
      "E: Activate multi-factor authentication (MFA) for privileged users."
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "IAM",
      "CloudFront"
    ]
  },
  {
    "q": "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    "opts": [
      "A: Amazon Glacier",
      "B: AWS Snowball",
      "C: AWS Storage Gateway",
      "D: Amazon Elastic Block Storage (Amazon EBS)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage"
    ]
  },
  {
    "q": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    "opts": [
      "A: Amazon RDS",
      "B: Amazon EC2",
      "C: Amazon ElastiCache",
      "D: AWS Fargate"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "ECS / Fargate"
    ]
  },
  {
    "q": "Which of the following is an important architectural design principle when designing cloud applications?",
    "opts": [
      "A: Use multiple Availability Zones.",
      "B: Use tightly coupled components.",
      "C: Use open source software.",
      "D: Provision extra capacity."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS support plan includes a dedicated Technical Account Manager?",
    "opts": [
      "A: Developer",
      "B: Enterprise",
      "C: Business",
      "D: Basic"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    "opts": [
      "A: AWS manages the data stored in Amazon RDS tables.",
      "B: AWS manages the maintenance of the operating system.",
      "C: AWS automatically scales up instance types on demand.",
      "D: AWS manages the database type."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which service is best for storing common database query results, which helps to alleviate database access load?",
    "opts": [
      "A: Amazon Machine Learning",
      "B: Amazon SQS",
      "C: Amazon ElastiCache",
      "D: Amazon EC2 Instance Store"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "SQS"
    ]
  },
  {
    "q": "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
    "opts": [
      "A: Patching operating system software",
      "B: Encrypting data",
      "C: Enforcing multi-factor authentication",
      "D: Auditing physical data center assets"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Online Tech Talks",
      "C: AWS Blog",
      "D: AWS Forums",
      "E: AWS Classroom Training"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
    "opts": [
      "A: Amazon CloudFront distributions",
      "B: Amazon Route 53",
      "C: Security Groups",
      "D: Subnets",
      "E: Elastic Load Balancing"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "CloudFront",
      "Route 53"
    ]
  },
  {
    "q": "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    "opts": [
      "A: Use AWS Budgets on each account to pay only to budget.",
      "B: Contact AWS Support for a monthly bill.",
      "C: Create an AWS Organization from the payer account and invite the other accounts to join.",
      "D: Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
    "opts": [
      "A: Cost Explorer",
      "B: AWS Total Cost of Ownership (TCO) Calculator",
      "C: AWS Simple Monthly Calculator",
      "D: AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
    "opts": [
      "A: AWS Cost Explorer between AWS accounts",
      "B: Linked accounts and consolidated billing",
      "C: Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report",
      "D: Amazon EC2 Instance Usage Report between AWS accounts"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company has multiple AWS accounts and wants to simplify and consolidate its billing process.  Which AWS service will achieve this?",
    "opts": [
      "A: AWS Cost and Usage Reports",
      "B: AWS Organizations",
      "C: AWS Cost Explorer",
      "D: AWS Budgets"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data.   Which of the following services will help fulfill this requirement?",
    "opts": [
      "A: Amazon CloudFront",
      "B: AWS Direct Connect",
      "C: Amazon Route 53 global DNS",
      "D: Amazon Simple Storage Service (Amazon S3) transfer acceleration"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront",
      "Route 53",
      "Networking"
    ]
  },
  {
    "q": "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
    "opts": [
      "A: On-premises",
      "B: Hybrid",
      "C: Cloud",
      "D: Platform as a service"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How is asset management on AWS easier than asset management in a physical data center?",
    "opts": [
      "A: AWS provides a Configuration Management Database that users can maintain.",
      "B: AWS performs infrastructure discovery scans on the customer's behalf.",
      "C: Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.",
      "D: Users can gather asset metadata reliably with a few API calls."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3"
    ]
  },
  {
    "q": "What feature of Amazon RDS helps to create globally redundant databases?",
    "opts": [
      "A: Snapshots",
      "B: Automatic patching and updating",
      "C: Cross-Region read replicas",
      "D: Provisioned IOPS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    "opts": [
      "A: restricted access.",
      "B: as-needed access.",
      "C: least privilege access.",
      "D: token access."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which methods can be used to identify AWS costs by departments? (Choose two.)",
    "opts": [
      "A: Enable multi-factor authentication for the AWS account root user.",
      "B: Create separate accounts for each department.",
      "C: Use Reserved Instances whenever possible.",
      "D: Use tags to associate each instance with a particular department.",
      "E: Pay bills using purchase orders."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
    "opts": [
      "A: Securing the hardware, software, facilities, and networks that run all products and services.",
      "B: Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
      "C: Configuring the operating system, network, and firewall.",
      "D: Obtaining industry certifications and independent third-party attestations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which managed AWS service provides real-time guidance on AWS security best practices?",
    "opts": [
      "A: AWS X-Ray",
      "B: AWS Trusted Advisor",
      "C: Amazon CloudWatch",
      "D: AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
    "opts": [
      "A: Resource groups",
      "B: Lifecycle policies",
      "C: Application Load Balancer",
      "D: Amazon EC2 Auto Scaling"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
    "opts": [
      "A: Visualization management",
      "B: Hardware management",
      "C: Encryption management",
      "D: Facilities management",
      "E: Firewall management"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
    "opts": [
      "A: AWS Direct Connect",
      "B: AWS Snowball",
      "C: AWS Storage Gateway",
      "D: AWS Snowball Edge"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "What is a responsibility of AWS in the shared responsibility model?",
    "opts": [
      "A: Updating the network ACLs to block traffic to vulnerable ports.",
      "B: Patching operating systems running on Amazon EC2 instances.",
      "C: Updating the firmware on the underlying EC2 hosts.",
      "D: Updating the security group rules to block traffic to the vulnerable ports."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
    "opts": [
      "A: Implement loose coupling.",
      "B: Design for failure.",
      "C: Automate everything that can be automated.",
      "D: Use services, not servers."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "What does it mean to grant least privilege to AWS IAM users?",
    "opts": [
      "A: It is granting permissions to a single user only.",
      "B: It is granting permissions using AWS IAM policies only.",
      "C: It is granting AdministratorAccess policy permissions to trustworthy users.",
      "D: It is granting only the permissions required to perform a given task."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "What is a benefit of loose coupling as a principle of cloud architecture design?",
    "opts": [
      "A: It facilitates low-latency request handling.",
      "B: It allows applications to have dependent workflows.",
      "C: It prevents cascading failures between different components.",
      "D: It allows companies to focus on their physical data center operations."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet. Which service will facilitate private hybrid connectivity?",
    "opts": [
      "A: Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway",
      "B: AWS Direct Connect",
      "C: Amazon Simple Storage Service (Amazon S3) Transfer Acceleration",
      "D: AWS Web Application Firewall (AWS WAF)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "VPC",
      "Security",
      "Networking"
    ]
  },
  {
    "q": "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails.   Applying which AWS Cloud design principle will address the current design issue?",
    "opts": [
      "A: Implementing elasticity, enabling the application to scale up or scale down as demand changes.",
      "B: Enabling several EC2 instances to run in parallel to achieve better performance.",
      "C: Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.",
      "D: Doubling EC2 computing resources to increase system fault tolerance."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "How can a customer increase security to AWS account logons? (Choose two.)",
    "opts": [
      "A: Configure AWS Certificate Manager",
      "B: Enable Multi-Factor Authentication (MFA)",
      "C: Use Amazon Cognito to manage access",
      "D: Configure a strong password policy",
      "E: Enable AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "IAM",
      "Security"
    ]
  },
  {
    "q": "What AWS service would be used to centrally manage AWS access across multiple accounts?",
    "opts": [
      "A: AWS Service Catalog",
      "B: AWS Config",
      "C: AWS Trusted Advisor",
      "D: AWS Organizations"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
    "opts": [
      "A: AWS Cost and Usage reports",
      "B: AWS Budgets",
      "C: AWS Cost Explorer",
      "D: AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "What can users access from AWS Artifact?",
    "opts": [
      "A: AWS security and compliance documents",
      "B: A download of configuration management details for all AWS resources",
      "C: Training materials for AWS services",
      "D: A security assessment of the applications deployed in the AWS Cloud"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
    "opts": [
      "A: Enterprise",
      "B: Business",
      "C: Developer",
      "D: Basic"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
    "opts": [
      "A: Deployment to a single Availability Zone",
      "B: Ability to recover from failure",
      "C: Design for cost optimization",
      "D: Perform operations as code"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
    "opts": [
      "A: Amazon EBS",
      "B: Amazon EC2 instance store",
      "C: Amazon EFS",
      "D: Amazon S3"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Storage"
    ]
  },
  {
    "q": "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
    "opts": [
      "A: Users do not have to guess about future capacity needs.",
      "B: Users can utilize existing hardware contracts for purchases.",
      "C: Users can fix costs no matter what their traffic is.",
      "D: Users can avoid audits by using reports from AWS."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is an AWS-managed compute service?",
    "opts": [
      "A: Amazon SWF",
      "B: Amazon EC2",
      "C: AWS Lambda",
      "D: Amazon Aurora"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "Lambda"
    ]
  },
  {
    "q": "Which of the following is an important architectural principle when designing cloud applications?",
    "opts": [
      "A: Store data and backups in the same region.",
      "B: Design tightly coupled system components.",
      "C: Avoid multi-threading.",
      "D: Design for failure"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which mechanism allows developers to access AWS services from application code?",
    "opts": [
      "A: AWS Software Development Kit",
      "B: AWS Management Console",
      "C: AWS CodePipeline",
      "D: AWS Config"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
    "opts": [
      "A: On-Demand Instances",
      "B: Reserved Instances",
      "C: Spot Instances",
      "D: Dedicated Instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following services is a MySQL-compatible database that automatically grows storage as needed?",
    "opts": [
      "A: Amazon Elastic Compute Cloud (Amazon EC2)",
      "B: Amazon Relational Database Service (Amazon RDS) for MySQL",
      "C: Amazon Lightsail",
      "D: Amazon Aurora"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
    "opts": [
      "A: Amazon VPC endpoints",
      "B: Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink",
      "C: Amazon VPC peering",
      "D: AWS Direct Connect"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which service's PRIMARY purpose is software version control?",
    "opts": [
      "A: Amazon CodeStar",
      "B: AWS Command Line Interface (AWS CLI)",
      "C: Amazon Cognito",
      "D: AWS CodeCommit"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform.  Which tool can be used to perform this comparison?",
    "opts": [
      "A: AWS Simple Monthly Calculator",
      "B: AWS Total Cost of Ownership (TCO) Calculator",
      "C: AWS Billing and Cost Management console",
      "D: Cost Explorer"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
    "opts": [
      "A: AWS Batch",
      "B: AWS Snowball",
      "C: AWS Migration Hub",
      "D: AWS Snowmobile"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Storage"
    ]
  },
  {
    "q": "Which of the following BEST describe the AWS pricing model? (Choose two.)",
    "opts": [
      "A: Fixed-term",
      "B: Pay-as-you-go",
      "C: Colocation",
      "D: Planned",
      "E: Variable cost"
    ],
    "a": 1,
    "correct": [
      1,
      4
    ],
    "multi": true,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)",
    "opts": [
      "A: Public load balancers with AWS Application Auto Scaling capabilities",
      "B: F5 Big-IP and Citrix NetScaler load balancers",
      "C: Classic Load Balancers",
      "D: Cross-zone load balancers with public and private IPs",
      "E: Application Load Balancers"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Why should a company choose AWS instead of a traditional data center?",
    "opts": [
      "A: AWS provides users with full control over the underlying resources.",
      "B: AWS does not require long-term contracts and provides a pay-as-you-go model.",
      "C: AWS offers edge locations in every country, supporting global reach.",
      "D: AWS has no limits on the number of resources that can be created."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
    "opts": [
      "A: AWS CloudTrail across multiple Availability Zones",
      "B: Amazon CloudFront to edge locations",
      "C: AWS CloudFormation in multiple regions",
      "D: A virtual private gateway over AWS Direct Connect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudFormation",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
    "opts": [
      "A: AWS Config",
      "B: AWS Certificate Manager",
      "C: Amazon Inspector",
      "D: AWS Artifact"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security"
    ]
  },
  {
    "q": "Which of the following AWS services can be used to run a self-managed database?",
    "opts": [
      "A: Amazon Route 53",
      "B: AWS X-Ray",
      "C: AWS Snowmobile",
      "D: Amazon Elastic Compute Cloud (Amazon EC2)"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Route 53",
      "Storage"
    ]
  },
  {
    "q": "What exclusive benefit is provided to users with Enterprise Support?",
    "opts": [
      "A: Access to a Technical Project Manager",
      "B: Access to a Technical Account Manager",
      "C: Access to a Cloud Support Engineer",
      "D: Access to a Solutions Architect"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    "opts": [
      "A: Deploy applications across multiple Availability Zones within an AWS Region.",
      "B: Use a hybrid cloud computing deployment model within the geographic area.",
      "C: Deploy applications across multiple AWS Regions.",
      "D: Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
    "opts": [
      "A: It provides on-demand resources for peak usage.",
      "B: It automates the provisioning of individual developer environments.",
      "C: It automates customer relationship management.",
      "D: It implements a fixed monthly computing budget."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future.   Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
    "opts": [
      "A: Elasticity",
      "B: Reliability",
      "C: Performance",
      "D: Agility"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
    "opts": [
      "A: Business and Developer Support",
      "B: Business and Basic Support",
      "C: Enterprise and Developer Support",
      "D: Enterprise and Business Support"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)",
    "opts": [
      "A: AWS WAF",
      "B: Amazon DynamoDB",
      "C: Amazon EC2",
      "D: Amazon CloudFront",
      "E: Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "CloudFront",
      "DynamoDB",
      "Security"
    ]
  },
  {
    "q": "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)",
    "opts": [
      "A: Compute costs",
      "B: Facilities costs",
      "C: Storage costs",
      "D: Data transfer costs",
      "E: Network infrastructure costs",
      "F: Hardware lifecycle costs"
    ],
    "a": 0,
    "correct": [
      0,
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
    "opts": [
      "A: Amazon Rekognition",
      "B: AWS Trusted Advisor",
      "C: Amazon GuardDuty",
      "D: Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Security",
      "AI / ML",
      "Support"
    ]
  },
  {
    "q": "A company wants to try a third-party ecommerce solution before deciding to use it long term.   Which AWS service or tool will support this effort?",
    "opts": [
      "A: AWS Marketplace",
      "B: AWS Partner Network (APN)",
      "C: AWS Managed Services",
      "D: AWS Service Catalog"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service is a managed NoSQL database?",
    "opts": [
      "A: Amazon Redshift",
      "B: Amazon DynamoDB",
      "C: Amazon Aurora",
      "D: Amazon RDS for MariaDB"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service should be used to create a billing alarm?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS CloudTrail",
      "C: Amazon CloudWatch",
      "D: Amazon QuickSight"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Billing & Cost",
      "Analytics",
      "Support"
    ]
  },
  {
    "q": "A company is hosting a web application in a Docker container on Amazon EC2.   AWS is responsible for which of the following tasks?",
    "opts": [
      "A: Scaling the web application and services developed with Docker",
      "B: Provisioning or scheduling containers to run on clusters and maintain their availability",
      "C: Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
      "D: Managing the guest operating system, including updates and security patches"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "ECS / Fargate"
    ]
  },
  {
    "q": "Users are reporting latency when connecting to a website with a global customer base.   Which AWS service will improve the customer experience by reducing latency?",
    "opts": [
      "A: Amazon CloudFront",
      "B: AWS Direct Connect",
      "C: Amazon EC2 Auto Scaling",
      "D: AWS Transit Gateway"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudFront",
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which actions represent best practices for using AWS IAM? (Choose two.)",
    "opts": [
      "A: Configure a strong password policy",
      "B: Share the security credentials among users of AWS accounts who are in the same Region",
      "C: Use access keys to log in to the AWS Management Console",
      "D: Rotate access keys on a regular basis",
      "E: Avoid using IAM roles to delegate permissions"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
    "opts": [
      "A: AWS Config",
      "B: VPC Flow Logs",
      "C: AWS Trusted Advisor",
      "D: AWS CloudTrail"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Support"
    ]
  },
  {
    "q": "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability.   Which service will support these requirements?",
    "opts": [
      "A: Amazon Inspector",
      "B: Amazon CloudWatch",
      "C: AWS Global Accelerator",
      "D: Amazon CloudFront"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "CloudWatch",
      "Security",
      "Networking"
    ]
  },
  {
    "q": "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Use AWS Config to generate an inventory of AWS resources",
      "B: Use service limits to prevent users from creating or making changes to AWS resources",
      "C: Use AWS CloudTrail to record AWS API calls into an auditable log file",
      "D: Use AWS Certificate Manager to whitelist approved AWS resources and services",
      "E: Use Amazon GuardDuty to validate configuration changes made to AWS resources"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Security",
      "Well-Architected"
    ]
  },
  {
    "q": "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
    "opts": [
      "A: Amazon CloudWatch",
      "B: AWS Config",
      "C: AWS Trusted Advisor",
      "D: AWS IAM"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "IAM",
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "Which design principle should be considered when architecting in the AWS Cloud?",
    "opts": [
      "A: Think of servers as non-disposable resources",
      "B: Use synchronous integration of services",
      "C: Design loosely coupled components",
      "D: Implement the least permissive rules for security groups"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC"
    ]
  },
  {
    "q": "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
    "opts": [
      "A: AWS Snowball",
      "B: AWS Lambda",
      "C: AWS ElastiCache",
      "D: AWS Database Migration Service (AWS DMS)",
      "E: Amazon API Gateway"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "Storage"
    ]
  },
  {
    "q": "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional.   What is the best cloud architecture to address this consistently growing demand?",
    "opts": [
      "A: Run the application on a bigger EC2 instance size.",
      "B: Switch to an EC2 instance family that better matches batch requirements.",
      "C: Distribute the application across multiple EC2 instances and run the workload in parallel.",
      "D: Run the application on a bare metal EC2 instance."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments.   How can this be achieved using AWS services or features?",
    "opts": [
      "A: Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
      "B: Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
      "C: Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
      "D: Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost"
    ]
  },
  {
    "q": "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
    "opts": [
      "A: Economy of scale",
      "B: Elasticity",
      "C: High availability",
      "D: Agility"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays.   Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
    "opts": [
      "A: AWS CloudTrail",
      "B: Amazon EC2 Auto Scaling",
      "C: Amazon Forecast",
      "D: AWS Config"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS service enables users to securely connect to AWS resources over the public internet?",
    "opts": [
      "A: Amazon VPC peering",
      "B: AWS Direct Connect",
      "C: AWS VPN",
      "D: Amazon Pinpoint"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which tool is used to forecast AWS spending?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Organizations",
      "C: Cost Explorer",
      "D: Amazon Inspector"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ]
  },
  {
    "q": "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users.   Which AWS service will support these requirements?",
    "opts": [
      "A: Amazon ElastiCache",
      "B: Amazon CloudFront",
      "C: Amazon Elastic File System (Amazon EFS)",
      "D: Amazon Elastic Block Store (Amazon EBS)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Storage"
    ]
  },
  {
    "q": "Which of the following is a component of the AWS Global Infrastructure?",
    "opts": [
      "A: Amazon Alexa",
      "B: AWS Regions",
      "C: Amazon Lightsail",
      "D: AWS Organizations"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
    "opts": [
      "A: Amazon CloudWatch",
      "B: AWS Config",
      "C: AWS CloudTrail",
      "D: Amazon Inspector"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "CloudWatch",
      "Security"
    ]
  },
  {
    "q": "Why is it beneficial to use Elastic Load Balancers with applications?",
    "opts": [
      "A: They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
      "B: They are capable of handling constant changes in network traffic patterns.",
      "C: They automatically adjust capacity.",
      "D: They are provided at no charge to users."
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
    "opts": [
      "A: Infrastructure facilities access management",
      "B: Cloud infrastructure hardware lifecycle management",
      "C: Configuration management of user's applications",
      "D: Networking infrastructure protection",
      "E: Security groups configuration"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components.   This is an example of which principle of cloud architecture design?",
    "opts": [
      "A: Scalability",
      "B: Loose coupling",
      "C: Automation",
      "D: Automatic scaling"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
    "opts": [
      "A: AWS WAF",
      "B: AWS Trusted Advisor",
      "C: AWS Direct Connect",
      "D: AWS Organizations",
      "E: Network ACLs"
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Security",
      "Networking",
      "Support"
    ]
  },
  {
    "q": "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously.   Which AWS storage service should be used?",
    "opts": [
      "A: Amazon EBS",
      "B: Amazon EFS",
      "C: Amazon S3",
      "D: AWS Artifact"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS.   Which security measures fall under the responsibility of AWS? (Choose two.)",
    "opts": [
      "A: Running a virus scan on EC2 instances",
      "B: Protecting against IP spoofing and packet sniffing",
      "C: Installing the latest security patches on the RDS instance",
      "D: Encrypting communication between the EC2 instances and the Elastic Load Balancer",
      "E: Configuring a security group and a network access control list (NACL) for EC2"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS",
      "VPC"
    ]
  },
  {
    "q": "What is the benefit of elasticity in the AWS Cloud?",
    "opts": [
      "A: Ensure web traffic is automatically spread across multiple AWS Regions.",
      "B: Minimize storage costs by automatically archiving log data.",
      "C: Enable AWS to automatically select the most cost-effective services.",
      "D: Automatically adjust the required compute capacity to maintain consistent performance."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "The continual reduction of AWS Cloud pricing is due to:",
    "opts": [
      "A: pay-as-you go pricing",
      "B: the AWS global infrastructure",
      "C: economies of scale",
      "D: reserved storage pricing"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements.   How can this be accomplished?",
    "opts": [
      "A: Enable S3 Block Public Access from the AWS Management Console.",
      "B: Hold a team meeting to discuss the importance if only uploading private S3 objects.",
      "C: Require all S3 objects to be manually approved before uploading.",
      "D: Create a service to monitor all S3 uploads and remove any public uploads."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3"
    ]
  },
  {
    "q": "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console.   Which action can be taken to resolve this?",
    "opts": [
      "A: Open a detailed case related to billing and submit it to AWS Support for help.",
      "B: Upload data describing the issue to a new object in a private Amazon S3 bucket.",
      "C: Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
      "D: Proceed with creating a new dashboard in Amazon QuickSight."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Billing & Cost",
      "Analytics"
    ]
  },
  {
    "q": "What does the AWS Simple Monthly Calculator do?",
    "opts": [
      "A: Compares on-premises costs to colocation environments",
      "B: Estimates monthly billing based on projected usage",
      "C: Estimates power consumption at existing data centers",
      "D: Estimates CPU utilization"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Who is responsible for patching the guest operating system for Amazon RDS?",
    "opts": [
      "A: The AWS Product team",
      "B: The customer Database Administrator",
      "C: Managed partners",
      "D: AWS Support"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS"
    ]
  },
  {
    "q": "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
    "opts": [
      "A: Amazon EC2",
      "B: Amazon DynamoDB",
      "C: Amazon S3",
      "D: Amazon Route 53",
      "E: Amazon Redshift"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "Route 53",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
    "opts": [
      "A: Reduced cost to run services on AWS",
      "B: Improved availability of applications deployed on AWS",
      "C: Higher durability of data stored on AWS",
      "D: Decreased latency to reach applications deployed on AWS",
      "E: Higher security of data stored on AWS"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Networking"
    ]
  },
  {
    "q": "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
    "opts": [
      "A: the AWS Support forum",
      "B: AWS Abuse",
      "C: an AWS Solutions Architect",
      "D: AWS Support"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
    "opts": [
      "A: Provision capacity based on past usage and theoretical peaks",
      "B: Dynamically and predictively scale to meet usage demands",
      "C: Build the application and infrastructure in a data center that grants physical access",
      "D: Break apart the application into loosely coupled components"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which method helps to optimize costs of users moving to the AWS Cloud?",
    "opts": [
      "A: Paying only for what is used",
      "B: Purchasing hardware before it is needed",
      "C: Manually provisioning cloud resources",
      "D: Purchasing for the maximum possible load"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
    "opts": [
      "A: Installing security patches for the Xen and KVM hypervisors",
      "B: Installing operating system patches for Amazon DynamoDB",
      "C: Installing operating system security patches for Amazon EC2 database instances",
      "D: Installing operating system security patches for Amazon RDS database instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "DynamoDB",
      "Shared Responsibility"
    ]
  },
  {
    "q": "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
    "opts": [
      "A: Terminate all AWS resources automatically if budget thresholds are exceeded.",
      "B: Break down AWS costs by day, service, and linked AWS account.",
      "C: Create budgets and receive notifications if current of forecasted usage exceeds the budgets.",
      "D: Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.",
      "E: Move data stored in Amazon S3 to a more cost-effective storage class."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "S3",
      "Billing & Cost"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
    "opts": [
      "A: AWS Support",
      "B: the customer",
      "C: AWS Systems Manager",
      "D: AWS Config"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
    "opts": [
      "A: AWS Direct Connect",
      "B: Amazon Connect",
      "C: AWS Identity and Access Management (IAM)",
      "D: AWS Firewall Manager"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service provides on-demand of AWS security and compliance documentation?",
    "opts": [
      "A: AWS Directory Service",
      "B: AWS Artifact",
      "C: AWS Trusted Advisor",
      "D: Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which AWS service can be used to turn text into life-like speech?",
    "opts": [
      "A: Amazon Polly",
      "B: Amazon Transcribe",
      "C: Amazon Rekognition",
      "D: Amazon Lex"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
    "opts": [
      "A: Design using a serverless architecture",
      "B: Assume that all components within an application can fail",
      "C: Design AWS Auto Scaling into every application",
      "D: Design all components using open-source code"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda"
    ]
  },
  {
    "q": "A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:       (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.)   Where can all this information be found in one location?",
    "opts": [
      "A: Amazon QuickSight dashboard",
      "B: AWS CloudTrail trails",
      "C: AWS Trusted Advisor report",
      "D: IAM credential report"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Analytics",
      "Support"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
    "opts": [
      "A: Dedicated Hosts",
      "B: On-Demand Instances",
      "C: Spot Instances",
      "D: Reserved Instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
    "opts": [
      "A: AWS Regions",
      "B: Availability Zones",
      "C: Edge locations",
      "D: Data centers"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "CloudFront"
    ]
  },
  {
    "q": "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    "opts": [
      "A: Security",
      "B: Operational excellence",
      "C: Performance efficiency",
      "D: Cost optimization"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production.   How can this be achieved?",
    "opts": [
      "A: Use multiple AWS accounts",
      "B: Use resource tagging",
      "C: Use multiple VPCs",
      "D: Use Cost Explorer"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service can be used in the application deployment process?",
    "opts": [
      "A: AWS AppSync",
      "B: AWS Batch",
      "C: AWS CodePipeline",
      "D: AWS DataSync"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
    "opts": [
      "A: Spot Instances for stateless and flexible workloads",
      "B: Memory optimized instances for high-compute workloads",
      "C: On-Demand Instances for high-cost and sustained workloads",
      "D: Reserved Instances for sustained workloads",
      "E: Spend limits set using AWS Budgets"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements.   Which AWS service provides on-demand access to these items?",
    "opts": [
      "A: AWS Certificate Manager",
      "B: AWS Config",
      "C: AWS Artifact",
      "D: AWS CloudTrail"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service or feature allows the user to manage cross-region application traffic?",
    "opts": [
      "A: Amazon AppStream 2.0",
      "B: Amazon VPC",
      "C: Elastic Load Balancer",
      "D: Amazon Route 53"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "VPC",
      "Route 53"
    ]
  },
  {
    "q": "Which AWS service can be used to track unauthorized API calls?",
    "opts": [
      "A: AWS Config",
      "B: AWS CloudTrail",
      "C: AWS Trusted Advisor",
      "D: Amazon Inspector"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes.   Which AWS service can be used to meet these requirements?",
    "opts": [
      "A: AWS Trusted Advisor",
      "B: AWS Config",
      "C: AWS Resource Access Manager",
      "D: AWS Systems Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A user is planning to launch two additional Amazon EC2 instances to increase availability.   Which action should the user take?",
    "opts": [
      "A: Launch the instances across multiple Availability Zones in a single AWS Region.",
      "B: Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "C: Launch the instances in multiple AWS Regions, but in the same Availability Zone.",
      "D: Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A company must store critical business data in Amazon S3 with a backup to another AWS Region.   How can this be achieved?",
    "opts": [
      "A: Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally",
      "B: Set up Amazon S3 cross-region replication to another AWS Region",
      "C: Configure the AWS Backup service to back up to the data to another AWS Region",
      "D: Take Amazon S3 bucket snapshots and copy that data to another AWS Region"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "CloudFront"
    ]
  },
  {
    "q": "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
    "opts": [
      "A: AWS Budgets",
      "B: AWS Cost Explorer",
      "C: AWS Cost Allocation Tags",
      "D: AWS Organizations"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "What is the recommended method to request penetration testing on AWS resources?",
    "opts": [
      "A: Open a support case",
      "B: Fill out the Penetration Testing Request Form",
      "C: Request a penetration test from your technical account manager",
      "D: Contact your AWS sales representative"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3.   Which AWS service can meet these requirements?",
    "opts": [
      "A: Amazon Inspector",
      "B: Amazon Macie",
      "C: Amazon GuardDuty",
      "D: AWS Secrets Manager"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "S3",
      "Security"
    ]
  },
  {
    "q": "Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)",
    "opts": [
      "A: Internet gateway",
      "B: NAT gateway",
      "C: Customer gateway",
      "D: Transit gateway",
      "E: Virtual private gateway"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?",
    "opts": [
      "A: Spot Instances",
      "B: Dedicated Hosts",
      "C: On-Demand Instances",
      "D: Reserved Instances"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS cloud architecture principle states that systems should reduce interdependencies?",
    "opts": [
      "A: Scalability",
      "B: Services, not servers",
      "C: Removing single points of failure",
      "D: Loose coupling"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What is the MOST effective resource for staying up to date on AWS security announcements?",
    "opts": [
      "A: AWS Personal Health Dashboard",
      "B: AWS Secrets Manager",
      "C: AWS Security Bulletins",
      "D: Amazon Inspector"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security",
      "Support"
    ]
  },
  {
    "q": "Which AWS service offers persistent storage for a file system?",
    "opts": [
      "A: Amazon S3",
      "B: Amazon EC2 instance store",
      "C: Amazon Elastic Block Store (Amazon EBS)",
      "D: Amazon ElastiCache"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which of the following allows AWS users to manage cost allocations for billing?",
    "opts": [
      "A: Tagging resources",
      "B: Limiting who can create resources",
      "C: Adding a secondary payment method",
      "D: Running all operations on a single AWS account"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    "opts": [
      "A: Amazon GuardDuty",
      "B: AWS Security Hub",
      "C: AWS Artifact",
      "D: AWS Shield"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Security"
    ]
  },
  {
    "q": "Which of the following AWS services are serverless? (Choose two.)",
    "opts": [
      "A: AWS Lambda",
      "B: Amazon Elasticsearch Service",
      "C: AWS Elastic Beanstalk",
      "D: Amazon DynamoDB",
      "E: Amazon Redshift"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Lambda",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)",
    "opts": [
      "A: AWS VPN",
      "B: NAT gateway",
      "C: AWS Direct Connect",
      "D: Amazon Connect",
      "E: Amazon Route 53"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Route 53",
      "Networking"
    ]
  },
  {
    "q": "Which requirement must be met for a member account to be unlinked from an AWS Organizations account?",
    "opts": [
      "A: The linked account must be actively compliant with AWS System and Organization Controls (SOC).",
      "B: The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.",
      "C: The member account must meet the requirements of a standalone account.",
      "D: The payer account must be used to remove the linked account from the organization."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What AWS benefit refers to a customer's ability to deploy applications that scale up and down the meet variable demand?",
    "opts": [
      "A: Elasticity",
      "B: Agility",
      "C: Security",
      "D: Scalability"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report.   Which service should be used to submit this request?",
    "opts": [
      "A: AWS Personal Health Dashboard",
      "B: AWS Trusted Advisor",
      "C: AWS Artifact",
      "D: Amazon S3"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption.   Which configuration will meet these requirements?",
    "opts": [
      "A: Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.",
      "B: Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.",
      "C: Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.",
      "D: Run across two AWS Regions, using a third AWS Region for the disaster recovery site."
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A company has a 500 TB image repository that needs to be transported to AWS for processing.   Which AWS service can import this data MOST cost-effectively?",
    "opts": [
      "A: AWS Snowball",
      "B: AWS Direct Connect",
      "C: AWS VPN",
      "D: Amazon S3"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Storage",
      "Networking"
    ]
  },
  {
    "q": "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
    "opts": [
      "A: Amazon DynamoDB",
      "B: Amazon Athena",
      "C: Amazon RDS",
      "D: Amazon EMR"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which of the following assist in identifying costs by department? (Choose two.)",
    "opts": [
      "A: Using tags on resources",
      "B: Using multiple AWS accounts",
      "C: Using an account manager",
      "D: Using AWS Trusted Advisor",
      "E: Using Consolidated Billing"
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Billing & Cost",
      "Support"
    ]
  },
  {
    "q": "A company wants to allow full access to an Amazon S3 bucket for a particular user.   Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?",
    "opts": [
      "A: Principal",
      "B: Action",
      "C: Resource",
      "D: Statement"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM"
    ]
  },
  {
    "q": "Which AWS service allows for effective cost management of multiple AWS accounts?",
    "opts": [
      "A: AWS Organizations",
      "B: AWS Trusted Advisor",
      "C: AWS Direct Connect",
      "D: Amazon Connect"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Networking",
      "Support"
    ]
  },
  {
    "q": "A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month.   What pricing model is appropriate?",
    "opts": [
      "A: Reserved Instances",
      "B: Spot Instances",
      "C: On-Demand Instances",
      "D: Dedicated Hosts"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which AWS tools automatically forecast future AWS costs?",
    "opts": [
      "A: AWS Support Center",
      "B: AWS Total Cost of Ownership (TCO) Calculator",
      "C: AWS Simple Monthly Calculator",
      "D: Cost Explorer"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
    "opts": [
      "A: Enabling server-side encryption for objects stored in S3",
      "B: Applying AWS IAM security policies",
      "C: Patching the operating system on an Amazon EC2 instance",
      "D: Applying updates to the hypervisor"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "IAM",
      "Security",
      "Shared Responsibility"
    ]
  },
  {
    "q": "A user is able to set up a master payer account to view consolidated billing reports through:",
    "opts": [
      "A: AWS Budgets.",
      "B: Amazon Macie.",
      "C: Amazon QuickSight.",
      "D: AWS Organizations."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "Security",
      "Analytics"
    ]
  },
  {
    "q": "Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?",
    "opts": [
      "A: Performance efficiency",
      "B: Operational excellence",
      "C: Reliability",
      "D: Security"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
    "opts": [
      "A: Vertical scaling",
      "B: Manual failure recovery",
      "C: Testing recovery procedures",
      "D: Changing infrastructure manually"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Well-Architected"
    ]
  },
  {
    "q": "What is a characteristic of Convertible Reserved Instances (RIs)?",
    "opts": [
      "A: Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.",
      "B: Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.",
      "C: Users can sell and buy Convertible RIs on the AWS Marketplace.",
      "D: Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost"
    ]
  },
  {
    "q": "The user is fully responsible for which action when running workloads on AWS?",
    "opts": [
      "A: Patching the infrastructure components",
      "B: Implementing controls to route application traffic",
      "C: Maintaining physical and environmental controls",
      "D: Maintaining the underlying infrastructure components"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS.   What is the BEST way to get a monthly cost estimation for this architecture?",
    "opts": [
      "A: Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.",
      "B: Collect the published prices of the AWS services and calculate the monthly estimate.",
      "C: Use the AWS Simple Monthly Calculator to estimate the monthly cost.",
      "D: Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)",
    "opts": [
      "A: Automated backups",
      "B: Schema management",
      "C: Indexing of tables",
      "D: Software patching",
      "E: Extract, transform, and load (ETL) management"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "What does the Amazon S3 Intelligent-Tiering storage class offer?",
    "opts": [
      "A: Payment flexibility by reserving storage capacity",
      "B: Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
      "C: Automatic cost savings by moving objects between tiers based on access pattern changes",
      "D: Secure, durable, and lowest cost storage for data archival"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage",
      "AI / ML"
    ]
  },
  {
    "q": "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse.   Which AWS service can be used to meet this requirement?",
    "opts": [
      "A: Amazon DynamoDB",
      "B: Amazon Redshift",
      "C: Amazon Athena",
      "D: Amazon QuickSight"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "DynamoDB",
      "Analytics"
    ]
  },
  {
    "q": "Which AWS service can be used to track resource changes and establish compliance?",
    "opts": [
      "A: Amazon CloudWatch",
      "B: AWS Config",
      "C: AWS CloudTrail",
      "D: AWS Trusted Advisor"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudWatch",
      "Support"
    ]
  },
  {
    "q": "A user has underutilized on-premises resources.   Which AWS Cloud concept can BEST address this issue?",
    "opts": [
      "A: High availability",
      "B: Elasticity",
      "C: Security",
      "D: Loose coupling"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "A user has a stateful workload that will run on Amazon EC2 for the next 3 years.   What is the MOST cost-effective pricing model for this workload?",
    "opts": [
      "A: On-Demand Instances",
      "B: Reserved Instances",
      "C: Dedicated Instances",
      "D: Spot Instances"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions.   What is the most suitable and cost-effective option for this task?",
    "opts": [
      "A: On-Demand Instance",
      "B: Reserved Instance",
      "C: Dedicated Host",
      "D: Spot Instance"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    "opts": [
      "A: Providing high-performance container orchestration",
      "B: Creating and rotating encryption keys",
      "C: Detecting underutilized resources to save costs",
      "D: Improving security by proactively monitoring the AWS environment",
      "E: Implementing enforced tagging across AWS resources"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "CloudWatch",
      "ECS / Fargate",
      "Security",
      "Support"
    ]
  },
  {
    "q": "A developer has been hired by a large company and needs AWS credentials.   Which are security best practices that should be followed? (Choose two.)",
    "opts": [
      "A: Grant the developer access to only the AWS resources needed to perform the job.",
      "B: Share the AWS account root user credentials with the developer.",
      "C: Add the developer to the administrator's group in AWS IAM.",
      "D: Configure a password policy that ensures the developer's password cannot be changed.",
      "E: Ensure the account password policy requires a minimum length."
    ],
    "a": 0,
    "correct": [
      0,
      4
    ],
    "multi": true,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
    "opts": [
      "A: AWS Storage Gateway",
      "B: Amazon S3 Glacier Deep Archive",
      "C: Amazon Lightsail",
      "D: AWS Snowball"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "S3",
      "Storage"
    ]
  },
  {
    "q": "Which service provides a user the ability to warehouse data in the AWS Cloud?",
    "opts": [
      "A: Amazon EFS",
      "B: Amazon Redshift",
      "C: Amazon RDS",
      "D: Amazon VPC"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "RDS",
      "VPC",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "How do customers benefit from Amazon's massive economies of scale?",
    "opts": [
      "A: Periodic price reductions as the result of Amazon's operational efficiencies",
      "B: New Amazon EC2 instance types providing the latest hardware",
      "C: The ability to scale up and down when needed",
      "D: Increased reliability in the underlying hardware of Amazon EC2 instances"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS services can be used to gather information about AWS account activity? (Select TWO.)",
    "opts": [
      "A: Amazon CloudFront",
      "B: AWS Cloud9",
      "C: AWS CloudTrail",
      "D: AWS CloudHSM",
      "E: Amazon CloudWatch"
    ],
    "a": 2,
    "correct": [
      2,
      4
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "CloudWatch"
    ]
  },
  {
    "q": "Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)",
    "opts": [
      "A: Patching databases software",
      "B: Testing application releases",
      "C: Backing up databases",
      "D: Creating database schema",
      "E: Running penetration tests"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "In which scenario should Amazon EC2 Spot Instances be used?",
    "opts": [
      "A: A company wants to move its main website to AWS from an on-premises web server.",
      "B: A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "C: A company's heavily used legacy database is currently running on-premises.",
      "D: A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost",
      "Storage"
    ]
  },
  {
    "q": "Which AWS feature should a customer leverage to achieve high availability of an application?",
    "opts": [
      "A: AWS Direct Connect",
      "B: Availability Zones",
      "C: Data centers",
      "D: Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "VPC",
      "Networking"
    ]
  },
  {
    "q": "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    "opts": [
      "A: Enterprise",
      "B: Business",
      "C: Developer",
      "D: Basic"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which AWS service can serve a static website?",
    "opts": [
      "A: Amazon S3",
      "B: Amazon Route 53",
      "C: Amazon QuickSight",
      "D: AWS X-Ray"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "S3",
      "Route 53",
      "Storage",
      "Analytics"
    ]
  },
  {
    "q": "How does AWS shorten the time to provision IT resources?",
    "opts": [
      "A: It supplies an online IT ticketing platform for resource requests.",
      "B: It supports automatic code validation services.",
      "C: It provides the ability to programmatically provision existing resources.",
      "D: It automates the resource request process from a company's IT vendor list."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "What can AWS edge locations be used for? (Select TWO.)",
    "opts": [
      "A: Hosting applications",
      "B: Delivering content closer to users",
      "C: Running NoSQL database caching services",
      "D: Reducing traffic on the server by caching responses",
      "E: Sending notification messages to end users"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "DynamoDB"
    ]
  },
  {
    "q": "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    "opts": [
      "A: A public and private key-pair",
      "B: Amazon Inspector",
      "C: AWS Identity and Access Management (IAM) policies",
      "D: Security Groups"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "S3",
      "IAM",
      "VPC",
      "Security"
    ]
  },
  {
    "q": "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    "opts": [
      "A: Think parallel",
      "B: Implement elasticity",
      "C: Decouple your components",
      "D: Design for failure"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following tasks is the responsibility of AWS?",
    "opts": [
      "A: Encrypting client-side data",
      "B: Configuring AWS Identity and Access Management (IAM) roles",
      "C: Securing the Amazon EC2 hypervisor",
      "D: Setting user password policies"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM"
    ]
  },
  {
    "q": "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    "opts": [
      "A: the ability to bid for a lower hourly cost.",
      "B: paying a daily rate regardless of time used.",
      "C: paying only for time used.",
      "D: pre-paying for instances and paying a lower hourly rate."
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "An administrator needs to rapidly deploy a popular IT solution and start using it immediately.   Where can the administrator find assistance?",
    "opts": [
      "A: AWS Well-Architected Framework documentation",
      "B: Amazon CloudFront",
      "C: AWS CodeCommit",
      "D: AWS Quick Start reference deployments"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Well-Architected"
    ]
  },
  {
    "q": "Which of the following services is in the category of AWS serverless platform?",
    "opts": [
      "A: Amazon EMR",
      "B: Elastic Load Balancing",
      "C: AWS Lambda",
      "D: AWS Mobile Hub"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "Analytics"
    ]
  },
  {
    "q": "Which services are parts of the AWS serverless platform?",
    "opts": [
      "A: Amazon EC2, Amazon S3, Amazon Athena",
      "B: Amazon Kinesis, Amazon SQS, Amazon EMR",
      "C: AWS Step Functions, Amazon DynamoDB, Amazon SNS",
      "D: Amazon Athena, Amazon Cognito, Amazon EC2"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "Lambda",
      "DynamoDB",
      "SNS",
      "SQS",
      "Security",
      "Analytics"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    "opts": [
      "A: Physical controls",
      "B: Patch management",
      "C: Zone security",
      "D: Data center auditing"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "What can AWS edge locations be used for? (Select TWO.)",
    "opts": [
      "A: Hosting applications",
      "B: Delivering content closer to users",
      "C: Running NoSQL database caching services",
      "D: Reducing traffic on the server by caching responses",
      "E: Sending notification messages to end users"
    ],
    "a": 1,
    "correct": [
      1,
      3
    ],
    "multi": true,
    "tags": [
      "CloudFront",
      "DynamoDB"
    ]
  },
  {
    "q": "What technology enables compute capacity to adjust as loads change?",
    "opts": [
      "A: Load balancing",
      "B: Automatic failover",
      "C: Round robin",
      "D: Auto Scaling"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "Which AWS services are defined as global instead of regional? (Select TWO.)",
    "opts": [
      "A: Amazon Route 53",
      "B: Amazon EC2",
      "C: Amazon S3",
      "D: Amazon CloudFront",
      "E: Amazon DynamoDB"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "EC2",
      "S3",
      "CloudFront",
      "Route 53",
      "DynamoDB"
    ]
  },
  {
    "q": "Which AWS service would you use to obtain compliance reports and certificates?",
    "opts": [
      "A: AWS Artifact",
      "B: AWS Lambda",
      "C: Amazon Inspector",
      "D: AWS Certificate Manager"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Lambda",
      "Security"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
    "opts": [
      "A: Ensuring that application data is encrypted at rest",
      "B: Ensuring that AWS NTP servers are set to the correct time",
      "C: Ensuring that users have received security training in the use of AWS services",
      "D: Ensuring that access to data centers is restricted",
      "E: Ensuring that hardware is disposed of properly"
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service can be used to manually launch instances based on resource requirements?",
    "opts": [
      "A: Amazon EBS",
      "B: Amazon S3",
      "C: Amazon EC2",
      "D: Amazon ECS"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "EC2",
      "S3",
      "ECS / Fargate",
      "Storage"
    ]
  },
  {
    "q": "A company is migrating an application that is running non-interruptible workloads for a three-year time frame.   Which pricing construct would provide the MOST cost-effective solution?",
    "opts": [
      "A: Amazon EC2 Spot Instances",
      "B: Amazon EC2 Dedicated Instances",
      "C: Amazon EC2 On-Demand Instances",
      "D: Amazon EC2 Reserved Instances"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Billing & Cost"
    ]
  },
  {
    "q": "The financial benefits of using AWS are: (Select TWO.)",
    "opts": [
      "A: reduced Total Cost of Ownership (TCO).",
      "B: increased capital expenditure (capex).",
      "C: reduced operational expenditure (opex).",
      "D: deferred payment plans for startups.",
      "E: business credit lines for stratups."
    ],
    "a": 0,
    "correct": [
      0,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
    "opts": [
      "A: Patching of the guest operating system",
      "B: Security awareness and training",
      "C: Physical and environmental controls",
      "D: Development of an IAM password policy"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    "opts": [
      "A: AWS VPN",
      "B: Amazon Redshift",
      "C: API Gateway",
      "D: Amazon Direct Connect"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "VPC",
      "Analytics",
      "Networking"
    ]
  },
  {
    "q": "A company wants to reduce the physical compute footprint that developers use to run code.   Which service would meet that need by enabling serverless architectures?",
    "opts": [
      "A: Amazon Elastic Compute Cloud (Amazon EC2)",
      "B: AWS Lambda",
      "C: Amazon DynamoDB",
      "D: AWS CodeCommit"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "EC2",
      "Lambda",
      "DynamoDB"
    ]
  },
  {
    "q": "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
    "opts": [
      "A: AWS Personal Health Dashboard",
      "B: AWS Service Health Dashboard",
      "C: AWS Trusted Advisor",
      "D: AWS Infrastructure Event Management"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following are categories of AWS Trusted Advisor? (Select TWO.)",
    "opts": [
      "A: Fault Tolerance",
      "B: Instance Usage",
      "C: Infrastructure",
      "D: Performance",
      "E: Storage Capacity"
    ],
    "a": 0,
    "correct": [
      0,
      3
    ],
    "multi": true,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?    - A. Amazon RDS",
    "opts": [
      "B: Amazon EC2",
      "C: Amazon ElastiCache",
      "D: AWS Fargate"
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "RDS",
      "ECS / Fargate"
    ]
  },
  {
    "q": "A company will be moving from an on-premises data center to the AWS Cloud.   What would be one financial difference after the move?",
    "opts": [
      "A: Moving from variable operational expense (opex) to upfront capital expense (capex).",
      "B: Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "C: Moving from upfront capital expense (capex) to variable operational expense (opex).",
      "D: Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "How should a customer forecast the future costs for running a new web application?",
    "opts": [
      "A: Amazon Aurora Backtrack",
      "B: Amazon CloudWatch Billing Alarms",
      "C: AWS Simple Monthly Calculator",
      "D: AWS Cost and Usage report"
    ],
    "a": 2,
    "correct": [
      2
    ],
    "multi": false,
    "tags": [
      "RDS",
      "CloudWatch",
      "Billing & Cost"
    ]
  },
  {
    "q": "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    "opts": [
      "A: Enterprise",
      "B: Business",
      "C: Developer",
      "D: Basic"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "Support"
    ]
  },
  {
    "q": "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
    "opts": [
      "A: Application security",
      "B: Edge location management",
      "C: Patch management",
      "D: Client-side data"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "CloudFront",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
    "opts": [
      "A: Multi-factor authentication",
      "B: Groups",
      "C: Password policies",
      "D: Access keys"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM"
    ]
  },
  {
    "q": "Which of the following are benefits of the AWS Cloud? (Choose two.)",
    "opts": [
      "A: Unlimited uptime",
      "B: Elasticity",
      "C: Agility",
      "D: Colocation",
      "E: Capital expenses"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
    "opts": [
      "A: Amazon Connect",
      "B: AWS Directory Service",
      "C: Amazon Pinpoint",
      "D: Amazon Rekognition"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "AI / ML"
    ]
  },
  {
    "q": "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
    "opts": [
      "A: AWS Direct Connects",
      "B: Amazon VPCs",
      "C: Edge locations",
      "D: Availability Zones"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "VPC",
      "CloudFront",
      "Networking"
    ]
  },
  {
    "q": "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
    "opts": [
      "A: It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.",
      "B: AWS is responsible for the maintenance of common compliance framework documentation.",
      "C: It assures customers that AWS is maintaining physical security and data protection.",
      "D: It ensures the use of compliance frameworks that are being used by other cloud providers.",
      "E: It will adopt new compliance frameworks as they become relevant to customer workloads."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Which of the following services provides on-demand access to AWS compliance reports?",
    "opts": [
      "A: AWS IAM",
      "B: AWS Artifact",
      "C: Amazon GuardDuty",
      "D: AWS KMS"
    ],
    "a": 1,
    "correct": [
      1
    ],
    "multi": false,
    "tags": [
      "IAM",
      "Billing & Cost",
      "Security"
    ]
  },
  {
    "q": "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
    "opts": [
      "A: Security management of data center",
      "B: Patch management",
      "C: Configuration management",
      "D: User and access management"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Shared Responsibility"
    ]
  },
  {
    "q": "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
    "opts": [
      "A: Software development",
      "B: Project management",
      "C: Storage hardware",
      "D: Physical servers",
      "E: Antivirus software license"
    ],
    "a": 2,
    "correct": [
      2,
      3
    ],
    "multi": true,
    "tags": [
      "Altro"
    ]
  },
  {
    "q": "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
    "opts": [
      "A: Maintaining the underlying Amazon EC2 hardware.",
      "B: Managing the VPC network access control lists.",
      "C: Encrypting data in transit and at rest.",
      "D: Replacing failed hard disk drives.",
      "E: Deploying hardware in different Availability Zones."
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2",
      "VPC",
      "Shared Responsibility"
    ]
  },
  {
    "q": "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
    "opts": [
      "A: Scaling the number of Amazon EC2 instances based on traffic.",
      "B: Resizing Amazon RDS instances as business needs change.",
      "C: Automatically directing traffic to less-utilized Amazon EC2 instances.",
      "D: Using AWS compliance documents to accelerate the compliance process.",
      "E: Having the ability to create and govern environments using code."
    ],
    "a": 0,
    "correct": [
      0,
      1
    ],
    "multi": true,
    "tags": [
      "EC2",
      "RDS"
    ]
  },
  {
    "q": "When is it beneficial for a company to use a Spot Instance?",
    "opts": [
      "A: When there is flexibility in when an application needs to run.",
      "B: When there are mission-critical workloads.",
      "C: When dedicated capacity is needed.",
      "D: When an instance should not be stopped."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "Billing & Cost",
      "AI / ML"
    ]
  },
  {
    "q": "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
    "opts": [
      "A: Amazon EC2 instance availability",
      "B: Power consumption of the data center",
      "C: Labor costs to replace old servers",
      "D: Application developer time",
      "E: Database engine capacity"
    ],
    "a": 1,
    "correct": [
      1,
      2
    ],
    "multi": true,
    "tags": [
      "EC2"
    ]
  },
  {
    "q": "How does AWS charge for AWS Lambda?",
    "opts": [
      "A: Users bid on the maximum price they are willing to pay per hour.",
      "B: Users choose a 1-, 3- or 5-year upfront payment term.",
      "C: Users pay for the required permanent storage on a file system or in a database.",
      "D: Users pay based on the number of requests and consumed compute resources."
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Lambda"
    ]
  },
  {
    "q": "What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?",
    "opts": [
      "A: Act as a virtual firewall for the Amazon EC2 instance.",
      "B: Secure AWS user accounts with AWS identity and Access Management (IAM) policies.",
      "C: Provide DDoS protection with AWS Shield.",
      "D: Use Amazon CloudFront to protect the Amazon EC2 instance."
    ],
    "a": 0,
    "correct": [
      0
    ],
    "multi": false,
    "tags": [
      "EC2",
      "IAM",
      "VPC",
      "CloudFront",
      "Security"
    ]
  },
  {
    "q": "Which disaster recovery scenario offers the lowest probability of down time?",
    "opts": [
      "A: Backup and restore",
      "B: Pilot light",
      "C: Warm standby",
      "D: Multi-site active-active"
    ],
    "a": 3,
    "correct": [
      3
    ],
    "multi": false,
    "tags": [
      "Altro"
    ]
  }
];
