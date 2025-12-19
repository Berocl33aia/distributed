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

import { SignalListener } from './SignalListener';
import { Signal } from './Signal';

/**
 * Environment variable keys for PTY (Pseudo-Terminal) configuration
 */
export namespace EnvironmentVariables {
  /** Key for the user environment variable */
  export const ENV_USER = 'USER';
  
  /** Key for the lines environment variable. Specifies the number of
   *  lines visible on the client side. ENV_LINES and ENV_COLUMNS make up
   *  the console screen size.
   */
  export const ENV_LINES = 'LINES';
  
  /** Key for the columns environment variable. Specifies the number of
   *  columns visible on the client side. ENV_LINES and ENV_COLUMNS make up
   *  the console screen size.
   */
  export const ENV_COLUMNS = 'COLUMNS';
  
  /** Key for the term environment variable. Describes the terminal or
   *  terminal emulation which is in use.
   */
  export const ENV_TERM = 'TERM';
}

/**
 * PTY Mode enumeration for terminal configuration
 */
export enum PtyMode {
  TTY_OP_END = 0,
  VINTR = 1,
  VQUIT = 2,
  VERASE = 3,
  VKILL = 4,
  VEOF = 5,
  VEOL = 6,
  VEOL2 = 7,
  VSTART = 8,
  VSTOP = 9,
  VSUSP = 10,
  VDSUSP = 11,
  VREPRINT = 12,
  VWERASE = 13,
  VLNEXT = 14,
  VFLUSH = 15,
  VSWTCH = 16,
  VSTATUS = 17,
  VDISCARD = 18,
  IGNPAR = 30,
  PARMRK = 31,
  INPCK = 32,
  ISTRIP = 33,
  INLCR = 34,
  IGNCR = 35,
  ICRNL = 36,
  IUCLC = 37,
  IXON = 38,
  IXANY = 39,
  IXOFF = 40,
  IMAXBEL = 41,
  ISIG = 50,
  ICANON = 51,
  XCASE = 52,
  ECHO = 53,
  ECHOE = 54,
  ECHOK = 55,
  ECHONL = 56,
  NOFLSH = 57,
  TOSTOP = 58,
  IEXTEN = 59,
  ECHOCTL = 60,
  ECHOKE = 61,
  PENDIN = 62,
  OPOST = 70,
  OLCUC = 71,
  ONLCR = 72,
  OCRNL = 73,
  ONOCR = 74,
  ONLRET = 75,
  CS7 = 90,
  CS8 = 91,
  PARENB = 92,
  PARODD = 93,
}

/**
 * Interface providing access to the environment map and allowing the registration
 * of listeners for certain signals.
 * 
 * @interface Environment
 */
export interface Environment {
  /**
   * Retrieve the environment variables map
   * @returns the environment map with variable names as keys and values
   */
  getEnv(): Map<string, string>;

  /**
   * Retrieve the PTY modes configuration
   * @returns the map of PTY modes with mode identifiers and integer values
   */
  getPtyModes(): Map<PtyMode, number>;

  /**
   * Add a qualified listener for specific signals
   * @param listener - the listener to register
   * @param signals - the signals the listener is interested in (variadic)
   */
  addSignalListener(listener: SignalListener, ...signals: Signal[]): void;

  /**
   * Add a qualified listener for a set of signals
   * @param listener - the listener to register
   * @param signals - the set of signals the listener is interested in
   */
  addSignalListenerSet(listener: SignalListener, signals: Set<Signal>): void;

  /**
   * Remove a signal listener
   * @param listener - the listener to remove
   */
  removeSignalListener(listener: SignalListener): void;
}
