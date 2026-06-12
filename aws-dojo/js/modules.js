'use strict';
const MODULES = [
  { id: 'm01', icon: '☁️',  title: 'Cloud Fundamentals',         tags: ['Altro', 'Well-Architected'],                   cards: typeof MODULE01 !== 'undefined' ? MODULE01 : [] },
  { id: 'm02', icon: '🔐',  title: 'IAM & Shared Responsibility', tags: ['IAM', 'Shared Responsibility'],                cards: typeof MODULE02 !== 'undefined' ? MODULE02 : [] },
  { id: 'm03', icon: '💻',  title: 'EC2 & Compute',               tags: ['EC2'],                                         cards: typeof MODULE03 !== 'undefined' ? MODULE03 : [] },
  { id: 'm04', icon: '🗄️',  title: 'S3 & Storage',                tags: ['S3', 'Storage'],                               cards: typeof MODULE04 !== 'undefined' ? MODULE04 : [] },
  { id: 'm05', icon: '🌐',  title: 'VPC & Networking',            tags: ['VPC', 'Networking', 'Route 53', 'CloudFront'], cards: typeof MODULE05 !== 'undefined' ? MODULE05 : [] },
  { id: 'm06', icon: '🗃️',  title: 'Database',                    tags: ['RDS', 'DynamoDB'],                             cards: typeof MODULE06 !== 'undefined' ? MODULE06 : [] },
  { id: 'm07', icon: '⚡',  title: 'Serverless & Container',      tags: ['Lambda', 'ECS / Fargate', 'EKS'],              cards: typeof MODULE07 !== 'undefined' ? MODULE07 : [] },
  { id: 'm08', icon: '📨',  title: 'Messaging & Integration',     tags: ['SNS', 'SQS'],                                  cards: typeof MODULE08 !== 'undefined' ? MODULE08 : [] },
  { id: 'm09', icon: '📊',  title: 'Monitoring & Management',     tags: ['CloudWatch', 'CloudFormation', 'Support'],     cards: typeof MODULE09 !== 'undefined' ? MODULE09 : [] },
  { id: 'm10', icon: '🔒',  title: 'Security',                    tags: ['Security'],                                    cards: typeof MODULE10 !== 'undefined' ? MODULE10 : [] },
  { id: 'm11', icon: '📈',  title: 'Analytics & AI/ML',           tags: ['Analytics', 'AI / ML'],                        cards: typeof MODULE11 !== 'undefined' ? MODULE11 : [] },
  { id: 'm12', icon: '💰',  title: 'Billing & Pricing',           tags: ['Billing & Cost'],                              cards: typeof MODULE12 !== 'undefined' ? MODULE12 : [] },
];
