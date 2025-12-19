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

import { Readable, Writable } from 'stream';
import { ExitCallback } from './ExitCallback';

/**
 * Represents a command, shell or subsystem that can be used to send commands.
 *
 * This command has direct streams, meaning those streams will be provided by the SSH server
 * for the shell to use directly. This interface is suitable for implementing commands in JavaScript,
 * rather than using external processes.
 * 
 * @interface Command
 */
export interface Command {
  /**
   * Set the input stream that can be used by the shell to read input.
   * @param inputStream - the input stream for reading
   */
  setInputStream(inputStream: Readable): void;

  /**
   * Set the output stream that can be used by the shell to write its output.
   * @param outputStream - the output stream for writing
   */
  setOutputStream(outputStream: Writable): void;

  /**
   * Set the error stream that can be used by the shell to write its errors.
   * @param errorStream - the error stream for writing
   */
  setErrorStream(errorStream: Writable): void;

  /**
   * Set the callback that the shell has to call when it is closed.
   * @param callback - the exit callback
   */
  setExitCallback(callback: ExitCallback): void;

  /**
   * Starts the shell command execution.
   */
  start(): void;

  /**
   * Destroys the command and cleans up resources.
   */
  destroy(): void;
}
