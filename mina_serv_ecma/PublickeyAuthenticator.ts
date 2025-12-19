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

import { ServerSession } from './ServerSession';

/**
 * The PublickeyAuthenticator is used to authenticate users based on public keys.
 * 
 * @interface PublickeyAuthenticator
 */
export interface PublickeyAuthenticator {
  /**
   * Check the validity of a public key for a given user.
   *
   * @param username - the username
   * @param publicKey - the public key bytes or object
   * @param session - the server session
   * @returns a boolean indicating if authentication succeeded or not
   */
  authenticate(username: string, publicKey: string | Buffer, session: ServerSession): boolean;
}
