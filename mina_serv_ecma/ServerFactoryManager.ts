/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { PasswordAuthenticator } from './PasswordAuthenticator';
import { PublickeyAuthenticator } from './PublickeyAuthenticator';
import { CommandFactory } from './CommandFactory';

/**
 * Server factory manager for configuring SSH server components
 * 
 * @interface ServerFactoryManager
 */
export interface ServerFactoryManager {
  /**
   * Set the password authenticator
   *
   * @param authenticator - the password authenticator
   */
  setPasswordAuthenticator(authenticator: PasswordAuthenticator): void;

  /**
   * Get the password authenticator
   *
   * @returns the password authenticator or undefined
   */
  getPasswordAuthenticator(): PasswordAuthenticator | undefined;

  /**
   * Set the public key authenticator
   *
   * @param authenticator - the public key authenticator
   */
  setPublickeyAuthenticator(authenticator: PublickeyAuthenticator): void;

  /**
   * Get the public key authenticator
   *
   * @returns the public key authenticator or undefined
   */
  getPublickeyAuthenticator(): PublickeyAuthenticator | undefined;

  /**
   * Set the command factory
   *
   * @param factory - the command factory
   */
  setCommandFactory(factory: CommandFactory): void;

  /**
   * Get the command factory
   *
   * @returns the command factory or undefined
   */
  getCommandFactory(): CommandFactory | undefined;

  /**
   * Start the SSH server
   */
  start(): void;

  /**
   * Stop the SSH server
   */
  stop(): void;
}
