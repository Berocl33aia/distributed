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

import { Command } from './Command';
import { Environment } from './Environment';
import { ServerSession } from './ServerSession';

/**
 * Represents a channel session within an SSH server connection
 * 
 * @interface ChannelSession
 */
export interface ChannelSession {
  /**
   * Get the parent server session
   *
   * @returns the server session
   */
  getSession(): ServerSession;

  /**
   * Get the command associated with this channel
   *
   * @returns the command or undefined if no command is set
   */
  getCommand(): Command | undefined;

  /**
   * Set the command for this channel
   *
   * @param command - the command to set
   */
  setCommand(command: Command): void;

  /**
   * Get the environment for this channel
   *
   * @returns the environment
   */
  getEnvironment(): Environment;

  /**
   * Get the channel ID
   *
   * @returns the unique channel identifier
   */
  getChannelId(): number;

  /**
   * Close this channel
   */
  close(): void;

  /**
   * Check if the channel is open
   *
   * @returns true if the channel is open
   */
  isOpen(): boolean;
}
