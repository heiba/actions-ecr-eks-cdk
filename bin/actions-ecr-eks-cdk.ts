#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ActionsEcrEksCdkStack } from '../lib/actions-ecr-eks-cdk-stack';

const app = new cdk.App();
new ActionsEcrEksCdkStack(app, 'ActionsEcrEksCdkStack');
