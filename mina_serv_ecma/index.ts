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

// Core Authentication Interfaces
export { PasswordAuthenticator } from './PasswordAuthenticator';
export { PublickeyAuthenticator } from './PublickeyAuthenticator';
export { UserAuth } from './UserAuth';

// Command Execution
export { Command } from './Command';
export { CommandFactory } from './CommandFactory';
export { ExitCallback } from './ExitCallback';

// Session Management
export { ServerSession } from './ServerSession';
export { ChannelSession } from './ChannelSession';
export { SessionAware } from './SessionAware';
export { ChannelSessionAware } from './ChannelSessionAware';

// Environment & Signals
export { Environment, EnvironmentVariables, PtyMode } from './Environment';
export { Signal } from './Signal';
export { SignalListener } from './SignalListener';

// Factory & Configuration
export { ServerFactoryManager } from './ServerFactoryManager';

/**
 * MINA SSHD - Pseudo ECMA/TypeScript Conversion
 * 
 * This module provides TypeScript interfaces for building SSH servers
 * using an API similar to Apache MINA SSHD.
 */
